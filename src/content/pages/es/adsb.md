---
title: "Qué es el ADS-B"
description: "La señal que transmite cada avión de línea, qué contiene, por qué cualquiera puede recibirla y qué no te dice."
lang: es
page: adsb
updated: 2026-10-22
reviewed: false
next:
  label: "Construye tu receptor"
  href: build
---

## Un avión que dice dónde está

ADS-B son las siglas de *Automatic Dependent Surveillance – Broadcast* (vigilancia dependiente automática por difusión). Vamos palabra por palabra. *Automatic* (automática): el avión la envía por sí solo, nadie se la pide. *Dependent* (dependiente): la posición viene de la propia navegación por satélite del avión, no de un radar en tierra. *Surveillance* (vigilancia): es la manera en que el control aéreo sigue al avión. *Broadcast* (difusión): se envía a todo el mundo, no a un solo oyente.

Más o menos una vez por segundo, el avión transmite un mensaje corto en **1090 MHz**. El mensaje lleva su identidad (una dirección de 24 bits asignada a ese aparato y, normalmente, el indicativo del vuelo), su posición (latitud y longitud), su altitud, su velocidad y su rumbo. Otros mensajes, enviados de vez en cuando, añaden la categoría del avión, su velocidad vertical y unos pocos indicadores.

Desde 2020, la mayoría de los aviones que vuelan en espacio aéreo controlado en Europa y en Estados Unidos están obligados a transmitir ADS-B. Los aviones de línea lo hacen, los reactores de negocios lo hacen, muchas avionetas lo hacen. Algunos aviones militares y de Estado no lo hacen, o lo hacen sin su posición.

## Por qué puedes escuchar

Los mensajes no están cifrados ni firmados. Es así a propósito: la idea es precisamente que cada avión y cada estación de tierra de los alrededores puedan oír a todos los demás aviones. El formato es público, definido por las normas con las que funciona la aviación, y la frecuencia es la misma en todo el mundo.

Así que un receptor no es más que una radio sintonizada en 1090 MHz y un programa que convierte los pulsos en texto. Hace veinte años esa radio costaba miles. Hoy una memoria USB vendida para la televisión digital, del tamaño de un pulgar, hace el trabajo, porque a su chip se le puede pedir que escuche cualquier frecuencia y que entregue la señal en bruto a un ordenador. Ese dispositivo se llama RTL-SDR, por el chip que lleva dentro (RTL2832U) y por la idea (*software-defined radio*, radio definida por software: el ordenador hace la decodificación).

El programa que decodifica en una Raspberry Pi suele ser **readsb**, sucesor del antiguo *dump1090*. Escucha el dispositivo, decodifica los mensajes y ofrece el resultado a quien lo quiera: un mapa en tu navegador (**tar1090**), un alimentador para una red de seguimiento o el panel de ZenithBoard.

## En Estados Unidos: también 978 MHz

Estados Unidos usa además una segunda frecuencia, **978 MHz**, llamada UAT (*Universal Access Transceiver*, transceptor de acceso universal), sobre todo para aviones pequeños que vuelan bajo. Para oírla hacen falta un segundo dispositivo USB y una segunda antena. En el resto del mundo, 1090 MHz es todo lo que hay. ZenithBoard pregunta tu región una sola vez y solo menciona los 978 MHz si respondes *Estados Unidos*.

## Hasta dónde oyes

La señal viaja en línea recta, como la luz. Un avión a altitud de crucero es visible desde muy lejos, siempre que nada se interponga entre él y tu antena. Desde una ventana que da a una colina puedes oír unas decenas de kilómetros; desde un tejado con horizonte despejado, 250 km o más es lo habitual, y los aviones del borde son los que van a 11 000 metros. Los aviones bajos y cercanos quedan ocultos por cada edificio y cada árbol. El alcance depende de la antena y de su vista, no del ordenador.

## Lo que el ADS-B no te dice

El mensaje dice dónde está el avión, no adónde va. El origen, el destino, el nombre de la aerolínea y la foto del avión vienen de otro sitio: de registros públicos y de bases de datos que las redes de seguimiento y ZenithBoard consultan a partir de la dirección del avión. El ADS-B tampoco dice nada de quién va a bordo, ni nada de ti: recibir es pasivo, tu receptor no transmite nada.

## MLAT: oír a los que no lo dicen

Algunos aviones envían su identidad pero no su posición (los transpondedores antiguos hacen esto). Si cuatro o más receptores oyen el mismo mensaje, las minúsculas diferencias en el instante de llegada dan la posición, igual que se localiza un rayo por su trueno. Esto se llama **MLAT**, *multilateration* (multilateración). Tu receptor solo no puede hacerlo; al alimentar una red, se convierte en uno de los cuatro. Es una de las razones de verdad para compartir.
