---
title: "FAQ"
description: "Bereik, obstakels, wifi, geheugen, wettelijkheid, privacy: de vragen die mensen stellen vóór en na het bouwen van een ontvanger, eerlijk beantwoord."
lang: nl
page: faq
updated: 2026-10-22
reviewed: false
next:
  label: "Wie maakt dit, en hoe je bedankt zegt"
  href: about
---

## Is luisteren legaal?

Ontvangen is passief: je antenne zendt niets uit. ADS-B wordt onversleuteld uitgezonden, juist zodat iedereen het kan horen, en de gegevens staan de hele dag op openbare kaarten. In de meeste landen is het ontvangen van radiosignalen die onversleuteld worden uitgezonden wettig; ze delen met de volgnetwerken is wat duizenden mensen openlijk doen. Als jouw land specifieke regels heeft over radio-ontvangst, controleer ze dan; deze site is geen juridisch advies.

## Hoe ver zal ik horen?

Zo ver als je antenne kan zien. Het signaal reist in een rechte lijn, dus de vraag is wat er tussen je antenne en de lucht staat. Een raam: enkele tientallen kilometers, meer aan de kant waar het raam op uitkijkt. Een balkon of een zolder onder de dakpannen: vaak 150 tot 250 km. Een dak met een vrije horizon: 300 km en verder, richting vliegtuigen op kruishoogte. Lage vliegtuigen dicht bij je worden verborgen door gebouwen en bomen, wat je ook doet. Niets aan de Raspberry Pi verandert het bereik.

## Mijn kaart is leeg

Geef het tien minuten na de eerste start. Controleer dan, in deze volgorde: de stick zit in een USB 2.0-poort (zwart, niet de blauwe USB 3.0-poorten op een Pi 4); de antenne is vastgeschroefd en staat verticaal; ze staat dicht bij een raam. Als de stick wordt gezien maar er niets binnenkomt, is de versterking misschien te hoog of te laag: het menu laat je die stap voor stap verplaatsen, en de statistieken tonen het effect.

## Is wifi genoeg?

Ja voor de ontvanger en de feeders: een paar kilobytes per seconde. De wall op een tablet is ook licht. Waar wifi slecht in is, is betrouwbaarheid: een Pi buiten aan de rand van het signaal zal af en toe wegvallen. Een kabel lost het op; de Pi verplaatsen ook, want de antennekabel mag een paar meter lang zijn. De watchdogs van ZenithBoard verbinden de Pi opnieuw als het netwerk terugkomt.

## Is 1 GB geheugen genoeg?

Gemeten: ja. Op de Pi 3B van de auteur, met ADS-B Exchange en zijn MLAT, FlightAware, Flightradar24, de wall, de statistieken en de Bluesky-posts draaiend, was er nog 656 MB van 1 GB vrij. Een Pi Zero 2 W met 512 MB draait de ontvanger en de wall; voeg de extra feeders toe en het wordt krap. Koop hiervoor geen grotere Pi: bereik komt van de antenne.

## Vertraagt het mijn internet, of kost het data?

Nee. Een feeder stuurt een paar kilobytes per seconde, minder dan een radiostream. Over een maand is dat hooguit een paar gigabytes, verdeeld over de netwerken die je voedt.

## Wie kan mijn positie zien?

De netwerken die je voedt hebben haar nodig om bereik en MLAT te berekenen, en bewaren haar in je account. Ze zetten geen speld op je huis op de openbare kaart. ZenithBoard toont je positie nooit op de wall of in een post: de posts noemen je woonplaats, niet je coördinaten. Je wall en je eigen kaart antwoorden alleen je thuisnetwerk, tenzij je ze zelf openstelt, en ZenithBoard legt een VPN uit voordat het een open poort uitlegt.

## Toont de wall elk vliegtuig?

Elk vliegtuig dat zijn positie uitzendt en binnen de straal is die je hebt gekozen. Vliegtuigen met oudere transponders die geen positie sturen verschijnen alleen als de MLAT van een netwerk ze lokaliseert, en alleen op de kaarten van de netwerken. Sommige militaire en overheidsvliegtuigen zenden helemaal niets uit. De wall zegt wat ze hoort, niet meer.

## Hoe zit het met de Verenigde Staten en 978 MHz?

In de Verenigde Staten gebruiken veel kleine vliegtuigen 978 MHz (UAT) in plaats van 1090 MHz. Om ze te horen heb je een tweede stick en een tweede antenne nodig. ZenithBoard vraagt één keer naar je regio; als je *Verenigde Staten* antwoordt, biedt het de extra stap aan en begint het met imperiale eenheden. Elders wordt niets over 978 MHz getoond.

## Kan ik het draaien zonder Raspberry Pi?

De ontvanger en de feeders draaien op elke Linux-computer. ZenithBoard zelf richt zich op Raspberry Pi OS; de demo van de wall draait op elke computer met Python, helemaal zonder hardware, als je alleen wilt zien hoe het eruitziet.

## Is iets hiervan een product?

Nee. ZenithBoard is vrije software onder de GPL; de tekst van deze site valt onder een Creative Commons-licentie; niets wordt verkocht, er is geen account nodig, er is geen telemetrie en deze site plaatst geen cookie en roept geen derde partij aan. Het enige geld dat van hand wisselt is een biertje, als je daar zin in hebt, onderaan elke pagina.
