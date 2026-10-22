---
title: "Rakenna vastaanotin"
description: "Raspberry Pi, USB-radiotikku, antenni: osaluettelo hintoineen, minne antenni kannattaa sijoittaa ja ohjelmisto yhdellä komennolla."
lang: fi
page: build
updated: 2026-10-22
reviewed: false
next:
  label: "Liity sitten yhteisöön"
  href: join
---

## Osat

Viisi asiaa, joista kolme sinulla saattaa jo olla.

| Osa | Mitä etsiä | Noin |
|---|---|---|
| Raspberry Pi | **3B, 3B+ tai 4** on ihanteellinen: 1 Gt muistia riittää vastaanottimelle, syöttöohjelmille ja seinätaululle; tämä on mitattu tekijän Pi 3B:llä. **Zero 2 W** (512 Mt, listahinta 15 US$) pyörittää vastaanottimen ja seinätaulun, ilman lisäsyöttöohjelmia. | 15–60 € |
| USB-radiotikku | **RTL-SDR**-tikku. RTL-SDR Blogin mallit ovat vertailukohta, noin 35–40 US$. ADS-B:tä varten tehty tikku, jossa on sisäänrakennettu 1090 MHz:n suodatin (esimerkiksi FlightAwaren Pro Stick), kuulee kaupungissa kauemmas. | 30–45 € |
| Antenni | Pieni antenni, joka on viritetty taajuudelle **1090 MHz**. Joidenkin tikkujen mukana myytävä toimii ikkunalla; erillinen ADS-B-antenni, puoli metriä pitkä, kuulee paljon kauemmas katolla tai parvekkeella. | 10–40 € |
| Micro-SD-kortti | 16 Gt tai enemmän, tunnetulta valmistajalta. | 8–12 € |
| Virtalähde | Pisi virallinen virtalähde. Puhelimen laturi ei usein riitä, ja Pi kertoo sen sinulle salamakuvakkeella. | 8–12 € |

Yhteensä: **noin 60–120 €**, kertaluonteisesti. Hinnat vaihtelevat; nämä ovat valmistajien sivuilla lokakuussa 2026 nähtyjä suuruusluokkia. Osta antenni viimeisenä: aloita sillä, mikä tulee tikun mukana, katso mitä kuulet, ja päätä sitten.

Vanha tabletti tai mikä tahansa selaimella varustettu näyttö seinätaulua varten on valinnainen ja löytyy luultavasti jo laatikosta.

## Minne antenni sijoitetaan

Tämä on ainoa asia, joka muuttaa kantamaasi, joten se ansaitsee hetken. Signaali kulkee suoraa linjaa. Antenni haluaa taivaan, ei huonetta: ikkuna on minimi, parveke on hyvä, katto tai ullakko tiilien alla on paras. Pystysuoraan, kaukana metallista, niin korkealle kuin kaapeli sallii. Kaksi metriä korkeammalla voittaa usein kalliimman tikun.

Pi itse voi jäädä sisälle; noin kolmen metrin pituiset USB-kaapelit ovat kunnossa. Jos tikku kuumenee kesällä, se on normaalia.

## Ohjelmisto, kaksi tapaa

### Klassinen tapa: readsb ja tar1090

Purkuohjelma on [**readsb**](https://github.com/wiedehopf/readsb); selaimesi kartta on [**tar1090**](https://github.com/wiedehopf/tar1090); molemmat ovat saman tekijän vapaita ohjelmistoja, joiden asennusskriptit toimivat tuoreella Raspberry Pi OS:llä. Sitten lisäät jokaisen syöttöohjelman käsin, kunkin verkoston omalta sivulta. Tämä on oikea tapa, jos haluat ymmärtää jokaisen palasen.

### Kaikki yhdessä: ZenithBoard

ZenithBoard asentaa readsb:n, valitsemasi syöttöohjelmat ja seinätaulun yhdestä valikosta, kysyy ne muutamat kysymykset kerran (alueesi, yksikkösi, missä antennisi on) ja antaa sinun lisätä tai poistaa minkä tahansa osan myöhemmin. Se pitää myös vain yhden MLAT-asiakasohjelman käynnissä, koska useampi yhtä aikaa ylikuormittaa Pin.

Valmistele kortti Raspberry Pi Imagerilla (Raspberry Pi OS Lite, 64-bittinen, SSH käytössä ja Wi-Fi-tietosi täytettynä), käynnistä Pi ja sitten tietokoneeltasi:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Varaa noin tunti ensimmäisellä kerralla, josta suurin osa kuluu latausten odotteluun. Kun se on valmis, valikko tulostaa seinätaulun osoitteen, `http://<the Pi's address>:8080/`; avaa se tabletin selaimessa, ja seinätaulu on siinä. Oma karttasi, tar1090, on osoitteessa `http://<the Pi's address>/tar1090/`.

## Sijaintisi

Purkuohjelma, MLAT ja seinätaulun etäisyydet tarvitsevat tiedon siitä, missä antenni on: leveysaste, pituusaste, korkeus. Napsauta taloasi hiiren oikealla painikkeella kartalla kopioidaksesi koordinaatit. Tämä sijainti pysyy Pilläsi ja syöttöohjelmien asetuksissa; ZenithBoard ei koskaan näytä sitä seinätaululla eikä julkaisussa, eivätkä verkostotkaan julkaise sitä. Kantama mitataan siitä, siinä kaikki.

## Mikä voi mennä pieleen

Tikkua ei löydy: käytä USB 2.0 -porttia, ei Pi 4:n sinisiä USB 3.0 -portteja, ja lyhyttä kaapelia. Kartta on tyhjä: anna sille kymmenen minuuttia ja tarkista sitten, että antenni on pystyssä ja lähellä ikkunaa. Pi näyttää salamakuvakkeen: virtalähde on liian heikko. Wi-Fi katkeilee: kaapeli, tai siirrä Pitä; vastaanotin itse tarvitsee hyvin vähän kaistaa. Loput löytyvät UKK:sta.
