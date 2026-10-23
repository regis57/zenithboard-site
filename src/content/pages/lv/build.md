---
title: "Uzbūvē uztvērēju"
description: "Raspberry Pi, USB radio zibatmiņa, antena: detaļu saraksts ar cenām, kur likt antenu, un programmatūra ar vienu komandu."
lang: lv
page: build
updated: 2026-10-23
reviewed: false
next:
  label: "Pēc tam pievienojies kopienai"
  href: join
---

## Detaļas

Piecas lietas, un trīs no tām tev, iespējams, jau ir.

| Detaļa | Kam pievērst uzmanību | Apmēram |
|---|---|---|
| ![](/img/part-pi.svg) Raspberry Pi | **3B, 3B+ vai 4** ir ideāls: 1 GB atmiņas pietiek uztvērējam, padevējiem un tablo, izmērīts uz autora Pi 3B. **Zero 2 W** (512 MB, cenrādī 15 US$) darbina uztvērēju un tablo, bez papildu padevējiem. | 15–60 € |
| ![](/img/part-stick.svg) USB radio zibatmiņa | **RTL-SDR** zibatmiņa. RTL-SDR Blog modeļi ir atskaites punkts, apmēram 35–40 US$. Zibatmiņa, kas radīta ADS-B, ar iebūvētu 1090 MHz filtru (piemēram, FlightAware Pro Stick), pilsētā dzird tālāk. | 30–45 € |
| ![](/img/part-antenna.svg) Antena | Maza antena, noskaņota uz **1090 MHz**. Tā, ko pārdod kopā ar dažām zibatmiņām, strādā pie loga; speciāla ADS-B antena, pusmetru gara, dzird daudz tālāk uz jumta vai balkona. | 10–40 € |
| ![](/img/part-sdcard.svg) Micro-SD karte | 16 GB vai vairāk, no pazīstama zīmola. | 8–12 € |
| ![](/img/part-psu.svg) Barošanas bloks | Oficiālais tavam Pi. Telefona lādētājs bieži nav pietiekams, un Pi tev to pateiks ar zibens ikonu. | 8–12 € |

Kopā: **apmēram 60 līdz 120 €**, vienreiz. Cenas mainās; šīs ir aptuvenās summas, kas redzētas ražotāju vietnēs 2026. gada oktobrī. Antenu pērc pēdējo: sāc ar to, kas nāk komplektā ar zibatmiņu, paskaties, ko dzirdi, un tad izlem.

Vecs planšetdators vai jebkurš ekrāns ar pārlūku, tablo vajadzībām, nav obligāts un, visticamāk, jau guļ kādā atvilktnē.

## Kur likt antenu

Tā ir vienīgā lieta, kas maina tavu tālumu, tāpēc tā ir pelnījusi minūti. Signāls iet pa taisnu līniju. Antena grib debesis, nevis istabu: logs ir minimums, balkons ir labi, jumts vai bēniņi zem dakstiņiem ir vislabāk. Vertikāli, tālāk no metāla, tik augstu, cik kabelis ļauj. Divi metri augstāk bieži pārspēj dārgāku zibatmiņu.

Pats Pi var palikt iekšā; USB kabeļi līdz apmēram trim metriem ir labi. Ja zibatmiņa vasarā sakarst, tas ir normāli.

## Programmatūra, divos veidos

### Klasiskais veids: readsb un tar1090

Atkodētājs ir [**readsb**](https://github.com/wiedehopf/readsb); karte tavā pārlūkā ir [**tar1090**](https://github.com/wiedehopf/tar1090); abas ir brīvā programmatūra no viena autora, ar instalēšanas skriptiem, kas strādā uz svaigas Raspberry Pi OS. Pēc tam katru padevēju pievieno ar roku, no katra tīkla paša lapas. Tas ir ceļš, ja tev patīk saprast katru detaļu.

### Viss vienā veids: ZenithBoard

ZenithBoard uzinstalē readsb, tavus izvēlētos padevējus un tablo no vienas izvēlnes, vienreiz uzdod tos dažus jautājumus (tavs reģions, tavas mērvienības, kur ir tava antena) un ļauj vēlāk pievienot vai noņemt jebkuru daļu. Tas arī uztur tikai vienu MLAT klientu darbībā, jo vairāki vienlaikus pārslogo Pi.

Sagatavo karti ar Raspberry Pi Imager (Raspberry Pi OS Lite, 64 bitu, ar ieslēgtu SSH un ierakstītu tavu Wi-Fi), iedarbini Pi, un tad no sava datora:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Rēķinies ar apmēram stundu pirmajā reizē, lielākoties gaidot lejupielādes. Kad tas ir pabeigts, izvēlne izdrukā tablo adresi, `http://<the Pi's address>:8080/`; atver to planšetdatora pārlūkā, un tablo ir klāt. Tava paša karte, tar1090, ir `http://<the Pi's address>/tar1090/`.

## Tava pozīcija

Atkodētājam, MLAT un tablo attālumiem ir jāzina, kur ir antena: platums, garums, augstums. Nospied ar peles labo pogu uz savas mājas kartē, lai nokopētu koordinātas. Šī pozīcija paliek uz tava Pi un padevēju iestatījumos; ZenithBoard nekad nerāda to ne uz tablo, ne ierakstā, un arī tīkli to nepublicē. No tās mēra tālumu, tas ir viss.

## Kas var noiet greizi

Zibatmiņa nav atrasta: izmanto USB 2.0 portu, nevis zilos USB 3.0 uz Pi 4, un īsu kabeli. Karte ir tukša: dod tai desmit minūtes, tad pārbaudi, vai antena ir vertikāla un pie loga. Pi rāda zibens ikonu: barošanas bloks ir pārāk vājš. Wi-Fi pazūd: kabelis, vai pārvieto Pi; pašam uztvērējam vajag ļoti maz joslas platuma. Pārējais ir BUJ sadaļā.
