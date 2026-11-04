/* ============================================================
   [QH4 SLOT 6] Eventos padrão no dataLayer, Green Park Resort
   whatsapp_click : clique em qualquer link wa.me / api.whatsapp
   form_start     : primeiro campo preenchido de cada formulário
   generate_lead  : envio válido do formulário (antes do /obrigado)
   thank_you_view : disparado no SLOT 8 de obrigado.html
   O index.html tem uma cópia deste código inline (economiza 1 requisição).
   Se mudar aqui, mude lá também.
   ============================================================ */
(function () {
  window.dataLayer = window.dataLayer || [];

  // whatsapp_click
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (!/wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) return;
    window.dataLayer.push({
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
    window.dataLayer.push({ event: 'form_start', form_id: id });
  }
  document.addEventListener('input', onField, true);
  document.addEventListener('change', onField, true);

  // generate_lead (o botão só libera com todos os campos preenchidos)
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || (f.id !== 'form-hero' && f.id !== 'form-ff')) return;
    var tip = f.querySelector('select');
    window.dataLayer.push({
      event: 'generate_lead',
      form_id: f.id,
      lead_origem: f.id === 'form-hero' ? 'Formulário Hero' : 'Formulário Final',
      tipologia: tip ? tip.value : ''
    });
  }, true);
})();
