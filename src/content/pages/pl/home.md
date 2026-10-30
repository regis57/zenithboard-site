---
title: "ZenithBoard — niebo nad tobą, na żywo"
description: "Niebo nad tobą, dekodowane przez ciebie, dzielone ze światem."
lang: pl
page: home
updated: 2026-10-30
reviewed: false
next:
  label: "Zacznij tutaj: czym jest ADS-B"
  href: adsb
---

## Co to jest

Każdy samolot pasażerski nad twoim domem mówi. Mniej więcej raz na sekundę nadaje, kim jest, gdzie jest, jak wysoko i jak szybko leci. Ten sygnał nazywa się ADS-B, nie jest szyfrowany i każdy, kto ma małe radio, może go słuchać.

Ta strona wyjaśnia trzy rzeczy, po kolei: czym jest ten sygnał, jak zbudować dla niego odbiornik z Raspberry Pi i kilku części, i jak dołączyć do tysięcy osób, które dzielą się tym, co słyszy ich odbiornik, ze światowymi sieciami śledzenia lotów. Czwarta część to ZenithBoard: darmowy program, który instaluje to wszystko za jednym razem i pokazuje samoloty nad głową na starym tablecie, świecącymi kropkami albo na lotniskowej tablicy klapkowej.

## Ile to kosztuje, czego wymaga, co daje

**Kosztuje** około 60 do 120 €, zależnie od wybranego Raspberry Pi i anteny. Potem nic: żadnego abonamentu, żadnego konta, za które trzeba płacić.

**Wymaga** około godziny za pierwszym razem, Raspberry Pi, gniazdka w ścianie i domowego Wi-Fi. Nie musisz umieć programować. Wpiszesz kilka poleceń, które dostaniesz gotowe.

**Daje** samoloty wokół ciebie, na twoim własnym ekranie, bez nikogo pośrodku. Jeśli dzielisz się danymi, sieci śledzenia dają coś w zamian: FlightAware otwiera darmowe konto Enterprise, Flightradar24 darmowy plan Contributor, Plane Finder darmowy dostęp premium do swojej strony i aplikacji, AirNav Radar konto Business, a ADS-B Exchange pokazuje twój strumień na swojej stronie. A jeśli włączysz udostępnianie w ZenithBoard, samoloty przecinające twoje niebo trafiają na Bluesky, jako zdjęcie twojej tablicy.

## Ograniczenia, powiedziane wprost

Odbiornik słyszy tylko to, co widzi: sygnał biegnie po linii prostej, więc okno wychodzące na wzgórze słyszy mniej niż dach. Raspberry Pi z 1 GB pamięci wystarcza na wszystko, co zmierzono na własnym Pi 3B autora. Wi-Fi działa; kabel działa lepiej. Nic tutaj nie jest na sprzedaż; jedyne pieniądze, jakie tu krążą, to piwo, jeśli masz ochotę, na dole strony.
