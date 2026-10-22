---
title: "ZenithBoard — der Himmel über Ihnen, live"
description: "Der Himmel über Ihnen, von Ihnen entschlüsselt, mit der Welt geteilt."
lang: de
page: home
updated: 2026-10-22
reviewed: false
next:
  label: "Hier anfangen: Was ist ADS-B"
  href: adsb
---

## Worum es geht

Jedes Verkehrsflugzeug über Ihrem Haus redet. Etwa einmal pro Sekunde sendet es, wer es ist, wo es ist, wie hoch und wie schnell. Dieses Signal heißt ADS-B, es ist nicht verschlüsselt, und jeder mit einem kleinen Radio kann es mithören.

Diese Seite erklärt drei Dinge, der Reihe nach: was dieses Signal ist, wie man mit einem Raspberry Pi und ein paar Teilen einen Empfänger dafür baut, und wie man sich den Tausenden von Menschen anschließt, die das, was ihr Empfänger hört, mit den Flugverfolgungsnetzen der Welt teilen. Der vierte Teil ist ZenithBoard: ein kostenloses Programm, das all das in einem Rutsch installiert und die Flugzeuge über Ihnen auf einem alten Tablet zeigt, in leuchtenden Punkten oder auf einer Fallblattanzeige wie am Flughafen.

## Was es kostet, was es braucht, was es bringt

**Es kostet** etwa 60 bis 120 €, je nach gewähltem Raspberry Pi und der Antenne. Danach nichts mehr: kein Abo, kein Konto, für das Sie zahlen müssten.

**Es braucht** beim ersten Mal etwa eine Stunde, einen Raspberry Pi, eine Steckdose und Ihr heimisches WLAN. Sie müssen nicht programmieren können. Sie tippen ein paar Befehle ein, die Ihnen vorgegeben werden.

**Es bringt** die Flugzeuge um Sie herum, auf Ihrem eigenen Bildschirm, ohne jemanden dazwischen. Wenn Sie Ihre Daten teilen, geben die Verfolgungsnetze etwas zurück: FlightAware schaltet ein kostenloses Enterprise-Konto frei, Flightradar24 einen kostenlosen Contributor-Tarif, Plane Finder die kostenlose Premium-Nutzung seiner Website und Apps, und ADS-B Exchange zeigt Ihren Feed auf seiner Seite. Und wenn Sie das Teilen in ZenithBoard einschalten, werden die Flugzeuge, die Ihren Himmel kreuzen, auf Bluesky gepostet, als Bild Ihrer Wand.

## Die Grenzen, klar gesagt

Ein Empfänger hört nur, was er sehen kann: Das Signal breitet sich geradlinig aus, ein Fenster mit Blick auf einen Hügel hört also weniger als ein Dach. Ein Raspberry Pi mit 1 GB Speicher reicht für alles, gemessen auf dem Pi 3B des Autors. WLAN funktioniert; ein Kabel funktioniert besser. Hier wird nichts verkauft; das einzige Geld, das fließt, ist ein Bier, wenn Ihnen danach ist, ganz unten auf der Seite.
