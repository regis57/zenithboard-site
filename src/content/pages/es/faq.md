---
title: "Preguntas frecuentes"
description: "Alcance, obstáculos, Wi-Fi, memoria, legalidad, privacidad: las preguntas que la gente hace antes y después de construir un receptor, respondidas con claridad."
lang: es
page: faq
updated: 2026-10-22
reviewed: false
next:
  label: "Quién hace esto, y cómo dar las gracias"
  href: about
---

## ¿Es legal escuchar?

Recibir es pasivo: tu antena no transmite nada. El ADS-B se difunde en abierto precisamente para que todo el mundo pueda oírlo, y los datos se muestran en mapas públicos todo el día. En la mayoría de los países, recibir señales de radio difundidas sin cifrar es lícito; compartirlas con las redes de seguimiento es lo que miles de personas hacen abiertamente. Si tu país tiene normas específicas sobre la recepción de radio, consúltalas; este sitio no es asesoramiento legal.

## ¿Hasta dónde oiré?

Hasta donde tu antena pueda ver. La señal viaja en línea recta, así que la pregunta es qué se interpone entre tu antena y el cielo. Una ventana: unas decenas de kilómetros, más hacia el lado al que da la ventana. Un balcón o un desván bajo las tejas: a menudo de 150 a 250 km. Un tejado con horizonte despejado: 300 km y más, hacia los aviones a altitud de crucero. Los aviones bajos y cercanos quedan ocultos por edificios y árboles, hagas lo que hagas. Nada de la Raspberry Pi cambia el alcance.

## Mi mapa está vacío

Dale diez minutos tras el primer arranque. Luego comprueba, en este orden: que el dispositivo esté en un puerto USB 2.0 (negro, no los azules USB 3.0 de una Pi 4); que la antena esté enroscada y vertical; que esté cerca de una ventana. Si el dispositivo se detecta pero no llega nada, puede que la ganancia sea demasiado alta o demasiado baja: el menú te deja moverla un paso cada vez, y las estadísticas muestran el efecto.

## ¿Basta con la Wi-Fi?

Sí para el receptor y los alimentadores: unos pocos kilobytes por segundo. El panel en una tableta también es ligero. Lo que la Wi-Fi hace mal es la fiabilidad: una Pi al aire libre, al límite de la señal, se desconectará de vez en cuando. Un cable lo arregla; también mover la Pi, ya que el cable de la antena puede medir varios metros. Los vigilantes de ZenithBoard vuelven a conectar la Pi cuando la red regresa.

## ¿Basta con 1 GB de memoria?

Medido, sí. En la Pi 3B del autor, con ADS-B Exchange y su MLAT, FlightAware, Flightradar24, el panel, las estadísticas y las publicaciones en Bluesky en marcha, seguían libres 656 MB de 1 GB. Una Pi Zero 2 W con 512 MB hace funcionar el receptor y el panel; añade los alimentadores adicionales y se queda justa. No compres una Pi más grande para esto: el alcance viene de la antena.

## ¿Ralentiza mi internet, o consume datos?

No. Un alimentador envía unos pocos kilobytes por segundo, menos que una radio por internet. En un mes eso son unos pocos gigabytes como mucho, repartidos entre las redes que alimentas.

## ¿Quién puede ver mi posición?

Las redes que alimentas la necesitan para calcular alcances y el MLAT, y la guardan en tu cuenta. No ponen una chincheta sobre tu casa en el mapa público. ZenithBoard nunca muestra tu posición en el panel ni en una publicación: las publicaciones nombran tu localidad, no tus coordenadas. Tu panel y tu propio mapa responden solo a tu red doméstica, a menos que los abras tú mismo, y ZenithBoard explica una VPN (red privada virtual) antes de explicar un puerto abierto.

## ¿Mostrará el panel todos los aviones?

Todos los aviones que transmiten su posición y están dentro del radio que elegiste. Los aviones con transpondedores antiguos que no envían posición aparecen solo si el MLAT de una red los localiza, y solo en los mapas de las redes. Algunos aviones militares y de Estado no transmiten nada. El panel dice lo que oye, nada más.

## ¿Y Estados Unidos y los 978 MHz?

En Estados Unidos, muchos aviones pequeños usan 978 MHz (UAT) en lugar de 1090 MHz. Para oírlos hacen falta un segundo dispositivo y una segunda antena. ZenithBoard pregunta tu región una sola vez; si respondes *Estados Unidos*, ofrece el paso adicional y arranca con unidades imperiales. En el resto del mundo no se muestra nada sobre los 978 MHz.

## ¿Puedo usarlo sin una Raspberry Pi?

El receptor y los alimentadores funcionan en cualquier ordenador con Linux. ZenithBoard en sí está pensado para Raspberry Pi OS; la demostración del panel funciona en cualquier ordenador con Python, sin ningún hardware, si solo quieres ver qué aspecto tiene.

## ¿Algo de esto es un producto?

No. ZenithBoard es software libre bajo la GPL; el texto de este sitio está bajo una licencia Creative Commons; no se vende nada, no hace falta cuenta, no hay telemetría y este sitio no pone cookies ni llama a terceros. El único dinero que se mueve es una cerveza, si te apetece, al pie de cada página.
