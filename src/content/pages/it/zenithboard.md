---
title: "ZenithBoard"
description: "Il tabellone a puntini o quello a palette da aeroporto su un vecchio tablet, la console web, i post su Bluesky. Gratuito, aperto, un solo menu per installare tutto."
lang: it
page: zenithboard
updated: 2026-10-22
reviewed: false
next:
  label: "Installalo: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

## In una frase

ZenithBoard trasforma un Raspberry Pi e una chiavetta radio USB in un ricevitore ADS-B che alimenta le quattro reti, e mostra gli aerei proprio sopra casa tua su un vecchio tablet, come un'insegna a matrice di punti luminosi o un tabellone a palette da aeroporto. È software libero, sotto GPL, e gira ogni giorno sul Pi 3B dell'autore, all'aperto, in Wi-Fi, in Mosella.

![Il tabellone: ZENITHBOARD in puntini luminosi, e un aereo](/img/banner-dots.webp)

## Il tabellone

Il tabellone è una pagina web che il Pi serve sulla tua rete domestica. Aprila su qualsiasi tablet o schermo con un browser, aggiungila alla schermata iniziale, e resta accesa. Scorre tutti gli aerei entro il raggio che scegli, da 1 a 50 km (o miglia): nominativo, tipo di aereo, altitudine, velocità, da dove viene il volo e dove va, distanza e direzione rispetto a te. Due aspetti: una griglia di **128 per 80 punti**, come una vecchia insegna di stazione, o un **tabellone a palette** le cui lettere ruotano quando arriva l'aereo successivo. Cinque colori: ambra, verde, rosso, bianco, turchese; uno alla volta, perché il punto è un'insegna luminosa, non la schermata di una mappa.

![L'aspetto a palette: ZENITHBOARD, OVERHEAD NOW](/img/banner-flap.webp)

Accanto al testo, una silhouette dell'aereo disegnata a puntini, due piccole bandiere (dove l'aereo è immatricolato, dove è stato costruito) e, se vuoi, la sua foto da Planespotters, con il nome del fotografo. Nessun logo di compagnia, nessun logo di costruttore: sono marchi protetti, quindi al loro posto ci sono le bandiere. Rotte e modelli vengono da consultazioni pubbliche; il tabellone dice ciò che sa e lascia la riga vuota quando non lo sa.

Puoi provare il tabellone senza alcun hardware: il repository include una demo con compagnie inventate e un esempio di tutto, da un A380 a un elicottero, che gira su qualsiasi computer con Python.

## Il ricevitore, e le quattro reti

ZenithBoard installa **readsb** come decodificatore, con la sua mappa **tar1090**, e i feeder che spunti: ADS-B Exchange sempre, FlightAware, Flightradar24 e Plane Finder se li vuoi. Tiene in esecuzione esattamente un client MLAT e li conta in `zenithboard status`. Tutto è spento per impostazione predefinita e reversibile: ogni *on* ha un *off* che rimette le cose a posto, viene fatto un backup prima di qualsiasi operazione distruttiva, e il menu ha sempre una via d'uscita.

Il guadagno del ricevitore si può regolare dal menu o dalla console, un passo alla volta, con le statistiche per vedere se è servito. Statistiche facoltative conservano un mese di messaggi per ora, portata e aerei per giorno; **graphs1090** ne disegna anni interi.

## La console

Dalla versione 0.39, `http://<the Pi>:8080/console` mostra le impostazioni con l'aspetto del tabellone: una panoramica del Pi (tempo di attività, temperatura, memoria, ogni servizio), il tabellone, il ricevitore, Bluesky, i watchdog, gli aggiornamenti. Una sezione alla volta, una barra laterale su computer, schede su telefono. Ogni modifica esegue lo stesso comando che eseguirebbe il menu, e ti mostra che cosa ha stampato. La console è in venti lingue; questo sito usa la stessa lista e le stesse bandiere.

![La console: la sezione del ricevitore, in verde](/img/banner-radar.webp)

## Bluesky

Facoltativo, spento per impostazione predefinita. Una volta attivato, il Pi pubblica su Bluesky gli aerei che meritano un post: un'aerocisterna militare, un Beluga, un tipo che non vede da un mese, il più lontano del mese. Ogni post è un'immagine del tabellone accanto a una mappa della traccia dell'aereo, entrambe disegnate dal Pi stesso, con un breve testo: il volo, il tipo, la rotta, l'altitudine, e il nome della tua città, mai la tua posizione. La password dell'app Bluesky resta sul Pi, in un file che solo il servizio può leggere; non compare mai in un log né sul tabellone.

## Costruito per non andare storto

ZenithBoard gira come root, ascolta sulla tua rete e installa software di altri, quindi è costruito per limitare ciò che può andare storto. Il tabellone risponde solo alla tua rete domestica e dà a tutti gli altri un 403, porta inoltrata o no; per vederlo da fuori, il menu spiega una VPN anziché una porta aperta. Ogni servizio gira in una sandbox systemd con solo ciò di cui il suo compito ha bisogno. Le firme dei pacchetti non sono mai disabilitate. Le correzioni di sicurezza di Debian possono installarsi da sole ogni giorno. Due watchdog riavviano ciò che si blocca, e un comando *health* ti dice in una sola schermata se tutto va bene.

## Che cosa serve

Un Raspberry Pi 3B o più recente con 1 GB di memoria, misurato: sul Pi 3B dell'autore, con ADS-B Exchange e il suo MLAT, FlightAware, Flightradar24, il tabellone, le statistiche e i post su Bluesky, restavano liberi 656 MB di memoria. Un Pi Zero 2 W fa girare il ricevitore e il tabellone, senza i feeder aggiuntivi. Raspberry Pi OS Lite, 64 bit. Un'ora la prima volta; dopo, `sudo zenithboard update` quando esce una nuova versione.
