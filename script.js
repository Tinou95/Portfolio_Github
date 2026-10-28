(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  toggle.addEventListener('click', function () {
    var attr = root.getAttribute('data-theme');
    var dark = attr ? attr === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  var items = document.querySelectorAll('.reveal');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduced) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(function (el) { io.observe(el); });
})();
