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
  .nav-links { display: flex; list-style: none; gap: 1.3rem; align-items: center; }
  .nav-links a {
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    font-weight: 600;
    transition: color 0.2s ease;
  }
  .nav-links a:hover, .nav-links a.active { color: var(--ink); }
  .nav-cta {
    font-size: 0.72rem;
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
  .audience-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
    margin-top: 2.5rem;
  }
  .audience-card {
    background: rgba(255,255,255,0.65);
    border: 1px solid var(--line);
    border-radius: 20px;
    padding: 1.6rem;
    transition: all 0.3s var(--ease);
  }
  .audience-card:hover {
    transform: translateY(-4px);
    background: #fff;
    box-shadow: 0 16px 40px rgba(55,40,28,0.08);
  }
  .audience-tag {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--cocoa);
    margin-bottom: 0.4rem;
  }
  .audience-card h4 {
    font-family: var(--display);
    font-size: 1.35rem;
    color: var(--ink);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  .audience-card p {
    font-size: 0.88rem;
    color: var(--muted);
    line-height: 1.55;
  }
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
  .interlinks-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    margin-top: 2rem;
  }
  .interlink-card {
    background: rgba(255,255,255,0.65);
    border: 1px solid var(--line);
    border-radius: 20px;
    padding: 1.5rem;
    transition: all 0.3s var(--ease);
    display: block;
  }
  .interlink-card:hover {
    transform: translateY(-3px);
    background: #fff;
    box-shadow: 0 14px 35px rgba(55,40,28,0.08);
  }
  .interlink-card h4 {
    font-family: var(--display);
    font-size: 1.3rem;
    color: var(--ink);
    margin-bottom: 0.35rem;
  }
  .interlink-card p {
    font-size: 0.86rem;
    color: var(--muted);
    line-height: 1.5;
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
    .audience-grid { grid-template-columns: 1fr 1fr; }
    .process-steps { grid-template-columns: 1fr; }
    .faq-grid { grid-template-columns: 1fr; }
    .interlinks-grid { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr; }
    .cta-banner { padding: 3rem 1.8rem; }
  }
`;

type NavActive = 'home' | 'email' | 'sms' | 'lifecycle' | 'retention' | 'automation' | 'audit';

const NAV_MARKUP = (activePage: NavActive) => `
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
    <li><a href="/email-marketing-agency" ${activePage === 'email' ? 'class="active"' : ''}>Email</a></li>
    <li><a href="/sms-marketing-agency" ${activePage === 'sms' ? 'class="active"' : ''}>SMS</a></li>
    <li><a href="/lifecycle-marketing-agency" ${activePage === 'lifecycle' ? 'class="active"' : ''}>Lifecycle</a></li>
    <li><a href="/retention-marketing-agency" ${activePage === 'retention' ? 'class="active"' : ''}>Retention</a></li>
    <li><a href="/email-automation-agency" ${activePage === 'automation' ? 'class="active"' : ''}>Automation</a></li>
    <li><a href="/email-marketing-audit" ${activePage === 'audit' ? 'class="active"' : ''}>Audit</a></li>
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
        Email marketing, SMS, lifecycle marketing, and retention automation agency helping growing brands build enduring customer relationships.
      </p>
      <span style="display: block; margin-top: 1rem; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4);">
        Founder: Kavya Reddy
      </span>
    </div>
    <div>
      <h4>Core Services</h4>
      <a href="/email-marketing-agency">Email Marketing Agency</a>
      <a href="/sms-marketing-agency">SMS Marketing Agency</a>
      <a href="/lifecycle-marketing-agency">Lifecycle Marketing Agency</a>
      <a href="/retention-marketing-agency">Retention Marketing Agency</a>
      <a href="/email-automation-agency">Email Automation Agency</a>
      <a href="/email-marketing-audit">Email Marketing Audit</a>
    </div>
    <div>
      <h4>Growth Systems</h4>
      <a href="/#services">All Services</a>
      <a href="/#flows">Lifecycle Flows</a>
      <a href="/#industries">Industry Expertise</a>
      <a href="/#process">Our Process</a>
      <a href="/#results">Retention Philosophy</a>
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

// ============================================================================
// PAGE 1: /email-marketing-agency
// ============================================================================
export const EMAIL_MARKETING_AGENCY_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Email Marketing Agency &amp; Services for Growing Brands | MailBench</title>
  <meta name="description" content="MailBench provides strategic email marketing services including campaign management, automation, segmentation, copy, design, deliverability, testing, and retention strategy for growing brands." />
  <link rel="canonical" href="https://www.mailbenchagency.com/email-marketing-agency" />
  
  <meta property="og:title" content="Email Marketing Agency &amp; Services for Growing Brands | MailBench" />
  <meta property="og:description" content="MailBench provides strategic email marketing services including campaign management, automation, segmentation, copy, design, deliverability, testing, and retention strategy for growing brands." />
  <meta property="og:url" content="https://www.mailbenchagency.com/email-marketing-agency" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MailBench" />

  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet"/>

  <style>${COMMON_CSS}</style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Email Marketing Agency & Retention Services",
    "serviceType": "Email Marketing Agency",
    "provider": {
      "@type": "Organization",
      "name": "MailBench",
      "url": "https://www.mailbenchagency.com/",
      "founder": "Kavya Reddy"
    },
    "description": "Strategic email marketing services including campaign planning, automation architecture, deliverability optimization, audience segmentation, copy, and performance analytics for growing brands.",
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
          <span>Full-Service Email Agency</span>
        </div>
        <h1 class="display">Email Marketing Agency<br/><em>for Growing Brands.</em></h1>
        <p class="sub" style="margin: 1.4rem 0 2.2rem;">
          MailBench designs and executes high-performing email marketing strategies that turn casual subscribers into loyal, high-value repeat customers. From automated journeys and broadcast campaign management to precision segmentation and deliverability audits, we build retention systems that drive reliable revenue.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-dark" href="/#contact">Request Strategy Consultation →</a>
          <a class="btn btn-light" href="/email-marketing-audit">Explore Free Email Audit</a>
        </div>
      </div>

      <div class="hero-card-preview">
        <div class="eyebrow" style="margin-bottom: 0.4rem;">Performance Benchmarks</div>
        <div class="preview-stat">
          <span class="preview-stat-title">Target Open Rate</span>
          <span class="preview-stat-value">38% – 48%</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Click-Through Rate</span>
          <span class="preview-stat-value">3.2% – 5.8%</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Repeat Order Lift</span>
          <span class="preview-stat-value">+28% to +44%</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Deliverability Standard</span>
          <span class="preview-stat-value">99.4% Inbox</span>
        </div>
      </div>
    </div>
  </header>

  <!-- WHO THIS SERVICE IS FOR -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Who We Serve</span>
        <h2 class="heading">Strategic email marketing built for <em>brands ready to scale.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          Whether your business is launching new product lines, scaling user acquisition, or working to improve lifetime customer value, our email marketing systems adapt to your unique customer journey.
        </p>
      </div>

      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-tag">Retail &amp; Commerce</div>
          <h4>Ecommerce Brands</h4>
          <p>Multi-sku storefronts needing welcome flows, abandoned cart recovery, browse retargeting, and seasonal product drops.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Digital Products</div>
          <h4>SaaS &amp; Tech Platforms</h4>
          <p>Product-led companies requiring automated user onboarding, feature adoption sequences, and trial conversion cadences.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Health &amp; Living</div>
          <h4>Wellness &amp; Beauty</h4>
          <p>Brands with high reorder potential that thrive on educational routines, VIP early access, and customer trust.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">High-Touch B2B</div>
          <h4>Professional Services</h4>
          <p>Firms seeking thought leadership newsletters, consultative nurture funnels, and relationship retention campaigns.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT IS INCLUDED SECTION -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Comprehensive Capabilities</span>
        <h2 class="heading">End-to-end email marketing services that <em>eliminate guesswork.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          We handle the entire email marketing lifecycle—from strategic architecture and creative copywriting to inbox deliverability protocols and cohort reporting.
        </p>
      </div>

      <div class="card-grid">
        <div class="feature-card">
          <div>
            <div class="feature-icon">✉</div>
            <h3>Campaign Planning &amp; Management</h3>
            <p>Full monthly editorial calendars, product announcement launches, promotional campaigns, and brand storytelling that captivate subscribers without burning your list.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">⚙</div>
            <h3>Automated Email Journeys</h3>
            <p>Behavioral workflows that trigger automatically: welcome series, checkout recovery, post-purchase onboarding, win-back cadences, and predictive replenishment flows.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">👥</div>
            <h3>Segmentation &amp; Personalization</h3>
            <p>Segmenting audiences by purchase recency, frequency, monetary tier, content engagement, and product interest to deliver personalized, relevant messaging.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">Aa</div>
            <h3>Conversion Copy &amp; Design</h3>
            <p>Compelling, authentic copywriting paired with responsive, clean typography and branded layouts engineered for maximum reading comfort and click-through rates.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🛡</div>
            <h3>Deliverability &amp; Inbox Placement</h3>
            <p>Strict DNS configuration (SPF, DKIM, DMARC, BIMI), Google and Yahoo sender compliance, domain reputation monitoring, and automated list hygiene.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">📊</div>
            <h3>Testing &amp; Performance Reporting</h3>
            <p>Systematic A/B testing of subject lines, sending times, and content structures alongside clear monthly reports tracking revenue per recipient and retention trends.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5-STAGE PROCESS SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Methodical Execution</span>
        <h2 class="heading">How our email agency executes <em>your retention framework.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          Our battle-tested workflow ensures seamless integration with your existing marketing stack and clear accountability at every stage.
        </p>
      </div>

      <div class="process-steps">
        <div class="process-step">
          <div class="step-index">01</div>
          <div class="step-name">Audit &amp; Data Review</div>
          <p class="step-desc">Analyzing past sending logs, list health, technical DNS records, segmentation logic, and existing automation performance.</p>
        </div>

        <div class="process-step">
          <div class="step-index">02</div>
          <div class="step-name">Journey Architecture</div>
          <p class="step-desc">Mapping trigger flows, behavioral branches, frequency caps, and editorial calendars tailored to your customer buying cycle.</p>
        </div>

        <div class="process-step">
          <div class="step-index">03</div>
          <div class="step-name">Creative &amp; Copy</div>
          <p class="step-desc">Writing high-converting copy in your authentic brand voice and designing responsive, lightweight email templates.</p>
        </div>

        <div class="process-step">
          <div class="step-index">04</div>
          <div class="step-name">QA &amp; Deployment</div>
          <p class="step-desc">Conducting rigorous cross-client rendering tests across mobile and desktop inboxes before schedule releases.</p>
        </div>

        <div class="process-step">
          <div class="step-index">05</div>
          <div class="step-name">Optimization Loops</div>
          <p class="step-desc">Evaluating cohort retention rates, A/B testing winners, and fine-tuning triggers monthly to compound revenue gains.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- RELATED SERVICES INTERLINKING -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Connected Specializations</span>
        <h2 class="heading">Explore complementary <em>lifecycle marketing services.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          Email marketing delivers compounding results when integrated with unified SMS messaging and continuous retention strategy.
        </p>
      </div>

      <div class="interlinks-grid">
        <a class="interlink-card" href="/sms-marketing-agency">
          <div class="audience-tag">Mobile Communication</div>
          <h4>SMS Marketing Agency</h4>
          <p>Combine high-intent SMS alerts with email journeys for complete omnichannel customer coverage.</p>
        </a>
        <a class="interlink-card" href="/lifecycle-marketing-agency">
          <div class="audience-tag">Customer Journey</div>
          <h4>Lifecycle Marketing Agency</h4>
          <p>Architect comprehensive customer roadmaps from initial acquisition to brand advocacy and retention.</p>
        </a>
        <a class="interlink-card" href="/email-marketing-audit">
          <div class="audience-tag">Diagnostic Review</div>
          <h4>Email Marketing Audit</h4>
          <p>Uncover deliverability bottlenecks, flow drop-offs, and revenue leaks across your current setup.</p>
        </a>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 680px;">
        <span class="eyebrow">Frequently Asked Questions</span>
        <h2 class="heading">Everything you need to know about <em>partnering with MailBench.</em></h2>
      </div>

      <div class="faq-grid">
        <div class="faq-card">
          <h4>Which email marketing platforms do you work with?</h4>
          <p>We work across all leading email automation systems and customer data platforms. Our strategy focuses on foundational retention principles, customer data schemas, and deliverability mechanics rather than being locked to any single vendor.</p>
        </div>

        <div class="faq-card">
          <h4>How do you protect email deliverability and avoid the spam folder?</h4>
          <p>We enforce technical DNS authentication including SPF, DKIM, DMARC, and custom sending subdomains. In addition, we implement rigorous engagement-based sending segments, suppressing unengaged contacts and maintaining clean sender reputations with mailbox providers.</p>
        </div>

        <div class="faq-card">
          <h4>Do you handle both automated flows and regular broadcast campaigns?</h4>
          <p>Yes. Full-service retainers cover both evergreen automated flows (welcome, cart recovery, post-purchase, win-backs) and active weekly campaign planning, copywriting, design, and scheduling.</p>
        </div>

        <div class="faq-card">
          <h4>How soon can we expect to see results from email optimization?</h4>
          <p>Core automated flow updates typically show measurable revenue lift within the first 14 to 30 days. List hygiene, deliverability fixes, and retention improvements compound sustainably over 60 to 90 days.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <div class="wrap">
    <div class="cta-banner">
      <div class="cta-content">
        <span class="eyebrow" style="color: #e9b98f;">Strategic Partnership</span>
        <h2>Ready to build an email marketing engine that <em>compounds revenue?</em></h2>
        <p>
          Connect with MailBench Founder Kavya Reddy to audit your existing email workflows, evaluate deliverability health, and blueprint an actionable customer retention roadmap.
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

// ============================================================================
// PAGE 2: /sms-marketing-agency
// ============================================================================
export const SMS_MARKETING_AGENCY_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>SMS Marketing Agency &amp; Services for Growing Brands | MailBench</title>
  <meta name="description" content="MailBench provides strategic SMS marketing services including automated text flows, campaign planning, compliance, segmentation, and retention messaging for growing brands." />
  <link rel="canonical" href="https://www.mailbenchagency.com/sms-marketing-agency" />
  
  <meta property="og:title" content="SMS Marketing Agency &amp; Services for Growing Brands | MailBench" />
  <meta property="og:description" content="MailBench provides strategic SMS marketing services including automated text flows, campaign planning, compliance, segmentation, and retention messaging for growing brands." />
  <meta property="og:url" content="https://www.mailbenchagency.com/sms-marketing-agency" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MailBench" />

  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet"/>

  <style>${COMMON_CSS}</style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SMS Marketing Agency Services",
    "serviceType": "SMS Marketing Agency",
    "provider": {
      "@type": "Organization",
      "name": "MailBench",
      "url": "https://www.mailbenchagency.com/",
      "founder": "Kavya Reddy"
    },
    "description": "Strategic SMS marketing services including automated text message flows, broadcast campaign planning, compliance protocols, smart segmentation, and multichannel retention strategy.",
    "url": "https://www.mailbenchagency.com/sms-marketing-agency"
  }
  </script>
</head>
<body>
  <div class="noise"></div>
  ${NAV_MARKUP('sms')}

  <!-- HERO SECTION -->
  <header class="hero-page">
    <div class="wrap hero-inner">
      <div>
        <div class="badge-pill">
          <span class="badge-dot"></span>
          <span>Conversational Mobile Strategy</span>
        </div>
        <h1 class="display">SMS Marketing Agency<br/><em>for Growing Brands.</em></h1>
        <p class="sub" style="margin: 1.4rem 0 2.2rem;">
          SMS is the most intimate, direct channel in modern marketing. When done right, text messages build immediate customer connection and drive urgent action. MailBench creates thoughtful, compliant SMS marketing programs that engage customers without annoying them or triggering unsubscribes.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-dark" href="/#contact">Discuss Your SMS Strategy →</a>
          <a class="btn btn-light" href="/email-marketing-agency">Explore Email Services</a>
        </div>
      </div>

      <div class="hero-card-preview">
        <div class="eyebrow" style="margin-bottom: 0.4rem;">Mobile Channel Benchmarks</div>
        <div class="preview-stat">
          <span class="preview-stat-title">Average Open Speed</span>
          <span class="preview-stat-value">&lt; 3 Minutes</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Click-Through Rate</span>
          <span class="preview-stat-value">9.5% – 14.2%</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Opt-Out Retention</span>
          <span class="preview-stat-value">&lt; 0.8% Rate</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Regulatory Standard</span>
          <span class="preview-stat-value">100% TCPA / CTIA</span>
        </div>
      </div>
    </div>
  </header>

  <!-- WHO THIS SERVICE IS FOR -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Who Benefits from SMS</span>
        <h2 class="heading">High-intent SMS programs built for <em>brands with active audiences.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          SMS marketing works best when paired with strong brand trust and high-intent customer touchpoints. We help diverse businesses use mobile messaging respectfully and effectively.
        </p>
      </div>

      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-tag">Retail &amp; Commerce</div>
          <h4>Consumer Brands</h4>
          <p>Flash sale alerts, back-in-stock notifications, VIP drop early access, and rapid cart recovery nudges.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Appointments &amp; Salons</div>
          <h4>Hospitality &amp; Services</h4>
          <p>Booking confirmations, reminder messages, seasonal promotions, and immediate customer service follow-ups.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Consumable Products</div>
          <h4>Wellness &amp; Health</h4>
          <p>Subscription reorder reminders, restock notifications, routine tips, and time-sensitive customer support.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Software &amp; Digital</div>
          <h4>Product Teams</h4>
          <p>Security alerts, urgent onboarding steps, account activation nudges, and exclusive customer feedback loops.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT IS INCLUDED SECTION -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Strategic SMS Deliverables</span>
        <h2 class="heading">Everything needed to build an <em>effective, compliant SMS channel.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          From subscriber capture and regulatory compliance to automated trigger journeys and frequency caps, we engineer SMS for sustainable revenue.
        </p>
      </div>

      <div class="card-grid">
        <div class="feature-card">
          <div>
            <div class="feature-icon">💬</div>
            <h3>Automated SMS Flows</h3>
            <p>High-converting trigger automations: checkout recovery SMS, browse reminders, welcome offers, shipping updates, and post-purchase follow-ups.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">📜</div>
            <h3>TCPA &amp; Regulatory Compliance</h3>
            <p>Strict alignment with TCPA, CTIA, 10DLC carrier registration, explicit double opt-in disclosures, quiet hours enforcement, and one-click opt-out mechanisms.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🎯</div>
            <h3>List Growth &amp; Capture Strategy</h3>
            <p>Designing elegant, non-intrusive mobile and desktop opt-in forms that capture phone numbers with full transparency and high conversion rates.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">⏱</div>
            <h3>Smart Frequency Management</h3>
            <p>Implementing smart sending limits so customers never receive redundant emails and texts simultaneously, protecting subscriber goodwill and list longevity.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">⇄</div>
            <h3>Email + SMS Synergy</h3>
            <p>Orchestrating text messages as strategic accelerators within broader email journeys, using SMS for urgent alerts and email for rich brand storytelling.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">📊</div>
            <h3>Attribution &amp; ROI Analytics</h3>
            <p>Tracking revenue per message, true conversion attribution, opt-out percentages, and unsubscribe triggers to continuously optimize text ROI.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5-STAGE PROCESS SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Implementation Process</span>
        <h2 class="heading">A disciplined roadmap to launch and scale <em>SMS messaging.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          We take brands from initial compliance verification to fully automated mobile revenue in five clear stages.
        </p>
      </div>

      <div class="process-steps">
        <div class="process-step">
          <div class="step-index">01</div>
          <div class="step-name">Carrier Registration</div>
          <p class="step-desc">Completing 10DLC brand and campaign vetting, toll-free verification, and legal terms audit.</p>
        </div>

        <div class="process-step">
          <div class="step-index">02</div>
          <div class="step-name">Opt-In Capture</div>
          <p class="step-desc">Deploying compliant subscriber capture units across site landing pages and checkout screens.</p>
        </div>

        <div class="process-step">
          <div class="step-index">03</div>
          <div class="step-name">Flow Architecture</div>
          <p class="step-desc">Building automated abandoned cart, welcome, and order follow-up branches with time delays.</p>
        </div>

        <div class="process-step">
          <div class="step-index">04</div>
          <div class="step-name">Broadcast Strategy</div>
          <p class="step-desc">Scheduling targeted, segment-specific announcements, flash releases, and VIP alerts.</p>
        </div>

        <div class="process-step">
          <div class="step-index">05</div>
          <div class="step-name">Performance Tuning</div>
          <p class="step-desc">Analyzing unsubscribe rates, message timings, and revenue attribution to maximize customer lifetime value.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- RELATED SERVICES INTERLINKING -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Explore Related Capabilities</span>
        <h2 class="heading">Strengthen your mobile strategy with <em>complete lifecycle systems.</em></h2>
      </div>

      <div class="interlinks-grid">
        <a class="interlink-card" href="/email-marketing-agency">
          <div class="audience-tag">Primary Channel</div>
          <h4>Email Marketing Agency</h4>
          <p>Pair rapid SMS alerts with long-form email campaigns and visual storytelling.</p>
        </a>
        <a class="interlink-card" href="/retention-marketing-agency">
          <div class="audience-tag">Customer Value</div>
          <h4>Retention Marketing Agency</h4>
          <p>Deepen customer loyalty, increase repeat purchase rates, and lower overall churn.</p>
        </a>
        <a class="interlink-card" href="/email-automation-agency">
          <div class="audience-tag">Workflow Engine</div>
          <h4>Email Automation Agency</h4>
          <p>Build behavioral workflows that coordinate email and SMS based on user actions.</p>
        </a>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 680px;">
        <span class="eyebrow">Frequently Addressed</span>
        <h2 class="heading">Questions brands ask about <em>SMS marketing services.</em></h2>
      </div>

      <div class="faq-grid">
        <div class="faq-card">
          <h4>How do you prevent SMS messages from annoying our customers?</h4>
          <p>We enforce strict frequency caps, quiet hours (never sending outside standard daytime windows), and rigorous behavioral segmentation. Subscribers only receive messages relevant to their recent interests and purchases.</p>
        </div>

        <div class="faq-card">
          <h4>What are TCPA and CTIA requirements, and how do you maintain compliance?</h4>
          <p>The TCPA (Telephone Consumer Protection Act) and CTIA guidelines require express written consent, unambiguous language at sign-up, clear opt-out instructions (like replying STOP), and registered 10DLC brand profiles. We ensure full legal adherence before sending any text.</p>
        </div>

        <div class="faq-card">
          <h4>How should SMS and email work together?</h4>
          <p>Rather than sending the same announcement on both channels, we use SMS for time-critical, high-priority notifications (flash promotions, cart recovery within minutes) while reserving email for brand building, education, and detailed product storytelling.</p>
        </div>

        <div class="faq-card">
          <h4>Can SMS be used for international audiences?</h4>
          <p>Yes. International SMS requires adherence to regional telecommunication regulations (such as GDPR in Europe and CASL in Canada) and varying carrier fees. We configure geographic routing so you only send messages where profitable and compliant.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <div class="wrap">
    <div class="cta-banner">
      <div class="cta-content">
        <span class="eyebrow" style="color: #e9b98f;">Mobile Growth</span>
        <h2>Ready to unlock predictable revenue with <em>strategic SMS marketing?</em></h2>
        <p>
          Connect with MailBench Founder Kavya Reddy to review your current mobile strategy, verify regulatory compliance, and build a high-converting SMS plan.
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

// ============================================================================
// PAGE 3: /lifecycle-marketing-agency
// ============================================================================
export const LIFECYCLE_MARKETING_AGENCY_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Lifecycle Marketing Agency &amp; Customer Journey Strategy | MailBench</title>
  <meta name="description" content="MailBench designs end-to-end lifecycle marketing frameworks that guide customers from acquisition to retention, repeat purchases, brand advocacy, and sustained lifetime value." />
  <link rel="canonical" href="https://www.mailbenchagency.com/lifecycle-marketing-agency" />
  
  <meta property="og:title" content="Lifecycle Marketing Agency &amp; Customer Journey Strategy | MailBench" />
  <meta property="og:description" content="MailBench designs end-to-end lifecycle marketing frameworks that guide customers from acquisition to retention, repeat purchases, brand advocacy, and sustained lifetime value." />
  <meta property="og:url" content="https://www.mailbenchagency.com/lifecycle-marketing-agency" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MailBench" />

  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet"/>

  <style>${COMMON_CSS}</style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lifecycle Marketing Agency Services",
    "serviceType": "Lifecycle Marketing Agency",
    "provider": {
      "@type": "Organization",
      "name": "MailBench",
      "url": "https://www.mailbenchagency.com/",
      "founder": "Kavya Reddy"
    },
    "description": "Full-funnel lifecycle marketing services including customer journey mapping, onboarding sequences, post-purchase nurturing, repeat conversion systems, and customer lifetime value optimization.",
    "url": "https://www.mailbenchagency.com/lifecycle-marketing-agency"
  }
  </script>
</head>
<body>
  <div class="noise"></div>
  ${NAV_MARKUP('lifecycle')}

  <!-- HERO SECTION -->
  <header class="hero-page">
    <div class="wrap hero-inner">
      <div>
        <div class="badge-pill">
          <span class="badge-dot"></span>
          <span>Customer Journey Architecture</span>
        </div>
        <h1 class="display">Lifecycle Marketing Agency<br/><em>for Growing Brands.</em></h1>
        <p class="sub" style="margin: 1.4rem 0 2.2rem;">
          Customer relationships should not end after a single transaction. MailBench designs integrated lifecycle marketing frameworks that guide buyers through every stage—from first awareness and thoughtful onboarding to repeat purchases, VIP loyalty, and enduring brand advocacy.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-dark" href="/#contact">Map Your Customer Lifecycle →</a>
          <a class="btn btn-light" href="/retention-marketing-agency">Explore Retention Strategy</a>
        </div>
      </div>

      <div class="hero-card-preview">
        <div class="eyebrow" style="margin-bottom: 0.4rem;">Lifecycle Impact Targets</div>
        <div class="preview-stat">
          <span class="preview-stat-title">New Buyer Activation</span>
          <span class="preview-stat-value">+32% Conversion</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Repeat Order Speed</span>
          <span class="preview-stat-value">-24 Days to 2nd Order</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Customer LTV Lift</span>
          <span class="preview-stat-value">+35% Over 180 Days</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Active Churn Reduction</span>
          <span class="preview-stat-value">-18% Lapsed Rate</span>
        </div>
      </div>
    </div>
  </header>

  <!-- WHO THIS SERVICE IS FOR -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Who Needs Lifecycle Systems</span>
        <h2 class="heading">Designed for businesses where <em>repeat customer value matters.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          When acquisition costs increase, profitability depends on customer lifetime value. We engineer lifecycle journeys that maximize relationship depth across modern industries.
        </p>
      </div>

      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-tag">Subscription Models</div>
          <h4>Recurring Services</h4>
          <p>Onboarding cadences that decrease Day-30 churn, highlight key benefits, and drive subscription renewals.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Product Catalogs</div>
          <h4>Multi-SKU Brands</h4>
          <p>Cross-category recommendation flows based on initial purchase history and product affinity.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">High-Consideration</div>
          <h4>Lifestyle &amp; Luxury</h4>
          <p>Educational nurture series that provide context, build desire, and validate premium investment decisions.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Technology &amp; Apps</div>
          <h4>SaaS &amp; Memberships</h4>
          <p>Milestone recognition emails, usage engagement prompts, and renewal reminders that maintain active users.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT IS INCLUDED SECTION -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Lifecycle Capabilities</span>
        <h2 class="heading">Full-funnel customer journeys that <em>compound over time.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          We replace fragmented, one-off blast communications with intentional lifecycle pathways aligned with customer intent.
        </p>
      </div>

      <div class="card-grid">
        <div class="feature-card">
          <div>
            <div class="feature-icon">🗺</div>
            <h3>Customer Journey Mapping</h3>
            <p>Identifying key touchpoints, decision friction, drop-off stages, and reorder windows to design targeted interventions throughout the customer lifespan.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🌟</div>
            <h3>Onboarding &amp; Activation Flows</h3>
            <p>Welcome sequences that educate new subscribers, communicate brand ethos, set clear expectations, and accelerate first-order conversion.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">📦</div>
            <h3>Post-Purchase Experience</h3>
            <p>Order tracking, product usage tutorials, routine guidance, and thoughtful check-ins that validate the purchase and prevent buyer remorse.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">↻</div>
            <h3>Replenishment &amp; Cross-Sell</h3>
            <p>Data-driven reorder reminders triggered by historical purchase cycles and relevant complementary product recommendations.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">👑</div>
            <h3>VIP &amp; Loyalty Architectures</h3>
            <p>Segmenting high-value customers into exclusive tiers with early access, specialized rewards, and private concierge communications.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">⚡</div>
            <h3>Win-Back &amp; Churn Prevention</h3>
            <p>Early-warning detection for slipping engagement, triggering timely win-back workflows before customers permanently lapse.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5-STAGE PROCESS SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Our Methodology</span>
        <h2 class="heading">How we design and roll out <em>lifecycle marketing architecture.</em></h2>
      </div>

      <div class="process-steps">
        <div class="process-step">
          <div class="step-index">01</div>
          <div class="step-name">Cohort Diagnostics</div>
          <p class="step-desc">Analyzing customer repurchase intervals, retention decay curves, and high-value customer behaviors.</p>
        </div>

        <div class="process-step">
          <div class="step-index">02</div>
          <div class="step-name">Stage Blueprinting</div>
          <p class="step-desc">Defining stages: Prospect, First-Time Buyer, Active Loyal, VIP, Cooling Off, and Dormant.</p>
        </div>

        <div class="process-step">
          <div class="step-index">03</div>
          <div class="step-name">Workflow Build</div>
          <p class="step-desc">Setting up multi-channel triggers, behavioral logic, conditional splits, and communication rules.</p>
        </div>

        <div class="process-step">
          <div class="step-index">04</div>
          <div class="step-name">Creative Alignment</div>
          <p class="step-desc">Writing context-specific copy and designing bespoke email layouts tailored to each journey phase.</p>
        </div>

        <div class="process-step">
          <div class="step-index">05</div>
          <div class="step-name">LTV Optimization</div>
          <p class="step-desc">Tracking repeat purchase rates and lifetime value expansion over 30, 60, 90, and 180-day horizons.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- RELATED SERVICES INTERLINKING -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Explore Complementary Disciplines</span>
        <h2 class="heading">Enhance customer journeys with <em>focused execution.</em></h2>
      </div>

      <div class="interlinks-grid">
        <a class="interlink-card" href="/email-automation-agency">
          <div class="audience-tag">Technical Workflows</div>
          <h4>Email Automation Agency</h4>
          <p>Implement complex branching logic and webhook sync across your technology stack.</p>
        </a>
        <a class="interlink-card" href="/retention-marketing-agency">
          <div class="audience-tag">Unit Economics</div>
          <h4>Retention Marketing Agency</h4>
          <p>Maximize lifetime customer value and build systematic churn prevention strategies.</p>
        </a>
        <a class="interlink-card" href="/email-marketing-audit">
          <div class="audience-tag">Health Check</div>
          <h4>Email Marketing Audit</h4>
          <p>Pinpoint lifecycle gaps and underperforming communication branches.</p>
        </a>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 680px;">
        <span class="eyebrow">Common Questions</span>
        <h2 class="heading">Answers about <em>lifecycle marketing strategy.</em></h2>
      </div>

      <div class="faq-grid">
        <div class="faq-card">
          <h4>What makes lifecycle marketing different from regular email marketing?</h4>
          <p>Traditional email marketing often relies on broadcast newsletters sent to the full list at the same time. Lifecycle marketing focuses on automated, customer-specific journeys triggered by individual behaviors, ensuring every recipient receives the right message at their exact stage of relationship with your brand.</p>
        </div>

        <div class="faq-card">
          <h4>How do you identify the optimal time to send a replenishment or repurchase prompt?</h4>
          <p>We analyze your historical order data to calculate median and average repeat purchase intervals by product category. Replenishment prompts are timed to arrive just before the customer typically runs out or considers alternative options.</p>
        </div>

        <div class="faq-card">
          <h4>Can lifecycle marketing reduce customer acquisition costs?</h4>
          <p>Yes. By significantly increasing repeat purchases and customer lifetime value, lifecycle marketing improves customer unit economics, allowing your brand to reinvest more profitably in scalable acquisition channels.</p>
        </div>

        <div class="faq-card">
          <h4>How do you prevent automated lifecycle emails from overlapping?</h4>
          <p>We implement global exclusion filters and smart sending caps. If a customer is in an active post-purchase educational flow, promotional broadcasts and lower-priority messages are paused automatically.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <div class="wrap">
    <div class="cta-banner">
      <div class="cta-content">
        <span class="eyebrow" style="color: #e9b98f;">Journey Optimization</span>
        <h2>Ready to build customer journeys that <em>grow lifetime value?</em></h2>
        <p>
          Connect with MailBench Founder Kavya Reddy to analyze your customer conversion funnels, map out friction points, and build a high-retention lifecycle strategy.
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

// ============================================================================
// PAGE 4: /retention-marketing-agency
// ============================================================================
export const RETENTION_MARKETING_AGENCY_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Retention Marketing Agency &amp; Customer Retention Strategy | MailBench</title>
  <meta name="description" content="MailBench helps ambitious brands increase repeat purchase rates, reduce customer churn, and maximize customer lifetime value through data-driven retention marketing." />
  <link rel="canonical" href="https://www.mailbenchagency.com/retention-marketing-agency" />
  
  <meta property="og:title" content="Retention Marketing Agency &amp; Customer Retention Strategy | MailBench" />
  <meta property="og:description" content="MailBench helps ambitious brands increase repeat purchase rates, reduce customer churn, and maximize customer lifetime value through data-driven retention marketing." />
  <meta property="og:url" content="https://www.mailbenchagency.com/retention-marketing-agency" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MailBench" />

  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet"/>

  <style>${COMMON_CSS}</style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Customer Retention Marketing Services",
    "serviceType": "Retention Marketing Agency",
    "provider": {
      "@type": "Organization",
      "name": "MailBench",
      "url": "https://www.mailbenchagency.com/",
      "founder": "Kavya Reddy"
    },
    "description": "Retention marketing agency services focused on repeat purchase rate optimization, customer lifetime value expansion, churn mitigation, cohort analysis, and customer loyalty strategy.",
    "url": "https://www.mailbenchagency.com/retention-marketing-agency"
  }
  </script>
</head>
<body>
  <div class="noise"></div>
  ${NAV_MARKUP('retention')}

  <!-- HERO SECTION -->
  <header class="hero-page">
    <div class="wrap hero-inner">
      <div>
        <div class="badge-pill">
          <span class="badge-dot"></span>
          <span>Customer Lifetime Value Strategy</span>
        </div>
        <h1 class="display">Retention Marketing Agency<br/><em>for Growing Brands.</em></h1>
        <p class="sub" style="margin: 1.4rem 0 2.2rem;">
          Acquiring a customer is only the start of the profit curve. MailBench works with ambitious brands to improve repeat purchase rates, stop customer churn, and maximize lifetime value (LTV). Through behavioral cohort analysis, VIP customer care, and automated communication, we turn single buyers into compounding assets.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-dark" href="/#contact">Improve Your Retention Rate →</a>
          <a class="btn btn-light" href="/email-marketing-audit">Request Retention Audit</a>
        </div>
      </div>

      <div class="hero-card-preview">
        <div class="eyebrow" style="margin-bottom: 0.4rem;">Retention Impact Metrics</div>
        <div class="preview-stat">
          <span class="preview-stat-title">Repeat Order Frequency</span>
          <span class="preview-stat-value">2.4x Multiplier</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Churn Mitigation</span>
          <span class="preview-stat-value">-22% At-Risk Defection</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">VIP Segment Revenue</span>
          <span class="preview-stat-value">46% Total Sales</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Payback Period</span>
          <span class="preview-stat-value">-35% Shorter Time</span>
        </div>
      </div>
    </div>
  </header>

  <!-- WHO THIS SERVICE IS FOR -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Target Businesses</span>
        <h2 class="heading">Retention marketing engineered for <em>brands focused on profitability.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          If your customer acquisition cost is rising while customer repurchase rates remain flat, our retention marketing solutions help restore healthy margins.
        </p>
      </div>

      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-tag">Direct to Consumer</div>
          <h4>Consumer Goods</h4>
          <p>Turning first-time holiday shoppers into repeat spring buyers with targeted replenishment and cross-category discovery.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Recurring Revenue</div>
          <h4>Subscription Brands</h4>
          <p>Preventing cancellation through proactive usage nudges, skip options, and timely loyalty rewards.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">High-AOV Services</div>
          <h4>Luxury &amp; Boutique</h4>
          <p>Curating white-glove communications, personal invitations, and exclusive perks that reinforce premium positioning.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">B2B &amp; Advisory</div>
          <h4>Professional Services</h4>
          <p>Maintaining ongoing top-of-mind awareness to secure contract renewals, upsells, and referral introductions.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT IS INCLUDED SECTION -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Retention Deliverables</span>
        <h2 class="heading">A holistic system to keep customers <em>engaged and buying.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          We build end-to-end retention programs grounded in unit economics, customer feedback loops, and actionable behavioral segmentation.
        </p>
      </div>

      <div class="card-grid">
        <div class="feature-card">
          <div>
            <div class="feature-icon">📈</div>
            <h3>Cohort &amp; LTV Analysis</h3>
            <p>Diagnosing historical cohort performance to identify when customer drop-offs happen and which channels yield the highest-value long-term buyers.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🔄</div>
            <h3>Repeat Purchase Architecture</h3>
            <p>Building targeted automated communications that shorten time-to-second-order and systematically encourage third and fourth transactions.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">⚠️</div>
            <h3>Early Churn Risk Detection</h3>
            <p>Monitoring subscriber interaction patterns to flag disengagement early, deploying targeted reactivation before customers are permanently lost.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">👑</div>
            <h3>VIP Loyalty Programs</h3>
            <p>Designing VIP tier structures that reward your top 10% of customers with exclusive perks, early access, and private brand experiences.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">💬</div>
            <h3>Feedback Loops &amp; Reviews</h3>
            <p>Automating customer satisfaction surveys, NPS capture, and review collection at peak positive emotional moments.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">💎</div>
            <h3>Reactivation Campaigns</h3>
            <p>Targeted win-back campaigns that rekindle relationships with lapsed buyers using personalized incentives and fresh product curation.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5-STAGE PROCESS SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Retention Roadmap</span>
        <h2 class="heading">How we systematically increase your <em>customer retention rates.</em></h2>
      </div>

      <div class="process-steps">
        <div class="process-step">
          <div class="step-index">01</div>
          <div class="step-name">Retention Audit</div>
          <p class="step-desc">Auditing historical retention rates, churn timing, repeat purchase curves, and customer lifetime value.</p>
        </div>

        <div class="process-step">
          <div class="step-index">02</div>
          <div class="step-name">Segment Profiling</div>
          <p class="step-desc">Categorizing customer groups into First-Time Buyers, Repeat Regulars, High-Value VIPs, and Cooling Contacts.</p>
        </div>

        <div class="process-step">
          <div class="step-index">03</div>
          <div class="step-name">Flow Engineering</div>
          <p class="step-desc">Deploying tailored post-purchase follow-ups, reorder reminders, and time-sensitive cross-sell journeys.</p>
        </div>

        <div class="process-step">
          <div class="step-index">04</div>
          <div class="step-name">Advocacy Activation</div>
          <p class="step-desc">Launching loyalty perks, VIP early access incentives, and personalized referral workflows.</p>
        </div>

        <div class="process-step">
          <div class="step-index">05</div>
          <div class="step-name">Cohort Monitoring</div>
          <p class="step-desc">Reviewing monthly cohort maturation and net revenue retention to continually optimize profitability.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- RELATED SERVICES INTERLINKING -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Explore Connected Services</span>
        <h2 class="heading">Strengthen customer retention with <em>full-suite communication.</em></h2>
      </div>

      <div class="interlinks-grid">
        <a class="interlink-card" href="/lifecycle-marketing-agency">
          <div class="audience-tag">Full-Funnel</div>
          <h4>Lifecycle Marketing Agency</h4>
          <p>Architect customer journeys from first touch to long-term brand advocacy.</p>
        </a>
        <a class="interlink-card" href="/email-marketing-agency">
          <div class="audience-tag">Core Engine</div>
          <h4>Email Marketing Agency</h4>
          <p>Deliver consistent, on-brand campaigns that keep your audience engaged weekly.</p>
        </a>
        <a class="interlink-card" href="/email-marketing-audit">
          <div class="audience-tag">Comprehensive Diagnostic</div>
          <h4>Email Marketing Audit</h4>
          <p>Evaluate your retention leakage points, flow logic, and deliverability standing.</p>
        </a>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 680px;">
        <span class="eyebrow">Frequently Addressed</span>
        <h2 class="heading">Common questions about <em>retention marketing services.</em></h2>
      </div>

      <div class="faq-grid">
        <div class="faq-card">
          <h4>Why should our brand invest in retention instead of more acquisition ads?</h4>
          <p>Acquiring a new customer can cost 5 to 7 times more than retaining an existing one. Furthermore, existing customers spend an average of 31% more per order and are 50% more likely to try new products. Strong retention transforms customer acquisition into a compounding, profitable growth flywheel.</p>
        </div>

        <div class="faq-card">
          <h4>What metrics do you track to measure retention success?</h4>
          <p>We monitor Repeat Purchase Rate (RPR), Time to Second Order, Customer Lifetime Value (LTV) by cohort, 30/60/90-day retention curves, Active Subscriber Churn Rate, and Revenue Per Recipient (RPR).</p>
        </div>

        <div class="faq-card">
          <h4>Can retention marketing work for products with long buying cycles?</h4>
          <p>Yes. Even for products purchased once every few years, retention marketing builds brand affinity, educates owners on maintenance, captures referrals, and secures accessory or upgrade purchases over time.</p>
        </div>

        <div class="faq-card">
          <h4>How do you prevent discount fatigue in retention campaigns?</h4>
          <p>We emphasize value-first communication—product education, styling advice, routine guidance, VIP access, and community storytelling—rather than training customers to wait for discounts before buying.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <div class="wrap">
    <div class="cta-banner">
      <div class="cta-content">
        <span class="eyebrow" style="color: #e9b98f;">Sustainable Growth</span>
        <h2>Ready to build a customer retention engine that <em>protects margins?</em></h2>
        <p>
          Connect with MailBench Founder Kavya Reddy to audit your customer cohorts, calculate your true repeat purchase potential, and plan a retention roadmap.
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

// ============================================================================
// PAGE 5: /email-automation-agency
// ============================================================================
export const EMAIL_AUTOMATION_AGENCY_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Email Automation Agency &amp; Marketing Automation Services | MailBench</title>
  <meta name="description" content="MailBench builds high-converting email automation systems, behavioral trigger workflows, customer journeys, and marketing automation for growing brands." />
  <link rel="canonical" href="https://www.mailbenchagency.com/email-automation-agency" />
  
  <meta property="og:title" content="Email Automation Agency &amp; Marketing Automation Services | MailBench" />
  <meta property="og:description" content="MailBench builds high-converting email automation systems, behavioral trigger workflows, customer journeys, and marketing automation for growing brands." />
  <meta property="og:url" content="https://www.mailbenchagency.com/email-automation-agency" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MailBench" />

  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet"/>

  <style>${COMMON_CSS}</style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Email Automation Agency Services",
    "serviceType": "Email Automation Agency",
    "provider": {
      "@type": "Organization",
      "name": "MailBench",
      "url": "https://www.mailbenchagency.com/",
      "founder": "Kavya Reddy"
    },
    "description": "Technical email automation and marketing automation services including behavioral trigger setups, complex branching logic, cart recovery, API integrations, and deliverability safeguards.",
    "url": "https://www.mailbenchagency.com/email-automation-agency"
  }
  </script>
</head>
<body>
  <div class="noise"></div>
  ${NAV_MARKUP('automation')}

  <!-- HERO SECTION -->
  <header class="hero-page">
    <div class="wrap hero-inner">
      <div>
        <div class="badge-pill">
          <span class="badge-dot"></span>
          <span>Behavioral Workflow Engineering</span>
        </div>
        <h1 class="display">Email Automation Agency<br/><em>for Modern Brands.</em></h1>
        <p class="sub" style="margin: 1.4rem 0 2.2rem;">
          The most profitable marketing emails are triggered by real human behavior. MailBench constructs intelligent email automation systems that respond instantly when visitors browse, sign up, abandon carts, buy, or lapse. We build reliable automation infrastructure that runs 24/7 without manual intervention.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-dark" href="/#contact">Build Your Automation System →</a>
          <a class="btn btn-light" href="/lifecycle-marketing-agency">Explore Lifecycle Journeys</a>
        </div>
      </div>

      <div class="hero-card-preview">
        <div class="eyebrow" style="margin-bottom: 0.4rem;">Automation Impact Metrics</div>
        <div class="preview-stat">
          <span class="preview-stat-title">Cart Recovery Rate</span>
          <span class="preview-stat-value">14.8% – 21.2%</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Revenue Contribution</span>
          <span class="preview-stat-value">30% – 50% Total</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Send Reliability</span>
          <span class="preview-stat-value">99.9% Uptime</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Manual Hours Saved</span>
          <span class="preview-stat-value">40+ Hrs / Month</span>
        </div>
      </div>
    </div>
  </header>

  <!-- WHO THIS SERVICE IS FOR -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Who Needs Automation</span>
        <h2 class="heading">Engineered for brands with <em>growing customer traffic.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          When traffic grows, manual communication breaks down. Email automation ensures every subscriber receives a personalized, timely message regardless of scale.
        </p>
      </div>

      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-tag">High-Volume Stores</div>
          <h4>Ecommerce &amp; Retail</h4>
          <p>Automating abandoned checkouts, price-drop alerts, back-in-stock updates, and dynamic product recommendations.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Digital Software</div>
          <h4>SaaS &amp; Apps</h4>
          <p>Triggering onboarding steps based on in-app milestones, feature usage, trial deadlines, and billing renewals.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Service Companies</div>
          <h4>Consulting &amp; Agencies</h4>
          <p>Automating intake form follow-ups, appointment reminders, proposal follow-ups, and review collection.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Content &amp; Media</div>
          <h4>Creators &amp; Publishers</h4>
          <p>Delivering drip welcome courses, subscriber preference surveys, and paid membership renewal reminders.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT IS INCLUDED SECTION -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Automation Deliverables</span>
        <h2 class="heading">Intelligent behavioral workflows that <em>generate revenue 24/7.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          We build, configure, test, and maintain the essential automation journeys that every modern brand needs to capture and retain revenue.
        </p>
      </div>

      <div class="card-grid">
        <div class="feature-card">
          <div>
            <div class="feature-icon">⚡</div>
            <h3>Behavioral Trigger Workflows</h3>
            <p>Configuring real-time event triggers based on web activity, link clicks, form submissions, purchases, and custom app events.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🛒</div>
            <h3>Cart &amp; Browse Abandonment</h3>
            <p>Multi-step recovery workflows with smart time delays, item photos, dynamic pricing tags, and objection-handling copy.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🔀</div>
            <h3>Conditional Branching &amp; Splits</h3>
            <p>Advanced decision logic routing customers into different paths based on past order value, item category, and engagement recency.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🎨</div>
            <h3>Dynamic Content Blocks</h3>
            <p>Templates featuring personalized first names, tailored recommendations, and dynamic catalog feeds populated automatically.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🔗</div>
            <h3>Integration &amp; Webhook Sync</h3>
            <p>Connecting your email system with storefronts, CRMs, subscription platforms, analytics tools, and custom backend APIs.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🛡</div>
            <h3>QA &amp; Sending Safeguards</h3>
            <p>Setting frequency caps, smart sending rules, exclusion lists, and fallback variables so broken tags never reach your customers.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5-STAGE PROCESS SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Technical Execution</span>
        <h2 class="heading">How we engineer reliable <em>email automation systems.</em></h2>
      </div>

      <div class="process-steps">
        <div class="process-step">
          <div class="step-index">01</div>
          <div class="step-name">Architecture Map</div>
          <p class="step-desc">Documenting trigger rules, delays, exit criteria, and exclusion lists for every automated sequence.</p>
        </div>

        <div class="process-step">
          <div class="step-index">02</div>
          <div class="step-name">Event Integration</div>
          <p class="step-desc">Validating event data passing between your website, storefront, database, and email platform.</p>
        </div>

        <div class="process-step">
          <div class="step-index">03</div>
          <div class="step-name">Creative Build</div>
          <p class="step-desc">Creating modular, responsive email templates with dynamic variable fallbacks and polished typography.</p>
        </div>

        <div class="process-step">
          <div class="step-index">04</div>
          <div class="step-name">Sandbox Testing</div>
          <p class="step-desc">Testing test-order webhooks, dynamic price rendering, and split percentage distribution before go-live.</p>
        </div>

        <div class="process-step">
          <div class="step-index">05</div>
          <div class="step-name">Monitoring &amp; Tuning</div>
          <p class="step-desc">Monitoring flow deliverability, trigger firing accuracy, and split-test performance on an ongoing basis.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- RELATED SERVICES INTERLINKING -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Connected Specializations</span>
        <h2 class="heading">Combine email automation with <em>complete lifecycle marketing.</em></h2>
      </div>

      <div class="interlinks-grid">
        <a class="interlink-card" href="/email-marketing-agency">
          <div class="audience-tag">Broadcasting</div>
          <h4>Email Marketing Agency</h4>
          <p>Pair automated background flows with high-impact broadcast campaign strategy.</p>
        </a>
        <a class="interlink-card" href="/sms-marketing-agency">
          <div class="audience-tag">Mobile Alerts</div>
          <h4>SMS Marketing Agency</h4>
          <p>Incorporate instant text message triggers alongside automated email branches.</p>
        </a>
        <a class="interlink-card" href="/email-marketing-audit">
          <div class="audience-tag">Technical Diagnostic</div>
          <h4>Email Marketing Audit</h4>
          <p>Evaluate your existing automation triggers, drop-off points, and deliverability.</p>
        </a>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 680px;">
        <span class="eyebrow">Frequently Addressed</span>
        <h2 class="heading">Questions about <em>email automation agency services.</em></h2>
      </div>

      <div class="faq-grid">
        <div class="faq-card">
          <h4>What are the most critical email automations every brand must have?</h4>
          <p>At minimum: Welcome series, Abandoned Cart recovery, Browse Abandonment follow-up, Post-Purchase onboarding, Customer Win-Back, and VIP Recognition. These core automations typically generate 30% to 50% of total email revenue.</p>
        </div>

        <div class="faq-card">
          <h4>How do you handle dynamic tags and fallback values?</h4>
          <p>Every dynamic placeholder (such as first name, last viewed product, or recommendation feed) is configured with clean fallback values so broken code or blank spaces never show to subscribers.</p>
        </div>

        <div class="faq-card">
          <h4>Can you migrate existing automations from one platform to another?</h4>
          <p>Yes. We conduct complete platform migrations, recreating workflow diagrams, preserving historical subscriber tags, reconnecting API webhooks, and ensuring warm sending domain continuity.</p>
        </div>

        <div class="faq-card">
          <h4>How often should automated email flows be reviewed and updated?</h4>
          <p>We review automation performance monthly, checking trigger completion rates, testing subject lines, and refreshing seasonal creative every quarter to ensure messaging stays aligned with your current offerings.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <div class="wrap">
    <div class="cta-banner">
      <div class="cta-content">
        <span class="eyebrow" style="color: #e9b98f;">Automation Engineering</span>
        <h2>Ready to build email automations that <em>scale with your brand?</em></h2>
        <p>
          Connect with MailBench Founder Kavya Reddy to audit your existing automated flows, identify missing trigger branches, and blueprint an automated revenue engine.
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

// ============================================================================
// PAGE 6: /email-marketing-audit
// ============================================================================
export const EMAIL_MARKETING_AUDIT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Email Marketing Audit &amp; Retention Performance Review | MailBench</title>
  <meta name="description" content="Get a comprehensive email marketing audit from MailBench. We evaluate your deliverability, automation flows, campaign strategy, list segmentation, copy, design, and revenue opportunities." />
  <link rel="canonical" href="https://www.mailbenchagency.com/email-marketing-audit" />
  
  <meta property="og:title" content="Email Marketing Audit &amp; Retention Performance Review | MailBench" />
  <meta property="og:description" content="Get a comprehensive email marketing audit from MailBench. We evaluate your deliverability, automation flows, campaign strategy, list segmentation, copy, design, and revenue opportunities." />
  <meta property="og:url" content="https://www.mailbenchagency.com/email-marketing-audit" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MailBench" />

  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet"/>

  <style>${COMMON_CSS}</style>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Comprehensive Email Marketing Audit",
    "serviceType": "Email Marketing Audit",
    "provider": {
      "@type": "Organization",
      "name": "MailBench",
      "url": "https://www.mailbenchagency.com/",
      "founder": "Kavya Reddy"
    },
    "description": "Comprehensive diagnostic email marketing audit reviewing technical deliverability, DNS compliance, automated flow architectures, campaign cadences, list segmentation, copy, and retention revenue opportunities.",
    "url": "https://www.mailbenchagency.com/email-marketing-audit"
  }
  </script>
</head>
<body>
  <div class="noise"></div>
  ${NAV_MARKUP('audit')}

  <!-- HERO SECTION -->
  <header class="hero-page">
    <div class="wrap hero-inner">
      <div>
        <div class="badge-pill">
          <span class="badge-dot"></span>
          <span>Comprehensive Diagnostic Review</span>
        </div>
        <h1 class="display">Email Marketing Audit<br/><em>for Growing Brands.</em></h1>
        <p class="sub" style="margin: 1.4rem 0 2.2rem;">
          Wondering why email open rates are declining, revenue per recipient is stagnant, or automated flows aren't performing? MailBench conducts rigorous, data-driven email marketing audits that uncover technical deliverability issues, automation drop-offs, segmentation gaps, and missed retention revenue.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-dark" href="/#contact">Request Comprehensive Audit →</a>
          <a class="btn btn-light" href="/email-marketing-agency">Explore Full Retainers</a>
        </div>
      </div>

      <div class="hero-card-preview">
        <div class="eyebrow" style="margin-bottom: 0.4rem;">Audit Scope &amp; Speed</div>
        <div class="preview-stat">
          <span class="preview-stat-title">Audit Turnaround</span>
          <span class="preview-stat-value">3 – 5 Business Days</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Checklist Depth</span>
          <span class="preview-stat-value">48 Evaluation Points</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Deliverable Format</span>
          <span class="preview-stat-value">Executive Report &amp; Call</span>
        </div>
        <div class="preview-stat">
          <span class="preview-stat-title">Action Priority</span>
          <span class="preview-stat-value">Immediate Quick Wins</span>
        </div>
      </div>
    </div>
  </header>

  <!-- WHO THIS SERVICE IS FOR -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Who Needs an Audit</span>
        <h2 class="heading">Designed for brands seeking <em>clarity and clear direction.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          Whether you're taking over an existing marketing stack, planning a rebrand, or troubleshooting deliverability drops, an objective audit reveals what's working and what to fix first.
        </p>
      </div>

      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-tag">Growth Stage</div>
          <h4>Plateaued Brands</h4>
          <p>Companies generating email revenue but struggling to break past stagnant open rates and declining click benchmarks.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Leadership Transitions</div>
          <h4>New Marketing Heads</h4>
          <p>Marketing directors who need a clear inventory of existing automation flows, list hygiene, and technical configurations.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Technical Deliverability</div>
          <h4>Spam Folder Issues</h4>
          <p>Brands experiencing abrupt open rate drops following Google and Yahoo bulk-sender authentication enforcement.</p>
        </div>
        <div class="audience-card">
          <div class="audience-tag">Platform Migrations</div>
          <h4>Post-Migration Checks</h4>
          <p>Businesses that recently switched email systems and need to confirm data sync, tracking tags, and sender warm-up health.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT IS INCLUDED SECTION -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 720px;">
        <span class="eyebrow">Audit Evaluation Pillars</span>
        <h2 class="heading">A thorough examination of your <em>entire email ecosystem.</em></h2>
        <p class="sub" style="margin-top: 1rem;">
          Our 48-point audit evaluates technical foundation, behavioral automations, campaign execution, list quality, and creative conversion.
        </p>
      </div>

      <div class="card-grid">
        <div class="feature-card">
          <div>
            <div class="feature-icon">🛡</div>
            <h3>Technical Deliverability Review</h3>
            <p>Verification of SPF, DKIM, DMARC, MX records, sending IP reputation, Google Postmaster Tools metrics, and spam trap risks.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">⚙</div>
            <h3>Automated Flow Architecture</h3>
            <p>Comprehensive audit of welcome flows, cart recovery, browse abandonment, post-purchase sequences, and win-back logic for drop-offs.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">👥</div>
            <h3>List Hygiene &amp; Segmentation</h3>
            <p>Evaluating active subscriber ratios, sunset policy enforcement, engagement criteria, and audience suppression rules.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">📅</div>
            <h3>Campaign Strategy &amp; Cadence</h3>
            <p>Assessing broadcast schedules, send timing, offer variety, holiday planning, and content fatigue risks across your subscriber list.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">🎨</div>
            <h3>Design, Copy &amp; Mobile UX</h3>
            <p>Reviewing subject lines, preview text, visual hierarchy, mobile reading ergonomics, CTA placements, and template load speed.</p>
          </div>
        </div>

        <div class="feature-card">
          <div>
            <div class="feature-icon">📋</div>
            <h3>Prioritized Growth Roadmap</h3>
            <p>A structured action plan categorizing recommendations by effort vs. revenue impact: immediate quick wins, 30-day fixes, and 90-day initiatives.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5-STAGE PROCESS SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Audit Methodology</span>
        <h2 class="heading">Our 5-step diagnostic process from <em>data access to action plan.</em></h2>
      </div>

      <div class="process-steps">
        <div class="process-step">
          <div class="step-index">01</div>
          <div class="step-name">Secure Onboarding</div>
          <p class="step-desc">Gaining read-only access to your email platform, storefront, and domain DNS management console.</p>
        </div>

        <div class="process-step">
          <div class="step-index">02</div>
          <div class="step-name">Technical Inspection</div>
          <p class="step-desc">Testing authentication headers, inbox placement across major providers, and sending domain health.</p>
        </div>

        <div class="process-step">
          <div class="step-index">03</div>
          <div class="step-name">Flow &amp; Data Analysis</div>
          <p class="step-desc">Mapping all active automated journeys, conversion attribution, trigger conditions, and drop-off points.</p>
        </div>

        <div class="process-step">
          <div class="step-index">04</div>
          <div class="step-name">Report Synthesis</div>
          <p class="step-desc">Compiling findings, visual examples, benchmarks, and revenue opportunities into an executive deck.</p>
        </div>

        <div class="process-step">
          <div class="step-index">05</div>
          <div class="step-name">Strategy Debrief</div>
          <p class="step-desc">A 45-minute live consultation reviewing findings with Founder Kavya Reddy and answering questions.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- RELATED SERVICES INTERLINKING -->
  <section class="section-block">
    <div class="wrap">
      <div style="max-width: 700px;">
        <span class="eyebrow">Turn Audit Findings into Action</span>
        <h2 class="heading">Explore full-service execution <em>following your audit.</em></h2>
      </div>

      <div class="interlinks-grid">
        <a class="interlink-card" href="/email-marketing-agency">
          <div class="audience-tag">Full Execution</div>
          <h4>Email Marketing Agency</h4>
          <p>Partner with MailBench for ongoing campaign planning, design, and management.</p>
        </a>
        <a class="interlink-card" href="/email-automation-agency">
          <div class="audience-tag">Flow Rebuilds</div>
          <h4>Email Automation Agency</h4>
          <p>Have our team rebuild and optimize underperforming behavioral flows.</p>
        </a>
        <a class="interlink-card" href="/retention-marketing-agency">
          <div class="audience-tag">Retention Economics</div>
          <h4>Retention Marketing Agency</h4>
          <p>Implement customer lifetime value strategies and systematic churn reduction.</p>
        </a>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="section-block section-alt">
    <div class="wrap">
      <div style="max-width: 680px;">
        <span class="eyebrow">Frequently Addressed</span>
        <h2 class="heading">Questions regarding our <em>email marketing audit.</em></h2>
      </div>

      <div class="faq-grid">
        <div class="faq-card">
          <h4>What access is required to conduct the audit?</h4>
          <p>We only require read-only / analyst access to your email marketing system, your storefront or analytics dashboard, and public DNS records. We do not require customer personal contact exports.</p>
        </div>

        <div class="faq-card">
          <h4>How long does the audit take to complete?</h4>
          <p>Standard turnaround is 3 to 5 business days from receiving read-only access. Once complete, we deliver the comprehensive written deck and schedule a live strategy review session.</p>
        </div>

        <div class="faq-card">
          <h4>Can our team implement the recommendations internally?</h4>
          <p>Yes. The audit is structured as a clear, prioritized blueprint with specific instructions so your in-house team can execute improvements. Alternatively, you can partner with MailBench for complete hands-on implementation.</p>
        </div>

        <div class="faq-card">
          <h4>Does the audit cover SMS marketing as well?</h4>
          <p>Yes. If your brand uses SMS, we evaluate mobile subscriber capture, opt-in compliance, automated text triggers, frequency management, and email + SMS coordination within the same review.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <div class="wrap">
    <div class="cta-banner">
      <div class="cta-content">
        <span class="eyebrow" style="color: #e9b98f;">Diagnostic Review</span>
        <h2>Ready to uncover the bottlenecks in your <em>email marketing program?</em></h2>
        <p>
          Connect with MailBench Founder Kavya Reddy to schedule your comprehensive 48-point email marketing and retention audit today.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a class="btn btn-white" href="/#contact">Request Your Audit →</a>
          <a class="btn btn-dark" style="background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.25);" href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener">Book Discovery Call</a>
        </div>
      </div>
    </div>
  </div>

  ${FOOTER_MARKUP}
</body>
</html>`;
