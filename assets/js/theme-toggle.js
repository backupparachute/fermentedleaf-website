(function () {
  var STORAGE_KEY = 'fl.theme';

  var site = document.getElementById('fl-site');
  var btn = document.getElementById('fl-theme-toggle');
  var icon = document.getElementById('fl-theme-icon');
  var label = document.getElementById('fl-theme-label');
  if (!site || !btn || !icon || !label) return;

  var iconSun = '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/>';
  var iconMoon = '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"/>';

  function apply(theme) {
    if (theme === 'dark') {
      site.dataset.theme = 'dark';
      site.dataset.palette = 'library';
      site.dataset.accent = 'heavy';
      icon.innerHTML = iconSun;
      label.textContent = 'Light';
    } else {
      site.dataset.theme = 'light';
      site.dataset.palette = 'minimal';
      site.dataset.accent = 'balanced';
      icon.innerHTML = iconMoon;
      label.textContent = 'Dark';
    }
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  apply(saved === 'light' || saved === 'dark' ? saved : site.dataset.theme);

  btn.addEventListener('click', function () {
    var next = site.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  });
})();
