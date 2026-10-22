---
title: "UKK"
description: "Kantama, esteet, Wi-Fi, muisti, laillisuus, yksityisyys: kysymykset, joita ihmiset esittävät ennen vastaanottimen rakentamista ja sen jälkeen, suoraan vastattuina."
lang: fi
page: faq
updated: 2026-10-23
reviewed: false
next:
  label: "Kuka tekee tämän, ja miten kiittää"
  href: about
---

## Onko kuunteleminen laillista?

Vastaanottaminen on passiivista: antennisi ei lähetä mitään. ADS-B lähetetään salaamattomana juuri siksi, että kaikki voivat kuulla sen, ja tiedot näytetään julkisilla kartoilla pitkin päivää. Useimmissa maissa salaamattomina lähetettyjen radiosignaalien vastaanottaminen on laillista; niiden jakaminen seurantaverkostojen kanssa on sitä, mitä tuhannet ihmiset tekevät avoimesti. Jos maassasi on erityisiä sääntöjä radiovastaanotosta, tarkista ne; tämä sivusto ei ole oikeudellinen neuvo.

## Kuinka kauas kuulen?

Niin kauas kuin antennisi näkee. Signaali kulkee suoraa linjaa, joten kysymys on siitä, mitä antennisi ja taivaan välissä on. Ikkuna: muutama kymmenen kilometriä, enemmän sille puolelle, jonne ikkuna avautuu. Parveke tai ullakko tiilien alla: usein 150–250 km. Katto, jolta on esteetön horisontti: 300 km ja pidemmälle, matkalentokorkeudessa lentäviin koneisiin. Lähelläsi matalalla lentävät koneet jäävät rakennusten ja puiden taakse, teit mitä tahansa. Mikään Raspberry Pissä ei muuta kantamaa.

## Karttani on tyhjä

Anna sille kymmenen minuuttia ensimmäisen käynnistyksen jälkeen. Tarkista sitten tässä järjestyksessä: tikku on USB 2.0 -portissa (musta, ei Pi 4:n sinisissä USB 3.0 -porteissa); antenni on kierretty kiinni ja pystyssä; se on lähellä ikkunaa. Jos tikku näkyy mutta mitään ei tule, vahvistus voi olla liian suuri tai liian pieni: valikosta voit siirtää sitä askel kerrallaan, ja tilastot näyttävät vaikutuksen.

## Riittääkö Wi-Fi?

Kyllä vastaanottimelle ja syöttöohjelmille: muutama kilotavu sekunnissa. Seinätaulu tabletilla on myös kevyt. Se, missä Wi-Fi on huono, on luotettavuus: ulkona signaalin reunalla oleva Pi putoaa verkosta silloin tällöin. Kaapeli korjaa sen; samoin Pin siirtäminen, koska antennikaapeli voi olla muutaman metrin pituinen. ZenithBoardin vahtikoirat yhdistävät Pin uudelleen, kun verkko palaa.

## Riittääkö 1 Gt muistia?

Mitattuna, kyllä. Tekijän Pi 3B:llä, jolla pyörivät ADS-B Exchange ja sen MLAT, FlightAware, Flightradar24, seinätaulu, tilastot ja Bluesky-julkaisut, 1 Gt:stä oli vielä vapaana 656 Mt. Pi Zero 2 W, jossa on 512 Mt, pyörittää vastaanottimen ja seinätaulun; lisää lisäsyöttöohjelmat, ja tila käy ahtaaksi. Älä osta isompaa Pitä tätä varten: kantama tulee antennista.

## Hidastaako se internetiäni tai kuluttaako se dataa?

Ei. Syöttöohjelma lähettää muutaman kilotavun sekunnissa, vähemmän kuin radiolähetyksen suoratoisto. Kuukaudessa se on enintään muutama gigatavu, jaettuna niiden verkostojen kesken, joita syötät.

## Kuka näkee sijaintini?

Verkostot, joita syötät, tarvitsevat sitä kantamien ja MLAT:n laskemiseen ja säilyttävät sen tililläsi. Ne eivät laita nuppineulaa talosi kohdalle julkiselle kartalle. ZenithBoard ei koskaan näytä sijaintiasi seinätaululla eikä julkaisussa: julkaisut nimeävät kaupunkisi, eivät koordinaattejasi. Seinätaulusi ja oma karttasi vastaavat vain kotiverkkoosi, ellet itse avaa niitä ulospäin, ja ZenithBoard selittää VPN:n ennen kuin se selittää avoimen portin.

## Mikä on MLAT, ja miksi vastaanottimeni tarvitsee muita?

MLAT on lyhenne sanasta *multilateraatio*. Sillä verkosto löytää ilma-aluksen, joka lähettää tunnuksensa mutta **ei** sijaintiaan, kuten vanhemmat transponderit tekevät: ne vastaavat "olen täällä" ilman sitä "täällä".

Temppu on aika. Radiosignaali kulkee valon nopeudella, noin 300 metriä joka mikrosekunti. Kun tällainen kone lähettää, jokainen kantaman sisällä oleva vastaanotin kuulee saman viestin, mutta ei samalla hetkellä: lähin kuulee sen ensin, kauempana oleva muutamaa sataa mikrosekuntia myöhemmin. Yksi vastaanotin ei opi siitä mitään; sillä ei ole aavistustakaan, milloin viesti lähti koneesta. Mutta pane neljä vastaanotinta yhteen, jokaisella hyvin tarkka kello, niin niiden saapumisaikojen erot jättävät taivaalle vain yhden paikan, josta viesti on voinut tulla. Se paikka piirretään, ja kone ilmestyy kartalle.

![Neljä vastaanotinta maassa kuulee saman viestin neljänä eri hetkenä; jokaisen ympärillä ympyrä, jonka koko on sen saapumisaika; neljä ympyrää leikkaavat vain yhdessä pisteessä, siellä missä kone on](/img/mlat.svg)

Kuvassa: neljä vastaanotinta, neljä saapumisaikaa, neljä ympyrää. Jokainen ympyrä tarkoittaa "kone on näin kaukana minusta". Ne kohtaavat yhdessä paikassa, ja vain yhdessä. Se on MLAT, ja siksi verkostot pyytävät jokaista syöttäjää lähettämään jokaisen viestin tarkan saapumisajan, ei vain viestiä.

Yksittäinen vastaanottimesi ei siis pysty MLAT:iin yksinään, ja se on rehellinen vastaus kysymykseen "miksi jakaa?": kun syötät verkostoa, antennistasi tulee yksi niistä neljästä, ja koneet, jotka eivät kerro sijainnistaan mitään, alkavat ilmestyä verkostojen kartoille ja, niiden takaisin lähettämän datan kautta, omallesi. Se selittää myös kaksi asiaa, jotka ZenithBoard tekee: se pitää käynnissä **yhden** MLAT-asiakasohjelman (laskenta on raskasta Raspberry Pille), ja se tarvitsee antennisi tarkan sijainnin, koska väärästä paikasta piirretty ympyrä kohtaa muut väärässä pisteessä.

## Näyttääkö seinätaulu jokaisen ilma-aluksen?

Jokaisen ilma-aluksen, joka lähettää sijaintinsa ja on valitsemasi säteen sisällä. Vanhemmilla transpondereilla varustetut ilma-alukset, jotka eivät lähetä sijaintia, näkyvät vain, jos jonkin verkoston MLAT paikantaa ne, ja vain verkostojen kartoilla. Jotkin sotilas- ja valtionilma-alukset eivät lähetä mitään. Seinätaulu kertoo sen, mitä se kuulee, ei enempää.

## Entä Yhdysvallat ja 978 MHz?

Yhdysvalloissa monet pienkoneet käyttävät 978 MHz:n taajuutta (UAT) 1090 MHz:n sijaan. Niiden kuuleminen vaatii toisen tikun ja toisen antennin. ZenithBoard kysyy alueesi kerran; jos vastaat *Yhdysvallat*, se tarjoaa lisävaiheen ja aloittaa brittiläis-amerikkalaisilla yksiköillä. Muualla mitään 978 MHz:stä ei näytetä.

## Voinko käyttää sitä ilman Raspberry Pitä?

Vastaanotin ja syöttöohjelmat toimivat millä tahansa Linux-tietokoneella. ZenithBoard itse on tehty Raspberry Pi OS:lle; seinätaulun demo pyörii millä tahansa tietokoneella, jossa on Python, ilman mitään laitteistoa, jos haluat vain nähdä, miltä se näyttää.

## Onko mikään tästä tuote?

Ei. ZenithBoard on vapaa ohjelmisto GPL-lisenssillä; tämän sivuston teksti on Creative Commons -lisenssillä; mitään ei myydä, tiliä ei tarvita, telemetriaa ei ole, eikä tämä sivusto aseta evästeitä eikä kutsu kolmansia osapuolia. Ainoa raha, joka liikkuu, on olut, jos siltä tuntuu, jokaisen sivun alareunassa.
