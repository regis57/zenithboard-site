---
title: "ZenithBoard — taivas ylläsi, suorana"
description: "Taivas ylläsi, sinun purkamanasi, maailman kanssa jaettuna."
lang: fi
page: home
updated: 2026-10-30
reviewed: false
next:
  label: "Aloita tästä: mikä on ADS-B"
  href: adsb
---

## Mistä on kyse

Jokainen talosi yllä lentävä matkustajakone puhuu. Noin kerran sekunnissa se lähettää tiedon siitä, kuka se on, missä se on, kuinka korkealla ja kuinka nopeasti. Tätä signaalia kutsutaan nimellä ADS-B, sitä ei ole salattu, ja kuka tahansa pienen radion omistaja voi kuunnella sitä.

Tämä sivusto selittää kolme asiaa, järjestyksessä: mikä tuo signaali on, miten sille rakennetaan vastaanotin Raspberry Pistä ja muutamasta osasta, ja miten liitytään niihin tuhansiin ihmisiin, jotka jakavat vastaanottimensa kuuleman maailman lentoseurantaverkostojen kanssa. Neljäs osa on ZenithBoard: ilmainen ohjelma, joka asentaa kaiken tämän yhdellä kertaa ja näyttää yläpuolella lentävät koneet vanhalla tabletilla, hehkuvina pisteinä tai lentokentän läppätaululla.

## Mitä se maksaa, mitä se vaatii, mitä se antaa

**Se maksaa** noin 60–120 €, valitsemastasi Raspberry Pistä ja antennista riippuen. Sen jälkeen ei mitään: ei tilausmaksua, ei maksullista tiliä.

**Se vaatii** noin tunnin ensimmäisellä kerralla, Raspberry Pin, pistorasian ja kotisi Wi-Fin. Sinun ei tarvitse osata ohjelmoida. Kirjoitat muutaman komennon, jotka annetaan sinulle valmiina.

**Se antaa** ympärilläsi lentävät koneet omalle näytöllesi, ilman ketään välissä. Jos jaat tietosi, seurantaverkostot antavat jotain takaisin: FlightAware avaa ilmaisen Enterprise-tilin, Flightradar24 ilmaisen Contributor-tason, Plane Finder ilmaisen premium-käytön sivustoonsa ja sovelluksiinsa, AirNav Radar Business-tilin, ja ADS-B Exchange näyttää syötteesi sivustollaan. Ja jos kytket ZenithBoardin jakamisen päälle, taivaasi ylittävät koneet julkaistaan Blueskyhin kuvana seinätaulustasi.

## Rajat, suoraan sanottuna

Vastaanotin kuulee vain sen, minkä se näkee: signaali kulkee suoraa linjaa, joten mäkeen päin oleva ikkuna kuulee vähemmän kuin katto. Raspberry Pi, jossa on 1 Gt muistia, riittää kaikkeen tähän; tämä on mitattu tekijän omalla Pi 3B:llä. Wi-Fi toimii; kaapeli toimii paremmin. Mikään täällä ei ole myytävänä; ainoa raha, joka liikkuu, on olut, jos siltä tuntuu, sivun alareunassa.
