---
title: "Qu'est-ce que l'ADS-B"
description: "Le signal que chaque avion de ligne diffuse, ce qu'il contient, pourquoi n'importe qui peut le recevoir, et ce qu'il ne vous dit pas."
lang: fr
page: adsb
updated: 2026-10-23
reviewed: false
next:
  label: "Construisez votre récepteur"
  href: build
---

## Un avion qui dit où il est

![Un satellite dit à l'avion où il est ; l'avion émet sa position dans toutes les directions, en anneaux que chaque maison au sol, et tout autre avion, peut capter](/img/fig-adsb-broadcast.svg)

![Un message contient quatre choses : qui est l'avion, où il est, à quelle altitude et à quelle vitesse ; et il est renvoyé chaque seconde](/img/fig-adsb-message.svg)

ADS-B signifie *Automatic Dependent Surveillance – Broadcast*, soit « surveillance dépendante automatique en mode diffusion ». Prenons les mots un par un. *Automatic* (automatique) : l'avion l'envoie de lui-même, personne ne le lui demande. *Dependent* (dépendante) : la position vient de la navigation par satellite de l'avion lui-même, pas d'un radar au sol. *Surveillance* : c'est ainsi que le contrôle aérien suit l'avion. *Broadcast* (diffusion) : c'est envoyé à tout le monde, pas à un seul destinataire.

Environ une fois par seconde, l'avion transmet un court message sur **1090 MHz**. Le message contient son identité (une adresse sur 24 bits attribuée à cette cellule, et en général l'indicatif du vol), sa position (latitude et longitude), son altitude, sa vitesse et son cap. D'autres messages, envoyés de temps en temps, ajoutent la catégorie de l'avion, sa vitesse verticale et quelques indicateurs.

Depuis 2020, la plupart des avions qui volent dans l'espace aérien contrôlé en Europe et aux États-Unis sont tenus de diffuser l'ADS-B. Les avions de ligne le font, les jets d'affaires le font, beaucoup d'avions légers le font. Certains avions militaires et d'État ne le font pas, ou le font sans leur position.

## Pourquoi vous pouvez écouter

![De l'antenne à une petite clé radio, puis à un Raspberry Pi, puis à un écran qui montre les avions](/img/fig-adsb-chain.svg)

Les messages ne sont ni chiffrés ni signés. C'est voulu : tout l'intérêt est que chaque avion et chaque station au sol alentour puisse entendre tous les autres avions. Le format est public, défini par les normes sur lesquelles repose l'aviation, et la fréquence est la même partout dans le monde.

Un récepteur n'est donc qu'une radio réglée sur 1090 MHz et un programme qui transforme les impulsions en texte. Il y a vingt ans, cette radio coûtait des milliers d'euros. Aujourd'hui, une clé USB vendue pour la télévision numérique, de la taille d'un pouce, fait le travail, parce qu'on peut demander à sa puce d'écouter n'importe quelle fréquence et de transmettre le signal brut à un ordinateur. Cette clé s'appelle une RTL-SDR, d'après la puce qu'elle contient (RTL2832U) et le principe (*software-defined radio*, la radio logicielle : c'est l'ordinateur qui fait le décodage).

Le programme qui fait le décodage sur un Raspberry Pi est en général **readsb**, un successeur du plus ancien *dump1090*. Il écoute la clé, décode les messages et offre le résultat à tout ce qui en veut : une carte dans votre navigateur (**tar1090**), un programme d'envoi vers un réseau de suivi, ou le mur de ZenithBoard.

## Aux États-Unis : 978 MHz aussi

Les États-Unis utilisent aussi une seconde fréquence, **978 MHz**, appelée UAT (*Universal Access Transceiver*, émetteur-récepteur à accès universel), surtout pour les petits avions qui volent bas. L'entendre demande une seconde clé USB et une seconde antenne. Partout ailleurs, 1090 MHz est tout ce qui existe. ZenithBoard vous demande votre région une seule fois et ne mentionne 978 MHz que si vous répondez *États-Unis*.

## Jusqu'où vous entendez

![Le signal voyage en ligne droite pendant que la Terre s'incurve : un avion au-dessus de la ligne de visée est entendu, un avion au-delà de l'horizon reste caché, et une antenne plus haute voit plus loin](/img/fig-adsb-range.svg)

Le signal se propage en ligne droite, comme la lumière. Un avion en croisière est visible de très loin, tant que rien ne se trouve entre lui et votre antenne. Depuis une fenêtre qui donne sur une colline, vous entendrez peut-être quelques dizaines de kilomètres ; depuis un toit avec un horizon dégagé, 250 km et plus est courant, et les avions tout au bord sont ceux qui volent à 11 000 mètres. Les avions bas près de chez vous sont cachés par chaque bâtiment et chaque arbre. La portée dépend de l'antenne et de sa vue, pas de l'ordinateur.

## Ce que l'ADS-B ne vous dit pas

Le message dit où est l'avion, pas où il va. L'origine, la destination, le nom de la compagnie et la photo de l'avion viennent d'ailleurs : de registres publics et de bases de données que les réseaux de suivi et ZenithBoard consultent à partir de l'adresse de l'avion. L'ADS-B ne dit rien non plus sur qui est à bord, et rien sur vous : la réception est passive, votre récepteur n'émet rien.

## MLAT : entendre ceux qui ne disent rien

![Quatre récepteurs au sol entendent le même message à quatre instants différents ; autour de chacun, un cercle dont la taille est son heure d'arrivée ; les quatre cercles ne se croisent qu'en un seul point, là où se trouve l'avion](/img/mlat.svg)

Certains avions envoient leur identité mais pas leur position (les transpondeurs anciens font cela). Si quatre récepteurs ou plus entendent le même message, les infimes différences d'heure d'arrivée donnent la position, comme on localise la foudre à partir de son tonnerre. Cela s'appelle le **MLAT**, pour *multilateration* (multilatération). Votre récepteur seul ne peut pas le faire ; en alimentant un réseau, il devient l'un des quatre. C'est l'une des vraies raisons de partager.
