---
title: "Costruisci un ricevitore"
description: "Un Raspberry Pi, una chiavetta radio USB, un'antenna: la lista dei componenti con i prezzi, dove mettere l'antenna, e il software in un comando."
lang: it
page: build
updated: 2026-10-22
reviewed: false
next:
  label: "Poi unisciti alla comunità"
  href: join
---

## I componenti

Cinque cose, e forse tre le possiedi già.

| Componente | Che cosa cercare | Circa |
|---|---|---|
| Raspberry Pi | Un **3B, 3B+ o 4** è l'ideale: 1 GB di memoria basta per il ricevitore, i feeder e il tabellone, misurato sul Pi 3B dell'autore. Uno **Zero 2 W** (512 MB, in listino a 15 US$) fa girare il ricevitore e il tabellone, senza i feeder aggiuntivi. | 15–60 € |
| Chiavetta radio USB | Una chiavetta **RTL-SDR**. I modelli RTL-SDR Blog sono il riferimento, intorno a 35–40 US$. Una chiavetta pensata per l'ADS-B, con un filtro a 1090 MHz integrato (il Pro Stick di FlightAware, per esempio), sente più lontano in città. | 30–45 € |
| Antenna | Una piccola antenna accordata su **1090 MHz**. Quella venduta con alcune chiavette funziona a una finestra; un'antenna dedicata all'ADS-B, lunga mezzo metro, sente molto più lontano su un tetto o un balcone. | 10–40 € |
| Scheda micro-SD | 16 GB o più, di una marca conosciuta. | 8–12 € |
| Alimentatore | Quello ufficiale per il tuo Pi. Un caricatore da telefono spesso non basta e il Pi te lo farà sapere con un'icona a forma di fulmine. | 8–12 € |

Totale: **circa da 60 a 120 €**, una volta sola. I prezzi cambiano; questi sono gli ordini di grandezza visti sui siti dei produttori a ottobre 2026. Compra l'antenna per ultima: comincia con quella che arriva con la chiavetta, guarda che cosa senti, poi decidi.

Un vecchio tablet o qualsiasi schermo con un browser, per il tabellone, è facoltativo e probabilmente è già in un cassetto.

## Dove mettere l'antenna

È l'unica cosa che cambia la tua portata, quindi merita un minuto. Il segnale va in linea retta. L'antenna vuole il cielo, non la stanza: una finestra è il minimo, un balcone va bene, un tetto o un sottotetto sotto le tegole è il meglio. Verticale, lontana dal metallo, il più in alto possibile per quanto consente il cavo. Due metri più in alto spesso battono una chiavetta più cara.

Il Pi può restare dentro casa; i cavi USB fino a circa tre metri vanno bene. Se la chiavetta scalda d'estate, è normale.

## Il software, in due modi

### Il modo classico: readsb e tar1090

Il decodificatore è [**readsb**](https://github.com/wiedehopf/readsb); la mappa nel tuo browser è [**tar1090**](https://github.com/wiedehopf/tar1090); entrambi sono software libero dello stesso autore, con script di installazione che funzionano su un Raspberry Pi OS appena installato. Poi aggiungi ogni feeder a mano, dalla pagina di ciascuna rete. È la strada da seguire se ti piace capire ogni pezzo.

### Il modo tutto-in-uno: ZenithBoard

ZenithBoard installa readsb, i feeder che scegli e il tabellone da un unico menu, fa le poche domande una sola volta (la tua regione, le tue unità, dove si trova la tua antenna), e ti permette di aggiungere o togliere qualsiasi parte in seguito. Tiene inoltre in esecuzione un solo client MLAT, perché più di uno alla volta sovraccaricano un Pi.

Prepara la scheda con Raspberry Pi Imager (Raspberry Pi OS Lite, 64 bit, con SSH abilitato e il tuo Wi-Fi compilato), avvia il Pi, poi dal tuo computer:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Conta circa un'ora la prima volta, per lo più ad aspettare i download. Quando ha finito, il menu stampa l'indirizzo del tabellone, `http://<the Pi's address>:8080/`; aprilo nel browser del tablet e il tabellone è lì. La tua mappa personale, tar1090, è su `http://<the Pi's address>/tar1090/`.

## La tua posizione

Il decodificatore, l'MLAT e le distanze del tabellone hanno bisogno di sapere dove si trova l'antenna: latitudine, longitudine, altitudine. Fai clic destro su casa tua in una mappa per copiare le coordinate. Questa posizione resta sul tuo Pi e nelle impostazioni dei feeder; ZenithBoard non la mostra mai sul tabellone né in un post, e nemmeno le reti la pubblicano. La portata è misurata a partire da lì, tutto qui.

## Che cosa può andare storto

La chiavetta non viene trovata: usa una porta USB 2.0, non quelle blu USB 3.0 di un Pi 4, e un cavo corto. La mappa è vuota: dalle dieci minuti, poi controlla che l'antenna sia verticale e vicino a una finestra. Il Pi mostra un'icona a forma di fulmine: l'alimentatore è troppo debole. Il Wi-Fi cade: un cavo, oppure sposta il Pi; il ricevitore in sé ha bisogno di pochissima banda. Il resto è nelle FAQ.
