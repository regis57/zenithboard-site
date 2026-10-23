---
title: "Ehita vastuvõtja"
description: "Raspberry Pi, USB-raadiopulk, antenn: osade nimekiri koos hindadega, kuhu antenn panna, ja tarkvara ühe käsuga."
lang: et
page: build
updated: 2026-10-23
reviewed: false
next:
  label: "Seejärel liitu kogukonnaga"
  href: join
---

## Osad

Viis asja, ja kolm neist võivad sul juba olemas olla.

| Osa | Mida otsida | Umbes |
|---|---|---|
| ![](/img/part-pi.svg) Raspberry Pi | **3B, 3B+ või 4** on ideaalne: 1 GB mälust piisab vastuvõtja, söötjate ja seina jaoks, mõõdetud autori Pi 3B peal. **Zero 2 W** (512 MB, hinnakirjas 15 US$) jooksutab vastuvõtjat ja seina, ilma lisasöötjateta. | 15–60 € |
| ![](/img/part-stick.svg) USB-raadiopulk | **RTL-SDR** dongel. RTL-SDR Blogi mudelid on etalon, umbes 35–40 US$. ADS-B jaoks tehtud pulk, sisseehitatud 1090 MHz filtriga (näiteks FlightAware'i Pro Stick), kuuleb linnas kaugemale. | 30–45 € |
| ![](/img/part-antenna.svg) Antenn | Väike antenn, häälestatud sagedusele **1090 MHz**. Mõne pulgaga kaasas müüdav töötab akna peal; spetsiaalne ADS-B antenn, pool meetrit pikk, kuuleb katusel või rõdul palju kaugemale. | 10–40 € |
| ![](/img/part-sdcard.svg) Micro-SD kaart | 16 GB või rohkem, tuntud tootjalt. | 8–12 € |
| ![](/img/part-psu.svg) Toiteplokk | Sinu Pi ametlik toiteplokk. Telefonilaadijast sageli ei piisa ja Pi annab sellest teada välguikooniga. | 8–12 € |

Kokku: **umbes 60 kuni 120 €**, ühekordselt. Hinnad muutuvad; need on suurusjärgud, mida tootjate saitidel 2026. aasta oktoobris nähti. Osta antenn viimasena: alusta sellega, mis pulgaga kaasas on, vaata, mida kuuled, ja siis otsusta.

Vana tahvelarvuti või mis tahes brauseriga ekraan, seina jaoks, on valikuline ja ilmselt juba kuskil sahtlis.

## Kuhu antenn panna

See on ainus asi, mis sinu ulatust muudab, nii et see väärib minutit. Signaal liigub sirgjooneliselt. Antenn tahab taevast, mitte tuba: aken on miinimum, rõdu on hea, katus või kivikatuse all olev pööning on parim. Vertikaalselt, metallist eemal, nii kõrgel, kui kaabel lubab. Kaks meetrit kõrgemal võidab sageli kallima pulga.

Pi ise võib jääda tuppa; kuni umbes kolmemeetrised USB-kaablid sobivad. Kui pulk läheb suvel kuumaks, on see normaalne.

## Tarkvara, kahel viisil

### Klassikaline viis: readsb ja tar1090

Dekooder on [**readsb**](https://github.com/wiedehopf/readsb); kaart sinu brauseris on [**tar1090**](https://github.com/wiedehopf/tar1090); mõlemad on sama autori vaba tarkvara, paigaldusskriptidega, mis töötavad värskel Raspberry Pi OS-il. Seejärel lisad iga söötja käsitsi, iga võrgustiku enda lehelt. See on õige tee, kui sulle meeldib igast tükist aru saada.

### Kõik-ühes viis: ZenithBoard

ZenithBoard paigaldab readsb, sinu valitud söötjad ja seina ühest menüüst, küsib need mõned küsimused ühe korra (sinu piirkond, sinu ühikud, kus su antenn on) ja laseb sul hiljem mis tahes osa lisada või eemaldada. Samuti hoiab see töös ainult ühte MLAT-klienti, sest mitu korraga koormavad Pi üle.

Valmista kaart ette Raspberry Pi Imageriga (Raspberry Pi OS Lite, 64-bitine, SSH lubatud ja sinu Wi-Fi andmed sisestatud), käivita Pi ja seejärel oma arvutist:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Arvesta esimesel korral umbes tunniga, millest suurem osa kulub allalaadimiste ootamisele. Kui see on valmis, trükib menüü seina aadressi, `http://<the Pi's address>:8080/`; ava see tahvelarvuti brauseris ja sein ongi seal. Sinu enda kaart, tar1090, asub aadressil `http://<the Pi's address>/tar1090/`.

## Sinu asukoht

Dekooder, MLAT ja seina kaugused peavad teadma, kus antenn on: laiuskraad, pikkuskraad, kõrgus. Tee kaardil oma maja peal paremklõps, et koordinaadid kopeerida. See asukoht jääb sinu Pi peale ja söötjate seadetesse; ZenithBoard ei näita seda kunagi seinal ega postituses ja võrgustikud ei avalda seda samuti. Sellest mõõdetakse ulatust, see on kõik.

## Mis võib valesti minna

Pulka ei leita: kasuta USB 2.0 porti, mitte Pi 4 siniseid USB 3.0 porte, ja lühikest kaablit. Kaart on tühi: anna sellele kümme minutit, siis kontrolli, et antenn on vertikaalne ja akna lähedal. Pi näitab välguikooni: toiteplokk on liiga nõrk. Wi-Fi katkeb: kaabel, või liiguta Pi-d; vastuvõtja ise vajab väga vähe ribalaiust. Ülejäänu on KKK-s.
