---
title: "FAQ"
description: "Reichweite, Hindernisse, WLAN, Speicher, Rechtslage, Privatsphäre: die Fragen, die vor und nach dem Bau eines Empfängers gestellt werden, klar beantwortet."
lang: de
page: faq
updated: 2026-10-23
reviewed: false
next:
  label: "Wer das macht, und wie man Danke sagt"
  href: about
---

## Ist Mithören erlaubt?

Empfangen ist passiv: Ihre Antenne sendet nichts. ADS-B wird gerade deshalb im Klartext ausgesendet, damit jeder es hören kann, und die Daten sind den ganzen Tag auf öffentlichen Karten zu sehen. In den meisten Ländern ist der Empfang von Funksignalen, die unverschlüsselt ausgesendet werden, rechtmäßig; sie mit den Verfolgungsnetzen zu teilen ist das, was Tausende von Menschen ganz offen tun. Wenn Ihr Land besondere Regeln zum Funkempfang hat, prüfen Sie sie; diese Website ist keine Rechtsberatung.

## Wie weit werde ich hören?

So weit Ihre Antenne sehen kann. Das Signal breitet sich geradlinig aus, die Frage ist also, was zwischen Ihrer Antenne und dem Himmel steht. Ein Fenster: ein paar Dutzend Kilometer, mehr auf der Seite, zu der das Fenster zeigt. Ein Balkon oder ein Dachboden unter Ziegeln: oft 150 bis 250 km. Ein Dach mit freiem Horizont: 300 km und mehr, in Richtung von Flugzeugen in Reiseflughöhe. Tief fliegende Flugzeuge in Ihrer Nähe werden von Gebäuden und Bäumen verdeckt, was immer Sie tun. Nichts am Raspberry Pi ändert die Reichweite.

## Meine Karte ist leer

Geben Sie ihr nach dem ersten Start zehn Minuten. Prüfen Sie dann, in dieser Reihenfolge: Der Stick steckt in einem USB-2.0-Anschluss (schwarz, nicht die blauen USB-3.0-Anschlüsse an einem Pi 4); die Antenne ist angeschraubt und steht senkrecht; sie ist in Fensternähe. Wenn der Stick erkannt wird, aber nichts ankommt, ist die Verstärkung vielleicht zu hoch oder zu niedrig: Im Menü können Sie sie Schritt für Schritt verändern, und die Statistiken zeigen die Wirkung.

## Reicht WLAN?

Ja, für den Empfänger und die Feeder: ein paar Kilobyte pro Sekunde. Die Wand auf einem Tablet ist ebenfalls leichtgewichtig. Was WLAN schlecht kann, ist Zuverlässigkeit: Ein Pi im Freien am Rand des Signals wird hin und wieder abfallen. Ein Kabel behebt das; den Pi umzustellen ebenfalls, denn das Antennenkabel kann ein paar Meter lang sein. Die Watchdogs von ZenithBoard verbinden den Pi neu, wenn das Netz zurückkommt.

## Reicht 1 GB Speicher?

Gemessen: ja. Auf dem Pi 3B des Autors, mit laufendem ADS-B Exchange und seinem MLAT, FlightAware, Flightradar24, der Wand, den Statistiken und den Bluesky-Posts, waren noch 656 MB von 1 GB frei. Ein Pi Zero 2 W mit 512 MB betreibt den Empfänger und die Wand; mit den zusätzlichen Feedern wird es eng. Kaufen Sie dafür keinen größeren Pi: Die Reichweite kommt von der Antenne.

## Bremst es mein Internet oder kostet es Datenvolumen?

Nein. Ein Feeder sendet ein paar Kilobyte pro Sekunde, weniger als ein Radiostream. Über einen Monat sind das höchstens ein paar Gigabyte, verteilt auf die Netze, die Sie speisen.

## Wer kann meine Position sehen?

Die Netze, die Sie speisen, brauchen sie zur Berechnung von Reichweiten und MLAT und bewahren sie in Ihrem Konto auf. Sie setzen auf der öffentlichen Karte keine Stecknadel auf Ihr Haus. ZenithBoard zeigt Ihre Position nie auf der Wand oder in einem Post: Die Posts nennen Ihren Ort, nicht Ihre Koordinaten. Ihre Wand und Ihre eigene Karte antworten nur Ihrem Heimnetz, es sei denn, Sie öffnen sie selbst, und ZenithBoard erklärt ein VPN, bevor es einen offenen Port erklärt.

## Was ist MLAT, und warum braucht mein Empfänger andere?

MLAT steht für *Multilateration*. So findet ein Netz ein Flugzeug, das zwar seine Identität sendet, aber **nicht** seine Position, wie ältere Transponder es tun: Sie antworten „ich bin hier“, ohne das „hier“.

Der Trick ist die Zeit. Funk breitet sich mit Lichtgeschwindigkeit aus, etwa 300 Meter in jeder Mikrosekunde. Wenn so ein Flugzeug sendet, hört jeder Empfänger in Reichweite dieselbe Nachricht, aber nicht im selben Augenblick: Der nächste hört sie zuerst, ein weiter entfernter ein paar hundert Mikrosekunden später. Ein Empfänger allein lernt daraus nichts; er hat keine Ahnung, wann die Nachricht das Flugzeug verlassen hat. Aber nehmen Sie vier Empfänger zusammen, jeder mit einer sehr genauen Uhr, und die Unterschiede zwischen ihren Ankunftszeiten lassen nur einen einzigen Ort am Himmel übrig, von dem die Nachricht kommen kann. Dieser Ort wird eingezeichnet, und das Flugzeug erscheint auf der Karte.

![Vier Empfänger am Boden hören dieselbe Nachricht zu vier verschiedenen Zeiten; um jeden ein Kreis, dessen Größe seine Ankunftszeit ist; die vier Kreise schneiden sich nur in einem einzigen Punkt, dort, wo das Flugzeug ist](/img/mlat.svg)

Im Bild: vier Empfänger, vier Ankunftszeiten, vier Kreise. Jeder Kreis bedeutet „das Flugzeug ist so weit von mir entfernt“. Sie treffen sich an einem Ort, und nur an einem. Das ist MLAT, und deshalb bitten die Netze jeden Feeder, zu jeder Nachricht die genaue Ankunftszeit mitzuschicken, nicht nur die Nachricht.

Ihr einzelner Empfänger kann MLAT also nicht allein, und das ist die ehrliche Antwort auf „warum teilen?“: Indem Sie ein Netz speisen, wird Ihre Antenne eine der vier, und Flugzeuge, die nichts über ihre Position sagen, tauchen auf, auf den Karten der Netze und, über die Daten, die sie zurückschicken, auf Ihrer. Es erklärt auch zwei Dinge, die ZenithBoard tut: Es lässt nur **einen** MLAT-Client laufen (die Rechnerei ist schwer für einen Raspberry Pi), und es braucht die genaue Position Ihrer Antenne, denn ein Kreis, der vom falschen Ort aus gezeichnet wird, trifft die anderen am falschen Punkt.

## Zeigt die Wand jedes Flugzeug?

Jedes Flugzeug, das seine Position aussendet und sich innerhalb des gewählten Radius befindet. Flugzeuge mit älteren Transpondern, die keine Position senden, erscheinen nur, wenn das MLAT eines Netzes sie ortet, und nur auf den Karten der Netze. Manche Militär- und Staatsflugzeuge senden überhaupt nicht. Die Wand sagt, was sie hört, nicht mehr.

## Was ist mit den Vereinigten Staaten und 978 MHz?

In den Vereinigten Staaten nutzen viele kleine Flugzeuge 978 MHz (UAT) statt 1090 MHz. Um sie zu hören, braucht es einen zweiten Stick und eine zweite Antenne. ZenithBoard fragt einmal nach Ihrer Region; wenn Sie *Vereinigte Staaten* antworten, bietet es den zusätzlichen Schritt an und beginnt mit imperialen Einheiten. Anderswo wird nichts zu 978 MHz gezeigt.

## Geht es auch ohne Raspberry Pi?

Der Empfänger und die Feeder laufen auf jedem Linux-Computer. ZenithBoard selbst zielt auf Raspberry Pi OS; die Demo der Wand läuft auf jedem Computer mit Python, ganz ohne Hardware, wenn Sie nur sehen möchten, wie es aussieht.

## Ist irgendetwas davon ein Produkt?

Nein. ZenithBoard ist freie Software unter der GPL; der Text dieser Website steht unter einer Creative-Commons-Lizenz; nichts wird verkauft, kein Konto ist nötig, es gibt keine Telemetrie, und diese Website setzt kein Cookie und ruft keinen Drittanbieter auf. Das einzige Geld, das fließt, ist ein Bier, wenn Ihnen danach ist, ganz unten auf jeder Seite.
