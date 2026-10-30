---
title: "Junte-se à comunidade"
description: "Cinco redes aceitam o que o seu receptor ouve, e dão algo em troca. O que você dá, o que você recebe, e o que fica em casa."
lang: pt-BR
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "Conheça o ZenithBoard"
  href: zenithboard
---

## Por que compartilhar, afinal

O seu receptor ouve algumas centenas de quilômetros ao seu redor. Uma rede de receptores ouve o planeta. Todo mapa que você já olhou em um site de rastreamento de voos é feito de pessoas como você, um Raspberry Pi no parapeito da janela, enviando o que ouvem. Ninguém é dono do céu; os mapas existem porque milhares o compartilham.

Compartilhar não custa nada a você: alguns kilobytes por segundo na sua linha de internet, e nada digno de nota no Pi. Em troca, as redes abrem os recursos pagos delas para você, e a sua única antena passa a fazer parte do MLAT, que encontra as aeronaves que não dizem onde estão.

## As cinco redes

Cada uma quer a mesma coisa, o fluxo de mensagens decodificadas do readsb, e cada uma tem o seu próprio programinha para enviá-lo. O ZenithBoard instala os que você marcar; você também pode instalá-los por conta própria a partir da página de cada rede.

### [ADS-B Exchange](https://www.adsbexchange.com/)

A rede da própria comunidade, mantida por voluntários e conhecida por mostrar todas as aeronaves que ouve, sem filtrar a pedido de ninguém. Alimentar não exige conta: o script deles roda no Pi, e o seu feed aparece no site deles com as suas estatísticas. Quem participa do MLAT recebe de volta as aeronaves que os seus dados ajudaram a localizar. O ZenithBoard a trata como a camada de base; as outras são opcionais por cima.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

O alimentador se chama **PiAware**. Em troca, a FlightAware dá a quem alimenta uma conta **Enterprise** de cortesia: oito meses de histórico de voos, alertas ilimitados, mapas sem anúncios e estatísticas sobre o que o seu receptor ouve, com os voos que ele ajudou a rastrear.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

O alimentador se chama **fr24feed**. Em troca, a conta gratuita vinculada ao seu receptor passa ao plano **Contributor** assim que os dados chegam. Uma chave de compartilhamento por feed; se você também alimenta outras redes, a Flightradar24 pede que você desligue o MLAT dela, o que o ZenithBoard faz por você.

### [Plane Finder](https://planefinder.net/sharing/client)

O alimentador é o **Plane Finder ADS-B Client**. Em troca, a Plane Finder oferece o uso premium gratuito do site e dos aplicativos dela a quem compartilha.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

O alimentador se chama **rbfeeder** (a AirNav Radar antes se chamava RadarBox). Em troca, a AirNav Radar dá a quem compartilha uma conta **Business**. O Pi gera a própria chave de compartilhamento; para vincular a estação à sua conta, você entra no site dela, abre a página de registro da estação e cola essa chave.

## O que você dá

As próprias mensagens: o endereço da aeronave, o indicativo, a posição, a altitude, a velocidade, como foram transmitidas abertamente. A hora em que cada uma chegou, que é o que o MLAT precisa. A posição do seu receptor, para que a rede saiba de onde os dados foram ouvidos. Nada da sua rede doméstica, nenhuma câmera, nenhum microfone; os programas alimentadores são pequenos, abertos ou documentados, e o ZenithBoard mostra a você o que cada um está fazendo.

## O que fica em casa

A sua posição exata é usada pelas redes para calcular alcances e o MLAT; ela não aparece nos mapas públicos delas como um alfinete na sua casa, e o ZenithBoard nunca a mostra no painel nem em uma publicação. O painel do seu tablet e o seu mapa tar1090 ficam apenas na sua rede doméstica, a menos que você mesmo os abra. Tudo o que você compartilha, você pode parar de compartilhar: desligar um alimentador no menu deixa as coisas como eram antes.

## Um cliente MLAT, não cinco

Cada rede pode rodar o seu próprio cliente MLAT no seu Pi. Cinco ao mesmo tempo é demais para um Raspberry Pi: o processador passa o tempo fazendo contas e o painel engasga. O ZenithBoard mantém um único cliente MLAT rodando, o da ADS-B Exchange, e desliga o MLAT nos outros; `zenithboard status` conta os que estão rodando para você conferir que há exatamente um. Se instalar os alimentadores à mão, faça o mesmo.

## Para começar

No ZenithBoard, o menu **1 ADS-B** lista as cinco redes com uma caixa de marcação para cada uma; a ADS-B Exchange está sempre ligada. Para FlightAware, Flightradar24, Plane Finder e AirNav Radar você cria uma conta gratuita no site delas; o instalador imprime o link ou a chave a colar, uma única vez. Para a ADS-B Exchange, o script deles pede um nome de estação e a sua posição, e imprime o link para ver o seu feed. Dez minutos depois o seu receptor está nos mapas delas, e as páginas de estatísticas mostram até onde você ouve.
