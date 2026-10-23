---
title: "Einen Empfänger bauen"
description: "Ein Raspberry Pi, ein USB-Radiostick, eine Antenne: die Teileliste mit Preisen, wo die Antenne hingehört, und die Software in einem Befehl."
lang: de
page: build
updated: 2026-10-23
reviewed: false
next:
  label: "Dann der Community beitreten"
  href: join
---

## Die Teile

Fünf Dinge, und drei davon besitzen Sie vielleicht schon.

| Teil | Worauf Sie achten sollten | Etwa |
|---|---|---|
| ![](/img/part-pi.svg) Raspberry Pi | Ein **3B, 3B+ oder 4** ist ideal: 1 GB Speicher reicht für den Empfänger, die Feeder und die Wand, gemessen auf dem Pi 3B des Autors. Ein **Zero 2 W** (512 MB, gelistet für 15 US$) betreibt den Empfänger und die Wand, ohne die zusätzlichen Feeder. | 15–60 € |
| ![](/img/part-stick.svg) USB-Radiostick | Ein **RTL-SDR**-Dongle. Die Modelle von RTL-SDR Blog sind die Referenz, etwa 35–40 US$. Ein Stick, der für ADS-B gebaut ist, mit eingebautem 1090-MHz-Filter (zum Beispiel der Pro Stick von FlightAware), hört in der Stadt weiter. | 30–45 € |
| ![](/img/part-antenna.svg) Antenne | Eine kleine Antenne, abgestimmt auf **1090 MHz**. Die, die manchen Sticks beiliegt, funktioniert am Fenster; eine eigene ADS-B-Antenne, einen halben Meter lang, hört auf einem Dach oder Balkon viel weiter. | 10–40 € |
| ![](/img/part-sdcard.svg) Micro-SD-Karte | 16 GB oder mehr, von einer bekannten Marke. | 8–12 € |
| ![](/img/part-psu.svg) Netzteil | Das offizielle für Ihren Pi. Ein Handy-Ladegerät reicht oft nicht, und der Pi sagt Ihnen das mit einem Blitzsymbol. | 8–12 € |

Gesamt: **etwa 60 bis 120 €**, einmalig. Preise ändern sich; das sind die Größenordnungen, die im Oktober 2026 auf den Seiten der Hersteller zu sehen waren. Kaufen Sie die Antenne zuletzt: Fangen Sie mit dem an, was beim Stick dabei ist, schauen Sie, was Sie hören, und entscheiden Sie dann.

Ein altes Tablet oder irgendein Bildschirm mit Browser, für die Wand, ist optional und liegt wahrscheinlich schon in einer Schublade.

## Wo die Antenne hingehört

Das ist das Einzige, was Ihre Reichweite verändert, also verdient es eine Minute. Das Signal breitet sich geradlinig aus. Die Antenne will den Himmel, nicht das Zimmer: Ein Fenster ist das Minimum, ein Balkon ist gut, ein Dach oder ein Dachboden unter Ziegeln ist am besten. Senkrecht, weg von Metall, so hoch, wie das Kabel es erlaubt. Zwei Meter höher schlagen oft einen teureren Stick.

Der Pi selbst kann drinnen bleiben; USB-Kabel bis etwa drei Meter sind in Ordnung. Wenn der Stick im Sommer heiß wird, ist das normal.

## Die Software, auf zwei Arten

### Der klassische Weg: readsb und tar1090

Der Decoder ist [**readsb**](https://github.com/wiedehopf/readsb); die Karte in Ihrem Browser ist [**tar1090**](https://github.com/wiedehopf/tar1090); beides ist freie Software vom selben Autor, mit Installationsskripten, die auf einem frischen Raspberry Pi OS funktionieren. Jeden Feeder fügen Sie dann von Hand hinzu, von der eigenen Seite des jeweiligen Netzes. Das ist der richtige Weg, wenn Sie jedes Teil verstehen möchten.

### Der Alles-in-einem-Weg: ZenithBoard

ZenithBoard installiert readsb, die Feeder Ihrer Wahl und die Wand aus einem einzigen Menü, stellt die wenigen Fragen einmal (Ihre Region, Ihre Einheiten, wo Ihre Antenne steht) und lässt Sie jeden Teil später hinzufügen oder entfernen. Es hält außerdem nur einen einzigen MLAT-Client am Laufen, weil mehrere gleichzeitig einen Pi überlasten.

Bereiten Sie die Karte mit dem Raspberry Pi Imager vor (Raspberry Pi OS Lite, 64-Bit, mit aktiviertem SSH und eingetragenem WLAN), starten Sie den Pi, dann von Ihrem Computer aus:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Rechnen Sie beim ersten Mal mit etwa einer Stunde, die meiste Zeit davon Warten auf Downloads. Wenn es fertig ist, zeigt das Menü die Adresse der Wand an, `http://<the Pi's address>:8080/`; öffnen Sie sie im Browser des Tablets, und die Wand ist da. Ihre eigene Karte, tar1090, finden Sie unter `http://<the Pi's address>/tar1090/`.

## Ihre Position

Der Decoder, MLAT und die Entfernungen auf der Wand müssen wissen, wo die Antenne steht: Breitengrad, Längengrad, Höhe. Klicken Sie mit der rechten Maustaste auf Ihr Haus auf einer Karte, um die Koordinaten zu kopieren. Diese Position bleibt auf Ihrem Pi und in den Einstellungen der Feeder; ZenithBoard zeigt sie weder auf der Wand noch in einem Post, und die Netze veröffentlichen sie ebenfalls nicht. Die Reichweite wird von ihr aus gemessen, das ist alles.

## Was schiefgehen kann

Der Stick wird nicht gefunden: Nehmen Sie einen USB-2.0-Anschluss, nicht die blauen USB-3.0-Anschlüsse an einem Pi 4, und ein kurzes Kabel. Die Karte ist leer: Geben Sie ihr zehn Minuten, dann prüfen Sie, ob die Antenne senkrecht steht und in Fensternähe ist. Der Pi zeigt ein Blitzsymbol: Das Netzteil ist zu schwach. Das WLAN bricht ab: ein Kabel, oder stellen Sie den Pi um; der Empfänger selbst braucht sehr wenig Bandbreite. Den Rest hat die FAQ.
