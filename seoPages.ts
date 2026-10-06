// High-performance SEO landing pages for MailBench Marketing Agency
// Aesthetic matching the Cormorant Garamond / DM Sans luxury editorial design system

const COMMON_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
    background: #f8f3eb;
    color: #201b16;
    line-height: 1.65;
    overflow-x: hidden;
  }
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at 10% 10%, rgba(220,160,116,0.22), transparent 28%),
                radial-gradient(circle at 88% 12%, rgba(169,132,94,0.14), transparent 30%),
                linear-gradient(180deg, #fff9f1, #f4ede3 45%, #fffaf4);
    z-index: -3;
  }
  .noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.22;
    background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.18"/%3E%3C/svg%3E');
    z-index: -2;
  }
  :root {
    --cream: #fffaf3;
    --cream2: #f3eadf;
    --ink: #201b16;
    --muted: #71665b;
    --soft: #9b8b7a;
    --cocoa: #6e4c38;
    --gold: #bd8a5f;
    --sage: #879574;
    --line: rgba(55,40,28,.12);
    --glass: rgba(255,255,255,.62);
    --display: 'Cormorant Garamond', Georgia, serif;
    --ease: cubic-bezier(.16,1,.3,1);
  }
  a { text-decoration: none; color: inherit; }
  .wrap { max-width: 1180px; margin: 0 auto; padding: 0 3rem; }
  .eyebrow {
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--cocoa);
    font-weight: 700;
    margin-bottom: 0.8rem;
    display: inline-block;
  }
  .display {
    font-family: var(--display);
    font-size: clamp(2.4rem, 4.8vw, 4.6rem);
    font-weight: 300;
    letter-spacing: -0.02em;
    line-height: 1.05;
    color: var(--ink);
  }
  .display em, .heading em { font-style: italic; color: var(--cocoa); font-weight: 400; }
  .heading {
    font-family: var(--display);
    font-size: clamp(2rem, 3.4vw, 3.4rem);
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: -0.015em;
    color: var(--ink);
  }
  .sub { font-size: 1.05rem; color: var(--muted); line-height: 1.65; max-width: 680px; }
  nav {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    padding: 1.2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255,250,243,0.88);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--line);
  }
  .logo-box { display: flex; align-items: center; gap: 10px; }
  .nav-links { display: flex; list-style: none; gap: 1.6rem; align-items: center; }
  .nav-links a {
    font-size: 0.74rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    font-weight: 600;
    transition: color 0.2s ease;
  }
  .nav-links a:hover, .nav-links a.active { color: var(--ink); }
  .nav-cta {
    font-size: 0.74rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.7rem 1.4rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255,255,255,0.7);
    font-weight: 700;
    transition: all 0.3s var(--ease);
  }
  .nav-cta:hover { background: #201b16; color: #fff; transform: translateY(-1px); }
  .hero-page {
    padding: 6rem 0 4.5rem;
    border-bottom: 1px solid var(--line);
  }
  .hero-inner {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3.5rem;
    align-items: center;
  }
  .badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.65);
    border: 1px solid var(--line);
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--cocoa);
    margin-bottom: 1.2rem;
  }
  .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #E16E34; }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    border-radius: 999px;
    padding: 0.95rem 1.65rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transition: all 0.3s var(--ease);
    cursor: pointer;
  }
  .btn-dark { background: #201b16; color: #fff; border: 1px solid #201b16; }
  .btn-dark:hover { background: #342820; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(32,27,22,0.18); }
  .btn-light { background: rgba(255,255,255,0.7); border: 1px solid var(--line); color: #201b16; }
  .btn-light:hover { background: #fff; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(32,27,22,0.1); }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.4rem;
    margin-top: 2.5rem;
  }
  .feature-card {
    background: rgba(255,255,255,0.7);
    border: 1px solid var(--line);
    border-radius: 24px;
    padding: 2rem;
    transition: all 0.3s var(--ease);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .feature-card:hover {
    transform: translateY(-5px);
    background: #ffffff;
    box-shadow: 0 20px 50px rgba(70,45,25,0.08);
  }
  .feature-icon {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: #201b16;
    color: #fff;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    margin-bottom: 1.4rem;
  }
  .feature-card h3 {
    font-family: var(--display);
    font-size: 1.65rem;
    line-height: 1.15;
    margin-bottom: 0.6rem;
    color: var(--ink);
    font-weight: 400;
  }
  .feature-card p {
    color: var(--muted);
    font-size: 0.94rem;
    line-height: 1.6;
  }
  .section-block { padding: 6.5rem 0; border-bottom: 1px solid var(--line); }
  .section-alt { background: rgba(255,250,243,0.6); }
  .process-steps {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.1rem;
    margin-top: 2.8rem;
  }
  .process-step {
    background: rgba(255,255,255,0.65);
    border: 1px solid var(--line);
    border-radius: 22px;
    padding: 1.6rem 1.3rem;
    transition: all 0.3s var(--ease);
  }
  .process-step:hover {
    transform: translateY(-4px);
    background: #fff;
    box-shadow: 0 16px 40px rgba(55,40,28,0.08);
  }
  .step-index {
    font-family: var(--display);
    font-size: 2.8rem;
    color: #dbc1a8;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .step-name {
    font-size: 0.82rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 0.6rem;
    color: var(--ink);
  }
  .step-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.55; }
  .faq-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
    margin-top: 2.5rem;
  }
  .faq-card {
    background: rgba(255,255,255,0.7);
    border: 1px solid var(--line);
    border-radius: 22px;
    padding: 1.8rem;
  }
  .faq-card h4 {
    font-family: var(--display);
    font-size: 1.35rem;
    color: var(--ink);
    margin-bottom: 0.65rem;
    line-height: 1.25;
    font-weight: 500;
  }
  .faq-card p {
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.6;
  }
  .cta-banner {
    background: #201b16;
    color: #fff;
    border-radius: 36px;
    padding: 4.5rem 3.5rem;
    position: relative;
    overflow: hidden;
    margin: 5rem 0;
    box-shadow: 0 35px 90px rgba(32,27,22,0.25);
  }
  .cta-banner::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 15% 15%, rgba(233,185,143,0.28), transparent 45%),
                radial-gradient(circle at 85% 85%, rgba(135,149,116,0.18), transparent 40%);
    pointer-events: none;
  }
  .cta-content { position: relative; max-width: 680px; z-index: 2; }
  .cta-banner h2 {
    font-family: var(--display);
    font-size: clamp(2.2rem, 3.8vw, 3.6rem);
    font-weight: 300;
    line-height: 1.08;
    color: #fff;
    margin-bottom: 1.2rem;
  }
  .cta-banner h2 em { color: #e9b98f; font-style: italic; }
  .cta-banner p { color: rgba(255,255,255,0.72); font-size: 1.05rem; line-height: 1.65; margin-bottom: 2rem; }
  .cta-banner .btn-white {
    background: #fff;
    color: #201b16;
    border: 1px solid #fff;
  }
  .cta-banner .btn-white:hover {
    background: #f4ede3;
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.3);
  }
  footer {
    padding: 3.5rem 0 4rem;
    background: #16110e;
    color: rgba(255,255,255,0.65);
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 2.5rem;
  }
  .footer-grid h4 {
    color: #fff;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .footer-grid a {
    display: block;
    color: rgba(255,255,255,0.55);
    margin-bottom: 0.55rem;
    font-size: 0.88rem;
    transition: color 0.2s;
  }
  .footer-grid a:hover { color: #fff; }
  .hero-card-preview {
    background: rgba(255,255,255,0.65);
    border: 1px solid var(--line);
    border-radius: 30px;
    padding: 2.2rem;
    backdrop-filter: blur(12px);
    box-shadow: 0 30px 80px rgba(65,44,29,0.12);
  }
  .preview-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--line);
  }
  .preview-stat:last-child { border-bottom: none; }
  .preview-stat-title { font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--cocoa); }
  .preview-stat-value { font-family: var(--display); font-size: 1.6rem; color: var(--ink); line-height: 1; }
  @media(max-width: 980px) {
    nav { padding: 1rem 1.4rem; }
    .nav-links { display: none; }
    .wrap { padding: 0 1.4rem; }
    .hero-inner { grid-template-columns: 1fr; gap: 2rem; }
    .card-grid { grid-template-columns: 1fr; }
    .process-steps { grid-template-columns: 1fr; }
    .faq-grid { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr; }
    .cta-banner { padding: 3rem 1.8rem; }
  }
`;

const NAV_MARKUP = (activePage: 'home' | 'email' | 'klaviyo') => `
<nav id="nav">
  <div class="logo-box">
    <a href="/" style="display: inline-flex; align-items: center; gap: 12px; text-decoration: none;">
      <svg class="logo-mark" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 32px; flex-shrink: 0;">
        <path d="M 32 32 C 24 22, 10 22, 10 32 C 10 42, 24 42, 32 32 C 40 22, 54 22, 54 32 C 54 42, 40 42, 32 32 Z" stroke="#1B2B48" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        <circle cx="21" cy="32" r="5" fill="#E16E34" />
        <path d="M 37 31 L 43 37 L 51 26" stroke="#E16E34" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </svg>
      <div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: center; line-height: 1;">
        <span style="font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif; font-size: 1.55rem; letter-spacing: -0.03em; font-weight: 800; text-transform: none; color: #1B2B48; line-height: 1.05;">Mail<span style="color: #E16E34; font-weight: 800;">Bench</span></span>
        <span style="font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif; font-size: 7.2px; font-weight: 700; letter-spacing: 0.35em; text-transform: uppercase; color: #1B2B48; opacity: 0.75; margin-top: 3.5px; line-height: 1;">MARKETING AGENCY</span>
      </div>
    </a>
  </div>
  <ul class="nav-links">
    <li><a href="/" ${activePage === 'home' ? 'class="active"' : ''}>Home</a></li>
    <li><a href="/email-marketing-agency" ${activePage === 'email' ? 'class="active"' : ''}>Email Marketing Agency</a></li>
    <li><a href="/klaviyo-agency" ${activePage === 'klaviyo' ? 'class="active"' : ''}>Klaviyo Agency</a></li>
    <li><a href="/#services">Services</a></li>
    <li><a href="/#flows">Flows</a></li>
    <li><a href="/#contact">Contact</a></li>
  </ul>
  <a class="nav-cta" href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener">Book Discovery Call</a>
</nav>
`;

const FOOTER_MARKUP = `
<footer>
  <div class="wrap footer-grid">
    <div>
      <div style="display: inline-flex; align-items: center; gap: 12px; margin-bottom: 0.6rem;">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 28px; height: 28px;">
          <path d="M 32 32 C 24 22, 10 22, 10 32 C 10 42, 24 42, 32 32 C 40 22, 54 22, 54 32 C 54 42, 40 42, 32 32 Z" stroke="#FFFFFF" stroke-opacity="0.95" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          <circle cx="21" cy="32" r="5" fill="#E16E34" />
          <path d="M 37 31 L 43 37 L 51 26" stroke="#E16E34" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </svg>
        <span style="font-family: 'Space Grotesk', system-ui, sans-serif; font-size: 1.35rem; font-weight: 800; color: #fff;">Mail<span style="color: #E16E34;">Bench</span></span>
      </div>
      <p style="font-size: 0.88rem; color: rgba(255,255,255,0.6); max-width: 280px; line-height: 1.6;">
        Specialized marketing agency engineering email, SMS, and lifecycle retention architecture for modern ecommerce brands.
      </p>
      <span style="display: block; margin-top: 1rem; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4);">
        Founder: Kavya Reddy
      </span>
    </div>
    <div>
      <h4>Agency Hubs</h4>
      <a href="/">Home</a>
      <a href="/email-marketing-agency">Email Marketing Agency</a>
      <a href="/klaviyo-agency">Klaviyo Agency</a>
      <a href="/#services">All Services</a>
    </div>
    <div>
      <h4>Retention Systems</h4>
      <a href="/#flows">Lifecycle Flows</a>
      <a href="/#industries">Target Clients</a>
      <a href="/#process">Process</a>
      <a href="/#results">Retention Metrics</a>
    </div>
    <div>
      <h4>Contact & Inquiries</h4>
      <a href="/#contact">Send Inbound Inquiry</a>
      <a href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener">Book Discovery Call</a>
      <a href="mailto:services@mail-bench.com">services@mail-bench.com</a>
    </div>
  </div>
  <div class="wrap" style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); font-size: 0.78rem; color: rgba(255,255,255,0.4); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
    <span>&copy; 2026 MailBench. All rights reserved.</span>
    <span>https://www.mailbenchagency.com</span>
  </div>
</footer>
`;

// PAGE 1: /email-marketing-agency
export const EMAIL_MARKETING_AGENCY_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Email Marketing Agency for DTC &amp; Ecommerce Brands | MailBench</title>
  <meta name="description" content="MailBench is a specialized email marketing agency helping DTC ecommerce brands increase repeat revenue through lifecycle strategy, automated flows, and targeted campaigns." />
  <link rel="canonical" href="https://www.mailbenchagency.com/email-marketing-agency" />
  
  <meta property="og:title" content="Email Marketing Agency for DTC &amp; Ecommerce Brands | MailBench" />
  <meta property="og:description" content="MailBench is a specialized email marketing agency helping DTC ecommerce brands increase repeat revenue through lifecycle strategy, automated flows, and targeted campaigns." />
  <meta property="og:url" content="https://www.mailbenchagency.com/email-marketing-agency" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MailBench" />

  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet"/>

  <style>
    ${COMMON_CSS}
  </style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ecommerce Email Marketing Agency Services",
    "serviceType": "Email Marketing Agency",
    "provider": {
      "@type": "Organization",
      "name": "MailBench",
      "url": "https://www.mailbenchagency.com/",
      "founder": {
        "@type": "Person",
        "name": "Kavya Reddy"
      }
    },
    "description": "Specialized email marketing agency services including automated lifecycle flows, campaign calendar management, subscriber segmentation, copy, design, and deliverability optimization for DTC ecommerce brands.",
    "url": "https://www.mailbenchagency.com/email-marketing-agency"
  }
  </script>
</head>
<body>
  <div class="noise"></div>
  ${NAV_MARKUP('email')}

  <!-- HERO SECTION -->
  <header class="hero-page">
    <div class="wrap hero-inner">
      <div>
        <div class="badge-pill">
          <span class="badge-dot"></span>
          <span>Ecommerce Retention Architecture</span>
        </div>
        <h1 class="display">Email Marketing Agency<br/><em>for High-Growth Ecommerce Brands.</em></h1>
        <p class="sub" style="margin: 1.5rem 0 2.2rem;">
          Customer acquisition costs continue to climb across paid channels. MailBench is a dedicated email marketing agency designing thoughtful, multi-touch retention systems that turn one-time shoppers into repeat buyers and enduring brand advocates.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-dark" href="/#contact">Request Strategy Audit →</a>
          <a class="btn btn-light" href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener">Book Discovery Call</a>
        </div>
      </div>
      <div>
        <div class="hero-card-preview">
          <div class="eyebrow" style="margin-bottom: 0.4rem;">Agency Focus Areas</div>
          <div class="preview-stat">
            <span class="preview-stat-title">Core Channel</span>
            <span class="preview-stat-value">Email &amp; Retention</span>
          </div>
          <div class="preview-stat">
            <span class="preview-stat-title">Strategy</span>
            <span class="preview-stat-value">Automated Flows + Broadcasts</span>
          </div>
          <div class="preview-stat">
            <span class="preview-stat-title">Target Client</span>
            <span class="preview-stat-value">DTC Ecommerce</span>
          </div>
          <div class="preview-stat">
            <span class="preview-stat-title">Technical Base</span>
            <span class="preview-stat-value">Klaviyo Platform</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- OVERVIEW & SERVICES SECTION -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Comprehensive Capabilities</span>
        <h2 class="heading">End-to-end email marketing services designed for <em>sustainable customer lifetime value.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          We operate as your dedicated retention arm, managing technical flow logic, strategic campaign calendars, compelling copywriting, and brand-first visual design.
        </p>
      </div>

      <div class="card-grid">
        <div class="feature-card">
          <div>
            <div class="feature-icon">↻</div>
            <h3>Automated Lifecycle Flows</h3>
            <p>Welcome sequences, multi-step abandoned checkout paths, browse recovery, post-purchase cross-sells, replenishment reminders, and sunset win-backs that engage subscribers automatically.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">✉</div>
            <h3>Editorial Campaign Management</h3>
            <p>Strategic sending calendars, product launch narratives, seasonal promotions, educational storytelling, and VIP announcements that maintain active subscriber relationships without inbox fatigue.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">◈</div>
            <h3>Behavioral Segmentation &amp; Hygiene</h3>
            <p>Clustering audiences by purchase frequency, recency, order value, and product category interests. Enforcing sunset policies to protect your sender reputation and inbox delivery.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">Aa</div>
            <h3>Copywriting &amp; Modular Design</h3>
            <p>Human, brand-aligned storytelling paired with responsive, clean email templates that render crisply across mobile devices, tablets, and desktop email clients.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🛡</div>
            <h3>Deliverability &amp; Infrastructure</h3>
            <p>Domain authentication via SPF, DKIM, and DMARC. Monitoring bounce rates, spam complaint thresholds, and Apple Mail Privacy Protection (MPP) adjustments.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">↑</div>
            <h3>A/B Testing &amp; Cohort Analytics</h3>
            <p>Iterative split testing on subject lines, preview text, time delays, and offer framing. Evaluating placed order rates, revenue per recipient, and list retention curves.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5-STAGE PROCESS SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">The Engagement Framework</span>
        <h2 class="heading">Our structured 5-stage process for <em>engineering email retention.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          Every partnership follows a rigorous, transparent progression from diagnostic discovery to ongoing strategic refinement.
        </p>
      </div>

      <div class="process-steps">
        <div class="process-step">
          <div class="step-index">01</div>
          <div class="step-name">Account &amp; List Audit</div>
          <p class="step-desc">Thorough inspection of current flows, historical open rates, list decay, deliverability signals, and checkout drop-off points.</p>
        </div>

        <div class="process-step">
          <div class="step-index">02</div>
          <div class="step-name">Journey Architecture</div>
          <p class="step-desc">Mapping custom customer pathways tailored to your catalog's purchase cycle, repeat timeline, and buyer personas.</p>
        </div>

        <div class="process-step">
          <div class="step-index">03</div>
          <div class="step-name">Creative &amp; Copy</div>
          <p class="step-desc">Crafting brand-aligned messaging and responsive email layouts that articulate your value proposition with elegance.</p>
        </div>

        <div class="process-step">
          <div class="step-index">04</div>
          <div class="step-name">Staged Launch &amp; QA</div>
          <p class="step-desc">Rigorous device previewing, trigger validation, link verification, and conditional split logic testing prior to activation.</p>
        </div>

        <div class="process-step">
          <div class="step-index">05</div>
          <div class="step-name">Optimization</div>
          <p class="step-desc">Bi-weekly reporting, send-cadence calibration, subject-line testing, and cohort-based segmentation refinements.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 680px;">
        <span class="eyebrow">Answers &amp; Clarity</span>
        <h2 class="heading">Frequently asked questions about <em>working with an email marketing agency.</em></h2>
      </div>

      <div class="faq-grid">
        <div class="faq-card">
          <h4>Why choose a specialized email marketing agency over a generalist digital agency?</h4>
          <p>Generalist agencies often spread focus across ad buying, SEO, and social management. As a dedicated email marketing agency, MailBench concentrates entirely on customer retention, lifecycle journeys, and extracting maximum revenue from the audience your brand has already acquired.</p>
        </div>

        <div class="faq-card">
          <h4>How frequently should an ecommerce brand send broadcast campaigns?</h4>
          <p>Most growing DTC stores find success with 2 to 4 deliberate campaigns per week paired with active behavioral flows. We segment by engagement tiers so frequent buyers receive timely updates while less engaged contacts are contacted less often to safeguard domain deliverability.</p>
        </div>

        <div class="faq-card">
          <h4>How does MailBench collaborate with our in-house marketing team?</h4>
          <p>We sync with your product launch calendar, inventory updates, and visual guidelines. We manage the strategy, copywriting, email design, flow setup, and QA while your team reviews and approves before sending.</p>
        </div>

        <div class="faq-card">
          <h4>What is the typical timeframe to launch core automated flows?</h4>
          <p>A comprehensive core flow rollout typically takes 2 to 3 weeks. This includes audit analysis, journey mapping, custom design, copywriting, conditional split configuration, and rigorous testing.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <div class="wrap">
    <div class="cta-banner">
      <div class="cta-content">
        <span class="eyebrow" style="color: #e9b98f;">Direct Consultation</span>
        <h2>Ready to build a reliable <em>retention engine for your store?</em></h2>
        <p>
          Send us an inquiry with your storefront details or schedule a discovery session with Founder Kavya Reddy to discuss your email lifecycle roadmap.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-white" href="/#contact">Open Contact Form →</a>
          <a class="btn btn-dark" style="background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.25);" href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener">Schedule a Call</a>
        </div>
      </div>
    </div>
  </div>

  ${FOOTER_MARKUP}
</body>
</html>`;

// PAGE 2: /klaviyo-agency
export const KLAVIYO_AGENCY_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Klaviyo Agency for Ecommerce &amp; DTC Brands | MailBench</title>
  <meta name="description" content="MailBench is a dedicated Klaviyo agency specializing in Klaviyo setup, flow optimization, predictive analytics, SMS integration, and customer retention for DTC brands." />
  <link rel="canonical" href="https://www.mailbenchagency.com/klaviyo-agency" />
  
  <meta property="og:title" content="Klaviyo Agency for Ecommerce &amp; DTC Brands | MailBench" />
  <meta property="og:description" content="MailBench is a dedicated Klaviyo agency specializing in Klaviyo setup, flow optimization, predictive analytics, SMS integration, and customer retention for DTC brands." />
  <meta property="og:url" content="https://www.mailbenchagency.com/klaviyo-agency" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MailBench" />

  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet"/>

  <style>
    ${COMMON_CSS}
  </style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Klaviyo Agency & Lifecycle Retention Services",
    "serviceType": "Klaviyo Agency",
    "provider": {
      "@type": "Organization",
      "name": "MailBench",
      "url": "https://www.mailbenchagency.com/",
      "founder": {
        "@type": "Person",
        "name": "Kavya Reddy"
      }
    },
    "description": "Specialized Klaviyo agency services including technical integration, advanced conditional flow architecture, Klaviyo SMS orchestration, predictive analytics segmentation, and deliverability protection for DTC ecommerce brands.",
    "url": "https://www.mailbenchagency.com/klaviyo-agency"
  }
  </script>
</head>
<body>
  <div class="noise"></div>
  ${NAV_MARKUP('klaviyo')}

  <!-- HERO SECTION -->
  <header class="hero-page">
    <div class="wrap hero-inner">
      <div>
        <div class="badge-pill">
          <span class="badge-dot"></span>
          <span>Technical Klaviyo Architecture</span>
        </div>
        <h1 class="display">Klaviyo Agency Built for<br/><em>Sustainable DTC Customer Retention.</em></h1>
        <p class="sub" style="margin: 1.5rem 0 2.2rem;">
          Klaviyo is the premier retention platform for modern ecommerce, yet many brands rely on basic blast emails and generic templates. MailBench operates as a specialized Klaviyo agency, architecting conditional flow logic, predictive segmentation, and synchronized SMS journeys tailored to your store's catalog.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-dark" href="/#contact">Discuss Your Klaviyo Setup →</a>
          <a class="btn btn-light" href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener">Book Discovery Call</a>
        </div>
      </div>
      <div>
        <div class="hero-card-preview">
          <div class="eyebrow" style="margin-bottom: 0.4rem;">Klaviyo Platform Expertise</div>
          <div class="preview-stat">
            <span class="preview-stat-title">Platform</span>
            <span class="preview-stat-value">Klaviyo Email &amp; SMS</span>
          </div>
          <div class="preview-stat">
            <span class="preview-stat-title">Architecture</span>
            <span class="preview-stat-value">Conditional Logic &amp; Splits</span>
          </div>
          <div class="preview-stat">
            <span class="preview-stat-title">Data Ingestion</span>
            <span class="preview-stat-value">Shopify &amp; Custom Events</span>
          </div>
          <div class="preview-stat">
            <span class="preview-stat-title">Segmentation</span>
            <span class="preview-stat-value">Predictive CLV &amp; RFM</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- OVERVIEW & SERVICES SECTION -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Technical Mastery</span>
        <h2 class="heading">Specialized Klaviyo agency services that turn raw store data into <em>repeat purchases.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          We leverage Klaviyo's deepest data models, trigger filters, and multi-channel features to construct tailored customer journeys.
        </p>
      </div>

      <div class="card-grid">
        <div class="feature-card">
          <div>
            <div class="feature-icon">⚡</div>
            <h3>Advanced Flow Engineering</h3>
            <p>Building branching logic trees with conditional splits based on past purchase counts, average order value (AOV), product categories, and buyer engagement tiers.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">💬</div>
            <h3>Klaviyo SMS Orchestration</h3>
            <p>Coordinating email and SMS under one unified customer profile. Deploying compliance-first SMS welcome flows, flash sale announcements, and urgent cart recovery without channel overlap.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">📊</div>
            <h3>Predictive Analytics &amp; CLV</h3>
            <p>Leveraging Klaviyo's predictive analytics: expected date of next order, customer churn risk, and predicted lifetime value (pCLV) to trigger proactive retention offers.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">⇄</div>
            <h3>Seamless Platform Migration</h3>
            <p>Transitioning storefronts to Klaviyo from Mailchimp, Omnisend, or ActiveCampaign with zero downtime, historical tag preservation, and proper domain warming protocols.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🔒</div>
            <h3>Dedicated Sending Domains</h3>
            <p>Implementing custom sending domains (DKIM, SPF, DMARC), Google and Yahoo bulk-sender compliance, and monitoring postmaster reputation to protect inbox placement.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🎨</div>
            <h3>Modular Klaviyo Template Systems</h3>
            <p>Designing reusable, mobile-responsive block libraries that allow rapid campaign creation while keeping visual presentation cohesive with your brand identity.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5-STAGE PROCESS SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Strategic Workflow</span>
        <h2 class="heading">How our Klaviyo agency engineers <em>your store's retention framework.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          A disciplined, step-by-step engineering roadmap to configure, test, and scale Klaviyo for ecommerce profitability.
        </p>
      </div>

      <div class="process-steps">
        <div class="process-step">
          <div class="step-index">01</div>
          <div class="step-name">Data &amp; Sync Audit</div>
          <p class="step-desc">Auditing Shopify/ecommerce integration, custom metrics, profile properties, catalog syncs, and list health.</p>
        </div>

        <div class="process-step">
          <div class="step-index">02</div>
          <div class="step-name">Logic Architecture</div>
          <p class="step-desc">Designing multi-branch flow diagrams with trigger filters, exclusion lists, time-delay rules, and smart sending caps.</p>
        </div>

        <div class="process-step">
          <div class="step-index">03</div>
          <div class="step-name">Creative &amp; Copy</div>
          <p class="step-desc">Developing bespoke email copy and modular layouts optimized for Klaviyo's native drag-and-drop template engine.</p>
        </div>

        <div class="process-step">
          <div class="step-index">04</div>
          <div class="step-name">QA &amp; Staged Rollout</div>
          <p class="step-desc">Testing dynamic tags, variable fallbacks, product feed accuracy, and split percentages before live traffic.</p>
        </div>

        <div class="process-step">
          <div class="step-index">05</div>
          <div class="step-name">Cohort Optimization</div>
          <p class="step-desc">Analyzing revenue per recipient, placed order rates, attribution windows, and iterating flow triggers monthly.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 680px;">
        <span class="eyebrow">Frequently Addressed</span>
        <h2 class="heading">Questions ecommerce brands ask when <em>hiring a Klaviyo agency.</em></h2>
      </div>

      <div class="faq-grid">
        <div class="faq-card">
          <h4>Why work with a dedicated Klaviyo agency instead of managing it in-house?</h4>
          <p>Klaviyo is a complex data platform. Effective retention requires technical proficiency with custom event properties, conditional splits, predictive modeling, and email deliverability. A specialized agency extracts maximum value from these capabilities, freeing your team to focus on inventory, fulfillment, and product development.</p>
        </div>

        <div class="faq-card">
          <h4>Can you help migrate our brand to Klaviyo from another platform?</h4>
          <p>Yes. We conduct complete platform migrations from tools such as Mailchimp, Omnisend, or ActiveCampaign. We migrate contact records, historical properties, unsubscribe logs, recreate key flows, and execute domain warm-up to ensure seamless continuity.</p>
        </div>

        <div class="faq-card">
          <h4>How do you protect deliverability under modern inbox requirements?</h4>
          <p>We configure dedicated sending domains with SPF, DKIM, and DMARC records aligned with Google and Yahoo sender standards. Furthermore, we implement rigorous engagement-based segmentation and sunset policies to keep inactive contacts from degrading your sender reputation.</p>
        </div>

        <div class="faq-card">
          <h4>Can you manage Klaviyo SMS alongside our email strategy?</h4>
          <p>Yes. Housing email and SMS inside Klaviyo allows unified customer journey mapping. We set smart sending rules to avoid double-messaging and use SMS for immediate, high-priority notifications while using email for deeper brand storytelling and education.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <div class="wrap">
    <div class="cta-banner">
      <div class="cta-content">
        <span class="eyebrow" style="color: #e9b98f;">Klaviyo Architecture</span>
        <h2>Ready to unlock the full <em>retention potential of Klaviyo?</em></h2>
        <p>
          Connect with Founder Kavya Reddy to audit your existing flows, evaluate data synchronization, and plan an optimized retention roadmap.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-white" href="/#contact">Send Inbound Inquiry →</a>
          <a class="btn btn-dark" style="background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.25);" href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener">Book Discovery Call</a>
        </div>
      </div>
    </div>
  </div>

  ${FOOTER_MARKUP}
</body>
</html>`;
