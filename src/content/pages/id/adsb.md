---
title: "Apa itu ADS-B"
description: "Sinyal yang dipancarkan setiap pesawat penumpang, isinya, mengapa siapa pun bisa menerimanya, dan apa yang tidak diberitahukannya."
lang: id
page: adsb
updated: 2026-10-23
reviewed: false
next:
  label: "Bangun penerima Anda"
  href: build
---

## Pesawat yang memberi tahu di mana dirinya

![Satelit memberi tahu pesawat di mana ia berada; pesawat memancarkan posisinya ke segala arah, dalam lingkaran-lingkaran yang bisa ditangkap oleh setiap rumah di darat, dan oleh pesawat lain](/img/fig-adsb-broadcast.svg)

![Satu pesan memuat empat hal: siapa pesawat itu, di mana ia berada, seberapa tinggi dan seberapa cepat; dan pesan itu dikirim ulang setiap detik](/img/fig-adsb-message.svg)

ADS-B adalah singkatan dari *Automatic Dependent Surveillance – Broadcast* (pengawasan dependen otomatis – siaran). Mari ambil kata-katanya satu per satu. *Automatic* (otomatis): pesawat mengirimnya sendiri, tanpa diminta siapa pun. *Dependent* (dependen): posisinya berasal dari navigasi satelit pesawat itu sendiri, bukan dari radar di darat. *Surveillance* (pengawasan): inilah cara pengendali lalu lintas udara mengikuti pesawat. *Broadcast* (siaran): dikirim ke semua orang, bukan ke satu pendengar.

Kira-kira sekali per detik, pesawat memancarkan pesan singkat pada **1090 MHz**. Pesan itu memuat identitasnya (alamat 24-bit yang diberikan kepada badan pesawat tersebut, dan biasanya tanda panggil penerbangannya), posisinya (lintang dan bujur), ketinggiannya, kecepatannya dan arah hadapnya. Pesan lain, yang dikirim sesekali, menambahkan kategori pesawat, laju vertikalnya dan beberapa penanda.

Sejak 2020, sebagian besar pesawat yang terbang di ruang udara terkontrol di Eropa dan di Amerika Serikat diwajibkan memancarkan ADS-B. Pesawat penumpang melakukannya, jet bisnis melakukannya, banyak pesawat ringan melakukannya. Beberapa pesawat militer dan pesawat negara tidak, atau melakukannya tanpa posisinya.

## Mengapa Anda bisa mendengarkan

![Dari antena ke stik radio kecil, ke Raspberry Pi, ke layar yang menampilkan pesawat](/img/fig-adsb-chain.svg)

Pesan-pesan itu tidak dienkripsi dan tidak ditandatangani. Itu memang disengaja: intinya adalah setiap pesawat dan setiap stasiun darat di sekitarnya bisa mendengar setiap pesawat lain. Formatnya terbuka, ditetapkan oleh standar yang menjadi landasan penerbangan, dan frekuensinya sama di seluruh dunia.

Jadi penerima hanyalah sebuah radio yang disetel ke 1090 MHz dan sebuah program yang mengubah pulsa menjadi teks. Dua puluh tahun lalu radio semacam itu berharga ribuan. Hari ini, stik USB yang dijual untuk televisi digital, seukuran ibu jari, sudah cukup, karena cipnya bisa diperintahkan untuk mendengarkan frekuensi apa pun dan menyerahkan sinyal mentahnya ke komputer. Stik itu disebut RTL-SDR, dari nama cip di dalamnya (RTL2832U) dan gagasannya (*software-defined radio*, radio yang ditentukan perangkat lunak: komputer yang melakukan penguraian).

Program yang melakukan penguraian pada Raspberry Pi biasanya **readsb**, penerus dari *dump1090* yang lebih lama. Ia mendengarkan stik, menguraikan pesan, dan menawarkan hasilnya ke apa pun yang membutuhkannya: peta di peramban Anda (**tar1090**), pengumpan untuk jaringan pelacakan, atau dinding ZenithBoard.

## Di Amerika Serikat: 978 MHz juga

Amerika Serikat juga memakai frekuensi kedua, **978 MHz**, yang disebut UAT (*Universal Access Transceiver*, pemancar-penerima akses universal), terutama untuk pesawat kecil yang terbang rendah. Mendengarnya memerlukan stik USB kedua dan antena kedua. Di tempat lain, hanya ada 1090 MHz. ZenithBoard menanyakan wilayah Anda sekali dan hanya menyebut 978 MHz jika Anda menjawab *Amerika Serikat*.

## Seberapa jauh Anda mendengar

![Sinyal merambat lurus sementara bumi melengkung menjauh: pesawat di atas garis pandang terdengar, pesawat di balik cakrawala tersembunyi, dan antena yang lebih tinggi melihat lebih jauh](/img/fig-adsb-range.svg)

Sinyal merambat dalam garis lurus, seperti cahaya. Pesawat pada ketinggian jelajah terlihat dari sangat jauh, selama tidak ada yang menghalangi antara pesawat dan antena Anda. Dari jendela yang menghadap bukit Anda mungkin mendengar beberapa puluh kilometer; dari atap dengan cakrawala yang bebas, 250 km atau lebih adalah hal biasa, dan pesawat di tepinya adalah yang berada di ketinggian 11.000 meter. Pesawat rendah di dekat Anda tersembunyi oleh setiap bangunan dan pohon. Jangkauan ditentukan oleh antena dan pandangannya, bukan oleh komputernya.

## Apa yang tidak diberitahukan ADS-B

Pesan itu mengatakan di mana pesawat berada, bukan ke mana tujuannya. Asal, tujuan, nama maskapai dan foto pesawat berasal dari tempat lain: dari daftar register publik dan dari basis data yang dicari oleh jaringan pelacakan dan ZenithBoard berdasarkan alamat pesawat. ADS-B juga tidak mengatakan apa pun tentang siapa yang ada di dalamnya, dan tidak apa pun tentang Anda: menerima bersifat pasif, penerima Anda tidak memancarkan apa pun.

## MLAT: mendengar yang tidak memberi tahu

![Empat penerima di darat mendengar pesan yang sama pada empat waktu berbeda; di sekeliling masing-masing, sebuah lingkaran yang ukurannya adalah waktu kedatangannya; keempat lingkaran berpotongan hanya di satu titik, tempat pesawat berada](/img/mlat.svg)

Beberapa pesawat mengirim identitasnya tetapi tidak posisinya (transponder lama melakukan ini). Jika empat penerima atau lebih mendengar pesan yang sama, selisih kecil waktu tibanya memberikan posisi, seperti petir yang ditentukan letaknya dari gunturnya. Ini disebut **MLAT**, *multilateration* (multilaterasi). Penerima tunggal Anda tidak bisa melakukannya sendirian; dengan mengumpankan ke jaringan, ia menjadi salah satu dari keempatnya. Ini salah satu alasan nyata untuk berbagi.
