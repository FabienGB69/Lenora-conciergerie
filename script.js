// ── Menu mobile ───────────────────────────────────────────────────────────────
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

if (menuBtn && menu) {
  const closeMenu = () => {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  };

  menuBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Fermer le menu au clic sur un lien (mobile)
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Fermer le menu au resize (retour desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMenu();
  });

  // Fermer le menu avec la touche Echap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// ── Année courante ─────────────────────────────────────────────────────────────
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// ── Formulaire de contact (AJAX Formspree) ─────────────────────────────────────
const form = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;

    // État de chargement
    submitBtn.textContent = 'Envoi en cours…';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        // Succès : masquer le formulaire, afficher le message de confirmation
        form.hidden = true;
        if (formSuccess) {
          formSuccess.hidden = false;
          formSuccess.focus();
        }
      } else {
        throw new Error('Erreur serveur');
      }
    } catch {
      // Erreur : restaurer le bouton et informer l'utilisateur
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      alert(
        'Une erreur est survenue lors de l\'envoi. Merci de réessayer ou de nous contacter directement par téléphone.'
      );
    }
  });
}
