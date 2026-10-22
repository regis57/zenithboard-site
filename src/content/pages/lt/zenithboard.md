---
title: "ZenithBoard"
description: "Taškų siena arba oro uosto perverčiamų plokštelių lenta senoje planšetėje, žiniatinklio konsolė, įrašai Bluesky. Nemokama, atvira, vienas meniu viskam įdiegti."
lang: lt
page: zenithboard
updated: 2026-10-22
reviewed: false
next:
  label: "Įdiekite: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

## Vienu sakiniu

ZenithBoard paverčia Raspberry Pi ir USB radijo raktą ADS-B imtuvu, kuris siunčia duomenis keturiems tinklams ir rodo orlaivius tiesiai virš jūsų namų senoje planšetėje, kaip švytinčią taškinės matricos iškabą arba oro uosto perverčiamų plokštelių lentą. Tai laisva programinė įranga pagal GPL, ir ji kasdien veikia autoriaus paties Pi 3B, lauke, per Wi-Fi, Mozelyje.

![Siena: ZENITHBOARD švytinčiais taškais ir orlaivis](/img/banner-dots.webp)

## Siena

Siena – tai tinklalapis, kurį Pi teikia jūsų namų tinkle. Atverkite jį bet kurioje planšetėje ar ekrane su naršykle, pridėkite į pradžios ekraną, ir jis lieka įjungtas. Jis pereina per kiekvieną orlaivį jūsų pasirinktame spindulyje, nuo 1 iki 50 km (arba mylių): šaukinys, orlaivio tipas, aukštis, greitis, iš kur ir kur skrenda skrydis, atstumas ir kryptis nuo jūsų. Dvi išvaizdos: **128 × 80 taškų** tinklelis, kaip sena stoties iškaba, arba **perverčiamų plokštelių lenta**, kurios raidės persiverčia, kai atskrenda kitas orlaivis. Penkios spalvos: gintarinė, žalia, raudona, balta, turkio; po vieną, nes esmė – švytinti iškaba, o ne žemėlapio ekrano kopija.

![Perverčiamų plokštelių išvaizda: ZENITHBOARD, OVERHEAD NOW](/img/banner-flap.webp)

Šalia teksto – taškais nupieštas orlaivio siluetas, dvi mažos vėliavos (kur orlaivis registruotas, kur pagamintas) ir, jei norite, jo nuotrauka iš Planespotters, su fotografo vardu. Jokio oro linijų logotipo, jokio gamintojo logotipo: tai saugomi ženklai, todėl vietoj jų – vėliavos. Maršrutai ir modeliai gaunami iš viešų užklausų; siena sako tai, ką žino, ir palieka eilutę tuščią, kai nežino.

Sieną galite išbandyti visai be įrangos: saugykloje yra demonstracinė versija su išgalvotomis oro linijomis ir visko pavyzdžiu, nuo A380 iki sraigtasparnio, kuri veikia bet kuriame kompiuteryje su Python.

## Imtuvas ir keturi tinklai

ZenithBoard įdiegia **readsb** kaip dekoderį su jo žemėlapiu **tar1090** ir jūsų pažymėtus siuntiklius: ADS-B Exchange visada, FlightAware, Flightradar24 ir Plane Finder, jei jų norite. Jis palaiko veikiantį lygiai vieną MLAT klientą ir suskaičiuoja juos `zenithboard status`. Viskas pagal numatytuosius nustatymus išjungta ir grąžinama: kiekvienas *įjungta* turi *išjungta*, kuris viską grąžina atgal, prieš bet kokį griaunantį veiksmą daroma atsarginė kopija, o meniu visada turi išėjimą.

Imtuvo stiprinimą galima derinti iš meniu arba konsolės, po vieną žingsnį, su statistika, kad matytumėte, ar tai padėjo. Neprivaloma statistika saugo mėnesį pranešimų per valandą, nuotolio ir orlaivių per dieną; **graphs1090** braižo jų metus.

## Konsolė

Nuo 0.39 versijos `http://<the Pi>:8080/console` rodo nustatymus sienos išvaizda: Pi apžvalgą (veikimo laikas, temperatūra, atmintis, kiekviena tarnyba), sieną, imtuvą, Bluesky, prižiūrėtojus (watchdogs), atnaujinimus. Po vieną skiltį, šoninė juosta kompiuteryje, kortelės telefone. Kiekvienas pakeitimas vykdo tą pačią komandą, kurią vykdytų meniu, ir parodo jums, ką ji išspausdino. Konsolė yra dvidešimčia kalbų; ši svetainė naudoja tą patį sąrašą ir tas pačias vėliavas.

![Konsolė: imtuvo skiltis, žaliai](/img/banner-radar.webp)

## Bluesky

Neprivaloma, pagal numatytuosius nustatymus išjungta. Įjungus, Pi skelbia Bluesky įrašo vertus orlaivius: karinį degalų papildymo lėktuvą, Beluga, tipą, kurio nematė mėnesį, tolimiausią mėnesio orlaivį. Kiekvienas įrašas – tai sienos nuotrauka šalia orlaivio trajektorijos žemėlapio, abu nupiešti paties Pi, su trumpu tekstu: skrydis, tipas, maršrutas, aukštis ir jūsų miesto pavadinimas, niekada – jūsų padėtis. Jūsų Bluesky programėlės slaptažodis lieka Pi, faile, kurį gali skaityti tik tarnyba; jis niekada nepasirodo nei žurnale, nei sienoje.

## Sukurta taip, kad nesugestų

ZenithBoard veikia kaip root, klausosi jūsų tinkle ir diegia kitų žmonių programinę įrangą, todėl sukurta taip, kad ribotų tai, kas gali nepavykti. Siena atsako tik jūsų namų tinklui, o visiems kitiems duoda 403, nesvarbu, ar prievadas persiųstas, ar ne; norint ją matyti iš išorės, meniu paaiškina VPN, o ne atvirą prievadą. Kiekviena tarnyba veikia systemd smėlio dėžėje, tik su tuo, ko reikia jos darbui. Paketų parašai niekada neišjungiami. Debian saugumo pataisos gali įsidiegti pačios kasdien. Du prižiūrėtojai paleidžia iš naujo tai, kas užstrigo, o *health* komanda viename ekrane pasako, ar viskas gerai.

## Ko reikia

Raspberry Pi 3B ar naujesnio su 1 GB atminties, išmatuota: autoriaus Pi 3B, su ADS-B Exchange ir jo MLAT, FlightAware, Flightradar24, siena, statistika ir Bluesky įrašais, vis dar buvo laisva 656 MB atminties. Pi Zero 2 W veikia su imtuvu ir siena, be papildomų siuntiklių. Raspberry Pi OS Lite, 64 bitų. Valanda pirmą kartą; po to – `sudo zenithboard update`, kai išeina nauja versija.
