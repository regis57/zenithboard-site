---
title: "ZenithBoard — il cielo sopra di te, in diretta"
description: "Il cielo sopra di te, decodificato da te, condiviso con il mondo."
lang: it
page: home
updated: 2026-10-30
reviewed: false
next:
  label: "Si parte da qui: che cos'è l'ADS-B"
  href: adsb
---

## Di che cosa si tratta

Ogni aereo di linea che passa sopra casa tua parla. Circa una volta al secondo trasmette chi è, dove si trova, a che altezza e a che velocità vola. Quel segnale si chiama ADS-B, non è cifrato, e chiunque abbia una piccola radio può ascoltarlo.

Questo sito spiega tre cose, nell'ordine: che cos'è quel segnale, come costruire un ricevitore per captarlo con un Raspberry Pi e qualche componente, e come unirsi alle migliaia di persone che condividono ciò che il loro ricevitore sente con le reti mondiali di tracciamento dei voli. La quarta parte è ZenithBoard: un programma gratuito che installa tutto in un colpo solo e mostra gli aerei in volo sopra di te su un vecchio tablet, con puntini luminosi o su un tabellone a palette da aeroporto.

## Quanto costa, che cosa serve, che cosa dà

**Costa** circa da 60 a 120 €, a seconda del Raspberry Pi che scegli e dell'antenna. Poi più niente: nessun abbonamento, nessun account a pagamento.

**Serve** circa un'ora la prima volta, un Raspberry Pi, una presa di corrente e il Wi-Fi di casa. Non c'è bisogno di saper programmare. Digiterai qualche comando, che ti viene dato.

**Dà** gli aerei intorno a te, sul tuo schermo, senza nessun intermediario. Se condividi i tuoi dati, le reti di tracciamento ricambiano: FlightAware apre un account Enterprise gratuito, Flightradar24 un piano Contributor gratuito, Plane Finder l'uso premium gratuito del suo sito e delle sue app, AirNav Radar un account Business, e ADS-B Exchange mostra il tuo feed sul suo sito. E se attivi la condivisione di ZenithBoard, gli aerei che attraversano il tuo cielo vengono pubblicati su Bluesky, come un'immagine del tuo tabellone.

## I limiti, detti chiaramente

Un ricevitore sente solo ciò che può vedere: il segnale viaggia in linea retta, quindi una finestra che dà su una collina sente meno di un tetto. Un Raspberry Pi con 1 GB di memoria basta per tutto, misurato sul Pi 3B dell'autore. Il Wi-Fi funziona; un cavo funziona meglio. Qui niente è in vendita; l'unico denaro che gira è una birra, se ne hai voglia, in fondo alla pagina.
