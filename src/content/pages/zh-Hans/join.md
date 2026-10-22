---
title: "加入社区"
description: "四个网络会接收你的接收器听到的数据，并有所回馈。你给出什么，你得到什么，以及什么留在家里。"
lang: zh-Hans
page: join
updated: 2026-10-22
reviewed: false
next:
  label: "了解 ZenithBoard"
  href: zenithboard
---

## 为什么要分享

你的接收器能听到周围几百公里。一个由接收器组成的网络能听到整个地球。你在航班追踪网站上看过的每一张地图，都是由像你这样的人构成的：窗台上的一块 Raspberry Pi，把听到的东西发出去。天空不属于任何人；这些地图之所以存在，是因为成千上万的人在分享它。

分享不花你一分钱：你的网络线路上每秒几千字节，Pi 上的开销也微不足道。作为回报，各网络向你开放付费功能，而你那一根天线也成为 MLAT 的一部分，用来找到那些不报告自己位置的飞机。

## 四个网络

每个网络想要的东西都一样，即 readsb 解码后的消息流，而每个网络都有自己的小程序来发送它。ZenithBoard 安装你勾选的那些；你也可以从各网络的页面自行安装。

### [ADS-B Exchange](https://www.adsbexchange.com/)

社区自己的网络，由志愿者运营，以展示它听到的每一架飞机而闻名，不接受按要求过滤。馈送无需账户：他们的脚本在 Pi 上运行，你的数据源及其统计就会出现在他们的网站上。参与 MLAT 的人可以拿回自己的数据帮助定位到的飞机。ZenithBoard 把它作为基础层；其他网络是在此之上的可选项。

### [FlightAware](https://www.flightaware.com/adsb/piaware/)

馈送程序叫 **PiAware**。作为回报，FlightAware 向馈送者赠送 **Enterprise** 账户：八个月的航班历史、无限量提醒、无广告的地图，以及你的接收器所听到内容的统计，包括它帮助追踪的航班。

### [Flightradar24](https://www.flightradar24.com/share-your-data)

馈送程序叫 **fr24feed**。作为回报，一旦数据到达，与你的接收器关联的免费账户就会升级为 **Contributor** 方案。每个数据源一个分享密钥；如果你同时向其他网络馈送，Flightradar24 会要求你关闭它自己的 MLAT，这一步 ZenithBoard 会替你完成。

### [Plane Finder](https://planefinder.net/sharing/client)

馈送程序是 **Plane Finder ADS-B Client**。作为回报，Plane Finder 为分享者安排其网站和应用的免费高级使用权。

## 你给出什么

消息本身：飞机的地址、呼号、位置、高度、速度，正如它们被公开广播时那样。每条消息到达的时间，这正是 MLAT 需要的。你的接收器的位置，以便网络知道数据是从哪里听到的。不涉及你家庭网络中的任何东西，没有摄像头，没有麦克风；馈送程序都很小，要么开源要么有文档，ZenithBoard 会向你展示每一个程序在做什么。

## 什么留在家里

你的精确位置被各网络用来计算接收距离和 MLAT；它不会以图钉的形式标在公共地图上你家的位置，ZenithBoard 也绝不会把它显示在"墙"上或帖子里。你平板上的"墙"和你的 tar1090 地图只在你的家庭网络内，除非你自己把它们开放出去。你分享的一切都可以停止分享：在菜单里关掉一个馈送程序，一切就恢复原样。

## 一个 MLAT 客户端，而不是四个

每个网络都可以在你的 Pi 上运行自己的 MLAT 客户端。四个同时运行对 Raspberry Pi 来说太多了：处理器会把时间都花在算术上，"墙"就会卡顿。ZenithBoard 只保持一个 MLAT 客户端运行，即 ADS-B Exchange 的那个，并在其他网络中关闭 MLAT；`zenithboard status` 会统计正在运行的客户端，你可以借此确认恰好只有一个。如果你手动安装馈送程序，也请这样做。

## 开始

在 ZenithBoard 中，菜单 **1 ADS-B** 列出四个网络，每个都有一个勾选框；ADS-B Exchange 始终开启。对于 FlightAware、Flightradar24 和 Plane Finder，你需要在它们的网站上创建一个免费账户；安装程序会打印出要粘贴的链接或密钥，只需一次。对于 ADS-B Exchange，它们的脚本会询问站点名称和你的位置，并打印出查看你数据源的链接。十分钟后，你的接收器就出现在它们的地图上，统计页面也会显示你能听多远。
