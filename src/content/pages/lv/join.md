---
title: "Pievienojies kopienai"
description: "Pieci tīkli pieņems to, ko dzird tavs uztvērējs, un dos kaut ko pretī. Ko tu dod, ko tu saņem, un kas paliek mājās."
lang: lv
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "Iepazīsti ZenithBoard"
  href: zenithboard
---

## Kāpēc vispār dalīties

Tavs uztvērējs dzird dažus simtus kilometru tev apkārt. Uztvērēju tīkls dzird visu planētu. Katra karte, ko tu jebkad esi skatījis lidojumu izsekošanas vietnē, ir veidota no tādiem cilvēkiem kā tu, ar Raspberry Pi uz palodzes, kuri sūta to, ko dzird. Debesis nepieder nevienam; kartes pastāv tāpēc, ka tūkstoši ar tām dalās.

Dalīšanās tev neko nemaksā: daži kilobaiti sekundē uz tavas interneta līnijas, un uz Pi nekas, par ko būtu vērts runāt. Pretī tīkli atver tev savas maksas funkcijas, un tava vienīgā antena kļūst par daļu no MLAT, kas atrod lidmašīnas, kuras nesaka, kur tās ir.

## Pieci tīkli

Katrs no tiem grib vienu un to pašu — atkodēto ziņojumu plūsmu no readsb — un katram ir sava maza programma, lai to nosūtītu. ZenithBoard uzinstalē tos, kurus tu atzīmē; tu vari tos uzinstalēt arī pats no katra tīkla lapas.

### [ADS-B Exchange](https://www.adsbexchange.com/)

Kopienas pašas tīkls, ko uztur brīvprātīgie un kas pazīstams ar to, ka rāda katru lidmašīnu, ko dzird, bez filtrēšanas pēc pieprasījuma. Padevei nevajag kontu: viņu skripts darbojas uz Pi, un tava plūsma parādās viņu vietnē ar savu statistiku. MLAT dalībnieki saņem atpakaļ lidmašīnas, kuras viņu dati palīdzēja atrast. ZenithBoard to uzskata par pamatslāni; pārējie ir pēc izvēles virs tā.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

Padevēju sauc **PiAware**. Pretī FlightAware dod padevējiem bezmaksas **Enterprise** kontu: astoņus mēnešus lidojumu vēstures, neierobežotus brīdinājumus, kartes bez reklāmām un statistiku par to, ko dzird tavs uztvērējs, ar lidojumiem, kurus tas palīdzēja izsekot.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

Padevēju sauc **fr24feed**. Pretī bezmaksas konts, kas piesaistīts tavam uztvērējam, tiek paaugstināts uz **Contributor** plānu, tiklīdz pienāk dati. Viena dalīšanās atslēga katrai plūsmai; ja tu padod datus arī citiem tīkliem, Flightradar24 lūdz izslēgt savu MLAT, ko ZenithBoard izdara tavā vietā.

### [Plane Finder](https://planefinder.net/sharing/client)

Padevējs ir **Plane Finder ADS-B Client**. Pretī Plane Finder nodrošina bezmaksas premium piekļuvi savai vietnei un lietotnēm tiem, kas dalās.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

Padevēju sauc **rbfeeder** (AirNav Radar agrāk saucās RadarBox). Pretī AirNav Radar dod **Business** kontu tiem, kas dalās. Pi pats izveido savu dalīšanās atslēgu; lai piesaistītu staciju savam kontam, tu pieslēdzies viņu vietnē, atver stacijas reģistrācijas lapu un ielīmē tur šo atslēgu.

## Ko tu dod

Pašus ziņojumus: lidmašīnas adresi, izsaukuma signālu, pozīciju, augstumu, ātrumu, tādus, kādi tie tika raidīti atklāti. Laiku, kad katrs pienāca, kas ir tas, ko MLAT vajag. Tava uztvērēja pozīciju, lai tīkls zina, no kurienes dati ir dzirdēti. Neko no tava mājas tīkla, ne kameru, ne mikrofonu; padevēju programmas ir mazas, atvērtas vai dokumentētas, un ZenithBoard rāda tev, ko katra no tām dara.

## Kas paliek mājās

Tavu precīzo pozīciju tīkli izmanto, lai aprēķinātu tālumus un MLAT; tā netiek rādīta viņu publiskajās kartēs kā kniepadata uz tavas mājas, un ZenithBoard nekad nerāda to uz tablo vai ierakstā. Tava planšetdatora tablo un tava tar1090 karte ir tikai tavā mājas tīklā, ja vien tu pats tās neatver uz āru. Visu, ar ko dalies, tu vari pārtraukt dalīt: padevēja izslēgšana izvēlnē atgriež visu, kā bija.

## Viens MLAT klients, nevis pieci

Katrs tīkls var darbināt savu MLAT klientu uz tava Pi. Pieci vienlaikus ir par daudz Raspberry Pi: procesors tērē laiku aritmētikai, un tablo raustās. ZenithBoard uztur darbībā vienu MLAT klientu, ADS-B Exchange klientu, un izslēdz MLAT pārējos; `zenithboard status` saskaita darbojošos, lai tu vari pārbaudīt, ka ir tieši viens. Ja instalē padevējus ar roku, dari tāpat.

## Kā sākt

ZenithBoard izvēlnē **1 ADS-B** ir uzskaitīti pieci tīkli, katrs ar savu atzīmi; ADS-B Exchange vienmēr ir ieslēgts. FlightAware, Flightradar24, Plane Finder un AirNav Radar vajadzībām tu izveido bezmaksas kontu viņu vietnē; instalētājs vienreiz izdrukā saiti vai atslēgu, kas jāielīmē. ADS-B Exchange skripts pajautā stacijas nosaukumu un tavu pozīciju un izdrukā saiti, kur redzēt tavu plūsmu. Pēc desmit minūtēm tavs uztvērējs ir viņu kartēs, un statistikas lapas rāda, cik tālu tu dzirdi.
