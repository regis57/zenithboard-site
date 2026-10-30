---
title: "ZenithBoard"
description: "Le mur de points ou le tableau à palettes d'aéroport sur une vieille tablette, la console web, les publications sur Bluesky. Libre, ouvert, un menu pour tout installer."
lang: fr
page: zenithboard
updated: 2026-10-30
reviewed: false
next:
  label: "Installez-le : github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

> **Version candidate pour la 1.0.** Depuis le 25 octobre 2026, la version 0.99 est gelée : pendant un mois, seules des corrections entrent, pendant que le Pi de l'auteur tourne sans qu'on y touche. Le 30 octobre, deux fonctions sont entrées, AirNav Radar et les messages Telegram : le mois repart donc. Si rien ne reste ouvert, la 1.0 suivra le 29 novembre 2026 au plus tôt. L'essayer maintenant aide : un retour sur [GitHub](https://github.com/regis57/ZenithBoard/issues) est le bienvenu.

## En une phrase

ZenithBoard transforme un Raspberry Pi et une clé radio USB en un récepteur ADS-B qui alimente les cinq réseaux, et affiche les avions juste au-dessus de votre maison sur une vieille tablette, comme une enseigne à matrice de points lumineux ou un tableau à palettes d'aéroport. C'est un logiciel libre, sous GPL, et il tourne chaque jour sur le Pi 3B de l'auteur lui-même, dehors, en Wi-Fi, en Moselle.

![Le mur à matrice de points en ambre : un Airbus A320 de Tunisair avec ses deux drapeaux, l'avion dessiné en points à côté du texte, puis le vol suivant](/img/zb-wall.webp)

## Le mur

Le mur est une page web que le Pi sert sur votre réseau domestique. Ouvrez-la sur n'importe quelle tablette ou n'importe quel écran avec un navigateur, ajoutez-la à l'écran d'accueil, et elle reste allumée. Elle fait défiler chaque avion dans le rayon que vous choisissez, de 1 à 50 km (ou miles) : indicatif, type d'avion, altitude, vitesse, d'où vient le vol et où il va, distance et direction depuis chez vous. Deux apparences : une grille de **128 points sur 80**, comme un vieux panneau de gare, ou un **tableau à palettes** dont les lettres basculent quand l'avion suivant arrive. Cinq couleurs : ambre, vert, rouge, blanc, turquoise ; une à la fois, parce que l'idée est une enseigne lumineuse, pas une capture d'écran de carte.

![Le tableau à palettes en rouge : les lettres basculent d'un vol au suivant](/img/zb-flap-roll.webp)

![Le mur en six apparences : matrice de points en ambre, turquoise et blanc en haut ; tableau à palettes en ambre, vert et turquoise en bas](/img/wall-colours.webp)

Un petit engrenage dans le coin du mur ouvre ses réglages : unités, rayon, secondes par avion, couleur, style et drapeaux. Ils sont gardés sur cette seule tablette, de sorte que chaque écran peut avoir sa propre apparence, et `zenithboard config` fixe les valeurs par défaut pour tous.

![Le panneau de réglages propre au mur, par-dessus un tableau à palettes : unités, rayon, secondes par avion, couleur, style et drapeaux](/img/wall-settings.webp)

À côté du texte, une silhouette de l'avion dessinée en points, deux petits drapeaux (où l'avion est immatriculé, où il a été construit), et, si vous le voulez, sa photo venue de Planespotters, avec le nom du photographe. Pas de logo de compagnie, pas de logo de constructeur : ce sont des marques protégées, alors les drapeaux les remplacent. Les routes et les modèles viennent de consultations publiques ; le mur dit ce qu'il sait et laisse la ligne vide quand il ne sait pas.

Vous pouvez essayer le mur sans aucun matériel : le dépôt fournit une démo avec des compagnies inventées et un exemple de tout, de l'A380 à l'hélicoptère, qui tourne sur n'importe quel ordinateur avec Python.

## Le récepteur, et les cinq réseaux

ZenithBoard installe **readsb** comme décodeur, avec sa carte **tar1090**, et les programmes d'envoi que vous cochez : ADS-B Exchange toujours, FlightAware, Flightradar24, Plane Finder et AirNav Radar si vous les voulez. Il garde exactement un client MLAT en marche et les compte dans `zenithboard status`. Tout est désactivé par défaut et réversible : chaque *on* a un *off* qui remet les choses en place, une sauvegarde est faite avant toute action destructrice, et le menu a toujours une porte de sortie.

Le gain du récepteur peut être réglé depuis le menu ou la console, un cran à la fois, avec les statistiques pour voir si cela a aidé. Des statistiques facultatives conservent un mois de messages par heure, de portée et d'avions par jour ; **graphs1090** en dessine des années.

## La console

Depuis la version 0.39, `http://<the Pi>:8080/console` affiche les réglages dans l'apparence du mur : une vue d'ensemble du Pi (temps de fonctionnement, température, mémoire, chaque service), le mur, le récepteur, Bluesky, les chiens de garde, les mises à jour. Une section à la fois, une barre latérale sur un ordinateur, des onglets sur un téléphone. Chaque changement exécute la même commande que le menu, et vous montre ce qu'elle a affiché. La console existe en vingt-deux langues ; ce site utilise la même liste et les mêmes drapeaux.

![Un Airbus Beluga sur le tableau à palettes](/img/wall-beluga-flap.webp)

## Bluesky

Facultatif, désactivé par défaut. Une fois activé, le Pi publie sur Bluesky les avions qui méritent une publication : un ravitailleur militaire, un Beluga, un type qu'il n'a pas vu depuis un mois, le plus lointain du mois. Chaque publication est une image du mur à côté d'une carte de la trajectoire de l'avion, toutes deux dessinées par le Pi lui-même, avec un court texte : le vol, le type, la route, l'altitude, et le nom de votre ville, jamais votre position. Votre mot de passe d'application Bluesky reste sur le Pi, dans un fichier que seul le service peut lire ; il n'apparaît jamais dans un journal ni sur le mur.

## Telegram

Facultatif, désactivé par défaut, depuis la version 0.99.6. Le Pi peut aussi écrire dans votre propre discussion ou groupe Telegram, par un bot que vous créez en une minute avec @BotFather : les avions qui traversent le rayon de partage, un message chacun avec le vol, le modèle, l'immatriculation et son drapeau, la route, l'altitude et la vitesse, et les codes transpondeur d'urgence, 7500, 7600 et 7700, entendus partout où porte l'antenne, avec ce que signifie le code et la ville la plus proche. Du texte seulement, pour vous seul : un code d'urgence n'est jamais publié sur Bluesky. Le jeton du bot se tape une fois dans le terminal et reste sur le Pi ; tout le reste se règle dans la console.

## Conçu pour ne pas mal tourner

ZenithBoard tourne en root, écoute sur votre réseau et installe les logiciels d'autres personnes, alors il est conçu pour limiter ce qui peut mal tourner. Le mur ne répond qu'à votre réseau domestique et renvoie un 403 à tous les autres, port redirigé ou non ; pour le voir de l'extérieur, le menu explique un VPN plutôt qu'un port ouvert. Chaque service tourne dans un bac à sable systemd avec seulement ce dont sa tâche a besoin. Les signatures des paquets ne sont jamais désactivées. Les correctifs de sécurité de Debian peuvent s'installer d'eux-mêmes chaque jour. Deux chiens de garde redémarrent ce qui se fige, et une commande *health* vous dit en un écran si tout va bien.

## Ce qu'il lui faut

Un Raspberry Pi 3B ou plus récent avec 1 Go de mémoire, mesuré : sur le Pi 3B de l'auteur, avec ADS-B Exchange et son MLAT, FlightAware, Flightradar24, le mur, les statistiques et les publications Bluesky, 656 Mo de mémoire étaient encore libres. Un Pi Zero 2 W fait tourner le récepteur et le mur, sans les programmes d'envoi supplémentaires. Raspberry Pi OS Lite, 64 bits. Une heure la première fois ; ensuite, `sudo zenithboard update` quand une nouvelle version sort.
