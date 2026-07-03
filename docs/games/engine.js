/* 競品遊戲介紹 詳情頁引擎（detail.html 與各遊戲 <slug>.html 共用）
   遊戲來源：window.GAME_ID（各遊戲靜態頁設定）優先，否則讀網址 ?id=（detail.html 相容）。
   需先載入 data.js（提供全域 GAMES）。 */
(function () {
  var box = document.getElementById('detail');

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  /* 玩法文字：句子保持完整，[[數值]] 一律抽到句尾成 ⓘ（滑過才顯示，數值供參考）*/
  function fmt(s) {
    var vals = [];
    var clean = esc(s).replace(/\[\[(.+?)\]\]/g, function (_, v) { vals.push(v); return ''; });
    var chips = vals.map(function (v) {
      return '<span class="val" tabindex="0" data-v="' + v + '"></span>';
    }).join('');
    return clean + chips;
  }
  /* 玩法媒體：影片(.webm/.mp4) → 自動循環靜音 video；圖片 → img；空 → 佔位 */
  function isVid(src) { return /\.(webm|mp4)(\?|#|$)/i.test(src || ''); }
  function media(src, label, thumb) {
    if (!src) return '<div class="placeholder">' + esc(label) + '（待補）</div>';
    if (isVid(src)) {
      return thumb
        ? '<video src="' + esc(src) + '#t=0.5" muted preload="metadata"></video>'
        : '<video src="' + esc(src) + '" autoplay loop muted playsinline></video>';
    }
    return '<img src="' + esc(src) + '" alt="' + esc(label) + '"' + (thumb ? ' loading="lazy"' : '') + '>';
  }

  var params = new URLSearchParams(window.location.search);
  var id = window.GAME_ID || params.get('id');
  var g = null;
  for (var n = 0; n < GAMES.length; n++) {
    if (GAMES[n].id === id) { g = GAMES[n]; break; }
  }

  if (!g) {
    box.innerHTML = '<p class="not-found">找不到這款遊戲，請回到<a href="./">競品遊戲介紹</a>重新選擇。</p>';
    return;
  }

  document.title = g.name + '｜競品遊戲介紹';

  var html = '';

  /* 標頭 */
  html +=
    '<div class="vendor-line"><span>' + esc(g.vendor) + '</span>' +
      (g.year ? '<span class="year">' + esc(g.year) + '</span>' : '') +
    '</div>' +
    '<h2 class="game-name">' + esc(g.name) + '</h2>' +
    (g.img ? '<img class="game-img" src="' + esc(g.img) + '" alt="' + esc(g.name) + '">' : '');

  /* # 標籤 */
  if (g.tags && g.tags.length) {
    html += '<div class="tags">' +
      g.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') +
      '</div>';
  }

  var navItems = [];

  /* 標誌（只列有特殊作用的；一般字獎/M獎不列）*/
  var symbolsHtml = '';
  if (g.symbols && g.symbols.length) {
    navItems.push({ id: 'sec-symbols', label: '標誌' });
    symbolsHtml = '<div class="section-title" id="sec-symbols">標誌</div>' +
      '<div class="symbol-list">' +
      g.symbols.map(function (s) {
        return '<div class="symbol-item">' +
          (s.img ? '<img class="symbol-img" src="' + esc(s.img) + '" alt="' + esc(s.name) + '">' : '') +
          '<div class="symbol-text">' +
            '<div class="symbol-name">' + esc(s.name) + '</div>' +
            '<div class="symbol-role">' + fmt(s.role || '') + '</div>' +
          '</div>' +
        '</div>';
      }).join('') +
      '</div>';
  }

  /* 玩法分區：每區一組「步驟清單 + GIF 畫廊」；同時收集導覽項目 */
  var playHtml = '';
  if (g.play && g.play.length) {
    g.play.forEach(function (sec, si) {
      if (!sec.steps || !sec.steps.length) return;
      navItems.push({ id: 'sec-' + si, label: sec.type + (sec.name ? ' ' + sec.name : '') });

      var lis = sec.steps.map(function (s) {
        return '<li><span class="step-text">' + fmt(s.text) + '</span></li>';
      }).join('');

      var mainInner = media(sec.steps[0].img, '步驟 1', false);

      var thumbs = sec.steps.map(function (s, k) {
        var label = '步驟 ' + (k + 1);
        var inner = s.img ? media(s.img, label, true) : esc(label);
        return '<div class="thumb' + (k === 0 ? ' active' : '') +
          '" data-sec="' + si + '" data-step="' + (k + 1) +
          '" data-src="' + esc(s.img || '') +
          '" data-yt="' + esc(s.yt || '') + '">' + inner + '</div>';
      }).join('');

      var firstYt = sec.steps[0].yt || '';
      var ytIcon = '<svg viewBox="0 0 24 24" fill="#c0392b"><path d="M21.6 7.2s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9C16 4 12 4 12 4s-4 0-6.8.3c-.4 0-1.3.1-2 .9-.6.6-.8 2-.8 2S2 8.8 2 10.5v1.9c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.7.8 1.7.8 2.2.9 1.6.2 6.8.3 6.8.3s4 0 6.8-.3c.4 0 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.9c0-1.7-.2-3.3-.2-3.3zM9.8 14.6V8.9l5.2 2.9-5.2 2.8z"/></svg>';
      var ytLink =
        '<a class="yt-link" target="_blank" rel="noopener" href="' + esc(firstYt || '#') + '"' +
        (firstYt ? '' : ' style="display:none"') + '>' + ytIcon + '在 YouTube 觀看影片</a>';

      playHtml +=
        '<div class="play-section" id="sec-' + si + '" data-sec="' + si + '">' +
          '<div class="section-title">' + esc(sec.type) +
            (sec.name ? '<span class="play-name">' + esc(sec.name) + '</span>' : '') +
          '</div>' +
          '<div class="play-body">' +
            '<div class="gallery">' +
              '<div class="gallery-main" id="gallery-main-' + si + '">' + mainInner + '</div>' +
              '<div class="gallery-thumbs">' + thumbs + '</div>' +
              ytLink +
            '</div>' +
            '<ol class="gameplay-list">' + lis + '</ol>' +
          '</div>' +
        '</div>';
    });
  }

  /* HELP / 賠率表圖庫 */
  var helpHtml = '';
  if (g.help && g.help.length) {
    navItems.push({ id: 'sec-help', label: 'HELP／賠率表' });
    helpHtml = '<div class="section-title" id="sec-help">HELP／賠率表</div>' +
      '<div class="help-wrap"><div class="help-grid">' +
      g.help.map(function (src) {
        return '<a href="' + esc(src) + '">' +
          '<img src="' + esc(src) + '" alt="HELP" loading="lazy"></a>';
      }).join('') +
      '</div></div>';
  }

  /* 區塊快速導覽按鈕（放在 # 標籤下方）*/
  if (navItems.length) {
    html += '<div class="section-nav">' +
      navItems.map(function (n) {
        return '<a class="nav-btn" href="#' + n.id + '">' + esc(n.label) + '</a>';
      }).join('') +
      '</div>';
  }
  html += symbolsHtml + playHtml + helpHtml;

  box.innerHTML = html;

  /* ===== 互動：點步驟 / 點縮圖 → 切換大圖 + 高亮對應步驟 ===== */
  function setMain(mainEl, src, step) {
    mainEl.innerHTML = media(src, '步驟 ' + step, false);
  }

  box.querySelectorAll('.play-section').forEach(function (section) {
    var si = section.getAttribute('data-sec');
    var mainEl = document.getElementById('gallery-main-' + si);
    var ytLink = section.querySelector('.yt-link');
    var lis = section.querySelectorAll('.gameplay-list li');
    if (lis[0]) lis[0].classList.add('step-active');

    function activate(step) {
      var thumb = section.querySelector('.thumb[data-step="' + step + '"]');
      section.querySelectorAll('.thumb').forEach(function (t) { t.classList.remove('active'); });
      if (thumb) thumb.classList.add('active');
      lis.forEach(function (li) { li.classList.remove('step-active'); });
      if (lis[step - 1]) lis[step - 1].classList.add('step-active');
      setMain(mainEl, thumb ? thumb.dataset.src : '', step);
      if (ytLink) {
        var yt = thumb ? thumb.dataset.yt : '';
        if (yt) { ytLink.href = yt; ytLink.style.display = 'inline-flex'; }
        else { ytLink.style.display = 'none'; }
      }
    }

    section.querySelectorAll('.thumb').forEach(function (thumb) {
      if (thumb.dataset.src) { var pre = new Image(); pre.src = thumb.dataset.src; }
      thumb.addEventListener('click', function () { activate(thumb.dataset.step); });
    });
    lis.forEach(function (li, k) {
      li.addEventListener('click', function () { activate(k + 1); });
    });
  });

  /* ===== 圖片燈箱：點 HELP 圖放大、可關閉（不開新分頁）===== */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbName = document.getElementById('lbName');
  var lbDesc = document.getElementById('lbDesc');
  function openLb(src, name, desc) {
    lbImg.src = src;
    lbName.innerHTML = name || ''; lbName.style.display = name ? '' : 'none';
    lbDesc.innerHTML = desc || ''; lbDesc.style.display = desc ? '' : 'none';
    lb.classList.add('open');
  }
  function closeLb() { lb.classList.remove('open'); lbImg.removeAttribute('src'); }
  box.addEventListener('click', function (e) {
    var a = e.target.closest('.help-grid a');
    if (a) { e.preventDefault(); openLb(a.getAttribute('href')); return; }
    var sym = e.target.closest('.symbol-img');
    if (sym) {
      var item = sym.closest('.symbol-item');
      var nm = item && item.querySelector('.symbol-name');
      var rl = item && item.querySelector('.symbol-role');
      openLb(sym.getAttribute('src'), nm ? nm.innerHTML : sym.getAttribute('alt'), rl ? rl.innerHTML : '');
    }
  });
  document.getElementById('lbClose').addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
})();
