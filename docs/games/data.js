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
    vendor: "Light & Wonder",
    year: "2026",
    name: "Hot Hot Flaming Pots",
    img: "",
    tags: ["Reel Ways", "Mystery Stacked Reels", "三特色", "收集", "全收分", "全加分", "乘倍", "Hot Train", "升級", "4支彩金"],
    desc: "Big Hot Flaming Pots／Mr. Lee & Mrs. Wong 系列新版：三特色 YUMMY／HONEY／SPICY 收集，HOT／HOT HOT Train 轉輪帶 2x／3x 收分乘倍，4 支彩金。規格取自機台 HELP。",
    symbols: [
      { name: "WILD（Mr. Lee 廚師）", role: "百搭，取代除 Feature 幣、包子與 HOT 外的所有標誌；只出現在第 2、3、4 軸。", img: "" },
      { name: "HOT（SCATTER）", role: "集 3 個以上觸發 HOT FEATURE，轉動 Hot Train。", img: "" },
      { name: "Feature 幣（🟢YUMMY／🟠HONEY／🟣SPICY）", role: "三特色的觸發標誌，帶分數或 MAJOR／MINOR／MINI；散落觸發對應的 ORDER UP 特色。", img: "" },
      { name: "包子幣（Coin）", role: "ORDER UP 特色內的收集幣，帶分數或 MAJOR／MINOR／MINI，保留在盤面直到結算派發。", img: "" },
      { name: "辣椒（SPICY 專屬）", role: "將自身分值加到盤面所有包子幣（全加分），該次 SPIN 結束後轉為包子幣。", img: "" },
      { name: "蜂蜜罐（HONEY 專屬）", role: "收走盤面所有包子幣的分值（全收分）後轉為包子幣。", img: "" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "Reel Ways 玩法，相鄰軸各取一個符號、由最左軸起算連線。[[總注 88 credits × bet multiplier]]", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "MYSTERY STACKED REELS：每次 SPIN 前，盤面部分位置先被替換成隨機一般標誌；WILD（廚師，僅出現於第 2–4 軸）若部分出現且參與連線，會 nudge 填滿整軸。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "Feature 幣（🟢YUMMY／🟠HONEY／🟣SPICY）散落觸發三特色：1～3 個屬打擊觸發、恰 3 個同色必觸發、4 個以上必觸發；打擊觸發成功時，盤面上同類 Feature 幣皆會啟動對應特色。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "各特色給獎 SPIN：含 YUMMY 的組合 4 場，其餘（HONEY／SPICY 及其組合）3 場。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "集 3 個以上 HOT 觸發 HOT FEATURE（實機觀察 HOT 有機會補位到 3 個以觸發；HELP 註明 HOT 的出現方式僅為表現效果）；若同一次 SPIN 同時觸發 ORDER UP 與 HOT，先玩 HOT。", img: "", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=487s" },
          { text: "共 4 支彩金：GRAND／MAJOR（累積彩金）、MINOR／MINI（固定彩金）。[[MINOR 1880、MINI 880 credits × bet multiplier；GRAND／MAJOR 為 meter 累積]]", img: "", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=487s" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "ORDER UP（收集）",
        steps: [
          { text: "特色開始時，所有 Feature 幣轉為包子幣並保留分值，另隨機補包子幣使場上達 5～10 顆。[[每個包子幣 15–500x bet multiplier，或 MAJOR／MINOR／MINI]]", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "觸發的包子幣鎖定保留；YUMMY 啟用時前 4 場、YUMMY 未啟用而 SPICY／HONEY 啟用時前 3 場，若無新標誌落下則補對應場數；每有新的包子幣、辣椒或蜜罐落下即重置剩餘 SPIN。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "SPICY：辣椒將自身分值加到盤面所有包子幣（全加分），SPIN 結束後轉為包子幣。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "HONEY：蜂蜜收走盤面所有包子幣的分值（全收分）後轉為包子幣（保留收集總值，僅由此轉變產生）；盤面無包子幣時，首個蜜罐自帶分值（15–500x／MINOR／MINI）轉為包子幣。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "同一場辣椒與蜜罐同落時，先辣椒全加分、再蜜罐收分。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "每場開始前檢查：若整欄位置全鎖定，該欄各包子幣派彩並移除，欄頂紅椒標記啟動；所有欄的紅椒標記皆啟動即中 GRAND（每次特色限一次）。", img: "", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=487s" },
          { text: "特色結束時，盤面各包子幣的分值全部派發。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "HOT／HOT HOT（Hot Train 轉輪）",
        steps: [
          { text: "3 個以上 HOT 觸發，轉 1 次 Hot Train，停在 UPGRADE／Hot Order Up 特色／GRAND／MAJOR。", img: "", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=487s" },
          { text: "停 Hot Order Up 特色：以該特色進行 ORDER UP（場上 5～10 包子幣、對應 SPIN 數）。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "停 UPGRADE：進入 HOT HOT FEATURE，轉 Hot Hot Train，停 Hot Hot Order Up 特色／GRAND／MAJOR（不再升級）。", img: "", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=487s" },
          { text: "收分乘倍：HOT 階整欄鎖定收分乘倍[[×2]]；HOT HOT 階整欄鎖定收分乘倍[[×3]]（一般 ORDER UP 不乘倍）。", img: "", yt: "https://www.youtube.com/watch?v=7eVMa3MsAjI&t=487s" },
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
    id: "golden-guardian",
    vendor: "IGT",
    year: "2026",
    name: "Golden Guardian",
    img: "",
    tags: ["Cash on Reel", "狀態遊戲", "鎖定", "收集", "分數球", "雙免費遊戲"],
    desc: "初版（實機觀察，待機台 HELP 補完）：BG 為狀態玩法，分數球落在特定軸會鎖定數個 SPIN；兩種免費遊戲分別擴大鎖定軸與每 SPIN 增球。",
    symbols: [
      { name: "分數球", role: "帶分數的球型標誌，落在指定軸時鎖定並保留數個 SPIN。", img: "" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "狀態玩法：分數球落在 R3 時鎖定並保留 3 個 SPIN。", img: "", yt: "" }
        ]
      },
      {
        type: "FREE GAME",
        name: "鎖定擴軸",
        steps: [
          { text: "同一鎖定玩法改在 R2 與 R4 進行：分數球落在 R2／R4 時鎖定並保留 3 個 SPIN。", img: "", yt: "" }
        ]
      },
      {
        type: "FREE GAME",
        name: "每 SPIN 增球",
        steps: [
          { text: "每次 SPIN 額外增加 1 顆球。", img: "", yt: "" }
        ]
      }
    ],
    help: []
  },
  {
    id: "elemental-spirit",
    vendor: "Light & Wonder",
    year: "2026",
    name: "Elemental Spirit",
    img: "elemental-spirit/screens/cover.jpg",
    tags: ["Hold & Spin", "Cash on Reel", "狀態框", "收集", "乘倍", "4支彩金"],
    symbols: [
      { name: "WILD", role: "百搭。", img: "" },
      { name: "SCATTER", role: "進入特色前，畫面上所有 SCATTER 會先收集成 1 顆。", img: "" },
      { name: "BALL", role: "帶分數／彩金的球，是 Hold & Spin 的收集標的；集滿 15 顆 BALL 得 GRAND。", img: "" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "3×5 LINE GAME。", img: "elemental-spirit/clips/es-pot.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=103" },
          { text: "進入特色前，畫面上所有 SCATTER 會先收集成 1 顆。", img: "", yt: "" },
          { text: "符號：字獎 ×4、M獎 ×5、WILD、SCATTER ×3、BALL。", img: "", yt: "" },
          { text: "共 4 支彩金：GRAND、MAJOR（累積彩金），MINOR、MINI（固定彩金）；GRAND 由集滿 15 顆 BALL 取得，MINOR／MINI 於 Hold & Spin 中取得。", img: "", yt: "" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "狀態框特色（Hold & Spin）",
        steps: [
          { text: "各狀態框特色皆為 Hold & Spin、倒數 3 場；隨機灑入 3 個同色狀態框，BALL 停在框中即觸發該框作用。", img: "", yt: "" },
          { text: "藍框 Absorbing：BALL 停在藍框中，收集所有藍框外的 BALL；藍框在其他藍框作用完後才消失。", img: "elemental-spirit/clips/es-blue.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=1140" },
          { text: "綠框 Multiplier（版本一）：BALL 停在綠框中乘上隨機倍率，並向外灑出隨機倍率到轉輪或其他 BALL。", img: "elemental-spirit/clips/es-green.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=186" },
          { text: "紫框 Twisting（版本二）：BALL 停在紫框中隨機加倍（加倍次數隨機），並向外灑出特效框到轉輪或其他 BALL。", img: "elemental-spirit/clips/es-purple.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=1244" },
          { text: "紅框 Exploding：BALL 停在紅框中，向外灑出 BALL 到轉輪或其他 BALL。", img: "elemental-spirit/clips/es-red.webm", yt: "https://youtu.be/WxtQzrHSf0U?t=756" }
        ]
      }
    ],
    help: []
  }
];
