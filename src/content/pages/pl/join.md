---
title: "Dołącz do społeczności"
description: "Cztery sieci przyjmą to, co słyszy twój odbiornik, i dadzą coś w zamian. Co dajesz, co dostajesz i co zostaje w domu."
lang: pl
page: join
updated: 2026-10-22
reviewed: false
next:
  label: "Poznaj ZenithBoard"
  href: zenithboard
---

## Po co w ogóle się dzielić

Twój odbiornik słyszy kilkaset kilometrów wokół ciebie. Sieć odbiorników słyszy całą planetę. Każda mapa, na którą kiedykolwiek patrzyłeś na stronie śledzenia lotów, składa się z ludzi takich jak ty, z Raspberry Pi na parapecie, wysyłających to, co słyszą. Niebo nie należy do nikogo; mapy istnieją, bo tysiące osób się nim dzielą.

Dzielenie się nic cię nie kosztuje: kilka kilobajtów na sekundę na twoim łączu internetowym i nic wartego wzmianki na Pi. W zamian sieci otwierają przed tobą swoje płatne funkcje, a twoja pojedyncza antena staje się częścią MLAT, który znajduje samoloty niemówiące, gdzie są.

## Cztery sieci

Każda chce tego samego, strumienia zdekodowanych komunikatów z readsb, i każda ma własny mały program do ich wysyłania. ZenithBoard instaluje te, które zaznaczysz; możesz je też zainstalować samodzielnie ze strony każdej sieci.

### [ADS-B Exchange](https://www.adsbexchange.com/)

Własna sieć społeczności, prowadzona przez wolontariuszy i znana z tego, że pokazuje każdy samolot, który słyszy, bez filtrowania na czyjekolwiek życzenie. Zasilanie jej nie wymaga konta: ich skrypt działa na Pi, a twój strumień pojawia się na ich stronie ze statystykami. Uczestnicy MLAT dostają z powrotem samoloty, które ich dane pomogły zlokalizować. ZenithBoard traktuje ją jako warstwę podstawową; pozostałe są opcjonalne na wierzchu.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

Feeder nazywa się **PiAware**. W zamian FlightAware daje zasilającym bezpłatne konto **Enterprise**: osiem miesięcy historii lotów, nieograniczone alerty, mapy bez reklam i statystyki tego, co słyszy twój odbiornik, z lotami, które pomógł śledzić.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

Feeder nazywa się **fr24feed**. W zamian darmowe konto powiązane z twoim odbiornikiem jest podnoszone do planu **Contributor**, gdy tylko dotrą dane. Jeden klucz udostępniania na strumień; jeśli zasilasz też inne sieci, Flightradar24 prosi o wyłączenie swojego własnego MLAT, co ZenithBoard robi za ciebie.

### [Plane Finder](https://planefinder.net/sharing/client)

Feeder to **Plane Finder ADS-B Client**. W zamian Plane Finder zapewnia darmowy dostęp premium do swojej strony i aplikacji tym, którzy się dzielą.

## Co dajesz

Same komunikaty: adres samolotu, znak wywoławczy, pozycję, wysokość, prędkość, tak jak zostały nadane jawnie. Czas dotarcia każdego z nich, czyli to, czego potrzebuje MLAT. Pozycję twojego odbiornika, żeby sieć wiedziała, skąd dane zostały usłyszane. Nic z twojej sieci domowej, żadnej kamery, żadnego mikrofonu; programy feederów są małe, otwarte lub udokumentowane, a ZenithBoard pokazuje ci, co każdy z nich robi.

## Co zostaje w domu

Twoja dokładna pozycja służy sieciom do obliczania zasięgów i MLAT; nie jest pokazywana na ich publicznych mapach jako pinezka na twoim domu, a ZenithBoard nigdy nie pokazuje jej na tablicy ani we wpisie. Tablica na twoim tablecie i twoja mapa tar1090 są tylko w twojej sieci domowej, chyba że sam je otworzysz. Wszystko, czym się dzielisz, możesz przestać udostępniać: wyłączenie feedera w menu przywraca wszystko do poprzedniego stanu.

## Jeden klient MLAT, nie cztery

Każda sieć może uruchomić na twoim Pi własnego klienta MLAT. Cztery naraz to za dużo dla Raspberry Pi: procesor spędza czas na arytmetyce, a tablica się zacina. ZenithBoard utrzymuje jednego klienta MLAT, tego od ADS-B Exchange, i wyłącza MLAT w pozostałych; `zenithboard status` liczy działające, żebyś mógł sprawdzić, że jest dokładnie jeden. Jeśli instalujesz feedery ręcznie, zrób to samo.

## Pierwsze kroki

W ZenithBoard menu **1 ADS-B** wymienia cztery sieci, każdą z polem do zaznaczenia; ADS-B Exchange jest zawsze włączona. Dla FlightAware, Flightradar24 i Plane Finder zakładasz darmowe konto na ich stronie; instalator wypisuje link lub klucz do wklejenia, raz. Dla ADS-B Exchange ich skrypt pyta o nazwę stacji i twoją pozycję, i wypisuje link, pod którym zobaczysz swój strumień. Dziesięć minut później twój odbiornik jest na ich mapach, a strony statystyk pokazują, jak daleko słyszysz.
