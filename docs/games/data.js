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
    tags: ["Hold & Spin", "Cash on Reel", "三特色", "收集", "全收分", "全加分", "乘倍", "轉輪", "升級", "4支彩金"],
    desc: "Big Hot Flaming Pots／Mr. Lee & Mrs. Wong 系列新版：拿掉 Super Lantern，UPSIZE 改為 HONEY 全收分，並新增 HOT／HOT HOT 大轉輪與收分乘倍。",
    source: "https://youtu.be/BDoZqEu9D3c",
    symbols: [
      { name: "HOT（分數幣）", role: "帶分數的錢幣標誌，命中即得分數；同色集齊 3 個以上，觸發 HOT 大轉輪特色。", img: "" },
      { name: "YUMMY（餃子）", role: "觸發 YUMMY 特色：給予額外 SPIN（延長收集回合）。舊版此特色為放大符號，本版改為加 SPIN。", img: "" },
      { name: "HONEY（蜂蜜罐）", role: "觸發 HONEY 特色：蜂蜜罐化為金餃並全收分，收走盤面全部分值；本版取代舊版 UPSIZE。", img: "" },
      { name: "SPICY（辣椒）", role: "觸發 SPICY 特色：辣椒合體為單一辣椒後，將其分值灌到盤面所有辣椒餃（全加分）。", img: "" },
      { name: "POP", role: "特色符號的觸發／升階動作，分 single pop／double pop／upgrade pop；upgrade pop 會提升該特色等級。", img: "" }
    ],
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "盤面標誌帶分數（Cash on Reel），命中分數幣即得分數。[[實測 Denom 1¢／2¢／5¢／10¢／$1；每 SPIN 約 $5～$60]]", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "三大特色 YUMMY／HONEY／SPICY，由對應特色符號觸發。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "POP 機制：特色符號可帶 single pop／double pop／upgrade pop，upgrade pop 提升該特色等級。", img: "", yt: "https://www.youtube.com/watch?v=KCUc3-4od4Q" },
          { text: "同色分數幣集齊 3 個以上 HOT，進入 HOT 大轉輪特色。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "共 4 支彩金：GRAND／MAJOR（累積彩金）、MINOR／MINI（固定彩金）。", img: "", yt: "https://www.youtube.com/watch?v=KCUc3-4od4Q" }
        ]
      },
      {
        type: "FEATURE GAME",
        name: "HOT 大轉輪",
        steps: [
          { text: "由 3 個以上 HOT 觸發，轉動大轉輪決定本次獎勵。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "轉輪獎項：單特色／複合特色／彩金／UPGRADE。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "UPGRADE 可將 HOT 升階為 HOT HOT，拉高收分乘倍。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "收分乘倍：一般特色符號觸發收分不乘倍；HOT 階收分乘倍[[×2]]；HOT HOT 階收分乘倍[[×3]]。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" },
          { text: "HONEY 全收分、SPICY 全加分於特色內同樣生效，收得的分值再套用該階乘倍。", img: "", yt: "https://youtu.be/BDoZqEu9D3c" }
        ]
      }
    ],
    help: []
  }
];
