---
title: "Che cos'è l'ADS-B"
description: "Il segnale che ogni aereo di linea trasmette, che cosa contiene, perché chiunque può riceverlo, e che cosa non ti dice."
lang: it
page: adsb
updated: 2026-10-23
reviewed: false
next:
  label: "Costruisci il tuo ricevitore"
  href: build
---

## Un aereo che dice dove si trova

![Un satellite dice all'aereo dove si trova; l'aereo invia la propria posizione in tutte le direzioni, in anelli che ogni casa a terra, e ogni altro aereo, può captare](/img/fig-adsb-broadcast.svg)

![Un messaggio contiene quattro cose: chi è l'aereo, dove si trova, a che quota e a che velocità; e viene rinviato ogni secondo](/img/fig-adsb-message.svg)

ADS-B sta per *Automatic Dependent Surveillance – Broadcast* (sorveglianza automatica dipendente in diffusione). Prendiamo le parole una alla volta. *Automatic*, automatica: l'aereo la invia da solo, nessuno gliela chiede. *Dependent*, dipendente: la posizione viene dalla navigazione satellitare dell'aereo stesso, non da un radar a terra. *Surveillance*, sorveglianza: è il modo in cui il controllo del traffico aereo segue l'aereo. *Broadcast*, diffusione: è inviata a tutti, non a un solo ascoltatore.

Circa una volta al secondo, l'aereo trasmette un breve messaggio su **1090 MHz**. Il messaggio contiene la sua identità (un indirizzo a 24 bit assegnato a quella cellula e, di solito, il nominativo del volo), la sua posizione (latitudine e longitudine), la sua altitudine, la sua velocità e la sua rotta. Altri messaggi, inviati di tanto in tanto, aggiungono la categoria dell'aereo, la sua velocità verticale e qualche indicatore.

Dal 2020, la maggior parte degli aerei che volano in spazio aereo controllato in Europa e negli Stati Uniti è tenuta a trasmettere l'ADS-B. Gli aerei di linea lo fanno, i jet d'affari lo fanno, molti aerei leggeri lo fanno. Alcuni aerei militari e di Stato non lo fanno, o lo fanno senza la loro posizione.

## Perché puoi ascoltare

![Dall'antenna a una piccola chiavetta radio, a un Raspberry Pi, a uno schermo che mostra gli aerei](/img/fig-adsb-chain.svg)

I messaggi non sono cifrati né firmati. È voluto: tutto il senso sta nel fatto che ogni aereo e ogni stazione a terra nei dintorni possano sentire ogni altro aereo. Il formato è pubblico, definito dagli standard su cui si regge l'aviazione, e la frequenza è la stessa in tutto il mondo.

Quindi un ricevitore è semplicemente una radio sintonizzata su 1090 MHz e un programma che trasforma gli impulsi in testo. Vent'anni fa quella radio costava migliaia di euro. Oggi una chiavetta USB venduta per la televisione digitale, grande quanto un pollice, fa il lavoro, perché al suo chip si può dire di ascoltare qualsiasi frequenza e di passare il segnale grezzo a un computer. Quella chiavetta si chiama RTL-SDR, dal chip che contiene (RTL2832U) e dall'idea (*software-defined radio*, radio definita dal software: è il computer che fa la decodifica).

Il programma che fa la decodifica su un Raspberry Pi è di solito **readsb**, successore del più vecchio *dump1090*. Ascolta la chiavetta, decodifica i messaggi e offre il risultato a chiunque lo voglia: una mappa nel tuo browser (**tar1090**), un feeder per una rete di tracciamento, o il tabellone di ZenithBoard.

## Negli Stati Uniti: anche 978 MHz

Gli Stati Uniti usano anche una seconda frequenza, **978 MHz**, chiamata UAT (*Universal Access Transceiver*, ricetrasmettitore ad accesso universale), soprattutto per i piccoli aerei che volano bassi. Per sentirla servono una seconda chiavetta USB e una seconda antenna. Ovunque altrove, 1090 MHz è tutto ciò che c'è. ZenithBoard ti chiede la tua regione una sola volta e menziona i 978 MHz solo se rispondi *Stati Uniti*.

## Fin dove senti

![Il segnale viaggia in linea retta mentre la Terra si curva: un aereo sopra la linea di vista viene sentito, uno oltre l'orizzonte resta nascosto, e un'antenna più alta vede più lontano](/img/fig-adsb-range.svg)

Il segnale viaggia in linea retta, come la luce. Un aereo in quota di crociera è visibile da molto lontano, purché niente si frapponga tra lui e la tua antenna. Da una finestra che dà su una collina puoi sentire qualche decina di chilometri; da un tetto con l'orizzonte libero, 250 km e oltre sono comuni, e gli aerei al limite sono quelli a 11.000 metri. Gli aerei bassi vicino a te sono nascosti da ogni edificio e da ogni albero. La portata dipende dall'antenna e dalla sua vista, non dal computer.

## Che cosa l'ADS-B non ti dice

Il messaggio dice dove si trova l'aereo, non dove sta andando. L'origine, la destinazione, il nome della compagnia e la foto dell'aereo vengono da altrove: da registri pubblici e da banche dati che le reti di tracciamento e ZenithBoard consultano a partire dall'indirizzo dell'aereo. L'ADS-B non dice nulla nemmeno su chi è a bordo, e nulla su di te: la ricezione è passiva, il tuo ricevitore non trasmette niente.

## MLAT: sentire quelli che non lo dicono

![Quattro ricevitori a terra sentono lo stesso messaggio in quattro istanti diversi; attorno a ciascuno, un cerchio la cui grandezza è il suo tempo di arrivo; i quattro cerchi si incrociano in un solo punto, dove si trova l'aereo](/img/mlat.svg)

Alcuni aerei inviano la loro identità ma non la loro posizione (lo fanno i transponder più vecchi). Se quattro o più ricevitori sentono lo stesso messaggio, le minuscole differenze nel tempo di arrivo danno la posizione, come si localizza un fulmine dal suo tuono. Questo si chiama **MLAT**, *multilateration* (multilaterazione). Il tuo ricevitore da solo non può farlo; alimentando una rete, diventa uno dei quattro. È una delle vere ragioni per condividere.
