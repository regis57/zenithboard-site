---
title: "KKK"
description: "Ulatus, takistused, Wi-Fi, mälu, seaduslikkus, privaatsus: küsimused, mida inimesed enne ja pärast vastuvõtja ehitamist küsivad, otse vastatud."
lang: et
page: faq
updated: 2026-10-22
reviewed: false
next:
  label: "Kes seda teeb ja kuidas öelda aitäh"
  href: about
---

## Kas kuulamine on seaduslik?

Vastuvõtt on passiivne: sinu antenn ei saada midagi välja. ADS-B saadetakse avalikult välja just selleks, et kõik saaksid seda kuulda, ja andmeid näidatakse avalikel kaartidel terve päeva. Enamikus riikides on krüpteerimata välja saadetud raadiosignaalide vastuvõtmine seaduslik; nende jagamine jälgimisvõrgustikega on see, mida tuhanded inimesed avalikult teevad. Kui sinu riigis on raadiovastuvõtu kohta erireeglid, kontrolli neid; see sait ei ole juriidiline nõuanne.

## Kui kaugele ma kuulen?

Nii kaugele, kui sinu antenn näeb. Signaal liigub sirgjooneliselt, nii et küsimus on, mis jääb sinu antenni ja taeva vahele. Aken: mõnikümmend kilomeetrit, rohkem sellel küljel, kuhu aken vaatab. Rõdu või kivikatuse all olev pööning: sageli 150 kuni 250 km. Vaba horisondiga katus: 300 km ja kaugemale, reisilennukõrgusel olevate lennukite suunas. Madalad lennukid sinu lähedal on hoonete ja puude taga peidus, tee mida tahad. Miski Raspberry Pi juures ulatust ei muuda.

## Minu kaart on tühi

Anna sellele pärast esimest käivitamist kümme minutit. Seejärel kontrolli, selles järjekorras: pulk on USB 2.0 pordis (must, mitte Pi 4 sinised USB 3.0 pordid); antenn on külge keeratud ja vertikaalne; see on akna lähedal. Kui pulk on nähtav, aga midagi ei tule, võib võimendus olla liiga kõrge või liiga madal: menüü laseb sul seda samm-sammult liigutada ja statistika näitab mõju.

## Kas Wi-Fi-st piisab?

Jah, vastuvõtja ja söötjate jaoks: mõni kilobait sekundis. Sein tahvelarvutil on samuti kerge. Mida Wi-Fi teeb halvasti, on töökindlus: õues signaali äärel olev Pi kukub aeg-ajalt võrgust välja. Kaabel parandab selle; samuti Pi liigutamine, sest antennikaabel võib olla mõni meeter pikk. ZenithBoardi valvurid ühendavad Pi uuesti, kui võrk tagasi tuleb.

## Kas 1 GB mälust piisab?

Mõõdetult jah. Autori Pi 3B peal, kus töötasid ADS-B Exchange ja selle MLAT, FlightAware, Flightradar24, sein, statistika ja Bluesky postitused, oli 1 GB-st 656 MB veel vaba. 512 MB-ga Pi Zero 2 W jooksutab vastuvõtjat ja seina; lisa lisasöötjad ja läheb kitsaks. Ära osta selleks suuremat Pi-d: ulatus tuleb antennist.

## Kas see aeglustab mu internetti või kulutab andmemahtu?

Ei. Söötja saadab mõni kilobait sekundis, vähem kui raadiovoog. Kuu jooksul teeb see kõige rohkem mõne gigabaidi, jagatuna võrgustike vahel, mida söödad.

## Kes näeb minu asukohta?

Võrgustikud, mida söödad, vajavad seda ulatuste ja MLAT-i arvutamiseks ning hoiavad seda sinu kontol. Nad ei pane avalikul kaardil nõela sinu maja peale. ZenithBoard ei näita sinu asukohta kunagi seinal ega postituses: postitused nimetavad sinu linna, mitte sinu koordinaate. Sinu sein ja sinu enda kaart vastavad ainult sinu koduvõrgule, kui sa neid ise ei ava, ja ZenithBoard selgitab VPN-i enne, kui selgitab avatud porti.

## Kas sein näitab iga lennukit?

Iga lennukit, mis saadab oma asukoha välja ja on sinu valitud raadiuses. Vanemate transponderitega lennukid, mis asukohta ei saada, ilmuvad ainult siis, kui mõne võrgustiku MLAT need leiab, ja ainult võrgustike kaartidel. Mõned sõjaväe- ja riigilennukid ei saada üldse midagi välja. Sein ütleb, mida ta kuuleb, mitte rohkem.

## Kuidas on Ameerika Ühendriikide ja 978 MHz-ga?

Ameerika Ühendriikides kasutavad paljud väikelennukid 1090 MHz asemel 978 MHz (UAT). Nende kuulmiseks on vaja teist pulka ja teist antenni. ZenithBoard küsib sinu piirkonda ühe korra; kui vastad *Ameerika Ühendriigid*, pakub see lisasammu ja alustab Briti ühikutega. Mujal ei näidata 978 MHz kohta midagi.

## Kas ma saan seda jooksutada ilma Raspberry Pi-ta?

Vastuvõtja ja söötjad jooksevad igal Linuxi arvutil. ZenithBoard ise on mõeldud Raspberry Pi OS-ile; seina demo jookseb igal Pythoniga arvutil, ilma igasuguse riistvarata, kui tahad lihtsalt näha, kuidas see välja näeb.

## Kas midagi sellest on toode?

Ei. ZenithBoard on vaba tarkvara GPL-i all; selle saidi tekst on Creative Commonsi litsentsi all; midagi ei müüda, kontot pole vaja, telemeetriat ei ole ja see sait ei sea küpsiseid ega pöördu kolmandate osapoolte poole. Ainus raha, mis liigub, on üks õlu, kui sul on selleks tuju, iga lehe allosas.
