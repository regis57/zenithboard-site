---
title: "Liity yhteisöön"
description: "Viisi verkostoa ottaa vastaan sen, mitä vastaanottimesi kuulee, ja antaa jotain takaisin. Mitä annat, mitä saat ja mikä jää kotiin."
lang: fi
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "Tutustu ZenithBoardiin"
  href: zenithboard
---

## Miksi ylipäätään jakaa

Vastaanottimesi kuulee muutaman sadan kilometrin säteellä ympärilläsi. Vastaanottimien verkosto kuulee koko planeetan. Jokainen kartta, jota olet koskaan katsonut lentoseurantasivustolla, koostuu sinun kaltaisistasi ihmisistä, Raspberry Pi ikkunalaudalla, lähettämässä sitä, mitä he kuulevat. Kukaan ei omista taivasta; kartat ovat olemassa, koska tuhannet jakavat sen.

Jakaminen ei maksa sinulle mitään: muutaman kilotavun sekunnissa internetliittymästäsi, eikä Pillä mitään mainitsemisen arvoista. Vastineeksi verkostot avaavat sinulle maksulliset ominaisuutensa, ja yksittäisestä antennistasi tulee osa MLAT-järjestelmää, joka löytää ne ilma-alukset, jotka eivät kerro missä ne ovat.

## Viisi verkostoa

Jokainen niistä haluaa saman asian, readsb:n purkamien viestien virran, ja jokaisella on oma pieni ohjelmansa sen lähettämiseen. ZenithBoard asentaa ne, jotka rastitat; voit myös asentaa ne itse kunkin verkoston sivulta.

### [ADS-B Exchange](https://www.adsbexchange.com/)

Yhteisön oma verkosto, vapaaehtoisten ylläpitämä ja tunnettu siitä, että se näyttää jokaisen kuulemansa ilma-aluksen ilman pyynnöstä tehtävää suodatusta. Syöttäminen ei vaadi tiliä: heidän skriptinsä ajetaan Pillä, ja syötteesi ilmestyy heidän sivustolleen tilastoineen. MLAT-osallistujat saavat takaisin ne ilma-alukset, joiden paikantamisessa heidän tietonsa auttoivat. ZenithBoard käsittelee sitä peruskerroksena; muut ovat valinnaisia sen päällä.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

Syöttöohjelman nimi on **PiAware**. Vastineeksi FlightAware antaa syöttäjille maksuttoman **Enterprise**-tilin: kahdeksan kuukautta lentohistoriaa, rajattomasti hälytyksiä, karttoja ilman mainoksia ja tilastoja siitä, mitä vastaanottimesi kuulee, sekä lennot, joiden seuraamisessa se auttoi.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

Syöttöohjelman nimi on **fr24feed**. Vastineeksi vastaanottimeesi liitetty ilmainen tili korotetaan **Contributor**-tasolle heti, kun tietoa alkaa saapua. Yksi jakoavain syötettä kohti; jos syötät myös muita verkostoja, Flightradar24 pyytää sinua kytkemään oman MLAT:nsa pois päältä, minkä ZenithBoard tekee puolestasi.

### [Plane Finder](https://planefinder.net/sharing/client)

Syöttöohjelma on **Plane Finder ADS-B Client**. Vastineeksi Plane Finder järjestää jakajille ilmaisen premium-käytön verkkosivustoonsa ja sovelluksiinsa.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

Syöttöohjelman nimi on **rbfeeder** (AirNav Radar tunnettiin aiemmin nimellä RadarBox). Vastineeksi AirNav Radar antaa jakajille **Business**-tilin. Pi luo itse oman jakoavaimensa; jotta asema liitetään tiliisi, kirjaudut niiden sivustolle, avaat aseman lunastussivun ja liität sinne tuon avaimen.

## Mitä annat

Viestit itse: ilma-aluksen osoite, kutsutunnus, sijainti, korkeus, nopeus, sellaisina kuin ne lähetettiin avoimesti. Jokaisen saapumisaika, jota MLAT tarvitsee. Vastaanottimesi sijainti, jotta verkosto tietää, mistä tiedot kuultiin. Ei mitään kotiverkostasi, ei kameraa, ei mikrofonia; syöttöohjelmat ovat pieniä, avoimia tai dokumentoituja, ja ZenithBoard näyttää sinulle, mitä kukin niistä tekee.

## Mikä jää kotiin

Verkostot käyttävät tarkkaa sijaintiasi kantamien ja MLAT:n laskemiseen; sitä ei näytetä niiden julkisilla kartoilla nuppineulana talosi kohdalla, eikä ZenithBoard koskaan näytä sitä seinätaululla tai julkaisussa. Tablettisi seinätaulu ja tar1090-karttasi ovat vain kotiverkossasi, ellet itse avaa niitä ulospäin. Kaiken jakamasi voit lopettaa: syöttöohjelman kytkeminen pois päältä valikosta palauttaa asiat ennalleen.

## Yksi MLAT-asiakasohjelma, ei viittä

Jokainen verkosto voi ajaa omaa MLAT-asiakasohjelmaansa Pilläsi. Viisi yhtä aikaa on Raspberry Pille liikaa: suoritin käyttää aikansa laskutoimituksiin ja seinätaulu nykii. ZenithBoard pitää käynnissä yhden MLAT-asiakasohjelman, ADS-B Exchangen, ja kytkee MLAT:n pois päältä muista; `zenithboard status` laskee käynnissä olevat, jotta voit tarkistaa, että niitä on täsmälleen yksi. Jos asennat syöttöohjelmat käsin, tee samoin.

## Aloittaminen

ZenithBoardissa valikko **1 ADS-B** listaa viisi verkostoa, kullakin oma rasti; ADS-B Exchange on aina päällä. FlightAwarea, Flightradar24:ää, Plane Finderia ja AirNav Radaria varten luot ilmaisen tilin niiden sivustolla; asennusohjelma tulostaa linkin tai liitettävän avaimen, kerran. ADS-B Exchangen skripti kysyy aseman nimen ja sijaintisi ja tulostaa linkin, josta näet syötteesi. Kymmenen minuuttia myöhemmin vastaanottimesi on niiden kartoilla, ja tilastosivut näyttävät, kuinka kauas kuulet.
