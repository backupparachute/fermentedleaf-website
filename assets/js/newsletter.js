(function () {
  var forms = document.querySelectorAll('form[data-newsletter]');
  if (!forms.length) return;

  forms.forEach(function (form) {
    var btn = form.querySelector('button[type="submit"]');
    var input = form.querySelector('input[type="email"]');
    var fine = form.parentElement && form.parentElement.querySelector('.fl-news-fine');
    if (!btn || !input) return;
    var original = btn.textContent;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var endpoint = form.dataset.endpoint;

      if (!endpoint) {
        btn.textContent = 'Not wired up yet';
        if (fine) fine.textContent = 'The subscribe endpoint is not configured. Set site.newsletter.endpoint.';
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Sending —';

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: input.value })
      }).then(function (r) {
        if (!r.ok) throw new Error('subscribe failed');
        btn.textContent = 'Thank you —';
        input.value = '';
      }).catch(function () {
        btn.textContent = 'Try again →';
        btn.disabled = false;
        setTimeout(function () { btn.textContent = original; }, 3000);
      });
    });
  });
})();
