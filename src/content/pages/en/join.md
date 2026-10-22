---
title: "Join the community"
description: "Four networks will take what your receiver hears, and give something back. What you give, what you get, and what stays at home."
lang: en
page: join
updated: 2026-10-22
reviewed: true
next:
  label: "Discover ZenithBoard"
  href: zenithboard
---

## Why share at all

Your receiver hears a few hundred kilometres around you. A network of receivers hears the planet. Every map you have ever looked at on a flight-tracking site is made of people like you, a Raspberry Pi on a windowsill, sending what they hear. Nobody owns the sky; the maps exist because thousands share it.

Sharing costs you nothing: a few kilobytes per second on your internet line, and nothing on the Pi worth mentioning. In return the networks open their paid features to you, and your single antenna becomes part of MLAT, which finds the aircraft that do not say where they are.

## The four networks

Each one wants the same thing, the stream of decoded messages from readsb, and each has its own small program to send it. ZenithBoard installs the ones you tick; you can also install them yourself from each network's page.

### [ADS-B Exchange](https://www.adsbexchange.com/)

The community's own network, run by volunteers and known for showing every aircraft it hears, with no filtering on request. Feeding needs no account: their script runs on the Pi, and your feed appears on their site with its statistics. MLAT participants get back the aircraft their data helped locate. ZenithBoard treats it as the base layer; the others are optional on top.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

The feeder is called **PiAware**. In return, FlightAware gives feeders a complimentary **Enterprise** account: eight months of flight history, unlimited alerts, maps without ads, and statistics on what your receiver hears, with the flights it helped track.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

The feeder is called **fr24feed**. In return, the free account linked to your receiver is upgraded to the **Contributor** plan as soon as data arrives. One sharing key per feed; if you also feed other networks, Flightradar24 asks you to turn its own MLAT off, which ZenithBoard does for you.

### [Plane Finder](https://planefinder.net/sharing/client)

The feeder is the **Plane Finder ADS-B Client**. In return, Plane Finder arranges free premium use of its website and apps for those who share.

## What you give

The messages themselves: the aircraft's address, callsign, position, altitude, speed, as they were broadcast in the open. The time each one arrived, which is what MLAT needs. Your receiver's position, so the network knows where the data was heard from. Nothing from your home network, no camera, no microphone; the feeder programs are small, open or documented, and ZenithBoard shows you what each one is doing.

## What stays at home

Your exact position is used by the networks to compute ranges and MLAT; it is not shown on their public maps as a pin on your house, and ZenithBoard never shows it on the wall or in a post. Your tablet's wall and your tar1090 map are on your home network only, unless you open them yourself. Everything you share, you can stop sharing: turning a feeder off in the menu puts things back as they were.

## One MLAT client, not four

Each network can run its own MLAT client on your Pi. Four at once is too much for a Raspberry Pi: the processor spends its time on arithmetic and the wall stutters. ZenithBoard keeps one MLAT client running, ADS-B Exchange's, and switches MLAT off in the others; `zenithboard status` counts the running ones so you can check there is exactly one. If you install the feeders by hand, do the same.

## Getting started

In ZenithBoard, menu **1 ADS-B** lists the four networks with a tick each; ADS-B Exchange is always on. For FlightAware, Flightradar24 and Plane Finder you create a free account on their site; the installer prints the link or the key to paste, once. For ADS-B Exchange their script asks a station name and your position, and prints the link to see your feed. Ten minutes later your receiver is on their maps, and the statistics pages show how far you hear.
