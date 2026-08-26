/* ============================================
   TransparaTrade Page JS
============================================ */

// Smooth scroll TOC
document.querySelectorAll('.wp-toc a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Application form
(function () {
  const form = document.getElementById('ally-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn');
    btn.innerHTML = '<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;animation:spin 0.8s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Submitting...';
    btn.disabled = true;
    setTimeout(() => {
      form.style.display = 'none';
      const success = document.getElementById('form-success');
      if (success) {
        success.classList.add('visible');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1600);
  });
})();

// Blockchain flow hover
document.querySelectorAll('.chain-block').forEach(block => {
  block.addEventListener('mouseenter', () => {
    block.style.borderColor = 'var(--orange)';
  });
  block.addEventListener('mouseleave', () => {
    block.style.borderColor = '';
  });
});

// Custom checkbox
document.querySelectorAll('.checkbox-item').forEach(item => {
  item.addEventListener('click', () => {
    const cb = item.querySelector('input[type="checkbox"]');
    if (cb) cb.checked = !cb.checked;
  });
});
