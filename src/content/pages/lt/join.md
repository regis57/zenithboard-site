---
title: "Prisijunkite prie bendruomenės"
description: "Penki tinklai priims tai, ką girdi jūsų imtuvas, ir atsilygins. Ką duodate, ką gaunate ir kas lieka namuose."
lang: lt
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "Atraskite ZenithBoard"
  href: zenithboard
---

## Kodėl apskritai dalytis

Jūsų imtuvas girdi kelis šimtus kilometrų aplink jus. Imtuvų tinklas girdi visą planetą. Kiekvienas žemėlapis, į kurį kada nors žiūrėjote skrydžių sekimo svetainėje, sudarytas iš tokių žmonių kaip jūs, su Raspberry Pi ant palangės, siunčiančių tai, ką girdi. Dangus niekam nepriklauso; žemėlapiai egzistuoja, nes tūkstančiai juo dalijasi.

Dalijimasis jums nieko nekainuoja: keli kilobaitai per sekundę jūsų interneto linijoje ir nieko verto paminėti Pi. Mainais tinklai atveria jums savo mokamas funkcijas, o jūsų vienintelė antena tampa MLAT dalimi, kuri randa orlaivius, nesakančius, kur jie yra.

## Penki tinklai

Kiekvienas nori to paties – dekoduotų pranešimų srauto iš readsb, ir kiekvienas turi savo nedidelę programą jam siųsti. ZenithBoard įdiegia tuos, kuriuos pažymite; galite juos įdiegti ir patys iš kiekvieno tinklo puslapio.

### [ADS-B Exchange](https://www.adsbexchange.com/)

Pačios bendruomenės tinklas, valdomas savanorių ir žinomas tuo, kad rodo kiekvieną girdimą orlaivį, be filtravimo pagal prašymą. Siuntimui nereikia paskyros: jų scenarijus veikia Pi, o jūsų srautas atsiranda jų svetainėje su statistika. MLAT dalyviai atgal gauna orlaivius, kuriuos jų duomenys padėjo surasti. ZenithBoard laiko jį baziniu sluoksniu; kiti yra neprivalomi ant viršaus.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

Siuntiklis vadinasi **PiAware**. Mainais FlightAware suteikia siuntėjams nemokamą **Enterprise** paskyrą: aštuonis mėnesius skrydžių istorijos, neribotus įspėjimus, žemėlapius be reklamų ir statistiką apie tai, ką girdi jūsų imtuvas, su skrydžiais, kuriuos jis padėjo sekti.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

Siuntiklis vadinasi **fr24feed**. Mainais nemokama paskyra, susieta su jūsų imtuvu, pakeliama į **Contributor** planą, vos tik atkeliauja duomenys. Vienas dalijimosi raktas vienam srautui; jei siunčiate duomenis ir kitiems tinklams, Flightradar24 prašo išjungti jo paties MLAT, ką ZenithBoard padaro už jus.

### [Plane Finder](https://planefinder.net/sharing/client)

Siuntiklis yra **Plane Finder ADS-B Client**. Mainais Plane Finder suteikia nemokamą aukščiausio lygio naudojimąsi savo svetaine ir programėlėmis tiems, kurie dalijasi.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

Siuntiklis vadinasi **rbfeeder** (anksčiau AirNav Radar vadinosi RadarBox). Mainais AirNav Radar suteikia **Business** paskyrą tiems, kurie dalijasi. Pi pats susikuria savo dalijimosi raktą; kad susietumėte stotį su savo paskyra, prisijungiate jų svetainėje, atveriate stoties priskyrimo puslapį ir įklijuojate tą raktą.

## Ką duodate

Pačius pranešimus: orlaivio adresą, šaukinį, padėtį, aukštį, greitį, tokius, kokie buvo transliuoti atvirai. Kiekvieno pranešimo atvykimo laiką, ko reikia MLAT. Jūsų imtuvo padėtį, kad tinklas žinotų, iš kur duomenys buvo išgirsti. Nieko iš jūsų namų tinklo, jokios kameros, jokio mikrofono; siuntiklių programos nedidelės, atviros arba dokumentuotos, ir ZenithBoard parodo jums, ką kiekviena daro.

## Kas lieka namuose

Jūsų tikslią padėtį tinklai naudoja nuotoliams ir MLAT skaičiuoti; ji nerodoma jų viešuose žemėlapiuose kaip smeigtukas ant jūsų namo, o ZenithBoard niekada nerodo jos nei sienoje, nei įraše. Jūsų planšetės siena ir jūsų tar1090 žemėlapis yra tik jūsų namų tinkle, nebent patys juos atvertumėte. Viską, kuo dalijatės, galite nustoti dalytis: siuntiklio išjungimas meniu grąžina viską, kaip buvo.

## Vienas MLAT klientas, o ne penki

Kiekvienas tinklas gali paleisti savo MLAT klientą jūsų Pi. Penki vienu metu – per daug Raspberry Pi: procesorius leidžia laiką aritmetikai, o siena trūkčioja. ZenithBoard palaiko veikiantį vieną MLAT klientą, ADS-B Exchange, ir išjungia MLAT kituose; `zenithboard status` suskaičiuoja veikiančius, kad galėtumėte patikrinti, ar yra lygiai vienas. Jei siuntiklius diegiate rankiniu būdu, darykite tą patį.

## Kaip pradėti

ZenithBoard meniu **1 ADS-B** išvardija penkis tinklus su varnele prie kiekvieno; ADS-B Exchange visada įjungtas. FlightAware, Flightradar24, Plane Finder ir AirNav Radar atveju susikuriate nemokamą paskyrą jų svetainėje; diegimo programa vieną kartą išspausdina nuorodą arba raktą, kurį reikia įklijuoti. ADS-B Exchange atveju jų scenarijus paklausia stoties pavadinimo ir jūsų padėties ir išspausdina nuorodą, kur matyti jūsų srautą. Po dešimties minučių jūsų imtuvas jau jų žemėlapiuose, o statistikos puslapiai rodo, kaip toli girdite.
