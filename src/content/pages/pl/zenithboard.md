---
title: "ZenithBoard"
description: "Tablica z kropek albo lotniskowa tablica klapkowa na starym tablecie, konsola WWW, wpisy na Bluesky. Darmowe, otwarte, jedno menu instaluje wszystko."
lang: pl
page: zenithboard
updated: 2026-10-25
reviewed: false
next:
  label: "Zainstaluj: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

> **Wersja kandydująca do 1.0.** Od 25 października 2026 r. wersja 0.99 jest zamrożona: przez miesiąc trafiają do niej tylko poprawki, a Pi autora działa bez ingerencji. Jeśli nic nie zostanie otwarte, 1.0 pojawi się najwcześniej 25 listopada 2026 r. Wypróbowanie jej teraz pomaga: zgłoszenie na [GitHubie](https://github.com/regis57/ZenithBoard/issues) jest mile widziane.

## W jednym zdaniu

ZenithBoard zamienia Raspberry Pi i pendrive radiowy USB w odbiornik ADS-B, który zasila cztery sieci, i pokazuje samoloty dokładnie nad twoim domem na starym tablecie, jako świecący wyświetlacz z matrycy kropek albo lotniskową tablicę klapkową. To wolne oprogramowanie na licencji GPL i działa codziennie na własnym Pi 3B autora, na dworze, przez Wi-Fi, w Mozeli.

![Tablica z matrycy kropek w kolorze bursztynowym: Tunisair Airbus A320 z dwiema flagami, samolot narysowany kropkami obok tekstu, a potem następny lot](/img/zb-wall.webp)

## Tablica

Tablica to strona WWW, którą Pi serwuje w twojej sieci domowej. Otwórz ją na dowolnym tablecie lub ekranie z przeglądarką, dodaj do ekranu głównego i zostaje włączona. Przewija po kolei każdy samolot w wybranym przez ciebie promieniu, od 1 do 50 km (lub mil): znak wywoławczy, typ samolotu, wysokość, prędkość, skąd lot leci i dokąd, odległość i kierunek od ciebie. Dwa wyglądy: siatka **128 na 80 kropek**, jak stary dworcowy wyświetlacz, albo **tablica klapkowa**, której litery przeskakują, gdy nadlatuje kolejny samolot. Pięć kolorów: bursztynowy, zielony, czerwony, biały, turkusowy; po jednym naraz, bo chodzi o świecący wyświetlacz, nie o zrzut ekranu z mapy.

![Tablica klapkowa na czerwono: litery przeskakują z jednego lotu na następny](/img/zb-flap-roll.webp)

![Tablica w sześciu wyglądach: matryca kropek w kolorze bursztynowym, turkusowym i białym u góry; klapki w kolorze bursztynowym, zielonym i turkusowym u dołu](/img/wall-colours.webp)

Małe koło zębate w rogu tablicy otwiera jej ustawienia: jednostki, promień, sekundy na samolot, kolor, wygląd i flagi. Są zapamiętane tylko na tym tablecie, więc każdy ekran może mieć własny wygląd, a `zenithboard config` ustawia wartości domyślne dla wszystkich.

![Własny panel ustawień tablicy nad tablicą klapkową: jednostki, promień, sekundy na samolot, kolor, wygląd i flagi](/img/wall-settings.webp)

Obok tekstu sylwetka samolotu narysowana kropkami, dwie małe flagi (gdzie samolot jest zarejestrowany, gdzie został zbudowany) i, jeśli chcesz, jego zdjęcie z Planespotters, z nazwiskiem fotografa. Żadnego logo linii lotniczej, żadnego logo producenta: to chronione znaki, więc zastępują je flagi. Trasy i modele pochodzą z publicznych wyszukiwań; tablica mówi to, co wie, a wiersz zostawia pusty, gdy nie wie.

Tablicę możesz wypróbować zupełnie bez sprzętu: repozytorium zawiera demo z wymyślonymi liniami lotniczymi i przykładem wszystkiego, od A380 po helikopter, które działa na każdym komputerze z Pythonem.

## Odbiornik i cztery sieci

ZenithBoard instaluje **readsb** jako dekoder, z jego mapą **tar1090**, oraz feedery, które zaznaczysz: ADS-B Exchange zawsze, FlightAware, Flightradar24 i Plane Finder, jeśli chcesz. Utrzymuje dokładnie jednego działającego klienta MLAT i liczy je w `zenithboard status`. Wszystko jest domyślnie wyłączone i odwracalne: każde *włącz* ma swoje *wyłącz*, które przywraca poprzedni stan, przed każdą destrukcyjną operacją robiona jest kopia zapasowa, a menu zawsze ma wyjście.

Wzmocnienie odbiornika można regulować z menu lub z konsoli, krok po kroku, ze statystykami, które pokazują, czy to pomogło. Opcjonalne statystyki przechowują miesiąc komunikatów na godzinę, zasięgu i samolotów na dzień; **graphs1090** rysuje je na przestrzeni lat.

## Konsola

Od wersji 0.39 `http://<the Pi>:8080/console` pokazuje ustawienia w stylu tablicy: przegląd Pi (czas działania, temperatura, pamięć, każda usługa), tablica, odbiornik, Bluesky, watchdogi, aktualizacje. Jedna sekcja naraz, pasek boczny na komputerze, karty na telefonie. Każda zmiana uruchamia to samo polecenie, które uruchomiłoby menu, i pokazuje ci, co wypisało. Konsola jest w dwudziestu dwóch językach; ta strona używa tej samej listy i tych samych flag.

![Airbus Beluga na tablicy klapkowej](/img/wall-beluga-flap.webp)

## Bluesky

Opcjonalne, domyślnie wyłączone. Po włączeniu Pi publikuje na Bluesky samoloty warte wpisu: wojskowy tankowiec, Belugę, typ, którego nie widziało od miesiąca, najdalszy w miesiącu. Każdy wpis to obraz tablicy obok mapy trasy samolotu, oba narysowane przez samo Pi, z krótkim tekstem: lot, typ, trasa, wysokość i nazwa twojej miejscowości, nigdy twoja pozycja. Twoje hasło aplikacji Bluesky zostaje na Pi, w pliku, który może odczytać tylko ta usługa; nigdy nie pojawia się w logu ani na tablicy.

## Zbudowane tak, żeby nie zawodzić

ZenithBoard działa jako root, nasłuchuje w twojej sieci i instaluje cudze oprogramowanie, więc jest zbudowany tak, by ograniczyć to, co może pójść nie tak. Tablica odpowiada tylko twojej sieci domowej, a wszystkim innym daje 403, z przekierowanym portem czy bez; żeby zobaczyć ją z zewnątrz, menu objaśnia VPN zamiast otwartego portu. Każda usługa działa w piaskownicy systemd tylko z tym, czego wymaga jej zadanie. Podpisy pakietów nigdy nie są wyłączane. Poprawki bezpieczeństwa Debiana mogą instalować się same codziennie. Dwa watchdogi restartują to, co się zawiesi, a polecenie *health* mówi ci na jednym ekranie, czy wszystko jest w porządku.

## Czego potrzebuje

Raspberry Pi 3B lub nowszego z 1 GB pamięci, zmierzone: na Pi 3B autora, z ADS-B Exchange i jego MLAT, FlightAware, Flightradar24, tablicą, statystykami i wpisami na Bluesky, wciąż wolne było 656 MB pamięci. Pi Zero 2 W uciągnie odbiornik i tablicę, bez dodatkowych feederów. Raspberry Pi OS Lite, 64-bit. Godzina za pierwszym razem; potem `sudo zenithboard update`, gdy wyjdzie nowa wersja.
