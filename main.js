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

// Botón play
const playBtn = document.querySelector('.play-btn');
if (playBtn && video) {
  playBtn.addEventListener('click', () => video.play());
}

// Placeholders de imágenes via data-ph="id"
// Cuando carga → muestra imagen, oculta placeholder
// Cuando falla → oculta imagen, muestra placeholder
document.querySelectorAll('img[data-ph]').forEach(img => {
  const ph = document.getElementById(img.dataset.ph);

  img.addEventListener('load', () => {
    img.style.display = 'block';
    if (ph) ph.style.display = 'none';
  });

  img.addEventListener('error', () => {
    img.style.display = 'none';
    if (ph) ph.style.display = 'flex';
  });
});
