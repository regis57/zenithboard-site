---
title: "FAQ"
description: "Alcance, obstáculos, Wi-Fi, memória, legalidade, privacidade: as perguntas que as pessoas fazem antes e depois de montar um receptor, respondidas com clareza."
lang: pt-BR
page: faq
updated: 2026-10-23
reviewed: false
next:
  label: "Quem faz isto, e como dizer obrigado"
  href: about
---

## É legal escutar?

Receber é passivo: a sua antena não transmite nada. O ADS-B é transmitido às claras justamente para que todo mundo possa ouvi-lo, e os dados aparecem em mapas públicos o dia inteiro. Na maioria dos países, receber sinais de rádio transmitidos sem criptografia é lícito; compartilhá-los com as redes de rastreamento é o que milhares de pessoas fazem abertamente. Se o seu país tem regras específicas sobre recepção de rádio, consulte-as; este site não é aconselhamento jurídico.

## Até onde vou ouvir?

Até onde a sua antena consegue ver. O sinal viaja em linha reta, então a questão é o que fica entre a sua antena e o céu. Uma janela: algumas dezenas de quilômetros, mais para o lado para o qual a janela está virada. Uma varanda ou um sótão sob as telhas: muitas vezes 150 a 250 km. Um telhado com o horizonte livre: 300 km ou mais, na direção das aeronaves em altitude de cruzeiro. As aeronaves baixas perto de você ficam escondidas por prédios e árvores, faça o que fizer. Nada no Raspberry Pi muda o alcance.

## Meu mapa está vazio

Dê dez minutos depois da primeira inicialização. Depois confira, nesta ordem: o pendrive está em uma porta USB 2.0 (preta, não as azuis USB 3.0 de um Pi 4); a antena está rosqueada e na vertical; ela está perto de uma janela. Se o pendrive é detectado mas nada chega, o ganho pode estar alto ou baixo demais: o menu deixa você movê-lo um passo de cada vez, e as estatísticas mostram o efeito.

## Wi-Fi é suficiente?

Sim para o receptor e os alimentadores: alguns kilobytes por segundo. O painel em um tablet também é leve. O que o Wi-Fi faz mal é a confiabilidade: um Pi ao ar livre no limite do sinal vai cair de vez em quando. Um cabo resolve; mudar o Pi de lugar também, já que o cabo da antena pode ter alguns metros. Os vigias do ZenithBoard reconectam o Pi quando a rede volta.

## 1 GB de memória é suficiente?

Medido, sim. No Pi 3B do autor, com ADS-B Exchange e o seu MLAT, FlightAware, Flightradar24, o painel, as estatísticas e as publicações no Bluesky rodando, 656 MB de 1 GB ainda estavam livres. Um Pi Zero 2 W com 512 MB roda o receptor e o painel; acrescente os alimentadores extras e fica apertado. Não compre um Pi maior para isto: o alcance vem da antena.

## Deixa minha internet lenta, ou gasta dados?

Não. Um alimentador envia alguns kilobytes por segundo, menos do que uma rádio pela internet. Ao longo de um mês isso dá alguns gigabytes no máximo, divididos entre as redes que você alimenta.

## Quem pode ver a minha posição?

As redes que você alimenta precisam dela para calcular alcances e o MLAT, e a guardam na sua conta. Elas não colocam um alfinete na sua casa no mapa público. O ZenithBoard nunca mostra a sua posição no painel nem em uma publicação: as publicações dizem o nome da sua cidade, não as suas coordenadas. O seu painel e o seu próprio mapa respondem apenas à sua rede doméstica, a menos que você mesmo os abra, e o ZenithBoard explica uma VPN antes de explicar uma porta aberta.

## O que é MLAT, e por que o meu receptor precisa dos outros?

MLAT é a abreviação de *multilateração*. É como uma rede encontra uma aeronave que envia a sua identidade mas **não** a sua posição, que é o que os transponders mais antigos fazem: eles respondem "estou aqui" sem o "aqui".

O truque é o tempo. O rádio viaja à velocidade da luz, cerca de 300 metros a cada microssegundo. Quando uma aeronave dessas transmite, todos os receptores ao alcance ouvem a mesma mensagem, mas não no mesmo instante: o mais próximo ouve primeiro, um mais distante algumas centenas de microssegundos depois. Um receptor sozinho não aprende nada com isso; ele não faz ideia de quando a mensagem saiu da aeronave. Mas junte quatro receptores, cada um com um relógio muito preciso, e as diferenças entre os seus tempos de chegada deixam um único lugar no céu de onde a mensagem pode ter vindo. Esse lugar é desenhado, e a aeronave aparece no mapa.

![Quatro receptores no chão ouvem a mesma mensagem em quatro instantes diferentes; ao redor de cada um, um círculo cujo tamanho é o seu tempo de chegada; os quatro círculos se cruzam em um único ponto, onde está a aeronave](/img/mlat.svg)

Na imagem: quatro receptores, quatro tempos de chegada, quatro círculos. Cada círculo é "a aeronave está a esta distância de mim". Eles se encontram em um lugar, e só em um. Isso é o MLAT, e é por isso que as redes pedem a cada alimentador que envie a hora exata em que cada mensagem chegou, não só a mensagem.

Então o seu receptor sozinho não consegue fazer MLAT por conta própria, e essa é a resposta honesta para "por que compartilhar?": ao alimentar uma rede, a sua antena vira uma das quatro, e aeronaves que não dizem nada sobre a sua posição começam a aparecer, nos mapas das redes e, pelos dados que elas mandam de volta, no seu. Isso também explica duas coisas que o ZenithBoard faz: ele mantém **um só** cliente MLAT rodando (a aritmética é pesada para um Raspberry Pi), e ele precisa da posição exata da sua antena, porque um círculo desenhado a partir do lugar errado cruza os outros no ponto errado.

## O painel vai mostrar todas as aeronaves?

Todas as aeronaves que transmitem a sua posição e estão dentro do raio que você escolheu. As aeronaves com transponders mais antigos, que não enviam posição, aparecem só se o MLAT de uma rede as localizar, e só nos mapas das redes. Algumas aeronaves militares e de Estado não transmitem nada. O painel diz o que ouve, nada mais.

## E os Estados Unidos e os 978 MHz?

Nos Estados Unidos, muitas aeronaves pequenas usam 978 MHz (UAT) em vez de 1090 MHz. Ouvi-las exige um segundo pendrive e uma segunda antena. O ZenithBoard pergunta a sua região uma única vez; se você responder *Estados Unidos*, ele oferece a etapa extra e começa com unidades imperiais. Em qualquer outro lugar, nada sobre 978 MHz é mostrado.

## Posso rodar sem um Raspberry Pi?

O receptor e os alimentadores rodam em qualquer computador Linux. O ZenithBoard em si é voltado para o Raspberry Pi OS; a demonstração do painel roda em qualquer computador com Python, sem hardware nenhum, se você só quiser ver como ele é.

## Alguma coisa disto é um produto?

Não. O ZenithBoard é software livre sob a GPL; o texto deste site está sob uma licença Creative Commons; nada é vendido, nenhuma conta é necessária, não há telemetria, e este site não grava nenhum cookie nem chama nenhum terceiro. O único dinheiro que circula é uma cerveja, se você tiver vontade, no fim de cada página.
