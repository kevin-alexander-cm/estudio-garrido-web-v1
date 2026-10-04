/* =========================================================
   ESTUDIO GARRIDO — JAVASCRIPT
   Funciones actuales:
   1. Menú responsive
   2. Año automático del footer
   3. Animaciones al hacer scroll
   4. Lightbox para fotografías de proyectos
   ========================================================= */

const body = document.body;
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

function closeMenu() {
  body.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menú');
}

menuButton?.addEventListener('click', () => {
  const open = !body.classList.contains('menu-open');
  body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });

document.querySelector('#year').textContent = new Date().getFullYear();

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px' });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

const lightbox = document.querySelector('#lightbox');
const lightboxImg = lightbox?.querySelector('img');
const closeLightbox = lightbox?.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach(button => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = button.dataset.lightbox;
    lightboxImg.alt = button.querySelector('img')?.alt || 'Fotografía ampliada del proyecto';
    lightbox.showModal();
  });
});

closeLightbox?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});
