---
title: "Liitu kogukonnaga"
description: "Viis võrgustikku võtavad vastu selle, mida sinu vastuvõtja kuuleb, ja annavad midagi vastu. Mida sa annad, mida sa saad ja mis jääb koju."
lang: et
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "Avasta ZenithBoard"
  href: zenithboard
---

## Miks üldse jagada

Sinu vastuvõtja kuuleb mõnesaja kilomeetri raadiuses sinu ümber. Vastuvõtjate võrgustik kuuleb kogu planeeti. Iga kaart, mida sa oled kunagi lennujälgimise saidil vaadanud, koosneb sinusugustest inimestest, Raspberry Pi aknalaual, kes saadavad seda, mida nad kuulevad. Taevas ei kuulu kellelegi; kaardid on olemas, sest tuhanded jagavad seda.

Jagamine ei maksa sulle midagi: mõni kilobait sekundis sinu internetiühendusel ja Pi peal ei midagi mainimisväärset. Vastutasuks avavad võrgustikud sulle oma tasulised funktsioonid ja sinu üksik antenn saab osaks MLAT-ist, mis leiab lennukid, mis ei ütle, kus nad on.

## Viis võrgustikku

Igaüks neist tahab sama asja, readsb dekodeeritud sõnumite voogu, ja igaühel on oma väike programm selle saatmiseks. ZenithBoard paigaldab need, mille sa linnukesega märgid; võid need ka ise paigaldada iga võrgustiku lehelt.

### [ADS-B Exchange](https://www.adsbexchange.com/)

Kogukonna enda võrgustik, mida haldavad vabatahtlikud ja mis on tuntud selle poolest, et näitab iga lennukit, mida kuuleb, ilma et filtreeriks kellegi palvel. Söötmiseks pole kontot vaja: nende skript jookseb Pi peal ja sinu voog ilmub nende saidil koos statistikaga. MLAT-is osalejad saavad vastu lennukid, mille leidmisel nende andmed aitasid. ZenithBoard käsitleb seda põhikihina; teised on selle peal valikulised.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

Söötjat nimetatakse **PiAware**. Vastutasuks annab FlightAware söötjatele tasuta **Enterprise** konto: kaheksa kuud lennuajalugu, piiramatult hoiatusi, reklaamita kaardid ja statistika selle kohta, mida sinu vastuvõtja kuuleb, koos lendudega, mille jälgimisel see aitas.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

Söötjat nimetatakse **fr24feed**. Vastutasuks tõstetakse sinu vastuvõtjaga seotud tasuta konto **Contributor** paketile niipea, kui andmed saabuvad. Üks jagamisvõti söötja kohta; kui söödad ka teisi võrgustikke, palub Flightradar24 sul oma MLAT välja lülitada, mida ZenithBoard teeb sinu eest.

### [Plane Finder](https://planefinder.net/sharing/client)

Söötja on **Plane Finder ADS-B Client**. Vastutasuks korraldab Plane Finder neile, kes jagavad, oma veebisaidi ja rakenduste tasuta premium-kasutuse.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

Söötjat nimetatakse **rbfeeder** (AirNav Radar kandis varem nime RadarBox). Vastutasuks annab AirNav Radar neile, kes jagavad, **Business** konto. Pi loob ise oma jagamisvõtme; jaama oma kontoga sidumiseks logid nende saidile sisse, avad jaama registreerimise lehe ja kleebid sinna selle võtme.

## Mida sa annad

Sõnumid ise: lennuki aadress, kutsung, asukoht, kõrgus, kiirus, nii nagu need avalikult välja saadeti. Iga sõnumi saabumisaeg, mida MLAT vajab. Sinu vastuvõtja asukoht, et võrgustik teaks, kust andmed kuuldi. Mitte midagi sinu koduvõrgust, ei kaamerat ega mikrofoni; söötjaprogrammid on väikesed, avatud või dokumenteeritud, ja ZenithBoard näitab sulle, mida igaüks neist teeb.

## Mis jääb koju

Sinu täpset asukohta kasutavad võrgustikud ulatuste ja MLAT-i arvutamiseks; seda ei näidata nende avalikel kaartidel nõelana sinu maja peal ja ZenithBoard ei näita seda kunagi seinal ega postituses. Sinu tahvelarvuti sein ja sinu tar1090 kaart on ainult sinu koduvõrgus, kui sa neid ise ei ava. Kõike, mida jagad, saad jagamast lõpetada: söötja väljalülitamine menüüs paneb asjad tagasi nii, nagu need olid.

## Üks MLAT-klient, mitte viis

Iga võrgustik võib sinu Pi peal oma MLAT-klienti jooksutada. Viis korraga on Raspberry Pi jaoks liiga palju: protsessor kulutab oma aja aritmeetikale ja sein hakkab tõrkuma. ZenithBoard hoiab töös ühte MLAT-klienti, ADS-B Exchange'i oma, ja lülitab teistes MLAT-i välja; `zenithboard status` loeb töötavad kokku, et saaksid kontrollida, et neid on täpselt üks. Kui paigaldad söötjad käsitsi, tee sama.

## Alustamine

ZenithBoardis loetleb menüü **1 ADS-B** viis võrgustikku, igaühel linnuke; ADS-B Exchange on alati sees. FlightAware'i, Flightradar24, Plane Finderi ja AirNav Radari jaoks lood nende saidil tasuta konto; paigaldaja trükib lingi või kleebitava võtme, ühe korra. ADS-B Exchange'i puhul küsib nende skript jaama nime ja sinu asukohta ning trükib lingi, kust oma voogu näha. Kümme minutit hiljem on sinu vastuvõtja nende kaartidel ja statistikalehed näitavad, kui kaugele sa kuuled.
