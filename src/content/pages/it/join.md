---
title: "Unisciti alla comunità"
description: "Cinque reti accoglieranno ciò che il tuo ricevitore sente, e ricambieranno. Che cosa dai, che cosa ricevi, e che cosa resta a casa."
lang: it
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "Scopri ZenithBoard"
  href: zenithboard
---

## Perché condividere

Il tuo ricevitore sente qualche centinaio di chilometri intorno a te. Una rete di ricevitori sente il pianeta. Ogni mappa che hai mai guardato su un sito di tracciamento dei voli è fatta di persone come te, un Raspberry Pi su un davanzale, che inviano ciò che sentono. Il cielo non è di nessuno; le mappe esistono perché migliaia di persone lo condividono.

Condividere non ti costa niente: qualche kilobyte al secondo sulla tua linea internet, e sul Pi niente che valga la pena menzionare. In cambio le reti ti aprono le loro funzioni a pagamento, e la tua singola antenna entra a far parte dell'MLAT, che trova gli aerei che non dicono dove si trovano.

## Le cinque reti

Ognuna vuole la stessa cosa, il flusso dei messaggi decodificati da readsb, e ognuna ha il suo piccolo programma per inviarlo. ZenithBoard installa quelli che spunti; puoi anche installarli da solo dalla pagina di ciascuna rete.

### [ADS-B Exchange](https://www.adsbexchange.com/)

La rete della comunità stessa, gestita da volontari e nota per mostrare ogni aereo che sente, senza filtri su richiesta. Per alimentarla non serve un account: il loro script gira sul Pi, e il tuo feed compare sul loro sito con le sue statistiche. Chi partecipa all'MLAT riceve in cambio gli aerei che i suoi dati hanno aiutato a localizzare. ZenithBoard la considera lo strato di base; le altre sono facoltative, in aggiunta.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

Il feeder si chiama **PiAware**. In cambio, FlightAware offre a chi alimenta un account **Enterprise** gratuito: otto mesi di storico dei voli, avvisi illimitati, mappe senza pubblicità, e statistiche su ciò che il tuo ricevitore sente, con i voli che ha aiutato a tracciare.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

Il feeder si chiama **fr24feed**. In cambio, l'account gratuito collegato al tuo ricevitore viene promosso al piano **Contributor** non appena arrivano i dati. Una chiave di condivisione per feed; se alimenti anche altre reti, Flightradar24 ti chiede di spegnere il suo MLAT, cosa che ZenithBoard fa per te.

### [Plane Finder](https://planefinder.net/sharing/client)

Il feeder è il **Plane Finder ADS-B Client**. In cambio, Plane Finder concede l'uso premium gratuito del suo sito e delle sue app a chi condivide.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

Il feeder si chiama **rbfeeder** (AirNav Radar un tempo si chiamava RadarBox). In cambio, AirNav Radar dà a chi condivide un account **Business**. Il Pi genera da sé la propria chiave di condivisione; per collegare la stazione al tuo account, accedi al loro sito, apri la pagina per rivendicare una stazione e incolli quella chiave.

## Che cosa dai

I messaggi stessi: l'indirizzo dell'aereo, il nominativo, la posizione, l'altitudine, la velocità, così come sono stati trasmessi in chiaro. L'ora di arrivo di ciascuno, che è ciò di cui l'MLAT ha bisogno. La posizione del tuo ricevitore, così la rete sa da dove sono stati sentiti i dati. Niente dalla tua rete domestica, nessuna telecamera, nessun microfono; i programmi feeder sono piccoli, aperti o documentati, e ZenithBoard ti mostra che cosa sta facendo ciascuno.

## Che cosa resta a casa

La tua posizione esatta è usata dalle reti per calcolare le portate e l'MLAT; non è mostrata sulle loro mappe pubbliche come uno spillo su casa tua, e ZenithBoard non la mostra mai sul tabellone né in un post. Il tabellone del tuo tablet e la tua mappa tar1090 sono solo sulla tua rete domestica, a meno che tu non li apra di tua iniziativa. Tutto ciò che condividi, puoi smettere di condividerlo: spegnere un feeder nel menu rimette le cose com'erano.

## Un client MLAT, non cinque

Ogni rete può far girare il proprio client MLAT sul tuo Pi. Cinque alla volta sono troppi per un Raspberry Pi: il processore passa il tempo a fare calcoli e il tabellone scatta. ZenithBoard tiene in esecuzione un solo client MLAT, quello di ADS-B Exchange, e spegne l'MLAT negli altri; `zenithboard status` conta quelli in esecuzione così puoi verificare che ce ne sia esattamente uno. Se installi i feeder a mano, fai lo stesso.

## Per cominciare

In ZenithBoard, il menu **1 ADS-B** elenca le cinque reti con una casella ciascuna; ADS-B Exchange è sempre attiva. Per FlightAware, Flightradar24, Plane Finder e AirNav Radar crei un account gratuito sul loro sito; l'installatore stampa il link o la chiave da incollare, una sola volta. Per ADS-B Exchange il loro script chiede un nome di stazione e la tua posizione, e stampa il link per vedere il tuo feed. Dieci minuti dopo il tuo ricevitore è sulle loro mappe, e le pagine di statistiche mostrano fin dove senti.
