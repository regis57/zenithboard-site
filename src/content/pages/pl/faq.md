---
title: "FAQ"
description: "Zasięg, przeszkody, Wi-Fi, pamięć, legalność, prywatność: pytania, które ludzie zadają przed zbudowaniem odbiornika i po nim, z prostymi odpowiedziami."
lang: pl
page: faq
updated: 2026-10-23
reviewed: false
next:
  label: "Kto to robi i jak podziękować"
  href: about
---

## Czy słuchanie jest legalne?

Odbiór jest pasywny: twoja antena niczego nie nadaje. ADS-B jest nadawany jawnie właśnie po to, żeby każdy mógł go słyszeć, a dane są przez cały dzień pokazywane na publicznych mapach. W większości krajów odbieranie sygnałów radiowych nadawanych bez szyfrowania jest zgodne z prawem; dzielenie się nimi z sieciami śledzenia to coś, co tysiące ludzi robią otwarcie. Jeśli twój kraj ma szczególne przepisy dotyczące odbioru radiowego, sprawdź je; ta strona nie jest poradą prawną.

## Jak daleko będę słyszeć?

Tak daleko, jak widzi twoja antena. Sygnał biegnie po linii prostej, więc pytanie brzmi, co stoi między twoją anteną a niebem. Okno: kilkadziesiąt kilometrów, więcej po stronie, na którą okno wychodzi. Balkon albo strych pod dachówkami: często 150 do 250 km. Dach z czystym horyzontem: 300 km i dalej, w stronę samolotów na wysokości przelotowej. Nisko lecące samoloty w pobliżu zasłaniają budynki i drzewa, cokolwiek zrobisz. Nic w Raspberry Pi nie zmienia zasięgu.

## Moja mapa jest pusta

Daj jej dziesięć minut po pierwszym uruchomieniu. Potem sprawdź, w tej kolejności: pendrive jest w porcie USB 2.0 (czarnym, nie w niebieskich USB 3.0 na Pi 4); antena jest przykręcona i stoi pionowo; jest blisko okna. Jeśli pendrive jest widziany, ale nic nie przychodzi, wzmocnienie może być za wysokie lub za niskie: menu pozwala zmieniać je krok po kroku, a statystyki pokazują efekt.

## Czy Wi-Fi wystarczy?

Tak, dla odbiornika i feederów: kilka kilobajtów na sekundę. Tablica na tablecie też jest lekka. To, z czym Wi-Fi radzi sobie słabo, to niezawodność: Pi na dworze, na skraju zasięgu, będzie się od czasu do czasu rozłączać. Kabel to naprawia; przeniesienie Pi też, bo kabel antenowy może mieć kilka metrów. Watchdogi ZenithBoard ponownie łączą Pi, gdy sieć wróci.

## Czy 1 GB pamięci wystarczy?

Zmierzone, tak. Na Pi 3B autora z działającymi ADS-B Exchange i jego MLAT, FlightAware, Flightradar24, tablicą, statystykami i wpisami na Bluesky wciąż wolne było 656 MB z 1 GB. Pi Zero 2 W z 512 MB uciągnie odbiornik i tablicę; dodaj dodatkowe feedery i robi się ciasno. Nie kupuj do tego większego Pi: zasięg bierze się z anteny.

## Czy to spowalnia mój internet albo zużywa transfer?

Nie. Feeder wysyła kilka kilobajtów na sekundę, mniej niż strumień radiowy. W skali miesiąca to najwyżej kilka gigabajtów, rozłożonych na sieci, które zasilasz.

## Kto może zobaczyć moją pozycję?

Sieci, które zasilasz, potrzebują jej do obliczania zasięgów i MLAT, i przechowują ją na twoim koncie. Nie stawiają pinezki na twoim domu na publicznej mapie. ZenithBoard nigdy nie pokazuje twojej pozycji na tablicy ani we wpisie: wpisy podają nazwę twojej miejscowości, nie twoje współrzędne. Twoja tablica i twoja własna mapa odpowiadają tylko twojej sieci domowej, chyba że sam je otworzysz, a ZenithBoard objaśnia VPN, zanim objaśni otwarty port.

## Czym jest MLAT i dlaczego mój odbiornik potrzebuje innych?

MLAT to skrót od *multilateracji*. To sposób, w jaki sieć odnajduje samolot, który nadaje swoją tożsamość, ale **nie** swoją pozycję, jak robią to starsze transpondery: odpowiadają „jestem tutaj” bez tego „tutaj”.

Cała sztuczka to czas. Fale radiowe biegną z prędkością światła, około 300 metrów w każdej mikrosekundzie. Kiedy taki samolot nadaje, każdy odbiornik w zasięgu słyszy tę samą wiadomość, ale nie w tej samej chwili: najbliższy słyszy ją pierwszy, dalszy kilkaset mikrosekund później. Pojedynczy odbiornik niczego się z tego nie dowie; nie ma pojęcia, kiedy wiadomość opuściła samolot. Ale zestaw cztery odbiorniki, każdy z bardzo dokładnym zegarem, a różnice między ich czasami odbioru zostawią tylko jedno miejsce na niebie, z którego wiadomość mogła nadejść. To miejsce zostaje naniesione i samolot pojawia się na mapie.

![Cztery odbiorniki na ziemi słyszą tę samą wiadomość w czterech różnych chwilach; wokół każdego okrąg, którego wielkość to jego czas odbioru; cztery okręgi przecinają się tylko w jednym punkcie, tam gdzie jest samolot](/img/mlat.svg)

Na obrazku: cztery odbiorniki, cztery czasy odbioru, cztery okręgi. Każdy okrąg to „samolot jest tak daleko ode mnie”. Spotykają się w jednym miejscu, i tylko w jednym. To właśnie MLAT i dlatego sieci proszą każdy feeder, by wysyłał dokładny czas odbioru każdej wiadomości, a nie tylko samą wiadomość.

Twój pojedynczy odbiornik nie zrobi więc MLAT sam, i to jest uczciwa odpowiedź na „po co się dzielić?”: zasilając sieć, twoja antena staje się jedną z czterech, a samoloty, które nic nie mówią o swojej pozycji, zaczynają się pojawiać, na mapach sieci i, dzięki danym, które te odsyłają, na twojej. Tłumaczy to też dwie rzeczy, które robi ZenithBoard: utrzymuje **jednego** działającego klienta MLAT (obliczenia są ciężkie dla Raspberry Pi) i potrzebuje dokładnej pozycji twojej anteny, bo okrąg narysowany z niewłaściwego miejsca przecina pozostałe w niewłaściwym punkcie.

## Czy tablica pokaże każdy samolot?

Każdy samolot, który nadaje swoją pozycję i jest w wybranym przez ciebie promieniu. Samoloty ze starszymi transponderami, które nie wysyłają pozycji, pojawiają się tylko wtedy, gdy zlokalizuje je MLAT jakiejś sieci, i tylko na mapach tych sieci. Niektóre samoloty wojskowe i państwowe nie nadają wcale. Tablica mówi to, co słyszy, nic więcej.

## A co ze Stanami Zjednoczonymi i 978 MHz?

W Stanach Zjednoczonych wiele małych samolotów używa 978 MHz (UAT) zamiast 1090 MHz. Żeby je słyszeć, trzeba drugiego pendrive'a i drugiej anteny. ZenithBoard pyta raz o twój region; jeśli odpowiesz *Stany Zjednoczone*, proponuje dodatkowy krok i zaczyna od jednostek imperialnych. Gdzie indziej nic o 978 MHz się nie pokazuje.

## Czy mogę to uruchomić bez Raspberry Pi?

Odbiornik i feedery działają na każdym komputerze z Linuksem. Sam ZenithBoard jest przeznaczony dla Raspberry Pi OS; demo tablicy działa na każdym komputerze z Pythonem, zupełnie bez sprzętu, jeśli chcesz tylko zobaczyć, jak to wygląda.

## Czy cokolwiek z tego jest produktem?

Nie. ZenithBoard to wolne oprogramowanie na licencji GPL; tekst tej strony jest na licencji Creative Commons; nic nie jest sprzedawane, nie trzeba żadnego konta, nie ma telemetrii, a ta strona nie ustawia żadnego ciasteczka i nie łączy się z żadną stroną trzecią. Jedyne pieniądze, jakie tu krążą, to piwo, jeśli masz ochotę, na dole każdej strony.
