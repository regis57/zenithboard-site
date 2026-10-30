---
title: "ZenithBoard — le ciel au-dessus de chez vous, en direct"
description: "Le ciel au-dessus de chez vous, décodé par vous, partagé avec le monde."
lang: fr
page: home
updated: 2026-10-30
reviewed: false
next:
  label: "Commencez ici : qu'est-ce que l'ADS-B"
  href: adsb
---

## De quoi il s'agit

Chaque avion de ligne qui passe au-dessus de votre maison parle. Environ une fois par seconde, il annonce qui il est, où il est, à quelle altitude et à quelle vitesse. Ce signal s'appelle l'ADS-B, il n'est pas chiffré, et n'importe qui avec une petite radio peut l'écouter.

Ce site explique trois choses, dans l'ordre : ce qu'est ce signal, comment construire un récepteur pour le capter avec un Raspberry Pi et quelques pièces, et comment rejoindre les milliers de personnes qui partagent ce que leur récepteur entend avec les réseaux mondiaux de suivi des vols. La quatrième partie, c'est ZenithBoard : un programme gratuit qui installe tout cela d'un coup et affiche les avions qui passent au-dessus de vous sur une vieille tablette, en points lumineux ou sur un tableau à palettes d'aéroport.

## Ce que ça coûte, ce que ça demande, ce que ça donne

**Ça coûte** environ 60 à 120 €, selon le Raspberry Pi que vous choisissez et l'antenne. Rien ensuite : pas d'abonnement, pas de compte payant.

**Ça demande** environ une heure la première fois, un Raspberry Pi, une prise murale et votre Wi-Fi domestique. Vous n'avez pas besoin de savoir programmer. Vous taperez quelques commandes, qui vous sont données.

**Ça donne** les avions autour de vous, sur votre propre écran, sans personne entre les deux. Si vous partagez vos données, les réseaux de suivi vous rendent la pareille : FlightAware ouvre un compte Enterprise gratuit, Flightradar24 une formule Contributor gratuite, Plane Finder l'usage premium gratuit de son site et de ses applications, AirNav Radar un compte Business, et ADS-B Exchange affiche votre flux sur son site. Et si vous activez le partage de ZenithBoard, les avions qui traversent votre ciel sont publiés sur Bluesky, sous forme d'une image de votre mur.

## Les limites, dites franchement

Un récepteur n'entend que ce qu'il peut voir : le signal se propage en ligne droite, donc une fenêtre qui donne sur une colline entend moins qu'un toit. Un Raspberry Pi avec 1 Go de mémoire suffit pour tout cela, mesuré sur le Pi 3B de l'auteur lui-même. Le Wi-Fi fonctionne ; un câble fonctionne mieux. Rien ici n'est à vendre ; le seul argent qui circule est une bière, si le cœur vous en dit, en bas de la page.
