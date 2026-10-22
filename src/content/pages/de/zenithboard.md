---
title: "ZenithBoard"
description: "Die Wand aus Punkten oder die Fallblattanzeige vom Flughafen auf einem alten Tablet, die Web-Konsole, die Posts auf Bluesky. Kostenlos, offen, ein Menü für alles."
lang: de
page: zenithboard
updated: 2026-10-23
reviewed: false
next:
  label: "Installieren: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

## In einem Satz

ZenithBoard macht aus einem Raspberry Pi und einem USB-Radiostick einen ADS-B-Empfänger, der die vier Netze speist, und zeigt die Flugzeuge direkt über Ihrem Haus auf einem alten Tablet, als leuchtende Punktmatrix-Anzeige oder als Fallblattanzeige wie am Flughafen. Es ist freie Software unter der GPL und läuft jeden Tag auf dem Pi 3B des Autors, im Freien, über WLAN, im Département Moselle.

![Die Wand: ZENITHBOARD in leuchtenden Punkten, und ein Flugzeug](/img/banner-dots.webp)

## Die Wand

Die Wand ist eine Webseite, die der Pi in Ihrem Heimnetz bereitstellt. Öffnen Sie sie auf irgendeinem Tablet oder Bildschirm mit Browser, legen Sie sie auf den Startbildschirm, und sie bleibt an. Sie läuft durch jedes Flugzeug innerhalb des Radius, den Sie wählen, von 1 bis 50 km (oder Meilen): Rufzeichen, Flugzeugtyp, Höhe, Geschwindigkeit, woher der Flug kommt und wohin er geht, Entfernung und Richtung von Ihnen aus. Zwei Looks: ein Raster aus **128 mal 80 Punkten**, wie eine alte Bahnhofsanzeige, oder eine **Fallblattanzeige**, deren Buchstaben umklappen, wenn das nächste Flugzeug kommt. Fünf Farben: Bernstein, Grün, Rot, Weiß, Türkis; eine auf einmal, denn der Sinn ist eine leuchtende Anzeige, nicht der Screenshot einer Karte.

![Der Fallblatt-Look: ZENITHBOARD, OVERHEAD NOW](/img/banner-flap.webp)

Neben dem Text eine Silhouette des Flugzeugs aus Punkten, zwei kleine Flaggen (wo das Flugzeug registriert ist, wo es gebaut wurde) und, wenn Sie möchten, sein Foto von Planespotters, mit dem Namen des Fotografen. Kein Logo einer Fluggesellschaft, kein Logo eines Herstellers: Das sind geschützte Marken, deshalb stehen Flaggen an ihrer Stelle. Routen und Modelle stammen aus öffentlichen Abfragen; die Wand sagt, was sie weiß, und lässt die Zeile leer, wenn sie es nicht weiß.

Sie können die Wand ganz ohne Hardware ausprobieren: Das Repository enthält eine Demo mit erfundenen Fluggesellschaften und einem Beispiel für alles, vom A380 bis zum Hubschrauber, die auf jedem Computer mit Python läuft.

## Der Empfänger und die vier Netze

ZenithBoard installiert **readsb** als Decoder, mit seiner Karte **tar1090**, und die Feeder, die Sie ankreuzen: ADS-B Exchange immer, FlightAware, Flightradar24 und Plane Finder, wenn Sie sie wollen. Es hält genau einen MLAT-Client am Laufen und zählt sie in `zenithboard status`. Alles ist standardmäßig aus und umkehrbar: Jedes *an* hat ein *aus*, das den vorherigen Zustand wiederherstellt, vor allem Zerstörerischen wird eine Sicherung angelegt, und das Menü hat immer einen Ausweg.

Die Verstärkung des Empfängers lässt sich über das Menü oder die Konsole einstellen, Schritt für Schritt, mit den Statistiken, um zu sehen, ob es geholfen hat. Optionale Statistiken halten einen Monat lang Nachrichten pro Stunde, Reichweite und Flugzeuge pro Tag fest; **graphs1090** zeichnet Jahre davon.

## Die Konsole

Seit Version 0.39 zeigt `http://<the Pi>:8080/console` die Einstellungen im Look der Wand: eine Übersicht des Pi (Laufzeit, Temperatur, Speicher, jeder Dienst), die Wand, der Empfänger, Bluesky, die Watchdogs, Updates. Ein Bereich auf einmal, eine Seitenleiste am Computer, Reiter auf dem Handy. Jede Änderung führt denselben Befehl aus, den auch das Menü ausführen würde, und zeigt Ihnen, was er ausgegeben hat. Die Konsole gibt es in einundzwanzig Sprachen; diese Website nutzt dieselbe Liste und dieselben Flaggen.

![Die Konsole: der Bereich Empfänger, in Grün](/img/banner-radar.webp)

## Bluesky

Optional, standardmäßig aus. Eingeschaltet postet der Pi die Flugzeuge, die einen Post wert sind, auf Bluesky: einen militärischen Tanker, einen Beluga, einen Typ, den er seit einem Monat nicht gesehen hat, das entfernteste des Monats. Jeder Post ist ein Bild der Wand neben einer Karte mit der Flugspur des Flugzeugs, beides vom Pi selbst gezeichnet, mit einem kurzen Text: der Flug, der Typ, die Route, die Höhe und der Name Ihres Ortes, nie Ihre Position. Ihr Bluesky-App-Passwort bleibt auf dem Pi, in einer Datei, die nur der Dienst lesen kann; es taucht nie in einem Protokoll oder auf der Wand auf.

## Gebaut, damit nichts schiefgeht

ZenithBoard läuft als root, lauscht in Ihrem Netz und installiert Software anderer Leute, deshalb ist es so gebaut, dass möglichst wenig schiefgehen kann. Die Wand antwortet nur Ihrem Heimnetz und gibt allen anderen eine 403, weitergeleiteter Port hin oder her; um sie von außen zu sehen, erklärt das Menü ein VPN statt eines offenen Ports. Jeder Dienst läuft in einer systemd-Sandbox mit nur dem, was seine Aufgabe braucht. Paketsignaturen werden nie abgeschaltet. Die Sicherheitskorrekturen von Debian können sich täglich selbst installieren. Zwei Watchdogs starten neu, was einfriert, und ein *health*-Befehl sagt Ihnen auf einem Bildschirm, ob alles in Ordnung ist.

## Was es braucht

Einen Raspberry Pi 3B oder neuer mit 1 GB Speicher, gemessen: Auf dem Pi 3B des Autors, mit ADS-B Exchange und seinem MLAT, FlightAware, Flightradar24, der Wand, den Statistiken und den Bluesky-Posts, waren noch 656 MB Speicher frei. Ein Pi Zero 2 W betreibt den Empfänger und die Wand, ohne die zusätzlichen Feeder. Raspberry Pi OS Lite, 64-Bit. Eine Stunde beim ersten Mal; danach `sudo zenithboard update`, wenn eine neue Version erschienen ist.
