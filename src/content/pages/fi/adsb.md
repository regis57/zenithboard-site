---
title: "Mikä on ADS-B"
description: "Signaali, jonka jokainen matkustajakone lähettää: mitä se sisältää, miksi kuka tahansa voi vastaanottaa sen ja mitä se ei kerro."
lang: fi
page: adsb
updated: 2026-10-22
reviewed: false
next:
  label: "Rakenna vastaanottimesi"
  href: build
---

## Kone, joka kertoo missä se on

ADS-B tulee sanoista *Automatic Dependent Surveillance – Broadcast* (automaattinen riippuvainen valvonta – yleislähetys). Otetaan sanat yksi kerrallaan. *Automatic*, automaattinen: ilma-alus lähettää sen itsestään, kukaan ei pyydä. *Dependent*, riippuvainen: sijainti tulee ilma-aluksen omasta satelliittinavigoinnista, ei maassa olevasta tutkasta. *Surveillance*, valvonta: näin lennonjohto seuraa ilma-aluksia. *Broadcast*, yleislähetys: se lähetetään kaikille, ei yhdelle kuuntelijalle.

Noin kerran sekunnissa ilma-alus lähettää lyhyen viestin taajuudella **1090 MHz**. Viesti sisältää sen tunnisteen (kyseiselle rungolle annetun 24-bittisen osoitteen ja yleensä lennon kutsutunnuksen), sen sijainnin (leveys- ja pituusasteen), korkeuden, nopeuden ja suunnan. Muut, silloin tällöin lähetettävät viestit lisäävät ilma-aluksen luokan, pystynopeuden ja muutaman lipun.

Vuodesta 2020 lähtien useimpien valvotussa ilmatilassa Euroopassa ja Yhdysvalloissa lentävien ilma-alusten on lähetettävä ADS-B:tä. Matkustajakoneet lähettävät, liikesuihkukoneet lähettävät, monet kevyet lentokoneet lähettävät. Jotkin sotilas- ja valtionilma-alukset eivät lähetä, tai lähettävät ilman sijaintiaan.

## Miksi voit kuunnella

Viestejä ei ole salattu eikä allekirjoitettu. Se on tarkoituksellista: koko idea on, että jokainen ilma-alus ja jokainen maa-asema ympärillä voi kuulla jokaisen muun ilma-aluksen. Muoto on julkinen, ilmailun käyttämien standardien määrittelemä, ja taajuus on sama kaikkialla maailmassa.

Vastaanotin on siis vain radio, joka on viritetty taajuudelle 1090 MHz, ja ohjelma, joka muuttaa pulssit tekstiksi. Kaksikymmentä vuotta sitten tuo radio maksoi tuhansia. Nykyään digitaalitelevisiota varten myytävä USB-tikku, suunnilleen peukalon kokoinen, hoitaa homman, koska sen piiri voidaan käskeä kuuntelemaan mitä tahansa taajuutta ja antamaan raakasignaali tietokoneelle. Tätä tikkua kutsutaan nimellä RTL-SDR, sisällä olevan piirin (RTL2832U) ja idean (*software-defined radio*, ohjelmistoradio: tietokone tekee purkamisen) mukaan.

Ohjelma, joka tekee purkamisen Raspberry Pillä, on yleensä **readsb**, vanhemman *dump1090*-ohjelman seuraaja. Se kuuntelee tikkua, purkaa viestit ja tarjoaa tuloksen kaikelle, mikä sitä haluaa: selaimesi kartalle (**tar1090**), seurantaverkoston syöttöohjelmalle tai ZenithBoardin seinätaululle.

## Yhdysvalloissa: myös 978 MHz

Yhdysvalloissa käytetään myös toista taajuutta, **978 MHz**, nimeltään UAT (*Universal Access Transceiver*, yleiskäyttöinen lähetin-vastaanotin), lähinnä matalalla lentäville pienkoneille. Sen kuuleminen vaatii toisen USB-tikun ja toisen antennin. Kaikkialla muualla 1090 MHz on kaikki, mitä on. ZenithBoard kysyy alueesi kerran ja mainitsee 978 MHz:n vain, jos vastaat *Yhdysvallat*.

## Kuinka kauas kuulet

Signaali kulkee suoraa linjaa, kuten valo. Matkalentokorkeudessa oleva ilma-alus näkyy hyvin kaukaa, kunhan mikään ei ole sen ja antennisi välissä. Mäkeen päin olevasta ikkunasta saatat kuulla muutaman kymmenen kilometrin päähän; katolta, jolta on esteetön horisontti, 250 km ja enemmän on tavallista, ja reunalla olevat koneet ovat niitä, jotka lentävät 11 000 metrissä. Lähelläsi matalalla lentävät koneet jäävät jokaisen rakennuksen ja puun taakse. Kantama riippuu antennista ja sen näkymästä, ei tietokoneesta.

## Mitä ADS-B ei kerro

Viesti kertoo, missä ilma-alus on, ei minne se on menossa. Lähtöpaikka, määränpää, lentoyhtiön nimi ja ilma-aluksen valokuva tulevat muualta: julkisista rekistereistä ja tietokannoista, joista seurantaverkostot ja ZenithBoard hakevat tiedot ilma-aluksen osoitteen perusteella. ADS-B ei myöskään kerro mitään siitä, kuka on kyydissä, eikä mitään sinusta: vastaanottaminen on passiivista, vastaanottimesi ei lähetä mitään.

## MLAT: niiden kuuleminen, jotka eivät kerro

Jotkin ilma-alukset lähettävät tunnisteensa mutta eivät sijaintiaan (vanhemmat transponderit tekevät näin). Jos neljä tai useampi vastaanotin kuulee saman viestin, saapumisaikojen pienet erot antavat sijainnin, samaan tapaan kuin salama paikannetaan sen jyrinästä. Tätä kutsutaan nimellä **MLAT**, *multilateration* (multilateraatio). Yksittäinen vastaanottimesi ei pysty siihen yksin; syöttämällä verkostoa siitä tulee yksi noista neljästä. Tämä on yksi todellisista syistä jakaa.
