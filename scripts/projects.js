// Lightbox
const overlay = document.createElement('div');
overlay.classList.add('lightbox-overlay');
document.body.appendChild(overlay);

const lightboxImg = document.createElement('img');
overlay.appendChild(lightboxImg);

document.querySelectorAll('.featured-image img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    overlay.classList.add('active');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') overlay.classList.remove('active');
});