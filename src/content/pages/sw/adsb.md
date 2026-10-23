---
title: "ADS-B ni nini"
description: "Ishara ambayo kila ndege ya abiria inatangaza, ina nini ndani yake, kwa nini mtu yeyote anaweza kuipokea, na haikuambii nini."
lang: sw
page: adsb
updated: 2026-10-23
reviewed: false
next:
  label: "Jenga kipokezi chako"
  href: build
---

## Ndege inayosema iko wapi

![Setilaiti inaiambia ndege mahali ilipo; ndege hutuma nafasi yake pande zote, kwa duara ambazo kila nyumba ardhini, na ndege nyingine, inaweza kuzipokea](/img/fig-adsb-broadcast.svg)

![Ujumbe mmoja una mambo manne: ndege ni ipi, iko wapi, kwa mwinuko gani na kasi gani; na hutumwa tena kila sekunde](/img/fig-adsb-message.svg)

ADS-B ni kifupi cha *Automatic Dependent Surveillance – Broadcast* (Ufuatiliaji Tegemezi wa Kiotomatiki – Utangazaji). Chukua maneno moja baada ya jingine. *Automatic* (kiotomatiki): ndege inatuma yenyewe, hakuna anayeomba. *Dependent* (tegemezi): nafasi inatoka kwenye mfumo wa urambazaji wa satelaiti wa ndege yenyewe, si kutoka kwenye rada iliyo ardhini. *Surveillance* (ufuatiliaji): ndivyo udhibiti wa trafiki ya anga unavyofuatilia ndege. *Broadcast* (utangazaji): inatumwa kwa kila mtu, si kwa msikilizaji mmoja.

Takriban mara moja kwa sekunde, ndege inatuma ujumbe mfupi kwenye **1090 MHz**. Ujumbe huo unabeba utambulisho wake (anwani ya biti 24 iliyopewa fremu hiyo ya ndege, na kwa kawaida jina la mwito la safari), nafasi yake (latitudo na longitudo), mwinuko wake, kasi yake na mwelekeo wake. Jumbe nyingine, zinazotumwa mara kwa mara, zinaongeza aina ya ndege, kiwango chake cha kupanda au kushuka na alama chache.

Tangu 2020, ndege nyingi zinazoruka katika anga inayodhibitiwa barani Ulaya na Marekani zinatakiwa kutangaza ADS-B. Ndege za abiria zinafanya hivyo, ndege za kibiashara za kibinafsi zinafanya hivyo, ndege nyingi ndogo zinafanya hivyo. Baadhi ya ndege za kijeshi na za serikali hazifanyi hivyo, au zinafanya bila nafasi yao.

## Kwa nini unaweza kusikiliza

![Kutoka antena hadi kijiti kidogo cha redio, hadi Raspberry Pi, hadi skrini inayoonyesha ndege](/img/fig-adsb-chain.svg)

Jumbe hizo hazijasimbwa kwa siri wala kusainiwa. Hilo ni kwa makusudi: lengo lote ni kwamba kila ndege na kila kituo cha ardhini kilicho karibu kiweze kusikia kila ndege nyingine. Muundo ni wa umma, umefafanuliwa na viwango ambavyo usafiri wa anga unategemea, na masafa ni yale yale kila mahali duniani.

Kwa hiyo kipokezi ni redio tu iliyowekwa kwenye 1090 MHz na programu inayogeuza mipigo kuwa maandishi. Miaka ishirini iliyopita redio hiyo iligharimu maelfu. Leo kijiti cha USB kinachouzwa kwa televisheni ya dijitali, chenye ukubwa wa kidole gumba, kinafanya kazi hiyo, kwa sababu chipu yake inaweza kuambiwa kusikiliza masafa yoyote na kukabidhi ishara ghafi kwa kompyuta. Kijiti hicho kinaitwa RTL-SDR, kutokana na chipu iliyo ndani (RTL2832U) na wazo lenyewe (*software-defined radio*, redio inayofafanuliwa na programu: kompyuta ndiyo inayofumbua).

Programu inayofanya ufumbuzi kwenye Raspberry Pi kwa kawaida ni **readsb**, mrithi wa *dump1090* ya zamani. Inasikiliza kijiti, inafumbua jumbe, na inatoa matokeo kwa chochote kinachoyataka: ramani kwenye kivinjari chako (**tar1090**), mlishaji wa mtandao wa kufuatilia, au ukuta wa ZenithBoard.

## Marekani: 978 MHz pia

Marekani pia inatumia masafa ya pili, **978 MHz**, yanayoitwa UAT (*Universal Access Transceiver*, Kipokea-tuma cha Ufikiaji wa Jumla), hasa kwa ndege ndogo zinazoruka chini. Kuyasikia kunahitaji kijiti cha pili cha USB na antena ya pili. Kwingineko kote, 1090 MHz ndiyo pekee iliyopo. ZenithBoard inauliza eneo lako mara moja na inataja 978 MHz tu ukijibu *Marekani*.

## Unasikia umbali gani

![Mawimbi husafiri kwa mstari ulionyooka huku dunia ikipinda kuteremka: ndege iliyo juu ya mstari wa kuona husikika, iliyo nje ya upeo wa macho imefichwa, na antena ya juu zaidi huona mbali zaidi](/img/fig-adsb-range.svg)

Ishara inasafiri kwa mstari ulionyooka, kama mwanga. Ndege iliyo kwenye mwinuko wa safari inaonekana kutoka mbali sana, mradi hakuna kitu kinachosimama kati yake na antena yako. Kutoka dirisha linaloelekea kilima unaweza kusikia makumi machache ya kilomita; kutoka paa lenye upeo wazi, km 250 na zaidi ni kawaida, na ndege zilizo ukingoni ni zile zilizo kwenye mita 11,000. Ndege za chini zilizo karibu nawe zinafichwa na kila jengo na mti. Umbali unategemea antena na mwonekano wake, si kompyuta.

## ADS-B haikuambii nini

Ujumbe unasema ndege iko wapi, si inakoenda. Mahali ilipotoka, inakoelekea, jina la shirika la ndege na picha ya ndege vinatoka kwingineko: kutoka kwenye rejista za umma na kutoka kwenye hifadhidata ambazo mitandao ya kufuatilia na ZenithBoard zinatafuta kwa anwani ya ndege. ADS-B pia haisemi chochote kuhusu nani yumo ndani, na haisemi chochote kuhusu wewe: kupokea ni jambo la kupita tu, kipokezi chako hakitumi chochote.

## MLAT: kusikia zile zisizosema

![Vipokezi vinne ardhini vinasikia ujumbe uleule kwa nyakati nne tofauti; kuzunguka kila kimoja, duara ambalo ukubwa wake ni wakati wake wa kupokea; maduara manne yanakutana katika nukta moja tu, pale ndege ilipo](/img/mlat.svg)

Baadhi ya ndege zinatuma utambulisho wao lakini si nafasi yao (transponda za zamani zinafanya hivyo). Vipokezi vinne au zaidi vikisikia ujumbe ule ule, tofauti ndogo sana za muda wa kuwasili zinatoa nafasi, kama vile radi inavyotambuliwa mahali ilipo kutokana na ngurumo yake. Hii inaitwa **MLAT**, *multilateration* (upimaji wa pande nyingi). Kipokezi chako kimoja hakiwezi kufanya hivyo peke yake; kwa kulisha mtandao, kinakuwa kimoja kati ya vinne. Hii ni moja ya sababu halisi za kushiriki.
