---
title: "Mis on ADS-B"
description: "Signaal, mida iga reisilennuk välja saadab: mida see sisaldab, miks igaüks saab seda vastu võtta ja mida see sulle ei ütle."
lang: et
page: adsb
updated: 2026-10-23
reviewed: false
next:
  label: "Ehita oma vastuvõtja"
  href: build
---

## Lennuk, mis ütleb, kus ta on

![Satelliit ütleb lennukile, kus ta on; lennuk saadab oma asukoha igas suunas, ringidena, mida püüab kinni iga maja maa peal ja ka iga teine lennuk](/img/fig-adsb-broadcast.svg)

![Üks sõnum kannab nelja asja: kes lennuk on, kus ta on, kui kõrgel ja kui kiiresti; ja see saadetakse uuesti iga sekund](/img/fig-adsb-message.svg)

ADS-B tähendab *Automatic Dependent Surveillance – Broadcast* (automaatne sõltuv seire – ringhääling). Võtame sõnad ükshaaval. *Automaatne*: lennuk saadab selle ise, keegi ei küsi. *Sõltuv*: asukoht tuleb lennuki enda satelliitnavigatsioonist, mitte maapealsest radarist. *Seire*: nii jälgib lennujuhtimine lennukit. *Ringhääling*: see saadetakse kõigile, mitte ühele kuulajale.

Umbes kord sekundis saadab lennuk lühikese sõnumi sagedusel **1090 MHz**. Sõnum kannab tema identiteeti (sellele lennukikerele antud 24-bitine aadress ja tavaliselt lennu kutsung), tema asukohta (laius- ja pikkuskraad), kõrgust, kiirust ja kurssi. Teised sõnumid, mida saadetakse aeg-ajalt, lisavad lennuki kategooria, vertikaalkiiruse ja mõned lipud.

Alates 2020. aastast peavad enamik Euroopa ja Ameerika Ühendriikide kontrollitavas õhuruumis lendavaid lennukeid ADS-B-d välja saatma. Reisilennukid teevad seda, ärilennukid teevad seda, paljud kergelennukid teevad seda. Mõned sõjaväe- ja riigilennukid ei tee seda, või teevad seda ilma oma asukohata.

## Miks sa saad kuulata

![Antennist väikese raadiopulgani, sealt Raspberry Pi-ni ja ekraanini, mis näitab lennukeid](/img/fig-adsb-chain.svg)

Sõnumid ei ole krüpteeritud ega allkirjastatud. See on taotluslik: kogu mõte on selles, et iga lennuk ja iga maajaam ümberringi kuuleks iga teist lennukit. Formaat on avalik, määratletud standarditega, millel lennundus toimib, ja sagedus on kõikjal maailmas sama.

Nii et vastuvõtja on lihtsalt raadio, mis on häälestatud sagedusele 1090 MHz, ja programm, mis muudab impulsid tekstiks. Kakskümmend aastat tagasi maksis see raadio tuhandeid. Täna teeb selle töö ära digitelevisiooni jaoks müüdav USB-pulk, umbes pöidla suurune, sest selle kiibile saab öelda, et ta kuulaks mis tahes sagedust ja annaks toorsignaali arvutile. Seda pulka nimetatakse RTL-SDR-iks, selles oleva kiibi (RTL2832U) ja idee järgi (*software-defined radio*, tarkvaraga määratletud raadio: dekodeerimise teeb arvuti).

Programm, mis Raspberry Pi peal dekodeerimist teeb, on tavaliselt **readsb**, vanema *dump1090* järeltulija. See kuulab pulka, dekodeerib sõnumid ja pakub tulemust kõigele, mis seda soovib: kaardile sinu brauseris (**tar1090**), jälgimisvõrgustiku söötjale või ZenithBoardi seinale.

## Ameerika Ühendriikides: ka 978 MHz

Ameerika Ühendriigid kasutavad ka teist sagedust, **978 MHz**, mida nimetatakse UAT (*Universal Access Transceiver*, universaalse juurdepääsuga transiiver), peamiselt madalal lendavate väikelennukite jaoks. Selle kuulmiseks on vaja teist USB-pulka ja teist antenni. Kõikjal mujal on 1090 MHz kõik, mis on. ZenithBoard küsib sinu piirkonda ühe korra ja mainib 978 MHz ainult siis, kui vastad *Ameerika Ühendriigid*.

## Kui kaugele sa kuuled

![Signaal liigub sirgjooneliselt, samal ajal kui maa kumerus kaob eemale: nähtavusjoonest kõrgemal olev lennuk on kuuldav, horisondi taga olev jääb peitu ja kõrgem antenn näeb kaugemale](/img/fig-adsb-range.svg)

Signaal liigub sirgjooneliselt, nagu valgus. Reisilennukõrgusel olev lennuk on nähtav väga kaugelt, kui ainult midagi ei jää tema ja sinu antenni vahele. Mäe poole vaatavast aknast võid kuulda mõnikümmend kilomeetrit; vaba horisondiga katuselt on 250 km ja rohkem tavaline, ja ääre peal olevad lennukid on need, mis on 11 000 meetri kõrgusel. Madalad lennukid sinu lähedal on peidus iga hoone ja puu taga. Ulatus sõltub antennist ja selle vaatest, mitte arvutist.

## Mida ADS-B sulle ei ütle

Sõnum ütleb, kus lennuk on, mitte kuhu ta läheb. Lähtekoht, sihtkoht, lennufirma nimi ja lennuki foto tulevad mujalt: avalikest registritest ja andmebaasidest, millest jälgimisvõrgustikud ja ZenithBoard lennuki aadressi järgi otsivad. ADS-B ei ütle ka midagi selle kohta, kes on pardal, ega midagi sinu kohta: vastuvõtt on passiivne, sinu vastuvõtja ei saada midagi välja.

## MLAT: nende kuulmine, kes ei ütle

![Neli vastuvõtjat maa peal kuulevad sama sõnumit neljal eri ajal; igaühe ümber ring, mille suurus on tema saabumisaeg; neli ringi lõikuvad ainult ühes punktis, seal, kus on lennuk](/img/mlat.svg)

Mõned lennukid saadavad oma identiteedi, aga mitte asukohta (vanemad transponderid teevad nii). Kui neli või enam vastuvõtjat kuulevad sama sõnumit, annavad saabumisaja pisikesed erinevused asukoha, samamoodi nagu välku leitakse selle kõue järgi. Seda nimetatakse **MLAT**, *multilateration* (multilateratsioon). Sinu üksik vastuvõtja ei saa seda üksinda teha; võrgustikku söötes saab temast üks neljast. See on üks tõelistest põhjustest jagada.
