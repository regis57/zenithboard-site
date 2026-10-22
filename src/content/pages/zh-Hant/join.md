---
title: "加入社群"
description: "四個網路會接收你的接收器聽到的內容，並給你回饋。你付出什麼、得到什麼、以及什麼留在家裡。"
lang: zh-Hant
page: join
updated: 2026-10-22
reviewed: false
next:
  label: "認識 ZenithBoard"
  href: zenithboard
---

## 到底為什麼要分享

你的接收器聽得到你周圍幾百公里。一個由許多接收器組成的網路，聽得到整個地球。你在航班追蹤網站上看過的每一張地圖，都是由像你這樣的人組成的：一台放在窗台上的 Raspberry Pi，把聽到的東西送出去。天空不屬於任何人；地圖之所以存在，是因為成千上萬的人分享它。

分享不花你任何成本：你的網路線上每秒幾 KB，Pi 上的負擔也不值一提。作為回報，各網路會向你開放它們的付費功能，而你那一支天線也成為 MLAT 的一部分，用來找出那些不報位置的飛機。

## 四個網路

每一個網路要的都是同一樣東西：readsb 解碼出來的訊息串流，而每一個都有自己的小程式來傳送它。ZenithBoard 會安裝你勾選的那些；你也可以從各網路的頁面自己安裝。

### [ADS-B Exchange](https://www.adsbexchange.com/)

社群自己的網路，由志工營運，以顯示它聽到的每一架飛機而聞名，不會應要求過濾。餵送不需要帳號：他們的腳本在 Pi 上執行，你的資料流會連同統計資料出現在他們的網站上。參與 MLAT 的人會得到由其資料協助定位的飛機。ZenithBoard 把它當作基礎層；其他的是在此之上的選配。

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

餵送程式叫做 **PiAware**。作為回報，FlightAware 贈送餵送者一個 **Enterprise** 帳號：八個月的航班歷史、無限制的警示、無廣告的地圖，以及你的接收器聽到了什麼、協助追蹤了哪些航班的統計資料。

### [Flightradar24](https://www.flightradar24.com/share-your-data)

餵送程式叫做 **fr24feed**。作為回報，與你的接收器連結的免費帳號會在資料一送達時升級為 **Contributor** 方案。每個資料流一把分享金鑰；如果你也餵送其他網路，Flightradar24 會要求你關閉它自己的 MLAT，ZenithBoard 會替你做這件事。

### [Plane Finder](https://planefinder.net/sharing/client)

餵送程式是 **Plane Finder ADS-B Client**。作為回報，Plane Finder 讓分享者免費使用其網站和 App 的進階功能。

## 你付出什麼

訊息本身：飛機的位址、呼號、位置、高度、速度，一如它們公開廣播出來的那樣。每一則訊息到達的時間，這是 MLAT 需要的。你的接收器的位置，讓網路知道資料是從哪裡聽到的。沒有任何來自你家網路的東西，沒有攝影機，沒有麥克風；餵送程式都很小，開源或有文件說明，ZenithBoard 會讓你看到每一個程式在做什麼。

## 什麼留在家裡

你的確切位置會被各網路用來計算距離和 MLAT；它不會以一根釘在你家上的圖釘出現在它們的公開地圖上，ZenithBoard 也絕不會在牆上或貼文裡顯示它。你平板上的牆和你的 tar1090 地圖只在你家的網路上，除非你自己把它們開放出去。你分享的一切都可以停止分享：在選單裡關掉一個餵送程式，一切就回復原狀。

## 一個 MLAT 用戶端，而不是四個

每個網路都可以在你的 Pi 上執行自己的 MLAT 用戶端。四個同時跑對 Raspberry Pi 來說太多了：處理器把時間都花在運算上，牆就會卡頓。ZenithBoard 只讓一個 MLAT 用戶端運行，也就是 ADS-B Exchange 的那個，並關閉其他網路的 MLAT；`zenithboard status` 會計算正在運行的數量，讓你確認恰好只有一個。如果你是手動安裝餵送程式，也請這麼做。

## 開始動手

在 ZenithBoard 裡，選單 **1 ADS-B** 列出四個網路，每個各有一個勾選框；ADS-B Exchange 永遠是開啟的。FlightAware、Flightradar24 和 Plane Finder 需要你到它們的網站建立免費帳號；安裝程式會印出要貼上的連結或金鑰，只印一次。ADS-B Exchange 的腳本則會問你一個站名和你的位置，然後印出查看你資料流的連結。十分鐘後，你的接收器就出現在它們的地圖上，統計頁面會顯示你聽得多遠。
