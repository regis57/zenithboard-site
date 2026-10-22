---
title: "FAQ"
description: "Jangkauan, penghalang, Wi-Fi, memori, legalitas, privasi: pertanyaan yang diajukan orang sebelum dan sesudah membangun penerima, dijawab apa adanya."
lang: id
page: faq
updated: 2026-10-22
reviewed: false
next:
  label: "Siapa yang membuat ini, dan cara mengucapkan terima kasih"
  href: about
---

## Apakah mendengarkan itu legal?

Menerima bersifat pasif: antena Anda tidak memancarkan apa pun. ADS-B disiarkan secara terbuka justru agar semua orang bisa mendengarnya, dan datanya ditampilkan di peta publik sepanjang hari. Di sebagian besar negara, menerima sinyal radio yang disiarkan tanpa enkripsi adalah sah; membagikannya ke jaringan pelacakan adalah yang dilakukan ribuan orang secara terbuka. Jika negara Anda punya aturan khusus tentang penerimaan radio, periksalah; situs ini bukan nasihat hukum.

## Seberapa jauh saya akan mendengar?

Sejauh antena Anda bisa melihat. Sinyal merambat dalam garis lurus, jadi pertanyaannya adalah apa yang menghalangi antara antena Anda dan langit. Jendela: beberapa puluh kilometer, lebih jauh di sisi yang dihadap jendela. Balkon atau loteng di bawah genteng: sering kali 150 sampai 250 km. Atap dengan cakrawala bebas: 300 km dan lebih, ke arah pesawat pada ketinggian jelajah. Pesawat rendah di dekat Anda tersembunyi oleh bangunan dan pohon, apa pun yang Anda lakukan. Tidak ada apa pun pada Raspberry Pi yang mengubah jangkauan.

## Peta saya kosong

Beri waktu sepuluh menit setelah dinyalakan pertama kali. Lalu periksa, dalam urutan ini: stik ada di port USB 2.0 (hitam, bukan yang biru USB 3.0 pada Pi 4); antena terpasang kencang dan tegak; antena dekat jendela. Jika stik terdeteksi tetapi tidak ada yang masuk, gain (penguatan) mungkin terlalu tinggi atau terlalu rendah: menu memungkinkan Anda menggesernya selangkah demi selangkah, dan statistik menunjukkan efeknya.

## Apakah Wi-Fi cukup?

Ya untuk penerima dan pengumpan: beberapa kilobyte per detik. Dinding di tablet juga ringan. Yang buruk dari Wi-Fi adalah keandalannya: Pi di luar ruangan di tepi jangkauan sinyal sesekali akan terputus. Kabel memperbaikinya; begitu pula memindahkan Pi, karena kabel antena bisa sepanjang beberapa meter. Watchdog ZenithBoard menghubungkan kembali Pi saat jaringan kembali.

## Apakah memori 1 GB cukup?

Terukur, ya. Di Pi 3B milik penulis dengan ADS-B Exchange dan MLAT-nya, FlightAware, Flightradar24, dinding, statistik dan unggahan Bluesky berjalan, 656 MB dari 1 GB masih tersisa. Pi Zero 2 W dengan 512 MB menjalankan penerima dan dinding; tambahkan pengumpan tambahan dan menjadi sesak. Jangan beli Pi yang lebih besar untuk ini: jangkauan berasal dari antena.

## Apakah ini memperlambat internet saya, atau menghabiskan kuota data?

Tidak. Pengumpan mengirim beberapa kilobyte per detik, lebih kecil dari siaran radio daring. Dalam sebulan itu paling banyak beberapa gigabyte, dibagi di antara jaringan yang Anda umpankan.

## Siapa yang bisa melihat posisi saya?

Jaringan yang Anda umpankan membutuhkannya untuk menghitung jangkauan dan MLAT, dan menyimpannya di akun Anda. Mereka tidak memasang penanda di rumah Anda di peta publik. ZenithBoard tidak pernah menampilkan posisi Anda di dinding maupun di unggahan: unggahan menyebut kota Anda, bukan koordinat Anda. Dinding Anda dan peta Anda sendiri hanya menjawab jaringan rumah Anda, kecuali Anda sendiri yang membukanya, dan ZenithBoard menjelaskan VPN sebelum menjelaskan port terbuka.

## Apakah dinding menampilkan setiap pesawat?

Setiap pesawat yang memancarkan posisinya dan berada dalam radius yang Anda pilih. Pesawat dengan transponder lama yang tidak mengirim posisi hanya muncul jika MLAT suatu jaringan menemukannya, dan hanya di peta jaringan tersebut. Beberapa pesawat militer dan pesawat negara tidak memancarkan sama sekali. Dinding mengatakan apa yang didengarnya, tidak lebih.

## Bagaimana dengan Amerika Serikat dan 978 MHz?

Di Amerika Serikat, banyak pesawat kecil memakai 978 MHz (UAT) alih-alih 1090 MHz. Mendengarnya memerlukan stik kedua dan antena kedua. ZenithBoard menanyakan wilayah Anda sekali; jika Anda menjawab *Amerika Serikat*, ia menawarkan langkah tambahan dan memulai dengan satuan imperial. Di tempat lain, tidak ada apa pun tentang 978 MHz yang ditampilkan.

## Bisakah saya menjalankannya tanpa Raspberry Pi?

Penerima dan pengumpan berjalan di komputer Linux mana pun. ZenithBoard sendiri ditujukan untuk Raspberry Pi OS; demo dinding berjalan di komputer mana pun dengan Python, tanpa perangkat keras sama sekali, jika Anda hanya ingin melihat seperti apa tampilannya.

## Apakah ada yang berupa produk di sini?

Tidak. ZenithBoard adalah perangkat lunak bebas di bawah GPL; teks situs ini di bawah lisensi Creative Commons; tidak ada yang dijual, tidak perlu akun, tidak ada telemetri dan situs ini tidak memasang cookie dan tidak memanggil pihak ketiga. Satu-satunya uang yang berpindah adalah segelas bir, kalau Anda mau, di bagian bawah setiap halaman.
