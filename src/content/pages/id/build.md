---
title: "Bangun penerima"
description: "Raspberry Pi, stik radio USB, antena: daftar komponen dengan harga, tempat memasang antena, dan perangkat lunaknya dalam satu perintah."
lang: id
page: build
updated: 2026-10-23
reviewed: false
next:
  label: "Lalu bergabung dengan komunitas"
  href: join
---

## Komponennya

Lima benda, dan mungkin tiga di antaranya sudah Anda miliki.

| Komponen | Yang perlu diperhatikan | Sekitar |
|---|---|---|
| ![](/img/part-pi.svg) Raspberry Pi | **3B, 3B+ atau 4** ideal: memori 1 GB cukup untuk penerima, pengumpan dan dinding, diukur pada Pi 3B milik penulis. **Zero 2 W** (512 MB, dijual seharga 15 US$) menjalankan penerima dan dinding, tanpa pengumpan tambahan. | 15–60 € |
| ![](/img/part-stick.svg) Stik radio USB | Dongle **RTL-SDR**. Model dari RTL-SDR Blog adalah acuannya, sekitar 35–40 US$. Stik yang dibuat khusus untuk ADS-B, dengan filter 1090 MHz bawaan (Pro Stick dari FlightAware, misalnya), mendengar lebih jauh di kota. | 30–45 € |
| ![](/img/part-antenna.svg) Antena | Antena kecil yang disetel ke **1090 MHz**. Yang dijual bersama beberapa stik bisa dipakai di jendela; antena khusus ADS-B, sepanjang setengah meter, mendengar jauh lebih jauh di atap atau balkon. | 10–40 € |
| ![](/img/part-sdcard.svg) Kartu micro-SD | 16 GB atau lebih, dari merek yang dikenal. | 8–12 € |
| ![](/img/part-psu.svg) Catu daya | Yang resmi untuk Pi Anda. Pengisi daya ponsel sering kali tidak cukup dan Pi akan memberitahukannya dengan ikon petir. | 8–12 € |

Total: **sekitar 60 sampai 120 €**, sekali saja. Harga berubah-ubah; ini adalah kisaran yang terlihat di situs para pembuatnya pada Oktober 2026. Beli antena paling akhir: mulailah dengan apa pun yang disertakan bersama stik, lihat apa yang Anda dengar, lalu putuskan.

Tablet lama atau layar apa pun dengan peramban, untuk dinding, bersifat opsional dan mungkin sudah ada di laci.

## Tempat memasang antena

Inilah satu-satunya hal yang mengubah jangkauan Anda, jadi layak diberi waktu semenit. Sinyal merambat dalam garis lurus. Antena menginginkan langit, bukan ruangan: jendela adalah batas minimum, balkon bagus, atap atau loteng di bawah genteng paling baik. Tegak, jauh dari logam, setinggi yang kabelnya izinkan. Dua meter lebih tinggi sering kali mengalahkan stik yang lebih mahal.

Pi-nya sendiri bisa tetap di dalam rumah; kabel USB hingga sekitar tiga meter tidak masalah. Jika stik menjadi panas di musim panas, itu normal.

## Perangkat lunaknya, dua cara

### Cara klasik: readsb dan tar1090

Penguraiannya adalah [**readsb**](https://github.com/wiedehopf/readsb); peta di peramban Anda adalah [**tar1090**](https://github.com/wiedehopf/tar1090); keduanya perangkat lunak bebas dari penulis yang sama, dengan skrip pemasangan yang berjalan di Raspberry Pi OS yang masih baru. Kemudian Anda menambahkan setiap pengumpan secara manual, dari halaman masing-masing jaringan. Ini jalan yang tepat jika Anda suka memahami setiap bagiannya.

### Cara serba-ada: ZenithBoard

ZenithBoard memasang readsb, pengumpan yang Anda pilih dan dinding dari satu menu, mengajukan beberapa pertanyaan sekali saja (wilayah Anda, satuan Anda, lokasi antena Anda), dan membiarkan Anda menambah atau menghapus bagian mana pun nanti. Ia juga menjaga hanya satu klien MLAT yang berjalan, karena beberapa sekaligus membebani Pi.

Siapkan kartu dengan Raspberry Pi Imager (Raspberry Pi OS Lite, 64-bit, dengan SSH diaktifkan dan Wi-Fi Anda diisi), nyalakan Pi, lalu dari komputer Anda:

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

Hitung sekitar satu jam untuk pertama kali, sebagian besar untuk menunggu unduhan. Setelah selesai, menu mencetak alamat dinding, `http://<the Pi's address>:8080/`; buka di peramban tablet dan dindingnya ada di sana. Peta Anda sendiri, tar1090, ada di `http://<the Pi's address>/tar1090/`.

## Posisi Anda

Pengurai, MLAT dan jarak di dinding perlu tahu di mana antena berada: lintang, bujur, ketinggian. Klik kanan rumah Anda di peta untuk menyalin koordinatnya. Posisi ini tetap tersimpan di Pi Anda dan di pengaturan pengumpan; ZenithBoard tidak pernah menampilkannya di dinding maupun di unggahan, dan jaringan pun tidak memublikasikannya. Jangkauan diukur dari sana, itu saja.

## Apa yang bisa salah

Stik tidak ditemukan: gunakan port USB 2.0, bukan yang biru USB 3.0 pada Pi 4, dan kabel yang pendek. Peta kosong: beri waktu sepuluh menit, lalu periksa apakah antena tegak dan dekat jendela. Pi menampilkan ikon petir: catu dayanya terlalu lemah. Wi-Fi putus-putus: pakai kabel, atau pindahkan Pi; penerimanya sendiri hanya butuh lebar pita yang sangat kecil. Sisanya ada di FAQ.
