---
title: "ZenithBoard"
description: "Dinding titik-titik atau papan split-flap bandara di tablet lama, konsol web, unggahan di Bluesky. Gratis, terbuka, satu menu untuk memasang semuanya."
lang: id
page: zenithboard
updated: 2026-10-25
reviewed: false
next:
  label: "Pasang: github.com/regis57/ZenithBoard"
  href: https://github.com/regis57/ZenithBoard
---

> **Kandidat rilis untuk 1.0.** Sejak 25 Oktober 2026, versi 0.99 dibekukan: selama sebulan hanya perbaikan yang masuk, sementara Pi milik penulis berjalan tanpa disentuh. Jika tidak ada yang tersisa terbuka, 1.0 menyusul paling cepat pada 25 November 2026. Mencobanya sekarang membantu: laporan di [GitHub](https://github.com/regis57/ZenithBoard/issues) sangat diterima.

## Dalam satu kalimat

ZenithBoard mengubah Raspberry Pi dan stik radio USB menjadi penerima ADS-B yang mengumpankan ke empat jaringan, dan menampilkan pesawat tepat di atas rumah Anda pada tablet lama, sebagai papan dot-matrix bercahaya atau papan split-flap bandara. Ini perangkat lunak bebas, di bawah GPL, dan berjalan setiap hari di Pi 3B milik penulis sendiri, di luar ruangan, lewat Wi-Fi, di Moselle.

![Dinding dot-matrix berwarna amber: Airbus A320 Tunisair dengan dua benderanya, pesawat digambar dengan titik-titik di samping teks, lalu penerbangan berikutnya](/img/zb-wall.webp)

## Dinding

Dinding adalah halaman web yang disajikan Pi di jaringan rumah Anda. Buka di tablet atau layar apa pun dengan peramban, tambahkan ke layar utama, dan ia tetap menyala. Ia bergantian menampilkan setiap pesawat dalam radius yang Anda pilih, dari 1 sampai 50 km (atau mil): tanda panggil, tipe pesawat, ketinggian, kecepatan, dari mana penerbangan berasal dan ke mana tujuannya, jarak dan arah dari Anda. Dua tampilan: kisi **128 kali 80 titik**, seperti papan stasiun lama, atau **papan split-flap** yang hurufnya berputar saat pesawat berikutnya datang. Lima warna: amber, hijau, merah, putih, pirus; satu per satu, karena intinya adalah papan bercahaya, bukan tangkapan layar peta.

![Papan split-flap berwarna merah: huruf-hurufnya berputar dari satu penerbangan ke penerbangan berikutnya](/img/zb-flap-roll.webp)

![Dinding dalam enam tampilan: dot-matrix berwarna amber, pirus, dan putih di atas; split-flap berwarna amber, hijau, dan pirus di bawah](/img/wall-colours.webp)

Roda gigi kecil di sudut dinding membuka pengaturannya: satuan, radius, detik per pesawat, warna, gaya, dan bendera. Pengaturan itu disimpan hanya di tablet tersebut, sehingga setiap layar bisa punya tampilannya sendiri, dan `zenithboard config` menetapkan nilai bawaan untuk semuanya.

![Panel pengaturan milik dinding di atas papan split-flap: satuan, radius, detik per pesawat, warna, gaya, dan bendera](/img/wall-settings.webp)

Di samping teks, siluet pesawat yang digambar dengan titik-titik, dua bendera kecil (tempat pesawat terdaftar, tempat ia dibuat), dan, jika Anda mau, fotonya dari Planespotters, dengan nama fotografernya. Tanpa logo maskapai, tanpa logo pabrikan: itu merek yang dilindungi, jadi bendera menggantikannya. Rute dan model berasal dari pencarian publik; dinding mengatakan apa yang diketahuinya dan membiarkan barisnya kosong jika tidak tahu.

Anda bisa mencoba dinding tanpa perangkat keras sama sekali: repositorinya menyertakan demo dengan maskapai rekaan dan contoh dari segalanya, dari A380 sampai helikopter, yang berjalan di komputer mana pun dengan Python.

## Penerima, dan empat jaringan

ZenithBoard memasang **readsb** sebagai pengurai, dengan petanya **tar1090**, dan pengumpan yang Anda centang: ADS-B Exchange selalu, FlightAware, Flightradar24 dan Plane Finder jika Anda mau. Ia menjaga tepat satu klien MLAT yang berjalan dan menghitungnya di `zenithboard status`. Semuanya nonaktif secara bawaan dan bisa dibatalkan: setiap *aktif* punya *nonaktif* yang mengembalikan keadaan, cadangan dibuat sebelum apa pun yang merusak, dan menu selalu punya jalan keluar.

Gain (penguatan) penerima bisa disetel dari menu atau konsol, selangkah demi selangkah, dengan statistik untuk melihat apakah itu membantu. Statistik opsional menyimpan sebulan pesan per jam, jangkauan dan pesawat per hari; **graphs1090** menggambarkannya selama bertahun-tahun.

## Konsol

Sejak versi 0.39, `http://<the Pi>:8080/console` menampilkan pengaturan dalam tampilan dinding: ikhtisar Pi (waktu aktif, suhu, memori, setiap layanan), dinding, penerima, Bluesky, watchdog, pembaruan. Satu bagian pada satu waktu, bilah samping di komputer, tab di ponsel. Setiap perubahan menjalankan perintah yang sama seperti yang dilakukan menu, dan menunjukkan apa yang dicetaknya. Konsol tersedia dalam dua puluh dua bahasa; situs ini memakai daftar yang sama dan bendera yang sama.

![Sebuah Airbus Beluga di papan split-flap](/img/wall-beluga-flap.webp)

## Bluesky

Opsional, nonaktif secara bawaan. Jika diaktifkan, Pi mengunggah pesawat yang layak diunggah ke Bluesky: pesawat tanker militer, Beluga, tipe yang belum dilihatnya sebulan, yang terjauh bulan itu. Setiap unggahan adalah gambar dinding di samping peta jejak pesawat, keduanya digambar oleh Pi sendiri, dengan teks singkat: penerbangan, tipe, rute, ketinggian, dan nama kota Anda, tidak pernah posisi Anda. Kata sandi aplikasi Bluesky Anda tetap di Pi, dalam berkas yang hanya bisa dibaca oleh layanan itu; ia tidak pernah muncul di log atau di dinding.

## Dibangun agar tidak salah jalan

ZenithBoard berjalan sebagai root, mendengarkan di jaringan Anda dan memasang perangkat lunak orang lain, jadi ia dibangun untuk membatasi apa yang bisa salah. Dinding hanya menjawab jaringan rumah Anda dan memberi semua orang lain 403, port diteruskan atau tidak; untuk melihatnya dari luar, menu menjelaskan VPN alih-alih port terbuka. Setiap layanan berjalan dalam sandbox systemd hanya dengan apa yang dibutuhkan tugasnya. Tanda tangan paket tidak pernah dinonaktifkan. Perbaikan keamanan Debian bisa terpasang sendiri setiap hari. Dua watchdog memulai ulang apa yang membeku, dan perintah *health* memberi tahu Anda dalam satu layar apakah semuanya baik-baik saja.

## Apa yang dibutuhkannya

Raspberry Pi 3B atau lebih baru dengan memori 1 GB, terukur: di Pi 3B milik penulis, dengan ADS-B Exchange dan MLAT-nya, FlightAware, Flightradar24, dinding, statistik dan unggahan Bluesky, memori 656 MB masih tersisa. Pi Zero 2 W menjalankan penerima dan dinding, tanpa pengumpan tambahan. Raspberry Pi OS Lite, 64-bit. Satu jam untuk pertama kali; setelah itu, `sudo zenithboard update` saat versi baru keluar.
