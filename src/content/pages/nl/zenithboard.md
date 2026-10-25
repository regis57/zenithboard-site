---
title: "ZenithBoard"
description: "De wall van stippen of het klapperbord van de luchthaven op een oude tablet, de webconsole, de posts op Bluesky. Gratis, open, één menu om alles te installeren."
lang: nl
page: zenithboard
updated: 2026-10-25
reviewed: false
next:
  label: "Installeer het: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

## In één zin

ZenithBoard maakt van een Raspberry Pi en een USB-radiostick een ADS-B-ontvanger die de vier netwerken voedt, en toont de vliegtuigen recht boven je huis op een oude tablet, als een oplichtend dot-matrixbord of een klapperbord zoals op een luchthaven. Het is vrije software, onder de GPL, en het draait elke dag op de eigen Pi 3B van de auteur, buiten, op wifi, in de Moezel.

![De dot-matrixwall in amber: een Tunisair Airbus A320 met zijn twee vlaggen, het vliegtuig getekend in stippen naast de tekst, dan de volgende vlucht](/img/zb-wall.webp)

## De wall

De wall is een webpagina die de Pi op je thuisnetwerk aanbiedt. Open haar op een tablet of scherm met een browser, zet haar op het beginscherm, en ze blijft aan. Ze doorloopt elk vliegtuig binnen de straal die je kiest, van 1 tot 50 km (of mijl): roepnaam, vliegtuigtype, hoogte, snelheid, waar de vlucht vandaan komt en heen gaat, afstand en richting vanaf jou. Twee uiterlijken: een raster van **128 bij 80 stippen**, zoals een oud stationsbord, of een **klapperbord** waarvan de letters omrollen als het volgende vliegtuig komt. Vijf kleuren: amber, groen, rood, wit, turkoois; één tegelijk, want het gaat om een oplichtend bord, niet om een schermafbeelding van een kaart.

![Het klapperbord in rood: de letters rollen om van de ene vlucht naar de volgende](/img/zb-flap-roll.webp)

![De wall in zes uiterlijken: dot-matrix in amber, turkoois en wit bovenaan; klapperbord in amber, groen en turkoois onderaan](/img/wall-colours.webp)

Een klein tandwiel in de hoek van de wall opent de instellingen: eenheden, straal, seconden per vliegtuig, kleur, uiterlijk en vlaggen. Ze worden alleen op die tablet bewaard, dus elk scherm kan zijn eigen uiterlijk hebben, en `zenithboard config` stelt de standaardwaarden voor alle schermen in.

![Het eigen instellingenpaneel van de wall over een klapperbord: eenheden, straal, seconden per vliegtuig, kleur, uiterlijk en vlaggen](/img/wall-settings.webp)

Naast de tekst een silhouet van het vliegtuig getekend in stippen, twee kleine vlaggen (waar het vliegtuig is geregistreerd, waar het is gebouwd), en, als je wilt, zijn foto van Planespotters, met de naam van de fotograaf. Geen logo van een luchtvaartmaatschappij, geen logo van een fabrikant: dat zijn beschermde merken, dus vlaggen nemen hun plaats in. Routes en modellen komen uit openbare opzoekingen; de wall zegt wat ze weet en laat de regel leeg als ze het niet weet.

Je kunt de wall helemaal zonder hardware uitproberen: de repository bevat een demo met verzonnen luchtvaartmaatschappijen en een voorbeeld van alles, van een A380 tot een helikopter, die op elke computer met Python draait.

## De ontvanger, en de vier netwerken

ZenithBoard installeert **readsb** als decoder, met zijn kaart **tar1090**, en de feeders die je aanvinkt: ADS-B Exchange altijd, FlightAware, Flightradar24 en Plane Finder als je ze wilt. Het houdt precies één MLAT-client draaiend en telt ze in `zenithboard status`. Alles staat standaard uit en is omkeerbaar: elke *aan* heeft een *uit* die alles terugzet, er wordt een back-up gemaakt vóór iets destructiefs, en het menu heeft altijd een uitweg.

De versterking van de ontvanger kan vanuit het menu of de console worden afgesteld, stap voor stap, met de statistieken om te zien of het hielp. Optionele statistieken bewaren een maand aan berichten per uur, bereik en vliegtuigen per dag; **graphs1090** tekent er jaren van.

## De console

Sinds versie 0.39 toont `http://<the Pi>:8080/console` de instellingen in het uiterlijk van de wall: een overzicht van de Pi (uptime, temperatuur, geheugen, elke service), de wall, de ontvanger, Bluesky, de watchdogs, updates. Eén sectie tegelijk, een zijbalk op een computer, tabbladen op een telefoon. Elke wijziging voert dezelfde opdracht uit als het menu zou doen, en laat je zien wat die afdrukte. De console bestaat in tweeëntwintig talen; deze site gebruikt dezelfde lijst en dezelfde vlaggen.

![Een Airbus Beluga op het klapperbord](/img/wall-beluga-flap.webp)

## Bluesky

Optioneel, standaard uit. Ingeschakeld plaatst de Pi de vliegtuigen die een post waard zijn op Bluesky: een militaire tanker, een Beluga, een type dat hij een maand lang niet heeft gezien, het verste van de maand. Elke post is een foto van de wall naast een kaart van het spoor van het vliegtuig, allebei door de Pi zelf getekend, met een korte tekst: de vlucht, het type, de route, de hoogte, en de naam van je woonplaats, nooit je positie. Je Bluesky-appwachtwoord blijft op de Pi, in een bestand dat alleen de service kan lezen; het verschijnt nooit in een logboek of op de wall.

## Gebouwd om niet mis te gaan

ZenithBoard draait als root, luistert op je netwerk en installeert software van anderen, dus het is gebouwd om te beperken wat er mis kan gaan. De wall antwoordt alleen je thuisnetwerk en geeft alle anderen een 403, doorgestuurde poort of niet; om haar van buiten te zien legt het menu een VPN uit in plaats van een open poort. Elke service draait in een systemd-sandbox met alleen wat zijn taak nodig heeft. Pakkethandtekeningen worden nooit uitgeschakeld. De beveiligingsupdates van Debian kunnen zichzelf dagelijks installeren. Twee watchdogs herstarten wat vastloopt, en een *health*-opdracht vertelt je in één scherm of alles in orde is.

## Wat het nodig heeft

Een Raspberry Pi 3B of nieuwer met 1 GB geheugen, gemeten: op de Pi 3B van de auteur, met ADS-B Exchange en zijn MLAT, FlightAware, Flightradar24, de wall, de statistieken en de Bluesky-posts, was er nog 656 MB geheugen vrij. Een Pi Zero 2 W draait de ontvanger en de wall, zonder de extra feeders. Raspberry Pi OS Lite, 64-bits. Een uur de eerste keer; daarna `sudo zenithboard update` als er een nieuwe versie uit is.
