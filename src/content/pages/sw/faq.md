---
title: "Maswali ya mara kwa mara"
description: "Umbali, vizuizi, Wi-Fi, kumbukumbu, uhalali, faragha: maswali ambayo watu wanauliza kabla na baada ya kujenga kipokezi, yakijibiwa wazi."
lang: sw
page: faq
updated: 2026-10-23
reviewed: false
next:
  label: "Nani anatengeneza hiki, na jinsi ya kusema asante"
  href: about
---

## Je, ni halali kusikiliza?

Kupokea ni jambo la kupita tu: antena yako haitumi chochote. ADS-B inatangazwa wazi haswa ili kila mtu aweze kuisikia, na data inaonyeshwa kwenye ramani za umma siku nzima. Katika nchi nyingi, kupokea ishara za redio zinazotangazwa bila usimbaji wa siri ni halali; kuzishiriki na mitandao ya kufuatilia ndicho maelfu ya watu wanachofanya waziwazi. Nchi yako ikiwa na sheria maalum kuhusu upokeaji wa redio, zikague; tovuti hii si ushauri wa kisheria.

## Nitasikia umbali gani?

Kadiri antena yako inavyoweza kuona. Ishara inasafiri kwa mstari ulionyooka, kwa hiyo swali ni nini kinasimama kati ya antena yako na anga. Dirisha: makumi machache ya kilomita, zaidi upande ambao dirisha linaelekea. Roshani au dari chini ya vigae: mara nyingi km 150 hadi 250. Paa lenye upeo wazi: km 300 na zaidi, kuelekea ndege zilizo kwenye mwinuko wa safari. Ndege za chini zilizo karibu nawe zinafichwa na majengo na miti, ufanye chochote. Hakuna chochote kuhusu Raspberry Pi kinachobadilisha umbali.

## Ramani yangu ni tupu

Ipe dakika kumi baada ya kuwasha mara ya kwanza. Kisha hakikisha, kwa mpangilio huu: kijiti kiko kwenye mlango wa USB 2.0 (mweusi, si ile ya bluu ya USB 3.0 kwenye Pi 4); antena imefungwa na iko wima; iko karibu na dirisha. Kijiti kikionekana lakini hakuna kinachokuja, ukuzaji unaweza kuwa juu mno au chini mno: menyu inakuruhusu kuusogeza hatua moja kwa wakati, na takwimu zinaonyesha athari.

## Je, Wi-Fi inatosha?

Ndiyo kwa kipokezi na walishaji: kilobaiti chache kwa sekunde. Ukuta kwenye kompyuta kibao pia ni mwepesi. Kile Wi-Fi inachofanya vibaya ni kutegemewa: Pi iliyo nje ukingoni mwa ishara itakatika mara kwa mara. Kebo inarekebisha hilo; vivyo hivyo kuhamisha Pi, kwa kuwa kebo ya antena inaweza kuwa na urefu wa mita chache. Walinzi wa ZenithBoard wanaunganisha Pi upya mtandao unaporudi.

## Je, kumbukumbu ya GB 1 inatosha?

Imepimwa, ndiyo. Kwenye Pi 3B ya mwandishi, pamoja na ADS-B Exchange na MLAT yake, FlightAware, Flightradar24, ukuta, takwimu na machapisho ya Bluesky vikiendelea, MB 656 kati ya GB 1 zilikuwa bado wazi. Pi Zero 2 W yenye MB 512 inaendesha kipokezi na ukuta; ongeza walishaji wa ziada na inakuwa finyu. Usinunue Pi kubwa zaidi kwa ajili ya hili: umbali unatoka kwenye antena.

## Je, inapunguza kasi ya intaneti yangu, au inagharimu data?

Hapana. Mlishaji unatuma kilobaiti chache kwa sekunde, chini ya mkondo wa redio. Kwa mwezi mmoja hiyo ni gigabaiti chache zaidi, zikigawanywa kati ya mitandao unayolisha.

## Nani anaweza kuona nafasi yangu?

Mitandao unayolisha inaihitaji ili kukokotoa umbali na MLAT, na inaihifadhi kwenye akaunti yako. Haiweki pini kwenye nyumba yako kwenye ramani ya umma. ZenithBoard haionyeshi kamwe nafasi yako kwenye ukuta wala kwenye chapisho: machapisho yanataja mji wako, si viwianishi vyako. Ukuta wako na ramani yako mwenyewe vinajibu mtandao wa nyumbani kwako tu, isipokuwa uvifungue mwenyewe, na ZenithBoard inaeleza VPN kabla ya kueleza mlango wazi.

## MLAT ni nini, na kwa nini kipokezi changu kinahitaji vingine?

MLAT ni kifupi cha *multilateration*. Ndiyo njia ambayo mtandao hutumia kupata ndege inayotuma utambulisho wake lakini **si** nafasi yake, jambo ambalo transponda za zamani hufanya: zinajibu "niko hapa" bila hiyo "hapa".

Siri iko kwenye muda. Mawimbi ya redio husafiri kwa kasi ya mwanga, takriban mita 300 kila mikrosekunde. Ndege kama hiyo inapotuma, kila kipokezi kilicho ndani ya umbali husikia ujumbe uleule, lakini si wakati uleule: kilicho karibu zaidi hukisikia kwanza, kilicho mbali zaidi mikrosekunde mia kadhaa baadaye. Kipokezi kimoja peke yake hakijifunzi chochote kutokana na hilo; hakina habari ujumbe uliondoka lini kwenye ndege. Lakini weka pamoja vipokezi vinne, kila kimoja kikiwa na saa sahihi sana, na tofauti kati ya nyakati zao za kupokea zinaacha mahali pamoja tu angani ambapo ujumbe unaweza kuwa umetoka. Mahali hapo panachorwa, na ndege inaonekana kwenye ramani.

![Vipokezi vinne ardhini vinasikia ujumbe uleule kwa nyakati nne tofauti; kuzunguka kila kimoja, duara ambalo ukubwa wake ni wakati wake wa kupokea; maduara manne yanakutana katika nukta moja tu, pale ndege ilipo](/img/mlat.svg)

Kwenye picha: vipokezi vinne, nyakati nne za kupokea, maduara manne. Kila duara linamaanisha "ndege iko umbali huu kutoka kwangu". Yanakutana mahali pamoja, na pamoja tu. Hiyo ndiyo MLAT, na ndiyo sababu mitandao inaomba kila mlishaji atume wakati kamili ambao kila ujumbe ulipokelewa, si ujumbe tu.

Kwa hiyo kipokezi chako kimoja hakiwezi kufanya MLAT peke yake, na hilo ndilo jibu la kweli kwa "kwa nini kushiriki?": kwa kulisha mtandao, antena yako inakuwa mojawapo ya zile nne, na ndege zisizosema chochote kuhusu nafasi zao zinaanza kuonekana, kwenye ramani za mitandao na, kupitia data wanazorudisha, kwenye yako. Pia inaeleza mambo mawili ambayo ZenithBoard hufanya: inaendesha mteja **mmoja** tu wa MLAT (hesabu ni nzito kwa Raspberry Pi), na inahitaji nafasi kamili ya antena yako, kwa sababu duara lililochorwa kutoka mahali pasipo sahihi linakutana na mengine katika nukta isiyo sahihi.

## Je, ukuta utaonyesha kila ndege?

Kila ndege inayotangaza nafasi yake na iliyo ndani ya kipenyo ulichochagua. Ndege zenye transponda za zamani zisizotuma nafasi zinaonekana tu ikiwa MLAT ya mtandao inazipata, na tu kwenye ramani za mitandao. Baadhi ya ndege za kijeshi na za serikali hazitangazi kabisa. Ukuta unasema kile unachosikia, si zaidi.

## Vipi kuhusu Marekani na 978 MHz?

Marekani, ndege nyingi ndogo zinatumia 978 MHz (UAT) badala ya 1090 MHz. Kuzisikia kunahitaji kijiti cha pili na antena ya pili. ZenithBoard inauliza eneo lako mara moja; ukijibu *Marekani*, inakupa hatua ya ziada na inaanza na vipimo vya kiingereza. Kwingineko, hakuna chochote kuhusu 978 MHz kinachoonyeshwa.

## Je, naweza kuiendesha bila Raspberry Pi?

Kipokezi na walishaji vinaendeshwa kwenye kompyuta yoyote ya Linux. ZenithBoard yenyewe inalenga Raspberry Pi OS; onyesho la ukuta linaendeshwa kwenye kompyuta yoyote yenye Python, bila vifaa vyovyote, ukitaka tu kuona linavyoonekana.

## Je, chochote kati ya hivi ni bidhaa?

Hapana. ZenithBoard ni programu huru chini ya GPL; maandishi ya tovuti hii yako chini ya leseni ya Creative Commons; hakuna kinachouzwa, hakuna akaunti inayohitajika, hakuna telemetria na tovuti hii haiweki kuki wala kuita mhusika wa tatu. Pesa pekee inayohamishwa ni bia, ukijisikia, chini ya kila ukurasa.
