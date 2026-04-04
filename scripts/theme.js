const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  root.classList.add('light');
  document.body.classList.add('light');
  updateToggleIcon(true);
} else {
  updateToggleIcon(false);
}

function updateToggleIcon(isLight) {
  if (themeToggle) {
    themeToggle.innerHTML = isLight 
      ? '<i class="fa-solid fa-sun"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = root.classList.contains('light');
    if (isLight) {
      root.classList.remove('light');
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      updateToggleIcon(false);
    } else {
      root.classList.add('light');
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
      updateToggleIcon(true);
    }
  });
}