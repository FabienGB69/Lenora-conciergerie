/* ── Nav scroll behaviour ─────────────────────── */
const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ── Hamburger / mobile menu ──────────────────── */
const hamburger = document.getElementById('navHamburger');
const mobileOverlay = document.getElementById('mobileOverlay');

if (hamburger && mobileOverlay) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      mobileOverlay.style.display = 'flex';
      requestAnimationFrame(() => mobileOverlay.classList.add('open'));
      document.body.style.overflow = 'hidden';
    } else {
      closeMobile();
    }
  });
}

function closeMobile() {
  if (!hamburger || !mobileOverlay) return;
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    if (!mobileOverlay.classList.contains('open')) {
      mobileOverlay.style.display = '';
    }
  }, 380);
}

function toggleMobileSub(e, id) {
  e.preventDefault();
  const sub = document.getElementById(id);
  const chevId = id.replace('sub-', 'chev-');
  const chev = document.getElementById(chevId);
  if (!sub) return;
  const isOpen = sub.classList.toggle('open');
  if (chev) chev.classList.toggle('open', isOpen);
}

/* ── ESC closes mobile menu ───────────────────── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobile();
});

/* ── Année courante ───────────────────────────── */
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

/* ── Scroll reveal (IntersectionObserver) ─────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll(
  '.service-card, .testimonial-card, .process-step, .stat-item, .zone-card, .tarif-card, .blog-card, .about-content, .about-image-col'
).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.6s ${i * 0.06}s ease, transform 0.6s ${i * 0.06}s ease`;
  revealObserver.observe(el);
});

/* ── Contact form — AJAX Formspree ────────────── */
const form = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    const originalHTML = submitBtn.innerHTML;

    submitBtn.innerHTML = 'Envoi en cours…';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.hidden = true;
        if (formSuccess) {
          formSuccess.hidden = false;
          formSuccess.setAttribute('tabindex', '-1');
          formSuccess.focus();
        }
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Erreur serveur');
      }
    } catch (err) {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '';
      alert(
        "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous contacter directement au 06 74 39 87 41."
      );
    }
  });
}
