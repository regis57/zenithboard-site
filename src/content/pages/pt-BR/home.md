---
title: "ZenithBoard — o céu acima de você, ao vivo"
description: "O céu acima de você, decodificado por você, compartilhado com o mundo."
lang: pt-BR
page: home
updated: 2026-10-22
reviewed: false
next:
  label: "Comece por aqui: o que é ADS-B"
  href: adsb
---

## O que é isto

Todo avião de linha que passa sobre a sua casa está falando. Mais ou menos uma vez por segundo, ele transmite quem é, onde está, a que altura e a que velocidade. Esse sinal se chama ADS-B, não é criptografado, e qualquer pessoa com um pequeno rádio pode ouvi-lo.

Este site explica três coisas, nesta ordem: o que é esse sinal, como montar um receptor para ele com um Raspberry Pi e algumas peças, e como se juntar às milhares de pessoas que compartilham o que o receptor delas ouve com as redes de rastreamento de voos do mundo. A quarta parte é o ZenithBoard: um programa gratuito que instala tudo isso de uma vez e mostra as aeronaves que passam sobre você em um tablet velho, em pontos luminosos ou em um painel de letras giratórias de aeroporto.

## Quanto custa, o que exige, o que dá

**Custa** cerca de 60 a 120 €, dependendo do Raspberry Pi que você escolher e da antena. Nada depois disso: nenhuma assinatura, nenhuma conta paga.

**Exige** cerca de uma hora na primeira vez, um Raspberry Pi, uma tomada e o Wi-Fi da sua casa. Você não precisa saber programar. Vai digitar alguns comandos, que são dados a você.

**Dá** as aeronaves ao seu redor, na sua própria tela, sem ninguém no meio. Se você compartilhar seus dados, as redes de rastreamento dão algo em troca: a FlightAware abre uma conta Enterprise gratuita, a Flightradar24 um plano Contributor gratuito, a Plane Finder o uso premium gratuito do site e dos aplicativos dela, e a ADS-B Exchange mostra o seu feed no site dela. E se você ligar o compartilhamento do ZenithBoard, as aeronaves que cruzam o seu céu são publicadas no Bluesky, como uma foto do seu painel.

## Os limites, ditos com clareza

Um receptor só ouve o que consegue ver: o sinal viaja em linha reta, então uma janela virada para um morro ouve menos do que um telhado. Um Raspberry Pi com 1 GB de memória basta para tudo isso, medido no próprio Pi 3B do autor. Wi-Fi funciona; cabo funciona melhor. Nada aqui está à venda; o único dinheiro que circula é uma cerveja, se você tiver vontade, no fim da página.
