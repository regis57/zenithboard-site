---
title: "Monte um receptor"
description: "Um Raspberry Pi, um pendrive de rádio USB, uma antena: a lista de peças com preços, onde colocar a antena, e o software em um comando."
lang: pt-BR
page: build
updated: 2026-10-22
reviewed: false
next:
  label: "Depois, junte-se à comunidade"
  href: join
---

## As peças

Cinco coisas, e talvez você já tenha três delas.

| Peça | O que procurar | Cerca de |
|---|---|---|
| Raspberry Pi | Um **3B, 3B+ ou 4** é o ideal: 1 GB de memória basta para o receptor, os alimentadores e o painel, medido no Pi 3B do autor. Um **Zero 2 W** (512 MB, anunciado a 15 US$) roda o receptor e o painel, sem os alimentadores extras. | 15–60 € |
| Pendrive de rádio USB | Um dongle **RTL-SDR**. Os modelos da RTL-SDR Blog são a referência, em torno de 35–40 US$. Um pendrive feito para ADS-B, com um filtro de 1090 MHz embutido (o Pro Stick da FlightAware, por exemplo), ouve mais longe na cidade. | 30–45 € |
| Antena | Uma antena pequena sintonizada em **1090 MHz**. A que vem com alguns pendrives funciona na janela; uma antena dedicada a ADS-B, de meio metro, ouve muito mais longe em um telhado ou em uma varanda. | 10–40 € |
| Cartão micro-SD | 16 GB ou mais, de uma marca conhecida. | 8–12 € |
| Fonte de alimentação | A oficial para o seu Pi. Um carregador de celular muitas vezes não basta, e o Pi avisa com um ícone de raio. | 8–12 € |

Total: **cerca de 60 a 120 €**, uma única vez. Os preços mudam; estas são as ordens de grandeza vistas nos sites dos fabricantes em outubro de 2026. Compre a antena por último: comece com o que vier com o pendrive, veja o que você ouve, depois decida.

Um tablet velho ou qualquer tela com navegador, para o painel, é opcional e provavelmente já está em alguma gaveta.

## Onde colocar a antena

Esta é a única coisa que muda o seu alcance, então merece um minuto. O sinal vai em linha reta. A antena quer o céu, não o quarto: uma janela é o mínimo, uma varanda é bom, um telhado ou um sótão sob as telhas é o melhor. Na vertical, longe de metal, o mais alto que o cabo permitir. Dois metros mais alto muitas vezes vale mais do que um pendrive mais caro.

O Pi em si pode ficar dentro de casa; cabos USB de até uns três metros funcionam bem. Se o pendrive esquentar no verão, isso é normal.

## O software, de dois jeitos

### O jeito clássico: readsb e tar1090

O decodificador é o [**readsb**](https://github.com/wiedehopf/readsb); o mapa no seu navegador é o [**tar1090**](https://github.com/wiedehopf/tar1090); os dois são software livre do mesmo autor, com scripts de instalação que funcionam em um Raspberry Pi OS recém-instalado. Depois você adiciona cada alimentador à mão, a partir da página de cada rede. Este é o caminho se você gosta de entender cada peça.

### O jeito tudo-em-um: ZenithBoard

O ZenithBoard instala o readsb, os alimentadores que você escolher e o painel a partir de um único menu, faz as poucas perguntas uma só vez (sua região, suas unidades, onde está a sua antena), e deixa você adicionar ou remover qualquer parte depois. Ele também mantém um único cliente MLAT rodando, porque vários ao mesmo tempo sobrecarregam um Pi.

Prepare o cartão com o Raspberry Pi Imager (Raspberry Pi OS Lite, 64 bits, com SSH ativado e o seu Wi-Fi preenchido), ligue o Pi, e então, do seu computador:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Conte cerca de uma hora na primeira vez, a maior parte esperando os downloads. Quando terminar, o menu imprime o endereço do painel, `http://<the Pi's address>:8080/`; abra-o no navegador do tablet e o painel está lá. O seu próprio mapa, o tar1090, está em `http://<the Pi's address>/tar1090/`.

## A sua posição

O decodificador, o MLAT e as distâncias do painel precisam saber onde está a antena: latitude, longitude, altitude. Clique com o botão direito na sua casa em um mapa para copiar as coordenadas. Essa posição fica no seu Pi e nas configurações dos alimentadores; o ZenithBoard nunca a mostra no painel nem em uma publicação, e as redes também não a publicam. O alcance é medido a partir dela, só isso.

## O que pode dar errado

O pendrive não é encontrado: use uma porta USB 2.0, não as azuis USB 3.0 de um Pi 4, e um cabo curto. O mapa está vazio: dê dez minutos, depois confira se a antena está na vertical e perto de uma janela. O Pi mostra um ícone de raio: a fonte de alimentação é fraca demais. O Wi-Fi cai: um cabo, ou mude o Pi de lugar; o receptor em si precisa de muito pouca banda. O FAQ tem o resto.
