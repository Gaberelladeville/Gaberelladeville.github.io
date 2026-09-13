// Small, dependency-free helpers. Nothing here is required for the site to read correctly.
(function () {
  // Start every page at the top unless a section anchor was requested.
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!location.hash) { window.scrollTo(0, 0); window.addEventListener('load', function () { window.scrollTo(0, 0); }); }

  // Mark the current page in the nav.
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    var target = a.getAttribute('href').split('/').pop();
    if (target === here) a.setAttribute('aria-current', 'page');
  });

  // Year in the footer.
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Videos: play when scrolled into view, pause when not (saves battery on long pages).
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) { v.play().catch(function () {}); } else { v.pause(); }
      });
    }, { threshold: 0.35 });
    document.querySelectorAll('video[data-autoplay]').forEach(function (v) { io.observe(v); });
  }
})();
