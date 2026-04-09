// ─── DATA ───────────────────────────────────
const TEAM = [
  { initials:'AM', name:'Amit', role:'Founder & Strategy Director', bg:'linear-gradient(135deg,#c8381e,#e85234)' },
  { initials:'AN', name:'Ankit Sharma', role:'Lead UX & Web Designer', bg:'linear-gradient(135deg,#e07b39,#c8381e)', image:'../Gemini_Generated_Image_muvmfxmuvmfxmuvm.png' },
  { initials:'AS', name:'Ashutosh Choudhary', role:'SEO & Content Lead', bg:'linear-gradient(135deg,#c9a84c,#a07a2c)' },
  { initials:'AT', name:'Anshuman Tripathi', role:'Analytics & COO Lead', bg:'linear-gradient(135deg,#7b2d8b,#9d4edd)' },
  { initials:'AJ', name:'Ajay Dhar Dubey', role:'Paid Acquisition Specialist', bg:'linear-gradient(135deg,#2d6a4f,#1b4332)' },
  { initials:'SW', name:'Swapnit Patel', role:'Frontend Engineer', bg:'linear-gradient(135deg,#3a0ca3,#4361ee)' },
  { initials:'SS', name:'Sahil Singh', role:'Brand & Creative Lead', bg:'linear-gradient(135deg,#1b6ca8,#1e90ff)' },
  { initials:'RK', name:'Ravi Kumar', role:'DevOps & Infrastructure', bg:'linear-gradient(135deg,#d62828,#f77f00)' },
  { initials:'PR', name:'Priya Reddy', role:'Customer Success Lead', bg:'linear-gradient(135deg,#52b788,#06a77d)' },
  { initials:'VJ', name:'Vikram Jain', role:'Performance Marketing', bg:'linear-gradient(135deg,#ff006e,#d946ef)' }
];

const CASES = [
  { tag:'SEO', service:'seo', client:'Stackline', industry:'B2B SaaS', metric:'+187%', metricLabel:'Qualified Leads', desc:'Rebuilt acquisition engine from scratch. Organic leads tripled in 90 days.', color:'#0e1c2f' },
  { tag:'Paid Ads', service:'paid', client:'NovaPay', industry:'Fintech', metric:'3.8×', metricLabel:'ROAS', desc:'Precision targeting and creative refresh cut cost per acquisition by 62%.', color:'#1a3050' },
  { tag:'Web Design', service:'web', client:'Luminary', industry:'DTC E-commerce', metric:'+213%', metricLabel:'Demo Bookings', desc:'New site architecture and conversion-first copy doubled pipeline in 60 days.', color:'#2d3436' },
  { tag:'CRO', service:'cro', client:'Archon', industry:'SaaS', metric:'+58%', metricLabel:'Conversion Rate', desc:'10-week CRO sprint identified 4 critical drop-off points, fixing each systematically.', color:'#6c3483' },
  { tag:'SEO', service:'seo', client:'Meridian', industry:'B2B Services', metric:'Page 1', metricLabel:'for 22 Keywords', desc:'Long-form content strategy drove 3× organic traffic growth in 6 months.', color:'#1b4332' },
  { tag:'Brand', service:'brand', client:'Vaultex', industry:'Fintech', metric:'+92%', metricLabel:'Inbound Inquiries', desc:'Premium rebrand repositioned the company to command 2× their previous price point.', color:'#7b2d8b' }
];

const BLOGS = [
  { tag:'Guide', title:'How High-Impact Web Design Shapes Brand Growth in 2026', sub:'Modern web design operates at the intersection of cognitive science, behavioural UX, and performance engineering.', author:'Ankit', authorBg:'#e07b39', authorInitials:'AN', time:'7 min read', date:'Feb 20, 2026', id:'blog-0', image:'b1.jpg' },
  { tag:'AI', title:'The Rise of AI Agents & Why Businesses Need Agentic AI in 2026', sub:'AI agents are evolving into autonomous execution systems that plan, reason, and operate with minimal oversight.', author:'Amit', authorBg:'#c8381e', authorInitials:'AM', time:'7 min read', date:'Feb 18, 2026', id:'blog-00', image:'b21.jpg' },
  { tag:'SEO + Paid', title:'Data-Led SEO & Paid Advertising: The Only Scalable Growth Engine in 2026', sub:'Top brands run SEO and paid ads as one integrated, data-led system to build compounding growth.', author:'Ashutosh', authorBg:'#c9a84c', authorInitials:'AS', time:'8 min read', date:'Feb 16, 2026', id:'blog-000', image:'b31.png' },
  { tag:'CRO', title:'Why Conversion Rate Optimisation (CRO) Is the Missing Piece in Your Funnel', sub:'CRO systematically removes friction and improves decision clarity to unlock compounding funnel performance.', author:'Anshuman', authorBg:'#7b2d8b', authorInitials:'AT', time:'7 min read', date:'Feb 14, 2026', id:'blog-0000', image:'b41.jpg' },
  { tag:'Analytics', title:'Analytics & Reporting — Turning Raw Data Into Growth Decisions', sub:'Integrated analytics stacks transform raw signals into structured, actionable intelligence.', author:'Ashutosh', authorBg:'#c9a84c', authorInitials:'AS', time:'7 min read', date:'Feb 13, 2026', id:'blog-00000', image:'b51.png' },
  { tag:'Case Study', title:'How We Increased a SaaS Client\'s Leads by 187% in 90 Days', sub:'The exact playbook: strategy, execution, and what didn\'t work.', author:'Amit', authorBg:'#c8381e', authorInitials:'AM', time:'8 min read', date:'Feb 12, 2026', id:'blog-1' }
];

const FAQS = [
  { cat:'Process', q:'How does an engagement typically start?', a:'Every engagement starts with a 30-minute discovery call. If we\'re aligned on fit, we\'ll send a brief questionnaire and then come back with a proposed approach, timeline, and pricing within 48 hours. Onboarding typically takes 5–7 business days.' },
  { cat:'Timelines', q:'How long does a project take?', a:'Web projects typically take 6–10 weeks. SEO retainers run month-to-month with meaningful results visible in 90 days. Paid campaigns are live within 2 weeks. Branding projects run 3–5 weeks from brief to delivery.' },
  { cat:'Timelines', q:'What if a deadline is missed?', a:'We build buffer into every timeline and flag risks early. If something is going to slip, you\'ll know before it happens — never after. In 5 years, we have never missed a client-facing deadline without prior notice.' },
  { cat:'Communication', q:'How often will we communicate?', a:'Weekly Loom video updates (async — no calendar needed), fortnightly strategy calls, and monthly performance reports. You\'ll always know what\'s happening. Our average response time to Slack messages is under 3 hours.' },
  { cat:'Communication', q:'Who is my main point of contact?', a:'A senior team member — never a junior or account manager. You\'ll meet them on the discovery call and they\'ll own your project end-to-end.' },
  { cat:'Pricing', q:'Do you offer fixed-price or retainer?', a:'Both. Project work (web, brand) is fixed-price. Ongoing services (SEO, paid, CRO, analytics) are monthly retainers with a 3-month minimum. We don\'t do hourly billing.' },
  { cat:'Pricing', q:'What\'s your minimum engagement?', a:'Our minimum project is ₹4,00,000. Retainers start at ₹1,20,000/month. We\'re transparent about pricing on our services page — no hidden costs, ever.' },
  { cat:'Results', q:'Can you guarantee results?', a:'No — and anyone who does is lying. What we guarantee: a clear strategy grounded in data, weekly updates on progress, transparent reporting on what\'s working and what isn\'t, and fast pivots when needed.' },
  { cat:'About Us', q:'How big is your team?', a:'Six full-time specialists. We intentionally stay small so every client gets senior attention. We have a network of specialist contractors for overflow work, but your project is always led by a core Knectto team member.' },
  { cat:'Getting Started', q:'What\'s the first step?', a:'Book a free 30-minute call. No commitment, no pitch — just a conversation about your business. Use the contact page to send us a message and pick a time that works.' }
];

const ARTICLES = {
  'blog-0': {
    title: 'How High-Impact Web Design Shapes Brand Growth in 2026',
    sub: 'Modern web design operates at the intersection of cognitive science, behavioural UX, and performance engineering.',
    author: 'Ankit', authorBg: '#e07b39', authorInitials: 'AN', time: '7 min read', date: 'Feb 20, 2026',
    body: `<p>In 2026, web design directly influences a brand's competitive position. Users expect precision, speed, and clarity; anything less increases bounce probability and decreases trust. Modern web design operates at the intersection of cognitive science, behavioural UX, and performance engineering.</p>
<img src="b1.jpg" alt="Modern web design concept" style="width:100%;border-radius:6px;margin:2rem 0">
<h2>Key growth drivers</h2>
<p><strong>Experience Efficiency:</strong> Clean information architecture reduces mental load and improves task completion rates. When users can find what they need without friction, conversion rates increase. Every unnecessary click is a decision point where users can drop off.</p>
<p><strong>Speed as a Brand Signal:</strong> With Core Web Vitals now shaping search visibility, even a 100ms improvement can shift engagement. Fast sites signal professionalism and reliability. Slow sites communicate carelessness, regardless of how polished the visuals are.</p>
<p><strong>Micro-Interactions:</strong> Subtle motion cues guide attention, validate actions, and improve perceived system stability. A well-timed animation confirms that a button was clicked. A smooth transition reduces cognitive jarring when content changes.</p>
<img src="b12.png" alt="UX design patterns" style="width:100%;border-radius:6px;margin:2rem 0">
<p><strong>Personalised Layouts:</strong> Adaptive components that adjust based on user behaviour increase relevance and time-on-page. Returning visitors see different CTAs than first-time browsers. High-intent users get expedited paths to conversion.</p>
<p><strong>Accessibility-first Design:</strong> Inclusive patterns expand audience reach and enhance SEO by aligning with global standards. Accessible sites rank better, convert better, and face lower legal risk. It's not optional anymore—it's foundational.</p>
<h2>The competitive advantage</h2>
<p>Brands that invest in high-impact design gain measurable advantages: lower acquisition costs, higher conversion rates, and stronger user retention. In 2026, the website is not a marketing asset—it's the operational engine of digital growth.</p>
<p>Every design decision either accelerates or inhibits business outcomes. High-impact design isn't about aesthetics—it's about architecting experiences that remove friction, build trust, and guide users toward action.</p>
<div class="article-cta-box"><h3>Ready to elevate your web presence?</h3><p>We design conversion-focused websites that turn visitors into customers. Book a free strategy call to discuss your project.</p><button class="btn btn-primary" onclick="navigate('contact')">Get Started →</button></div>`
  },
  'blog-00': {
    title: 'The Rise of AI Agents & Why Businesses Need Agentic AI in 2026',
    sub: 'AI agents have evolved from prompt-driven assistants into autonomous systems capable of planning, reasoning, and executing tasks with minimal oversight.',
    author: 'Amit', authorBg: '#c8381e', authorInitials: 'AM', time: '7 min read', date: 'Feb 18, 2026',
    body: `<p>AI agents have evolved from prompt-driven assistants into autonomous systems capable of planning, reasoning, and executing tasks with minimal oversight. In 2026, this shift transforms how businesses operate.</p>
<img src="b21.jpg" alt="Agentic AI systems and automation" style="width:100%;border-radius:6px;margin:2rem 0">
<h2>Core capabilities driving adoption</h2>
<p><strong>Autonomous Task Planning:</strong> Agents break large objectives into structured sub-tasks.</p>
<p><strong>Tool-Calling & System Integration:</strong> They interact with APIs, CRMs, CMSs, and internal tools to perform real operations.</p>
<p><strong>Context Persistence:</strong> Long-running tasks maintain memory across sessions, enabling continuity.</p>
<p><strong>Real-Time Adaptation:</strong> Agents adjust behaviour based on new data inputs, errors, or changing conditions.</p>
<p><strong>Multi-Agent Coordination:</strong> Complex workflows parallelise across multiple specialised agents.</p>
<img src="b22.jpeg" alt="Multi-agent workflow architecture" style="width:100%;border-radius:6px;margin:2rem 0">
<h2>Operational impact in 2026</h2>
<p>Businesses are seeing reduced manual workload, shorter cycle times, improved consistency, and substantial scalability without proportional hiring.</p>
<p>By introducing an always-on execution layer, agentic AI reduces human error and keeps operations moving continuously across customer support, analysis, content generation, and internal automation.</p>
<p>Businesses embracing agentic AI in 2026 gain an execution layer that operates continuously, reduces human error, and transforms processes such as customer support, analysis, content generation, and internal automation. Agentic AI is no longer an optional enhancement—it is foundational infrastructure.</p>
<div class="article-cta-box"><h3>Want to implement Agentic AI in your business?</h3><p>We design and deploy autonomous AI agent systems tailored to your workflows.</p><button class="btn btn-primary" onclick="navigate('contact')">Book a Strategy Call →</button></div>`
  },
  'blog-000': {
    title: 'Data-Led SEO & Paid Advertising: The Only Scalable Growth Engine in 2026',
    sub: 'In 2026, scalable acquisition requires a closed-loop engine where SEO creates depth, paid ads create immediacy, and data binds both into a predictable pipeline.',
    author: 'Ashutosh', authorBg: '#c9a84c', authorInitials: 'AS', time: '8 min read', date: 'Feb 16, 2026',
    body: `<p>In 2026, SEO and paid advertising cannot be treated as independent channels. The most successful brands use a unified, data-led model where both systems feed intelligence into each other, creating a compounding growth engine.</p>
<img src="b31.png" alt="Data-led SEO and paid media strategy" style="width:100%;border-radius:6px;margin:2rem 0">
<h2>Key principles</h2>
<p><strong>Search Intent Modelling:</strong> Real-time behavioural clusters replace keyword-only strategies.</p>
<p><strong>Predictive SEO:</strong> Machine learning identifies content gaps before competitors target them.</p>
<p><strong>Paid Ads as Validation:</strong> Paid campaigns test and refine SEO hypotheses, accelerating learning cycles.</p>
<p><strong>Signal Integration:</strong> Engagement metrics from ads inform organic strategy, and vice versa.</p>
<p><strong>Automated Bid & Budget Control:</strong> Algorithms dynamically adjust spend based on intent, time, and probability of conversion.</p>
<img src="b32.webp" alt="Unified SEO and paid ads growth engine" style="width:100%;border-radius:6px;margin:2rem 0">
<h2>Why this model scales</h2>
<p>This integrated approach reduces CAC, strengthens domain authority, and accelerates visibility. Data becomes the central orchestrator—every search, click, or interaction feeds back into the growth system.</p>
<p>In 2026, scalable acquisition requires a closed-loop engine where SEO creates depth, paid ads create immediacy, and data binds both into a predictable pipeline.</p>
<div class="article-cta-box"><h3>Need a unified growth engine?</h3><p>We build integrated SEO + paid systems designed for predictable, scalable acquisition.</p><button class="btn btn-primary" onclick="navigate('contact')">Talk to Our Team →</button></div>`
  },
  'blog-0000': {
    title: 'Why Conversion Rate Optimisation (CRO) Is the Missing Piece in Your Funnel',
    sub: 'In 2026, performance-driven brands treat CRO as ongoing infrastructure—not a campaign.',
    author: 'Anshuman', authorBg: '#7b2d8b', authorInitials: 'AT', time: '7 min read', date: 'Feb 14, 2026',
    body: `<p>Despite increases in traffic and advertising budgets, many brands underperform because their funnels do not convert efficiently. CRO is the discipline that bridges this gap by systematically removing friction and improving decision clarity.</p>
<img src="b41.jpg" alt="Conversion funnel optimization strategy" style="width:100%;border-radius:6px;margin:2rem 0">
<h2>Key CRO mechanisms</h2>
<p><strong>A/B & Multivariate Testing:</strong> Data-driven validation of layout, copy, and CTA changes.</p>
<p><strong>Behaviour Analysis:</strong> Heatmaps, scroll maps, and session recordings identify points of hesitation.</p>
<p><strong>Cognitive-Ease Copywriting:</strong> Clear, low-friction text improves conversion probability.</p>
<p><strong>Form Optimisation:</strong> Reducing input load directly lifts completion rates.</p>
<p><strong>UX Consistency:</strong> Predictable patterns reduce user fatigue and improve trust.</p>
<img src="b42.jpg" alt="CRO testing and analytics dashboard" style="width:100%;border-radius:6px;margin:2rem 0">
<h2>Why CRO compounds growth</h2>
<p>CRO multiplies the value of every marketing effort. A 1%–2% lift in conversion often outperforms major increases in traffic or ad spend because improvements compound across the entire funnel.</p>
<p>In 2026, performance-driven brands treat CRO as ongoing infrastructure—not a campaign. The result: higher revenue per visitor, lower acquisition cost, and a more efficient growth system.</p>
<div class="article-cta-box"><h3>Want a higher-converting funnel?</h3><p>We run data-led CRO programs that increase revenue without increasing ad spend.</p><button class="btn btn-primary" onclick="navigate('contact')">Start a CRO Audit →</button></div>`
  },
  'blog-00000': {
    title: 'Analytics & Reporting — Turning Raw Data Into Growth Decisions',
    sub: 'In 2026, organisations rely on integrated analytics stacks that synthesise information across channels, products, and touchpoints.',
    author: 'Ashutosh', authorBg: '#c9a84c', authorInitials: 'AS', time: '7 min read', date: 'Feb 13, 2026',
    body: `<p>Data in isolation provides no competitive value. Growth emerges only when analytics systems convert raw signals into structured, actionable intelligence. In 2026, organisations rely on integrated analytics stacks that synthesise information across channels, products, and touchpoints.</p>
<img src="b51.png" alt="Integrated analytics dashboard" style="width:100%;border-radius:6px;margin:2rem 0">
<h2>Key components of effective analytics</h2>
<p><strong>Unified Tracking Architecture:</strong> Standardised event schemas ensure clean, comparable data.</p>
<p><strong>Funnel Reporting:</strong> Identifies drop-off points and quantifies revenue impact.</p>
<p><strong>Cohort Analysis:</strong> Measures retention, behavioural drift, and long-term value.</p>
<p><strong>Predictive Modelling:</strong> Anticipates trends using historical and real-time signals.</p>
<p><strong>Insight-Led Reporting:</strong> Dashboards explain why changes occur, not just what happened.</p>
<img src="b52.png" alt="Data-driven growth reporting" style="width:100%;border-radius:6px;margin:2rem 0">
<h2>From data to decision velocity</h2>
<p>The outcome is a decision-making environment where teams act based on evidence, not assumptions.</p>
<p>Effective analytics reduces uncertainty, accelerates strategy, and ensures each action aligns with measurable outcomes.</p>
<p>In 2026, data maturity is directly correlated with growth velocity—businesses that interpret data precisely outperform those that merely collect it.</p>
<div class="article-cta-box"><h3>Need clearer growth decisions?</h3><p>We build analytics and reporting systems that convert raw data into strategic action.</p><button class="btn btn-primary" onclick="navigate('contact')">Build Your Analytics Stack →</button></div>`
  },
  'blog-1': {
    title: 'How We Increased a SaaS Client\'s Leads by 187% in 90 Days',
    sub: 'The exact playbook: strategy, execution, and what didn\'t work.',
    author: 'Amit', authorBg: '#c8381e', authorInitials: 'AM', time: '8 min read', date: 'Feb 12, 2026',
    body: `<h2>The situation when we started</h2>
<p>Stackline had traffic. Good traffic, actually — around 18,000 monthly visitors from a solid SEO foundation their previous agency had built. The problem? It wasn't converting. Their demo booking rate was 0.4%. The industry average for B2B SaaS is 1.5–2.5%. They were leaving 4× the leads on the table.</p>
<div class="article-cta-box"><h3>Is your traffic converting?</h3><p>We run free conversion audits for qualified B2B SaaS companies. No commitment — just clarity.</p><button class="btn btn-primary" onclick="navigate('contact')">Get a Free Audit →</button></div>
<h2>What we found in the audit</h2>
<p>Three things were killing their conversions:</p>
<ul>
<li><strong>The hero section spoke to features, not outcomes.</strong> "Advanced analytics for modern teams" means nothing to a CMO who needs to hit pipeline targets.</li>
<li><strong>The CTA was buried.</strong> "Book a Demo" appeared only in the navigation — no inline CTAs, no friction-reducing copy, no reassurance.</li>
<li><strong>No social proof at critical decision points.</strong> Testimonials lived on a dedicated page nobody visited. The homepage had none.</li>
</ul>
<h2>The 90-day plan</h2>
<p>We split the work into three sprints. Sprint 1 focused on the homepage — rewriting the hero, adding three strategic CTA placements, and injecting social proof at scroll milestones. Sprint 2 tackled the pricing page and demo booking flow. Sprint 3 was paid amplification of what was now converting.</p>
<h2>The results</h2>
<p>By day 90, demo bookings had increased by 187%. Cost per demo dropped by 44% because we were sending better-qualified traffic to a page that converted. Pipeline attributed to the website increased by ₹19Cr annualised.</p>
<p>The most important lesson: most SaaS companies have a conversion problem masquerading as a traffic problem. Fix the funnel before you fill it.</p>`
  }
};

// ─── ROUTING ─────────────────────────────────
const ALL_PAGES = ['home','services','service-web','service-seo','service-paid','service-brand','service-cro','service-analytics','work','about','blog','article','contact','faq','privacy','terms','cookies','404'];
let CURRENT_PAGE = 'home';

function syncNavVisualState() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  const atTop = window.scrollY <= 10;
  const onHome = CURRENT_PAGE === 'home';

  nav.classList.toggle('nav-home-top', onHome && atTop);
  nav.classList.toggle('scrolled', !onHome || !atTop);
}

function navigate(pageId) {
  CURRENT_PAGE = pageId;
  ALL_PAGES.forEach(id => {
    const el = document.getElementById('page-'+id);
    if(el) el.classList.toggle('active', id===pageId);
  });
  window.scrollTo({top:0,behavior:'instant'});
  initReveal();
  updateNav(pageId);
  syncNavVisualState();
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.remove('nav-hidden');
}

function updateNav(pageId) {
  const nav = document.getElementById('mainNav');
  const isDark = ['home','services','service-web','service-seo','service-paid','service-brand','service-cro','service-analytics','work','about','blog','article','contact','faq','privacy','terms','cookies','404'].includes(pageId);
  const logo = nav.querySelector('.nav-logo');
  // hero pages have dark bg — nav doesn't need to scroll tint immediately

  // Update morphic nav active state
  const morphicItems = document.querySelectorAll('.morphic-nav-item');
  morphicItems.forEach((item, index) => {
    const itemPage = item.getAttribute('data-page');
    // Handle page matching (e.g., 'services' matches 'service-*', 'blog' matches 'article')
    const isActive = itemPage === pageId || 
                     (itemPage === 'services' && pageId.startsWith('service-')) ||
                     (itemPage === 'blog' && pageId === 'article') ||
                     (itemPage === 'work' && pageId.startsWith('case-'));
    
    item.classList.toggle('active', isActive);
    
    // Add helper classes for rounded corners on adjacent items
    item.classList.remove('before-active', 'after-active');
    if (isActive) {
      if (morphicItems[index - 1]) {
        morphicItems[index - 1].classList.add('before-active');
      }
      if (morphicItems[index + 1]) {
        morphicItems[index + 1].classList.add('after-active');
      }
    }
  });

  const policyLinks = document.querySelectorAll('.policy-link');
  policyLinks.forEach((link) => {
    const policyName = link.getAttribute('data-policy');
    link.classList.toggle('active', policyName === pageId);
  });
}

// ─── RENDER HELPERS ─────────────────────────
function renderTeam(containerId, limit) {
  const el = document.getElementById(containerId);
  if(!el) return;
  const members = limit ? TEAM.slice(0,limit) : TEAM;
  el.innerHTML = members.map((m,i) => `
    <div class="team-card reveal" style="transition-delay:${i*0.08}s">
      <div class="team-avatar"><div class="team-avatar-inner" style="background:${m.bg}">${m.image ? `<img class="team-avatar-img" src="${m.image}" alt="${m.name}" loading="lazy" decoding="async" onerror="this.remove();this.parentElement.textContent='${m.initials}'">` : m.initials}</div></div>
      <div class="team-name">${m.name}</div>
      <div class="team-role">${m.role}</div>
    </div>
  `).join('');
}

function renderCases() {
  const el = document.getElementById('caseGrid');
  if(!el) return;
  el.innerHTML = CASES.map((c,i) => `
    <div class="case-card reveal" style="transition-delay:${(i%3)*0.1}s" data-service="${c.service}">
      <div class="case-thumb" style="background:${c.color}">
        <div class="case-thumb-label">${c.tag}</div>
        <div style="font-family:var(--ff-display);font-size:4rem;font-weight:700;color:rgba(255,255,255,0.08)">${c.metric}</div>
      </div>
      <div class="case-card-content">
        <div class="case-metric-big">${c.metric}</div>
        <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--ink-3);margin-bottom:0.75rem">${c.metricLabel}</div>
        <h3>${c.client} · ${c.industry}</h3>
        <p>${c.desc}</p>
        <div class="card-link" style="margin-top:1.25rem;cursor:pointer" onclick="navigate('contact')">Want results like this →</div>
      </div>
    </div>
  `).join('');
}

function filterWork(service, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.case-card').forEach(card => {
    const show = service==='all' || card.dataset.service===service;
    card.style.display = show ? '' : 'none';
  });
}

function renderBlogs() {
  const el = document.getElementById('blogGrid');
  if(!el) return;
  const colors = ['#0e1c2f','#c8381e','#2d6a4f','#c9a84c','#3a0ca3','#7b2d8b'];
  el.innerHTML = BLOGS.map((b,i) => `
    <div class="blog-card reveal" style="transition-delay:${(i%3)*0.1}s" onclick="openArticle('${b.id}')">
      <div class="blog-thumb" style="background:${colors[i % colors.length]}">
        ${b.image
          ? `<img src="${b.image}" alt="${b.title}" class="blog-thumb-img">`
          : `<div style="font-family:var(--ff-display);font-size:0.9rem;color:rgba(255,255,255,0.2);padding:2rem;text-align:center;font-style:italic">${b.title.substring(0,40)}…</div>`
        }
      </div>
      <div class="blog-card-content">
        <div class="blog-tag">${b.tag}</div>
        <h3>${b.title}</h3>
        <p style="font-size:0.88rem;color:var(--ink-3);line-height:1.6">${b.sub}</p>
        <div class="blog-meta">
          <div class="blog-author-avatar" style="background:${b.authorBg}">${b.authorInitials}</div>
          <span>${b.author}</span>
          <span>·</span><span>${b.time}</span>
          <span>·</span><span>${b.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function openArticle(id) {
  const art = ARTICLES[id] || ARTICLES['blog-1'];
  document.getElementById('articleTitle').textContent = art.title;
  document.getElementById('articleSub').textContent = art.sub;
  document.getElementById('articleMeta').innerHTML = `
    <div class="blog-author-avatar" style="background:${art.authorBg};width:40px;height:40px">${art.authorInitials}</div>
    <span style="color:var(--ink-2);font-size:0.9rem">${art.author}</span>
    <span style="color:var(--ink-3)">·</span>
    <span style="color:var(--ink-3);font-size:0.85rem">${art.time}</span>
    <span style="color:var(--ink-3)">·</span>
    <span style="color:var(--ink-3);font-size:0.85rem">${art.date}</span>
  `;
  document.getElementById('articleBody').innerHTML = art.body;
  navigate('article');
}

function renderFAQ() {
  const el = document.getElementById('faqAccordion');
  if(!el) return;
  el.innerHTML = FAQS.map((f,i) => `
    <div class="faq-item" data-i="${i}">
      <div class="faq-q" onclick="toggleFaq(${i})">
        <span>${f.q}</span>
        <div class="faq-icon">+</div>
      </div>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>
  `).join('');
}

function renderServiceFaq() {
  const el = document.getElementById('serviceFaq');
  if(!el) return;
  const webFaqs = FAQS.filter(f => ['Process','Timelines','Pricing','Getting Started'].includes(f.cat)).slice(0,5);
  el.innerHTML = webFaqs.map((f,i) => `
    <div class="faq-item" data-i="sf${i}">
      <div class="faq-q" onclick="toggleFaq('sf${i}')">
        <span>${f.q}</span><div class="faq-icon">+</div>
      </div>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>
  `).join('');
}

function toggleFaq(i) {
  const item = document.querySelector(`[data-i="${i}"]`);
  if(!item) return;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
}

// ─── SCROLL & REVEAL ─────────────────────────
function initReveal() {
  setTimeout(() => {
    const els = document.querySelectorAll('.page.active .reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => { el.classList.remove('in'); obs.observe(el); });
    // Also trigger elements in viewport immediately
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight) el.classList.add('in');
    });
  }, 50);
}

// ─── NAV SCROLL ─────────────────────────────
let lastNavScrollY = window.scrollY;
let navStopTimer = null;

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  const currentY = window.scrollY;
  const deltaY = currentY - lastNavScrollY;

  syncNavVisualState();

  if (currentY <= 10) {
    nav.classList.remove('nav-hidden');
  } else if (deltaY > 4) {
    nav.classList.add('nav-hidden');
  } else if (deltaY < -2) {
    nav.classList.remove('nav-hidden');
  }

  if (navStopTimer) clearTimeout(navStopTimer);
  navStopTimer = setTimeout(() => {
    const navEl = document.getElementById('mainNav');
    if (navEl) navEl.classList.remove('nav-hidden');
  }, 150);

  lastNavScrollY = currentY;
}, { passive: true });

syncNavVisualState();

// ─── MOBILE NAV ─────────────────────────────
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// ─── COOKIE BANNER ──────────────────────────
function closeCookie() {
  document.getElementById('cookieBanner').classList.remove('show');
}
setTimeout(() => document.getElementById('cookieBanner').classList.add('show'), 1500);

function initFoundersAutoScroll() {
  const scroller = document.getElementById('foundersScroll');
  if(!scroller || scroller.dataset.autoscroll === '1') return;
  scroller.dataset.autoscroll = '1';

  let paused = false;
  let lastTime = 0;
  const speed = 0.12;

  function tick(timestamp) {
    if(!lastTime) lastTime = timestamp;
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    if(!paused) {
      scroller.scrollLeft += delta * speed;
      if(scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1) {
        scroller.scrollLeft = 0;
      }
    }
    requestAnimationFrame(tick);
  }

  scroller.addEventListener('mouseenter', () => { paused = true; });
  scroller.addEventListener('mouseleave', () => { paused = false; });
  scroller.addEventListener('touchstart', () => { paused = true; }, { passive: true });
  scroller.addEventListener('touchend', () => { paused = false; });

  requestAnimationFrame(tick);
}

function initHeroDots() {
  const hero = document.querySelector('.hero');
  const canvas = document.getElementById('heroDots');
  if(!hero || !canvas) return;

  const ctx = canvas.getContext('2d');
  if(!ctx) return;

  const dots = [];
  let mouseX = Number.POSITIVE_INFINITY;
  let mouseY = Number.POSITIVE_INFINITY;
  let width = 0;
  let height = 0;

  const dotSpacing = 16;
  const dotSize = 1.5;
  const repulsionRadius = 90;
  const repulsionStrength = 12;

  function regenerateDots() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    dots.length = 0;
    const cols = Math.ceil(width / dotSpacing);
    const rows = Math.ceil(height / dotSpacing);
    const centerX = width / 2;
    const centerY = height / 2;
    const maxDistance = Math.hypot(centerX, centerY);

    for(let row = 0; row <= rows; row++) {
      for(let col = 0; col <= cols; col++) {
        const x = col * dotSpacing;
        const y = row * dotSpacing;

        const dx = x - centerX;
        const dy = y - centerY;
        const distanceFromCenter = Math.hypot(dx, dy);
        const edgeFactor = Math.max(0, 1 - Math.min(distanceFromCenter / (maxDistance * 0.95), 1));

        if(Math.random() > 0.25 + edgeFactor * 0.85) continue;

        const pattern = (row + col) % 3;
        const baseOpacity = (0.09 + pattern * 0.06) * (0.42 + edgeFactor * 0.58);

        dots.push({
          x,
          y,
          baseOpacity,
          phase: ((row * 13) + (col * 7)) % 100 / 100
        });
      }
    }
  }

  function draw(timestamp) {
    ctx.clearRect(0, 0, width, height);
    const t = timestamp * 0.001;

    for(let i = 0; i < dots.length; i++) {
      const dot = dots[i];
      let offsetX = 0;
      let offsetY = 0;
      let boost = 0;

      if(Number.isFinite(mouseX) && Number.isFinite(mouseY)) {
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        const distance = Math.hypot(dx, dy);

        if(distance < repulsionRadius) {
          const force = (1 - distance / repulsionRadius) * repulsionStrength;
          const angle = Math.atan2(dy, dx);
          offsetX = Math.cos(angle) * force;
          offsetY = Math.sin(angle) * force;
          boost = (1 - distance / repulsionRadius) * 0.24;
        }
      }

      const pulse = (Math.sin((t * 2.1) + (dot.phase * Math.PI * 2)) + 1) * 0.5;
      const alpha = Math.min(0.78, dot.baseOpacity * (0.72 + pulse * 0.42) + boost);

      const warm = i % 2 === 0;
      ctx.fillStyle = warm
        ? `rgba(232, 130, 95, ${alpha.toFixed(3)})`
        : `rgba(200, 56, 30, ${(alpha * 0.8).toFixed(3)})`;

      ctx.beginPath();
      ctx.arc(dot.x + offsetX, dot.y + offsetY, dotSize, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  hero.addEventListener('mouseleave', () => {
    mouseX = Number.POSITIVE_INFINITY;
    mouseY = Number.POSITIVE_INFINITY;
  });

  window.addEventListener('resize', regenerateDots);
  regenerateDots();
  requestAnimationFrame(draw);
}

// ─── CURSOR-TRACKING GRADIENT ───────────────
document.addEventListener('mousemove', (e) => {
  const heroEl = document.querySelector('.hero');
  if(heroEl) {
    const rect = heroEl.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    heroEl.style.setProperty('--mouse-x', `${Math.max(0, Math.min(100, x))}%`);
    heroEl.style.setProperty('--mouse-y', `${Math.max(0, Math.min(100, y))}%`);
  }
});

// ─── ROTATING QUOTES ────────────────────────
function initRotatingQuotes() {
  const container = document.getElementById('rotatingQuote');
  if (!container) return;
  
  const quotes = container.querySelectorAll('.rotating-quote');
  if (quotes.length === 0) return;
  
  let currentIndex = 0;
  
  function rotateQuote() {
    // Remove active class from current quote
    quotes[currentIndex].classList.remove('active');
    
    // Move to next quote
    currentIndex = (currentIndex + 1) % quotes.length;
    
    // Add active class to new quote
    quotes[currentIndex].classList.add('active');
  }
  
  // Rotate every 5 seconds
  setInterval(rotateQuote, 5000);
}

function handleContactSuccessState() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('contact') !== 'success') return;

  navigate('contact');

  const successMessage = document.getElementById('contactSuccessMsg');
  if (successMessage) {
    successMessage.style.display = 'block';
  }
}

function getWordCount(text) {
  return (text || '').trim().split(/\s+/).filter(Boolean).length;
}

function initContactFormEnhancements() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const serviceSelect = document.getElementById('serviceRequired');
  const otherGroup = document.getElementById('otherServiceGroup');
  const otherDetails = document.getElementById('otherServiceDetails');
  const otherCounter = document.getElementById('otherServiceCounter');

  function updateOtherVisibility() {
    const isOther = serviceSelect && serviceSelect.value === 'other';
    if (otherGroup) otherGroup.style.display = isOther ? '' : 'none';
    if (otherDetails) {
      otherDetails.required = !!isOther;
      if (!isOther) {
        otherDetails.value = '';
        otherDetails.setCustomValidity('');
      }
    }
    if (otherCounter) {
      otherCounter.textContent = '0 words (max 50)';
      otherCounter.style.color = 'var(--ink-3)';
    }
  }

  function validateOtherWordLimit() {
    if (!otherDetails || !(serviceSelect && serviceSelect.value === 'other')) return true;
    const words = getWordCount(otherDetails.value);
    if (otherCounter) {
      otherCounter.textContent = words + ' words (max 50)';
      otherCounter.style.color = words > 50 ? 'var(--accent)' : 'var(--ink-3)';
    }

    if (words > 50) {
      otherDetails.setCustomValidity('Please enter up to 50 words only.');
      return false;
    }

    otherDetails.setCustomValidity('');
    return true;
  }

  if (serviceSelect) serviceSelect.addEventListener('change', updateOtherVisibility);
  if (otherDetails) otherDetails.addEventListener('input', validateOtherWordLimit);

  contactForm.addEventListener('submit', function(e) {
    if (!validateOtherWordLimit()) {
      e.preventDefault();
      otherDetails.reportValidity();
    }
  });

  updateOtherVisibility();
}

// ─── INIT ───────────────────────────────────
renderTeam('teamGrid', 4);
renderTeam('aboutTeamGrid', 10);
renderCases();
renderBlogs();
renderFAQ();
renderServiceFaq();
initReveal();
initFoundersAutoScroll();
initRotatingQuotes();
initHeroDots();
handleContactSuccessState();
initContactFormEnhancements();

// Number counter animation
function animateNumbers() {
  document.querySelectorAll('.hero-stat-num, .case-metric-num, .result-num').forEach(el => {
    const text = el.textContent;
    el.style.opacity='0'; el.style.transform='translateY(10px)';
    setTimeout(()=>{ el.style.transition='opacity 0.6s,transform 0.6s'; el.style.opacity='1'; el.style.transform='none'; }, 200 + Math.random()*400);
  });
}
setTimeout(animateNumbers, 800);
