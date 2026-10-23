---
title: "搭建一台接收器"
description: "一块 Raspberry Pi、一个 USB 无线电接收棒、一根天线：带价格的零件清单，天线该放哪里，以及一条命令装好软件。"
lang: zh-Hans
page: build
updated: 2026-10-23
reviewed: false
next:
  label: "然后加入社区"
  href: join
---

## 零件

五样东西，其中三样你可能已经有了。

| 零件 | 要看什么 | 大约 |
|---|---|---|
| ![](/img/part-pi.svg) Raspberry Pi | **3B、3B+ 或 4** 最理想：1 GB 内存足以运行接收器、馈送程序和"墙"，这是在作者的 Pi 3B 上实测的。**Zero 2 W**（512 MB，标价 15 US$）能运行接收器和"墙"，但不含额外的馈送程序。 | 15–60 € |
| ![](/img/part-stick.svg) USB 无线电接收棒 | 一个 **RTL-SDR** 接收棒。RTL-SDR Blog 的型号是标杆，约 35–40 US$。专为 ADS-B 制作、内置 1090 MHz 滤波器的接收棒（比如 FlightAware 的 Pro Stick）在城市里能听得更远。 | 30–45 € |
| ![](/img/part-antenna.svg) 天线 | 一根调谐到 **1090 MHz** 的小天线。部分接收棒附带的那根放在窗边就能用；专用的 ADS-B 天线半米长，放在屋顶或阳台上能听得远得多。 | 10–40 € |
| ![](/img/part-sdcard.svg) Micro-SD 卡 | 16 GB 或以上，知名品牌。 | 8–12 € |
| ![](/img/part-psu.svg) 电源 | 你那款 Pi 的官方电源。手机充电器往往不够用，Pi 会用一个闪电图标告诉你。 | 8–12 € |

合计：**大约 60 到 120 €**，一次性。价格会变；这些是 2026 年 10 月在各厂商网站上看到的数量级。天线最后买：先用接收棒附带的那根，看看能听到什么，再做决定。

用来做"墙"的旧平板或任何带浏览器的屏幕是可选的，而且很可能已经躺在某个抽屉里了。

## 天线放哪里

这是唯一会改变你接收距离的东西，值得花一分钟了解。信号沿直线传播。天线想要的是天空，而不是房间：窗边是最低要求，阳台不错，屋顶或瓦片下的阁楼最好。竖直放置，远离金属，线缆允许多高就放多高。高两米往往胜过更贵的接收棒。

Pi 本身可以留在室内；三米以内的 USB 线都没问题。如果接收棒在夏天发热，那是正常的。

## 软件，两种方式

### 经典方式：readsb 和 tar1090

解码器是 [**readsb**](https://github.com/wiedehopf/readsb)；浏览器里的地图是 [**tar1090**](https://github.com/wiedehopf/tar1090)；两者都是同一位作者的自由软件，自带的安装脚本在全新的 Raspberry Pi OS 上可以直接用。然后你从各个网络自己的页面手动添加每个馈送程序。如果你喜欢弄懂每一个部件，这是该走的路。

### 一站式方式：ZenithBoard

ZenithBoard 通过一个菜单安装 readsb、你选择的馈送程序和"墙"，只问一次那几个问题（你的地区、你的单位、你的天线在哪里），之后可以随时添加或移除任何部分。它还只保持一个 MLAT 客户端运行，因为同时运行多个会让 Pi 不堪重负。

用 Raspberry Pi Imager 准备好存储卡（Raspberry Pi OS Lite，64 位，启用 SSH 并填好你的 Wi-Fi），启动 Pi，然后在你的电脑上：

```
ssh YOUR_USERNAME@zenithboard.local
sudo apt update && sudo apt install -y git
git clone https://github.com/regis57/ZenithBoard.git
cd ZenithBoard
sudo ./install.sh
```

第一次大约需要一小时，大部分时间在等下载。完成后，菜单会打印出"墙"的地址 `http://<the Pi's address>:8080/`；在平板的浏览器里打开，"墙"就在那里。你自己的地图 tar1090 位于 `http://<the Pi's address>/tar1090/`。

## 你的位置

解码器、MLAT 和"墙"上的距离都需要知道天线在哪里：纬度、经度、海拔。在地图上右键点击你家就能复制坐标。这个位置只保存在你的 Pi 上和馈送程序的设置里；ZenithBoard 绝不会把它显示在"墙"上或帖子里，各网络也不会公开它。它只用来计算接收距离，仅此而已。

## 可能出什么问题

找不到接收棒：用 USB 2.0 接口，不要用 Pi 4 上蓝色的 USB 3.0 接口，并用短线。地图是空的：等十分钟，然后检查天线是否竖直并靠近窗户。Pi 显示闪电图标：电源太弱。Wi-Fi 掉线：换网线，或者挪动 Pi；接收器本身需要的带宽非常小。其余的看常见问题。
