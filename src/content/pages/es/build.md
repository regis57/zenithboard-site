---
title: "Construye un receptor"
description: "Una Raspberry Pi, una radio USB, una antena: la lista de piezas con precios, dónde poner la antena y el software en un solo comando."
lang: es
page: build
updated: 2026-10-22
reviewed: false
next:
  label: "Después, únete a la comunidad"
  href: join
---

## Las piezas

Cinco cosas, y puede que ya tengas tres de ellas.

| Pieza | Qué buscar | Aprox. |
|---|---|---|
| Raspberry Pi | Una **3B, 3B+ o 4** es ideal: 1 GB de memoria basta para el receptor, los alimentadores y el panel, medido en la Pi 3B del autor. Una **Zero 2 W** (512 MB, a 15 US$ de catálogo) hace funcionar el receptor y el panel, sin los alimentadores adicionales. | 15–60 € |
| Radio USB | Un dispositivo **RTL-SDR**. Los modelos de RTL-SDR Blog son la referencia, alrededor de 35–40 US$. Un dispositivo hecho para ADS-B, con un filtro de 1090 MHz incorporado (el Pro Stick de FlightAware, por ejemplo), oye más lejos en una ciudad. | 30–45 € |
| Antena | Una antena pequeña sintonizada en **1090 MHz**. La que viene con algunos dispositivos funciona en una ventana; una antena dedicada al ADS-B, de medio metro de largo, oye mucho más lejos en un tejado o un balcón. | 10–40 € |
| Tarjeta micro-SD | 16 GB o más, de una marca conocida. | 8–12 € |
| Fuente de alimentación | La oficial para tu Pi. Un cargador de teléfono a menudo no basta, y la Pi te lo dirá con un icono de rayo. | 8–12 € |

Total: **entre 60 y 120 €**, una sola vez. Los precios cambian; estos son los órdenes de magnitud vistos en los sitios de los fabricantes en octubre de 2026. Compra la antena al final: empieza con la que venga con el dispositivo, mira lo que oyes y luego decide.

Una tableta vieja o cualquier pantalla con navegador, para el panel, es opcional y probablemente ya está en un cajón.

## Dónde poner la antena

Es lo único que cambia tu alcance, así que merece un minuto. La señal va en línea recta. La antena quiere el cielo, no la habitación: una ventana es el mínimo, un balcón está bien, un tejado o un desván bajo las tejas es lo mejor. Vertical, lejos del metal, tan alto como permita el cable. Dos metros más de altura suelen ganarle a un dispositivo más caro.

La Pi en sí puede quedarse dentro; los cables USB de hasta unos tres metros van bien. Si el dispositivo se calienta en verano, es normal.

## El software, de dos maneras

### La manera clásica: readsb y tar1090

El decodificador es [**readsb**](https://github.com/wiedehopf/readsb); el mapa en tu navegador es [**tar1090**](https://github.com/wiedehopf/tar1090); ambos son software libre del mismo autor, con scripts de instalación que funcionan en una Raspberry Pi OS recién instalada. Luego añades cada alimentador a mano, desde la página de cada red. Es el camino a seguir si te gusta entender cada pieza.

### La manera todo en uno: ZenithBoard

ZenithBoard instala readsb, los alimentadores que elijas y el panel desde un único menú, hace las pocas preguntas una sola vez (tu región, tus unidades, dónde está tu antena) y te deja añadir o quitar cualquier parte más tarde. También mantiene un único cliente MLAT en marcha, porque varios a la vez sobrecargan una Pi.

Prepara la tarjeta con Raspberry Pi Imager (Raspberry Pi OS Lite, 64 bits, con SSH activado y tu Wi-Fi rellenada), arranca la Pi y luego, desde tu ordenador:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Cuenta alrededor de una hora la primera vez, la mayor parte esperando descargas. Cuando termina, el menú imprime la dirección del panel, `http://<the Pi's address>:8080/`; ábrela en el navegador de la tableta y ahí está el panel. Tu propio mapa, tar1090, está en `http://<the Pi's address>/tar1090/`.

## Tu posición

El decodificador, el MLAT y las distancias del panel necesitan saber dónde está la antena: latitud, longitud, altitud. Haz clic derecho sobre tu casa en un mapa para copiar las coordenadas. Esta posición se queda en tu Pi y en la configuración de los alimentadores; ZenithBoard nunca la muestra en el panel ni en una publicación, y las redes tampoco la publican. El alcance se mide desde ella, nada más.

## Qué puede salir mal

No se encuentra el dispositivo: usa un puerto USB 2.0, no los azules USB 3.0 de una Pi 4, y un cable corto. El mapa está vacío: dale diez minutos, luego comprueba que la antena esté vertical y cerca de una ventana. La Pi muestra un icono de rayo: la fuente de alimentación es demasiado débil. La Wi-Fi se cae: un cable, o mueve la Pi; el receptor en sí necesita muy poco ancho de banda. El resto está en las preguntas frecuentes.
