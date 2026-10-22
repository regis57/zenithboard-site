---
title: "Pasigaminkite imtuvą"
description: "Raspberry Pi, USB radijo raktas, antena: dalių sąrašas su kainomis, kur dėti anteną ir programinė įranga viena komanda."
lang: lt
page: build
updated: 2026-10-22
reviewed: false
next:
  label: "Tada prisijunkite prie bendruomenės"
  href: join
---

## Dalys

Penki dalykai, ir tris iš jų galbūt jau turite.

| Dalis | Į ką atkreipti dėmesį | Apie |
|---|---|---|
| Raspberry Pi | **3B, 3B+ arba 4** yra idealus: 1 GB atminties pakanka imtuvui, siuntikliams ir sienai, išmatuota autoriaus Pi 3B. **Zero 2 W** (512 MB, kaina 15 US$) veikia su imtuvu ir siena, be papildomų siuntiklių. | 15–60 € |
| USB radijo raktas | **RTL-SDR** raktas. RTL-SDR Blog modeliai yra atskaitos taškas, apie 35–40 US$. Raktas, pagamintas ADS-B, su įmontuotu 1090 MHz filtru (pavyzdžiui, FlightAware Pro Stick), mieste girdi toliau. | 30–45 € |
| Antena | Maža antena, suderinta **1090 MHz** dažniui. Ta, kuri parduodama su kai kuriais raktais, veikia prie lango; speciali ADS-B antena, pusės metro ilgio, ant stogo ar balkono girdi daug toliau. | 10–40 € |
| Micro-SD kortelė | 16 GB ar daugiau, žinomo gamintojo. | 8–12 € |
| Maitinimo šaltinis | Oficialus, skirtas jūsų Pi. Telefono įkroviklio dažnai nepakanka, ir Pi jums tai parodys žaibo piktograma. | 8–12 € |

Iš viso: **maždaug nuo 60 iki 120 €**, vieną kartą. Kainos keičiasi; tai dydžių eilės, matytos gamintojų svetainėse 2026 m. spalį. Anteną pirkite paskutinę: pradėkite nuo to, kas pridedama prie rakto, pažiūrėkite, ką girdite, tada spręskite.

Sena planšetė ar bet koks ekranas su naršykle, sienai, yra neprivalomas ir tikriausiai jau guli stalčiuje.

## Kur dėti anteną

Tai vienintelis dalykas, kuris keičia jūsų nuotolį, todėl verta skirti jam minutę. Signalas sklinda tiesia linija. Antena nori dangaus, o ne kambario: langas yra minimumas, balkonas – gerai, stogas ar pastogė po čerpėmis – geriausia. Vertikaliai, atokiau nuo metalo, taip aukštai, kiek leidžia kabelis. Dviem metrais aukščiau dažnai nugali brangesnį raktą.

Pats Pi gali likti viduje; USB kabeliai iki maždaug trijų metrų tinka. Jei raktas vasarą įkaista, tai normalu.

## Programinė įranga, du būdai

### Klasikinis būdas: readsb ir tar1090

Dekoderis yra [**readsb**](https://github.com/wiedehopf/readsb); žemėlapis jūsų naršyklėje – [**tar1090**](https://github.com/wiedehopf/tar1090); abu yra to paties autoriaus laisva programinė įranga su diegimo scenarijais, kurie veikia naujoje Raspberry Pi OS. Tada kiekvieną siuntiklį pridedate rankiniu būdu, iš kiekvieno tinklo puslapio. Tai kelias tiems, kurie mėgsta suprasti kiekvieną dalį.

### Viskas viename: ZenithBoard

ZenithBoard įdiegia readsb, jūsų pasirinktus siuntiklius ir sieną iš vieno meniu, vieną kartą užduoda kelis klausimus (jūsų regionas, jūsų matavimo vienetai, kur yra jūsų antena) ir leidžia vėliau pridėti ar pašalinti bet kurią dalį. Jis taip pat palaiko veikiantį tik vieną MLAT klientą, nes keli vienu metu perkrauna Pi.

Paruoškite kortelę su Raspberry Pi Imager (Raspberry Pi OS Lite, 64 bitų, su įjungtu SSH ir įvestu jūsų Wi-Fi), paleiskite Pi, tada iš savo kompiuterio:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Skaičiuokite maždaug valandą pirmą kartą, didžioji jos dalis – laukimas, kol atsisiųs. Kai baigta, meniu išspausdina sienos adresą, `http://<the Pi's address>:8080/`; atverkite jį planšetės naršyklėje, ir siena jau ten. Jūsų pačių žemėlapis, tar1090, yra adresu `http://<the Pi's address>/tar1090/`.

## Jūsų padėtis

Dekoderiui, MLAT ir sienos atstumams reikia žinoti, kur yra antena: platuma, ilguma, aukštis. Spustelėkite dešiniuoju pelės mygtuku savo namą žemėlapyje, kad nukopijuotumėte koordinates. Ši padėtis lieka jūsų Pi ir siuntiklių nustatymuose; ZenithBoard niekada nerodo jos nei sienoje, nei įraše, ir tinklai jos taip pat neskelbia. Nuo jos matuojamas nuotolis, ir tiek.

## Kas gali nepavykti

Raktas nerandamas: naudokite USB 2.0 jungtį, o ne mėlynas USB 3.0 jungtis Pi 4, ir trumpą kabelį. Žemėlapis tuščias: duokite jam dešimt minučių, tada patikrinkite, ar antena vertikali ir prie lango. Pi rodo žaibo piktogramą: maitinimo šaltinis per silpnas. Wi-Fi nutrūksta: kabelis arba perkelkite Pi; pačiam imtuvui reikia labai mažai pralaidumo. Likusieji atsakymai – DUK.
