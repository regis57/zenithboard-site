---
title: "Bouw een ontvanger"
description: "Een Raspberry Pi, een USB-radiostick, een antenne: de onderdelenlijst met prijzen, waar je de antenne zet, en de software in één opdracht."
lang: nl
page: build
updated: 2026-10-23
reviewed: false
next:
  label: "Sluit je daarna aan bij de community"
  href: join
---

## De onderdelen

Vijf dingen, en drie ervan heb je misschien al.

| Onderdeel | Waar je op let | Ongeveer |
|---|---|---|
| ![](/img/part-pi.svg) Raspberry Pi | Een **3B, 3B+ of 4** is ideaal: 1 GB geheugen is genoeg voor de ontvanger, de feeders en de wall, gemeten op de Pi 3B van de auteur. Een **Zero 2 W** (512 MB, adviesprijs 15 US$) draait de ontvanger en de wall, zonder de extra feeders. | 15–60 € |
| ![](/img/part-stick.svg) USB-radiostick | Een **RTL-SDR**-dongle. De modellen van RTL-SDR Blog zijn de referentie, rond de 35–40 US$. Een stick die voor ADS-B is gemaakt, met een ingebouwd 1090 MHz-filter (de Pro Stick van FlightAware, bijvoorbeeld), hoort verder in een stad. | 30–45 € |
| ![](/img/part-antenna.svg) Antenne | Een kleine antenne afgestemd op **1090 MHz**. De antenne die bij sommige sticks zit werkt aan een raam; een speciale ADS-B-antenne, een halve meter lang, hoort veel verder op een dak of een balkon. | 10–40 € |
| ![](/img/part-sdcard.svg) Micro-SD-kaart | 16 GB of meer, van een bekend merk. | 8–12 € |
| ![](/img/part-psu.svg) Voeding | De officiële voeding voor je Pi. Een telefoonlader is vaak niet genoeg en de Pi laat je dat weten met een bliksempictogram. | 8–12 € |

Totaal: **ongeveer 60 tot 120 €**, eenmalig. Prijzen schommelen; dit zijn de ordes van grootte die in oktober 2026 op de sites van de fabrikanten te zien waren. Koop de antenne als laatste: begin met wat er bij de stick zit, kijk wat je hoort, en beslis dan.

Een oude tablet of een ander scherm met een browser, voor de wall, is optioneel en ligt waarschijnlijk al in een la.

## Waar je de antenne zet

Dit is het enige dat je bereik verandert, dus het verdient een minuut aandacht. Het signaal gaat in een rechte lijn. De antenne wil de lucht, niet de kamer: een raam is het minimum, een balkon is goed, een dak of een zolder onder de dakpannen is het beste. Verticaal, weg van metaal, zo hoog als de kabel toelaat. Twee meter hoger wint vaak van een duurdere stick.

De Pi zelf kan binnen blijven; USB-kabels tot ongeveer drie meter zijn prima. Als de stick in de zomer warm wordt, is dat normaal.

## De software, op twee manieren

### De klassieke manier: readsb en tar1090

De decoder is [**readsb**](https://github.com/wiedehopf/readsb); de kaart in je browser is [**tar1090**](https://github.com/wiedehopf/tar1090); beide zijn vrije software van dezelfde auteur, met installatiescripts die werken op een vers Raspberry Pi OS. Daarna voeg je elke feeder met de hand toe, vanaf de eigen pagina van elk netwerk. Dit is de weg als je graag elk onderdeel wilt begrijpen.

### De alles-in-één-manier: ZenithBoard

ZenithBoard installeert readsb, de feeders die je kiest en de wall vanuit één menu, stelt de paar vragen één keer (je regio, je eenheden, waar je antenne staat), en laat je later elk onderdeel toevoegen of verwijderen. Het houdt ook maar één MLAT-client draaiend, omdat meerdere tegelijk een Pi overbelasten.

Bereid de kaart voor met Raspberry Pi Imager (Raspberry Pi OS Lite, 64-bits, met SSH ingeschakeld en je wifi ingevuld), start de Pi, en dan vanaf je computer:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Reken op ongeveer een uur de eerste keer, grotendeels wachten op downloads. Als het klaar is, toont het menu het adres van de wall, `http://<the Pi's address>:8080/`; open het in de browser van de tablet en de wall is er. Je eigen kaart, tar1090, staat op `http://<the Pi's address>/tar1090/`.

## Je positie

De decoder, MLAT en de afstanden op de wall moeten weten waar de antenne staat: breedtegraad, lengtegraad, hoogte. Klik met de rechtermuisknop op je huis op een kaart om de coördinaten te kopiëren. Deze positie blijft op je Pi en in de instellingen van de feeders; ZenithBoard toont haar nooit op de wall of in een post, en de netwerken publiceren haar ook niet. Het bereik wordt ervandaan gemeten, dat is alles.

## Wat er mis kan gaan

De stick wordt niet gevonden: gebruik een USB 2.0-poort, niet de blauwe USB 3.0-poorten op een Pi 4, en een korte kabel. De kaart is leeg: geef het tien minuten, controleer dan of de antenne verticaal staat en dicht bij een raam. De Pi toont een bliksempictogram: de voeding is te zwak. De wifi valt weg: een kabel, of verplaats de Pi; de ontvanger zelf heeft heel weinig bandbreedte nodig. De FAQ heeft de rest.
