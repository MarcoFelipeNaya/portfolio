// scripts/blog-data.js
// Shared blog posts data for both home and thoughts pages
const blogPosts = [
  {
    id: 1,
    title: "Why I Build Things for Fun",
    date: "Mar 15, 2026",
    readTime: "5 min read",
    tag: "Mindset",
    content: `
      There's a special kind of joy that comes from building something just because you want to. No deadlines, no product managers, no KPIs - just you and an idea. That's where I've learned the most as a developer.

      When I started the Pomaera Wiki, it began as a simple need: I wanted a place to organize my tabletop RPG world. But as I built it, I discovered new techniques: modular JavaScript, Leaflet.js for interactive maps, and even a community submission pipeline via Google Forms.

      <strong>The unexpected benefits:</strong>
      <ul>
        <li><strong>Deep learning</strong> - I retain way more when I'm solving my own problems.</li>
        <li><strong>Portfolio differentiation</strong> - Passion projects show who you really are.</li>
        <li><strong>Creative freedom</strong> - No constraints means you can experiment wildly.</li>
      </ul>

      <blockquote>"The best way to predict the future is to invent it." - Alan Kay</blockquote>

      So if you're a developer reading this, go build that weird idea. It might just teach you more than any course ever could.
    `
  },
  {
    id: 2,
    title: "From Marketing to Code: My Unconventional Path",
    date: "Mar 29, 2026",
    readTime: "7 min read",
    tag: "Career",
    content: `
      During university, I had the opportunity to work for the institution itself. At the time, this made sense primarily to help cover tuition costs. In addition to allowing me to study without financial worries, it gave me valuable exposure to how a company operates on a daily basis. Shortly thereafter, I was promoted to call center supervisor, still within the university, which taught me a great deal about leadership, people development, and empathy toward those I led.

        During this period, I built a strong network, which led to my next role as a Marketing Analyst. Even after completing my degree in Systems Analysis and Development, I chose to remain in marketing, as I was already in a good position. However, more times than I can count, I had always wanted to work with programming, and whenever possible, I brought that interest into my daily work.

        So at the end of last year, I finally decided to close my marketing chapter and move into this long-awaited phase of my professional life. I do not consider my time in marketing wasted, far from it. Instead, I see how this background gives me an advantage that other programmers may not have.

      <strong>Skills that transferred:</strong>
      <ul>
        <li><strong>Data-driven mindset</strong> - I think in metrics and feedback loops.</li>
        <li><strong>Cross-functional communication</strong> - Marketing taught me to talk to stakeholders.</li>
        <li><strong>Process optimization</strong> - Efficiency is everything.</li>
      </ul>

      If you're considering a career switch into tech, don't underestimate your background. Your past experience is a superpower, not a detour.
    `
  },
  {
    id: 3,
    title: "My Favorite VS Code Extensions in 2025",
    date: "Feb 10, 2026",
    readTime: "4 min read",
    tag: "Tools",
    content: `
      VS Code is my second home. Over time, I've collected a few extensions that genuinely improve my workflow. Here's my current setup:

      <ul>
        <li><strong>Prettier</strong> - Automatic formatting saves endless arguments.</li>
        <li><strong>ESLint</strong> - Catches dumb mistakes before I make them.</li>
        <li><strong>GitLens</strong> - Because git blame should be beautiful.</li>
        <li><strong>Material Icon Theme</strong> - Makes file navigation instantly recognizable.</li>
      </ul>

      I keep my setup minimal - too many extensions slow you down. These five cover 90% of my needs.
    `
  }
];

// Helper function to format content (same as before)
function formatContent(content) {
  const blocks = content.split(/\n\s*\n/);
  let formatted = '';
  for (let block of blocks) {
    block = block.trim();
    if (!block) continue;
    if (block.startsWith('<') && (block.includes('>') && !block.startsWith('<p>'))) {
      formatted += block + '\n';
    } else {
      formatted += `<p>${block.replace(/\n/g, '<br>')}</p>\n`;
    }
  }
  return formatted;
}

function getExcerpt(content, length = 120) {
  const plainText = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  return plainText.length > length ? plainText.slice(0, length) + '...' : plainText;
}