---
title: "Kas ir ADS-B"
description: "Signāls, ko raida katra lidmašīna, kas tajā ir, kāpēc ikviens var to uztvert, un ko tas tev nepasaka."
lang: lv
page: adsb
updated: 2026-10-22
reviewed: false
next:
  label: "Uzbūvē savu uztvērēju"
  href: build
---

## Lidmašīna, kas saka, kur tā ir

ADS-B nozīmē *Automatic Dependent Surveillance – Broadcast* (automātiskā atkarīgā novērošana – apraide). Ņemsim vārdus pa vienam. *Automātiskā*: lidmašīna sūta to pati, neviens neprasa. *Atkarīgā*: pozīcija nāk no lidmašīnas pašas satelītnavigācijas, nevis no radara uz zemes. *Novērošana*: tā gaisa satiksmes vadība seko lidmašīnai. *Apraide*: tas tiek sūtīts visiem, nevis vienam klausītājam.

Apmēram reizi sekundē lidmašīna pārraida īsu ziņojumu uz **1090 MHz**. Ziņojums satur tās identitāti (24 bitu adresi, piešķirtu šim konkrētajam gaisa kuģim, un parasti lidojuma izsaukuma signālu), tās pozīciju (platumu un garumu), augstumu, ātrumu un kursu. Citi ziņojumi, sūtīti šad tad, papildina ar lidmašīnas kategoriju, vertikālo ātrumu un dažiem karodziņiem.

Kopš 2020. gada lielākajai daļai lidmašīnu, kas lido kontrolējamā gaisa telpā Eiropā un Amerikas Savienotajās Valstīs, ir pienākums raidīt ADS-B. Pasažieru lidmašīnas to dara, biznesa lidmašīnas to dara, daudzas vieglās lidmašīnas to dara. Dažas militārās un valsts lidmašīnas to nedara vai dara bez savas pozīcijas.

## Kāpēc tu vari klausīties

Ziņojumi nav šifrēti un nav parakstīti. Tas ir ar nolūku: visa jēga ir tajā, ka katra lidmašīna un katra zemes stacija apkārt var dzirdēt katru citu lidmašīnu. Formāts ir publisks, definēts standartos, uz kuriem balstās aviācija, un frekvence ir vienāda visā pasaulē.

Tātad uztvērējs ir vienkārši radio, noskaņots uz 1090 MHz, un programma, kas pārvērš impulsus tekstā. Pirms divdesmit gadiem šāds radio maksāja tūkstošus. Šodien USB zibatmiņa, ko pārdod digitālajai televīzijai, apmēram īkšķa lielumā, tiek galā ar šo darbu, jo tās mikroshēmai var likt klausīties jebkuru frekvenci un nodot neapstrādāto signālu datoram. Šo zibatmiņu sauc par RTL-SDR, pēc mikroshēmas tās iekšienē (RTL2832U) un pēc idejas (*software-defined radio*, programmatūras definēts radio: atkodēšanu veic dators).

Programma, kas veic atkodēšanu uz Raspberry Pi, parasti ir **readsb**, vecākās *dump1090* pēctece. Tā klausās zibatmiņu, atkodē ziņojumus un piedāvā rezultātu visam, kas to vēlas: kartei tavā pārlūkā (**tar1090**), izsekošanas tīkla padevējam vai ZenithBoard tablo.

## Amerikas Savienotajās Valstīs: arī 978 MHz

Amerikas Savienotās Valstis izmanto arī otru frekvenci, **978 MHz**, ko sauc par UAT (*Universal Access Transceiver*, universālās piekļuves raiduztvērējs), galvenokārt mazām lidmašīnām, kas lido zemu. Lai to dzirdētu, vajag otru USB zibatmiņu un otru antenu. Visur citur 1090 MHz ir viss, kas ir. ZenithBoard vienreiz pajautā tavu reģionu un piemin 978 MHz tikai tad, ja atbildi *Amerikas Savienotās Valstis*.

## Cik tālu tu dzirdi

Signāls ceļo pa taisnu līniju, kā gaisma. Lidmašīna kreisēšanas augstumā ir redzama no ļoti tālu, ja vien nekas nestāv starp to un tavu antenu. No loga pret pakalnu tu vari dzirdēt dažus desmitus kilometru; no jumta ar skaidru horizontu 250 km un vairāk ir ierasts, un lidmašīnas pašā malā ir tās, kas lido 11 000 metru augstumā. Zemu lidojošas lidmašīnas tev tuvumā aizsedz katra ēka un koks. Tālums ir atkarīgs no antenas un tās skata, nevis no datora.

## Ko ADS-B tev nepasaka

Ziņojums saka, kur lidmašīna atrodas, nevis kurp tā dodas. Izlidošanas vieta, galamērķis, aviokompānijas nosaukums un lidmašīnas foto nāk no citurienes: no publiskiem reģistriem un no datubāzēm, kurās izsekošanas tīkli un ZenithBoard meklē pēc lidmašīnas adreses. ADS-B arī neko nesaka par to, kas ir uz klāja, un neko par tevi: uztveršana ir pasīva, tavs uztvērējs neko neraida.

## MLAT: dzirdēt tos, kas nesaka

Dažas lidmašīnas sūta savu identitāti, bet ne pozīciju (tā dara vecāki transponderi). Ja četri vai vairāk uztvērēji dzird vienu un to pašu ziņojumu, sīkās atšķirības pienākšanas laikā dod pozīciju, tāpat kā zibeni nosaka pēc tā pērkona. To sauc par **MLAT**, *multilateration* (multilaterāciju). Tavs vienīgais uztvērējs to nevar izdarīt viens pats; padodot datus tīklam, tas kļūst par vienu no četriem. Tas ir viens no īstajiem iemesliem dalīties.
