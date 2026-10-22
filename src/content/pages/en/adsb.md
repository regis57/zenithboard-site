---
title: "What is ADS-B"
description: "The signal every airliner broadcasts, what it contains, why anyone can receive it, and what it does not tell you."
lang: en
page: adsb
updated: 2026-10-22
reviewed: true
next:
  label: "Build your receiver"
  href: build
---

## A plane that says where it is

ADS-B stands for *Automatic Dependent Surveillance – Broadcast*. Take the words one at a time. *Automatic*: the aircraft sends it on its own, nobody asks. *Dependent*: the position comes from the aircraft's own satellite navigation, not from a radar on the ground. *Surveillance*: it is how air traffic control follows the aircraft. *Broadcast*: it is sent to everyone, not to one listener.

Roughly once a second, the aircraft transmits a short message on **1090 MHz**. The message carries its identity (a 24-bit address given to that airframe, and usually the flight's callsign), its position (latitude and longitude), its altitude, its speed and its heading. Other messages, sent now and then, add the aircraft's category, its vertical rate and a few flags.

Since 2020, most aircraft flying in controlled airspace in Europe and in the United States are required to broadcast ADS-B. Airliners do, business jets do, many light aircraft do. Some military and state aircraft do not, or do so without their position.

## Why you can listen

The messages are not encrypted and not signed. That is by design: the whole point is that every aircraft and every ground station around can hear every other aircraft. The format is public, defined by the standards aviation runs on, and the frequency is the same everywhere in the world.

So a receiver is just a radio tuned to 1090 MHz and a program that turns the pulses into text. Twenty years ago that radio cost thousands. Today a USB stick sold for digital television, about the size of a thumb, does the job, because its chip can be told to listen to any frequency and hand the raw signal to a computer. That stick is called an RTL-SDR, after the chip inside (RTL2832U) and the idea (*software-defined radio*: the computer does the decoding).

The program that does the decoding on a Raspberry Pi is usually **readsb**, a successor of the older *dump1090*. It listens to the stick, decodes the messages, and offers the result to anything that wants it: a map in your browser (**tar1090**), a feeder for a tracking network, or ZenithBoard's wall.

## In the United States: 978 MHz too

The United States also use a second frequency, **978 MHz**, called UAT (*Universal Access Transceiver*), mostly for small aircraft flying low. Hearing it needs a second USB stick and a second antenna. Everywhere else, 1090 MHz is all there is. ZenithBoard asks your region once and only mentions 978 MHz if you answer *United States*.

## How far you hear

The signal travels in a straight line, like light. An aircraft at cruising altitude is visible from very far away, as long as nothing stands between it and your antenna. From a window facing a hill you may hear a few dozen kilometres; from a roof with a clear horizon, 250 km and more is common, and the aircraft at the edge are the ones at 11,000 metres. Low aircraft near you are hidden by every building and tree. Range is about the antenna and its view, not about the computer.

## What ADS-B does not tell you

The message says where the aircraft is, not where it is going. The origin, the destination, the airline's name and the aircraft's photo come from elsewhere: from public registers and from databases that the tracking networks and ZenithBoard look up by the aircraft's address. ADS-B also says nothing about who is on board, and nothing about you: receiving is passive, your receiver transmits nothing.

## MLAT: hearing the ones who do not say

Some aircraft send their identity but not their position (older transponders do this). If four or more receivers hear the same message, the tiny differences in arrival time give the position, the way lightning is located from its thunder. This is called **MLAT**, *multilateration*. Your single receiver cannot do it alone; by feeding a network, it becomes one of the four. This is one of the real reasons to share.
