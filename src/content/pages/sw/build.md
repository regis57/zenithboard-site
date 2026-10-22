---
title: "Jenga kipokezi"
description: "Raspberry Pi, kijiti cha redio cha USB, antena: orodha ya vifaa na bei, mahali pa kuweka antena, na programu kwa amri moja."
lang: sw
page: build
updated: 2026-10-22
reviewed: false
next:
  label: "Kisha jiunge na jumuiya"
  href: join
---

## Vifaa

Vitu vitano, na huenda tayari unavyo vitatu kati yake.

| Kifaa | Cha kutafuta | Takriban |
|---|---|---|
| Raspberry Pi | **3B, 3B+ au 4** ni bora kabisa: kumbukumbu ya GB 1 inatosha kwa kipokezi, walishaji na ukuta, imepimwa kwenye Pi 3B ya mwandishi. **Zero 2 W** (MB 512, bei ya orodha US$ 15) inaendesha kipokezi na ukuta, bila walishaji wa ziada. | € 15–60 |
| Kijiti cha redio cha USB | Dongo la **RTL-SDR**. Miundo ya RTL-SDR Blog ndiyo ya rejea, karibu US$ 35–40. Kijiti kilichotengenezwa kwa ADS-B, chenye kichujio cha 1090 MHz kilichojengwa ndani (Pro Stick ya FlightAware, kwa mfano), kinasikia mbali zaidi mjini. | € 30–45 |
| Antena | Antena ndogo iliyowekwa kwenye **1090 MHz**. Ile inayouzwa pamoja na baadhi ya vijiti inafanya kazi dirishani; antena maalum ya ADS-B, yenye urefu wa nusu mita, inasikia mbali zaidi juu ya paa au roshani. | € 10–40 |
| Kadi ya Micro-SD | GB 16 au zaidi, ya chapa inayojulikana. | € 8–12 |
| Chaja ya umeme | Ile rasmi ya Pi yako. Chaja ya simu mara nyingi haitoshi na Pi itakuambia hivyo kwa ikoni ya radi. | € 8–12 |

Jumla: **takriban € 60 hadi 120**, mara moja tu. Bei zinabadilika; hizi ni makadirio yaliyoonekana kwenye tovuti za watengenezaji mnamo Oktoba 2026. Nunua antena mwishoni: anza na chochote kinachokuja na kijiti, ona unachosikia, kisha amua.

Kompyuta kibao ya zamani au skrini yoyote yenye kivinjari, kwa ajili ya ukuta, ni ya hiari na huenda tayari iko kwenye droo.

## Mahali pa kuweka antena

Hiki ndicho kitu pekee kinachobadilisha umbali wako wa kusikia, kwa hiyo kinastahili dakika moja. Ishara inaenda kwa mstari ulionyooka. Antena inataka anga, si chumba: dirisha ni kiwango cha chini, roshani ni nzuri, paa au dari chini ya vigae ni bora zaidi. Wima, mbali na chuma, juu kadiri kebo inavyoruhusu. Mita mbili juu zaidi mara nyingi zinashinda kijiti cha bei ghali zaidi.

Pi yenyewe inaweza kubaki ndani; kebo za USB hadi mita tatu hivi zinafaa. Kijiti kikipata joto wakati wa kiangazi, hiyo ni kawaida.

## Programu, kwa njia mbili

### Njia ya kawaida: readsb na tar1090

Kifumbuzi ni [**readsb**](https://github.com/wiedehopf/readsb); ramani kwenye kivinjari chako ni [**tar1090**](https://github.com/wiedehopf/tar1090); zote mbili ni programu huru za mwandishi yule yule, zenye hati za usakinishaji zinazofanya kazi kwenye Raspberry Pi OS mpya. Kisha unaongeza kila mlishaji kwa mkono, kutoka kwenye ukurasa wa kila mtandao. Hii ndiyo njia ya kufuata ukipenda kuelewa kila kipande.

### Njia ya yote-kwa-moja: ZenithBoard

ZenithBoard inasakinisha readsb, walishaji unaowachagua na ukuta kutoka menyu moja, inauliza maswali machache mara moja (eneo lako, vipimo vyako, antena yako iko wapi), na inakuruhusu kuongeza au kuondoa sehemu yoyote baadaye. Pia inaweka mteja mmoja tu wa MLAT ukiendelea, kwa sababu kadhaa kwa pamoja zinaelemea Pi.

Andaa kadi kwa Raspberry Pi Imager (Raspberry Pi OS Lite, biti 64, SSH ikiwa imewashwa na Wi-Fi yako ikiwa imejazwa), washa Pi, kisha kutoka kwenye kompyuta yako:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Hesabu takriban saa moja mara ya kwanza, sehemu kubwa yake ikiwa ni kusubiri vipakuliwa. Ikikamilika, menyu inachapisha anwani ya ukuta, `http://<the Pi's address>:8080/`; ifungue kwenye kivinjari cha kompyuta kibao na ukuta uko hapo. Ramani yako mwenyewe, tar1090, iko kwenye `http://<the Pi's address>/tar1090/`.

## Nafasi yako

Kifumbuzi, MLAT na umbali wa ukuta vinahitaji kujua antena iko wapi: latitudo, longitudo, mwinuko. Bofya kulia nyumba yako kwenye ramani ili kunakili viwianishi. Nafasi hii inabaki kwenye Pi yako na kwenye mipangilio ya walishaji; ZenithBoard haionyeshi kamwe kwenye ukuta wala kwenye chapisho, na mitandao haichapishi pia. Umbali unapimwa kutoka hapo, ndiyo yote.

## Nini kinaweza kwenda vibaya

Kijiti hakipatikani: tumia mlango wa USB 2.0, si ile ya bluu ya USB 3.0 kwenye Pi 4, na kebo fupi. Ramani ni tupu: ipe dakika kumi, kisha hakikisha antena iko wima na karibu na dirisha. Pi inaonyesha ikoni ya radi: chaja ya umeme ni dhaifu mno. Wi-Fi inakatika: kebo, au hamisha Pi; kipokezi chenyewe kinahitaji bandwidth kidogo sana. Maswali Yanayoulizwa Mara kwa Mara yana mengine.
