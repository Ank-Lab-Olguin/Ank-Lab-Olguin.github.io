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


