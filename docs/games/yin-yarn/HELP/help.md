# Yin Yarn（Cheeky / Beefy）— HELP 摘要

> 廠商：Aristocrat。1-LINK 雙變體：**Yin Yarn Cheeky**（藍紫主題）與 **Yin Yarn Beefy**（洋紅主題，WILD 為橘白貓）。
> 來源：Cheeky HELP `EKVjXEvewVk` 5:12~6:22；Beefy HELP `46Dnp-7G69w` 6:04~7:01。
> 擷取：本機 yt-dlp 下載段 → ffmpeg 密集抽幀 + plateau 穩定幀偵測，挑「靜止不動」的中間幀（避開溶接／過場的重疊模糊幀）。此為特色極多的遊戲，共 24 頁（Cheeky 01~19、Beefy 20~24）。

## ★ 特色結構（依觸發頁：Cheeky help-03／04／05、Beefy 對應頁）
**每版各有 3 個核心特色**，由 3 種毛線球觸發；核心特色只是「Cheeky 叫 Growth／Beefy 叫 Upgrade」的變體命名差異（同一個「reel 增強」核心）。

| 核心特色 | Cheeky | Beefy |
|---|---|---|
| 名稱 | GROWTH | UPGRADE |
| 觸發毛線球 | 綠 | 藍 |

**觸發對應（毛線球 → 特色）**
| 毛線球 | Cheeky | Beefy |
|---|---|---|
| 綠 | GROWTH | —（Beefy 用藍） |
| 藍 | —（Cheeky 用綠） | UPGRADE |
| 粉 | BOOST | BOOST |
| 金（毛線球，檔名 yarn-orange） | EXTRA | EXTRA |
| owl | GEM FEATURE（僅基本遊戲） | 同 |

**同一 SPIN 觸發多個核心特色 → 組合成 Super／Mega：**
- 核心 ＋ Boost → Growth／Upgrade **Boost Super**
- Extra ＋ Boost → **Extra Boost Super**
- 核心 ＋ Extra → **Extra Growth／Upgrade Super**
- 核心 ＋ Extra ＋ Boost（三個都觸發）→ **MEGA**
- Gem 與其他特色同轉觸發時，先玩該特色再玩 Gem。
- ※ 毛線球外觀（含 YARNIER 字樣）不影響觸發機率。

主題色：Cheeky 藍紫／深色貓；Beefy 洋紅／橘白貓。Boost、Extra、Extra Boost Super、Mega、Gem、Coin Upgrade、Jackpot Gem、Dynamic Symbols、Bet Keeper 兩版同名。

## ★ Coin 三色值階與 counter（help-06、help-05、help-11/12）
每輪上方的 counter 分**紅（bronze）→ 藍（silver）→ 金（gold）**三階（本文一律用紅／藍／金）。
- **紅幣（red coin）**＝最低值階：每次 coin upgrade 獎值上下限 +10／+20 credits × bet multiplier；所在輪紅 counter 滿 3 → 升藍。
- **藍幣（blue coin）**＝中值階：+20／+80；藍 counter 滿 3 → 升金。
- **金幣（gold coin）**＝最高值階：+200／+800。
- 另有 **Multiplier／Jackpot／Upgrade** 三種特殊 owl coin，於特色中出現（乘倍／彩金／升級）。

## PAYTABLE（help-01＝Cheeky；help-20＝Beefy）
- **WILD**：取代所有符號，惟不取代 gem／scatter；出現於 reel 2、3、4、5。
- Bonus（credits，固定值）：**Super Bonus 5000、Minor Bonus 2000、Mini Bonus 1000**（Cheeky paytable 讀值；先前誤抄 6000，已更正為 5000）。
- 高賠符號數款 ＋ royal A／K／Q／J／10／9（5/4/3 連線給分）。
- 全連線左至右、相鄰輪；All wins shown with bet multiplier at 1。

## JACKPOT GEM（help-02＝Cheeky；help-21＝Beefy）
- 5 段：**GRAND、MAJOR、SUPER、MINOR、MINI**。頁面原文「a **jackpot or bonus** is awarded」——分兩類：
  - **GRAND、MAJOR ＝ Jackpot（累積／progressive）**：GAME RULES 稱 Grand Jackpot／Major Jackpot，odds 與押注成正比、不乘 bet multiplier。
  - **SUPER、MINOR、MINI ＝ Bonus（固定）**：PAYTABLE 標明固定 credit 值 Super 5000／Minor 2000／Mini 1000；GAME RULES 稱 Super／Minor／Mini Bonus。
- 基本遊戲中盤面出現 jackpot gem 即給獎；落 1／2／3／4／5 顆 → 開出的段數不同（越多顆越高段：5 顆→GRAND）。
- jackpot gem 僅於基本遊戲出現。

## ★ owl 貓符區分（易混，依 HELP＋實機圖）
盤面有多顆貓臉 owl，依底色／字樣／出現時機與獎項區分：
- **彩金貓 Jackpot Gem**（金底無字，bg-jp.png）：**基本遊戲**（bought game）出現 1 顆以上即開一個 jackpot/bonus，顆數決定可開段位範圍（顆數越多、越低段被排除）：1→G/Ma/S/Mi/Mn、2→G/Ma/S/Mi、3→G/Ma/S、4→G/Ma、5→必 Grand（G=Grand,Ma=Major,S=Super,Mi=Minor,Mn=Mini）。Grand/Major 累積、Super/Minor/Mini 固定。help-02。
- **JACKPOT owl**（金底 JACKPOT 字，jackpot-gem.png）：**特色期間**出現(help-05 列)；落在某輪把獎值加進該輪 pot。**Upgrade 特色**(help-22)原文「Any JACKPOT owl that adds to the counter above a reel will have its prize multiplied by the reel upgrade level of that reel」＝該獎值 ×該輪 upgrade level；Growth／Extra／Boost／Mega 頁未提及此 owl（即無額外乘算）。**獎值大小 HELP 未載明、也未說會開段位彩金 → {{待確認}}**。
- **GEM owl**（紫底無字，gem-feature.png）：**基本遊戲**出現一或多顆 → 有機率觸發 GEM FEATURE。help-03（「can only appear during bought games」＝基本遊戲）。
- **Multiplier owl**（乘倍，對所有得分輪）、**Upgrade owl**（升該輪 upgrade 等級）。

## 特色一覽（頁碼對正；效果為 HELP 逐字原文，非推測）
- **YINYARN FEATURES**（help-03 觸發頁、help-04 組合、help-05 續）：基本遊戲中依毛線球觸發核心／Boost／Extra／Gem。help-05 原文載明：觸發於 **YARNY 給 8 場、YARNIER 給 9 場**免費遊戲，並在 5 輪上方各放一個 bronze counter；並列出 7 大特色期間會出現的符號（紅／藍／金幣＋Multiplier／Jackpot／Upgrade owl）與 coin 揭獎、counter 升階規則。
- **COIN UPGRADE**（help-06）：紅→藍→金三色幣值階，每次升級提高獎值上下限（HELP 頁列出 +10／+20、+20／+80、+200／+800 credits × bet multiplier；報告展示文字依使用者指示改記為「隱藏數值」）。
- **GEM FEATURE**（help-07；owl 觸發，僅基本遊戲）：由 cut 選 START FEATURE，導向核心／Extra／Boost，並加免費遊戲。
- **GROWTH FEATURE**（help-08、09；Cheeky，綠毛線球）：每顆綠毛線球使**所有輪高度 +1 列**（每加 1 列 +20 線），最多 6 顆。
- **EXTRA FEATURE**（help-10；金毛線球，HELP 為黃/金色球、檔名 yarn-orange）：每顆**加 1 場免費遊戲**（YARNIER 加 1～2 場），最多 5 顆；該輪其餘金球轉為貓符。
- **BOOST FEATURE**（help-11 主頁、help-12 續頁 WHEN PLAYING YARNIER BETS；粉毛線球）：HELP 原文——
  - 粉毛線球落在帶 **bronze（紅）counter** 的輪上 **reveals 3 個紅幣**；帶 **silver（藍）counter** 的輪上 **reveals 3 個藍幣**。
  - **YARNIER 押法**：紅 counter 輪 reveals **3 或 6** 個紅幣、藍 counter 輪 reveals **3 或 6** 個藍幣（help-12 續頁）。
  - 每顆落下的粉毛線球之後 **replaced by 貓符**（該次免費遊戲剩餘局皆維持）；若某輪為 **gold（金）counter**，該輪剩餘粉球亦直接 replaced by 貓符。
  - 每輪每次 BOOST **最多 2 顆**粉球；粉球**不會出現在金 counter 的輪**；**綠、金毛線球不會在 BOOST 期間出現**。
- **EXTRA GROWTH SUPER**（help-13；Beefy＝EXTRA UPGRADE SUPER，help-23）／**GROWTH BOOST SUPER**（help-14；Beefy＝UPGRADE BOOST SUPER，help-24）／**EXTRA BOOST SUPER**（help-15）：兩個核心／Boost／Extra 組合觸發時的 Super 版。
- **MEGA FEATURE**（help-16）：核心＋Extra＋Boost 三者同轉觸發。
- **DYNAMIC SYMBOLS**（help-17）：每局開始盤面符號轉換為列出的符號集（bought game／free games 各一組）。
- **GAME RULES**（help-18）：基本 **40 線**；**特色中線數隨 Growth 盤面延展增加（每增 1 列 +20 線）**；YARNY／YARNIER 兩押法（每局 80／100 × bet multiplier）；progressive／bonus 不乘 bet multiplier；Grand／Major odds 與押注成正比；malfunction 條款；Aristocrat patents。
- **WIN LINES**（help-19）：payline 圖。
- **UPGRADE FEATURE**（Beefy 版核心＝Cheeky 的 Growth 對應；help-22；藍毛線球）：**提升該輪分數等級**，獎值依等級乘倍。
- **Multiplier（owl coin）**：HELP 未單設頁；依實機畫面（MEGA FEATURE，reel 2／4／5 同時顯示 ×3）確認**對所有已獲得分數的轉輪整體乘倍**（非僅所在輪）。動圖來源 44D80zeEJ_Y 20:16~20:21。
- **BET KEEPER**：當前注額大於剩餘 credits 時提供，可用剩餘 credits 以比例玩一局（未單獨收頁）。

## 待核對
- Yarny vs Yarnier 各特色細部差異、各 gem 對應規則小字——待實機／逐頁細讀補。
- Bonus 值（Super 5000／Minor 2000／Mini 1000）取自 Cheeky paytable；Beefy paytable 若有不同再標注（先前 6000 為誤抄，已更正）。
