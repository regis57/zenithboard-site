---
title: "ZenithBoard — debesis virs tevis, tiešraidē"
description: "Debesis virs tevis, atkodētas tevis paša, dalītas ar visu pasauli."
lang: lv
page: home
updated: 2026-10-30
reviewed: false
next:
  label: "Sāc šeit: kas ir ADS-B"
  href: adsb
---

## Kas tas ir

Katra lidmašīna virs tavas mājas runā. Apmēram reizi sekundē tā raida, kas tā ir, kur tā atrodas, cik augstu un cik ātri lido. Šo signālu sauc par ADS-B, tas nav šifrēts, un ikviens ar nelielu radio var to klausīties.

Šī vietne izskaidro trīs lietas, pēc kārtas: kas ir šis signāls, kā uzbūvēt tam uztvērēju ar Raspberry Pi un dažām detaļām, un kā pievienoties tūkstošiem cilvēku, kuri dalās ar to, ko dzird viņu uztvērējs, ar pasaules lidojumu izsekošanas tīkliem. Ceturtā daļa ir ZenithBoard: bezmaksas programma, kas uzinstalē to visu vienā piegājienā un rāda lidmašīnas virs galvas uz veca planšetdatora, kvēlojošos punktos vai uz lidostas pārkrītošo plākšņu tablo.

## Cik tas maksā, ko tas prasa, ko tas dod

**Tas maksā** apmēram 60 līdz 120 €, atkarībā no izvēlētā Raspberry Pi un antenas. Pēc tam nekā: ne abonementa, ne konta, par kuru būtu jāmaksā.

**Tas prasa** apmēram stundu pirmajā reizē, Raspberry Pi, sienas kontaktligzdu un tavu mājas Wi-Fi. Tev nav jāprot programmēt. Tu ierakstīsi dažas komandas, kuras tev iedos.

**Tas dod** lidmašīnas tev apkārt, uz tava paša ekrāna, bez neviena starpnieka. Ja dalies ar saviem datiem, izsekošanas tīkli dod kaut ko pretī: FlightAware atver bezmaksas Enterprise kontu, Flightradar24 — bezmaksas Contributor plānu, Plane Finder — bezmaksas premium piekļuvi savai vietnei un lietotnēm, AirNav Radar — Business kontu, un ADS-B Exchange rāda tavu plūsmu savā vietnē. Un ja ieslēdz ZenithBoard dalīšanos, lidmašīnas, kas šķērso tavas debesis, tiek publicētas Bluesky kā tava tablo attēls.

## Ierobežojumi, pateikti vienkārši

Uztvērējs dzird tikai to, ko tas redz: signāls ceļo pa taisnu līniju, tāpēc logs pret pakalnu dzird mazāk nekā jumts. Raspberry Pi ar 1 GB atmiņas pietiek visam, izmērīts uz autora paša Pi 3B. Wi-Fi strādā; kabelis strādā labāk. Nekas šeit nav pārdošanā; vienīgā nauda, kas kustas, ir alus, ja tev ir tāda vēlme, lapas apakšā.
