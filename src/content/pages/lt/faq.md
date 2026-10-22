---
title: "DUK"
description: "Nuotolis, kliūtys, Wi-Fi, atmintis, teisėtumas, privatumas: klausimai, kuriuos žmonės užduoda prieš ir po imtuvo gaminimo, atsakyti aiškiai."
lang: lt
page: faq
updated: 2026-10-23
reviewed: false
next:
  label: "Kas tai daro ir kaip padėkoti"
  href: about
---

## Ar klausytis teisėta?

Priėmimas yra pasyvus: jūsų antena nieko nesiunčia. ADS-B transliuojamas atvirai būtent tam, kad visi galėtų jį girdėti, o duomenys visą dieną rodomi viešuose žemėlapiuose. Daugumoje šalių priimti neužšifruotai transliuojamus radijo signalus yra teisėta; dalytis jais su sekimo tinklais – tai, ką atvirai daro tūkstančiai žmonių. Jei jūsų šalyje yra konkrečių taisyklių dėl radijo priėmimo, patikrinkite jas; ši svetainė nėra teisinė konsultacija.

## Kaip toli girdėsiu?

Taip toli, kiek mato jūsų antena. Signalas sklinda tiesia linija, todėl klausimas – kas stovi tarp jūsų antenos ir dangaus. Langas: kelios dešimtys kilometrų, daugiau į tą pusę, į kurią nukreiptas langas. Balkonas ar pastogė po čerpėmis: dažnai nuo 150 iki 250 km. Stogas su atviru horizontu: 300 km ir daugiau, link kreiseriniame aukštyje skrendančių orlaivių. Žemai skrendančius orlaivius netoli jūsų slepia pastatai ir medžiai, kad ir ką darytumėte. Niekas, kas susiję su Raspberry Pi, nuotolio nekeičia.

## Mano žemėlapis tuščias

Duokite jam dešimt minučių po pirmo paleidimo. Tada patikrinkite tokia tvarka: raktas įkištas į USB 2.0 jungtį (juodą, o ne mėlyną USB 3.0 jungtį Pi 4); antena prisukta ir vertikali; ji prie lango. Jei raktas matomas, bet nieko neateina, stiprinimas gali būti per didelis arba per mažas: meniu leidžia keisti jį po vieną žingsnį, o statistika rodo poveikį.

## Ar pakanka Wi-Fi?

Taip, imtuvui ir siuntikliams: keli kilobaitai per sekundę. Siena planšetėje taip pat lengva. Ką Wi-Fi daro blogai – tai patikimumas: Pi lauke, signalo pakraštyje, retkarčiais atsijungs. Kabelis tai išsprendžia; taip pat ir Pi perkėlimas, nes antenos kabelis gali būti kelių metrų ilgio. ZenithBoard prižiūrėtojai iš naujo prijungia Pi, kai tinklas grįžta.

## Ar pakanka 1 GB atminties?

Išmatuota – taip. Autoriaus Pi 3B, veikiant ADS-B Exchange ir jo MLAT, FlightAware, Flightradar24, sienai, statistikai ir Bluesky įrašams, iš 1 GB vis dar buvo laisva 656 MB. Pi Zero 2 W su 512 MB veikia su imtuvu ir siena; pridėjus papildomus siuntiklius darosi ankšta. Nepirkite didesnio Pi dėl to: nuotolis ateina iš antenos.

## Ar tai lėtina mano internetą arba kainuoja duomenų?

Ne. Siuntiklis siunčia kelis kilobaitus per sekundę, mažiau nei radijo srautas. Per mėnesį tai daugiausia keli gigabaitai, pasidalyti tarp tinklų, kuriems siunčiate.

## Kas gali matyti mano padėtį?

Tinklams, kuriems siunčiate, jos reikia nuotoliams ir MLAT skaičiuoti, ir jie laiko ją jūsų paskyroje. Jie nededa smeigtuko ant jūsų namo viešame žemėlapyje. ZenithBoard niekada nerodo jūsų padėties nei sienoje, nei įraše: įrašuose nurodomas jūsų miestas, o ne jūsų koordinatės. Jūsų siena ir jūsų pačių žemėlapis atsako tik jūsų namų tinklui, nebent patys juos atvertumėte, o ZenithBoard paaiškina VPN anksčiau nei atvirą prievadą.

## Kas yra MLAT ir kodėl mano imtuvui reikia kitų?

MLAT – tai *multilateracijos* santrumpa. Taip tinklas randa orlaivį, kuris siunčia savo tapatybę, bet **ne** savo padėtį, kaip daro senesni atsakikliai: jie atsako „aš čia“ be to „čia“.

Visa gudrybė – laikas. Radijo bangos sklinda šviesos greičiu, maždaug 300 metrų per kiekvieną mikrosekundę. Kai toks orlaivis siunčia, kiekvienas imtuvas, iki kurio signalas pasiekia, girdi tą pačią žinutę, bet ne tą pačią akimirką: artimiausias ją išgirsta pirmas, tolimesnis – keliais šimtais mikrosekundžių vėliau. Vienas imtuvas iš to nieko nesužino; jis neturi supratimo, kada žinutė paliko orlaivį. Bet sudėkite keturis imtuvus, kiekvieną su labai tiksliu laikrodžiu, ir jų priėmimo laikų skirtumai danguje palieka tik vieną vietą, iš kurios žinutė galėjo ateiti. Ta vieta nubrėžiama, ir orlaivis pasirodo žemėlapyje.

![Keturi imtuvai ant žemės girdi tą pačią žinutę keturiais skirtingais laikais; aplink kiekvieną – apskritimas, kurio dydis yra jo priėmimo laikas; keturi apskritimai kertasi tik viename taške, ten, kur yra orlaivis](/img/mlat.svg)

Paveikslėlyje: keturi imtuvai, keturi priėmimo laikai, keturi apskritimai. Kiekvienas apskritimas reiškia „orlaivis yra taip toli nuo manęs“. Jie susitinka vienoje vietoje, ir tik vienoje. Tai ir yra MLAT, ir todėl tinklai prašo kiekvieno siuntiklio siųsti tikslų kiekvienos žinutės priėmimo laiką, o ne vien žinutę.

Taigi jūsų vienas imtuvas pats MLAT atlikti negali, ir tai yra sąžiningas atsakymas į klausimą „kam dalytis?“: siųsdami duomenis tinklui, savo antena tampate vienu iš keturių, ir orlaiviai, kurie apie savo padėtį nieko nesako, pradeda rodytis – tinklų žemėlapiuose ir, per duomenis, kuriuos jie siunčia atgal, jūsiškiame. Tai paaiškina ir du dalykus, kuriuos daro ZenithBoard: jis laiko veikiantį **vieną** MLAT klientą (skaičiavimai Raspberry Pi yra sunkūs) ir jam reikia tikslios jūsų antenos padėties, nes apskritimas, nubrėžtas iš netinkamos vietos, su kitais susitinka netinkamame taške.

## Ar siena rodys kiekvieną orlaivį?

Kiekvieną orlaivį, kuris transliuoja savo padėtį ir yra jūsų pasirinktame spindulyje. Orlaiviai su senesniais atsakikliais, kurie nesiunčia padėties, pasirodo tik tada, jei tinklo MLAT juos suranda, ir tik tinklų žemėlapiuose. Kai kurie kariniai ir valstybiniai orlaiviai apskritai netransliuoja. Siena sako tai, ką girdi, ne daugiau.

## O kaip Jungtinės Valstijos ir 978 MHz?

Jungtinėse Valstijose daugelis mažų orlaivių naudoja 978 MHz (UAT) vietoj 1090 MHz. Norint juos girdėti, reikia antro rakto ir antros antenos. ZenithBoard vieną kartą paklausia jūsų regiono; jei atsakote *Jungtinės Valstijos*, jis pasiūlo papildomą žingsnį ir pradeda nuo imperinių vienetų. Kitur apie 978 MHz nieko nerodoma.

## Ar galiu tai paleisti be Raspberry Pi?

Imtuvas ir siuntikliai veikia bet kuriame Linux kompiuteryje. Pats ZenithBoard skirtas Raspberry Pi OS; sienos demonstracinė versija veikia bet kuriame kompiuteryje su Python, visai be įrangos, jei tiesiog norite pamatyti, kaip ji atrodo.

## Ar kas nors iš to yra produktas?

Ne. ZenithBoard yra laisva programinė įranga pagal GPL; šios svetainės tekstas yra pagal Creative Commons licenciją; niekas neparduodama, paskyros nereikia, nėra telemetrijos, o ši svetainė nenustato jokių slapukų ir nesikreipia į jokią trečiąją šalį. Vieninteliai pinigai, kurie juda, – alus, jei norite, kiekvieno puslapio apačioje.
