---
title: "Únete a la comunidad"
description: "Cinco redes aceptarán lo que oye tu receptor y darán algo a cambio. Lo que das, lo que recibes y lo que se queda en casa."
lang: es
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "Descubre ZenithBoard"
  href: zenithboard
---

## Por qué compartir

Tu receptor oye unos cientos de kilómetros a tu alrededor. Una red de receptores oye el planeta. Cada mapa que has mirado alguna vez en un sitio de seguimiento de vuelos está hecho de gente como tú, una Raspberry Pi en el alféizar de una ventana, enviando lo que oye. El cielo no es de nadie; los mapas existen porque miles de personas lo comparten.

Compartir no te cuesta nada: unos pocos kilobytes por segundo en tu línea de internet, y nada digno de mención en la Pi. A cambio, las redes te abren sus funciones de pago, y tu única antena pasa a formar parte del MLAT, que encuentra los aviones que no dicen dónde están.

## Las cinco redes

Todas quieren lo mismo, el flujo de mensajes decodificados de readsb, y cada una tiene su propio pequeño programa para enviarlo. ZenithBoard instala los que marques; también puedes instalarlos tú mismo desde la página de cada red.

### [ADS-B Exchange](https://www.adsbexchange.com/)

La red propia de la comunidad, gestionada por voluntarios y conocida por mostrar todos los aviones que oye, sin filtrar nada a petición. Alimentarla no requiere cuenta: su script se ejecuta en la Pi, y tu estación aparece en su sitio con sus estadísticas. Quienes participan en el MLAT reciben a cambio los aviones que sus datos ayudaron a localizar. ZenithBoard la trata como la capa base; las demás son opcionales encima.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

El alimentador se llama **PiAware**. A cambio, FlightAware regala a quienes alimentan una cuenta **Enterprise**: ocho meses de historial de vuelos, alertas ilimitadas, mapas sin publicidad y estadísticas sobre lo que oye tu receptor, con los vuelos que ayudó a seguir.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

El alimentador se llama **fr24feed**. A cambio, la cuenta gratuita vinculada a tu receptor pasa al plan **Contributor** en cuanto llegan los datos. Una clave de compartición por estación; si también alimentas otras redes, Flightradar24 te pide que desactives su propio MLAT, cosa que ZenithBoard hace por ti.

### [Plane Finder](https://planefinder.net/sharing/client)

El alimentador es el **Plane Finder ADS-B Client**. A cambio, Plane Finder ofrece el uso premium gratuito de su sitio web y sus aplicaciones a quienes comparten.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

El alimentador se llama **rbfeeder** (AirNav Radar antes se llamaba RadarBox). A cambio, AirNav Radar da a quienes comparten una cuenta **Business**. La Pi genera su propia clave de compartición; para vincular la estación a tu cuenta, inicias sesión en su sitio, abres la página de registro de la estación y pegas esa clave.

## Lo que das

Los mensajes en sí: la dirección del avión, el indicativo, la posición, la altitud, la velocidad, tal como se transmitieron en abierto. El instante en que llegó cada uno, que es lo que necesita el MLAT. La posición de tu receptor, para que la red sepa desde dónde se oyeron los datos. Nada de tu red doméstica, ni cámara, ni micrófono; los programas alimentadores son pequeños, abiertos o documentados, y ZenithBoard te muestra lo que hace cada uno.

## Lo que se queda en casa

Las redes usan tu posición exacta para calcular alcances y el MLAT; no se muestra en sus mapas públicos como una chincheta sobre tu casa, y ZenithBoard nunca la muestra en el panel ni en una publicación. El panel de tu tableta y tu mapa tar1090 están solo en tu red doméstica, a menos que los abras tú mismo. Todo lo que compartes, puedes dejar de compartirlo: desactivar un alimentador en el menú deja las cosas como estaban.

## Un cliente MLAT, no cinco

Cada red puede ejecutar su propio cliente MLAT en tu Pi. Cinco a la vez es demasiado para una Raspberry Pi: el procesador se pasa el tiempo haciendo cálculos y el panel se entrecorta. ZenithBoard mantiene un solo cliente MLAT en marcha, el de ADS-B Exchange, y desactiva el MLAT en los demás; `zenithboard status` cuenta los que están en marcha para que puedas comprobar que hay exactamente uno. Si instalas los alimentadores a mano, haz lo mismo.

## Primeros pasos

En ZenithBoard, el menú **1 ADS-B** muestra las cinco redes con una casilla cada una; ADS-B Exchange está siempre activa. Para FlightAware, Flightradar24, Plane Finder y AirNav Radar creas una cuenta gratuita en su sitio; el instalador imprime el enlace o la clave que hay que pegar, una sola vez. Para ADS-B Exchange su script pide un nombre de estación y tu posición, e imprime el enlace para ver tu estación. Diez minutos después tu receptor está en sus mapas, y las páginas de estadísticas muestran hasta dónde oyes.
