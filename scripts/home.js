// scripts/home.js
document.addEventListener('DOMContentLoaded', () => {
  // Navbar tooltip positioning (keep existing)
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

  // Render latest thoughts (2 most recent posts by date)
  const thoughtsGrid = document.getElementById('latestThoughtsGrid');
  if (thoughtsGrid && typeof blogPosts !== 'undefined') {
    // Sort by date (newest first) - assuming date format "Mon DD, YYYY"
    const sorted = [...blogPosts].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    const latest = sorted.slice(0, 2); // show latest 2
    
    thoughtsGrid.innerHTML = '';
    latest.forEach(post => {
      const card = document.createElement('a');
      card.href = '/pages/thoughts.html'; // link to thoughts page (modal opens there)
      card.className = 'thought-card';
      // Optionally store id to open modal? But easier to just link to thoughts page.
      // For better UX, you could pass a query param, but linking to thoughts page is fine.
      card.innerHTML = `
        <div class="thought-meta">
          <span class="thought-tag">${post.tag}</span>
          <span class="thought-date">${post.date}</span>
        </div>
        <h3 class="thought-title">${post.title}</h3>
        <p class="thought-excerpt">${getExcerpt(post.content)}</p>
        <span class="thought-read">Read more <i class="fa-solid fa-arrow-right"></i></span>
      `;
      thoughtsGrid.appendChild(card);
    });
  }
});