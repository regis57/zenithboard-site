---
title: "Der Community beitreten"
description: "Fünf Netze nehmen, was Ihr Empfänger hört, und geben etwas zurück. Was Sie geben, was Sie bekommen, und was zu Hause bleibt."
lang: de
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "ZenithBoard entdecken"
  href: zenithboard
---

## Warum überhaupt teilen

Ihr Empfänger hört ein paar hundert Kilometer um Sie herum. Ein Netz aus Empfängern hört den ganzen Planeten. Jede Karte, die Sie je auf einer Flugverfolgungsseite angesehen haben, besteht aus Menschen wie Ihnen, einem Raspberry Pi auf einer Fensterbank, die senden, was sie hören. Niemandem gehört der Himmel; die Karten gibt es, weil Tausende ihn teilen.

Teilen kostet Sie nichts: ein paar Kilobyte pro Sekunde auf Ihrer Internetleitung, und auf dem Pi nichts Erwähnenswertes. Im Gegenzug öffnen die Netze Ihnen ihre Bezahlfunktionen, und Ihre einzelne Antenne wird Teil von MLAT, das die Flugzeuge findet, die nicht sagen, wo sie sind.

## Die fünf Netze

Jedes will dasselbe, den Strom entschlüsselter Nachrichten aus readsb, und jedes hat sein eigenes kleines Programm, um ihn zu senden. ZenithBoard installiert die, die Sie ankreuzen; Sie können sie auch selbst von der Seite des jeweiligen Netzes installieren.

### [ADS-B Exchange](https://www.adsbexchange.com/)

Das Netz der Community selbst, von Freiwilligen betrieben und dafür bekannt, jedes Flugzeug zu zeigen, das es hört, ohne Filterung auf Wunsch. Zum Einspeisen braucht es kein Konto: Ihr Skript läuft auf dem Pi, und Ihr Feed erscheint auf ihrer Seite mit seinen Statistiken. MLAT-Teilnehmer bekommen die Flugzeuge zurück, die ihre Daten mit orten halfen. ZenithBoard behandelt es als Grundschicht; die anderen kommen optional obendrauf.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

Der Feeder heißt **PiAware**. Im Gegenzug gibt FlightAware den Einspeisenden ein kostenloses **Enterprise**-Konto: acht Monate Flughistorie, unbegrenzte Benachrichtigungen, Karten ohne Werbung und Statistiken darüber, was Ihr Empfänger hört, mit den Flügen, die er mit verfolgen half.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

Der Feeder heißt **fr24feed**. Im Gegenzug wird das kostenlose Konto, das mit Ihrem Empfänger verknüpft ist, auf den **Contributor**-Tarif hochgestuft, sobald Daten ankommen. Ein Sharing-Key pro Feed; wenn Sie auch andere Netze speisen, bittet Flightradar24 Sie, sein eigenes MLAT abzuschalten, was ZenithBoard für Sie erledigt.

### [Plane Finder](https://planefinder.net/sharing/client)

Der Feeder ist der **Plane Finder ADS-B Client**. Im Gegenzug ermöglicht Plane Finder denen, die teilen, die kostenlose Premium-Nutzung seiner Website und Apps.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

Der Feeder heißt **rbfeeder** (AirNav Radar hieß früher RadarBox). Im Gegenzug gibt AirNav Radar denen, die teilen, ein **Business**-Konto. Der Pi erzeugt seinen eigenen Sharing-Key; um die Station mit Ihrem Konto zu verknüpfen, melden Sie sich auf deren Seite an, öffnen die Seite zum Beanspruchen einer Station und fügen diesen Schlüssel ein.

## Was Sie geben

Die Nachrichten selbst: Adresse, Rufzeichen, Position, Höhe, Geschwindigkeit des Flugzeugs, so wie sie offen ausgesendet wurden. Die Ankunftszeit jeder einzelnen, die MLAT braucht. Die Position Ihres Empfängers, damit das Netz weiß, von wo aus die Daten gehört wurden. Nichts aus Ihrem Heimnetz, keine Kamera, kein Mikrofon; die Feeder-Programme sind klein, offen oder dokumentiert, und ZenithBoard zeigt Ihnen, was jedes davon tut.

## Was zu Hause bleibt

Ihre genaue Position wird von den Netzen zur Berechnung von Reichweiten und MLAT verwendet; sie wird auf ihren öffentlichen Karten nicht als Stecknadel auf Ihrem Haus gezeigt, und ZenithBoard zeigt sie nie auf der Wand oder in einem Post. Die Wand auf Ihrem Tablet und Ihre tar1090-Karte sind nur in Ihrem Heimnetz zu sehen, es sei denn, Sie öffnen sie selbst. Alles, was Sie teilen, können Sie auch wieder beenden: Einen Feeder im Menü abzuschalten stellt den vorherigen Zustand wieder her.

## Ein MLAT-Client, nicht fünf

Jedes Netz kann seinen eigenen MLAT-Client auf Ihrem Pi betreiben. Fünf gleichzeitig sind zu viel für einen Raspberry Pi: Der Prozessor verbringt seine Zeit mit Rechnerei, und die Wand ruckelt. ZenithBoard hält einen MLAT-Client am Laufen, den von ADS-B Exchange, und schaltet MLAT bei den anderen ab; `zenithboard status` zählt die laufenden, damit Sie prüfen können, dass es genau einer ist. Wenn Sie die Feeder von Hand installieren, machen Sie es genauso.

## Erste Schritte

In ZenithBoard listet Menü **1 ADS-B** die fünf Netze mit je einem Häkchen; ADS-B Exchange ist immer an. Für FlightAware, Flightradar24, Plane Finder und AirNav Radar legen Sie auf deren Seite ein kostenloses Konto an; das Installationsprogramm zeigt einmal den Link oder den Schlüssel zum Einfügen. Bei ADS-B Exchange fragt ihr Skript nach einem Stationsnamen und Ihrer Position und zeigt den Link, unter dem Sie Ihren Feed sehen. Zehn Minuten später ist Ihr Empfänger auf ihren Karten, und die Statistikseiten zeigen, wie weit Sie hören.
