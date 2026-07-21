/* ===========================================================
   競品遊戲資料（方格頁與詳情頁共用）

   每筆欄位：
   - id       固定英文代號（網址用 detail.html?id=xxx，全小寫+連字號，不可重複、不要再改）
   - vendor   廠商
   - year     年份
   - name     遊戲名
   - img      封面圖（方格縮圖 + 詳情頁主圖；留空顯示「無圖」佔位）
   - tags     # 標籤陣列（自由填，例：["乘倍","收集","無限H&S"]）
   - desc     規格簡述 / 一句話介紹（可留空）
   - source   來源連結（可留空）
   - play     玩法分區陣列（可留空）。每區：
       { type: "BASE GAME" | "FREE GAME" | "FEATURE GAME" | "GAME IN GAME",
         steps: [ { text: "玩法說明",
                    img: "對應 GIF 或圖（留空顯示佔位）",
                    yt:  "該 GIF 對應的 YouTube 影片連結（留空則不顯示影片連結）" }, ... ] }
       一種玩法分一區，沒內容的區自動不顯示。
   - help     HELP／賠率表截圖路徑陣列（可留空），會在詳情頁底部以圖庫呈現
   - hidden   true = 未公開：總覽頁不顯示這款（連篩選選項也不算它）。
              自己要看／分享時，在總覽頁點標題「LANDBASE」的 S→A→L→A→D 五個字母解鎖，
              解鎖後未公開的方格會以橘色虛線＋「未公開」標記出現。分享完要正式公開，
              把這行 hidden 刪掉（或改 false）再 push 即可。
              注意：這是「不顯示」不是「加密」——詳情頁網址與本檔原始碼仍在線上可被直接開啟。

   圖片/GIF 路徑相對於 games/ 資料夾（例：../landbase/weeks/W25/xxx.jpg、shen-shu/HELP/xxx.jpg）
=========================================================== */
var GAMES = [
  {
    id: "shen-shu",
    vendor: "Bluberi",
    year: "2026",
    name: "Shen Shu",
    img: "shen-shu/keyart-logo.png",
    tags: ["Cash on Reel", "打擊觸發", "固定觸發", "三特色", "乘倍", "收集", "輪盤", "盤面延展"],
    symbols: [
      { name: "INSTANT WIN", role: "落在某軸時，立即派發該軸 Instant Win Box 的內容（分數或特色）。", img: "shen-shu/symbols/instant-win.png" },
      { name: "ADD ALL", role: "觸發 ADD ALL 特色：加總其他 4 軸 Instant Win Box 的分數加進該軸。", img: "shen-shu/symbols/add-all.png" },
      { name: "WHEEL POT", role: "觸發 WHEEL POT 特色：垂直轉盤，可中 GRAND／MAXI／MINOR／MINI 彩金。", img: "shen-shu/symbols/wheel-pot.png" },
      { name: "MULTIPLIER", role: "觸發 MULTIPLIER 特色：紅幣轉出 2x～10x 倍率，套用到該軸分數。", img: "shen-shu/symbols/multiplier.png" },
      { name: "EXTRA ROW", role: "免費遊戲中落在任一軸，使盤面往上延展一列。", img: "shen-shu/symbols/extra-row.png" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "盤面頂端有一條 INSTANT WIN ROW，每一軸上方各有一個 Instant Win Box，內容每次 SPIN 隨機變動。", img: "shen-shu/clips/shen-shu-base-1.webm", yt: "https://www.youtube.com/watch?v=8lG7J4KqPZQ&t=1342s" },
          { text: "INSTANT WIN 符號落在某軸時，立即贏得該軸上方框內的內容：分數[[10～750 分 × bet multiplier]]，或三大特色之一。", img: "shen-shu/clips/shen-shu-base-2.webm", yt: "https://www.youtube.com/watch?v=TyjveYwToxg&t=349s" },
          { text: "三大特色採打擊觸發。", img: "shen-shu/clips/shen-shu-base-2.webm", yt: "https://www.youtube.com/watch?v=TyjveYwToxg&t=349s" },
          { text: "三大特色亦有固定觸發：當某特色已在 Instant Win Box 中、其正下方落下 INSTANT WIN，即必定觸發該特色。", img: "shen-shu/clips/shen-shu-base-4.webm", yt: "https://www.youtube.com/watch?v=8lG7J4KqPZQ&t=1429s" }
        ]
      },
      {
        type: "FREE GAME",
        steps: [
          { text: "由 1～3 個特色觸發，獲得 10 次免費遊戲；每軸 Instant Win Box 設有起始分數[[5 分 × bet multiplier]]。", img: "shen-shu/clips/shen-shu-fg-1.webm", yt: "https://www.youtube.com/watch?v=8lG7J4KqPZQ&t=1449s" },
          { text: "帶有分數[[5～75 分 × bet multiplier]]或已啟用特色的金幣可落在 5 軸任一軸；免費遊戲期間取得的所有分數與特色獎金，會累加到該金幣所落轉軸上方的 Instant Win Box。", img: "shen-shu/clips/shen-shu-fg-2.webm", yt: "https://www.youtube.com/watch?v=8lG7J4KqPZQ&t=1449s" },
          { text: "ADD ALL：將其他 4 軸 Instant Win Box 的分數加總後加進該軸；多個 ADD ALL 由左至右依序套用。同時觸發多個特色時，ADD ALL 一律在其他特色結算之後才結算。", img: "shen-shu/clips/shen-shu-fg-2.webm", yt: "https://www.youtube.com/watch?v=8lG7J4KqPZQ&t=1449s" },
          { text: "MULTIPLIER：紅幣可落在任一軸，轉出倍率[[2x／3x／4x／5x／10x]]，套用到該軸 Instant Win Box 的分數。", img: "shen-shu/clips/shen-shu-fg-multiplier.webm", yt: "https://www.youtube.com/watch?v=8lG7J4KqPZQ&t=1465s" },
          { text: "WHEEL POT：該軸出現垂直轉盤並轉動，可中 GRAND／MAXI（累積彩金）與 MINOR／MINI（固定彩金）[[固定彩金 MINI 125、MINOR 375 分 × bet multiplier；累積彩金 MAXI 50,000、GRAND 500,000 分（任意 bet）]]；MINOR／MINI 命中「+NUDGE」可繼續推進加中，單次最多 6 個 jackpot。", img: "shen-shu/clips/shen-shu-fg-wheelpot.webm", yt: "https://www.youtube.com/watch?v=TP9Xi_Z4PFU&t=35s" },
          { text: "MINOR／MINI（固定彩金）的分數值會加進對應軸的 Instant Win Box；GRAND／MAXI（累積彩金）則直接送入轉軸底部的中獎框。", img: "shen-shu/clips/shen-shu-fg-wheelpot.webm", yt: "https://www.youtube.com/watch?v=TP9Xi_Z4PFU&t=35s" },
          { text: "EXTRA ROW：免費遊戲中，EXTRA ROW 符號落在任一軸即把盤面往上延展一列；單輪免費遊戲最多延展 3 列。", img: "shen-shu/clips/shen-shu-fg-extra-row.webm", yt: "https://www.youtube.com/watch?v=8lG7J4KqPZQ&t=1481s" },
          { text: "免費遊戲結束時，5 個轉軸上方累積的分數全部派發。", img: "shen-shu/clips/shen-shu-fg-settle.webm", yt: "https://www.youtube.com/watch?v=8lG7J4KqPZQ&t=1590s" },
          { text: "EXTRA FREE GAMES：免費遊戲中可內部觸發尚未啟動的特色 —— 其對應符號落在 5 軸任一軸時立即觸發，並再加 5 次免費遊戲。", img: "shen-shu/clips/shen-shu-fg-extra-fg.webm", yt: "https://www.youtube.com/watch?v=8lG7J4KqPZQ&t=1490s" },
          { text: "TRIPLE BONUS METER：當「3 特色齊發」很久未出現時，盤面上方會出現提示表，於 3 特色免費遊戲開始時重置消失。", img: "shen-shu/clips/shen-shu-triple-bonus.webm", yt: "https://www.youtube.com/watch?v=TyjveYwToxg&t=333s" }
        ]
      }
    ],
    help: [
      "shen-shu/HELP/shen-shu-help-01.jpg",
      "shen-shu/HELP/shen-shu-help-02.jpg",
      "shen-shu/HELP/shen-shu-help-03.jpg",
      "shen-shu/HELP/shen-shu-help-04.jpg",
      "shen-shu/HELP/shen-shu-help-05.jpg",
      "shen-shu/HELP/shen-shu-help-06.jpg",
      "shen-shu/HELP/shen-shu-help-07.jpg",
      "shen-shu/HELP/shen-shu-help-08.jpg",
      "shen-shu/HELP/shen-shu-help-09.jpg",
      "shen-shu/HELP/shen-shu-help-10.jpg",
      "shen-shu/HELP/shen-shu-help-11.jpg",
      "shen-shu/HELP/shen-shu-help-12.jpg"
    ]
  },
  {
    id: "fortune-fury",
    vendor: "IGT",
    year: "2026",
    name: "Fortune Fury",
    img: "fortune-fury/screens/jackpots.jpg",
    tags: ["Hold & Spin", "Cash on Reel", "打擊觸發", "固定觸發", "5支彩金", "乘倍", "鎖定轉輪", "升級 M 獎"],
    symbols: [
      { name: "SCATTER", role: "集滿 3 個以上觸發免費遊戲。", img: "fortune-fury/symbols/sc.png" },
      { name: "WILD", role: "百搭；以三格堆疊出現。", img: "fortune-fury/symbols/wild.png" },
      { name: "分數幣", role: "帶分數的標誌，綜合觸發特色遊戲（1～2 顆打擊觸發、6 顆以上固定觸發）。", img: "fortune-fury/symbols/score-coin.jpg" },
      { name: "JP", role: "特色遊戲中隨機給予一顆任意彩金寶石；集滿對應數量即中該彩金。", img: "fortune-fury/symbols/jp.png" },
      { name: "閃電", role: "提升乘數。", img: "fortune-fury/symbols/lightning.png" },
      { name: "藍龍捲", role: "解鎖一列鎖定轉輪。", img: "fortune-fury/symbols/blue-tornado.png" },
      { name: "紅龍捲", role: "解鎖全部鎖定轉輪。", img: "fortune-fury/symbols/red-tornado.png" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "3×5 盤面、30 線。分數幣為帶分數的標誌。[[Denom 1¢／2¢／5¢／10¢／$1／$2；Bet 100～500]]", img: "fortune-fury/screens/bg-base.jpg", yt: "" },
          { text: "綜合觸發特色遊戲：盤面出現 1～2 顆分數幣時打擊觸發；出現 6 顆以上分數幣則固定觸發。", img: "fortune-fury/clips/ff-bg-combo.webm", yt: "https://youtu.be/X6xs2pdacFc?t=659" },
          { text: "集滿 3 個以上 SCATTER 觸發免費遊戲。", img: "fortune-fury/clips/ff-bg-scatter.webm", yt: "https://youtu.be/qIjhNBocIBA?t=145" },
          { text: "共 5 支彩金：Grand、Major、MAXI（累積彩金），Minor、Mini（固定彩金）。", img: "fortune-fury/screens/jackpots.jpg", yt: "" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "分數幣特色",
        steps: [
          { text: "於 8×5 盤面進行、固定 3 場。分數球不足時可隨機打擊觸發補到 6 顆；場上達 6 顆以上分數球則固定觸發。", img: "fortune-fury/clips/ff-feat-board.webm", yt: "https://youtu.be/X6xs2pdacFc?t=122" },
          { text: "盤面部分轉輪為鎖定狀態，解鎖後可獲得該列乘數。", img: "fortune-fury/clips/ff-feat-unlock.webm", yt: "https://youtu.be/X6xs2pdacFc?t=307" },
          { text: "JP：轉出或解鎖後隨機給予一顆任意彩金寶石；集滿對應數量即中彩金 —— 累積彩金 Grand 5 顆、Major 4 顆、MAXI 3 顆；固定彩金 Minor、Mini 各 3 顆。", img: "fortune-fury/clips/ff-feat-jp.webm", yt: "https://youtu.be/X6xs2pdacFc?t=138" },
          { text: "閃電：轉出或解鎖後，所有帶乘數的轉輪乘數 +1，解鎖列上的分數幣皆套用乘數；閃電、JP 等特殊功能標誌不受乘倍影響。", img: "fortune-fury/clips/ff-feat-lightning.webm", yt: "https://youtu.be/X6xs2pdacFc?t=227" },
          { text: "藍龍捲：轉出或解鎖後，解鎖一列鎖定轉輪；全盤解鎖後不再轉出。", img: "fortune-fury/clips/ff-feat-blue.webm", yt: "https://youtu.be/X6xs2pdacFc?t=686" },
          { text: "紅龍捲：轉出或解鎖後，解鎖所有鎖定轉輪；全盤解鎖後不再轉出。", img: "fortune-fury/clips/ff-feat-red.webm", yt: "https://youtu.be/X6xs2pdacFc?t=374" }
        ]
      },
      {
        type: "FREE GAME",
        name: "鎖定 WILD",
        steps: [
          { text: "由 3 個以上 SCATTER 觸發，3×5 盤面、共 3 場。", img: "fortune-fury/clips/ff-fg1-trigger.webm", yt: "https://youtu.be/qIjhNBocIBA?t=379" },
          { text: "WILD 會鎖定並延展。", img: "fortune-fury/clips/ff-fg1-wild.webm", yt: "https://youtu.be/qIjhNBocIBA?t=157" },
          { text: "轉出 EXTRA GAME 可 +1 SPIN。", img: "fortune-fury/clips/ff-fg1-extra.webm", yt: "https://youtu.be/qIjhNBocIBA?t=191" }
        ]
      },
      {
        type: "FREE GAME",
        name: "升級 M 獎",
        steps: [
          { text: "由 3 個以上 SCATTER 觸發，3×5 盤面、共 15 場。", img: "fortune-fury/clips/ff-fg2-trigger.webm", yt: "https://youtu.be/qIjhNBocIBA?t=532" },
          { text: "收集後升級 M 獎，升級的 M 獎獲得 WILD 功能。", img: "fortune-fury/clips/ff-fg2-upgrade.webm", yt: "https://youtu.be/qIjhNBocIBA?t=582" },
          { text: "集滿 3 個 SCATTER 可 retrigger（再度觸發免費遊戲）。", img: "", yt: "" }
        ]
      }
    ],
    help: []
  },
  {
    id: "hot-hot-flaming-pots",
    hidden: true,
    vendor: "Light & Wonder",
    year: "2026",
    name: "Hot Hot Flaming Pots",
    img: "",
    tags: ["Reel Ways", "Mystery Stacked Reels", "三特色", "收集", "全收分", "全加分", "乘倍", "Hot Train", "升級", "4支彩金"],
    desc: "Big Hot Flaming Pots／Mr. Lee & Mrs. Wong 系列新版：三特色 YUMMY／HONEY／SPICY 收集，HOT／HOT HOT Train 轉輪帶 2x／3x 收分乘倍，4 支彩金。規格取自機台 HELP。",
    symbols: [
      { name: "HOT（SCATTER）", role: "集 3 個以上觸發 HOT FEATURE，轉動 Hot Train。", img: "hot-hot-flaming-pots/symbols/hot.png" },
      { name: "🟢 YUMMY 分數球", role: "散落觸發 YUMMY ORDER UP 特色；帶分數或 MAJOR／MINOR／MINI。", img: "hot-hot-flaming-pots/symbols/yummy.png" },
      { name: "🟠 HONEY 分數球", role: "散落觸發 HONEY ORDER UP 特色；帶分數或 MAJOR／MINOR／MINI。", img: "hot-hot-flaming-pots/symbols/honey.png" },
      { name: "🟣 SPICY 分數球", role: "散落觸發 SPICY ORDER UP 特色；帶分數或 MAJOR／MINOR／MINI。", img: "hot-hot-flaming-pots/symbols/spicy.png" },
      { name: "分數球（Coin）", role: "ORDER UP 特色內用來收集的分數球，帶分數或 MAJOR／MINOR／MINI，保留在盤面直到結算派發。", img: "hot-hot-flaming-pots/symbols/coin.png" },
      { name: "辣椒（SPICY 專屬）", role: "將自身分值加到盤面所有分數球（全加分），該次 SPIN 結束後轉為分數球。", img: "hot-hot-flaming-pots/symbols/chili.png" },
      { name: "蜂蜜罐（HONEY 專屬）", role: "收走盤面所有分數球的分值（全收分）後轉為分數球。", img: "hot-hot-flaming-pots/symbols/honey-jar.png" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "Feature 幣（🟢YUMMY／🟠HONEY／🟣SPICY）散落即觸發對應特色；打擊觸發成功時，盤面上同類 Feature 幣皆會一併啟動該特色。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-hit-trigger.webm", yt: "https://www.youtube.com/watch?v=BDoZqEu9D3c&t=253s" },
          { text: "特色觸發方式（依 Feature 幣數量）：1～3 個為打擊觸發；恰 3 個同色必觸發；4 個以上必觸發。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-4-plus-guaranteed.webm", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=1094s" },
          { text: "集 3 個以上 HOT 觸發 HOT FEATURE（實機觀察 HOT 有機會補位到 3 個以觸發；HELP 註明 HOT 的出現方式僅為表現效果）；若同一次 SPIN 同時觸發 ORDER UP 與 HOT，先玩 HOT。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-3-hot-triggers.webm", yt: "https://www.youtube.com/watch?v=2MqF3cSSEd8&t=297s" },
          { text: "共 4 支彩金：GRAND／MAJOR（累積彩金）、MINOR／MINI（固定彩金）。[[MINOR 1880、MINI 880 credits × bet multiplier；GRAND／MAJOR 為 meter 累積]]", img: "", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=487s" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "ORDER UP（收集）",
        steps: [
          { text: "特色開始時，所有 Feature 幣轉為分數球並保留分值，另隨機補分數球使場上達 5～10 顆。[[每個分數球 15–500x bet multiplier，或 MAJOR／MINOR／MINI]]", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-exact-3-guaranteed.webm", yt: "https://www.youtube.com/watch?v=pHQwfHZX7jg&t=1675s" },
          { text: "觸發的分數球鎖定保留，每有新的分數球、辣椒或蜜罐落下即重置剩餘 SPIN。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-spins-held-reset.webm", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=1419s" },
          { text: "YUMMY 啟用時前 4 場、YUMMY 未啟用而 SPICY／HONEY 啟用時前 3 場；若無新標誌落下則補對應場數。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "SPICY：辣椒將自身分值加到盤面所有分數球（全加分），SPIN 結束後轉為分數球。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-feature-spins.webm", yt: "https://www.youtube.com/watch?v=2MqF3cSSEd8&t=389s" },
          { text: "HONEY：蜂蜜收走盤面所有分數球的分值（全收分）後轉為分數球（保留收集總值，僅由此轉變產生）；盤面無分數球時，首個蜜罐自帶分值（15–500x／MINOR／MINI）轉為分數球。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-spicy-add-all.webm", yt: "https://www.youtube.com/watch?v=pHQwfHZX7jg&t=1699s" },
          { text: "同一 SPIN 落下兩個蜜罐時，先落的先收完盤面分變成分數球，後落的再連這個分數球一起收走。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-honey-eats-honey.webm", yt: "https://www.youtube.com/watch?v=KCUc3-4od4Q&t=2107s" },
          { text: "同一場辣椒與蜜罐同落時，先辣椒全加分、再蜜罐收分。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-honey-collect-all.webm", yt: "https://www.youtube.com/watch?v=BDoZqEu9D3c&t=1498s" },
          { text: "特色結束時，盤面各分數球的分值全部派發。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-order-up-payout.webm", yt: "https://www.youtube.com/watch?v=KCUc3-4od4Q&t=2232s" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "HOT／HOT HOT（Hot Train 轉輪）",
        steps: [
          { text: "3 個以上 HOT 觸發，轉 1 次 Hot Train，停在 UPGRADE／Hot Order Up 特色／GRAND／MAJOR。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-hot-train-spin.webm", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=1275s" },
          { text: "停 Hot Order Up 特色：以該特色進行 ORDER UP（場上 5～10 分數球、對應 SPIN 數）。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-hot-order-up.webm", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=1288s" },
          { text: "停 UPGRADE：進入 HOT HOT FEATURE，轉 Hot Hot Train，停 Hot Hot Order Up 特色／GRAND／MAJOR（不再升級）。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-upgrade-to-hothot.webm", yt: "https://www.youtube.com/watch?v=6W8bFjdADYw&t=28s" },
          { text: "收分乘倍：HOT 階整欄鎖定收分乘 2 倍；HOT HOT 階整欄鎖定收分乘 3 倍（一般 ORDER UP 不乘倍）。", img: "hot-hot-flaming-pots/clips/hot-hot-flaming-pots-mult-3x.webm", yt: "https://www.youtube.com/watch?v=6W8bFjdADYw&t=45s" },
          { text: "Hot Train 停 GRAND／MAJOR 時，直接派發對應 meter 顯示值。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" }
        ]
      }
    ],
    help: [
      "hot-hot-flaming-pots/HELP/hot-hot-flaming-pots-help-01.png",
      "hot-hot-flaming-pots/HELP/hot-hot-flaming-pots-help-02.png",
      "hot-hot-flaming-pots/HELP/hot-hot-flaming-pots-help-03.png",
      "hot-hot-flaming-pots/HELP/hot-hot-flaming-pots-help-04.png",
      "hot-hot-flaming-pots/HELP/hot-hot-flaming-pots-help-05.png",
      "hot-hot-flaming-pots/HELP/hot-hot-flaming-pots-help-06.png",
      "hot-hot-flaming-pots/HELP/hot-hot-flaming-pots-help-07.png"
    ]
  },
  {
    id: "elemental-spirit",
    vendor: "Light & Wonder",
    year: "2026",
    name: "Elemental Spirit",
    img: "elemental-spirit/screens/keyart.jpg",
    tags: ["Hold & Spin", "Cash on Reel", "狀態框", "收集", "乘倍", "4支彩金", "雙版本"],
    symbols: [
      { name: "WILD", role: "百搭。", img: "" },
      { name: "SCATTER", role: "分 3 色，對應該版本的狀態框顏色（版本一 藍／綠／紅，版本二 藍／紫／紅）。", img: "" },
      { name: "BALL", role: "帶分數／彩金的球，是 Hold & Spin 的收集標的；進入特色前，畫面上所有 BALL 會先收集成 1 顆，集滿 15 顆 BALL 得 GRAND。", img: "" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "3×5 LINE GAME；SCATTER 分 3 色，對應該版本的狀態框顏色。M獎採堆疊符號（stacked symbols）設計，同一轉軸可整堆出現相同符號。", img: "elemental-spirit/clips/es-bg-1.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=157" },
          { text: "共 4 支彩金：GRAND、MAJOR（累積彩金），MINOR、MINI（固定彩金）；GRAND 由集滿 15 顆 BALL 取得，MINOR／MINI 於 Hold & Spin 中取得。", img: "", yt: "" }
        ]
      },
      {
        type: "HOLD & SPIN",
        name: "狀態框特色（Frames）",
        steps: [
          { text: "進入特色前所有 BALL 先收集成 1 顆。各狀態框（Frame）特色皆為 Hold & Spin、倒數 3 場；隨機灑入 3 個同色狀態框，BALL 停在框中即觸發該框作用，集滿 15 顆 BALL 得 GRAND。", img: "elemental-spirit/clips/es-bg-2.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=1147" },
          { text: "分兩版本：版本一為藍框 Absorbing／綠框 Multiplier／紅框 Exploding；版本二為藍框 Absorbing／紫框 Twisting／紅框 Exploding。", img: "", yt: "" }
        ]
      },
      {
        type: "HOLD & SPIN",
        name: "Absorbing Frames（藍框）",
        steps: [
          { text: "BALL 停在藍框中，藍框以漩渦收集所有藍框外的 BALL。", img: "elemental-spirit/clips/es-absorbing-1.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=1151" },
          { text: "被收集的 BALL 帶分數或彩金，過程中可命中 MINI／MINOR 固定彩金。", img: "elemental-spirit/clips/es-absorbing-2.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=1177" },
          { text: "藍框在其他藍框作用完後才消失，收集可持續多輪。", img: "elemental-spirit/clips/es-absorbing-3.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=1201" }
        ]
      },
      {
        type: "HOLD & SPIN",
        name: "Multiplier Frames（綠框・版本一）",
        steps: [
          { text: "BALL 停在綠框中乘上隨機倍率，並向外灑出隨機倍率到轉輪或其他 BALL。", img: "elemental-spirit/clips/es-multiplier-1.webm", yt: "https://youtu.be/lvv9e10qi9E?t=15" }
        ]
      },
      {
        type: "HOLD & SPIN",
        name: "Exploding Frames（紅框）",
        steps: [
          { text: "BALL 停在紅框中，向外灑出 BALL 到轉輪或其他 BALL。", img: "elemental-spirit/clips/es-exploding-1.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=780" }
        ]
      },
      {
        type: "HOLD & SPIN",
        name: "Twisting Frames（紫框・版本二）",
        steps: [
          { text: "BALL 停在紫框中隨機加倍（加倍次數隨機），並向外灑出特效框到轉輪或其他 BALL。", img: "elemental-spirit/clips/es-twisting-1.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=1275" }
        ]
      }
    ],
    help: []
  },
  {
    id: "imperial-link",
    hidden: true,
    vendor: "Aristocrat",
    year: "2026",
    name: "Imperial Link",
    img: "imperial-link/screens/cover.jpg",
    tags: ["Hold & Spin", "Link", "GinG", "5支彩金", "分數球", "雙版本"],
    symbols: [
      { name: "SCATTER", role: "集滿 3 個以上觸發 6 場免費遊戲，可 retrigger。", img: "imperial-link/symbols/sc.jpg" },
      { name: "金牛頭", role: "與分數球合計 6 個以上進入 Hold & Spin；H&S 中出現金牛頭觸發金牛頭 GinG。", img: "imperial-link/symbols/bull-gold.png" },
      { name: "紫牛頭", role: "與分數球合計 6 個以上進入 Hold & Spin；H&S 中出現紫牛頭觸發紫牛頭 GinG。", img: "imperial-link/symbols/bull-purple.png" },
      { name: "分數球", role: "隨機帶分數或彩金，是 Hold & Spin 的收集標的。", img: "imperial-link/symbols/score-ball.jpg" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "3×5 LINE GAME，5／25／50 線（隨 denom 改變）。雙版本：SKIN 與免費遊戲玩法不同。", img: "imperial-link/clips/il-bg-1.webm", yt: "https://youtu.be/3flismP7RSA?t=286" },
          { text: "固定觸發：盤面出現分數球（含牛頭）共 6 顆以上，即進入 Hold & Spin 特色。", img: "imperial-link/clips/il-bg-2.webm", yt: "https://youtu.be/Bw3PUO4euEE?t=452" },
          { text: "5 支彩金：GRAND／IMPERIAL／MAJOR（累積彩金），MINOR／MINI（固定彩金）；H&S 滿盤拿 GRAND，牛頭 GinG 滿盤拿 IMPERIAL。", img: "imperial-link/screens/jackpots.jpg", yt: "" },
          { text: "集滿 3 個以上 SCATTER 觸發 6 場免費遊戲。", img: "imperial-link/clips/il-bg-4.webm", yt: "https://youtu.be/JbgBDQ75Fuo?t=798" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "Hold & Spin",
        steps: [
          { text: "3×5 盤面、固定 3 場；6 顆以上分數球固定觸發。每出現新的任意標誌，RESPIN 次數重置回 3。", img: "imperial-link/clips/il-hs-1.webm", yt: "https://youtu.be/JbgBDQ75Fuo?t=1333" },
          { text: "滿盤獲得 GRAND；過程中可中 MAJOR／MINOR／MINI。", img: "imperial-link/clips/il-bg-2.webm", yt: "https://youtu.be/Bw3PUO4euEE?t=452" },
          { text: "H&S 中出現金／紫牛頭即觸發對應的 GinG（見下方分區）。", img: "imperial-link/clips/il-hs-3.webm", yt: "https://youtu.be/JbgBDQ75Fuo?t=974" }
        ]
      },
      {
        type: "GAME IN GAME",
        name: "金牛頭",
        steps: [
          { text: "獨立 10 格盤面，其中 4 格為鎖定轉輪；固定 3 場，出球則 RESPIN 回 3。", img: "imperial-link/clips/il-gg-1.webm", yt: "https://youtu.be/JbgBDQ75Fuo?t=985" },
          { text: "中間轉輪只隨機出現金／紫牛頭；出現金牛頭解鎖 1 格鎖定轉輪。", img: "imperial-link/clips/il-gg-2.webm", yt: "https://youtu.be/JbgBDQ75Fuo?t=1003" },
          { text: "滿盤獲得 IMPERIAL JP。", img: "", yt: "" }
        ]
      },
      {
        type: "GAME IN GAME",
        name: "紫牛頭",
        steps: [
          { text: "獨立 10 格盤面；固定 3 場，出球則 RESPIN 回 3。", img: "imperial-link/clips/il-gp-1.webm", yt: "https://youtu.be/3flismP7RSA?t=974" },
          { text: "紫牛頭固定在中間轉輪；特色結束時重複收分。", img: "imperial-link/clips/il-gp-2.webm", yt: "https://youtu.be/3flismP7RSA?t=998" },
          { text: "滿盤獲得 IMPERIAL JP。", img: "", yt: "" }
        ]
      },
      {
        type: "FREE GAME",
        steps: [
          { text: "由 3 個以上 SCATTER 觸發 6 場、可 retrigger；雙版本的免費遊戲玩法不同（下列兩種）。", img: "imperial-link/clips/il-fg-1.webm", yt: "https://youtu.be/JbgBDQ75Fuo?t=795" },
          { text: "黏性分數球：分數球會黏著，每次 SPIN 往下移一格。", img: "imperial-link/clips/il-fg-2.webm", yt: "https://youtu.be/JbgBDQ75Fuo?t=821" },
          { text: "Mystery：開出相同 symbol，內容為一般獎項標誌或分數球。", img: "imperial-link/clips/il-fg-3.webm", yt: "https://youtu.be/aUQUbu6UEEE?t=462" }
        ]
      }
    ],
    help: [
      "imperial-link/HELP/help-01.jpg",
      "imperial-link/HELP/help-02.jpg",
      "imperial-link/HELP/help-03.jpg",
      "imperial-link/HELP/help-04.jpg",
      "imperial-link/HELP/help-05.jpg",
      "imperial-link/HELP/help-06.jpg",
      "imperial-link/HELP/help-07.jpg"
    ]
  },
  {
    id: "crazy-chickens-in-space",
    hidden: true,
    vendor: "Aristocrat",
    year: "2026",
    name: "Crazy Chickens in Space",
    img: "crazy-chickens-in-space/screens/keyart.png",
    tags: ["Hold & Spin", "Cash on Reel", "盤面延展", "乘倍", "收集", "2支彩金"],
    symbols: [
      { name: "綠星球", role: "落在主盤時在上方加 1～3 列 Instant Win 加列並觸發對應特色，之後轉為金幣；亦帶分數獎[[50～2000 credits × bet，bought game 才出現]]。", img: "crazy-chickens-in-space/symbols/green-planet.png" },
      { name: "紅星球", role: "落在主盤時在上方加 1～3 列 Boosters 加列並觸發對應特色，之後轉為金幣；亦帶分數獎[[50～2000 credits × bet，bought game 才出現]]。", img: "crazy-chickens-in-space/symbols/red-planet.png" },
      { name: "藍星球", role: "落在主盤時在上方加 1～3 列 Multipliers 加列並觸發對應特色，之後轉為金幣；亦帶分數獎[[50～2000 credits × bet，bought game 才出現]]。", img: "crazy-chickens-in-space/symbols/blue-planet.png" },
      { name: "BOOSTERS", role: "出現在 Boosters 加列；揭示隨機分數獎[[50～1000 credits × bet]]，派給同一直行所有 held 金幣。", img: "crazy-chickens-in-space/symbols/boosters.png" },
      { name: "乘倍", role: "出現在 Multipliers 加列；X2 使同一直行 held 金幣分值 ×2（每列最多 4 次），X3 ×3（每列最多 1 次）。", img: "crazy-chickens-in-space/symbols/multiplier.png" },
      { name: "INSTANT WIN", role: "出現在 Instant Win 加列；收取同一直行所有 held 金幣的分值。", img: "crazy-chickens-in-space/symbols/instant-win.png" },
      { name: "WIN ALL", role: "出現在 Instant Win 加列；收取全盤所有 held 金幣的分值（每次 SPIN 限一軸出現）。", img: "crazy-chickens-in-space/symbols/win-all.png" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "主盤 5×3、50 線。彩金 GRAND、MAJOR（皆累積彩金）。", img: "crazy-chickens-in-space/screens/cover.jpg", yt: "" },
          { text: "主盤上方設有 BONUS line；紅／藍／綠雞（星球）累積抵達 BONUS line 即觸發 Crazy Chickens in Space 系列特色。", img: "", yt: "" },
          { text: "共 7 種特色組合：Instant Win／Multipliers／Boosters 三種單獨，及其兩兩、三合一組合，依觸發的星球顏色決定。", img: "", yt: "" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "Crazy Chickens in Space",
        steps: [
          { text: "初始給 3 次免費 SPIN。依觸發顏色在主盤上方加上加列，由上而下：Boosters（紅）→ Multipliers（藍）→ Instant Win（綠），每種最多 3 列。", img: "crazy-chickens-in-space/HELP/help-03.jpg", yt: "" },
          { text: "紅／藍／綠星球落在主盤：分別增加對應加列並轉為金幣（held、保留分值）。金幣、GRAND、MAJOR 落在主盤會把剩餘 SPIN 重置回 3。", img: "crazy-chickens-in-space/HELP/help-04.jpg", yt: "" },
          { text: "Boosters（紅列）：BOOSTERS 符號揭示隨機獎[[50～1000 credits × bet]]，派給同一直行所有 held 金幣。", img: "crazy-chickens-in-space/HELP/help-05.jpg", yt: "" },
          { text: "Multipliers（藍列）：X2 使同一直行 held 金幣分值 ×2（每列最多 4 次）；X3 ×3（每列最多 1 次）。", img: "crazy-chickens-in-space/HELP/help-06.jpg", yt: "" },
          { text: "Instant Win（綠列）：INSTANT WIN 收同一直行所有 held 金幣；WIN ALL 收全盤所有 held 金幣（每次 SPIN 限一軸出現）。", img: "crazy-chickens-in-space/HELP/help-07.jpg", yt: "" },
          { text: "主盤填滿 15 格得 GRAND。SPIN 用完或主盤填滿即結束，所有金幣分值一次派發。", img: "", yt: "" }
        ]
      }
    ],
    help: [
      "crazy-chickens-in-space/HELP/paytable.jpg",
      "crazy-chickens-in-space/HELP/help-01.jpg",
      "crazy-chickens-in-space/HELP/help-02.jpg",
      "crazy-chickens-in-space/HELP/help-03.jpg",
      "crazy-chickens-in-space/HELP/help-04.jpg",
      "crazy-chickens-in-space/HELP/help-05.jpg",
      "crazy-chickens-in-space/HELP/help-06.jpg",
      "crazy-chickens-in-space/HELP/help-07.jpg",
      "crazy-chickens-in-space/HELP/help-08.jpg",
      "crazy-chickens-in-space/HELP/help-09.jpg"
    ]
  },
  {
    id: "cash-wizard-magic-trio",
    hidden: true,
    vendor: "Light & Wonder",
    year: "2026",
    name: "Cash Wizard Magic Trio",
    img: "cash-wizard-magic-trio/cover.jpg",
    tags: ["4608 Ways", "Cash on Reel", "Magic Falls", "三特色", "收集", "分數球", "4支彩金", "FreeGame"],
    desc: "Cash Wizard 系列新作（Brainsaw Studios）：4608 Ways、以 Coin 逐軸保留填盤觸發 Magic Falls；免費遊戲為 Dusty／Baby Magic／Cash Wizard 三特色（Trio）及其組合。規格取自機台 HELP。",
    symbols: [
      { name: "Coin（分數球）", role: "顯示分數[[25–5000x bet multiplier]]或 JACKPOT。落在某軸時，該軸上所有 Coin 保留（held）接下來 3 次 SPIN（同投注與幣值），軸底顯示剩餘保留次數；落在 Coin 後方的符號不計分。", img: "cash-wizard-magic-trio/symbols/coin.png" },
      { name: "Dusty（獨角獸）", role: "特色符號。出現時在非保留位置隨機增加[[2–11 個]]Coin。", img: "cash-wizard-magic-trio/symbols/dusty.png" },
      { name: "Baby Magic（綠精靈）", role: "特色符號。出現時為場上每個 Coin 額外加上最多 5 筆分數[[25–500x bet multiplier]]（顯示 JACKPOT 的 Coin 不加）。", img: "cash-wizard-magic-trio/symbols/baby-magic.png" },
      { name: "Cash Wizard（藍精靈）", role: "特色符號。出現時立即派發場上每個 Coin 顯示的獎，JACKPOT 派發 MEGA／MAJOR／MINOR／MINI。", img: "cash-wizard-magic-trio/symbols/cash-wizard.png" },
      { name: "WILD", role: "只出現在第 2、3、4 軸；替代一般賠付標誌（不替代 Coin 與特色符號）。", img: "cash-wizard-magic-trio/symbols/wild.png" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "5 軸、4608 Ways 玩法。[[最低投注 75 credits × bet multiplier；幣值 1¢／2¢／5¢／10¢，投注等級 75／150／225／375／600 credits]]", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-base-coins-held.webm", yt: "https://youtu.be/atpqyg6DrqY?t=21" },
          { text: "Coin 顯示分數或 JACKPOT。Coin 落在某軸時，該軸所有 Coin 保留 3 次 SPIN，軸底以計數顯示剩餘保留次數。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-coin-hold.webm", yt: "https://youtu.be/NFas1fc9Qyo?t=223" },
          { text: "Magic Falls：當某一軸每個位置都被 Coin 填滿，該軸觸發 Magic Falls，派發該軸所有 Coin 顯示的獎；派發後該軸 Coin 解除保留。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-magic-falls-reel.webm", yt: "https://youtu.be/NFas1fc9Qyo?t=206" },
          { text: "Magic Falls 觸發時，若填滿的 Coin 中有 Feature Coin（Dusty／Baby Magic／Cash Wizard，分別對應粉／綠／藍），依組合依對應表觸發相應顏色的免費遊戲特色。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-feature-coin-fg.webm", yt: "https://youtu.be/NFas1fc9Qyo?t=479" },
          { text: "Magic Falls 觸發時，若填滿的 Coin 中有顯示 JACKPOT 的 Coin，播放彩金轉動畫面，決定派發 MEGA／MAJOR／MINOR／MINI 中的一項。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-jackpot-spin.webm", yt: "https://youtu.be/NFas1fc9Qyo?t=1188" },
          { text: "轉出對應顏色的鑽石時，往上打擊、判定是否觸發相應顏色的免費遊戲特色（打擊觸發）。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-diamond-strike.webm", yt: "https://youtu.be/NFas1fc9Qyo?t=235" },
          { text: "共 4 支彩金：MEGA／MAJOR（累積彩金）、MINOR／MINI（固定彩金）；MEGA 或 MAJOR 中獎時，先派發並重置對應 meter 再結算其餘獎。", img: "", yt: "" }
        ]
      },
      {
        type: "FREE GAME",
        name: "三特色 Trio",
        steps: [
          { text: "由 Dusty／Baby Magic／Cash Wizard 三特色之一或其組合觸發，獲得 8 次免費遊戲。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-free-games-trigger.webm", yt: "https://youtu.be/atpqyg6DrqY?t=191" },
          { text: "Dusty（獨角獸）：出現時在非保留位置隨機增加[[2–11 個]]Coin。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-fg-dusty.webm", yt: "https://youtu.be/NFas1fc9Qyo?t=538" },
          { text: "Cash Wizard（藍精靈）：出現時立即派發場上每個 Coin 顯示的獎，JACKPOT 派發 MEGA／MAJOR／MINOR／MINI。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-fg-cash-wizard-pay.webm", yt: "https://youtu.be/NFas1fc9Qyo?t=998" },
          { text: "Baby Magic（綠精靈）：出現時為場上每個 Coin 額外加上最多 5 筆分數[[25–500x bet multiplier]]（顯示 JACKPOT 的 Coin 不加）。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-fg-baby-magic.webm", yt: "https://youtu.be/NFas1fc9Qyo?t=1387" },
          { text: "免費遊戲中若觸發 Magic Falls，額外再加 2 次免費遊戲。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-fg-magic-falls.webm", yt: "https://youtu.be/NFas1fc9Qyo?t=397" },
          { text: "免費遊戲結束時，派發場上每個 Coin 顯示的獎（含 JACKPOT→MEGA／MAJOR／MINOR／MINI）；結束後回到進入免費遊戲前的基礎遊戲狀態。", img: "cash-wizard-magic-trio/clips/cash-wizard-magic-trio-fg-settle.webm", yt: "https://youtu.be/NFas1fc9Qyo?t=549" }
        ]
      }
    ],
    help: [
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-01.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-02.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-03.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-04.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-05.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-06.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-07.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-08.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-09.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-10.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-11.jpg",
      "cash-wizard-magic-trio/HELP/cash-wizard-magic-trio-help-12.jpg"
    ]
  },
  {
    id: "fo-mo-mummy",
    hidden: true,
    vendor: "Aristocrat",
    year: "2026",
    name: "Fo' Mo' Mummy（Ms. Mummy / Mr. Mummy）",
    img: "fo-mo-mummy/fo-mo-mummy-cover.webp",
    tags: ["Cash on Reel", "收集", "多特色", "盤面延展", "累積彩金"],
    symbols: [
      { name: "WILD", role: "百搭符號，取代所有一般標誌；不取代木乃伊與寶石。連線最高賠付[[5個=100]]。", img: "fo-mo-mummy/symbols/wild.png" },
      { name: "Ms. Mummy / Mr. Mummy（收集符號）", role: "本款兩位主角木乃伊，僅於 reel 1 出現。搭配寶石觸發對應 Mo' 特色；特色中於盤面移動、收取分數，並可升級放大收集範圍。", img: "fo-mo-mummy/symbols/mummy.png" },
      { name: "粉色寶石", role: "帶分數的寶石，搭配木乃伊觸發 Mo' Boosts；單獨出現時也可能隨機觸發。", img: "fo-mo-mummy/symbols/gem-pink.png" },
      { name: "綠色寶石", role: "帶分數的寶石，觸發 Mo' Spins；單獨出現時也可能隨機觸發。", img: "fo-mo-mummy/symbols/gem-green.png" },
      { name: "紅色寶石", role: "帶分數的寶石，觸發 Mo' Prizes；單獨出現時也可能隨機觸發。", img: "fo-mo-mummy/symbols/gem-red.png" },
      { name: "藍色寶石", role: "帶分數的寶石，觸發 Mo' Symbols；單獨出現時也可能隨機觸發。", img: "fo-mo-mummy/symbols/gem-blue.png" },
      { name: "彩色寶石（Multi-colour）", role: "可啟動任一或多個尚未啟動的 Mo' 特色。", img: "fo-mo-mummy/symbols/gem-multi.png" },
      { name: "Diamond（鑽石）", role: "只出現在特色中，由寶石轉換而成，保留原寶石的分數，供收集符號收取；可攜帶分數、彩金、+1 Spin 符號。", img: "fo-mo-mummy/symbols/diamond.png" },
      { name: "Ankh（安卡）", role: "只出現在特色中，可攜帶分數、彩金、+1 Spin 符號，落在收集符號範圍內即被收取。", img: "fo-mo-mummy/symbols/ankh.png" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "5×3 盤面、25 線。粉／綠／紅／藍四色寶石帶分數落在盤面。", img: "fo-mo-mummy/clips/fo-mo-mummy-base-1.webm", yt: "https://www.youtube.com/watch?v=8cNHd9Hyzqk&t=580s" },
          { text: "寶石搭配木乃伊出現即觸發對應的 Mo' 特色；盤面出現寶石而無收集符號時，也可能隨機觸發該色特色。", img: "fo-mo-mummy/clips/fo-mo-mummy-base-2.webm", yt: "https://www.youtube.com/watch?v=jJYtlp19OIA&t=109s" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "Mo' Features",
        steps: [
          { text: "特色於 5×5 盤面進行，初始給予 5 次 SPIN；觸發的寶石轉為 diamond 並保留分數。", img: "fo-mo-mummy/clips/fo-mo-mummy-feat-start.webm", yt: "https://www.youtube.com/watch?v=dbgGg7X9HCc&t=1160s" },
          { text: "粉＝Mo' Boosts：特色進行中隨機為 diamond／ankh 追加額外分數。", img: "fo-mo-mummy/clips/fo-mo-mummy-feat-boosts.webm", yt: "https://www.youtube.com/watch?v=hJNcHvZolVo&t=563s" },
          { text: "綠＝Mo' Spins：出現 +1 SPIN 類符號，收集時延長回合。", img: "fo-mo-mummy/clips/fo-mo-mummy-feat-spins.webm", yt: "https://www.youtube.com/watch?v=jJYtlp19OIA&t=374s" },
          { text: "紅＝Mo' Prizes：於空位隨機補上帶分數的 diamond／寶石。", img: "fo-mo-mummy/clips/fo-mo-mummy-feat-prizes.webm", yt: "https://www.youtube.com/watch?v=jJYtlp19OIA&t=198s" },
          { text: "藍＝Mo' Symbols：在同一個轉輪中隨機出現兩個以上鑽石／寶石／安卡。", img: "fo-mo-mummy/clips/fo-mo-mummy-feat-symbols.webm", yt: "https://www.youtube.com/watch?v=0f7B6O9_Jko&t=586s" },
          { text: "四種 Mo' 特色可同時啟動；每啟動一個未啟動的特色可再得 1 次 SPIN。", img: "fo-mo-mummy/clips/fo-mo-mummy-feat-allactive.webm", yt: "https://www.youtube.com/watch?v=dbgGg7X9HCc&t=639s" },
          { text: "木乃伊收集符號在盤面上移動，收取 diamond 與 ankh 上的分數；收集範圍自 2×2 起，收滿 5／4／3 顆 diamond 依序升為 3×3／4×4／5×5，並分別加 3／2／1 次 SPIN。寶石與 diamond 上可隨機攜帶 Grand／Major／Maxi（累積彩金）或 Minor／Mini（固定彩金）。", img: "fo-mo-mummy/clips/fo-mo-mummy-feat-collect.webm", yt: "https://www.youtube.com/watch?v=0IrTTLg-IVo&t=1469s" }
        ]
      },
      {
        type: "版本差異",
        name: "Ms. Mummy／Mr. Mummy",
        steps: [
          { text: "兩版共用 Mo' 特色核心，差在收集符號角色與招牌效果。Ms. Mummy（粉）版：升級版 Ms. Mummy 在場時，寶箱可出現在其範圍內空位，翻出最多 5 個 diamond 或 ankh（寶箱隨機開獎），獎項[[2～50 × Total Bet、Mini 或 Minor]]，Mo' Spins 啟動時另可開出 +1～+3 SPIN。", img: "fo-mo-mummy/clips/fo-mo-mummy-diff-ms.webm", yt: "https://www.youtube.com/watch?v=jJYtlp19OIA&t=226s" },
          { text: "Mr. Mummy（法老）版：收集符號帶乘倍效果，其範圍內收取的分數依當次 SPIN 乘倍加乘（畫面顯示如「3X THIS SPIN」的乘倍框）。", img: "fo-mo-mummy/clips/fo-mo-mummy-diff-mr.webm", yt: "https://www.youtube.com/watch?v=LM5TDGr1DC8&t=1170s" }
        ]
      }
    ],
    help: [
      "fo-mo-mummy/HELP/fo-mo-mummy-help-01.jpg",
      "fo-mo-mummy/HELP/fo-mo-mummy-help-02.jpg",
      "fo-mo-mummy/HELP/fo-mo-mummy-help-03.jpg",
      "fo-mo-mummy/HELP/fo-mo-mummy-help-04.jpg",
      "fo-mo-mummy/HELP/fo-mo-mummy-help-05.jpg",
      "fo-mo-mummy/HELP/fo-mo-mummy-help-06.jpg",
      "fo-mo-mummy/HELP/fo-mo-mummy-help-07.jpg",
      "fo-mo-mummy/HELP/fo-mo-mummy-help-08.jpg",
      "fo-mo-mummy/HELP/fo-mo-mummy-help-09.jpg",
      "fo-mo-mummy/HELP/fo-mo-mummy-help-10.jpg",
      "fo-mo-mummy/HELP/fo-mo-mummy-help-11.jpg"
    ]
  },
  {
    id: "tiger-and-dragon-cash-on-reels",
    hidden: true,
    vendor: "IGT",
    year: "2023",
    name: "Tiger and Dragon: Cash on Reels",
    img: "tiger-and-dragon-cash-on-reels/cover.jpg",
    tags: ["243 Ways", "Cash on Reel", "三特色", "累積彩金", "打擊觸發"],
    desc: "IGT 中國風機台，243 ways；Coin 符號每 SPIN 顯示分數或轉換值，搭配 Tiger／Dragon 兩個特色符號分別觸發 Tiger Bonus／Dragon Bonus，兩者組合可觸發 Tiger and Dragon Bonus 並挑戰單一累積 JACKPOT。規格取自機台 HELP（© 2023 IGT；上市年份與 JACKPOT 是否為累積彩金待進一步確認）。",
    symbols: [
      { name: "Tiger（老虎）", role: "3 個觸發 Tiger Bonus；1 或 2 個時可能隨機觸發。與 Dragon 任意組合 5 個觸發 Tiger and Dragon Bonus。", img: "tiger-and-dragon-cash-on-reels/symbols/tiger.jpg" },
      { name: "Dragon（龍）", role: "3 個觸發 Dragon Bonus；1 或 2 個時可能隨機觸發。與 Tiger 任意組合 5 個觸發 Tiger and Dragon Bonus。", img: "tiger-and-dragon-cash-on-reels/symbols/dragon.jpg" },
      { name: "Coin（金幣）", role: "基本遊戲每次 SPIN 後，盤面上每個 Coin 顯示[[1–99 分數]]或 Up Arrow；2 個以上橫向相鄰的 Coin 群組會結算派彩。三個 Bonus 中皆只使用 Coin 符號進行特色 SPIN。未中 MultiWay 賠付的 SPIN 有機率隨機觸發 Mystery Gong，額外加派 1 個以上 Coin（不會疊加在既有 Coin／Tiger／Dragon 位置）。", img: "tiger-and-dragon-cash-on-reels/symbols/coin.png" },
      { name: "Up Arrow（藍色箭頭）", role: "Coin 群組結算時可能出現在群組中；派彩結算時轉換為 0，並為群組最左側數值加上[[1–90]]。每個群組最多允許 1 個雙位數值或 1 個 Up Arrow（5 格群組）／最多 3 個 Up Arrow 或 2 個雙位數值（4 格群組）；不會出現在群組最左側位置。", img: "tiger-and-dragon-cash-on-reels/symbols/up-arrow.jpg" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "5 軸 243 ways 玩法；每次 SPIN 後，盤面上每個 Coin 顯示[[1–99 分數]]或 Up Arrow。", img: "tiger-and-dragon-cash-on-reels/clips/tiger-and-dragon-cash-on-reels-base-game.webm", yt: "https://youtu.be/Tivg2acvgnM?t=333" },
          { text: "未中 MultiWay 賠付的 SPIN，有機率隨機觸發 Mystery Gong：額外在盤面加派 1 個以上 Coin（不會疊加在既有 Coin、Dragon、Tiger 符號位置）。", img: "", yt: "" },
          { text: "3 個 Tiger 觸發 Tiger Bonus；3 個 Dragon 觸發 Dragon Bonus；任意組合 5 個 Tiger＋Dragon 觸發 Tiger and Dragon Bonus（1 或 2 個時皆可能隨機觸發對應特色）。", img: "", yt: "" },
          { text: "2 個以上橫向相鄰的 Coin 群組結算：每格顯示[[1–99 分數]]或 Up Arrow，Up Arrow 轉換為 0 並為群組最左側數值加上[[1–90]]，最終由左到右讀出總分派彩。", img: "", yt: "" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "Tiger Bonus",
        steps: [
          { text: "觸發後獲得 3 次特色 SPIN；每個解鎖位置各自為獨立轉軸，特色 SPIN 中只會出現 Coin 符號。", img: "tiger-and-dragon-cash-on-reels/clips/tiger-and-dragon-cash-on-reels-tiger-bonus-trigger.webm", yt: "https://www.youtube.com/shorts/RhY_jy6r_vo?t=30" },
          { text: "任一解鎖轉軸出現 Coin 時，特色 SPIN 剩餘次數重置為 3，該軸上的 Coin 鎖定至特色結束；若所有轉軸皆鎖定，剩餘 SPIN 不再進行。", img: "tiger-and-dragon-cash-on-reels/clips/tiger-and-dragon-cash-on-reels-tiger-bonus-lock.webm", yt: "https://www.youtube.com/shorts/RhY_jy6r_vo?t=42" },
          { text: "SPIN 用完或所有轉軸鎖定後，依 Coin 群組規則結算派彩，Tiger Bonus 結束。", img: "tiger-and-dragon-cash-on-reels/clips/tiger-and-dragon-cash-on-reels-tiger-bonus-settle.webm", yt: "https://www.youtube.com/shorts/RhY_jy6r_vo?t=96" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "Dragon Bonus",
        steps: [
          { text: "觸發後獲得 1 次特色 SPIN；同樣以解鎖位置為獨立轉軸，SPIN 中只會出現 Coin 符號。", img: "tiger-and-dragon-cash-on-reels/clips/tiger-and-dragon-cash-on-reels-dragon-bonus-fill.webm", yt: "https://www.youtube.com/shorts/6R4FHK9DXcg?t=10" },
          { text: "特色 SPIN 結束後，直接依 Coin 群組規則結算派彩，Dragon Bonus 結束。", img: "tiger-and-dragon-cash-on-reels/clips/tiger-and-dragon-cash-on-reels-dragon-bonus-reveal.webm", yt: "https://www.youtube.com/shorts/6R4FHK9DXcg?t=33" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "Tiger and Dragon Bonus（含 JACKPOT）",
        steps: [
          { text: "觸發後獲得 3 次特色 SPIN；開局解鎖第 1～3 列，其餘列須在已解鎖列中累計收集 6／9／14／19／25 個 Coin 才依序解鎖第 4～8 列。", img: "tiger-and-dragon-cash-on-reels/clips/tiger-and-dragon-cash-on-reels-td-bonus-lock.webm", yt: "https://youtu.be/Tivg2acvgnM?t=59" },
          { text: "已解鎖列中的解鎖轉軸出現 Coin 時，特色 SPIN 剩餘次數重置為 3，該次出現的 Coin 數計入各列鎖頭計量，且全列（不分是否解鎖）出現 Coin 的位置皆鎖定至特色結束。", img: "tiger-and-dragon-cash-on-reels/clips/tiger-and-dragon-cash-on-reels-td-bonus-rows.webm", yt: "https://youtu.be/Tivg2acvgnM?t=71" },
          { text: "已解鎖列中累計出現 32 個 Coin 時，中 JACKPOT（單一累積彩金）。", img: "tiger-and-dragon-cash-on-reels/screens/td-bonus-jackpot-progress.jpg", yt: "https://youtu.be/Tivg2acvgnM?t=112" },
          { text: "SPIN 用完或所有轉軸鎖定後，依 Coin 群組規則結算派彩，Tiger and Dragon Bonus 結束。", img: "tiger-and-dragon-cash-on-reels/clips/tiger-and-dragon-cash-on-reels-td-bonus-settle.webm", yt: "https://youtu.be/Tivg2acvgnM?t=189" }
        ]
      }
    ],
    help: [
      "tiger-and-dragon-cash-on-reels/HELP/tiger-and-dragon-cash-on-reels-help-01.jpg",
      "tiger-and-dragon-cash-on-reels/HELP/tiger-and-dragon-cash-on-reels-help-02.jpg",
      "tiger-and-dragon-cash-on-reels/HELP/tiger-and-dragon-cash-on-reels-help-03.jpg",
      "tiger-and-dragon-cash-on-reels/HELP/tiger-and-dragon-cash-on-reels-help-04.jpg",
      "tiger-and-dragon-cash-on-reels/HELP/tiger-and-dragon-cash-on-reels-help-05.jpg",
      "tiger-and-dragon-cash-on-reels/HELP/tiger-and-dragon-cash-on-reels-help-06.jpg",
      "tiger-and-dragon-cash-on-reels/HELP/tiger-and-dragon-cash-on-reels-help-07.jpg"
    ]
  },
  {
    id: "triple-flip-empress",
    hidden: true,
    vendor: "Aristocrat",
    year: "2026",
    name: "Triple Flip Empress",
    img: "",
    tags: ["243 Ways", "H&S", "三色能力", "組合特色", "Dragon Feature", "5支彩金"],
    desc: "Aristocrat 新機（實機拍攝地 Atlantis Reno）：243 ways；藍/紅/綠三色分數球各帶一種能力（加分／開紅包／乘倍），7 種特色共用同一套 H&S 框架，差別只在場上開了哪幾色能力；特色結算時分數球夠多再加開 Game in Game 的 Dragon Feature。規格取自機台 HELP；封面待補（無官方公開素材可查）。",
    symbols: [
      { name: "WILD（鞭炮）", role: "只出現在第 2、3、4 軸；替代除六色 Coin 外的所有符號。", img: "triple-flip-empress/symbols/wild.png" },
      { name: "Happy Coin（藍）", role: "藍色分數球，能力＝加分；觸發／參與 HAPPY 系列特色。同色兩款合計最多出現 5 顆。", img: "triple-flip-empress/symbols/happy-coin.png" },
      { name: "Lucky Coin（紅）", role: "紅色分數球，能力＝開紅包；觸發／參與 LUCKY 系列特色。同色兩款合計最多出現 5 顆。", img: "triple-flip-empress/symbols/lucky-coin.png" },
      { name: "Fortune Coin（綠）", role: "綠色分數球，能力＝乘倍；觸發／參與 FORTUNE 系列特色。同色兩款合計最多出現 5 顆。", img: "triple-flip-empress/symbols/fortune-coin.png" },
      { name: "Dragon Coin（金）", role: "僅出現於 DRAGON FEATURE；落下計入 DRAGON PRIZE 計量表，達 8 個可能轉出 MAJOR（累積彩金）。", img: "" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "5 軸、243 ways 玩法；WILD 只出現在第 2、3、4 軸。[[最低投注 88 credits，BET ×1／×2／×3／×6／×10]]", img: "triple-flip-empress/clips/triple-flip-empress-base-game.jpg", yt: "https://youtu.be/yDqWA0d7SfE?t=38" },
          { text: "轉出分數球即打擊觸發，判定是否觸發該色特色：藍＝HAPPY（加分）、紅＝LUCKY（開紅包）、綠＝FORTUNE（乘倍）；球上顯示分數或固定彩金。[[分數依投注檔 38～888 至 398～10888；MINI＝1088、MINOR＝2888、MAXI＝10880，固定彩金不吃 bet multiplier]]", img: "triple-flip-empress/clips/triple-flip-empress-coin-hit-trigger.webm", yt: "https://youtu.be/yDqWA0d7SfE?t=46" },
          { text: "共 5 支彩金：GRAND／MAJOR（累積彩金）、MINI／MINOR／MAXI（固定彩金）。", img: "triple-flip-empress/clips/triple-flip-empress-jackpots.jpg", yt: "https://youtu.be/KBojhjCD5Ac?t=8" }
        ]
      },
      {
        type: "FEATURE GAME",
        steps: [
          { text: "Hold & Spin 玩法，倒數 3 場；分數球一定帶有特色顏色。", img: "triple-flip-empress/clips/triple-flip-empress-feature-hold-spin.webm", yt: "https://youtu.be/KBojhjCD5Ac?t=1349" },
          { text: "HAPPY（藍）＝加分：上螢幕有一排加分層，亮著的那層就是這次要加的分數。剛進特色、還沒開始轉之前，觸發畫面上的藍球先結算，把當前這層的分數加上去；這層用完就變暗，下一次從上一層開始。[[層 1～5＝+100／+200／+350／+500／+1000 × bet multiplier；影片為 BETx10，畫面顯示 +1000～+10000]]", img: "triple-flip-empress/clips/triple-flip-empress-happy-start.webm", yt: "https://youtu.be/KBojhjCD5Ac?t=1301" },
          { text: "特色進行中每轉出一顆藍球，就用掉當前這層、下一次再往上推一層。當前層的分數一定會加到剛轉出的那顆藍球上，場上其他球（含紅、綠）也可能跟著加同一層分數。同一顆藍球最多被加 3 次，紅、綠球各最多 2 次。", img: "triple-flip-empress/clips/triple-flip-empress-happy-boost.webm", yt: "https://youtu.be/KBojhjCD5Ac?t=1338" },
          { text: "LUCKY（紅）＝開紅包：上螢幕中間那排是紅包，由下往上分別裝 1、2、3、4、5 個獎。剛進特色、還沒開始轉之前，觸發畫面上的紅球先開當前這個紅包，裡面有幾個就給幾個獎；開完就變暗，下一次從上一個紅包開始。", img: "triple-flip-empress/clips/triple-flip-empress-lucky-start.webm", yt: "https://youtu.be/KBojhjCD5Ac?t=1696" },
          { text: "特色進行中每轉出一顆紅球，就開掉當前這個紅包、下一次再往上推一個，越後面開到的紅包裝的獎越多。紅包裡開出的可能是：JACKPOT BOOST（把這回合的 MINI／MINOR／MAXI 墊高，特色結束回復）、JACKPOT COIN（直接給 MINI／MINOR／MAXI × bet multiplier）、DRAGON（指定一格，該格的球轉成同色另一款）、各色分數球（往空格補一顆；補到紅球時會再開掉下一個紅包）、EXTRA SPIN（把「重置場數」加 1，之後每次重置都多一場）；同一個紅包裡可能開出重複的獎。[[JACKPOT BOOST 每次 MINI +100–300、MINOR +400–600、MAXI +1000–2000]]", img: "triple-flip-empress/clips/triple-flip-empress-lucky-envelope.webm", yt: "https://youtu.be/KBojhjCD5Ac?t=1765" },
          { text: "FORTUNE（綠）＝乘倍：上螢幕右邊那排是乘倍層，由下往上是 ×2、×3、×4、×5、×10。剛進特色、還沒開始轉之前，觸發畫面上的綠球先用掉當前這層，在球底下掛一個倍率標記（球上的分數不變，結算時才乘）；這層用完就變暗，下一次從上一層開始。", img: "triple-flip-empress/clips/triple-flip-empress-fortune-start.webm", yt: "https://youtu.be/KBojhjCD5Ac?t=491" },
          { text: "特色進行中每轉出一顆綠球，就用掉當前這層、下一次再往上推一層。倍率一定會掛到剛轉出的那顆綠球上，場上其他球（含藍、紅）也可能跟著掛同一層的倍率。同一顆綠球最多疊 3 次，藍、紅球各最多 2 次；同一顆球疊到多個倍率是相加、不是相乘——吃到 ×2 再吃 ×3 等於 ×5。", img: "triple-flip-empress/clips/triple-flip-empress-fortune-multiply.webm", yt: "https://youtu.be/KBojhjCD5Ac?t=575" },
          { text: "雙色、三色的組合特色只是同一場開了多種能力，玩法與單色特色完全相同；同一次 SPIN 內依序結算：先紅（開紅包）→ 再藍（加分）→ 最後綠（乘倍）。", img: "", yt: "" },
          { text: "特色中落下尚未參與的顏色即內部觸發、就地升級為對應組合（例：FORTUNE 中落紅球 → 升級 LUCKY FORTUNE）；HAPPY LUCKY FORTUNE 已是最高組合，之後只會再開 Dragon Feature。", img: "", yt: "" },
          { text: "SPIN 用完或中 GRAND 即結束，結束時一次派發場上所有分數球顯示的獎；特色期間不計連線派彩。特色中累計收集 14 顆分數球後，第 15 格有機會轉出 GRAND（累積彩金，每次特色最多一次）。", img: "", yt: "" },
          { text: "結束結算時場上分數球達 6 顆以上，即固定觸發 Dragon Feature（見下）。", img: "", yt: "" }
        ]
      },
      {
        type: "GAME IN GAME",
        name: "Dragon Feature",
        steps: [
          { text: "任一特色結束結算時分數球達 6 顆以上觸發；轉場到獨立 3×3 盤面，原特色場上所有分數球的分值加總灌入 DRAGON PRIZE 計量表，初始 3 次 SPIN。", img: "", yt: "" },
          { text: "金色 Dragon Coin 落下即鎖定並重置剩餘 SPIN 為 3；每顆 Dragon Coin 各派發一次計量表的獎額——收越多顆，同一筆獎額領越多次。", img: "", yt: "" },
          { text: "累計 8 顆 Dragon Coin 後，第 9 格有機會轉出 MAJOR（累積彩金，每次 Dragon Feature 最多一次）。", img: "", yt: "" },
          { text: "SPIN 用完或中 MAJOR 即結束，轉回原本觸發的特色繼續；Dragon Feature 中不會再內部觸發其他特色。", img: "", yt: "" }
        ]
      }
    ],
    help: [
      "triple-flip-empress/HELP/triple-flip-empress-help-01.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-02.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-03.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-04.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-05.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-06.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-07.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-08.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-09.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-10.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-11.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-12.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-13.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-14.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-15.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-16.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-17.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-18.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-19.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-20.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-21.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-22.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-23.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-24.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-25.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-26.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-27.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-28.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-29.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-30.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-31.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-32.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-33.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-34.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-35.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-36.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-37.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-38.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-39.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-40.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-41.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-42.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-43.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-44.jpg",
      "triple-flip-empress/HELP/triple-flip-empress-help-45.jpg"
    ]
  },
  {
    id: "spicy-fortunes",
    hidden: true,
    vendor: "Aristocrat",
    year: "待確認",
    name: "Spicy Fortunes（Diamond Fiesta）",
    img: "spicy-fortunes/spicy-fortunes-cover.jpg",
    tags: ["Hold & Spin", "升級", "轉輪", "多特色", "累積彩金"],
    symbols: [
      { name: "WILD（戴帽辣椒）", role: "百搭符號，取代所有一般標誌；不取代鑽石。僅出現於 reel 2～5；同輪 2、3 個 WILD 參與連線時以雙疊／三疊呈現。", img: "spicy-fortunes/symbols/wild.png" },
      { name: "粉鑽", role: "觸發符號，任一顆或多顆即可打擊觸發 Extra Spins 特色；多特色同一 SPIN 觸發時合併進行。", img: "spicy-fortunes/symbols/gem-pink.png" },
      { name: "藍鑽", role: "觸發符號，觸發 Extra Pays 特色。", img: "spicy-fortunes/symbols/gem-blue.png" },
      { name: "綠鑽", role: "觸發符號，觸發 Extra Rows 特色。", img: "spicy-fortunes/symbols/gem-green.png" },
      { name: "複合彩鑽", role: "觸發符號，可觸發任一或多個特色。", img: "spicy-fortunes/symbols/gem-multi.png" },
      { name: "UPGRADE 鑽石", role: "特色中出現，隨機指定一顆辣椒升級一階（綠→黃→紅→鑽），不依等級高低。", img: "spicy-fortunes/symbols/upgrade.png" },
      { name: "綠辣椒", role: "帶獎符號，特色結束時開獎[[0.5～2 × total bet]]。圖左為一般（單顆）樣式、圖右為 Extra Pays 啟動時的（雙顆）樣式。", img: "spicy-fortunes/symbols/chili-green.png" },
      { name: "黃辣椒", role: "帶獎符號，開獎[[2.5～6 × total bet、Mini 或 Minor]]。圖左一般（單顆）、圖右 Extra Pays（雙顆）樣式。", img: "spicy-fortunes/symbols/chili-yellow.png" },
      { name: "紅辣椒", role: "帶獎符號，開獎[[7.5～50 × total bet、Major 或 Grand]]。圖左一般（單顆）、圖右 Extra Pays（雙顆）樣式。", img: "spicy-fortunes/symbols/chili-red.png" },
      { name: "鑽石辣椒", role: "最高階帶獎符號，開獎[[50～200 × total bet、Major 或 Grand]]；辣椒升級的最終階。", img: "spicy-fortunes/symbols/chili-diamond.png" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "3×5 盤面、25 線。WILD 堆疊符線延展；機台頂部三色意象物分別對應 Extra Spins／Extra Pays／Extra Rows 特色。", img: "spicy-fortunes/clips/spicy-fortunes-base-ww.webm", yt: "https://www.youtube.com/watch?v=6XAVjv3VfEk&t=421s" },
          { text: "基本遊戲中三色意象物立於盤面上方，盤面可落下複合彩鑽、單色鑽石等觸發符號。", img: "spicy-fortunes/clips/spicy-fortunes-gems.webm", yt: "https://www.youtube.com/watch?v=tIJFKP0e0yQ&t=710s" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "Spicy Fortunes 特色",
        steps: [
          { text: "任意單色鑽石或複合彩鑽打擊觸發特色，特色觸發後可獲得一次轉輪機會，轉輪可加開其他特色、彩金或 Super Spicy Wheel。", img: "spicy-fortunes/clips/spicy-fortunes-trigger-wheel.webm", yt: "https://www.youtube.com/watch?v=sDWZGWwThoo&t=733s" },
          { text: "特色於 3×5 盤面進行、初始 3 次 SPIN；已有辣椒／鑽石的位置鎖定，其餘位置獨立轉動，新落符號時剩餘次數重置。Extra Spins：改為 4 次 SPIN，出現辣椒／鑽石時重置為 4 次 SPIN。", img: "spicy-fortunes/clips/spicy-fortunes-extra-spins.webm", yt: "https://www.youtube.com/watch?v=Nlm4hV1eq5w&t=650s" },
          { text: "Extra Pays：觸發 SPIN 中的鑽石轉為辣椒，特色中辣椒可直接出現在任意位置。", img: "spicy-fortunes/clips/spicy-fortunes-extra-pays.webm", yt: "https://www.youtube.com/shorts/QqHdlbgSvlU" },
          { text: "Extra Rows：加開 3 列，特色改於 6×5 盤面進行。", img: "spicy-fortunes/clips/spicy-fortunes-extra-rows.webm", yt: "https://www.youtube.com/watch?v=GgUf3pl9Q8k&t=900s" },
          { text: "彩金獲得方式：彩金共 4 段——Grand／Major 為累積彩金、Minor／Mini 為固定彩金。取得方式：(1) 由轉輪直接開出；(2) 特色中辣椒開獎時攜帶——黃辣椒可帶 Mini／Minor，紅辣椒與鑽石辣椒可帶 Major／Grand。", img: "spicy-fortunes/clips/spicy-fortunes-wheel-jackpot.webm", yt: "https://www.youtube.com/watch?v=n_hJPzg-8tk&t=354s" },
          { text: "特色中每顆鑽石可升級一次辣椒：綠→黃→紅→鑽；升級鑽石隨機指定一顆辣椒升級，不依等級高低。", img: "spicy-fortunes/clips/spicy-fortunes-upgrade.webm", yt: "https://www.youtube.com/watch?v=n_hJPzg-8tk&t=325s" },
          { text: "特色滿盤後可額外獲得 4 顆 UPGRADE 鑽石，優先選擇高階辣椒進行升級。", img: "spicy-fortunes/clips/spicy-fortunes-diamond-chili.webm", yt: "https://www.youtube.com/shorts/LTVJnspP8GA" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "Super 特色",
        steps: [
          { text: "自第一層 Wheel 特色可贏得 Super Spicy Wheel，開出 Super Extra Spins／Super Extra Pays／Super Extra Rows 或彩金；依初始觸發與轉輪結果，單一或多個 Super 特色合併進行。", img: "spicy-fortunes/clips/spicy-fortunes-super-features.webm", yt: "https://www.youtube.com/watch?v=Nlm4hV1eq5w&t=350s" }
        ]
      }
    ],
    help: [
      "spicy-fortunes/HELP/spicy-fortunes-help-01.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-02.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-03.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-04.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-05.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-06.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-07.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-08.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-09.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-10.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-11.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-12.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-13.jpg",
      "spicy-fortunes/HELP/spicy-fortunes-help-14.jpg"
    ]
  }
];
