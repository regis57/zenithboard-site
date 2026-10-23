---
title: "Construire un récepteur"
description: "Un Raspberry Pi, une clé radio USB, une antenne : la liste des pièces avec les prix, où placer l'antenne, et le logiciel en une commande."
lang: fr
page: build
updated: 2026-10-23
reviewed: false
next:
  label: "Puis rejoignez la communauté"
  href: join
---

## Les pièces

Cinq choses, et vous en possédez peut-être déjà trois.

| Pièce | Ce qu'il faut chercher | Environ |
|---|---|---|
| ![](/img/part-pi.svg) Raspberry Pi | Un **3B, 3B+ ou 4** est idéal : 1 Go de mémoire suffit pour le récepteur, les programmes d'envoi et le mur, mesuré sur le Pi 3B de l'auteur. Un **Zero 2 W** (512 Mo, affiché à 15 US$) fait tourner le récepteur et le mur, sans les programmes d'envoi supplémentaires. | 15–60 € |
| ![](/img/part-stick.svg) Clé radio USB | Une clé **RTL-SDR**. Les modèles RTL-SDR Blog sont la référence, autour de 35–40 US$. Une clé conçue pour l'ADS-B, avec un filtre 1090 MHz intégré (le Pro Stick de FlightAware, par exemple), entend plus loin en ville. | 30–45 € |
| ![](/img/part-antenna.svg) Antenne | Une petite antenne accordée sur **1090 MHz**. Celle vendue avec certaines clés fonctionne à une fenêtre ; une antenne dédiée à l'ADS-B, longue d'un demi-mètre, entend beaucoup plus loin sur un toit ou un balcon. | 10–40 € |
| ![](/img/part-sdcard.svg) Carte micro-SD | 16 Go ou plus, d'une marque connue. | 8–12 € |
| ![](/img/part-psu.svg) Alimentation | L'officielle pour votre Pi. Un chargeur de téléphone ne suffit souvent pas, et le Pi vous le dira avec une icône d'éclair. | 8–12 € |

Total : **environ 60 à 120 €**, une fois pour toutes. Les prix bougent ; ce sont les ordres de grandeur vus sur les sites des fabricants en octobre 2026. Achetez l'antenne en dernier : commencez avec celle qui vient avec la clé, voyez ce que vous entendez, puis décidez.

Une vieille tablette ou n'importe quel écran avec un navigateur, pour le mur, est facultatif et dort probablement déjà dans un tiroir.

## Où placer l'antenne

C'est la seule chose qui change votre portée, alors elle mérite une minute. Le signal va en ligne droite. L'antenne veut le ciel, pas la pièce : une fenêtre est le minimum, un balcon est bien, un toit ou des combles sous les tuiles sont l'idéal. Verticale, loin du métal, aussi haut que le câble le permet. Deux mètres plus haut l'emporte souvent sur une clé plus chère.

Le Pi lui-même peut rester à l'intérieur ; les câbles USB jusqu'à trois mètres environ conviennent. Si la clé chauffe en été, c'est normal.

## Le logiciel, de deux façons

### La façon classique : readsb et tar1090

Le décodeur est [**readsb**](https://github.com/wiedehopf/readsb) ; la carte dans votre navigateur est [**tar1090**](https://github.com/wiedehopf/tar1090) ; les deux sont des logiciels libres du même auteur, avec des scripts d'installation qui fonctionnent sur un Raspberry Pi OS tout frais. Vous ajoutez ensuite chaque programme d'envoi à la main, depuis la page de chaque réseau. C'est la voie à suivre si vous aimez comprendre chaque pièce.

### La façon tout-en-un : ZenithBoard

ZenithBoard installe readsb, les programmes d'envoi que vous choisissez et le mur depuis un seul menu, pose les quelques questions une seule fois (votre région, vos unités, où se trouve votre antenne), et vous laisse ajouter ou retirer n'importe quelle partie plus tard. Il ne garde aussi qu'un seul client MLAT en marche, parce que plusieurs à la fois surchargent un Pi.

Préparez la carte avec Raspberry Pi Imager (Raspberry Pi OS Lite, 64 bits, avec SSH activé et votre Wi-Fi renseigné), démarrez le Pi, puis depuis votre ordinateur :

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Comptez environ une heure la première fois, l'essentiel à attendre les téléchargements. Quand c'est terminé, le menu affiche l'adresse du mur, `http://<the Pi's address>:8080/` ; ouvrez-la dans le navigateur de la tablette et le mur est là. Votre propre carte, tar1090, est à `http://<the Pi's address>/tar1090/`.

## Votre position

Le décodeur, le MLAT et les distances du mur ont besoin de savoir où est l'antenne : latitude, longitude, altitude. Faites un clic droit sur votre maison sur une carte pour copier les coordonnées. Cette position reste sur votre Pi et dans les réglages des programmes d'envoi ; ZenithBoard ne l'affiche jamais sur le mur ni dans une publication, et les réseaux ne la publient pas non plus. La portée est mesurée à partir d'elle, c'est tout.

## Ce qui peut mal tourner

La clé n'est pas détectée : utilisez un port USB 2.0, pas les ports bleus USB 3.0 d'un Pi 4, et un câble court. La carte est vide : laissez-lui dix minutes, puis vérifiez que l'antenne est verticale et près d'une fenêtre. Le Pi affiche une icône d'éclair : l'alimentation est trop faible. Le Wi-Fi décroche : un câble, ou déplacez le Pi ; le récepteur lui-même a besoin de très peu de bande passante. La FAQ a le reste.
