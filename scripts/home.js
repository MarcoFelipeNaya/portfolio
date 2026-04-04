document.querySelectorAll('.nav-links li').forEach(li => {
  const tooltip = li.querySelector('.tooltip');
  if (!tooltip) return;

  li.addEventListener('mouseenter', () => {
    const rect = li.getBoundingClientRect();
    tooltip.style.top = (rect.bottom + 14) + 'px';
    tooltip.style.left = (rect.left + rect.width / 2) + 'px';
    tooltip.style.transform = 'translateX(-50%)';
  });
});