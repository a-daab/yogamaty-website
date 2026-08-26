/* ============================================
   Shop Page JS
============================================ */

// Gallery
(function () {
  const thumbs = document.querySelectorAll('.gallery-thumb');
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
})();

// Quantity control
(function () {
  const input = document.getElementById('qty-input');
  const plus = document.getElementById('qty-plus');
  const minus = document.getElementById('qty-minus');
  if (!input) return;
  plus.addEventListener('click', () => {
    input.value = Math.min(99, parseInt(input.value) + 1);
  });
  minus.addEventListener('click', () => {
    input.value = Math.max(1, parseInt(input.value) - 1);
  });
})();

// Variant selections
(function () {
  document.querySelectorAll('.color-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      sw.closest('.color-options').querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
    });
  });
  document.querySelectorAll('.thickness-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.thickness-options').querySelectorAll('.thickness-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
})();

// Tabs
(function () {
  const buttons = document.querySelectorAll('.tab-btn');
  const panes = document.querySelectorAll('.tab-pane');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      buttons.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + target)?.classList.add('active');
    });
  });
})();

// Add to cart feedback
(function () {
  const btn = document.querySelector('.add-to-cart-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const orig = btn.innerHTML;
    btn.innerHTML = '<svg viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Added!';
    btn.style.background = '#2e7d32';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
    }, 2200);
  });
})();
