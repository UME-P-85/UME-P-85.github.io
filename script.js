/* =========================================================================
   UMEP — Dreamfield interactions
   - Generate floating photo bubbles
   - Click/hover to reveal detail card
   - Smooth scroll + Formspree guard preserved
   ========================================================================= */

(() => {
  /* -------------------------------------------------------------------------
     1. Photo dataset — replace picsum seeds with your own /images/*.jpg paths
     Each entry becomes one floating bubble.
     ------------------------------------------------------------------------- */
  const PHOTOS = [
    { seed: 'umep01', title: 'Camellia',        subtitle: 'Editorial · Winter Series', meta: '2026 · No. 001', tag: 'Portrait',   desc: 'Studio portrait shot on medium format.',    descJa: '中判フィルムで撮影したスタジオポートレート。', credit: 'Client — Private' },
    { seed: 'umep02', title: 'Sodium Glow',     subtitle: 'Fashion · Night Chapter',   meta: '2026 · No. 002', tag: 'Editorial',  desc: 'Streetlight-lit fashion story in Shinjuku.', descJa: '新宿の街灯の下で撮影したファッションシリーズ。', credit: 'Client — HALO Magazine' },
    { seed: 'umep03', title: 'Ferrous',         subtitle: 'Product · Steel Study',     meta: '2026 · No. 003', tag: 'Still Life', desc: 'Metal object study, natural window light.',  descJa: '自然光による金属オブジェクトのスタディ。',       credit: 'Personal Work' },
    { seed: 'umep04', title: 'Sea Room',        subtitle: 'Travel · Coastal',          meta: '2026 · No. 004', tag: 'Landscape',  desc: 'Winter coast, Boso Peninsula.',              descJa: '冬の房総半島の海岸線。',                         credit: 'Personal Work' },
    { seed: 'umep05', title: 'Milk Skin',       subtitle: 'Beauty · Pale Series',      meta: '2026 · No. 005', tag: 'Beauty',     desc: 'Cool-tone beauty portrait, softboxed.',      descJa: 'ソフトボックスによるクールトーンビューティ。',   credit: 'Client — LUME' },
    { seed: 'umep06', title: 'Overpass',        subtitle: 'Documentary · Tokyo',       meta: '2026 · No. 006', tag: 'Documentary',desc: 'Late night under Metropolitan Expressway.',  descJa: '首都高高架下の深夜。',                           credit: 'Personal Work' },
    { seed: 'umep07', title: 'Petal / Palm',    subtitle: 'Fashion · Editorial',       meta: '2026 · No. 007', tag: 'Editorial',  desc: 'Studio hand-portraits with florals.',        descJa: '花と手のスタジオコンポジション。',               credit: 'Client — SPUR' },
    { seed: 'umep08', title: 'Cobalt Room',     subtitle: 'Portrait · Blue Chapter',   meta: '2026 · No. 008', tag: 'Portrait',   desc: 'Portrait in a gel-lit blue interior.',       descJa: 'ゲルライトによるブルーインテリアのポートレート。',credit: 'Personal Work' },
    { seed: 'umep09', title: 'Line & Light',    subtitle: 'Fashion · Minimalist',      meta: '2026 · No. 009', tag: 'Fashion',    desc: 'Sharp shadow silhouettes on white cyc.',     descJa: '白背景に落ちる鋭いシルエット。',                 credit: 'Client — TOGA' },
    { seed: 'umep10', title: 'Steam',           subtitle: 'Documentary · Bathhouse',   meta: '2026 · No. 010', tag: 'Documentary',desc: 'Sento series — early morning steam.',        descJa: '銭湯シリーズ — 早朝の湯気。',                   credit: 'Personal Work' },
    { seed: 'umep11', title: 'Ceramic',         subtitle: 'Product · Craft',           meta: '2026 · No. 011', tag: 'Still Life', desc: 'Handmade tea bowls in raking light.',        descJa: 'サイド光による手作り茶碗の撮影。',               credit: 'Client — Kōgei Press' },
    { seed: 'umep12', title: 'Rainlight',       subtitle: 'Editorial · Melancholia',   meta: '2026 · No. 012', tag: 'Editorial',  desc: 'Story shot in continuous rain.',             descJa: '長雨の中で撮影したストーリー。',                 credit: 'Client — Ginza Magazine' },
    { seed: 'umep13', title: 'Halogen',         subtitle: 'Fashion · Night Chapter',   meta: '2026 · No. 013', tag: 'Fashion',    desc: 'Warm-tungsten fashion series.',              descJa: 'ハロゲン光によるファッションシリーズ。',         credit: 'Client — GR8' },
    { seed: 'umep14', title: 'Green Corridor',  subtitle: 'Travel · Kyoto',            meta: '2026 · No. 014', tag: 'Landscape',  desc: 'Bamboo corridor at dawn.',                   descJa: '夜明けの竹林の通路。',                           credit: 'Personal Work' },
    { seed: 'umep15', title: 'Second Face',     subtitle: 'Portrait · Twin Study',     meta: '2026 · No. 015', tag: 'Portrait',   desc: 'Doubled portrait composition.',              descJa: '二重露光のような双子構図。',                     credit: 'Personal Work' },
    { seed: 'umep16', title: 'Dust',            subtitle: 'Documentary · Studio',      meta: '2026 · No. 016', tag: 'Documentary',desc: 'Backstage dust particles in daylight.',      descJa: '日中光に舞うバックステージの塵。',               credit: 'Personal Work' },
    { seed: 'umep17', title: 'Coral Coat',      subtitle: 'Fashion · SS Collection',   meta: '2026 · No. 017', tag: 'Fashion',    desc: 'Bright coat editorial on white sand.',       descJa: '白砂の上でのコートエディトリアル。',             credit: 'Client — CFCL' },
    { seed: 'umep18', title: 'Bathing',         subtitle: 'Personal · Onsen',          meta: '2026 · No. 018', tag: 'Documentary',desc: 'Rural onsen quiet moments.',                 descJa: '地方の温泉、静寂の時間。',                       credit: 'Personal Work' },
    { seed: 'umep19', title: 'Marbled',         subtitle: 'Beauty · Skin Study',       meta: '2026 · No. 019', tag: 'Beauty',     desc: 'Marbled body-paint macro shots.',            descJa: 'マーブル模様のボディペイントのマクロ撮影。',     credit: 'Client — Vivi' },
    { seed: 'umep20', title: 'Blueprint',       subtitle: 'Editorial · Architecture',  meta: '2026 · No. 020', tag: 'Architecture',desc: 'Interiors of a brutalist library.',         descJa: 'ブルータリズム建築の図書館内部。',               credit: 'Personal Work' },
    { seed: 'umep21', title: 'Tangerine',       subtitle: 'Portrait · Warm Series',    meta: '2026 · No. 021', tag: 'Portrait',   desc: 'Warm-tone portrait at golden hour.',         descJa: 'ゴールデンアワーの温色ポートレート。',           credit: 'Personal Work' },
    { seed: 'umep22', title: 'Ash',             subtitle: 'Documentary · Rural',       meta: '2026 · No. 022', tag: 'Documentary',desc: 'Ash-covered village post-eruption.',         descJa: '噴火後、灰に覆われた集落。',                     credit: 'Personal Work' },
    { seed: 'umep23', title: 'Silk Chair',      subtitle: 'Fashion · Chair Study',     meta: '2026 · No. 023', tag: 'Fashion',    desc: 'Model with silk drapery on chair.',          descJa: '椅子と絹のドレープのポートレート。',             credit: 'Client — Miu Miu' },
    { seed: 'umep24', title: 'Neon Rain',       subtitle: 'Street · Kabukicho',        meta: '2026 · No. 024', tag: 'Documentary',desc: 'Kabukicho neon reflected in puddles.',       descJa: '水たまりに映る歌舞伎町のネオン。',               credit: 'Personal Work' },
    { seed: 'umep25', title: 'Mirror Study',    subtitle: 'Portrait · Reflection',     meta: '2026 · No. 025', tag: 'Portrait',   desc: 'Portrait via broken vintage mirror.',        descJa: '割れたヴィンテージミラー越しのポートレート。',   credit: 'Personal Work' },
    { seed: 'umep26', title: 'Iron Line',       subtitle: 'Product · Bicycle',         meta: '2026 · No. 026', tag: 'Product',    desc: 'Custom framebuilder catalog shot.',          descJa: 'カスタムフレームビルダーのカタログ写真。',       credit: 'Client — Toei Bicycle' },
    { seed: 'umep27', title: 'Snowfall',        subtitle: 'Landscape · Hokkaido',      meta: '2026 · No. 027', tag: 'Landscape',  desc: 'Winter forest, long exposure.',              descJa: '冬の森、長時間露光。',                           credit: 'Personal Work' },
    { seed: 'umep28', title: 'Amber Room',      subtitle: 'Interior · Villa',          meta: '2026 · No. 028', tag: 'Architecture',desc: 'Amber-lit interior of a wooden villa.',     descJa: '琥珀色の光に包まれた木造ヴィラ。',               credit: 'Client — Casa Brutus' },
    { seed: 'umep29', title: 'Skin & Metal',    subtitle: 'Beauty · Contrast',         meta: '2026 · No. 029', tag: 'Beauty',     desc: 'Metallic accessories on close skin.',        descJa: '肌に密着する金属アクセサリーの接写。',           credit: 'Client — Numéro' },
    { seed: 'umep30', title: 'Grid Sky',        subtitle: 'Editorial · Rooftop',       meta: '2026 · No. 030', tag: 'Editorial',  desc: 'Rooftop editorial with skyline grid.',       descJa: '街のグリッドを背景にした屋上エディトリアル。',   credit: 'Client — SSENSE' },
    { seed: 'umep31', title: 'Paper',           subtitle: 'Still Life · Washi',        meta: '2026 · No. 031', tag: 'Still Life', desc: 'Handmade washi paper in raking light.',      descJa: 'サイド光による手漉き和紙の撮影。',               credit: 'Personal Work' },
    { seed: 'umep32', title: 'Late Dance',      subtitle: 'Documentary · Studio',      meta: '2026 · No. 032', tag: 'Documentary',desc: 'Dancers rehearsing after midnight.',         descJa: '深夜0時過ぎのダンサーのリハーサル。',           credit: 'Personal Work' },
  ];

  /* -------------------------------------------------------------------------
     2. Placement helpers — avoid heavy overlap between bubbles
     ------------------------------------------------------------------------- */
  function rand(min, max) { return Math.random() * (max - min) + min; }

  function pickTier() {
    // Distribution: ~15% large, ~30% medium, ~55% small
    const r = Math.random();
    if (r < 0.15) return 'lg';
    if (r < 0.45) return 'md';
    return 'sm';
  }

  const TIER_TO_APPROX_PX = { sm: 90, md: 150, lg: 260 };

  function tryPlace(placed, tier, container, attempts = 40) {
    const approx = TIER_TO_APPROX_PX[tier];
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const margin = approx * 0.35;

    for (let i = 0; i < attempts; i++) {
      // Random position within container (as %)
      const x = rand(margin, cw - approx - margin);
      const y = rand(margin, ch - approx - margin);

      // Overlap check
      let ok = true;
      for (const p of placed) {
        const minDist = (p.size + approx) * 0.55; // allow slight overlap
        const dx = p.x - x;
        const dy = p.y - y;
        if (Math.hypot(dx, dy) < minDist) { ok = false; break; }
      }
      if (ok) return { x, y, size: approx };
    }
    return null; // give up
  }

  /* -------------------------------------------------------------------------
     3. Build the floating field
     ------------------------------------------------------------------------- */
  function buildField() {
    const field = document.getElementById('floating-field');
    if (!field) return;

    // Wait for layout so clientWidth/Height are real
    if (field.clientWidth === 0) {
      requestAnimationFrame(buildField);
      return;
    }

    // Clear any previously generated content (if re-invoked)
    field.innerHTML = '';

    const placed = [];

    PHOTOS.forEach((photo, i) => {
      const tier = pickTier();
      const pos = tryPlace(placed, tier, field);
      if (!pos) return; // skip if too crowded

      placed.push({ x: pos.x, y: pos.y, size: pos.size });

      const el = document.createElement('button');
      el.type = 'button';
      el.className = `floating-photo floating-photo--${tier}`;
      el.style.left = `${pos.x}px`;
      el.style.top = `${pos.y}px`;
      // Randomize animation duration + delay so they don't move in unison
      const dur = rand(
        tier === 'lg' ? 26 : tier === 'md' ? 18 : 12,
        tier === 'lg' ? 40 : tier === 'md' ? 28 : 18
      );
      const delay = rand(-8, 0);
      el.style.setProperty('--dur', `${dur}s`);
      el.style.animationDelay = `${delay}s`;
      el.setAttribute('aria-label', `Photograph: ${photo.title}`);
      el.dataset.index = String(i);

      const img = document.createElement('img');
      img.src = `https://picsum.photos/seed/${photo.seed}/600/600`;
      img.alt = photo.title;
      img.loading = 'lazy';
      img.decoding = 'async';
      el.appendChild(img);

      field.appendChild(el);
    });
  }

  /* -------------------------------------------------------------------------
     4. Detail card interactions
     ------------------------------------------------------------------------- */
  function bindDetailCard() {
    const card = document.getElementById('detail-card');
    const closeBtn = document.getElementById('detail-close');
    const field = document.getElementById('floating-field');
    if (!card || !closeBtn || !field) return;

    const fields = {
      title:    document.getElementById('detail-title'),
      subtitle: document.getElementById('detail-subtitle'),
      meta:     document.getElementById('detail-meta'),
      tag:      document.getElementById('detail-tag'),
      desc:     document.getElementById('detail-desc'),
      descJa:   document.getElementById('detail-desc-ja'),
      credit:   document.getElementById('detail-credit'),
    };

    let activeEl = null;
    let hoverTimer = null;
    let pinned = false; // clicked = pinned; hover cannot change while pinned

    function open(photo, el, isPinned) {
      if (activeEl && activeEl !== el) activeEl.classList.remove('floating-photo--active');
      activeEl = el;
      el.classList.add('floating-photo--active');

      fields.title.textContent    = photo.title;
      fields.subtitle.textContent = photo.subtitle;
      fields.meta.textContent     = photo.meta;
      fields.tag.textContent      = photo.tag;
      fields.desc.textContent     = photo.desc;
      fields.descJa.textContent   = photo.descJa;
      fields.credit.textContent   = photo.credit;

      card.setAttribute('aria-hidden', 'false');
      if (isPinned) pinned = true;
    }

    function close() {
      if (activeEl) activeEl.classList.remove('floating-photo--active');
      activeEl = null;
      pinned = false;
      card.setAttribute('aria-hidden', 'true');
    }

    function photoFromEl(el) {
      const idx = Number(el.dataset.index);
      return PHOTOS[idx];
    }

    // ---- Click = pin the card (won't change on subsequent hovers) ----
    field.addEventListener('click', (e) => {
      const el = e.target.closest('.floating-photo');
      if (!el) return;
      const photo = photoFromEl(el);
      if (!photo) return;
      // If clicking the already-pinned photo, unpin & close
      if (pinned && activeEl === el) {
        close();
        return;
      }
      open(photo, el, true);
    });

    // ---- Hover with small delay = show preview (doesn't override pin) ----
    field.addEventListener('mouseover', (e) => {
      const el = e.target.closest('.floating-photo');
      if (!el) return;
      if (pinned) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        const photo = photoFromEl(el);
        if (!photo) return;
        open(photo, el, false);
      }, 120);
    });

    field.addEventListener('mouseout', (e) => {
      const el = e.target.closest('.floating-photo');
      if (!el) return;
      // Cancel pending open if pointer leaves before delay elapses
      clearTimeout(hoverTimer);
    });

    // ---- Close button ----
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      close();
    });

    // ---- Click outside card & outside photos = close ----
    document.addEventListener('click', (e) => {
      if (card.getAttribute('aria-hidden') !== 'false') return;
      if (card.contains(e.target)) return;
      if (e.target.closest('.floating-photo')) return;
      close();
    });

    // ---- Esc to close ----
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  /* -------------------------------------------------------------------------
     5. Smooth anchor scroll (enhancement)
     ------------------------------------------------------------------------- */
  function bindSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* -------------------------------------------------------------------------
     6. Formspree guard — friendly alert if action still has placeholder
     ------------------------------------------------------------------------- */
  function bindContactGuard() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      const action = form.getAttribute('action') || '';
      if (action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        alert(
          'コンタクトフォームは有効化されていません。\n' +
          'formspree.io で無料アカウントを作成し、\n' +
          'index.html の action="https://formspree.io/f/YOUR_FORM_ID" を\n' +
          '自分のフォームIDに置き換えてください。'
        );
      }
    });
  }

  /* -------------------------------------------------------------------------
     7. Rebuild field on resize (debounced) so layout adapts
     ------------------------------------------------------------------------- */
  function bindResizeRebuild() {
    let t;
    window.addEventListener('resize', () => {
      clearTimeout(t);
      t = setTimeout(buildField, 250);
    });
  }

  /* -------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------- */
  function boot() {
    buildField();
    bindDetailCard();
    bindSmoothScroll();
    bindContactGuard();
    bindResizeRebuild();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
