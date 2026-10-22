---
title: "O que é ADS-B"
description: "O sinal que todo avião de linha transmite, o que ele contém, por que qualquer pessoa pode recebê-lo, e o que ele não diz a você."
lang: pt-BR
page: adsb
updated: 2026-10-22
reviewed: false
next:
  label: "Monte o seu receptor"
  href: build
---

## Um avião que diz onde está

ADS-B significa *Automatic Dependent Surveillance – Broadcast* (vigilância dependente automática por difusão). Pegue as palavras uma de cada vez. *Automatic* (automática): a aeronave envia por conta própria, ninguém pede. *Dependent* (dependente): a posição vem da própria navegação por satélite da aeronave, não de um radar no solo. *Surveillance* (vigilância): é assim que o controle de tráfego aéreo acompanha a aeronave. *Broadcast* (difusão): é enviado para todos, não para um único ouvinte.

Mais ou menos uma vez por segundo, a aeronave transmite uma mensagem curta em **1090 MHz**. A mensagem carrega a identidade dela (um endereço de 24 bits atribuído àquela célula, e em geral o indicativo do voo), a posição (latitude e longitude), a altitude, a velocidade e o rumo. Outras mensagens, enviadas de vez em quando, acrescentam a categoria da aeronave, a razão de subida ou descida e alguns indicadores.

Desde 2020, a maioria das aeronaves que voam em espaço aéreo controlado na Europa e nos Estados Unidos é obrigada a transmitir ADS-B. Os aviões de linha transmitem, os jatos executivos transmitem, muitas aeronaves leves transmitem. Algumas aeronaves militares e de Estado não transmitem, ou transmitem sem a posição.

## Por que você pode ouvir

As mensagens não são criptografadas nem assinadas. Isso é de propósito: a ideia toda é que cada aeronave e cada estação de solo ao redor possa ouvir todas as outras aeronaves. O formato é público, definido pelas normas que regem a aviação, e a frequência é a mesma no mundo inteiro.

Então um receptor é só um rádio sintonizado em 1090 MHz e um programa que transforma os pulsos em texto. Vinte anos atrás esse rádio custava milhares. Hoje um pendrive USB vendido para televisão digital, mais ou menos do tamanho de um polegar, dá conta do recado, porque o chip dele pode ser instruído a escutar qualquer frequência e entregar o sinal bruto a um computador. Esse pendrive se chama RTL-SDR, por causa do chip que tem dentro (RTL2832U) e da ideia (*software-defined radio*, rádio definido por software: o computador faz a decodificação).

O programa que faz a decodificação em um Raspberry Pi costuma ser o **readsb**, sucessor do antigo *dump1090*. Ele escuta o pendrive, decodifica as mensagens e oferece o resultado a qualquer coisa que o queira: um mapa no seu navegador (**tar1090**), um alimentador para uma rede de rastreamento, ou o painel do ZenithBoard.

## Nos Estados Unidos: 978 MHz também

Os Estados Unidos usam também uma segunda frequência, **978 MHz**, chamada UAT (*Universal Access Transceiver*, transceptor de acesso universal), principalmente para aeronaves pequenas voando baixo. Ouvi-la exige um segundo pendrive USB e uma segunda antena. Em todo o resto do mundo, 1090 MHz é tudo o que existe. O ZenithBoard pergunta a sua região uma única vez e só menciona 978 MHz se você responder *Estados Unidos*.

## Até onde você ouve

O sinal viaja em linha reta, como a luz. Uma aeronave em altitude de cruzeiro é visível de muito longe, desde que nada fique entre ela e a sua antena. De uma janela virada para um morro você pode ouvir algumas dezenas de quilômetros; de um telhado com o horizonte livre, 250 km ou mais é comum, e as aeronaves na borda são as que estão a 11.000 metros. As aeronaves baixas perto de você ficam escondidas por cada prédio e cada árvore. O alcance depende da antena e da vista dela, não do computador.

## O que o ADS-B não diz a você

A mensagem diz onde a aeronave está, não para onde ela vai. A origem, o destino, o nome da companhia aérea e a foto da aeronave vêm de outro lugar: de registros públicos e de bancos de dados que as redes de rastreamento e o ZenithBoard consultam pelo endereço da aeronave. O ADS-B também não diz nada sobre quem está a bordo, e nada sobre você: receber é passivo, o seu receptor não transmite nada.

## MLAT: ouvindo as que não dizem

Algumas aeronaves enviam a identidade mas não a posição (os transponders mais antigos fazem isso). Se quatro ou mais receptores ouvem a mesma mensagem, as pequenas diferenças no tempo de chegada dão a posição, do mesmo jeito que se localiza um raio pelo trovão. Isso se chama **MLAT**, *multilateration* (multilateração). O seu receptor sozinho não consegue fazer isso; ao alimentar uma rede, ele se torna um dos quatro. Essa é uma das razões reais para compartilhar.
