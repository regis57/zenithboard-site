---
title: "Rejoindre la communauté"
description: "Cinq réseaux prendront ce que votre récepteur entend, et vous rendront quelque chose. Ce que vous donnez, ce que vous recevez, et ce qui reste chez vous."
lang: fr
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "Découvrez ZenithBoard"
  href: zenithboard
---

## Pourquoi partager

Votre récepteur entend quelques centaines de kilomètres autour de vous. Un réseau de récepteurs entend la planète. Chaque carte que vous avez jamais regardée sur un site de suivi des vols est faite de gens comme vous, un Raspberry Pi sur un rebord de fenêtre, qui envoient ce qu'ils entendent. Le ciel n'appartient à personne ; les cartes existent parce que des milliers de personnes le partagent.

Partager ne vous coûte rien : quelques kilooctets par seconde sur votre ligne internet, et rien qui vaille la peine d'être mentionné sur le Pi. En retour, les réseaux vous ouvrent leurs fonctions payantes, et votre antenne seule devient une partie du MLAT, qui trouve les avions qui ne disent pas où ils sont.

## Les cinq réseaux

Chacun veut la même chose, le flux de messages décodés par readsb, et chacun a son propre petit programme pour l'envoyer. ZenithBoard installe ceux que vous cochez ; vous pouvez aussi les installer vous-même depuis la page de chaque réseau.

### [ADS-B Exchange](https://www.adsbexchange.com/)

Le réseau de la communauté elle-même, tenu par des bénévoles et connu pour afficher chaque avion qu'il entend, sans filtrage à la demande. Alimenter ne demande aucun compte : leur script tourne sur le Pi, et votre flux apparaît sur leur site avec ses statistiques. Les participants au MLAT reçoivent en retour les avions que leurs données ont aidé à localiser. ZenithBoard le traite comme la couche de base ; les autres sont facultatifs par-dessus.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

Le programme d'envoi s'appelle **PiAware**. En retour, FlightAware offre à ceux qui alimentent un compte **Enterprise** gracieux : huit mois d'historique des vols, des alertes illimitées, des cartes sans publicité, et des statistiques sur ce que votre récepteur entend, avec les vols qu'il a aidé à suivre.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

Le programme d'envoi s'appelle **fr24feed**. En retour, le compte gratuit lié à votre récepteur passe à la formule **Contributor** dès que les données arrivent. Une clé de partage par flux ; si vous alimentez aussi d'autres réseaux, Flightradar24 vous demande de désactiver son propre MLAT, ce que ZenithBoard fait pour vous.

### [Plane Finder](https://planefinder.net/sharing/client)

Le programme d'envoi est le **Plane Finder ADS-B Client**. En retour, Plane Finder offre l'usage premium gratuit de son site et de ses applications à ceux qui partagent.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

Le programme d'envoi s'appelle **rbfeeder** (AirNav Radar s'appelait autrefois RadarBox). En retour, AirNav Radar offre un compte **Business** à ceux qui partagent. Le Pi crée sa propre clé de partage ; pour relier la station à votre compte, vous vous connectez sur leur site, ouvrez la page d'enregistrement de la station et y collez cette clé.

## Ce que vous donnez

Les messages eux-mêmes : l'adresse de l'avion, son indicatif, sa position, son altitude, sa vitesse, tels qu'ils ont été diffusés en clair. L'heure d'arrivée de chacun, ce dont le MLAT a besoin. La position de votre récepteur, pour que le réseau sache d'où les données ont été entendues. Rien de votre réseau domestique, pas de caméra, pas de micro ; les programmes d'envoi sont petits, ouverts ou documentés, et ZenithBoard vous montre ce que chacun fait.

## Ce qui reste chez vous

Votre position exacte est utilisée par les réseaux pour calculer les portées et le MLAT ; elle n'est pas affichée sur leurs cartes publiques comme une épingle sur votre maison, et ZenithBoard ne la montre jamais sur le mur ni dans une publication. Le mur de votre tablette et votre carte tar1090 sont sur votre réseau domestique seulement, sauf si vous les ouvrez vous-même. Tout ce que vous partagez, vous pouvez cesser de le partager : désactiver un programme d'envoi dans le menu remet les choses comme elles étaient.

## Un client MLAT, pas cinq

Chaque réseau peut faire tourner son propre client MLAT sur votre Pi. Cinq à la fois, c'est trop pour un Raspberry Pi : le processeur passe son temps à calculer et le mur saccade. ZenithBoard ne garde qu'un seul client MLAT en marche, celui d'ADS-B Exchange, et désactive le MLAT chez les autres ; `zenithboard status` compte ceux qui tournent, pour que vous puissiez vérifier qu'il y en a exactement un. Si vous installez les programmes d'envoi à la main, faites de même.

## Pour commencer

Dans ZenithBoard, le menu **1 ADS-B** liste les cinq réseaux avec une case à cocher chacun ; ADS-B Exchange est toujours actif. Pour FlightAware, Flightradar24, Plane Finder et AirNav Radar, vous créez un compte gratuit sur leur site ; l'installateur affiche le lien ou la clé à coller, une seule fois. Pour ADS-B Exchange, leur script demande un nom de station et votre position, et affiche le lien pour voir votre flux. Dix minutes plus tard, votre récepteur est sur leurs cartes, et les pages de statistiques montrent jusqu'où vous entendez.
