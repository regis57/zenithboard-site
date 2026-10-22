---
title: "Zbuduj odbiornik"
description: "Raspberry Pi, pendrive radiowy USB, antena: lista części z cenami, gdzie umieścić antenę i oprogramowanie jednym poleceniem."
lang: pl
page: build
updated: 2026-10-22
reviewed: false
next:
  label: "Potem dołącz do społeczności"
  href: join
---

## Części

Pięć rzeczy, a trzy z nich być może już masz.

| Część | Na co zwrócić uwagę | Około |
|---|---|---|
| Raspberry Pi | Idealny jest **3B, 3B+ lub 4**: 1 GB pamięci wystarcza na odbiornik, feedery i tablicę, co zmierzono na Pi 3B autora. **Zero 2 W** (512 MB, cena katalogowa 15 US$) uciągnie odbiornik i tablicę, bez dodatkowych feederów. | 15–60 € |
| Pendrive radiowy USB | Odbiornik **RTL-SDR**. Modele RTL-SDR Blog to punkt odniesienia, około 35–40 US$. Pendrive zrobiony pod ADS-B, z wbudowanym filtrem 1090 MHz (na przykład Pro Stick od FlightAware), słyszy dalej w mieście. | 30–45 € |
| Antena | Mała antena dostrojona do **1090 MHz**. Ta sprzedawana z niektórymi pendrive'ami działa w oknie; dedykowana antena ADS-B, długa na pół metra, słyszy dużo dalej na dachu lub balkonie. | 10–40 € |
| Karta micro-SD | 16 GB lub więcej, znanej marki. | 8–12 € |
| Zasilacz | Oficjalny do twojego Pi. Ładowarka do telefonu często nie wystarcza i Pi da ci o tym znać ikoną błyskawicy. | 8–12 € |

Razem: **około 60 do 120 €**, jednorazowo. Ceny się zmieniają; to rzędy wielkości widziane na stronach producentów w październiku 2026. Antenę kup na końcu: zacznij od tej, która jest w zestawie z pendrive'em, zobacz, co słyszysz, a potem zdecyduj.

Stary tablet albo dowolny ekran z przeglądarką, na tablicę, jest opcjonalny i pewnie już leży w szufladzie.

## Gdzie umieścić antenę

To jedyna rzecz, która zmienia twój zasięg, więc zasługuje na minutę uwagi. Sygnał biegnie po linii prostej. Antena chce nieba, nie pokoju: okno to minimum, balkon jest dobry, dach albo strych pod dachówkami jest najlepszy. Pionowo, z dala od metalu, tak wysoko, jak pozwala kabel. Dwa metry wyżej często daje więcej niż droższy pendrive.

Samo Pi może zostać w środku; kable USB do około trzech metrów są w porządku. Jeśli pendrive nagrzewa się latem, to normalne.

## Oprogramowanie, na dwa sposoby

### Sposób klasyczny: readsb i tar1090

Dekoder to [**readsb**](https://github.com/wiedehopf/readsb); mapa w przeglądarce to [**tar1090**](https://github.com/wiedehopf/tar1090); oba to wolne oprogramowanie tego samego autora, ze skryptami instalacyjnymi, które działają na świeżym Raspberry Pi OS. Potem dodajesz każdy feeder ręcznie, ze strony każdej sieci. To droga dla tych, którzy lubią rozumieć każdy element.

### Sposób „wszystko w jednym”: ZenithBoard

ZenithBoard instaluje readsb, wybrane przez ciebie feedery i tablicę z jednego menu, zadaje kilka pytań raz (twój region, twoje jednostki, gdzie jest antena) i pozwala później dodać lub usunąć każdy element. Utrzymuje też tylko jednego klienta MLAT, bo kilka naraz przeciąża Pi.

Przygotuj kartę w Raspberry Pi Imager (Raspberry Pi OS Lite, 64-bit, z włączonym SSH i wpisanym Wi-Fi), uruchom Pi, a potem ze swojego komputera:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Licz około godziny za pierwszym razem, głównie na czekanie na pobieranie. Gdy skończy, menu wypisze adres tablicy, `http://<the Pi's address>:8080/`; otwórz go w przeglądarce tabletu i tablica jest na miejscu. Twoja własna mapa, tar1090, jest pod `http://<the Pi's address>/tar1090/`.

## Twoja pozycja

Dekoder, MLAT i odległości na tablicy muszą wiedzieć, gdzie jest antena: szerokość, długość geograficzna, wysokość. Kliknij prawym przyciskiem na swój dom na mapie, żeby skopiować współrzędne. Ta pozycja zostaje na twoim Pi i w ustawieniach feederów; ZenithBoard nigdy nie pokazuje jej na tablicy ani we wpisie, a sieci też jej nie publikują. Od niej mierzy się zasięg, to wszystko.

## Co może pójść nie tak

Pendrive nie jest wykrywany: użyj portu USB 2.0, nie niebieskich USB 3.0 na Pi 4, i krótkiego kabla. Mapa jest pusta: daj jej dziesięć minut, potem sprawdź, czy antena stoi pionowo i blisko okna. Pi pokazuje ikonę błyskawicy: zasilacz jest za słaby. Wi-Fi się urywa: kabel albo przenieś Pi; sam odbiornik potrzebuje bardzo mało przepustowości. Reszta jest w FAQ.
