---
title: "ZenithBoard — el cielo sobre ti, en directo"
description: "El cielo sobre ti, descifrado por ti, compartido con el mundo."
lang: es
page: home
updated: 2026-10-30
reviewed: false
next:
  label: "Empieza aquí: qué es el ADS-B"
  href: adsb
---

## Qué es esto

Cada avión de línea que pasa sobre tu casa está hablando. Más o menos una vez por segundo, transmite quién es, dónde está, a qué altura y a qué velocidad. Esa señal se llama ADS-B, no está cifrada y cualquiera con una pequeña radio puede escucharla.

Este sitio explica tres cosas, en orden: qué es esa señal, cómo construir un receptor con una Raspberry Pi y unas pocas piezas, y cómo unirse a las miles de personas que comparten lo que oye su receptor con las redes mundiales de seguimiento de vuelos. La cuarta parte es ZenithBoard: un programa gratuito que instala todo de una vez y muestra los aviones que pasan sobre tu cabeza en una tableta vieja, en puntos luminosos o en un panel de letras giratorias como los de los aeropuertos.

## Lo que cuesta, lo que exige, lo que da

**Cuesta** entre 60 y 120 €, según la Raspberry Pi que elijas y la antena. Después, nada: ni suscripción ni cuenta de pago.

**Exige** alrededor de una hora la primera vez, una Raspberry Pi, un enchufe y la Wi-Fi de tu casa. No hace falta saber programar. Escribirás unos pocos comandos, que se te dan hechos.

**Da** los aviones que te rodean, en tu propia pantalla, sin nadie en medio. Si compartes tus datos, las redes de seguimiento devuelven algo: FlightAware abre una cuenta Enterprise gratuita, Flightradar24 un plan Contributor gratuito, Plane Finder el uso premium gratuito de su sitio y sus aplicaciones, AirNav Radar una cuenta Business, y ADS-B Exchange muestra tu estación en su sitio. Y si activas la publicación de ZenithBoard, los aviones que cruzan tu cielo se publican en Bluesky, como una imagen de tu panel.

## Los límites, dichos con claridad

Un receptor solo oye lo que puede ver: la señal viaja en línea recta, así que una ventana que da a una colina oye menos que un tejado. Una Raspberry Pi con 1 GB de memoria basta para todo, medido en la propia Pi 3B del autor. La Wi-Fi funciona; un cable funciona mejor. Aquí no se vende nada; el único dinero que se mueve es una cerveza, si te apetece, al pie de la página.
