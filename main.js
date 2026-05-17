/* ===== MealLense – Shared JS ===== */

// ── Cookie Banner ──────────────────────────────────────────
(function () {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  if (localStorage.getItem('ml_cookie_consent')) {
    banner.style.display = 'none';
    return;
  }

  document.getElementById('btn-accept-cookies').addEventListener('click', function () {
    localStorage.setItem('ml_cookie_consent', 'accepted');
    banner.style.display = 'none';
  });

  document.getElementById('btn-reject-cookies').addEventListener('click', function () {
    localStorage.setItem('ml_cookie_consent', 'rejected');
    banner.style.display = 'none';
  });
})();

// ── Active nav link ────────────────────────────────────────
(function () {
  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (a) {
    if (a.getAttribute('href') === current) {
      a.setAttribute('aria-current', 'page');
    }
  });
})();
