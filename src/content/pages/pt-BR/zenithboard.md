---
title: "ZenithBoard"
description: "O painel de pontos ou o painel de letras giratórias de aeroporto em um tablet velho, o console web, as publicações no Bluesky. Gratuito, aberto, um menu para instalar tudo."
lang: pt-BR
page: zenithboard
updated: 2026-10-30
reviewed: false
next:
  label: "Instale: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

> **Versão candidata ao 1.0.** Desde 25 de outubro de 2026, a versão 0.99 está congelada: por um mês só entram correções, enquanto o Pi do autor roda sem ser tocado. Em 30 de outubro entraram dois recursos, o AirNav Radar e as mensagens do Telegram, então o mês recomeça. Se nada ficar em aberto, o 1.0 vem em 29 de novembro de 2026, no mínimo. Experimentar agora ajuda: um relato no [GitHub](https://github.com/regis57/ZenithBoard/issues) é bem-vindo.

## Em uma frase

O ZenithBoard transforma um Raspberry Pi e um pendrive de rádio USB em um receptor ADS-B que alimenta as cinco redes, e mostra as aeronaves bem em cima da sua casa em um tablet velho, como um letreiro de matriz de pontos aceso ou um painel de letras giratórias de aeroporto. É software livre, sob a GPL, e roda todos os dias no próprio Pi 3B do autor, ao ar livre, por Wi-Fi, na Moselle.

![O painel de matriz de pontos em âmbar: um Tunisair Airbus A320 com as suas duas bandeiras, a aeronave desenhada em pontos ao lado do texto, depois o próximo voo](/img/zb-wall.webp)

## O painel

O painel é uma página web que o Pi serve na sua rede doméstica. Abra-a em qualquer tablet ou tela com navegador, adicione à tela inicial, e ela fica ligada. Ela passa por todas as aeronaves dentro do raio que você escolher, de 1 a 50 km (ou milhas): indicativo, tipo de aeronave, altitude, velocidade, de onde o voo vem e para onde vai, distância e direção em relação a você. Dois visuais: uma grade de **128 por 80 pontos**, como um letreiro antigo de estação, ou um **painel de letras giratórias** cujas letras viram quando chega a próxima aeronave. Cinco cores: âmbar, verde, vermelho, branco, turquesa; uma de cada vez, porque a ideia é um letreiro aceso, não uma captura de tela de um mapa.

![O painel de letras giratórias em vermelho: as letras viram de um voo para o próximo](/img/zb-flap-roll.webp)

![O painel em seis visuais: matriz de pontos em âmbar, turquesa e branco em cima; letras giratórias em âmbar, verde e turquesa embaixo](/img/wall-colours.webp)

Uma pequena engrenagem no canto do painel abre as configurações dele: unidades, raio, segundos por aeronave, cor, visual e bandeiras. Elas ficam guardadas só naquele tablet, então cada tela pode ter o seu próprio visual, e o `zenithboard config` define os padrões para todas.

![As configurações do próprio painel sobre um painel de letras giratórias: unidades, raio, segundos por aeronave, cor, visual e bandeiras](/img/wall-settings.webp)

Ao lado do texto, uma silhueta da aeronave desenhada em pontos, duas bandeirinhas (onde a aeronave está registrada, onde foi construída) e, se você quiser, a foto dela do Planespotters, com o nome do fotógrafo. Nenhum logotipo de companhia aérea, nenhum logotipo de fabricante: são marcas protegidas, então as bandeiras ficam no lugar deles. As rotas e os modelos vêm de consultas públicas; o painel diz o que sabe e deixa a linha vazia quando não sabe.

Você pode experimentar o painel sem nenhum hardware: o repositório traz uma demonstração com companhias aéreas inventadas e um exemplo de tudo, de um A380 a um helicóptero, que roda em qualquer computador com Python.

## O receptor, e as cinco redes

O ZenithBoard instala o **readsb** como decodificador, com o seu mapa **tar1090**, e os alimentadores que você marcar: ADS-B Exchange sempre, FlightAware, Flightradar24, Plane Finder e AirNav Radar se você quiser. Ele mantém exatamente um cliente MLAT rodando e os conta em `zenithboard status`. Tudo vem desligado por padrão e é reversível: cada *ligar* tem um *desligar* que deixa as coisas como eram, um backup é feito antes de qualquer ação destrutiva, e o menu sempre tem uma saída.

O ganho do receptor pode ser ajustado pelo menu ou pelo console, um passo de cada vez, com as estatísticas para ver se ajudou. Estatísticas opcionais guardam um mês de mensagens por hora, alcance e aeronaves por dia; o **graphs1090** desenha anos delas.

## O console

Desde a versão 0.39, `http://<the Pi>:8080/console` mostra as configurações no visual do painel: uma visão geral do Pi (tempo ligado, temperatura, memória, cada serviço), o painel, o receptor, o Bluesky, os vigias, as atualizações. Uma seção de cada vez, uma barra lateral no computador, abas no celular. Cada alteração roda o mesmo comando que o menu rodaria, e mostra a você o que ele imprimiu. O console está em vinte e dois idiomas; este site usa a mesma lista e as mesmas bandeiras.

![Um Airbus Beluga no painel de letras giratórias](/img/wall-beluga-flap.webp)

## Bluesky

Opcional, desligado por padrão. Ligado, o Pi publica no Bluesky as aeronaves que merecem uma publicação: um avião-tanque militar, um Beluga, um tipo que ele não vê há um mês, a mais distante do mês. Cada publicação é uma imagem do painel ao lado de um mapa da trajetória da aeronave, ambos desenhados pelo próprio Pi, com um texto curto: o voo, o tipo, a rota, a altitude e o nome da sua cidade, nunca a sua posição. A senha de aplicativo do seu Bluesky fica no Pi, em um arquivo que só o serviço pode ler; ela nunca aparece em um log nem no painel.

## Feito para não dar errado

O ZenithBoard roda como root, escuta na sua rede e instala software de outras pessoas, então foi feito para limitar o que pode dar errado. O painel responde apenas à sua rede doméstica e dá um 403 a todo o resto, com porta encaminhada ou não; para vê-lo de fora, o menu explica uma VPN em vez de uma porta aberta. Cada serviço roda em uma sandbox do systemd com apenas o que a sua tarefa precisa. As assinaturas de pacotes nunca são desativadas. As correções de segurança do Debian podem se instalar sozinhas diariamente. Dois vigias reiniciam o que travar, e um comando *health* diz a você em uma única tela se está tudo bem.

## O que ele precisa

Um Raspberry Pi 3B ou mais novo com 1 GB de memória, medido: no Pi 3B do autor, com ADS-B Exchange e o seu MLAT, FlightAware, Flightradar24, o painel, as estatísticas e as publicações no Bluesky, 656 MB de memória ainda estavam livres. Um Pi Zero 2 W roda o receptor e o painel, sem os alimentadores extras. Raspberry Pi OS Lite, 64 bits. Uma hora na primeira vez; depois disso, `sudo zenithboard update` quando sair uma nova versão.
