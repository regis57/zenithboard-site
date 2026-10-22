---
title: "BUJ"
description: "Tālums, šķēršļi, Wi-Fi, atmiņa, likumība, privātums: jautājumi, ko cilvēki uzdod pirms un pēc uztvērēja būvēšanas, atbildēti vienkārši."
lang: lv
page: faq
updated: 2026-10-22
reviewed: false
next:
  label: "Kas to veido, un kā pateikt paldies"
  href: about
---

## Vai klausīties ir likumīgi?

Uztveršana ir pasīva: tava antena neko neraida. ADS-B tiek raidīts atklāti tieši tāpēc, lai ikviens to varētu dzirdēt, un dati visu dienu tiek rādīti publiskās kartēs. Lielākajā daļā valstu nešifrēti raidītu radiosignālu uztveršana ir likumīga; dalīšanās ar tiem ar izsekošanas tīkliem ir tas, ko tūkstoši cilvēku dara atklāti. Ja tavā valstī ir īpaši noteikumi par radio uztveršanu, pārbaudi tos; šī vietne nav juridiska konsultācija.

## Cik tālu es dzirdēšu?

Tik tālu, cik tava antena redz. Signāls ceļo pa taisnu līniju, tāpēc jautājums ir, kas stāv starp tavu antenu un debesīm. Logs: daži desmiti kilometru, vairāk tajā pusē, uz kuru logs vērsts. Balkons vai bēniņi zem dakstiņiem: bieži 150 līdz 250 km. Jumts ar skaidru horizontu: 300 km un tālāk, lidmašīnu virzienā kreisēšanas augstumā. Zemu lidojošas lidmašīnas tev tuvumā aizsedz ēkas un koki, lai ko tu darītu. Nekas Raspberry Pi nemaina tālumu.

## Mana karte ir tukša

Dod tai desmit minūtes pēc pirmās palaišanas. Tad pārbaudi šādā secībā: zibatmiņa ir USB 2.0 portā (melnajā, nevis zilajos USB 3.0 uz Pi 4); antena ir pieskrūvēta un vertikāla; tā ir pie loga. Ja zibatmiņa ir redzama, bet nekas nenāk, pastiprinājums var būt par augstu vai par zemu: izvēlne ļauj to pārvietot pa vienam solim, un statistika rāda efektu.

## Vai Wi-Fi pietiek?

Jā, uztvērējam un padevējiem: daži kilobaiti sekundē. Tablo uz planšetdatora arī ir viegls. Tas, ko Wi-Fi dara slikti, ir uzticamība: Pi ārā, signāla malā, šad tad atslēgsies. Kabelis to atrisina; tāpat arī Pi pārvietošana, jo antenas kabelis var būt dažus metrus garš. ZenithBoard sargsuņi atkal pieslēdz Pi, kad tīkls atgriežas.

## Vai 1 GB atmiņas pietiek?

Izmērīts, jā. Uz autora Pi 3B ar darbojošos ADS-B Exchange un tā MLAT, FlightAware, Flightradar24, tablo, statistiku un Bluesky ierakstiem 656 MB no 1 GB joprojām bija brīvi. Pi Zero 2 W ar 512 MB darbina uztvērēju un tablo; pievieno papildu padevējus, un kļūst šauri. Nepērc lielāku Pi šim nolūkam: tālums nāk no antenas.

## Vai tas palēnina manu internetu vai patērē datus?

Nē. Padevējs sūta dažus kilobaitus sekundē, mazāk nekā radio straume. Mēneša laikā tas ir lielākais daži gigabaiti, sadalīti starp tīkliem, kuriem padod datus.

## Kas var redzēt manu pozīciju?

Tīkliem, kuriem padod datus, tā vajadzīga, lai aprēķinātu tālumus un MLAT, un tie glabā to tavā kontā. Tie neliek kniepadatu uz tavas mājas publiskajā kartē. ZenithBoard nekad nerāda tavu pozīciju ne uz tablo, ne ierakstā: ieraksti nosauc tavu pilsētu, nevis tavas koordinātas. Tavs tablo un tava paša karte atbild tikai tavam mājas tīklam, ja vien tu pats tās neatver uz āru, un ZenithBoard izskaidro VPN, pirms tas izskaidro atvērtu portu.

## Vai tablo rādīs katru lidmašīnu?

Katru lidmašīnu, kas raida savu pozīciju un ir tevis izvēlētajā rādiusā. Lidmašīnas ar vecākiem transponderiem, kas nesūta pozīciju, parādās tikai tad, ja tīkla MLAT tās atrod, un tikai tīklu kartēs. Dažas militārās un valsts lidmašīnas neraida vispār. Tablo saka to, ko dzird, ne vairāk.

## Kā ar Amerikas Savienotajām Valstīm un 978 MHz?

Amerikas Savienotajās Valstīs daudzas mazas lidmašīnas izmanto 978 MHz (UAT) nevis 1090 MHz. Lai tās dzirdētu, vajag otru zibatmiņu un otru antenu. ZenithBoard vienreiz pajautā tavu reģionu; ja atbildi *Amerikas Savienotās Valstis*, tas piedāvā papildu soli un sāk ar imperiālajām mērvienībām. Citur nekas par 978 MHz netiek rādīts.

## Vai es varu to darbināt bez Raspberry Pi?

Uztvērējs un padevēji darbojas uz jebkura Linux datora. Pats ZenithBoard ir paredzēts Raspberry Pi OS; tablo demo darbojas uz jebkura datora ar Python, bez jebkādas aparatūras, ja tu vienkārši gribi redzēt, kā tas izskatās.

## Vai kaut kas no tā ir produkts?

Nē. ZenithBoard ir brīvā programmatūra zem GPL; šīs vietnes teksts ir zem Creative Commons licences; nekas netiek pārdots, konts nav vajadzīgs, nav telemetrijas, un šī vietne neuzstāda sīkdatnes un neizsauc trešās puses. Vienīgā nauda, kas kustas, ir alus, ja tev ir tāda vēlme, katras lapas apakšā.
