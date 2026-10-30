---
title: "ZenithBoard"
description: "Ukuta wa nukta au ubao wa herufi zinazogeuka wa uwanja wa ndege kwenye kompyuta kibao ya zamani, konsoli ya wavuti, machapisho kwenye Bluesky. Bure, huru, menyu moja kusakinisha yote."
lang: sw
page: zenithboard
updated: 2026-10-30
reviewed: false
next:
  label: "Isakinishe: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

> **Toleo tarajiwa la 1.0.** Tangu tarehe 25 Oktoba 2026, toleo la 0.99 limegandishwa: kwa mwezi mmoja ni marekebisho pekee yanayoingia, huku Pi ya mwandishi ikiendelea bila kuguswa. Tarehe 30 Oktoba vipengele viwili viliongezwa, AirNav Radar na jumbe za Telegram, kwa hiyo mwezi unaanza upya. Ikiwa hakuna kinachobaki wazi, 1.0 itafuata tarehe 29 Novemba 2026 mapema kabisa. Kulijaribu sasa kunasaidia: ripoti kwenye [GitHub](https://github.com/regis57/ZenithBoard/issues) inakaribishwa.

## Kwa sentensi moja

ZenithBoard inageuza Raspberry Pi na kijiti cha redio cha USB kuwa kipokezi cha ADS-B kinacholisha mitandao mitano, na inaonyesha ndege zilizo juu kabisa ya nyumba yako kwenye kompyuta kibao ya zamani, kama bango la nukta zinazong'aa au ubao wa herufi zinazogeuka wa uwanja wa ndege. Ni programu huru, chini ya GPL, na inaendeshwa kila siku kwenye Pi 3B ya mwandishi mwenyewe, nje, kwa Wi-Fi, huko Moselle.

![Ukuta wa nukta wa rangi ya kaharabu: Tunisair Airbus A320 yenye bendera zake mbili, ndege ikichorwa kwa nukta kando ya maandishi, kisha safari inayofuata](/img/zb-wall.webp)

## Ukuta

Ukuta ni ukurasa wa wavuti ambao Pi inatoa kwenye mtandao wa nyumbani kwako. Ufungue kwenye kompyuta kibao au skrini yoyote yenye kivinjari, uongeze kwenye skrini ya mwanzo, na unabaki umewashwa. Unazunguka kupitia kila ndege iliyo ndani ya kipenyo unachochagua, kutoka km 1 hadi 50 (au maili): jina la mwito, aina ya ndege, mwinuko, kasi, safari inatoka wapi na inaenda wapi, umbali na mwelekeo kutoka kwako. Mionekano miwili: gridi ya **nukta 128 kwa 80**, kama bango la zamani la kituo, au **ubao wa herufi zinazogeuka** ambao herufi zake zinabiringika ndege inayofuata inapokuja. Rangi tano: kahawia-manjano, kijani, nyekundu, nyeupe, samawati-kijani; moja kwa wakati, kwa sababu lengo ni bango linalong'aa, si picha ya skrini ya ramani.

![Ubao wa herufi zinazogeuka wa rangi nyekundu: herufi zinabiringika kutoka safari moja hadi inayofuata](/img/zb-flap-roll.webp)

![Ukuta katika mionekano sita: nukta za kaharabu, samawati-kijani na nyeupe juu; ubao wa herufi zinazogeuka wa kaharabu, kijani na samawati-kijani chini](/img/wall-colours.webp)

Gia ndogo kwenye kona ya ukuta hufungua mipangilio yake: vipimo, kipenyo, sekunde kwa kila ndege, rangi, mtindo na bendera. Huhifadhiwa kwenye kompyuta kibao hiyo pekee, kwa hiyo kila skrini inaweza kuwa na mwonekano wake, na `zenithboard config` huweka chaguo-msingi kwa zote.

![Paneli ya mipangilio ya ukuta yenyewe juu ya ubao wa herufi zinazogeuka: vipimo, kipenyo, sekunde kwa kila ndege, rangi, mtindo na bendera](/img/wall-settings.webp)

Kando ya maandishi, umbo la ndege lililochorwa kwa nukta, bendera mbili ndogo (ndege imesajiliwa wapi, ilitengenezwa wapi), na, ukitaka, picha yake kutoka Planespotters, pamoja na jina la mpiga picha. Hakuna nembo ya shirika la ndege, hakuna nembo ya mtengenezaji: hizi ni alama zinazolindwa, kwa hiyo bendera zinasimama badala yake. Njia na miundo vinatoka kwenye utafutaji wa umma; ukuta unasema kile unachojua na unaacha safu tupu usipojua.

Unaweza kujaribu ukuta bila vifaa vyovyote: hazina inakuja na onyesho lenye mashirika ya ndege ya kubuni na mfano wa kila kitu, kuanzia A380 hadi helikopta, linaloendeshwa kwenye kompyuta yoyote yenye Python.

## Kipokezi, na mitandao mitano

ZenithBoard inasakinisha **readsb** kama kifumbuzi, pamoja na ramani yake **tar1090**, na walishaji unaowaweka tiki: ADS-B Exchange daima, FlightAware, Flightradar24, Plane Finder na AirNav Radar ukiwataka. Inaweka mteja mmoja tu wa MLAT ukiendelea na inawahesabu katika `zenithboard status`. Kila kitu kimezimwa kwa chaguo-msingi na kinaweza kurudishwa: kila *kuwasha* kuna *kuzima* kunakorudisha mambo, nakala rudufu inatengenezwa kabla ya chochote cha kuharibu, na menyu daima ina njia ya kutoka.

Ukuzaji wa kipokezi unaweza kurekebishwa kutoka menyu au konsoli, hatua moja kwa wakati, pamoja na takwimu za kuona kama ilisaidia. Takwimu za hiari zinahifadhi mwezi mmoja wa jumbe kwa saa, umbali na ndege kwa siku; **graphs1090** inachora miaka yake.

## Konsoli

Tangu toleo 0.39, `http://<the Pi>:8080/console` inaonyesha mipangilio kwa mwonekano wa ukuta: muhtasari wa Pi (muda wa kuwashwa, joto, kumbukumbu, kila huduma), ukuta, kipokezi, Bluesky, walinzi, masasisho. Sehemu moja kwa wakati, upau wa kando kwenye kompyuta, vichupo kwenye simu. Kila mabadiliko yanaendesha amri ile ile ambayo menyu ingeendesha, na inakuonyesha ilichochapisha. Konsoli iko katika lugha ishirini na mbili; tovuti hii inatumia orodha ile ile na bendera zile zile.

![Airbus Beluga kwenye ubao wa herufi zinazogeuka](/img/wall-beluga-flap.webp)

## Bluesky

Ya hiari, imezimwa kwa chaguo-msingi. Ikiwashwa, Pi inachapisha kwenye Bluesky ndege zinazostahili chapisho: ndege ya kijeshi ya kujaza mafuta, Beluga, aina ambayo haijaona kwa mwezi mmoja, ya mbali zaidi ya mwezi. Kila chapisho ni picha ya ukuta kando ya ramani ya njia ya ndege, zote zikichorwa na Pi yenyewe, pamoja na maandishi mafupi: safari, aina, njia, mwinuko, na jina la mji wako, kamwe si nafasi yako. Nenosiri la programu yako ya Bluesky linabaki kwenye Pi, kwenye faili ambalo huduma pekee inaweza kusoma; halionekani kamwe kwenye kumbukumbu au kwenye ukuta.

## Imejengwa isiende vibaya

ZenithBoard inaendeshwa kama root, inasikiliza kwenye mtandao wako na inasakinisha programu za watu wengine, kwa hiyo imejengwa kupunguza kinachoweza kwenda vibaya. Ukuta unajibu mtandao wa nyumbani kwako tu na unampa kila mtu mwingine 403, mlango ukiwa umeelekezwa au la; ili kuuona kutoka nje, menyu inaeleza VPN badala ya mlango wazi. Kila huduma inaendeshwa kwenye sanduku la mchanga la systemd ikiwa na kile tu kazi yake inachohitaji. Saini za vifurushi hazizimwi kamwe. Marekebisho ya usalama ya Debian yanaweza kujisakinisha yenyewe kila siku. Walinzi wawili wanaanzisha upya kinachoganda, na amri ya *health* inakuambia kwa skrini moja kama yote ni sawa.

## Inahitaji nini

Raspberry Pi 3B au mpya zaidi yenye kumbukumbu ya GB 1, imepimwa: kwenye Pi 3B ya mwandishi, pamoja na ADS-B Exchange na MLAT yake, FlightAware, Flightradar24, ukuta, takwimu na machapisho ya Bluesky, MB 656 za kumbukumbu zilikuwa bado wazi. Pi Zero 2 W inaendesha kipokezi na ukuta, bila walishaji wa ziada. Raspberry Pi OS Lite, biti 64. Saa moja mara ya kwanza; baada ya hapo, `sudo zenithboard update` toleo jipya linapotoka.
