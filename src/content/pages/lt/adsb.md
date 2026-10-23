---
title: "Kas yra ADS-B"
description: "Signalas, kurį transliuoja kiekvienas lėktuvas: ką jis turi, kodėl kiekvienas gali jį priimti ir ko jis jums nepasako."
lang: lt
page: adsb
updated: 2026-10-23
reviewed: false
next:
  label: "Pasigaminkite imtuvą"
  href: build
---

## Lėktuvas, kuris sako, kur jis yra

![Palydovas pasako orlaiviui, kur jis yra; orlaivis išsiunčia savo padėtį į visas puses žiedais, kuriuos gali priimti kiekvienas namas žemėje ir kitas orlaivis](/img/fig-adsb-broadcast.svg)

![Viename pranešime yra keturi dalykai: kas yra orlaivis, kur jis yra, kaip aukštai ir kaip greitai skrenda; ir jis siunčiamas iš naujo kas sekundę](/img/fig-adsb-message.svg)

ADS-B reiškia *Automatic Dependent Surveillance – Broadcast* (automatinė priklausoma stebėsena – transliacija). Imkime žodžius po vieną. *Automatinė*: orlaivis siunčia pats, niekas neprašo. *Priklausoma*: padėtis gaunama iš paties orlaivio palydovinės navigacijos, o ne iš radaro ant žemės. *Stebėsena*: taip skrydžių valdymas seka orlaivį. *Transliacija*: siunčiama visiems, o ne vienam klausytojui.

Maždaug kartą per sekundę orlaivis perduoda trumpą pranešimą **1090 MHz** dažniu. Pranešime yra jo tapatybė (24 bitų adresas, suteiktas tam orlaiviui, ir paprastai skrydžio šaukinys), jo padėtis (platuma ir ilguma), aukštis, greitis ir kursas. Kiti pranešimai, siunčiami retkarčiais, prideda orlaivio kategoriją, vertikalųjį greitį ir kelis požymius.

Nuo 2020 m. dauguma orlaivių, skrendančių kontroliuojamoje oro erdvėje Europoje ir Jungtinėse Valstijose, privalo transliuoti ADS-B. Keleiviniai lėktuvai tai daro, verslo lėktuvai tai daro, daugelis lengvųjų orlaivių tai daro. Kai kurie kariniai ir valstybiniai orlaiviai to nedaro arba daro be savo padėties.

## Kodėl galite klausytis

![Nuo antenos iki mažo radijo rakto, iki Raspberry Pi, iki ekrano, kuris rodo orlaivius](/img/fig-adsb-chain.svg)

Pranešimai nėra nei šifruoti, nei pasirašyti. Taip sumanyta: visa esmė ta, kad kiekvienas orlaivis ir kiekviena antžeminė stotis aplink girdėtų visus kitus orlaivius. Formatas viešas, apibrėžtas standartais, kuriais remiasi aviacija, o dažnis vienodas visame pasaulyje.

Taigi imtuvas – tai tiesiog radijas, nustatytas į 1090 MHz, ir programa, kuri impulsus paverčia tekstu. Prieš dvidešimt metų toks radijas kainavo tūkstančius. Šiandien USB raktas, parduodamas skaitmeninei televizijai, maždaug nykščio dydžio, atlieka šį darbą, nes jo lustui galima liepti klausytis bet kurio dažnio ir perduoti neapdorotą signalą kompiuteriui. Tas raktas vadinamas RTL-SDR, pagal viduje esantį lustą (RTL2832U) ir idėją (*software-defined radio* – programinės įrangos valdomas radijas: dekodavimą atlieka kompiuteris).

Programa, kuri dekoduoja Raspberry Pi, paprastai yra **readsb**, senesnės *dump1090* įpėdinė. Ji klausosi rakto, dekoduoja pranešimus ir siūlo rezultatą viskam, kas jo nori: žemėlapiui jūsų naršyklėje (**tar1090**), sekimo tinklo siuntikliui arba ZenithBoard sienai.

## Jungtinėse Valstijose: dar ir 978 MHz

Jungtinės Valstijos naudoja ir antrą dažnį, **978 MHz**, vadinamą UAT (*Universal Access Transceiver* – universaliosios prieigos siųstuvas-imtuvas), daugiausia mažiems, žemai skrendantiems orlaiviams. Norint jį girdėti, reikia antro USB rakto ir antros antenos. Visur kitur yra tik 1090 MHz. ZenithBoard vieną kartą paklausia jūsų regiono ir 978 MHz mini tik tuo atveju, jei atsakote *Jungtinės Valstijos*.

## Kaip toli girdite

![Signalas sklinda tiesia linija, o Žemė nuo jos lenkiasi žemyn: orlaivis virš matymo linijos girdimas, už horizonto esantis – paslėptas, o aukštesnė antena mato toliau](/img/fig-adsb-range.svg)

Signalas sklinda tiesia linija, kaip šviesa. Kreiseriniame aukštyje skrendantis orlaivis matomas iš labai toli, jei tik niekas nestovi tarp jo ir jūsų antenos. Pro langą, nukreiptą į kalvą, galite girdėti kelias dešimtis kilometrų; nuo stogo su atviru horizontu įprasta 250 km ir daugiau, o orlaiviai pakraštyje – tie, kurie skrenda 11 000 metrų aukštyje. Žemai skrendančius orlaivius netoli jūsų slepia kiekvienas pastatas ir medis. Nuotolis priklauso nuo antenos ir jos vaizdo, o ne nuo kompiuterio.

## Ko ADS-B jums nepasako

Pranešimas sako, kur orlaivis yra, o ne kur jis skrenda. Išvykimo vieta, paskirties vieta, oro linijų pavadinimas ir orlaivio nuotrauka ateina iš kitur: iš viešų registrų ir iš duomenų bazių, kuriose sekimo tinklai ir ZenithBoard ieško pagal orlaivio adresą. ADS-B taip pat nieko nesako apie tai, kas yra lėktuve, ir nieko apie jus: priėmimas yra pasyvus, jūsų imtuvas nieko nesiunčia.

## MLAT: girdėti tuos, kurie nesako

![Keturi imtuvai ant žemės girdi tą pačią žinutę keturiais skirtingais laikais; aplink kiekvieną – apskritimas, kurio dydis yra jo priėmimo laikas; keturi apskritimai kertasi tik viename taške, ten, kur yra orlaivis](/img/mlat.svg)

Kai kurie orlaiviai siunčia savo tapatybę, bet ne padėtį (taip daro senesni atsakikliai). Jei keturi ar daugiau imtuvų girdi tą patį pranešimą, maži atvykimo laiko skirtumai duoda padėtį, panašiai kaip žaibo vieta nustatoma pagal griaustinį. Tai vadinama **MLAT**, *multilateration* (multilateracija). Jūsų vienas imtuvas to negali padaryti vienas; siųsdamas duomenis tinklui, jis tampa vienu iš tų keturių. Tai viena iš tikrųjų priežasčių dalytis.
