// ══════════════════════════════════════════════════
// RVN Lab — main.js
// ══════════════════════════════════════════════════

// Oculta el placeholder del hero cuando el video carga
const video  = document.querySelector('.hero video');
const heroPH = document.getElementById('heroPH');

if (video && heroPH) {
  video.addEventListener('loadeddata', () => {
    heroPH.style.display = 'none';
  });
}

document.body.classList.add('loading');

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  document.body.classList.remove('loading');
  loader.classList.add('loader-hidden');

  // lo quita del DOM después de la transición, opcional
  setTimeout(() => {
    loader.remove();
  }, 600);
});

