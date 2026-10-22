---
title: "ZenithBoard"
description: "Punktu tablo vai lidostas pārkrītošo plākšņu tablo uz veca planšetdatora, tīmekļa konsole, ieraksti Bluesky. Bezmaksas, atvērts, viena izvēlne visam."
lang: lv
page: zenithboard
updated: 2026-10-23
reviewed: false
next:
  label: "Uzinstalē to: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

## Vienā teikumā

ZenithBoard pārvērš Raspberry Pi un USB radio zibatmiņu par ADS-B uztvērēju, kas padod datus četriem tīkliem, un rāda lidmašīnas tieši virs tavas mājas uz veca planšetdatora kā izgaismotu punktu matricas zīmi vai lidostas pārkrītošo plākšņu tablo. Tā ir brīvā programmatūra, zem GPL, un tā katru dienu darbojas uz autora paša Pi 3B, ārā, caur Wi-Fi, Mozelē.

![Punktu matricas tablo tirkīza krāsā: BAW357, British Airways A320neo, aviokompānijas nosaukums ritinās blakus reģistrācijas karogam, tad nākamā lidmašīna](/img/zb-wall.webp)

## Tablo

Tablo ir tīmekļa lapa, ko Pi piedāvā tavā mājas tīklā. Atver to uz jebkura planšetdatora vai ekrāna ar pārlūku, pievieno sākuma ekrānam, un tas paliek ieslēgts. Tas pārslēdzas cauri visām lidmašīnām tevis izvēlētajā rādiusā, no 1 līdz 50 km (vai jūdzēm): izsaukuma signāls, lidmašīnas tips, augstums, ātrums, no kurienes lidojums nāk un kurp dodas, attālums un virziens no tevis. Divi izskati: režģis no **128 reiz 80 punktiem**, kā veca stacijas zīme, vai **pārkrītošo plākšņu tablo**, kura burti pārkrīt, kad nāk nākamā lidmašīna. Piecas krāsas: dzintara, zaļa, sarkana, balta, tirkīza; viena vienlaikus, jo jēga ir izgaismota zīme, nevis kartes ekrānuzņēmums.

![Pārkrītošo plākšņu izskats zaļā krāsā: burti pārkrīt no vienas lidmašīnas uz nākamo](/img/zb-flap-roll.webp)

![Tablo dzintara un tirkīza punktu matricā, un zaļās pārkrītošajās plāksnēs](/img/wall-three-colours.webp)

Blakus tekstam — lidmašīnas siluets, zīmēts punktos, divi mazi karogi (kur lidmašīna ir reģistrēta, kur tā ir būvēta) un, ja vēlies, tās foto no Planespotters, ar fotogrāfa vārdu. Ne aviokompānijas logo, ne ražotāja logo: tās ir aizsargātas zīmes, tāpēc to vietā stāv karogi. Maršruti un modeļi nāk no publiskiem uzmeklējumiem; tablo saka to, ko zina, un atstāj rindu tukšu, kad nezina.

Tablo vari izmēģināt bez jebkādas aparatūras: repozitorijā ir demo ar izdomātām aviokompānijām un paraugu visam, no A380 līdz helikopteram, kas darbojas uz jebkura datora ar Python.

## Uztvērējs un četri tīkli

ZenithBoard uzinstalē **readsb** kā atkodētāju, ar tā karti **tar1090**, un padevējus, kurus atzīmē: ADS-B Exchange vienmēr, FlightAware, Flightradar24 un Plane Finder, ja tos vēlies. Tas uztur darbībā tieši vienu MLAT klientu un saskaita tos ar `zenithboard status`. Viss pēc noklusējuma ir izslēgts un atgriezenisks: katram *ieslēgt* ir *izslēgt*, kas atgriež visu, kā bija, pirms jebkā destruktīva tiek izveidota rezerves kopija, un izvēlnē vienmēr ir izeja.

Uztvērēja pastiprinājumu var regulēt no izvēlnes vai konsoles, pa vienam solim, ar statistiku, lai redzētu, vai tas palīdzēja. Pēc izvēles statistika glabā mēnesi ziņojumu stundā, tāluma un lidmašīnu dienā; **graphs1090** zīmē no tās gadus.

## Konsole

Kopš versijas 0.39, `http://<the Pi>:8080/console` rāda iestatījumus tablo izskatā: Pi pārskatu (darbības laiks, temperatūra, atmiņa, katrs serviss), tablo, uztvērēju, Bluesky, sargsuņus, atjauninājumus. Viena sadaļa vienlaikus, sānjosla datorā, cilnes telefonā. Katra izmaiņa izpilda to pašu komandu, ko izpildītu izvēlne, un rāda tev, ko tā izdrukāja. Konsole ir divdesmit vienā valodā; šī vietne izmanto to pašu sarakstu un tos pašus karogus.

![Airbus Beluga uz pārkrītošo plākšņu tablo](/img/wall-beluga-flap.webp)

## Bluesky

Pēc izvēles, pēc noklusējuma izslēgts. Ieslēgts, Pi publicē Bluesky lidmašīnas, kas ir ieraksta vērtas: militāro tankeri, Beluga, tipu, ko tas nav redzējis mēnesi, mēneša tālāko. Katrs ieraksts ir tablo attēls blakus lidmašīnas trajektorijas kartei, abus zīmē pats Pi, ar īsu tekstu: lidojums, tips, maršruts, augstums un tavas pilsētas nosaukums, nekad tava pozīcija. Tava Bluesky lietotnes parole paliek uz Pi, failā, ko var lasīt tikai pats serviss; tā nekad neparādās ne žurnālā, ne uz tablo.

## Būvēts, lai nenoietu greizi

ZenithBoard darbojas kā root, klausās tavā tīklā un instalē citu cilvēku programmatūru, tāpēc tas ir būvēts tā, lai ierobežotu to, kas var noiet greizi. Tablo atbild tikai tavam mājas tīklam un visiem pārējiem dod 403, ar pārsūtītu portu vai bez; lai to redzētu no ārpuses, izvēlne izskaidro VPN, nevis atvērtu portu. Katrs serviss darbojas systemd smilškastē tikai ar to, kas tā darbam nepieciešams. Pakotņu paraksti nekad netiek atspējoti. Debian drošības labojumi var instalēties paši katru dienu. Divi sargsuņi pārstartē to, kas iesalst, un *health* komanda vienā ekrānā pasaka, vai viss ir kārtībā.

## Kas tam vajadzīgs

Raspberry Pi 3B vai jaunāks ar 1 GB atmiņas, izmērīts: uz autora Pi 3B, ar ADS-B Exchange un tā MLAT, FlightAware, Flightradar24, tablo, statistiku un Bluesky ierakstiem, 656 MB atmiņas joprojām bija brīvi. Pi Zero 2 W darbina uztvērēju un tablo, bez papildu padevējiem. Raspberry Pi OS Lite, 64 bitu. Stunda pirmajā reizē; pēc tam `sudo zenithboard update`, kad iznākusi jauna versija.
