---
title: "Wat is ADS-B"
description: "Het signaal dat elk verkeersvliegtuig uitzendt, wat erin zit, waarom iedereen het kan ontvangen, en wat het je niet vertelt."
lang: nl
page: adsb
updated: 2026-10-22
reviewed: false
next:
  label: "Bouw je ontvanger"
  href: build
---

## Een vliegtuig dat zegt waar het is

ADS-B staat voor *Automatic Dependent Surveillance – Broadcast*. Neem de woorden één voor één. *Automatic* (automatisch): het vliegtuig zendt het uit zichzelf, niemand vraagt erom. *Dependent* (afhankelijk): de positie komt van de eigen satellietnavigatie van het vliegtuig, niet van een radar op de grond. *Surveillance* (toezicht): zo volgt de luchtverkeersleiding het vliegtuig. *Broadcast* (uitzending): het wordt naar iedereen gestuurd, niet naar één luisteraar.

Ongeveer één keer per seconde zendt het vliegtuig een kort bericht uit op **1090 MHz**. Het bericht bevat zijn identiteit (een 24-bits adres dat aan dat toestel is toegekend, en meestal de roepnaam van de vlucht), zijn positie (breedte- en lengtegraad), zijn hoogte, zijn snelheid en zijn koers. Andere berichten, die af en toe worden gestuurd, voegen de categorie van het vliegtuig toe, zijn stijg- of daalsnelheid en een paar vlaggen.

Sinds 2020 zijn de meeste vliegtuigen die in gecontroleerd luchtruim vliegen in Europa en in de Verenigde Staten verplicht ADS-B uit te zenden. Verkeersvliegtuigen doen het, zakenjets doen het, veel kleine vliegtuigen doen het. Sommige militaire en overheidsvliegtuigen doen het niet, of doen het zonder hun positie.

## Waarom je kunt luisteren

De berichten zijn niet versleuteld en niet ondertekend. Dat is zo bedoeld: het hele idee is dat elk vliegtuig en elk grondstation in de omgeving elk ander vliegtuig kan horen. Het formaat is openbaar, vastgelegd in de normen waarop de luchtvaart draait, en de frequentie is overal ter wereld dezelfde.

Een ontvanger is dus gewoon een radio afgestemd op 1090 MHz en een programma dat de pulsen omzet in tekst. Twintig jaar geleden kostte die radio duizenden euro's. Vandaag doet een USB-stick die voor digitale televisie wordt verkocht, ongeveer zo groot als een duim, het werk, omdat zijn chip kan worden opgedragen naar elke frequentie te luisteren en het ruwe signaal aan een computer door te geven. Die stick heet een RTL-SDR, naar de chip erin (RTL2832U) en het idee (*software-defined radio*: de computer doet het decoderen).

Het programma dat het decoderen doet op een Raspberry Pi is meestal **readsb**, een opvolger van het oudere *dump1090*. Het luistert naar de stick, decodeert de berichten en biedt het resultaat aan alles wat het wil hebben: een kaart in je browser (**tar1090**), een feeder voor een volgnetwerk, of de wall van ZenithBoard.

## In de Verenigde Staten: ook 978 MHz

De Verenigde Staten gebruiken ook een tweede frequentie, **978 MHz**, UAT genoemd (*Universal Access Transceiver*), vooral voor kleine vliegtuigen die laag vliegen. Om die te horen heb je een tweede USB-stick en een tweede antenne nodig. Overal elders is 1090 MHz alles wat er is. ZenithBoard vraagt één keer naar je regio en noemt 978 MHz alleen als je *Verenigde Staten* antwoordt.

## Hoe ver je hoort

Het signaal reist in een rechte lijn, net als licht. Een vliegtuig op kruishoogte is van heel ver zichtbaar, zolang er niets tussen het vliegtuig en je antenne staat. Vanaf een raam dat op een heuvel uitkijkt hoor je misschien enkele tientallen kilometers; vanaf een dak met een vrije horizon is 250 km en meer heel gewoon, en de vliegtuigen aan de rand zijn die op 11.000 meter. Lage vliegtuigen dicht bij je worden verborgen door elk gebouw en elke boom. Bereik gaat over de antenne en haar uitzicht, niet over de computer.

## Wat ADS-B je niet vertelt

Het bericht zegt waar het vliegtuig is, niet waar het heen gaat. De herkomst, de bestemming, de naam van de maatschappij en de foto van het vliegtuig komen van elders: uit openbare registers en uit databanken die de volgnetwerken en ZenithBoard raadplegen op het adres van het vliegtuig. ADS-B zegt ook niets over wie er aan boord is, en niets over jou: ontvangen is passief, je ontvanger zendt niets uit.

## MLAT: horen wie het niet zegt

Sommige vliegtuigen zenden hun identiteit uit maar niet hun positie (oudere transponders doen dit). Als vier of meer ontvangers hetzelfde bericht horen, geven de minieme verschillen in aankomsttijd de positie, zoals je bliksem lokaliseert aan de hand van de donder. Dit heet **MLAT**, *multilateration* (multilateratie). Jouw ontvanger alleen kan dat niet; door een netwerk te voeden wordt hij een van de vier. Dit is een van de echte redenen om te delen.
