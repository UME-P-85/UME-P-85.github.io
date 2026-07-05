/* =========================================================================
   UMEP — Portfolio interactions
   Minimal: smooth anchor scroll + reveal on scroll
   ========================================================================= */

(() => {
  // ---------- Smooth anchor scroll (small enhancement over CSS smooth) ----------
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

  // ---------- Reveal-on-scroll for tiles ----------
  const tiles = document.querySelectorAll('.tile, .break, .section-word');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    tiles.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(el);
    });
  }

  // ---------- Contact form: Formspree guard ----------
  const form = document.querySelector('.contact-form');
  if (form) {
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
})();
