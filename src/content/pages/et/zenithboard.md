---
title: "ZenithBoard"
description: "Täppidest sein või lennujaama klapptabloo vanal tahvelarvutil, veebikonsool, postitused Bluesky's. Tasuta, avatud, üks menüü paigaldab kõik."
lang: et
page: zenithboard
updated: 2026-10-30
reviewed: false
next:
  label: "Paigalda see: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

> **Väljalaskekandidaat versioonile 1.0.** Alates 25. oktoobrist 2026 on versioon 0.99 külmutatud: kuu aja jooksul lisatakse ainult parandusi, samal ajal kui autori Pi töötab puutumata. 30. oktoobril lisandus kaks funktsiooni, AirNav Radar ja Telegrami sõnumid, seega algab kuu uuesti. Kui midagi lahtiseks ei jää, tuleb 1.0 kõige varem 29. novembril 2026. Proovimine praegu aitab: tagasiside [GitHubis](https://github.com/regis57/ZenithBoard/issues) on teretulnud.

## Ühe lausega

ZenithBoard muudab Raspberry Pi ja USB-raadiopulga ADS-B vastuvõtjaks, mis söödab nelja võrgustikku, ja näitab lennukeid otse sinu maja kohal vanal tahvelarvutil, helendava punktmaatrikstablooga või lennujaama klapptablooga. See on vaba tarkvara GPL-i all ja see jookseb iga päev autori enda Pi 3B peal, õues, Wi-Fi kaudu, Moselle'is.

![Punktmaatrikstabloona sein merevaigukollasena: Tunisair Airbus A320 oma kahe lipuga, lennuk täppidega joonistatud teksti kõrvale, seejärel järgmine lend](/img/zb-wall.webp)

## Sein

Sein on veebileht, mida Pi sinu koduvõrgus serveerib. Ava see mis tahes brauseriga tahvelarvutil või ekraanil, lisa avakuvale, ja see jääb sisse. See käib läbi kõik lennukid sinu valitud raadiuses, 1 kuni 50 km (või miili): kutsung, lennukitüüp, kõrgus, kiirus, kust lend tuleb ja kuhu läheb, kaugus ja suund sinust. Kaks välimust: **128 korda 80 täpist** võrgustik, nagu vana jaamatabloo, või **klapptabloo**, mille tähed keerlevad ümber, kui järgmine lennuk tuleb. Viis värvi: merevaigukollane, roheline, punane, valge, türkiis; üks korraga, sest mõte on helendav tabloo, mitte kaardi ekraanipilt.

![Klapptabloo punasena: tähed keerlevad ühelt lennult järgmisele](/img/zb-flap-roll.webp)

![Sein kuues välimuses: ülal punktmaatriks merevaigukollasena, türkiisina ja valgena; all klapptabloo merevaigukollasena, rohelisena ja türkiisina](/img/wall-colours.webp)

Väike hammasratas seina nurgas avab selle seaded: ühikud, raadius, sekundid lennuki kohta, värv, välimus ja lipud. Need jäävad ainult sellesse tahvelarvutisse, nii et igal ekraanil võib olla oma välimus, ja `zenithboard config` määrab vaikeväärtused neile kõigile.

![Seina enda seadete paneel klapptabloo kohal: ühikud, raadius, sekundid lennuki kohta, värv, välimus ja lipud](/img/wall-settings.webp)

Teksti kõrval on täppidest joonistatud lennuki siluett, kaks väikest lippu (kus lennuk on registreeritud, kus see on ehitatud) ja soovi korral selle foto Planespottersist koos fotograafi nimega. Ei lennufirma logo ega tootja logo: need on kaitstud kaubamärgid, nii et nende asemel on lipud. Marsruudid ja mudelid tulevad avalikest päringutest; sein ütleb, mida ta teab, ja jätab rea tühjaks, kui ei tea.

Sa võid seina proovida ilma igasuguse riistvarata: hoidlaga on kaasas demo väljamõeldud lennufirmadega ja näidisega kõigest, A380-st kuni helikopterini, mis jookseb igal Pythoniga arvutil.

## Vastuvõtja ja neli võrgustikku

ZenithBoard paigaldab dekoodriks **readsb** koos selle kaardiga **tar1090** ja söötjad, mille sa linnukesega märgid: ADS-B Exchange alati, FlightAware, Flightradar24 ja Plane Finder, kui sa neid soovid. See hoiab töös täpselt ühte MLAT-klienti ja loeb need kokku käsus `zenithboard status`. Kõik on vaikimisi välja lülitatud ja tagasipööratav: igal *sees* on oma *väljas*, mis paneb asjad tagasi, enne iga hävitavat toimingut tehakse varukoopia ja menüüst on alati väljapääs.

Vastuvõtja võimendust saab häälestada menüüst või konsoolist, samm-sammult, koos statistikaga, et näha, kas sellest oli abi. Valikuline statistika hoiab kuu aega sõnumeid tunni kohta, ulatust ja lennukeid päeva kohta; **graphs1090** joonistab neist aastaid.

## Konsool

Alates versioonist 0.39 näitab `http://<the Pi>:8080/console` seadeid seina välimuses: ülevaade Pi-st (tööaeg, temperatuur, mälu, iga teenus), sein, vastuvõtja, Bluesky, valvurid, uuendused. Üks jaotis korraga, külgriba arvutis, vahekaardid telefonis. Iga muudatus käivitab sama käsu, mida menüü käivitaks, ja näitab sulle, mida see trükkis. Konsool on kahekümne kahes keeles; see sait kasutab sama nimekirja ja samu lippe.

![Airbus Beluga klapptablool](/img/wall-beluga-flap.webp)

## Bluesky

Valikuline, vaikimisi väljas. Sisselülitatuna postitab Pi Bluesky'sse postitust väärt lennukid: sõjaväe tankurlennuki, Beluga, tüübi, mida ta pole kuu aega näinud, kuu kaugeima. Iga postitus on pilt seinast lennuki trajektoori kaardi kõrval, mõlemad joonistab Pi ise, koos lühikese tekstiga: lend, tüüp, marsruut, kõrgus ja sinu linna nimi, mitte kunagi sinu asukoht. Sinu Bluesky rakenduse parool jääb Pi peale, faili, mida ainult teenus saab lugeda; see ei ilmu kunagi logis ega seinal.

## Ehitatud nii, et ei läheks valesti

ZenithBoard jookseb root-õigustes, kuulab sinu võrku ja paigaldab teiste inimeste tarkvara, seega on see ehitatud piirama seda, mis võib valesti minna. Sein vastab ainult sinu koduvõrgule ja annab kõigile teistele 403, olgu port edastatud või mitte; selle väljastpoolt nägemiseks selgitab menüü VPN-i, mitte avatud porti. Iga teenus jookseb systemd liivakastis ainult sellega, mida tema töö vajab. Pakettide allkirju ei keelata kunagi. Debiani turvaparandused võivad end iga päev ise paigaldada. Kaks valvurit taaskäivitavad selle, mis hangub, ja *health* käsk ütleb sulle ühel ekraanil, kas kõik on korras.

## Mida see vajab

Raspberry Pi 3B või uuem 1 GB mäluga, mõõdetud: autori Pi 3B peal, kus töötasid ADS-B Exchange ja selle MLAT, FlightAware, Flightradar24, sein, statistika ja Bluesky postitused, oli 656 MB mälu veel vaba. Pi Zero 2 W jooksutab vastuvõtjat ja seina, ilma lisasöötjateta. Raspberry Pi OS Lite, 64-bitine. Esimesel korral tund aega; pärast seda `sudo zenithboard update`, kui uus versioon on väljas.
