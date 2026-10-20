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
  },
  {
    id: 4,
    title: "Creativity in the Post-AI Boom",
    date: "Oct 20, 2026",
    readTime: "10 min read",
    tag: "Career, Mindset",
    content: `
      Every few months another AI tool shows up with the same pitch: the hard part is over. You describe what you want, click a button, and a draft appears. That speed is real, and it’s impressive. It can also make creative work feel like a race you didn’t sign up for. If a machine can make something in seconds, what’s left for the rest of us?

      I don’t think the answer is to try to out-produce AI. The better questions are: What are we actually trying to make? Why does it matter? How would we know if it’s good? Those questions haven’t gotten easier to answer. If anything, they stand out more now that a first draft isn’t the main roadblock.

      Getting something made and getting it to matter are different jobs, and the second one is harder to hand off. AI can generate options, summarize material, or turn a rough outline into something you can react to. But options aren’t a point of view. Someone still has to decide what belongs, what feels off, and what the work is trying to say. Taste isn’t just a preference for polished surfaces. It’s having reasons for the choices you make.

      That kind of judgment comes from paying attention: books, conversations, projects, mistakes, the small details you carry around. A tool can remix patterns from its training data. It doesn’t have your context or your responsibility for what comes out. You still have to bring that to the work.

      Speed changes where the hard part sits. For a long time, getting an idea out of your head and into the world took time and technical effort. Generative tools lower some of that cost. But they push more of the work toward defining the problem, giving clear direction, reviewing what comes back, and deciding what needs another pass.

      Software is a good example. Generating a component isn’t the same as understanding how it fits the product. Producing code isn’t the same as making it reliable, accessible, maintainable, or secure. The faster the first version arrives, the more important it is to ask whether it solves the right problem and what it might break.

      A few things help. Start with your own question: before you ask a tool for a solution, write down what you’re trying to achieve. Ask for alternatives, then compare them with your goals instead of taking the first fluent answer. Check the work. Verify facts, test code, look for missing context. Confident wording is not evidence that an answer is correct. Let the tool handle busywork, but stay involved in choices that shape voice, quality, and consequences. And make room to practice. If you outsource every difficult step, you may also outsource the repetition that builds your own ability.

      There’s a real trade-off. If a tool removes a tedious obstacle, it can give you more room to experiment. If it makes every meaningful decision for you, you risk becoming an editor of work you don’t fully understand. Convenience is useful. It isn’t the same as growth.

      People early in a career should be especially careful here. It’s tempting to measure progress by how much you can deliver in a day. But the knowledge you build while working through a problem is part of the deliverable too. If AI gives you a shortcut, take time to understand the path it skipped. Ask why a solution works, try changing it, see where it breaks. You want to end up more capable, not just faster.

      Most creative work has always been shaped by what came before it. We learn patterns, borrow techniques, respond to other people’s ideas, and combine influences in new ways. AI doesn’t invent influence or imitation. It makes both more visible and more abundant. That abundance makes attribution, permission, and honest representation more important, not less.

      When you use generated material, ask where it came from, who might be affected, and whether presenting it as entirely your own would mislead someone. Those questions don’t have one universal answer for every project. Avoiding them doesn’t make them go away. Trust is part of the work.

      There’s also value in making something without optimizing every step. A small project, a rough sketch, or a first attempt that nobody else sees can teach you what you enjoy and where your instincts take you. If every activity has to produce a polished result as quickly as possible, experimentation starts to feel like wasted time. Often the detour is where the interesting idea appears.

      That’s why I don’t want to treat every blank space as a problem that needs to be filled instantly. Sitting with an unclear idea can be uncomfortable, but it gives you a chance to notice what you actually think before a confident suggestion pulls you in another direction. You can still ask for help afterward. Starting with your own rough thoughts simply gives you something to respond to besides a generated answer.

      When thousands of people can produce a competent first draft, personal perspective becomes more valuable. The work that sticks often has a clear reason to exist. Maybe it’s a thoughtful explanation, a specific experience, an odd combination of interests, or obvious care for its audience. Calling something “human” doesn’t make it good. What matters is the attention and intention behind the choices.

      That perspective usually shows up in small, concrete choices. It might be the example you choose because you know your audience has faced that exact frustration, or the feature you leave out because it would make the product harder to use. It might be a sentence you rewrite because the easy version doesn’t sound like you. These decisions rarely look dramatic on their own, but together they give a project its character.

      A blank page can be intimidating, and AI can be a good way to get unstuck. Ask it for a counterargument, a list of questions, or a rough structure. Then close the suggestions and make something of your own. Keep the parts that help, discard the parts that don’t, and be ready to explain why the final version is yours.

      We don’t have to choose between rejecting new tools and letting them define our work. We can learn what they do well, notice what they can’t decide for us, and use them on purpose. We don’t need to prove that people can do everything a machine can do. We need to keep deciding what’s worth doing in the first place.

      The AI boom may change how quickly we can make things. It doesn’t remove the need for curiosity, judgment, practice, or care. Those aren’t leftovers from an older way of working. They’re what make the work mean something.
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