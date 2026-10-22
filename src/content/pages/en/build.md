---
title: "Build a receiver"
description: "A Raspberry Pi, a USB radio stick, an antenna: the parts list with prices, where to put the antenna, and the software in one command."
lang: en
page: build
updated: 2026-10-22
reviewed: true
next:
  label: "Then join the community"
  href: join
---

## The parts

Five things, and you may already own three of them.

| Part | What to look for | About |
|---|---|---|
| Raspberry Pi | A **3B, 3B+ or 4** is ideal: 1 GB of memory is enough for the receiver, the feeders and the wall, measured on the author's Pi 3B. A **Zero 2 W** (512 MB, listed at 15 US$) runs the receiver and the wall, without the extra feeders. | 15–60 € |
| USB radio stick | An **RTL-SDR** dongle. The RTL-SDR Blog models are the reference, around 35–40 US$. A stick made for ADS-B, with a 1090 MHz filter built in (FlightAware's Pro Stick, for example), hears further in a city. | 30–45 € |
| Antenna | A small antenna tuned to **1090 MHz**. The one sold with some sticks works at a window; a dedicated ADS-B antenna, half a metre long, hears much further on a roof or a balcony. | 10–40 € |
| Micro-SD card | 16 GB or more, from a known brand. | 8–12 € |
| Power supply | The official one for your Pi. A phone charger often is not enough and the Pi will tell you so with a lightning icon. | 8–12 € |

Total: **about 60 to 120 €**, once. Prices move; these are the orders of magnitude seen on the makers' sites in October 2026. Buy the antenna last: start with whatever comes with the stick, see what you hear, then decide.

An old tablet or any screen with a browser, for the wall, is optional and probably already in a drawer.

## Where to put the antenna

This is the only thing that changes your range, so it deserves a minute. The signal goes in a straight line. The antenna wants the sky, not the room: a window is the minimum, a balcony is good, a roof or a loft under tiles is best. Vertical, away from metal, as high as the cable allows. Two metres higher often beats a more expensive stick.

The Pi itself can stay inside; USB cables up to about three metres are fine. If the stick gets hot in summer, that is normal.

## The software, two ways

### The classic way: readsb and tar1090

The decoder is [**readsb**](https://github.com/wiedehopf/readsb); the map in your browser is [**tar1090**](https://github.com/wiedehopf/tar1090); both are free software by the same author, with install scripts that work on a fresh Raspberry Pi OS. You then add each feeder by hand, from each network's own page. This is the way to go if you like to understand every piece.

### The all-in-one way: ZenithBoard

ZenithBoard installs readsb, the feeders you choose and the wall from one menu, asks the few questions once (your region, your units, where your antenna is), and lets you add or remove any part later. It also keeps a single MLAT client running, because several at once overload a Pi.

Prepare the card with Raspberry Pi Imager (Raspberry Pi OS Lite, 64-bit, with SSH enabled and your Wi-Fi filled in), start the Pi, then from your computer:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Count about an hour the first time, most of it waiting for downloads. When it is done, the menu prints the wall's address, `http://<the Pi's address>:8080/`; open it in the tablet's browser and the wall is there. Your own map, tar1090, is at `http://<the Pi's address>/tar1090/`.

## Your position

The decoder, MLAT and the wall's distances need to know where the antenna is: latitude, longitude, altitude. Right-click your house on a map to copy the coordinates. This position stays on your Pi and in the feeders' settings; ZenithBoard never shows it on the wall nor in a post, and the networks do not publish it either. Range is measured from it, that is all.

## What can go wrong

The stick is not found: use a USB 2.0 port, not the blue USB 3.0 ones on a Pi 4, and a short cable. The map is empty: give it ten minutes, then check the antenna is vertical and near a window. The Pi shows a lightning icon: the power supply is too weak. Wi-Fi drops: a cable, or move the Pi; the receiver itself needs very little bandwidth. The FAQ has the rest.
