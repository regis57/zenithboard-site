---
title: "Sluit je aan bij de community"
description: "Vijf netwerken nemen wat je ontvanger hoort, en geven iets terug. Wat je geeft, wat je krijgt, en wat thuis blijft."
lang: nl
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "Ontdek ZenithBoard"
  href: zenithboard
---

## Waarom überhaupt delen

Je ontvanger hoort een paar honderd kilometer om je heen. Een netwerk van ontvangers hoort de hele planeet. Elke kaart die je ooit op een vluchtvolgsite hebt bekeken is gemaakt door mensen zoals jij, een Raspberry Pi op een vensterbank, die doorsturen wat ze horen. Niemand bezit de lucht; de kaarten bestaan omdat duizenden mensen haar delen.

Delen kost je niets: een paar kilobytes per seconde op je internetlijn, en op de Pi niets noemenswaardigs. In ruil daarvoor stellen de netwerken hun betaalde functies voor je open, en wordt je ene antenne onderdeel van MLAT, dat de vliegtuigen vindt die niet zeggen waar ze zijn.

## De vijf netwerken

Elk netwerk wil hetzelfde, de stroom gedecodeerde berichten uit readsb, en elk heeft zijn eigen kleine programma om die te versturen. ZenithBoard installeert de netwerken die je aanvinkt; je kunt ze ook zelf installeren vanaf de pagina van elk netwerk.

### [ADS-B Exchange](https://www.adsbexchange.com/)

Het eigen netwerk van de community, gerund door vrijwilligers en bekend omdat het elk vliegtuig toont dat het hoort, zonder filtering op verzoek. Voeden vereist geen account: hun script draait op de Pi, en je feed verschijnt met zijn statistieken op hun site. MLAT-deelnemers krijgen de vliegtuigen terug die hun gegevens hielpen lokaliseren. ZenithBoard behandelt het als de basislaag; de andere zijn optioneel daarbovenop.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

De feeder heet **PiAware**. In ruil daarvoor geeft FlightAware feeders een gratis **Enterprise**-account: acht maanden vluchtgeschiedenis, onbeperkte meldingen, kaarten zonder advertenties, en statistieken over wat je ontvanger hoort, met de vluchten die hij hielp volgen.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

De feeder heet **fr24feed**. In ruil daarvoor wordt het gratis account dat aan je ontvanger is gekoppeld opgewaardeerd naar het **Contributor**-abonnement zodra er gegevens binnenkomen. Eén deelsleutel per feed; als je ook andere netwerken voedt, vraagt Flightradar24 je om zijn eigen MLAT uit te zetten, wat ZenithBoard voor je doet.

### [Plane Finder](https://planefinder.net/sharing/client)

De feeder is de **Plane Finder ADS-B Client**. In ruil daarvoor regelt Plane Finder gratis premiumgebruik van zijn website en apps voor wie deelt.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

De feeder heet **rbfeeder** (AirNav Radar heette vroeger RadarBox). In ruil daarvoor geeft AirNav Radar wie deelt een **Business**-account. De Pi maakt zelf zijn deelsleutel aan; om het station aan je account te koppelen, log je in op hun site, open je de registratiepagina van het station en plak je die sleutel.

## Wat je geeft

De berichten zelf: het adres van het vliegtuig, de roepnaam, de positie, de hoogte, de snelheid, zoals ze in het openbaar zijn uitgezonden. Het tijdstip waarop elk bericht aankwam, wat MLAT nodig heeft. De positie van je ontvanger, zodat het netwerk weet waarvandaan de gegevens zijn gehoord. Niets van je thuisnetwerk, geen camera, geen microfoon; de feederprogramma's zijn klein, open of gedocumenteerd, en ZenithBoard laat je zien wat elk ervan doet.

## Wat thuis blijft

Je exacte positie wordt door de netwerken gebruikt om bereik en MLAT te berekenen; ze wordt niet als een speld op je huis op hun openbare kaarten getoond, en ZenithBoard toont haar nooit op de wall of in een post. De wall op je tablet en je tar1090-kaart staan alleen op je thuisnetwerk, tenzij je ze zelf openstelt. Alles wat je deelt, kun je stoppen met delen: een feeder uitzetten in het menu zet alles terug zoals het was.

## Eén MLAT-client, niet vijf

Elk netwerk kan zijn eigen MLAT-client op je Pi draaien. Vijf tegelijk is te veel voor een Raspberry Pi: de processor besteedt zijn tijd aan rekenwerk en de wall hapert. ZenithBoard houdt één MLAT-client draaiend, die van ADS-B Exchange, en zet MLAT in de andere uit; `zenithboard status` telt de draaiende clients zodat je kunt controleren dat er precies één is. Als je de feeders met de hand installeert, doe dan hetzelfde.

## Aan de slag

In ZenithBoard toont menu **1 ADS-B** de vijf netwerken met elk een vinkje; ADS-B Exchange staat altijd aan. Voor FlightAware, Flightradar24, Plane Finder en AirNav Radar maak je een gratis account aan op hun site; het installatieprogramma toont de link of de sleutel om te plakken, één keer. Voor ADS-B Exchange vraagt hun script een stationsnaam en je positie, en toont het de link om je feed te bekijken. Tien minuten later staat je ontvanger op hun kaarten, en laten de statistiekpagina's zien hoe ver je hoort.
