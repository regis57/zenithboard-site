---
title: "ZenithBoard — the sky above you, live"
description: "The sky above you, decoded by you, shared with the world."
lang: en
page: home
updated: 2026-10-30
reviewed: true
next:
  label: "Start here: what is ADS-B"
  href: adsb
---

## What this is

Every airliner above your house is talking. About once a second, it broadcasts who it is, where it is, how high and how fast. That signal is called ADS-B, it is not encrypted, and anyone with a small radio can listen to it.

This site explains three things, in order: what that signal is, how to build a receiver for it with a Raspberry Pi and a few parts, and how to join the thousands of people who share what their receiver hears with the world's flight-tracking networks. The fourth part is ZenithBoard: a free program that installs all of it in one go and shows the aircraft overhead on an old tablet, in glowing dots or on an airport split-flap board.

## What it costs, what it takes, what it gives

**It costs** about 60 to 120 €, depending on the Raspberry Pi you choose and the antenna. Nothing after that: no subscription, no account you have to pay for.

**It takes** about an hour the first time, a Raspberry Pi, a wall socket and your home Wi-Fi. You do not need to know how to program. You will type a few commands, which are given to you.

**It gives** the aircraft around you, on your own screen, with no one in between. If you share your data, the tracking networks give something back: FlightAware opens a free Enterprise account, Flightradar24 a free Contributor plan, Plane Finder free premium use of its site and apps, AirNav Radar a Business account, and ADS-B Exchange shows your feed on its site. And if you turn ZenithBoard's sharing on, the aircraft crossing your sky get posted to Bluesky, as a picture of your wall.

## The limits, said plainly

A receiver only hears what it can see: the signal travels in a straight line, so a window facing a hill hears less than a roof. A Raspberry Pi with 1 GB of memory is enough for all of it, measured on the author's own Pi 3B. Wi-Fi works; a cable works better. Nothing here is for sale; the only money that moves is a beer, if you feel like it, at the bottom of the page.
