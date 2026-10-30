---
title: "ZenithBoard"
description: "Pisteseinä tai lentokentän läppätaulu vanhalla tabletilla, verkkokonsoli, julkaisut Blueskyssä. Ilmainen, avoin, yksi valikko asentaa kaiken."
lang: fi
page: zenithboard
updated: 2026-10-30
reviewed: false
next:
  label: "Asenna se: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

> **Julkaisuehdokas versiolle 1.0.** Versio 0.99 on jäädytetty 25. lokakuuta 2026 alkaen: kuukauden ajan siihen tulee vain korjauksia, kun tekijän Pi pyörii koskemattomana. 30. lokakuuta mukaan tuli kaksi toimintoa, AirNav Radar ja Telegram-viestit, joten kuukausi alkaa alusta. Jos mitään ei jää auki, 1.0 julkaistaan aikaisintaan 29. marraskuuta 2026. Kokeileminen nyt auttaa: palaute [GitHubissa](https://github.com/regis57/ZenithBoard/issues) on tervetullut.

## Yhdellä lauseella

ZenithBoard muuttaa Raspberry Pin ja USB-radiotikun ADS-B-vastaanottimeksi, joka syöttää viittä verkostoa ja näyttää suoraan talosi yllä lentävät koneet vanhalla tabletilla, valaistuna pistematriisikylttinä tai lentokentän läppätauluna. Se on vapaa ohjelmisto GPL-lisenssillä, ja se pyörii joka päivä tekijän omalla Pi 3B:llä, ulkona, Wi-Fin varassa, Mosellessa.

![Pistematriisiseinätaulu keltaoranssina: Tunisair Airbus A320 kahdella lipullaan, ilma-alus piirrettynä pisteillä tekstin viereen, sitten seuraava lento](/img/zb-wall.webp)

## Seinätaulu

Seinätaulu on verkkosivu, jonka Pi tarjoaa kotiverkossasi. Avaa se millä tahansa tabletilla tai selaimella varustetulla näytöllä, lisää se aloitusnäytölle, ja se pysyy päällä. Se käy läpi jokaisen ilma-aluksen valitsemasi säteen sisällä, 1–50 km (tai mailia): kutsutunnus, konetyyppi, korkeus, nopeus, mistä lento tulee ja minne se menee, etäisyys ja suunta sinusta. Kaksi ulkoasua: **128 × 80 pisteen** ruudukko, kuin vanha asemakyltti, tai **läppätaulu**, jonka kirjaimet pyörähtävät, kun seuraava kone tulee. Viisi väriä: keltaoranssi, vihreä, punainen, valkoinen, turkoosi; yksi kerrallaan, koska tarkoitus on valokyltti, ei kuvakaappaus kartasta.

![Läppätaulu punaisena: kirjaimet pyörähtävät lennolta seuraavalle](/img/zb-flap-roll.webp)

![Seinätaulu kuudessa ulkoasussa: ylhäällä pistematriisi keltaoranssina, turkoosina ja valkoisena; alhaalla läppätaulu keltaoranssina, vihreänä ja turkoosina](/img/wall-colours.webp)

Pieni hammasratas seinätaulun kulmassa avaa sen asetukset: yksiköt, säde, sekuntia ilma-alusta kohti, väri, ulkoasu ja liput. Ne tallennetaan vain kyseiselle tabletille, joten jokaisella näytöllä voi olla oma ulkoasunsa, ja `zenithboard config` asettaa oletukset kaikille.

![Seinätaulun oma asetuspaneeli läppätaulun päällä: yksiköt, säde, sekuntia ilma-alusta kohti, väri, ulkoasu ja liput](/img/wall-settings.webp)

Tekstin vieressä on pisteistä piirretty ilma-aluksen siluetti, kaksi pientä lippua (missä ilma-alus on rekisteröity, missä se on rakennettu) ja halutessasi sen valokuva Planespottersista, kuvaajan nimen kera. Ei lentoyhtiön logoa, ei valmistajan logoa: ne ovat suojattuja merkkejä, joten liput korvaavat ne. Reitit ja mallit tulevat julkisista hauista; seinätaulu kertoo sen, minkä tietää, ja jättää rivin tyhjäksi, kun ei tiedä.

Voit kokeilla seinätaulua ilman mitään laitteistoa: tietovarasto sisältää demon keksityillä lentoyhtiöillä ja esimerkin kaikesta, A380:stä helikopteriin, ja se pyörii millä tahansa tietokoneella, jossa on Python.

## Vastaanotin ja viisi verkostoa

ZenithBoard asentaa purkuohjelmaksi **readsb**:n, sen kartan **tar1090**:n ja rastittamasi syöttöohjelmat: ADS-B Exchangen aina, FlightAwaren, Flightradar24:n, Plane Finderin ja AirNav Radarin, jos haluat ne. Se pitää käynnissä täsmälleen yhden MLAT-asiakasohjelman ja laskee ne komennolla `zenithboard status`. Kaikki on oletuksena pois päältä ja peruttavissa: jokaisella *päällä*-valinnalla on *pois*-valinta, joka palauttaa asiat ennalleen, ennen mitään tuhoavaa tehdään varmuuskopio, ja valikosta pääsee aina ulos.

Vastaanottimen vahvistusta voi säätää valikosta tai konsolista askel kerrallaan, ja tilastoista näkee, auttoiko se. Valinnaiset tilastot säilyttävät kuukauden ajalta viestit tunneittain sekä kantaman ja ilma-alukset päivittäin; **graphs1090** piirtää niitä vuosien ajalta.

## Konsoli

Versiosta 0.39 lähtien `http://<the Pi>:8080/console` näyttää asetukset seinätaulun ulkoasussa: yleiskatsaus Pistä (käyntiaika, lämpötila, muisti, jokainen palvelu), seinätaulu, vastaanotin, Bluesky, vahtikoirat, päivitykset. Yksi osio kerrallaan, sivupalkki tietokoneella, välilehdet puhelimella. Jokainen muutos ajaa saman komennon kuin valikko ajaisi, ja näyttää sinulle, mitä se tulosti. Konsoli on saatavilla kahdellakymmenelläkahdella kielellä; tämä sivusto käyttää samaa luetteloa ja samoja lippuja.

![Airbus Beluga läppätaululla](/img/wall-beluga-flap.webp)

## Bluesky

Valinnainen, oletuksena pois päältä. Päälle kytkettynä Pi julkaisee julkaisun arvoiset ilma-alukset Blueskyhin: sotilastankkerin, Belugan, tyypin, jota se ei ole nähnyt kuukauteen, kuukauden kaukaisimman. Jokainen julkaisu on kuva seinätaulusta ilma-aluksen reittikartan vieressä, molemmat Pin itsensä piirtämiä, lyhyen tekstin kera: lento, tyyppi, reitti, korkeus ja kaupunkisi nimi, ei koskaan sijaintiasi. Bluesky-sovellussalasanasi pysyy Pillä tiedostossa, jonka vain palvelu voi lukea; se ei koskaan näy lokissa eikä seinätaululla.

## Telegram

Valinnainen, oletuksena pois päältä, versiosta 0.99.6 lähtien. Pi voi myös kirjoittaa omaan Telegram-keskusteluusi tai -ryhmääsi botin kautta, jonka teet minuutissa @BotFatherin avulla: ilma-alukset, jotka lentävät jakamisen säteen läpi, kustakin yksi viesti, jossa on lento, malli, rekisteritunnus ja sen lippu, reitti, korkeus ja nopeus, sekä transponderin hätäkoodit 7500, 7600 ja 7700 kaikkialta, minne antenni kuulee, mukana koodin merkitys ja lähin paikkakunta. Vain tekstiä, vain sinulle: hätäkoodia ei koskaan julkaista Blueskyhin. Botin tunniste eli token kirjoitetaan kerran terminaaliin, ja se pysyy Pillä; kaikki muu asetetaan konsolissa.

## Rakennettu niin, ettei se mene pieleen

ZenithBoard toimii root-oikeuksin, kuuntelee verkkoasi ja asentaa muiden ihmisten ohjelmistoja, joten se on rakennettu rajoittamaan sitä, mikä voi mennä pieleen. Seinätaulu vastaa vain kotiverkkoosi ja antaa kaikille muille 403-virheen, oli portti ohjattu tai ei; nähdäksesi sen ulkoa valikko neuvoo VPN:n avoimen portin sijaan. Jokainen palvelu toimii systemd-hiekkalaatikossa, jossa on vain se, mitä sen tehtävä tarvitsee. Pakettien allekirjoituksia ei koskaan poisteta käytöstä. Debianin tietoturvakorjaukset voivat asentua itsestään päivittäin. Kaksi vahtikoiraa käynnistää uudelleen sen, mikä jumiutuu, ja *health*-komento kertoo yhdellä ruudulla, onko kaikki hyvin.

## Mitä se tarvitsee

Raspberry Pi 3B:n tai uudemman, jossa on 1 Gt muistia, mitattuna: tekijän Pi 3B:llä, jolla pyörivät ADS-B Exchange ja sen MLAT, FlightAware, Flightradar24, seinätaulu, tilastot ja Bluesky-julkaisut, muistia oli vielä vapaana 656 Mt. Pi Zero 2 W pyörittää vastaanottimen ja seinätaulun, ilman lisäsyöttöohjelmia. Raspberry Pi OS Lite, 64-bittinen. Tunti ensimmäisellä kerralla; sen jälkeen `sudo zenithboard update`, kun uusi versio on julkaistu.
