// scripts/thoughts.js
document.addEventListener('DOMContentLoaded', () => {
  const blogGrid = document.getElementById('blogGrid');
  const modal = document.getElementById('postModal');
  const modalBody = document.getElementById('modalBody');
  const closeModalBtn = document.getElementById('closeModal');

  function renderCards() {
    if (!blogGrid) return;
    blogGrid.innerHTML = '';
    // Sort posts by date descending
    const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    sorted.forEach(post => {
      const card = document.createElement('div');
      card.className = 'blog-card';
      card.setAttribute('data-id', post.id);
      card.innerHTML = `
        <div class="card-meta">
          <span class="card-tag">${post.tag}</span>
          <span class="card-date">${post.date}</span>
        </div>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-excerpt">${getExcerpt(post.content)}</p>
        <div class="read-more">
          Read more <i class="fa-solid fa-arrow-right"></i>
        </div>
      `;
      card.addEventListener('click', () => openModal(post.id));
      blogGrid.appendChild(card);
    });
  }

  function openModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
      const formattedContent = formatContent(post.content);
      modalBody.innerHTML = `
        <h2>${post.title}</h2>
        <div class="modal-meta">
          <span class="modal-tag">${post.tag}</span>
          <span>${post.date}</span>
          <span>${post.readTime}</span>
        </div>
        ${formattedContent}
      `;
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) closeModal();
  });

  renderCards();
});