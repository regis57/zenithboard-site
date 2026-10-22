---
title: "FAQ"
description: "Portée, obstacles, Wi-Fi, mémoire, légalité, vie privée : les questions que l'on se pose avant et après avoir construit un récepteur, avec des réponses franches."
lang: fr
page: faq
updated: 2026-10-22
reviewed: false
next:
  label: "Qui fait cela, et comment dire merci"
  href: about
---

## Est-ce légal d'écouter ?

La réception est passive : votre antenne n'émet rien. L'ADS-B est diffusé en clair précisément pour que tout le monde puisse l'entendre, et les données sont affichées sur des cartes publiques à longueur de journée. Dans la plupart des pays, recevoir des signaux radio diffusés sans chiffrement est licite ; les partager avec les réseaux de suivi est ce que des milliers de personnes font ouvertement. Si votre pays a des règles particulières sur la réception radio, vérifiez-les ; ce site n'est pas un conseil juridique.

## Jusqu'où vais-je entendre ?

Aussi loin que votre antenne peut voir. Le signal se propage en ligne droite, donc la question est ce qui se trouve entre votre antenne et le ciel. Une fenêtre : quelques dizaines de kilomètres, davantage du côté où donne la fenêtre. Un balcon ou des combles sous les tuiles : souvent 150 à 250 km. Un toit avec un horizon dégagé : 300 km et au-delà, vers les avions en croisière. Les avions bas près de chez vous sont cachés par les bâtiments et les arbres, quoi que vous fassiez. Rien dans le Raspberry Pi ne change la portée.

## Ma carte est vide

Laissez-lui dix minutes après le premier démarrage. Puis vérifiez, dans cet ordre : la clé est dans un port USB 2.0 (noir, pas les ports bleus USB 3.0 d'un Pi 4) ; l'antenne est vissée et verticale ; elle est près d'une fenêtre. Si la clé est détectée mais que rien n'arrive, le gain est peut-être trop haut ou trop bas : le menu vous laisse le déplacer un cran à la fois, et les statistiques montrent l'effet.

## Le Wi-Fi suffit-il ?

Oui pour le récepteur et les programmes d'envoi : quelques kilooctets par seconde. Le mur sur une tablette est léger aussi. Ce que le Wi-Fi fait mal, c'est la fiabilité : un Pi dehors en limite de signal décrochera de temps en temps. Un câble règle le problème ; déplacer le Pi aussi, puisque le câble d'antenne peut faire quelques mètres. Les chiens de garde de ZenithBoard reconnectent le Pi quand le réseau revient.

## 1 Go de mémoire suffit-il ?

Mesuré, oui. Sur le Pi 3B de l'auteur avec ADS-B Exchange et son MLAT, FlightAware, Flightradar24, le mur, les statistiques et les publications Bluesky en marche, 656 Mo sur 1 Go étaient encore libres. Un Pi Zero 2 W avec 512 Mo fait tourner le récepteur et le mur ; ajoutez les programmes d'envoi supplémentaires et cela devient juste. N'achetez pas un Pi plus gros pour cela : la portée vient de l'antenne.

## Est-ce que ça ralentit mon internet, ou consomme des données ?

Non. Un programme d'envoi transmet quelques kilooctets par seconde, moins qu'un flux radio. Sur un mois, cela fait quelques gigaoctets tout au plus, répartis entre les réseaux que vous alimentez.

## Qui peut voir ma position ?

Les réseaux que vous alimentez en ont besoin pour calculer les portées et le MLAT, et la conservent dans votre compte. Ils ne mettent pas d'épingle sur votre maison sur la carte publique. ZenithBoard n'affiche jamais votre position sur le mur ni dans une publication : les publications nomment votre ville, pas vos coordonnées. Votre mur et votre propre carte ne répondent qu'à votre réseau domestique, sauf si vous les ouvrez vous-même, et ZenithBoard explique un VPN avant d'expliquer un port ouvert.

## Le mur affichera-t-il tous les avions ?

Tous les avions qui diffusent leur position et se trouvent dans le rayon que vous avez choisi. Les avions à transpondeur ancien qui n'envoient pas de position n'apparaissent que si le MLAT d'un réseau les localise, et seulement sur les cartes des réseaux. Certains avions militaires et d'État ne diffusent rien du tout. Le mur dit ce qu'il entend, pas plus.

## Et les États-Unis et le 978 MHz ?

Aux États-Unis, beaucoup de petits avions utilisent le 978 MHz (UAT) au lieu du 1090 MHz. Les entendre demande une seconde clé et une seconde antenne. ZenithBoard vous demande votre région une seule fois ; si vous répondez *États-Unis*, il propose l'étape supplémentaire et démarre avec les unités impériales. Ailleurs, rien sur le 978 MHz n'est affiché.

## Puis-je le faire tourner sans Raspberry Pi ?

Le récepteur et les programmes d'envoi tournent sur n'importe quel ordinateur Linux. ZenithBoard lui-même vise Raspberry Pi OS ; la démo du mur tourne sur n'importe quel ordinateur avec Python, sans aucun matériel, si vous voulez juste voir à quoi cela ressemble.

## Est-ce qu'une partie de tout cela est un produit ?

Non. ZenithBoard est un logiciel libre sous GPL ; le texte de ce site est sous licence Creative Commons ; rien n'est vendu, aucun compte n'est nécessaire, il n'y a pas de télémétrie et ce site ne pose aucun cookie et n'appelle aucun tiers. Le seul argent qui circule est une bière, si le cœur vous en dit, en bas de chaque page.
