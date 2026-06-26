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
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "盤面頂端有一條 INSTANT WIN ROW，每一軸上方各有一個 Instant Win Box，內容每次 SPIN 隨機變動。", img: "", yt: "" },
          { text: "INSTANT WIN 符號落在某軸時，立即贏得該軸上方框內的內容：分數[[10～750 分 × bet multiplier]]，或三大特色之一。", img: "", yt: "" },
          { text: "三大特色採打擊觸發。", img: "", yt: "" },
          { text: "三大特色亦有固定觸發：當某特色已在 Instant Win Box 中、其正下方落下 INSTANT WIN，即必定觸發該特色。", img: "", yt: "" }
        ]
      },
      {
        type: "FREE GAME",
        steps: [
          { text: "由 1～3 個特色觸發，獲得 10 次免費遊戲；每軸 Instant Win Box 設有起始分數[[5 分 × bet multiplier]]。", img: "", yt: "" },
          { text: "帶有分數[[5～75 分 × bet multiplier]]或已啟用特色的金幣可落在 5 軸任一軸；免費遊戲期間取得的所有分數與特色獎金，會累加到該金幣所落轉軸上方的 Instant Win Box。", img: "", yt: "" },
          { text: "ADD ALL：將其他 4 軸 Instant Win Box 的分數加總後加進該軸；多個同時出現時由左至右依序套用。", img: "", yt: "" },
          { text: "WHEEL POT：該軸出現垂直轉盤並轉動，可中 GRAND／MAXI（累積彩金）與 MINOR／MINI（固定彩金）[[固定彩金 MINI 125、MINOR 375 分 × bet multiplier；累積彩金 MAXI 50,000、GRAND 500,000 分（任意 bet）]]；MINOR／MINI 命中「+NUDGE」可繼續推進加中，單次最多 6 個 jackpot。", img: "", yt: "" },
          { text: "MINOR／MINI（固定彩金）的分數值會加進對應軸的 Instant Win Box；GRAND／MAXI（累積彩金）則直接送入轉軸底部的中獎框。", img: "", yt: "" },
          { text: "MULTIPLIER：紅幣可落在任一軸，轉出倍率[[2x／3x／4x／5x／10x]]，套用到該軸 Instant Win Box 的分數。", img: "", yt: "" },
          { text: "EXTRA ROW：免費遊戲中，EXTRA ROW 符號落在任一軸即把盤面往上延展一列；單輪免費遊戲最多延展 3 列。", img: "", yt: "" },
          { text: "免費遊戲結束時，5 個轉軸上方累積的分數全部派發。", img: "", yt: "" },
          { text: "EXTRA FREE GAMES：免費遊戲中可內部觸發尚未啟動的特色 —— 其對應符號落在 5 軸任一軸時立即觸發，並再加 5 次免費遊戲。", img: "", yt: "" },
          { text: "TRIPLE BONUS METER：當「3 特色齊發」很久未出現時，盤面上方會出現提示表，於 3 特色免費遊戲開始時重置消失。", img: "", yt: "" }
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
    id: "money-bags",
    vendor: "Aristocrat",
    year: "2026",
    name: "Mr. & Ms. Money Bags",
    img: "../landbase/weeks/W25/aristocrat-moneybags.jpg",
    tags: ["乘倍", "轉盤獎勵", "連線彩金"],
    desc: "Class II 新機，採用 Marquis 五軸機櫃搭配實體轉軸與數位頂部轉盤，串接 Frenzy Jackpots 連線彩金系統，含四種 Bonus，鎖定部落與區域型 Class II 市場。",
    source: "https://cdcgaming.com/aristocrat-gaming-releases-class-ii-game-mr-ms-money-bags/",
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "Marquis 五軸機櫃，實體轉軸搭配數位頂部轉盤。", img: "../landbase/weeks/W25/aristocrat-moneybags.jpg", yt: "https://www.youtube.com/watch?v=-mn--rC2iUQ" },
          { text: "基本盤觸發 VGT 經典 Red Screen 免費遊戲。", img: "", yt: "https://www.youtube.com/watch?v=aqz-KE-bpKQ" }
        ]
      },
      {
        type: "FREE GAME",
        steps: [
          { text: "Red Screen 免費遊戲：經典 VGT 玩法。", img: "", yt: "https://www.youtube.com/watch?v=-mn--rC2iUQ" },
          { text: "Super Red Screen：可變型免費遊戲乘數。", img: "", yt: "" }
        ]
      },
      {
        type: "FEATURE GAME",
        steps: [
          { text: "可變型轉盤乘數，與標準轉盤獎勵可單獨或同時觸發。", img: "", yt: "" },
          { text: "串接 Frenzy Jackpots 連線彩金系統。", img: "", yt: "" }
        ]
      }
    ]
  },
  {
    id: "mini-uth",
    vendor: "Light & Wonder",
    year: "2026",
    name: "Mini Ultimate Texas Hold'em",
    img: "../landbase/weeks/W25/lw-mini-uth.jpg",
    tags: ["撲克", "桌遊"],
    desc: "撲克桌遊新版本，以更精簡的桌台規格延伸熱門 Ultimate Texas Hold'em 系列，鎖定空間與節奏更靈活的賭場部署需求。",
    source: "https://www.youtube.com/watch?v=-mn--rC2iUQ",
    play: [
      {
        type: "BASE GAME",
        steps: [
          { text: "精簡桌台規格，延伸 Ultimate Texas Hold'em 玩法。", img: "../landbase/weeks/W25/lw-mini-uth.jpg" }
        ]
      }
    ]
  },
  {
    id: "zitro-fantasy",
    vendor: "Zitro",
    year: "2026",
    name: "FANTASY 機櫃五款新作",
    img: "../landbase/weeks/W25/headline.jpg",
    tags: ["多盤面", "收集"],
    desc: "FANTASY 機櫃一口氣推出 Brave Dragon、Lion Falls、Gold Space、Fantasy Mine、Rock n' Raccoons 五款獨家新作，主打華麗視覺與沉浸式多媒體，為拓展拉美市場的核心機型。",
    source: "https://zitrogames.com/record-attendance-exciting-new-releases-and-a-resounding-success-this-was-zitro-experience-peru/",
    play: []
  }
];
