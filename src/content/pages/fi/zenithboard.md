---
title: "ZenithBoard"
description: "Pisteseinä tai lentokentän läppätaulu vanhalla tabletilla, verkkokonsoli, julkaisut Blueskyssä. Ilmainen, avoin, yksi valikko asentaa kaiken."
lang: fi
page: zenithboard
updated: 2026-10-23
reviewed: false
next:
  label: "Asenna se: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

## Yhdellä lauseella

ZenithBoard muuttaa Raspberry Pin ja USB-radiotikun ADS-B-vastaanottimeksi, joka syöttää neljää verkostoa ja näyttää suoraan talosi yllä lentävät koneet vanhalla tabletilla, valaistuna pistematriisikylttinä tai lentokentän läppätauluna. Se on vapaa ohjelmisto GPL-lisenssillä, ja se pyörii joka päivä tekijän omalla Pi 3B:llä, ulkona, Wi-Fin varassa, Mosellessa.

![Seinätaulu: ZENITHBOARD valaistuina pisteinä, ja lentokone](/img/banner-dots.webp)

## Seinätaulu

Seinätaulu on verkkosivu, jonka Pi tarjoaa kotiverkossasi. Avaa se millä tahansa tabletilla tai selaimella varustetulla näytöllä, lisää se aloitusnäytölle, ja se pysyy päällä. Se käy läpi jokaisen ilma-aluksen valitsemasi säteen sisällä, 1–50 km (tai mailia): kutsutunnus, konetyyppi, korkeus, nopeus, mistä lento tulee ja minne se menee, etäisyys ja suunta sinusta. Kaksi ulkoasua: **128 × 80 pisteen** ruudukko, kuin vanha asemakyltti, tai **läppätaulu**, jonka kirjaimet pyörähtävät, kun seuraava kone tulee. Viisi väriä: keltaoranssi, vihreä, punainen, valkoinen, turkoosi; yksi kerrallaan, koska tarkoitus on valokyltti, ei kuvakaappaus kartasta.

![Läppätaulun ulkoasu: ZENITHBOARD, OVERHEAD NOW](/img/banner-flap.webp)

Tekstin vieressä on pisteistä piirretty ilma-aluksen siluetti, kaksi pientä lippua (missä ilma-alus on rekisteröity, missä se on rakennettu) ja halutessasi sen valokuva Planespottersista, kuvaajan nimen kera. Ei lentoyhtiön logoa, ei valmistajan logoa: ne ovat suojattuja merkkejä, joten liput korvaavat ne. Reitit ja mallit tulevat julkisista hauista; seinätaulu kertoo sen, minkä tietää, ja jättää rivin tyhjäksi, kun ei tiedä.

Voit kokeilla seinätaulua ilman mitään laitteistoa: tietovarasto sisältää demon keksityillä lentoyhtiöillä ja esimerkin kaikesta, A380:stä helikopteriin, ja se pyörii millä tahansa tietokoneella, jossa on Python.

## Vastaanotin ja neljä verkostoa

ZenithBoard asentaa purkuohjelmaksi **readsb**:n, sen kartan **tar1090**:n ja rastittamasi syöttöohjelmat: ADS-B Exchangen aina, FlightAwaren, Flightradar24:n ja Plane Finderin, jos haluat ne. Se pitää käynnissä täsmälleen yhden MLAT-asiakasohjelman ja laskee ne komennolla `zenithboard status`. Kaikki on oletuksena pois päältä ja peruttavissa: jokaisella *päällä*-valinnalla on *pois*-valinta, joka palauttaa asiat ennalleen, ennen mitään tuhoavaa tehdään varmuuskopio, ja valikosta pääsee aina ulos.

Vastaanottimen vahvistusta voi säätää valikosta tai konsolista askel kerrallaan, ja tilastoista näkee, auttoiko se. Valinnaiset tilastot säilyttävät kuukauden ajalta viestit tunneittain sekä kantaman ja ilma-alukset päivittäin; **graphs1090** piirtää niitä vuosien ajalta.

## Konsoli

Versiosta 0.39 lähtien `http://<the Pi>:8080/console` näyttää asetukset seinätaulun ulkoasussa: yleiskatsaus Pistä (käyntiaika, lämpötila, muisti, jokainen palvelu), seinätaulu, vastaanotin, Bluesky, vahtikoirat, päivitykset. Yksi osio kerrallaan, sivupalkki tietokoneella, välilehdet puhelimella. Jokainen muutos ajaa saman komennon kuin valikko ajaisi, ja näyttää sinulle, mitä se tulosti. Konsoli on saatavilla kahdellakymmenelläyhdellä kielellä; tämä sivusto käyttää samaa luetteloa ja samoja lippuja.

![Konsoli: vastaanotin-osio, vihreänä](/img/banner-radar.webp)

## Bluesky

Valinnainen, oletuksena pois päältä. Päälle kytkettynä Pi julkaisee julkaisun arvoiset ilma-alukset Blueskyhin: sotilastankkerin, Belugan, tyypin, jota se ei ole nähnyt kuukauteen, kuukauden kaukaisimman. Jokainen julkaisu on kuva seinätaulusta ilma-aluksen reittikartan vieressä, molemmat Pin itsensä piirtämiä, lyhyen tekstin kera: lento, tyyppi, reitti, korkeus ja kaupunkisi nimi, ei koskaan sijaintiasi. Bluesky-sovellussalasanasi pysyy Pillä tiedostossa, jonka vain palvelu voi lukea; se ei koskaan näy lokissa eikä seinätaululla.

## Rakennettu niin, ettei se mene pieleen

ZenithBoard toimii root-oikeuksin, kuuntelee verkkoasi ja asentaa muiden ihmisten ohjelmistoja, joten se on rakennettu rajoittamaan sitä, mikä voi mennä pieleen. Seinätaulu vastaa vain kotiverkkoosi ja antaa kaikille muille 403-virheen, oli portti ohjattu tai ei; nähdäksesi sen ulkoa valikko neuvoo VPN:n avoimen portin sijaan. Jokainen palvelu toimii systemd-hiekkalaatikossa, jossa on vain se, mitä sen tehtävä tarvitsee. Pakettien allekirjoituksia ei koskaan poisteta käytöstä. Debianin tietoturvakorjaukset voivat asentua itsestään päivittäin. Kaksi vahtikoiraa käynnistää uudelleen sen, mikä jumiutuu, ja *health*-komento kertoo yhdellä ruudulla, onko kaikki hyvin.

## Mitä se tarvitsee

Raspberry Pi 3B:n tai uudemman, jossa on 1 Gt muistia, mitattuna: tekijän Pi 3B:llä, jolla pyörivät ADS-B Exchange ja sen MLAT, FlightAware, Flightradar24, seinätaulu, tilastot ja Bluesky-julkaisut, muistia oli vielä vapaana 656 Mt. Pi Zero 2 W pyörittää vastaanottimen ja seinätaulun, ilman lisäsyöttöohjelmia. Raspberry Pi OS Lite, 64-bittinen. Tunti ensimmäisellä kerralla; sen jälkeen `sudo zenithboard update`, kun uusi versio on julkaistu.
