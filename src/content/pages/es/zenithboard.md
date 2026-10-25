---
title: "ZenithBoard"
description: "El panel de puntos o el panel de letras giratorias de aeropuerto en una tableta vieja, la consola web, las publicaciones en Bluesky. Libre, abierto, un menú lo instala todo."
lang: es
page: zenithboard
updated: 2026-10-25
reviewed: false
next:
  label: "Instálalo: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

## En una frase

ZenithBoard convierte una Raspberry Pi y una radio USB en un receptor ADS-B que alimenta las cuatro redes, y muestra los aviones justo encima de tu casa en una tableta vieja, como un letrero luminoso de matriz de puntos o como un panel de letras giratorias de aeropuerto. Es software libre, bajo la GPL, y funciona cada día en la propia Pi 3B del autor, al aire libre, por Wi-Fi, en Mosela.

![El panel de matriz de puntos en ámbar: un Tunisair Airbus A320 con sus dos banderas, el avión dibujado con puntos junto al texto, y después el siguiente vuelo](/img/zb-wall.webp)

## El panel

El panel es una página web que la Pi sirve en tu red doméstica. Ábrela en cualquier tableta o pantalla con navegador, añádela a la pantalla de inicio y se queda encendida. Va pasando por cada avión dentro del radio que elijas, de 1 a 50 km (o millas): indicativo, tipo de avión, altitud, velocidad, de dónde viene el vuelo y adónde va, distancia y dirección respecto a ti. Dos estilos: una cuadrícula de **128 por 80 puntos**, como un viejo letrero de estación, o un **panel de letras giratorias** cuyas letras ruedan cuando llega el siguiente avión. Cinco colores: ámbar, verde, rojo, blanco, turquesa; uno a la vez, porque la idea es un letrero luminoso, no una captura de pantalla de un mapa.

![El panel de letras giratorias en rojo: las letras ruedan de un vuelo al siguiente](/img/zb-flap-roll.webp)

![El panel en seis estilos: matriz de puntos en ámbar, turquesa y blanco arriba; letras giratorias en ámbar, verde y turquesa abajo](/img/wall-colours.webp)

Un pequeño engranaje en la esquina del panel abre sus ajustes: unidades, radio, segundos por avión, color, estilo y banderas. Se guardan solo en esa tableta, así que cada pantalla puede tener su propio aspecto, y `zenithboard config` fija los valores por defecto para todas.

![Los ajustes propios del panel sobre un panel de letras giratorias: unidades, radio, segundos por avión, color, estilo y banderas](/img/wall-settings.webp)

Junto al texto, una silueta del avión dibujada en puntos, dos banderitas (dónde está matriculado el avión, dónde se fabricó) y, si quieres, su foto de Planespotters, con el nombre del fotógrafo. Ni logotipo de aerolínea ni logotipo de fabricante: son marcas protegidas, así que las banderas los sustituyen. Las rutas y los modelos vienen de consultas públicas; el panel dice lo que sabe y deja la fila vacía cuando no lo sabe.

Puedes probar el panel sin ningún hardware: el repositorio incluye una demostración con aerolíneas inventadas y un ejemplo de todo, desde un A380 hasta un helicóptero, que funciona en cualquier ordenador con Python.

## El receptor, y las cuatro redes

ZenithBoard instala **readsb** como decodificador, con su mapa **tar1090**, y los alimentadores que marques: ADS-B Exchange siempre, FlightAware, Flightradar24 y Plane Finder si los quieres. Mantiene exactamente un cliente MLAT en marcha y los cuenta en `zenithboard status`. Todo está desactivado por defecto y es reversible: cada *activar* tiene un *desactivar* que deja las cosas como estaban, se hace una copia de seguridad antes de cualquier acción destructiva, y el menú siempre tiene una salida.

La ganancia del receptor se puede ajustar desde el menú o la consola, un paso cada vez, con las estadísticas para ver si ha servido. Las estadísticas opcionales guardan un mes de mensajes por hora, alcance y aviones por día; **graphs1090** dibuja años de ellas.

## La consola

Desde la versión 0.39, `http://<the Pi>:8080/console` muestra la configuración con el estilo del panel: una visión general de la Pi (tiempo encendida, temperatura, memoria, cada servicio), el panel, el receptor, Bluesky, los vigilantes, las actualizaciones. Una sección a la vez, una barra lateral en un ordenador, pestañas en un teléfono. Cada cambio ejecuta el mismo comando que ejecutaría el menú, y te muestra lo que imprimió. La consola está en veintidós idiomas; este sitio usa la misma lista y las mismas banderas.

![Un Airbus Beluga en el panel de letras giratorias](/img/wall-beluga-flap.webp)

## Bluesky

Opcional, desactivado por defecto. Una vez activado, la Pi publica en Bluesky los aviones que merecen una publicación: un avión cisterna militar, un Beluga, un tipo que no ha visto en un mes, el más lejano del mes. Cada publicación es una imagen del panel junto a un mapa de la trayectoria del avión, ambos dibujados por la propia Pi, con un texto corto: el vuelo, el tipo, la ruta, la altitud y el nombre de tu localidad, nunca tu posición. Tu contraseña de aplicación de Bluesky se queda en la Pi, en un archivo que solo el servicio puede leer; nunca aparece en un registro ni en el panel.

## Hecho para que no falle

ZenithBoard se ejecuta como root, escucha en tu red e instala software de otros, así que está construido para limitar lo que puede salir mal. El panel responde solo a tu red doméstica y a todos los demás les devuelve un 403, con o sin puerto redirigido; para verlo desde fuera, el menú explica una VPN (red privada virtual) en lugar de un puerto abierto. Cada servicio se ejecuta en un entorno aislado de systemd con solo lo que su trabajo necesita. Las firmas de los paquetes nunca se desactivan. Las correcciones de seguridad de Debian pueden instalarse solas cada día. Dos vigilantes reinician lo que se bloquea, y un comando *health* te dice en una sola pantalla si todo va bien.

## Qué necesita

Una Raspberry Pi 3B o más reciente con 1 GB de memoria, medido: en la Pi 3B del autor, con ADS-B Exchange y su MLAT, FlightAware, Flightradar24, el panel, las estadísticas y las publicaciones en Bluesky, seguían libres 656 MB de memoria. Una Pi Zero 2 W hace funcionar el receptor y el panel, sin los alimentadores adicionales. Raspberry Pi OS Lite, 64 bits. Una hora la primera vez; después, `sudo zenithboard update` cuando sale una versión nueva.
