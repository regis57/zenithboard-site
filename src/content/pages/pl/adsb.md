---
title: "Czym jest ADS-B"
description: "Sygnał, który nadaje każdy samolot pasażerski: co zawiera, dlaczego każdy może go odbierać i czego ci nie powie."
lang: pl
page: adsb
updated: 2026-10-23
reviewed: false
next:
  label: "Zbuduj swój odbiornik"
  href: build
---

## Samolot, który mówi, gdzie jest

![Satelita mówi samolotowi, gdzie jest; samolot rozsyła swoją pozycję we wszystkich kierunkach, w kręgach, które może odebrać każdy dom na ziemi i każdy inny samolot](/img/fig-adsb-broadcast.svg)

![Jeden komunikat zawiera cztery rzeczy: kim jest samolot, gdzie jest, jak wysoko i jak szybko leci; i jest wysyłany ponownie co sekundę](/img/fig-adsb-message.svg)

ADS-B to skrót od *Automatic Dependent Surveillance – Broadcast* (automatyczny zależny dozór – rozgłaszanie). Weźmy te słowa po kolei. *Automatyczny*: samolot wysyła to sam z siebie, nikt go nie pyta. *Zależny*: pozycja pochodzi z własnej nawigacji satelitarnej samolotu, nie z radaru na ziemi. *Dozór*: tak kontrola ruchu lotniczego śledzi samolot. *Rozgłaszanie*: wysyłane jest do wszystkich, nie do jednego odbiorcy.

Mniej więcej raz na sekundę samolot nadaje krótki komunikat na częstotliwości **1090 MHz**. Komunikat zawiera jego tożsamość (24-bitowy adres przypisany do tego płatowca i zwykle znak wywoławczy lotu), jego pozycję (szerokość i długość geograficzną), wysokość, prędkość i kurs. Inne komunikaty, wysyłane od czasu do czasu, dodają kategorię samolotu, prędkość pionową i kilka flag.

Od 2020 roku większość samolotów latających w przestrzeni kontrolowanej w Europie i w Stanach Zjednoczonych ma obowiązek nadawać ADS-B. Robią to samoloty pasażerskie, robią to odrzutowce biznesowe, robi to wiele małych samolotów. Niektóre samoloty wojskowe i państwowe tego nie robią albo robią to bez podawania pozycji.

## Dlaczego możesz słuchać

![Od anteny do małego pendrive'a radiowego, do Raspberry Pi, do ekranu, który pokazuje samoloty](/img/fig-adsb-chain.svg)

Komunikaty nie są szyfrowane ani podpisywane. To celowe: cały sens polega na tym, że każdy samolot i każda stacja naziemna w okolicy może słyszeć każdy inny samolot. Format jest publiczny, określony przez normy, na których opiera się lotnictwo, a częstotliwość jest taka sama na całym świecie.

Odbiornik to więc po prostu radio nastrojone na 1090 MHz i program, który zamienia impulsy w tekst. Dwadzieścia lat temu takie radio kosztowało tysiące. Dziś robi to pendrive USB sprzedawany do telewizji cyfrowej, wielkości kciuka, bo jego układowi można kazać słuchać dowolnej częstotliwości i przekazywać surowy sygnał do komputera. Taki pendrive nazywa się RTL-SDR, od układu w środku (RTL2832U) i od idei (*software-defined radio*, radio definiowane programowo: dekodowaniem zajmuje się komputer).

Programem, który dekoduje na Raspberry Pi, jest zwykle **readsb**, następca starszego *dump1090*. Słucha pendrive'a, dekoduje komunikaty i oferuje wynik wszystkiemu, co go chce: mapie w przeglądarce (**tar1090**), feederowi sieci śledzenia albo tablicy ZenithBoard.

## W Stanach Zjednoczonych: także 978 MHz

Stany Zjednoczone używają też drugiej częstotliwości, **978 MHz**, zwanej UAT (*Universal Access Transceiver*, transceiver powszechnego dostępu), głównie dla małych samolotów latających nisko. Żeby ją słyszeć, trzeba drugiego pendrive'a USB i drugiej anteny. Wszędzie indziej jest tylko 1090 MHz. ZenithBoard pyta raz o twój region i wspomina o 978 MHz tylko wtedy, gdy odpowiesz *Stany Zjednoczone*.

## Jak daleko słyszysz

![Sygnał biegnie po linii prostej, a Ziemia zakrzywia się w dół: samolot ponad linią widzenia jest słyszalny, ten za horyzontem pozostaje ukryty, a wyżej umieszczona antena widzi dalej](/img/fig-adsb-range.svg)

Sygnał biegnie po linii prostej, jak światło. Samolot na wysokości przelotowej widać z bardzo daleka, o ile nic nie stoi między nim a twoją anteną. Z okna wychodzącego na wzgórze usłyszysz może kilkadziesiąt kilometrów; z dachu z czystym horyzontem 250 km i więcej to norma, a samoloty na skraju to te na 11 000 metrów. Nisko lecące samoloty w pobliżu zasłania każdy budynek i każde drzewo. Zasięg zależy od anteny i jej widoku, nie od komputera.

## Czego ADS-B ci nie powie

Komunikat mówi, gdzie samolot jest, nie dokąd leci. Port wylotu, port docelowy, nazwa linii lotniczej i zdjęcie samolotu pochodzą skądinąd: z publicznych rejestrów i z baz danych, które sieci śledzenia i ZenithBoard przeszukują po adresie samolotu. ADS-B nie mówi też nic o tym, kto jest na pokładzie, ani nic o tobie: odbiór jest pasywny, twój odbiornik niczego nie nadaje.

## MLAT: słyszeć tych, którzy nie mówią

![Cztery odbiorniki na ziemi słyszą tę samą wiadomość w czterech różnych chwilach; wokół każdego okrąg, którego wielkość to jego czas odbioru; cztery okręgi przecinają się tylko w jednym punkcie, tam gdzie jest samolot](/img/mlat.svg)

Niektóre samoloty wysyłają swoją tożsamość, ale nie pozycję (tak robią starsze transpondery). Jeśli cztery lub więcej odbiorników usłyszy ten sam komunikat, drobne różnice w czasie dotarcia dają pozycję, tak jak lokalizuje się piorun po jego grzmocie. Nazywa się to **MLAT**, *multilateracja*. Twój pojedynczy odbiornik sam tego nie zrobi; zasilając sieć, staje się jednym z tych czterech. To jeden z prawdziwych powodów, żeby się dzielić.
