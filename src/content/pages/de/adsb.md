---
title: "Was ist ADS-B"
description: "Das Signal, das jedes Verkehrsflugzeug aussendet: was es enthält, warum jeder es empfangen kann, und was es Ihnen nicht verrät."
lang: de
page: adsb
updated: 2026-10-22
reviewed: false
next:
  label: "Bauen Sie Ihren Empfänger"
  href: build
---

## Ein Flugzeug, das sagt, wo es ist

ADS-B steht für *Automatic Dependent Surveillance – Broadcast*, also automatische, abhängige Überwachung per Rundsendung. Nehmen wir die Wörter einzeln. *Automatic*: Das Flugzeug sendet von selbst, niemand fragt nach. *Dependent*: Die Position stammt aus der eigenen Satellitennavigation des Flugzeugs, nicht von einem Radar am Boden. *Surveillance*: So verfolgt die Flugsicherung das Flugzeug. *Broadcast*: Es wird an alle gesendet, nicht an einen einzelnen Empfänger.

Etwa einmal pro Sekunde sendet das Flugzeug eine kurze Nachricht auf **1090 MHz**. Die Nachricht enthält seine Identität (eine 24-Bit-Adresse, die dieser Zelle zugeteilt ist, und meist das Rufzeichen des Flugs), seine Position (Breiten- und Längengrad), seine Höhe, seine Geschwindigkeit und seinen Kurs. Andere Nachrichten, die hin und wieder gesendet werden, ergänzen die Kategorie des Flugzeugs, seine Steig- oder Sinkrate und ein paar Kennzeichen.

Seit 2020 müssen die meisten Flugzeuge, die in Europa und in den Vereinigten Staaten im kontrollierten Luftraum fliegen, ADS-B aussenden. Verkehrsflugzeuge tun es, Geschäftsflugzeuge tun es, viele Leichtflugzeuge tun es. Manche Militär- und Staatsflugzeuge tun es nicht, oder ohne ihre Position.

## Warum Sie mithören können

Die Nachrichten sind weder verschlüsselt noch signiert. Das ist Absicht: Der ganze Sinn ist, dass jedes Flugzeug und jede Bodenstation in der Umgebung jedes andere Flugzeug hören kann. Das Format ist öffentlich, festgelegt in den Normen, nach denen die Luftfahrt arbeitet, und die Frequenz ist überall auf der Welt dieselbe.

Ein Empfänger ist also nur ein Radio, das auf 1090 MHz eingestellt ist, und ein Programm, das die Impulse in Text verwandelt. Vor zwanzig Jahren kostete dieses Radio Tausende. Heute erledigt das ein USB-Stick, der für digitales Fernsehen verkauft wird, etwa so groß wie ein Daumen, weil man seinem Chip sagen kann, er solle auf jede beliebige Frequenz hören und das rohe Signal an einen Computer weiterreichen. Dieser Stick heißt RTL-SDR, nach dem Chip darin (RTL2832U) und dem Prinzip (*software-defined radio*, softwaredefiniertes Radio: Der Computer übernimmt die Entschlüsselung).

Das Programm, das auf einem Raspberry Pi entschlüsselt, ist meist **readsb**, ein Nachfolger des älteren *dump1090*. Es hört auf den Stick, entschlüsselt die Nachrichten und bietet das Ergebnis allem an, was es haben will: einer Karte in Ihrem Browser (**tar1090**), einem Feeder für ein Verfolgungsnetz oder der Wand von ZenithBoard.

## In den Vereinigten Staaten: auch 978 MHz

Die Vereinigten Staaten nutzen zusätzlich eine zweite Frequenz, **978 MHz**, genannt UAT (*Universal Access Transceiver*), vor allem für kleine, tief fliegende Flugzeuge. Um sie zu hören, braucht es einen zweiten USB-Stick und eine zweite Antenne. Überall sonst gibt es nur 1090 MHz. ZenithBoard fragt einmal nach Ihrer Region und erwähnt 978 MHz nur, wenn Sie *Vereinigte Staaten* antworten.

## Wie weit Sie hören

Das Signal breitet sich geradlinig aus, wie Licht. Ein Flugzeug in Reiseflughöhe ist aus sehr großer Entfernung sichtbar, solange nichts zwischen ihm und Ihrer Antenne steht. Von einem Fenster mit Blick auf einen Hügel hören Sie vielleicht ein paar Dutzend Kilometer weit; von einem Dach mit freiem Horizont sind 250 km und mehr üblich, und die Flugzeuge am Rand sind die in 11.000 Metern Höhe. Tief fliegende Flugzeuge in Ihrer Nähe werden von jedem Gebäude und jedem Baum verdeckt. Die Reichweite hängt von der Antenne und ihrer Sicht ab, nicht vom Computer.

## Was ADS-B Ihnen nicht verrät

Die Nachricht sagt, wo das Flugzeug ist, nicht, wohin es fliegt. Der Abflugort, das Ziel, der Name der Fluggesellschaft und das Foto des Flugzeugs kommen von anderswo: aus öffentlichen Registern und aus Datenbanken, in denen die Verfolgungsnetze und ZenithBoard anhand der Adresse des Flugzeugs nachschlagen. ADS-B sagt auch nichts darüber, wer an Bord ist, und nichts über Sie: Empfangen ist passiv, Ihr Empfänger sendet nichts.

## MLAT: die hören, die nichts sagen

Manche Flugzeuge senden ihre Identität, aber nicht ihre Position (ältere Transponder tun das). Wenn vier oder mehr Empfänger dieselbe Nachricht hören, ergeben die winzigen Unterschiede in der Ankunftszeit die Position, so wie man einen Blitz anhand seines Donners ortet. Das heißt **MLAT**, *multilateration* (Multilateration). Ihr einzelner Empfänger kann das nicht allein; indem er ein Netz speist, wird er einer der vier. Das ist einer der echten Gründe, zu teilen.
