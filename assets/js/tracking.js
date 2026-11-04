/* ============================================================
   [QH4 SLOT 6] Eventos padrão no dataLayer, Green Park Resort
   whatsapp_click : clique em qualquer link wa.me / api.whatsapp
   form_start     : primeiro campo preenchido de cada formulário
   generate_lead  : envio válido do formulário (antes do /obrigado)
   thank_you_view : visualização da página /obrigado.html
   No GTM: crie acionadores "Evento personalizado" com esses nomes.
   ============================================================ */
(function () {
  var w = window, d = document;
  w.dataLayer = w.dataLayer || [];
  function push(obj) { try { w.dataLayer.push(obj); } catch (e) {} }

  // whatsapp_click
  d.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (!/wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) return;
    push({
      event: 'whatsapp_click',
      link_url: href,
      link_text: (a.textContent || a.getAttribute('aria-label') || '').trim().slice(0, 100),
      page_path: location.pathname
    });
  }, true);

  // form_start (uma vez por formulário)
  var started = {};
  function onField(e) {
    var el = e.target;
    if (!el || !el.form || !el.form.id) return;
    var id = el.form.id;
    if (started[id] || !String(el.value || '').trim()) return;
    started[id] = true;
    push({ event: 'form_start', form_id: id });
  }
  d.addEventListener('input', onField, true);
  d.addEventListener('change', onField, true);

  // generate_lead (o botão só libera com todos os campos preenchidos)
  d.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || (f.id !== 'form-hero' && f.id !== 'form-ff')) return;
    var tip = f.querySelector('select');
    push({
      event: 'generate_lead',
      form_id: f.id,
      lead_origem: f.id === 'form-hero' ? 'Formulário Hero' : 'Formulário Final',
      tipologia: tip ? tip.value : ''
    });
  }, true);

  // thank_you_view
  function thankYou() {
    if (d.body && d.body.getAttribute('data-page') === 'obrigado') {
      var m = /[?&]origem=([^&]+)/.exec(location.search);
      push({ event: 'thank_you_view', lead_origem: m ? decodeURIComponent(m[1]) : '' });
    }
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', thankYou); else thankYou();
})();
