---
title: "Bergabung dengan komunitas"
description: "Lima jaringan akan menerima apa yang didengar penerima Anda, dan memberi imbalan. Apa yang Anda berikan, apa yang Anda dapat, dan apa yang tetap di rumah."
lang: id
page: join
updated: 2026-10-30
reviewed: false
next:
  label: "Kenali ZenithBoard"
  href: zenithboard
---

## Mengapa berbagi sama sekali

Penerima Anda mendengar beberapa ratus kilometer di sekitar Anda. Jaringan penerima mendengar seluruh planet. Setiap peta yang pernah Anda lihat di situs pelacakan penerbangan dibuat oleh orang-orang seperti Anda, Raspberry Pi di ambang jendela, yang mengirim apa yang mereka dengar. Tidak ada yang memiliki langit; peta-peta itu ada karena ribuan orang membagikannya.

Berbagi tidak membebani Anda apa pun: beberapa kilobyte per detik di jalur internet Anda, dan tidak ada yang berarti di Pi. Sebagai imbalannya, jaringan membuka fitur berbayar mereka untuk Anda, dan antena tunggal Anda menjadi bagian dari MLAT, yang menemukan pesawat yang tidak memberi tahu di mana dirinya.

## Lima jaringan

Masing-masing menginginkan hal yang sama, aliran pesan terurai dari readsb, dan masing-masing punya program kecil sendiri untuk mengirimkannya. ZenithBoard memasang yang Anda centang; Anda juga bisa memasangnya sendiri dari halaman masing-masing jaringan.

### [ADS-B Exchange](https://www.adsbexchange.com/)

Jaringan milik komunitas sendiri, dijalankan oleh sukarelawan dan dikenal menampilkan setiap pesawat yang didengarnya, tanpa penyaringan atas permintaan. Mengumpankan tidak memerlukan akun: skrip mereka berjalan di Pi, dan umpan Anda muncul di situs mereka beserta statistiknya. Peserta MLAT mendapat kembali pesawat yang posisinya dibantu ditemukan oleh data mereka. ZenithBoard memperlakukannya sebagai lapisan dasar; yang lain opsional di atasnya.

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

Pengumpannya bernama **PiAware**. Sebagai imbalan, FlightAware memberi pengumpan akun **Enterprise** gratis: delapan bulan riwayat penerbangan, peringatan tanpa batas, peta tanpa iklan, dan statistik tentang apa yang didengar penerima Anda, beserta penerbangan yang dibantu dilacaknya.

### [Flightradar24](https://www.flightradar24.com/share-your-data)

Pengumpannya bernama **fr24feed**. Sebagai imbalan, akun gratis yang terhubung ke penerima Anda ditingkatkan ke paket **Contributor** begitu data tiba. Satu kunci berbagi per umpan; jika Anda juga mengumpankan ke jaringan lain, Flightradar24 meminta Anda mematikan MLAT miliknya, yang dilakukan ZenithBoard untuk Anda.

### [Plane Finder](https://planefinder.net/sharing/client)

Pengumpannya adalah **Plane Finder ADS-B Client**. Sebagai imbalan, Plane Finder menyediakan akses premium gratis ke situs web dan aplikasinya bagi mereka yang berbagi.

### [AirNav Radar](https://www.airnavradar.com/raspberry-pi)

Pengumpannya bernama **rbfeeder** (AirNav Radar dulunya bernama RadarBox). Sebagai imbalan, AirNav Radar memberi akun **Business** kepada mereka yang berbagi. Pi membuat kunci berbaginya sendiri; untuk menautkan stasiun ke akun Anda, Anda masuk di situs mereka, membuka halaman klaim, lalu menempelkan kunci itu.

## Apa yang Anda berikan

Pesan-pesannya sendiri: alamat pesawat, tanda panggil, posisi, ketinggian, kecepatan, sebagaimana dipancarkan secara terbuka. Waktu tiba setiap pesan, yang dibutuhkan MLAT. Posisi penerima Anda, agar jaringan tahu dari mana data itu didengar. Tidak ada apa pun dari jaringan rumah Anda, tanpa kamera, tanpa mikrofon; program pengumpan berukuran kecil, terbuka atau terdokumentasi, dan ZenithBoard menunjukkan kepada Anda apa yang dilakukan masing-masing.

## Apa yang tetap di rumah

Posisi persis Anda dipakai jaringan untuk menghitung jangkauan dan MLAT; ia tidak ditampilkan di peta publik mereka sebagai penanda di rumah Anda, dan ZenithBoard tidak pernah menampilkannya di dinding atau di unggahan. Dinding di tablet Anda dan peta tar1090 Anda hanya ada di jaringan rumah Anda, kecuali Anda sendiri yang membukanya. Semua yang Anda bagikan bisa Anda hentikan: mematikan pengumpan di menu mengembalikan semuanya seperti semula.

## Satu klien MLAT, bukan lima

Setiap jaringan bisa menjalankan klien MLAT-nya sendiri di Pi Anda. Lima sekaligus terlalu berat untuk Raspberry Pi: prosesor menghabiskan waktunya untuk perhitungan dan dinding tersendat. ZenithBoard menjaga satu klien MLAT yang berjalan, milik ADS-B Exchange, dan mematikan MLAT di yang lain; `zenithboard status` menghitung yang sedang berjalan sehingga Anda bisa memeriksa bahwa hanya ada tepat satu. Jika Anda memasang pengumpan secara manual, lakukan hal yang sama.

## Memulai

Di ZenithBoard, menu **1 ADS-B** mencantumkan lima jaringan dengan satu centang masing-masing; ADS-B Exchange selalu aktif. Untuk FlightAware, Flightradar24, Plane Finder dan AirNav Radar Anda membuat akun gratis di situs mereka; pemasang mencetak tautan atau kunci yang harus ditempel, sekali saja. Untuk ADS-B Exchange, skrip mereka menanyakan nama stasiun dan posisi Anda, lalu mencetak tautan untuk melihat umpan Anda. Sepuluh menit kemudian penerima Anda sudah ada di peta mereka, dan halaman statistik menunjukkan seberapa jauh Anda mendengar.
