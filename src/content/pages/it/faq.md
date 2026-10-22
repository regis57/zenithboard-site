---
title: "FAQ"
description: "Portata, ostacoli, Wi-Fi, memoria, legalità, privacy: le domande che la gente fa prima e dopo aver costruito un ricevitore, con risposte chiare."
lang: it
page: faq
updated: 2026-10-22
reviewed: false
next:
  label: "Chi fa tutto questo, e come dire grazie"
  href: about
---

## È legale ascoltare?

La ricezione è passiva: la tua antenna non trasmette niente. L'ADS-B è trasmesso in chiaro proprio perché tutti possano sentirlo, e i dati sono mostrati su mappe pubbliche tutto il giorno. Nella maggior parte dei paesi ricevere segnali radio trasmessi senza cifratura è lecito; condividerli con le reti di tracciamento è ciò che migliaia di persone fanno apertamente. Se il tuo paese ha regole specifiche sulla ricezione radio, verificale; questo sito non è una consulenza legale.

## Fin dove sentirò?

Fin dove la tua antenna riesce a vedere. Il segnale viaggia in linea retta, quindi la domanda è che cosa c'è tra la tua antenna e il cielo. Una finestra: qualche decina di chilometri, di più dal lato verso cui dà la finestra. Un balcone o un sottotetto sotto le tegole: spesso da 150 a 250 km. Un tetto con l'orizzonte libero: 300 km e oltre, verso gli aerei in quota di crociera. Gli aerei bassi vicino a te sono nascosti da edifici e alberi, qualunque cosa tu faccia. Niente nel Raspberry Pi cambia la portata.

## La mia mappa è vuota

Dalle dieci minuti dopo il primo avvio. Poi controlla, in quest'ordine: la chiavetta è in una porta USB 2.0 (nera, non quelle blu USB 3.0 di un Pi 4); l'antenna è avvitata e verticale; è vicino a una finestra. Se la chiavetta viene vista ma non arriva niente, il guadagno può essere troppo alto o troppo basso: il menu ti permette di spostarlo un passo alla volta, e le statistiche mostrano l'effetto.

## Il Wi-Fi basta?

Sì per il ricevitore e i feeder: qualche kilobyte al secondo. Anche il tabellone su un tablet è leggero. Ciò che il Wi-Fi fa male è l'affidabilità: un Pi all'aperto al limite del segnale si scollegherà di tanto in tanto. Un cavo risolve; anche spostare il Pi, dato che il cavo dell'antenna può essere lungo qualche metro. I watchdog di ZenithBoard ricollegano il Pi quando la rete torna.

## 1 GB di memoria basta?

Misurato, sì. Sul Pi 3B dell'autore con ADS-B Exchange e il suo MLAT, FlightAware, Flightradar24, il tabellone, le statistiche e i post su Bluesky in esecuzione, restavano liberi 656 MB su 1 GB. Un Pi Zero 2 W con 512 MB fa girare il ricevitore e il tabellone; aggiungi i feeder in più e diventa stretto. Non comprare un Pi più grande per questo: la portata viene dall'antenna.

## Rallenta la mia connessione, o consuma dati?

No. Un feeder invia qualche kilobyte al secondo, meno di uno streaming radio. In un mese sono al massimo qualche gigabyte, ripartiti tra le reti che alimenti.

## Chi può vedere la mia posizione?

Le reti che alimenti ne hanno bisogno per calcolare le portate e l'MLAT, e la conservano nel tuo account. Non mettono uno spillo su casa tua nella mappa pubblica. ZenithBoard non mostra mai la tua posizione sul tabellone né in un post: i post nominano la tua città, non le tue coordinate. Il tuo tabellone e la tua mappa personale rispondono solo alla tua rete domestica, a meno che tu non li apra di tua iniziativa, e ZenithBoard spiega una VPN prima di spiegare una porta aperta.

## Il tabellone mostrerà tutti gli aerei?

Tutti gli aerei che trasmettono la loro posizione e si trovano entro il raggio che hai scelto. Gli aerei con transponder più vecchi che non inviano la posizione compaiono solo se l'MLAT di una rete li localizza, e solo sulle mappe delle reti. Alcuni aerei militari e di Stato non trasmettono affatto. Il tabellone dice ciò che sente, niente di più.

## E gli Stati Uniti e i 978 MHz?

Negli Stati Uniti molti piccoli aerei usano 978 MHz (UAT) invece di 1090 MHz. Per sentirli servono una seconda chiavetta e una seconda antenna. ZenithBoard ti chiede la tua regione una sola volta; se rispondi *Stati Uniti*, propone il passaggio in più e parte con le unità imperiali. Altrove, niente sui 978 MHz viene mostrato.

## Posso farlo girare senza un Raspberry Pi?

Il ricevitore e i feeder girano su qualsiasi computer Linux. ZenithBoard in sé è pensato per Raspberry Pi OS; la demo del tabellone gira su qualsiasi computer con Python, senza alcun hardware, se vuoi solo vedere che aspetto ha.

## Qualcosa di tutto questo è un prodotto?

No. ZenithBoard è software libero sotto GPL; il testo di questo sito è sotto licenza Creative Commons; niente è in vendita, non serve alcun account, non c'è telemetria e questo sito non imposta cookie e non chiama terze parti. L'unico denaro che gira è una birra, se ne hai voglia, in fondo a ogni pagina.
