export const DEFAULT_CHARTGPT_WEBSITE = `<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>OpenArc / MailShift / FlowPulse / Engagely — Email &amp; SMS Lifecycle MailBench</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&amp;family=DM+Sans:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'DM Sans',system-ui,sans-serif;background:#f8f3eb;color:#201b16;line-height:1.65;overflow-x:hidden}body::before{content:"";position:fixed;inset:0;background:radial-gradient(circle at 10% 10%,rgba(220,160,116,.28),transparent 28%),radial-gradient(circle at 88% 12%,rgba(169,132,94,.18),transparent 30%),linear-gradient(180deg,#fff9f1,#f4ede3 45%,#fffaf4);z-index:-3}.noise{position:fixed;inset:0;pointer-events:none;opacity:.25;background-image:url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.18"/%3E%3C/svg%3E');z-index:-2}:root{--cream:#fffaf3;--cream2:#f3eadf;--ink:#201b16;--muted:#71665b;--soft:#9b8b7a;--cocoa:#6e4c38;--gold:#bd8a5f;--sage:#879574;--rose:#c88c7a;--line:rgba(55,40,28,.12);--glass:rgba(255,255,255,.62);--display:'Cormorant Garamond',serif;--ease:cubic-bezier(.16,1,.3,1)}a{text-decoration:none;color:inherit}section{position:relative;scroll-margin-top:90px}.wrap{max-width:1180px;margin:0 auto;padding:0 4rem}.eyebrow{font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--cocoa);font-weight:600;margin-bottom:1rem}.display{font-family:var(--display);font-size:clamp(2.4rem,5vw,5.4rem);font-weight:300;letter-spacing:-.025em;line-height:.98}.display em,.heading em{font-style:italic;color:var(--cocoa)}.heading{font-family:var(--display);font-size:clamp(2.1rem,3.6vw,4rem);font-weight:300;line-height:1.05;letter-spacing:-.015em}.sub{font-size:1.02rem;color:var(--muted);max-width:650px}.reveal{opacity:0;transform:translateY(32px);transition:opacity .9s var(--ease),transform .9s var(--ease)}.reveal.visible{opacity:1;transform:translateY(0)}.d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}nav{position:fixed;top:0;left:0;right:0;z-index:50;padding:1.2rem 4rem;display:flex;justify-content:space-between;align-items:center;transition:.35s var(--ease)}nav.scrolled{background:rgba(255,250,243,.82);backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}.logo{font-family:var(--display);font-size:1.45rem;letter-spacing:.08em;text-transform:uppercase}.nav-links{display:flex;list-style:none;gap:1.7rem}.nav-links a{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:600}.nav-links a:hover,.nav-links a.active{color:var(--ink)}.nav-cta{font-size:.72rem;letter-spacing:.13em;text-transform:uppercase;padding:.75rem 1.35rem;border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.45);font-weight:600}.nav-cta:hover{background:#201b16;color:#fff}.hero{position:relative;min-height:100vh;display:grid;place-items:center;padding:8rem 0 5rem;overflow:hidden;background-image:linear-gradient(90deg,#fffaf3 35%,rgba(255,250,243,.94) 52%,rgba(255,250,243,.65) 68%,rgba(255,250,243,.1) 100%),url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1920&q=80');background-size:cover;background-position:center;isolation:isolate}.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:4rem;align-items:center}.hero-copy{position:relative;z-index:2}.hero-sub{margin:2rem 0 2.4rem;max-width:610px;font-size:1.08rem;color:var(--muted)}.buttons{display:flex;gap:1rem;flex-wrap:wrap}.btn{display:inline-flex;align-items:center;gap:.6rem;border-radius:999px;padding:1rem 1.55rem;font-size:.78rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:.3s var(--ease)}.btn-dark{background:#201b16;color:#fff}.btn-light{background:rgba(255,255,255,.55);border:1px solid var(--line);color:#201b16}.btn:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(65,44,29,.16)}.hero-visual{position:relative;min-height:620px}.phone{position:absolute;right:5%;top:6%;width:260px;background:#201b16;border-radius:38px;padding:14px;box-shadow:0 40px 100px rgba(45,31,21,.28);transform:rotate(4deg)}.phone-screen{background:#fdf7ef;border-radius:28px;min-height:500px;padding:1rem;overflow:hidden}.phone-top{height:18px;width:80px;background:#201b16;border-radius:999px;margin:0 auto 1rem}.sms{background:#ede1d3;padding:.85rem;border-radius:18px 18px 18px 5px;margin:1rem 0;color:#2d241d;font-size:.78rem}.sms.alt{background:#201b16;color:#fff;margin-left:2rem;border-radius:18px 18px 5px 18px}.email-card{position:absolute;left:0;top:22%;width:320px;background:rgba(255,255,255,.72);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.9);border-radius:26px;padding:1.2rem;box-shadow:0 24px 70px rgba(90,65,45,.14);animation:float 7s ease-in-out infinite}.flow-card{position:absolute;left:10%;bottom:6%;width:350px;background:#fffaf3;border:1px solid var(--line);border-radius:26px;padding:1.2rem;box-shadow:0 24px 70px rgba(90,65,45,.16);animation:float 8s ease-in-out 1s infinite}.metric-card{position:absolute;right:2%;bottom:12%;width:190px;background:#fff;border-radius:22px;padding:1.2rem;border:1px solid var(--line);box-shadow:0 24px 70px rgba(90,65,45,.14);animation:float 6s ease-in-out .4s infinite}.metric-num{font-family:var(--display);font-size:3rem;line-height:1;color:var(--cocoa)}.small-label{font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:var(--soft);font-weight:700}.line{height:9px;background:#eadfD3;border-radius:999px;margin:.55rem 0}.line.dark{background:#201b16}.journey{display:flex;align-items:center;gap:.5rem;margin-top:1rem}.dot{width:11px;height:11px;border-radius:50%;background:var(--gold)}.path{height:1px;flex:1;background:var(--line)}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}.stats{padding:2rem 0;background:rgba(255,255,255,.45);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:24px;overflow:hidden}.stat{background:rgba(255,250,243,.9);padding:2rem;text-align:center}.stat .n{font-family:var(--display);font-size:3rem;color:var(--cocoa);line-height:1}.stat .l{font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:700}.problem,.services,.flows,.process,.testimonials,.contact,.brandstyles{padding:8.5rem 0}.problem-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:4rem;align-items:start}.pain-list{display:grid;gap:1rem}.pain{background:rgba(255,255,255,.58);border:1px solid var(--line);border-radius:24px;padding:1.3rem;display:grid;grid-template-columns:auto 1fr;gap:1rem;transition:.3s var(--ease)}.pain:hover{transform:translateX(6px);background:#fff}.pain-icon{width:44px;height:44px;border-radius:16px;display:grid;place-items:center;background:#efe3d8;color:var(--cocoa);font-weight:700}.pain h3{font-size:1rem;margin-bottom:.2rem}.pain p{font-size:.93rem;color:var(--muted)}.section-head{display:flex;justify-content:space-between;gap:3rem;align-items:end;margin-bottom:3.5rem}.section-head .sub{max-width:420px}.service-industry-wrap{display:grid;grid-template-columns:1.2fr .8fr;gap:1.4rem;align-items:start}.service-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}.service{background:rgba(255,255,255,.67);border:1px solid var(--line);border-radius:28px;padding:1.6rem;min-height:225px;position:relative;overflow:hidden;transition:.35s var(--ease);cursor:pointer}.service::after{content:"";position:absolute;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,rgba(189,138,95,.16),transparent 70%);right:-70px;top:-70px;opacity:0;transition:.35s}.service:hover{transform:translateY(-7px);box-shadow:0 26px 70px rgba(83,59,37,.13);background:#fff}.service:hover::after{opacity:1}.service-icon{width:46px;height:46px;border-radius:17px;background:#201b16;color:#fff;display:grid;place-items:center;margin-bottom:1.1rem}.service h3{font-family:var(--display);font-size:1.65rem;font-weight:400;line-height:1.1;margin-bottom:.65rem}.service p{color:var(--muted);font-size:.92rem}.learn{margin-top:1rem;display:inline-block;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--cocoa);font-weight:800}.industries-panel{position:sticky;top:110px;background:#201b16;color:#fff;border-radius:34px;padding:1.4rem;overflow:hidden;box-shadow:0 30px 90px rgba(41,28,17,.22)}.industries-panel::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 0%,rgba(232,185,142,.35),transparent 38%),radial-gradient(circle at 90% 80%,rgba(135,149,116,.25),transparent 35%);pointer-events:none}.industries-panel>*{position:relative}.industry-title{font-family:var(--display);font-size:2.2rem;line-height:1;margin-bottom:.6rem}.industry-sub{color:rgba(255,255,255,.63);font-size:.9rem;margin-bottom:1.2rem}.industry-list{display:grid;gap:.7rem}.industry{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:.85rem 1rem;transition:.3s}.industry:hover{background:rgba(255,255,255,.16);transform:translateX(5px)}.industry span:first-child{font-size:.8rem;letter-spacing:.12em;text-transform:uppercase;font-weight:700}.industry span:last-child{color:#eac6a8}.visual-strip{margin-top:1.2rem;display:grid;grid-template-columns:1fr 1fr;gap:.7rem}.visual-mini{min-height:105px;border-radius:18px;padding:.8rem;display:flex;flex-direction:column;justify-content:end;background:linear-gradient(135deg,#f7d9c0,#fff1e3);color:#201b16;overflow:hidden;position:relative}.visual-mini:nth-child(2){background:linear-gradient(135deg,#d6e0c7,#f5efe3)}.visual-mini::before{content:"";position:absolute;width:85px;height:85px;border-radius:50%;background:rgba(255,255,255,.38);right:-20px;top:-20px}.visual-mini b{font-family:var(--display);font-size:1.25rem;line-height:1}.visual-mini small{font-size:.62rem;color:#6f5c4e;letter-spacing:.08em;text-transform:uppercase}.flows{background:#201b16;color:#fff}.flows .sub,.flows .eyebrow{color:rgba(255,255,255,.62)}.flows .heading em{color:#e9b98f}.flow-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.flow{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:30px;overflow:hidden;transition:.35s var(--ease)}.flow:hover{transform:translateY(-7px);background:rgba(255,255,255,.1)}.flow-visual{height:190px;padding:1.1rem;background:linear-gradient(135deg,rgba(232,185,142,.16),rgba(135,149,116,.08));display:flex;flex-direction:column;justify-content:center;gap:.55rem}.flow-node{display:flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:.55rem .75rem;font-size:.76rem;color:rgba(255,255,255,.75)}.flow-node i{width:10px;height:10px;border-radius:50%;background:#e9b98f}.flow-info{padding:1.35rem}.flow-info h3{font-family:var(--display);font-size:1.5rem;font-weight:400}.flow-info p{color:rgba(255,255,255,.62);font-size:.9rem}.results{padding:8.5rem 0;background:#f0e7da}.results-layout{display:grid;grid-template-columns:.85fr 1.15fr;gap:3rem;align-items:center}.dashboard{background:#fff;border:1px solid var(--line);border-radius:34px;padding:1.4rem;box-shadow:0 30px 90px rgba(80,55,35,.15)}.dash-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.2rem}.pill{font-size:.62rem;letter-spacing:.13em;text-transform:uppercase;background:#201b16;color:#fff;border-radius:999px;padding:.5rem .8rem}.dash-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.8rem}.dash-card{background:#fbf4ec;border:1px solid var(--line);border-radius:18px;padding:1rem}.dash-card .num{font-family:var(--display);font-size:2.6rem;color:var(--cocoa);line-height:1}.bars{height:150px;display:flex;align-items:end;gap:.5rem;margin-top:1.4rem}.bar{flex:1;border-radius:999px 999px 0 0;background:linear-gradient(180deg,#bd8a5f,#dfc2a5)}.process{background:var(--cream)}.steps{display:grid;grid-template-columns:repeat(5,1fr);gap:.9rem}.step{background:rgba(255,255,255,.68);border:1px solid var(--line);border-radius:24px;padding:1.3rem;transition:.3s}.step:hover{background:#fff;transform:translateY(-5px)}.step-num{font-family:var(--display);font-size:3.4rem;color:#dbc1a8;line-height:1}.step h3{font-size:.85rem;letter-spacing:.11em;text-transform:uppercase;margin:.8rem 0 .5rem}.step p{font-size:.88rem;color:var(--muted)}.testimonials{background:#201b16;color:#fff}.testimonials .heading em{color:#e9b98f}.testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.quote{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:28px;padding:1.5rem}.quote p{color:rgba(255,255,255,.74);font-size:.94rem}.quote b{display:block;margin-top:1.2rem;color:#fff}.quote span{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:#e9b98f}.brandstyles{background:#fffaf3}.style-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}.style-card{min-height:260px;border-radius:30px;padding:1.2rem;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;position:relative;border:1px solid var(--line);transition:.35s var(--ease)}.style-card:hover{transform:translateY(-8px)}.style-card h3{font-family:var(--display);font-size:2rem;font-weight:400;position:relative}.style-card p{font-size:.86rem;color:rgba(32,27,22,.72);position:relative}.style-card::before{content:"";position:absolute;width:220px;height:220px;border-radius:50%;right:-70px;top:-60px;background:rgba(255,255,255,.35)}.openarc{background:linear-gradient(135deg,#111827,#2f4156);color:#fff}.openarc p{color:rgba(255,255,255,.68)}.mailshift{background:linear-gradient(135deg,#fff4e8,#d8b58f)}.flowpulse{background:linear-gradient(135deg,#e5efd9,#f6efe8)}.engagely{background:linear-gradient(135deg,#ffe4dc,#f9f3ea)}.contact{min-height:70vh;display:grid;place-items:center;text-align:center;background:radial-gradient(circle at 50% 35%,rgba(189,138,95,.2),transparent 32%),#f6ecdf}.contact .sub{margin:1.1rem auto 2rem}.footer{padding:3rem 0;background:#16110e;color:rgba(255,255,255,.68)}.footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:2rem}.footer a{display:block;color:rgba(255,255,255,.55);margin:.45rem 0;font-size:.88rem}.footer h4{color:#fff;margin-bottom:.7rem}.footer-logo{font-family:var(--display);font-size:1.5rem;color:#fff;letter-spacing:.08em;text-transform:uppercase}.modal-overlay{position:fixed;inset:0;background:rgba(23,16,12,.72);backdrop-filter:blur(10px);z-index:100;display:none;place-items:center;padding:2rem}.modal-overlay.open{display:grid}.modal{max-width:820px;width:100%;max-height:82vh;overflow:auto;background:#fffaf3;border-radius:32px;padding:2rem;border:1px solid rgba(255,255,255,.85);box-shadow:0 40px 100px rgba(30,20,12,.25);position:relative}.modal-close{position:absolute;right:1rem;top:1rem;border:0;background:#201b16;color:#fff;border-radius:50%;width:34px;height:34px;cursor:pointer}.modal-tag{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--cocoa);font-weight:700}.modal-title{font-family:var(--display);font-size:2.6rem;line-height:1;margin:.6rem 0}.modal-desc{color:var(--muted);margin-bottom:1rem}.modal-item{background:#f3eadf;border:1px solid var(--line);border-radius:18px;padding:.9rem;margin:.55rem 0;color:#3c332b;font-size:.92rem}.mobile-menu{display:none}@media(max-width:980px){nav{padding:1rem 1.2rem}.nav-links{display:none}.hero-grid,.problem-grid,.service-industry-wrap,.results-layout,.who-header{grid-template-columns:1fr}.wrap{padding:0 1.2rem}.hero-visual{min-height:520px}.email-card{left:0;width:280px}.phone{right:0;width:235px}.flow-card{left:0;width:300px}.stats-grid,.impact-grid,.service-grid,.flow-grid,.testimonial-grid,.style-grid{grid-template-columns:1fr}.dash-grid,.visual-strip{grid-template-columns:1fr}.steps{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr}.section-head{display:block}.industries-panel{position:relative;top:auto}.display{font-size:3.5rem}.hero{padding-top:7rem;background-image:linear-gradient(180deg,#fffaf3 45%,rgba(255,250,243,0.94) 70%,rgba(255,250,243,0.6) 88%,rgba(255,250,243,0.2) 100%),url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80')}.who-industries{grid-template-columns:repeat(2,1fr)}}
@media (min-width: 981px) {
  .case-span-2 {
    grid-column: span 2 !important;
  }
}


/* ── EXPERIENCE-BASED HUMAN CRAFT GRAPHICS (Replacing multiple tiny AI floats with a majestic luxury corporate frame) ── */
.hero-grand-frame {
  position: relative;
  width: 100%;
  height: 640px;
  border-radius: 40px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid var(--line);
  box-shadow: 0 45px 120px rgba(45, 31, 21, 0.14);
  overflow: hidden;
  isolation: isolate;
  margin-top: 1rem;
}
.hero-grand-picture {
  width: 100%;
  height: 100%;
  border-radius: 32px;
  background-image: url('https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.hero-grand-picture::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(32, 27, 22, 0.02) 40%, rgba(32, 27, 22, 0.48) 100%);
  pointer-events: none;
}
.hero-grand-caption {
  position: absolute;
  bottom: 25px;
  left: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  z-index: 5;
}
.caption-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 10px #34d399;
  animation: pulse-active 2s infinite;
}
@keyframes pulse-active {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
.hero-grand-caption b {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 700;
}
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 750px;
}
.hero-visual .human-portrait {
  position: relative;
  width: 100%;
  max-width: 580px;
  height: 720px;
  background: var(--cream2);
  border-radius: 44px;
  padding: 14px;
  border: 1px solid var(--line);
  box-shadow: 0 50px 130px rgba(45, 31, 21, 0.18);
  transform: rotate(2deg);
  transition: all 0.4s var(--ease);
  overflow: hidden;
  z-index: 10;
}
.hero-visual .human-portrait:hover {
  transform: rotate(0deg) translateY(-8px);
  box-shadow: 0 55px 130px rgba(45, 31, 21, 0.25);
}
.hero-portrait-image {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}
.hero-portrait-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(32, 27, 22, 0) 58%, rgba(32, 27, 22, 0.5) 100%);
  pointer-events: none;
}
.hero-portrait-badge {
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  padding: 0.7rem 1.15rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  z-index: 5;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}
.hero-portrait-badge span:last-child {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--ink);
}

/* ── NEW ARTIFACT SHOWCASE SECTION (Rehashing the floating cards cleanly into dark-themed layouts) ── */
.blueprints-container {
  margin-top: 5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 36px;
  padding: 3rem;
  backdrop-filter: blur(20px);
}
.blueprint-row-grid {
  display: grid;
  grid-template-columns: 1.25fr 1.25fr 0.9fr;
  gap: 2.2rem;
  align-items: stretch;
}
.blueprint-interactive-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 24px;
  padding: 1.8rem;
  box-shadow: 0 15px 42px rgba(0, 0, 0, 0.12);
  transition: all 0.3s var(--ease);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  color: #fff;
}
.blueprint-interactive-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 25px 55px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.22);
}
.blueprint-interactive-card .email-card,
.blueprint-interactive-card .flow-card,
.blueprint-interactive-card .metric-card {
  position: relative !important;
  left: auto !important;
  right: auto !important;
  top: auto !important;
  bottom: auto !important;
  width: 100% !important;
  box-shadow: none !important;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  animation: none !important;
  transform: none !important;
}
.blueprint-interactive-card .small-label {
  color: rgba(255, 255, 255, 0.5) !important;
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.8rem;
  display: block;
}
.blueprint-interactive-card .line {
  background: rgba(255, 255, 255, 0.15) !important;
  height: 9px;
  border-radius: 999px;
  margin: 0.55rem 0;
}
.blueprint-interactive-card .line.dark {
  background: rgba(255, 255, 255, 0.35) !important;
}
.blueprint-interactive-card .metric-num {
  font-family: var(--display);
  font-size: 3.2rem;
  line-height: 1;
  color: #e9b98f !important;
}
.blueprint-interactive-card .journey {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}
.blueprint-interactive-card .dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #e9b98f;
}
.blueprint-interactive-card .path {
  height: 1px;
  flex: 1;
  background: rgba(255, 255, 255, 0.15);
}

/* ── PREMIUM TESTIMONIAL CASE STUDIES GRID (Clean, clear, stable, instant render) ── */
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  align-items: stretch;
}
.quote {
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 2.6rem 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s var(--ease);
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
}
.quote:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.075);
  border-color: rgba(233, 185, 143, 0.35);
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.28);
}
.quote::after {
  content: "“";
  position: absolute;
  top: 15px;
  right: 25px;
  font-family: var(--display);
  font-size: 6.5rem;
  line-height: 1;
  color: rgba(233, 185, 143, 0.05);
  pointer-events: none;
  font-weight: 700;
}
.quote-metric {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.12);
  padding-bottom: 1.4rem;
}
.quote-metric .metric-val {
  font-family: var(--display);
  font-size: 3.4rem;
  line-height: 1;
  color: #e9b98f;
  font-weight: 400;
  letter-spacing: -0.01em;
}
.quote-metric .metric-lbl {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 0.35rem;
  font-weight: 700;
}
.quote-stars {
  font-size: 0.8rem;
  color: #e9b98f;
  letter-spacing: 0.15em;
  margin-bottom: 1.1rem;
  opacity: 0.85;
}
.quote p {
  font-family: 'DM Sans', sans-serif;
  color: rgba(255, 255, 255, 0.82) !important;
  font-size: 0.95rem !important;
  line-height: 1.7 !important;
  margin-bottom: 2.2rem;
  font-weight: 300;
  flex-grow: 1;
}
.quote-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.12);
  padding-top: 1.4rem;
}
.quote-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(233, 185, 143, 0.08);
  border: 1px solid rgba(233, 185, 143, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #e9b98f;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}
.quote b {
  display: block;
  font-size: 0.95rem;
  color: #fff;
  font-weight: 600;
  line-height: 1.2;
}
.quote span {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 0.2rem;
  font-weight: 600;
}

.problem{background:linear-gradient(180deg,#fff8ef,#f5ebdf)}
.problem-grid::after{content:"";min-height:430px;border-radius:42px;background:linear-gradient(180deg,rgba(32,27,22,.05),rgba(32,27,22,.35)),url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80');background-size:cover;background-position:center;box-shadow:0 34px 95px rgba(78,52,33,.16);border:1px solid rgba(255,255,255,.7)}
.problem-grid{grid-template-columns:.75fr .95fr .75fr}.problem-grid .pain-list{grid-column:2}.problem-grid>div:first-child{grid-column:1}.problem-grid::after{grid-column:3;grid-row:1}

.service{padding-top:9.2rem;background:rgba(255,255,255,.72)}
.service::before{content:"";position:absolute;left:0;right:0;top:0;height:122px;background-size:cover;background-position:center;opacity:.96;transition:transform .45s var(--ease),opacity .35s var(--ease);z-index:0}
.service:hover::before{transform:scale(1.06);opacity:1}.service>*{position:relative;z-index:1}.service-icon{box-shadow:0 12px 30px rgba(32,27,22,.18)}

/* Core Services background images */
.core-service:nth-child(1)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.1),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80')}
.core-service:nth-child(2)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80')}
.core-service:nth-child(3)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.42)),url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80')}
.core-service:nth-child(4)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80')}
.core-service:nth-child(5)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80')}
.core-service:nth-child(6)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80')}
.core-service:nth-child(7)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=900&q=80')}
.core-service:nth-child(8)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=900&q=80')}

/* Why MailBench specific backgrounds */
.why-card:nth-child(1)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.1),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1553876005-af1262fa0976?auto=format&fit=crop&w=900&q=80')}
.why-card:nth-child(2)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1531535934027-667f6db8759a?auto=format&fit=crop&w=900&q=80')}
.why-card:nth-child(3)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.42)),url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=900&q=80')}
.why-card:nth-child(4)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80')}
.why-card:nth-child(5)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=900&q=80')}
.why-card:nth-child(6)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1542744173-8e0ee26cb7bb?auto=format&fit=crop&w=900&q=80')}
.why-card:nth-child(7)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80')}
.why-card:nth-child(8)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80')}

/* Case Studies specific backgrounds */
.case-card:nth-child(1)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.1),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80')}
.case-card:nth-child(2)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80')}
.case-card:nth-child(3)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.42)),url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80')}
.case-card:nth-child(4)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80')}
.case-card:nth-child(5)::before{background-image:linear-gradient(180deg,rgba(255,255,255,.08),rgba(32,27,22,.38)),url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80')}

.industries-panel{background:#211813}.audience-photo-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1rem}.audience-photo{min-height:132px;border-radius:20px;background-size:cover;background-position:center;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.14);display:flex;align-items:flex-end;padding:.8rem;transition:.35s var(--ease)}.audience-photo:hover{transform:translateY(-5px) scale(1.01)}.audience-photo b{position:relative;z-index:2;font-family:var(--display);font-size:1.35rem;font-weight:400;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.35)}.ap1{background-image:url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80')}.ap2{background-image:url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80')}.ap3{background-image:url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80')}.ap4{background-image:url('https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80')}
.visual-strip{display:none}

.flow{position:relative}.flow-visual{position:relative;background-size:cover;background-position:center;overflow:hidden}.flow-visual>*{position:relative;z-index:2}.flow:nth-child(1) .flow-visual{background-image:url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80')}.flow:nth-child(2) .flow-visual{background-image:url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80')}.flow:nth-child(3) .flow-visual{background-image:url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80')}.flow:nth-child(4) .flow-visual{background-image:url('https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=80')}.flow:nth-child(5) .flow-visual{background-image:url('https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=900&q=80')}.flow:nth-child(6) .flow-visual{background-image:url('https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80')}

.results{background:linear-gradient(180deg,#f6ede1,#fff7ee)}.results-layout::before{content:"";display:block;min-height:520px;border-radius:42px;background:linear-gradient(180deg,rgba(32,27,22,.05),rgba(32,27,22,.35)),url('https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80');background-size:cover;background-position:center;box-shadow:0 30px 95px rgba(80,55,35,.16);border:1px solid rgba(255,255,255,.7)}

.brandstyles .style-card{background-size:cover;background-position:center;color:#fff}.style-card p{color:rgba(255,255,255,.76)}.style-card::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.52));pointer-events:none}.style-card h3,.style-card p{z-index:1}.openarc{background-image:url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80')}.mailshift{background-image:url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80')}.flowpulse{background-image:url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80')}.engagely{background-image:url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80')}

@media(max-width:980px){.problem-grid{grid-template-columns:1fr}.problem-grid::after{display:none}.problem-grid .pain-list,.problem-grid>div:first-child{grid-column:auto}.audience-photo-grid{grid-template-columns:1fr 1fr}.service{padding-top:8.7rem}}



/* ── UPDATED TARGET CLIENTS: elegant picture cards + clickable details ── */
.industries-panel.v2-audience{
  position: sticky;
  top: 106px;
  padding: 1.25rem;
  border-radius: 34px;
  background: linear-gradient(160deg,#24180f 0%,#3a281c 55%,#201510 100%);
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 34px 90px rgba(48,31,20,.24);
}
.industries-panel.v2-audience .industry-list{display:none}
.audience-kicker{font-size:.64rem;letter-spacing:.18em;text-transform:uppercase;color:#e9c09c;font-weight:800;margin-bottom:.65rem}
.audience-title{font-family:var(--display);font-size:2.35rem;line-height:.98;font-weight:300;color:#fff;margin-bottom:.75rem}
.audience-intro{font-size:.92rem;color:rgba(255,255,255,.68);line-height:1.65;margin-bottom:1.15rem}
.audience-photo-grid.v2{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-top:1rem}
.audience-photo.v2-card{
  min-height:150px;
  border-radius:26px;
  background-size:cover;
  background-position:center;
  padding:1rem;
  border:1px solid rgba(255,255,255,.22);
  position:relative;
  overflow:hidden;
  cursor:pointer;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  transition:transform .38s var(--ease), border-color .35s var(--ease), box-shadow .35s var(--ease);
}
.audience-photo.v2-card::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.03) 0%,rgba(0,0,0,.28) 35%,rgba(0,0,0,.72) 100%)}
.audience-photo.v2-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 80% 0%,rgba(255,221,180,.32),transparent 40%);opacity:0;transition:.35s var(--ease)}
.audience-photo.v2-card:hover{transform:translateY(-7px) scale(1.015);border-color:rgba(255,225,190,.55);box-shadow:0 22px 46px rgba(0,0,0,.22)}
.audience-photo.v2-card:hover::before{opacity:1}
.audience-photo.v2-card b,.audience-photo.v2-card small{position:relative;z-index:2;color:#fff;text-shadow:0 2px 14px rgba(0,0,0,.38)}
.audience-photo.v2-card b{font-family:var(--display);font-size:1.55rem;font-weight:400;line-height:1;margin-bottom:.25rem}
.audience-photo.v2-card small{font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.75);font-weight:800}
.audience-photo.v2-card .tap{position:absolute;z-index:2;top:.75rem;right:.75rem;width:30px;height:30px;border-radius:999px;background:rgba(255,255,255,.18);backdrop-filter:blur(12px);display:grid;place-items:center;color:#fff;font-size:1rem;border:1px solid rgba(255,255,255,.16)}
.ap5{background-image:url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80')}
.ap6{background-image:url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=900&q=80')}
.ap7{background-image:url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80')}
.audience-note{margin-top:1rem;padding:1rem;border-radius:22px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.74);font-size:.84rem;line-height:1.6}
.industry-modal-visual{height:220px;border-radius:22px;background-size:cover;background-position:center;margin:1.1rem 0 1.25rem;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.15)}
.industry-modal-visual::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.55))}
.industry-pill-row{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:1rem}
.industry-pill{padding:.45rem .7rem;border-radius:999px;background:rgba(189,138,95,.11);border:1px solid rgba(189,138,95,.22);font-size:.72rem;color:var(--cocoa);font-weight:700}
@media(max-width:900px){.industries-panel.v2-audience{position:relative;top:auto}.audience-photo-grid.v2{grid-template-columns:1fr 1fr}.audience-photo.v2-card{min-height:140px}}


/* Premium client message proof section */
.client-proof-section{
  padding: 110px 40px;
  background:
    radial-gradient(circle at 15% 10%, rgba(205,170,120,.18), transparent 34%),
    radial-gradient(circle at 90% 75%, rgba(255,255,255,.08), transparent 30%),
    #241b16;
  color:#fff7ef;
  position:relative;
  overflow:hidden;
}
.client-proof-inner{max-width:1180px;margin:0 auto;}
.client-proof-head{
  display:grid;
  grid-template-columns:1.1fr .9fr;
  gap:56px;
  align-items:end;
  margin-bottom:56px;
}
.client-proof-eyebrow{
  font-size:12px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:#d6b68c;
  margin-bottom:16px;
}
.client-proof-title{
  font-family:var(--font-display, Georgia, serif);
  font-size:clamp(42px,5vw,72px);
  line-height:.95;
  font-weight:300;
  letter-spacing:-.03em;
}
.client-proof-title em{color:#e8c99f;font-style:italic;}
.client-proof-sub{
  color:rgba(255,247,239,.68);
  font-size:17px;
  line-height:1.8;
  max-width:480px;
}
.sms-proof-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
  margin-bottom:34px;
}
.sms-proof-card{
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.15);
  border-radius:34px;
  padding:18px;
  box-shadow:0 24px 70px rgba(0,0,0,.28);
  backdrop-filter:blur(18px);
  transition:transform .35s ease, border-color .35s ease, background .35s ease;
}
.sms-proof-card:hover{
  transform:translateY(-8px);
  border-color:rgba(232,201,159,.45);
  background:rgba(255,255,255,.11);
}
.phone-top{
  display:flex;
  flex-direction:column;
  padding:6px 6px 12px;
  border-bottom:1px solid rgba(255,255,255,.07);
  width:100%;
}
.phone-status-bar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  padding:0 4px 8px;
  font-size:10px;
  font-weight:600;
  color:rgba(255,255,255,.55);
}
.phone-icons{
  display:flex;
  align-items:center;
  gap:5px;
}
.phone-icon-svg{
  opacity:0.6;
}
.phone-network-type{
  font-size:9px;
  font-weight:700;
  opacity:0.75;
}
.phone-avatar-wrapper{
  position:relative;
  margin-right:10px;
  display:flex;
}
.phone-avatar{
  width:36px;height:36px;border-radius:50%;
  object-fit:cover;
  overflow:hidden;
  border:1.5px solid rgba(255,255,255,.15);
  display:block;
  margin-right:0;
}
.phone-online-dot{
  position:absolute;
  bottom:1px;
  right:1px;
  width:9px;
  height:9px;
  background:#4ade80;
  border-radius:50%;
  border:1.5px solid #1c1d24;
}
.phone-back-btn{
  color:rgba(255,255,255,.45);
  margin-right:6px;
  display:flex;
  align-items:center;
  cursor:pointer;
}
.phone-contact-info{
  display:flex;
  flex-direction:column;
}
.phone-contact-name{
  font-size:13px;
  font-weight:600;
  color:#ffffff;
  line-height:1.2;
}
.phone-contact-status{
  font-size:9px;
  color:#4ade80;
  font-weight:500;
  text-transform:lowercase;
}
.phone-header-actions{
  display:flex;
  align-items:center;
  gap:12px;
  color:rgba(255,255,255,.65);
  margin-left:auto;
}
.phone-contact{display:flex;align-items:center;width:100%;}
.sms-window{
  background:#f7f2eb;
  color:#211915;
  border-radius:26px;
  padding:18px;
  min-height:310px;
}
.sms-bubble{
  padding:13px 15px;
  border-radius:18px;
  font-size:14px;
  line-height:1.45;
  margin-bottom:12px;
  max-width:88%;
}
.sms-bubble.client{
  background:#ffffff;
  color:#2a211d;
  border-bottom-left-radius:5px;
  box-shadow:0 5px 18px rgba(0,0,0,.06);
}
.sms-bubble.us{
  background:#d9f6d7;
  margin-left:auto;
  border-bottom-right-radius:5px;
}
.sms-proof-rating{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:16px;
  padding:12px 14px;
  background:rgba(232,201,159,.16);
  border:1px solid rgba(232,201,159,.20);
  border-radius:18px;
  font-size:13px;
}
.sms-proof-rating span:first-child{color:#ffd479;}
.sms-proof-name{
  margin-top:14px;
  color:#fff7ef;
  font-weight:500;
}
.sms-proof-brand{
  color:rgba(255,247,239,.52);
  font-size:13px;
}
.picture-proof-row{
  display:grid;
  grid-template-columns:1.15fr .85fr;
  gap:24px;
  margin-top:28px;
}
.picture-proof-card{
  min-height:280px;
  border-radius:34px;
  overflow:hidden;
  position:relative;
  border:1px solid rgba(255,255,255,.16);
  background-size:cover;
  background-position:center;
  box-shadow:0 24px 70px rgba(0,0,0,.26);
}
.picture-proof-card::after{
  content:"";
  position:absolute;inset:0;
  background:linear-gradient(180deg, transparent 15%, rgba(0,0,0,.62) 100%);
}
.picture-proof-content{
  position:absolute;left:28px;right:28px;bottom:26px;z-index:2;
}
.picture-proof-label{
  font-size:12px;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:#e8c99f;
  margin-bottom:9px;
}
.picture-proof-title{
  font-family:var(--font-display, Georgia, serif);
  font-size:34px;
  line-height:1.05;
}
.picture-proof-text{
  color:rgba(255,247,239,.74);
  margin-top:8px;
  max-width:520px;
  line-height:1.6;
}
@media(max-width:900px){
  .client-proof-head,.sms-proof-grid,.picture-proof-row{grid-template-columns:1fr;}
  .client-proof-section{padding:80px 22px;}
}

/* New Editorial Proof Layout Styles (Extremely high contrast and legible) */
.editorial-proof-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 56px;
}
.editorial-proof-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 28px;
  padding: 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}
.editorial-proof-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(232, 201, 159, 0.3);
}
.editorial-proof-quote-icon {
  font-family: var(--font-display, Georgia, serif);
  font-size: 82px;
  line-height: 1;
  color: #e8c99f;
  opacity: 0.14;
  position: absolute;
  top: 15px;
  left: 30px;
  pointer-events: none;
}
.editorial-proof-text {
  font-size: 17px;
  line-height: 1.65;
  color: #fff7ef;
  font-weight: 400;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
}
.editorial-proof-author {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 18px;
}
.editorial-proof-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid rgba(232, 201, 159, 0.3);
}
.editorial-proof-meta {
  display: flex;
  flex-direction: column;
}
.editorial-proof-name {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}
.editorial-proof-title-desc {
  font-size: 12px;
  color: #e8c99f;
  margin-top: 2px;
}
@media(max-width: 900px){
  .editorial-proof-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.lifecycle-dashboard-section{
 padding:110px 40px;
 background:#f8f4ee;
 color:#1f1a17;
}
.lifecycle-dashboard-inner{
 max-width:1240px;
 margin:0 auto;
}
.lifecycle-dashboard-header{
 display:flex;
 justify-content:space-between;
 gap:40px;
 align-items:end;
 margin-bottom:55px;
 flex-wrap:wrap;
}
.lifecycle-dashboard-title{
 font-size:clamp(42px,5vw,74px);
 line-height:.95;
 font-family:Georgia,serif;
 font-weight:300;
 letter-spacing:-.04em;
 max-width:720px;
}
.lifecycle-dashboard-sub{
 max-width:420px;
 color:#5e544d;
 line-height:1.8;
}
.dashboard-grid{
 display:grid;
 grid-template-columns:1.2fr .8fr;
 gap:26px;
}
.dashboard-large{
 position:relative;
 overflow:hidden;
 border-radius:36px;
 min-height:520px;
 background-size:cover;
 background-position:center;
 box-shadow:0 30px 80px rgba(0,0,0,.12);
}
.dashboard-large::after{
 content:"";
 position:absolute;
 inset:0;
 background:linear-gradient(180deg,transparent 20%,rgba(0,0,0,.72) 100%);
}
.dashboard-content{
 position:absolute;
 z-index:2;
 left:34px;
 right:34px;
 bottom:34px;
 color:white;
}
.dashboard-tag{
 letter-spacing:.2em;
 text-transform:uppercase;
 font-size:12px;
 color:#ecd2ae;
 margin-bottom:12px;
}
.dashboard-main-title{
 font-size:44px;
 line-height:1;
 font-family:Georgia,serif;
 font-weight:300;
}
.dashboard-main-text{
 margin-top:12px;
 max-width:520px;
 color:rgba(255,255,255,.82);
 line-height:1.7;
}
.dashboard-side{
 display:grid;
 gap:22px;
}
.dashboard-card{
 background:white;
 border-radius:30px;
 padding:24px;
 box-shadow:0 18px 50px rgba(0,0,0,.08);
 overflow:hidden;
 position:relative;
}
.dashboard-card img{
 width:100%;
 height:190px;
 object-fit:cover;
 border-radius:22px;
 margin-bottom:18px;
}
.dashboard-card-title{
 font-size:28px;
 font-family:Georgia,serif;
 margin-bottom:8px;
}
.dashboard-card p{
 color:#665d57;
 line-height:1.7;
}
.dashboard-metrics{
 display:grid;
 grid-template-columns:repeat(4,1fr);
 gap:18px;
 margin-top:26px;
}
.metric-card{
 background:white;
 border-radius:26px;
 padding:28px;
 box-shadow:0 14px 40px rgba(0,0,0,.06);
 text-align:center;
}
.metric-number{
 font-size:48px;
 font-family:Georgia,serif;
 margin-bottom:10px;
}
.metric-label{
 color:#736a63;
 font-size:14px;
 letter-spacing:.08em;
 text-transform:uppercase;
}
.extra-gallery{
 display:grid;
 grid-template-columns:repeat(3,1fr);
 gap:20px;
 margin-top:40px;
}
.extra-gallery img{
 width:100%;
 height:260px;
 object-fit:cover;
 border-radius:28px;
 box-shadow:0 18px 50px rgba(0,0,0,.12);
}
@media(max-width:900px){
 .dashboard-grid,.dashboard-metrics,.extra-gallery{
  grid-template-columns:1fr;
  }
 .lifecycle-dashboard-section{
  padding:80px 22px;
  }
}

/* Dashboard picture collage upgrade */
.dashboard-visual-collage{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
  align-self:stretch;
}
.dashboard-photo{
  min-height:240px;
  border-radius:34px;
  background-size:cover;
  background-position:center;
  position:relative;
  overflow:hidden;
  box-shadow:0 24px 70px rgba(0,0,0,.14);
}
.dashboard-photo.tall{
  min-height:520px;
  grid-row:span 2;
}
.dashboard-photo::after{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(180deg, transparent 25%, rgba(0,0,0,.58));
}
.dashboard-photo span{
  position:absolute;
  left:24px;
  bottom:22px;
  z-index:2;
  color:#fff;
  font-family:Georgia,serif;
  font-size:28px;
}
.dashboard-layout-enhanced{
  display:grid;
  grid-template-columns:.95fr 1.05fr;
  gap:28px;
  align-items:stretch;
}
@media(max-width:900px){
  .dashboard-layout-enhanced,
  .dashboard-visual-collage{
    grid-template-columns:1fr;
  }
  .dashboard-photo.tall{min-height:300px;}
}

/* FINAL READY-TO-BEGIN INQUIRY PAGE */
.contact.final-inquiry-contact{
  min-height:auto !important;
  padding:110px 0 !important;
  text-align:left !important;
  display:block !important;
  background:
    radial-gradient(circle at 12% 8%, rgba(189,138,95,.18), transparent 32%),
    linear-gradient(135deg,#fff8ef 0%,#eadccc 100%) !important;
}
.final-inquiry-grid{
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:32px;
  align-items:stretch;
}
.final-inquiry-copy{
  background:#241b16;
  color:#fff7ef;
  border-radius:36px;
  padding:46px;
  position:relative;
  overflow:hidden;
  box-shadow:0 28px 80px rgba(50,32,20,.16);
}
.final-inquiry-copy::after{
  content:"";
  position:absolute;
  width:300px;
  height:300px;
  border-radius:50%;
  right:-120px;
  bottom:-120px;
  background:rgba(232,201,159,.18);
}
.final-inquiry-copy .eyebrow{color:#e8c99f;}
.final-inquiry-copy .display{
  font-size:clamp(2.8rem,5vw,5.4rem);
  color:#fff7ef;
}
.final-inquiry-copy .sub{
  color:rgba(255,247,239,.72);
  margin-top:1.2rem;
  max-width:520px;
}
.final-contact-options{
  display:grid;
  gap:14px;
  margin-top:32px;
  position:relative;
  z-index:2;
}
.final-contact-option{
  display:flex;
  justify-content:space-between;
  gap:18px;
  align-items:center;
  padding:17px 19px;
  border-radius:20px;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.12);
  color:#fff7ef;
  text-decoration:none;
}
.final-contact-option span{
  color:rgba(255,247,239,.62);
  font-size:.86rem;
}
.final-inquiry-form-card{
  background:rgba(255,255,255,.84);
  border:1px solid rgba(80,55,35,.12);
  border-radius:36px;
  padding:36px;
  box-shadow:0 28px 80px rgba(80,55,35,.12);
}
.final-inquiry-form-card h3{
  font-family:var(--display, Georgia, serif);
  font-size:2.5rem;
  font-weight:300;
  line-height:1;
  margin-bottom:1.4rem;
  color:#241b16;
}
.final-inquiry-form{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
}
.final-inquiry-form label{
  display:block;
  font-size:.72rem;
  letter-spacing:.13em;
  text-transform:uppercase;
  color:#7b6b60;
  font-weight:700;
  margin-bottom:8px;
}
.final-inquiry-form input,
.final-inquiry-form select,
.final-inquiry-form textarea{
  width:100%;
  border:1px solid rgba(80,55,35,.14);
  background:#fffaf5;
  color:#211914;
  border-radius:17px;
  padding:15px 16px;
  font-size:15px;
  font-family:inherit;
  outline:none;
}
.final-inquiry-form textarea{
  min-height:135px;
  resize:vertical;
}
.final-form-full{grid-column:1 / -1;}
.final-inquiry-submit{
  grid-column:1 / -1;
  border:none;
  background:#241b16;
  color:#fff7ef;
  border-radius:999px;
  padding:17px 24px;
  font-size:.76rem;
  letter-spacing:.16em;
  text-transform:uppercase;
  cursor:pointer;
  font-weight:700;
}
.final-form-note{
  grid-column:1 / -1;
  color:#7b6b60;
  font-size:.82rem;
  line-height:1.6;
}
@media(max-width:900px){
  .final-inquiry-grid,
  .final-inquiry-form{
    grid-template-columns:1fr;
  }
  .contact.final-inquiry-contact{padding:76px 0 !important;}
  .final-inquiry-copy,
  .final-inquiry-form-card{
    border-radius:28px;
    padding:28px;
  }
}
@media(max-width:980px){
  .hero-visual .human-portrait {
    position: relative !important;
    width: 100% !important;
    max-width: 500px !important;
    height: 600px !important;
    right: auto !important;
    bottom: auto !important;
    transform: none !important;
    margin: 3rem auto 1.5rem !important;
    z-index: 10 !important;
  }
}
@media(max-width:480px){
  .hero-visual .human-portrait {
    height: 420px !important;
  }
}

/* Centered Premium Lead Popup Overlay */
.lead-popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(30, 20, 14, 0.42);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10010;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 16px;
}
.lead-popup-overlay.show {
  opacity: 1;
  pointer-events: auto;
}
.lead-popup {
  width: 500px;
  max-width: 100%;
  background: #fffaf3;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 40px 120px rgba(36, 27, 22, 0.22);
  border: 1px solid rgba(80, 55, 35, 0.12);
  position: relative;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(18px) scale(0.98);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.lead-popup-overlay.show .lead-popup {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.lead-popup-content {
  overflow-y: auto;
  max-height: calc(90vh - 120px);
  scrollbar-width: thin;
}
.lead-popup-close {
  border: 0;
  outline: none;
  transition: transform 0.2s;
}
.lead-popup-close:hover {
  transform: scale(1.1);
}
.lead-form label {
  display: block;
  font-size: 10px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #7b6b60;
  font-weight: 700;
  margin-bottom: 5px;
}
.lead-form input, .lead-form select, .lead-form textarea {
  width: 100%;
  border: 1px solid rgba(80, 55, 35, .15);
  background: #fff;
  border-radius: 12px;
  padding: 10px 12px;
  font-family: inherit;
  font-size: 13.5px;
  outline: none;
  color: #201b16;
}
.lead-form textarea {
  min-height: 90px;
  resize: vertical;
}
.lead-submit {
  border: 0;
  border-radius: 999px;
  background: #241b16;
  color: #fff7ef;
  padding: 12px 18px;
  letter-spacing: .15em;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s var(--ease);
}
.lead-submit:hover {
  background: #3d2f26;
  transform: translateY(-1px);
}
@media (max-width: 800px) {
  .lead-popup {
    max-height: 85vh;
  }
}

/* Premium Floating AI Chatbot */
.studio-chatbot-fab {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 10000;
  height: 50px;
  border-radius: 999px;
  background: #241b16;
  color: #fff7ef;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 8px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid rgba(233, 185, 143, 0.25);
  box-shadow: 0 12px 36px rgba(36,27,22,0.3);
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.studio-chatbot-fab:hover {
  background: #3d2f26;
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(36,27,22,0.4);
}
.studio-chatbot-fab svg {
  transition: transform 0.4s ease;
}
.studio-chatbot-fab:hover svg {
  transform: rotate(15deg) scale(1.15);
}

.studio-chat-container {
  position: fixed;
  right: 24px;
  bottom: 88px;
  width: 380px;
  height: 520px;
  max-width: calc(100vw - 48px);
  max-height: calc(85vh - 110px);
  background: #fffaf3;
  border-radius: 24px;
  border: 1px solid rgba(80, 55, 35, 0.15);
  box-shadow: 0 20px 80px rgba(41, 28, 17, 0.25);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.95) translateY(20px);
  pointer-events: none;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.studio-chat-container.show {
  opacity: 1;
  transform: scale(1) translateY(0);
  pointer-events: auto;
}

.studio-chat-header {
  background: #241b16;
  color: #fff7ef;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 247, 239, 0.08);
}
.studio-chat-header-title {
  display: flex;
  flex-direction: column;
}
.studio-chat-header-title h4 {
  font-family: var(--display, Georgia, serif);
  font-size: 15px;
  font-weight: 300;
  margin: 0;
  letter-spacing: 0.04em;
}
.studio-chat-header-title span {
  font-size: 8.5px;
  color: #e9b98f;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 2px;
  font-weight: 700;
}
.studio-chat-close {
  background: rgba(255, 255, 255, 0.08);
  border: 0;
  color: #fff7ef;
  font-size: 18px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.2s;
}
.studio-chat-close:hover {
  background: rgba(255, 255, 255, 0.16);
  color: #ffffff;
}

.studio-chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scrollbar-width: thin;
}

.studio-chat-bubble {
  max-width: 82%;
  padding: 11px 14px;
  border-radius: 16px;
  font-size: 12.5px;
  line-height: 1.55;
}
.studio-chat-bubble.ai {
  background: rgba(80, 55, 35, 0.04);
  color: #241b16;
  border-bottom-left-radius: 4px;
  border: 1px solid rgba(80, 55, 35, 0.07);
  align-self: flex-start;
}
.studio-chat-bubble.user {
  background: #3d2f26;
  color: #fff7ef;
  border-bottom-right-radius: 4px;
  align-self: flex-end;
}

.studio-chat-quicktips {
  padding: 8px 14px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  border-top: 1px solid rgba(80, 55, 35, 0.06);
  background: rgba(255,250,243,0.7);
}
.studio-chat-quicktips::-webkit-scrollbar {
  display: none;
}
.studio-chat-tip-btn {
  background: #ffffff;
  border: 1px solid rgba(80, 55, 35, 0.1);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 10.5px;
  font-weight: 600;
  color: #7b6d5f;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
}
.studio-chat-tip-btn:hover {
  background: #241b16;
  color: #fff7ef;
  border-color: #241b16;
}

.studio-chat-input-area {
  padding: 10px 14px;
  background: #ffffff;
  border-top: 1px solid rgba(80, 55, 35, 0.08);
  display: flex;
  gap: 8px;
  align-items: center;
}
.studio-chat-input {
  flex: 1;
  border: 1px solid rgba(80, 55, 35, 0.12);
  background: #fff;
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 13px;
  outline: none;
  height: 38px;
  color: #241b16;
  font-family: inherit;
}
.studio-chat-send-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #241b16;
  color: #fff7ef;
  border: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.2s;
}
.studio-chat-send-btn:hover {
  background: #3d2f26;
}
.studio-chat-send-btn:disabled {
  background: rgba(80, 55, 35, 0.1);
  color: rgba(255, 255, 255, 0.4);
  cursor: not-allowed;
}

/* Typing indicator */
.studio-typing-indicator {
  display: flex;
  gap: 4px;
  padding: 4px 8px;
  align-items: center;
}
.studio-typing-dot {
  width: 6px;
  height: 6px;
  background: #7b6d5f;
  border-radius: 50%;
  animation: studioBounce 1.4s infinite ease-in-out both;
}
.studio-typing-dot:nth-child(1) { animation-delay: -0.32s; }
.studio-typing-dot:nth-child(2) { animation-delay: -0.16s; }
.studio-typing-dot:nth-child(3) { animation-delay: -0.11s; }

@keyframes studioBounce {
  0%, 80%, 100% { transform: scale(0.3); opacity: 0.4; }
  40% { transform: scale(1.0); opacity: 1; }
}

@media(max-width:480px){
  .studio-chat-container {
    right: 16px;
    left: 16px;
    width: auto;
    bottom: 84px;
    max-height: calc(85vh - 100px);
  }
}
@media(min-width: 981px) {
  .service:nth-child(7) { grid-column: span 2; }
}

/* Premium Navigation Layout overrides to support Top Bar */
nav {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 100 !important;
  padding: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  background: rgba(255, 250, 243, 0.95) !important;
  backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid var(--line) !important;
  transition: transform 0.4s var(--ease), background 0.4s var(--ease) !important;
}

/* Scroll adjustments - slide height to 0 elegantly on scroll */
nav.scrolled .nav-top-bar {
  height: 0px !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  opacity: 0 !important;
  overflow: hidden !important;
  border-bottom: none !important;
}

.nav-top-bar {
  width: 100%;
  height: 38px;
  background: #eedfc9;
  border-bottom: 1px solid rgba(19, 44, 74, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  transition: all 0.35s var(--ease);
  box-sizing: border-box;
}

.nav-top-bar-left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-top-bar-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 600;
  color: #132c4a;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.nav-top-bar-link:hover {
  opacity: 0.8;
}

.nav-top-bar-right {
  display: flex;
  align-items: center;
}

.nav-top-bar-cta {
  font-family: 'DM Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #e17938;
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.nav-top-bar-cta:hover {
  transform: translateX(2px);
}

.nav-main-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 4rem;
  transition: padding 0.35s var(--ease);
  box-sizing: border-box;
}

nav.scrolled .nav-main-row {
  padding: 0.8rem 4rem !important;
}

/* Adjust Hero padding because Nav with Topbar is slightly taller */
.hero {
  padding-top: 10.5rem !important;
}

@media(max-width: 980px) {
  .nav-top-bar {
    padding: 0 1.2rem !important;
  }
  .nav-main-row {
    padding: 1rem 1.2rem !important;
  }
  nav.scrolled .nav-main-row {
    padding: 0.8rem 1.2rem !important;
  }
  .hero {
    padding-top: 9.5rem !important;
  }
}

@media(max-width: 600px) {
  .nav-top-bar-left {
    gap: 12px !important;
  }
  .nav-top-bar-link span {
    display: none !important; /* Hide labels on tiny phones, keep crisp SVGs */
  }
  .nav-top-bar-link::after {
    content: attr(data-short);
    font-size: 11px;
  }
}

/* Why MailBench & Case Studies responsive grids styling */
.why-grid, .cases-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3.5rem;
}
.cases-grid {
  grid-template-columns: repeat(3, 1fr);
}
.why-card {
  position: relative;
  background: rgba(255, 255, 255, 0.82) !important;
  border: 1px solid rgba(80, 55, 35, 0.1) !important;
  border-radius: 20px;
  padding: 1.6rem 1.4rem !important;
  transition: all 0.35s var(--ease) !important;
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(80, 55, 35, 0.02);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}
.why-card::before {
  content: "" !important;
  display: none !important; /* Discard chaotic background template image overlaps entirely */
}
.why-card:hover {
  transform: translateY(-6px) !important;
  background: #ffffff !important;
  border-color: #ebd8c0 !important;
  box-shadow: 0 16px 36px rgba(110, 76, 56, 0.08) !important;
}
.why-card .service-icon {
  background: var(--cocoa) !important;
  color: #fff !important;
  width: 32px !important;
  height: 32px !important;
  font-size: 11px !important;
  margin-bottom: 0.8rem !important;
  display: grid !important;
  place-items: center !important;
  border-radius: 50% !important;
  transition: background-color 0.25s ease, transform 0.25s ease !important;
}
.why-card:hover .service-icon {
  background: #e17938 !important;
  transform: scale(1.1) !important;
}
.why-card .why-learn {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cocoa);
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1rem;
  transition: color 0.2s;
}
.why-card:hover .why-learn {
  color: #e17938;
}
.case-card {
  transition: transform 0.3s var(--ease), background-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
}
.case-card:hover {
  transform: translateY(-5px);
  background: #fff !important;
  box-shadow: 0 20px 50px rgba(83, 59, 37, 0.1);
}
@media(max-width:980px) {
  .why-grid, .cases-grid {
    grid-template-columns: 1fr !important;
    gap: 1.25rem !important;
    margin-top: 2rem !important;
  }
}
</style>
</head>
<body>
<div class="noise"></div>
<nav id="nav">
  <!-- TOP BRANDING & CONTACT INFO BAR -->
  <div class="nav-top-bar">
    <div class="nav-top-bar-left">
      <a class="nav-top-bar-link" href="mailto:services@mail-bench.com?subject=Website Inquiry" onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=services@mail-bench.com', '_blank'); event.preventDefault();" data-short="Email">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: block; opacity: 0.85;"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        <span>services@mail-bench.com</span>
      </a>
      <a class="nav-top-bar-link" href="https://wa.me/918008220560" target="_blank" rel="noopener" data-short="WhatsApp">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: block; opacity: 0.85;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>+91 8008220560</span>
      </a>
    </div>
    <div class="nav-top-bar-right">
      <a class="nav-top-bar-cta" href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener">
        <span>Book Discovery Call</span>
        <span style="font-size: 13px;">→</span>
      </a>
    </div>
  </div>

  <!-- MAIN NAVIGATION ROW -->
  <div class="nav-main-row">
    <a class="logo-wrap" href="#" style="display: flex; align-items: center; gap: 11px; text-decoration: none;">
      <svg width="40" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; display: block;">
        <!-- Deep Slate Blue Infinity Loop -->
        <path class="logo-infinity-loop" d="M10,18.5 C6.41,18.5 3.5,15.59 3.5,12 C3.5,8.41 6.41,5.5 10,5.5 C13.06,5.5 15.65,7.61 16.5,10.5 L19.5,13.5 C20.35,16.39 22.94,18.5 26,18.5 C29.59,18.5 32.5,15.59 32.5,12 C32.5,8.41 29.59,5.5 26,5.5 C22.94,5.5 20.35,7.61 19.5,10.5 L16.5,13.5 C15.65,16.39 13.06,18.5 10,18.5 Z" stroke="#132c4a" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round" />
        <!-- Solid Orange Circle inside Left Loop -->
        <circle cx="10" cy="12" r="2.2" fill="#e17938" />
        <!-- Solid Orange Checkmark on Right Loop -->
        <path d="M23.5,12 L26,14.5 L31.5,9" stroke="#e17938" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div style="display: flex; flex-direction: column; line-height: 1.05; justify-content: center;">
        <div style="font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 1.4rem; letter-spacing: -0.015em; display: flex; align-items: center; text-transform: none;">
          <span class="logo-text-mail" style="color: #132c4a;">Mail</span><span style="color: #e17938;">Bench</span>
        </div>
        <span style="font-family: 'DM Sans', sans-serif; font-size: 0.52rem; font-weight: 700; letter-spacing: 0.22em; color: #5a6b82; text-transform: uppercase; margin-top: 2px;">LIFECYCLE STUDIO</span>
        <span style="font-family: 'DM Sans', sans-serif; font-size: 0.44rem; font-weight: 600; letter-spacing: 0.08em; color: #8fa0b5; text-transform: uppercase; margin-top: 1px;">KAVYA REDDY, FOUNDER</span>
      </div>
    </a>
    <ul class="nav-links">
      <li><a data-target="services" href="javascript:void(0)">Services</a></li>
      <li><a data-target="industries" href="javascript:void(0)">Target Clients</a></li>
      <li><a data-target="flows" href="javascript:void(0)">Flows</a></li>
      <li><a data-target="results" href="javascript:void(0)">Results</a></li>
      <li><a data-target="process" href="javascript:void(0)">Process</a></li>
      <li><a data-target="contact" href="javascript:void(0)">Inquiry</a></li>
    </ul>
    <a class="nav-cta" href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener">Book a Free Discovery Call</a>
  </div>
</nav>
<header class="hero" id="home">
<div class="wrap hero-grid">
<div class="hero-copy reveal visible">
<div class="eyebrow">Meticulous Retention Engineering</div>
<h1 class="display">We turn fleeting clicks into <br/><em id="dynamic-headline-word" style="transition: opacity 0.4s ease; display: inline-block;">generational trust.</em></h1>
<p class="hero-sub">The best customer communication doesn't feel like automated marketing spam — it feels like an authentic human dialogue. We craft bespoke, highly structured lifecycle systems for world-class skincare, wellness, fashion, and luxury houses to build sustained relationship equity.</p>

<div class="hero-quote-badge" style="background: rgba(255, 255, 255, 0.5); border: 1px solid var(--line); border-radius: 20px; padding: 1.15rem 1.4rem; margin: 1.2rem 0 1.8rem 0; cursor: pointer; transition: all 0.3s ease; backdrop-filter: blur(10px);">
<p id="hero-dynamic-quote" style="font-family: var(--display); font-size: 1.12rem; font-style: italic; color: var(--ink); margin-bottom: 0.5rem; line-height: 1.35; transition: opacity 0.4s ease;">“Within 60 days of partnering with MailBench, our welcome sequences and cart recovery paths generated a 34% lift in repeat purchases.”</p>
<div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap;">
<span id="hero-dynamic-author" style="font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--cocoa); transition: opacity 0.4s ease;">— MAYA R., FOUNDER OF LUMA SKINCARE</span>
<span style="font-family: var(--font-mono, 'JetBrains Mono', monospace); font-size: 0.6rem; color: var(--gold); letter-spacing: 0.08em; text-transform: uppercase; display: flex; align-items: center; gap: 4px;">
<span style="width: 5px; height: 5px; border-radius: 50%; background: var(--gold); display: inline-block; animation: pulse-active 1.5s infinite;"></span>
DYNAMIC METRIC
                </span>
</div>
</div>

<div class="buttons">
<a class="btn btn-dark" href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener">Book a Free Discovery Call →</a>
<a class="btn btn-light" data-target="services" href="javascript:void(0)">Explore Systems</a>
</div>
</div>
<div class="hero-visual reveal d1 visible">
<div class="human-portrait">
<div class="hero-portrait-image"></div>
<div class="hero-portrait-badge">
<span class="caption-dot"></span>
<span>EMAIL SERVICES &amp; RETENTION STRATEGY</span>
</div>
</div>
</div>
</div>
</header>
<section class="stats">
<div class="wrap stats-grid">
<div class="stat reveal"><div class="n">40%</div><div class="l">Avg. Open Rate Goal</div></div>
<div class="stat reveal d1"><div class="n">150+</div><div class="l">Flow Ideas &amp; Builds</div></div>
<div class="stat reveal d2"><div class="n">6</div><div class="l">Core Service Areas</div></div>
<div class="stat reveal d3"><div class="n">3×</div><div class="l">Repeat Purchase Focus</div></div>
</div>
</section>
<section class="problem">
<div class="wrap problem-grid">
<div class="reveal">
<div class="eyebrow">The Problem We Solve</div>
<h2 class="heading">Most brands work hard to get customers, then lose them because the <em>follow-up is weak.</em></h2>
<p class="sub" style="margin-top:1.2rem">Your customer journey should not stop after someone visits your site, joins your list, abandons their cart, or buys once.</p>
</div>
<div class="pain-list">
<div class="pain reveal d1"><div class="pain-icon">01</div><div><h3>No welcome experience</h3><p>New subscribers join your list, but they do not get a clear, warm introduction to your brand.</p></div></div>
<div class="pain reveal d2"><div class="pain-icon">02</div><div><h3>Abandoned carts are ignored</h3><p>People show buying intent, leave, and never receive the right reminder to come back.</p></div></div>
<div class="pain reveal d3"><div class="pain-icon">03</div><div><h3>Customers buy once and disappear</h3><p>Without post-purchase and retention flows, repeat purchases become random instead of planned.</p></div></div>
<div class="pain reveal d4"><div class="pain-icon">04</div><div><h3>Email/SMS feels random</h3><p>We turn scattered messages into a clear customer communication system.</p></div></div>
</div>
</div>
</section>
<section class="services" id="services">
<div class="wrap">
<div class="section-head">
<div><div class="eyebrow reveal">What We Do</div><h2 class="heading reveal d1">Clear email and SMS services that customers can <em>understand instantly.</em></h2></div>
<p class="sub reveal d2">Everything here is connected to lifecycle marketing: bringing people in, following up, keeping them engaged, and encouraging them to buy again.</p>
</div>
<div class="service-industry-wrap">
<div class="services-left-col" style="display: flex; flex-direction: column; gap: 2.2rem; min-width: 0;">
<div class="service-grid">
<div class="service core-service reveal" onclick="openModal('email')"><div class="service-icon">✉</div><h3>Email Marketing</h3><p>Campaigns, newsletters, promotions, product launches, and retention emails that keep customers connected.</p><span class="learn">Learn More →</span></div>
<div class="service core-service reveal d1" onclick="openModal('sms')"><div class="service-icon">💬</div><h3>SMS Marketing</h3><p>Short, timely text messages for reminders, launches, VIP offers, cart recovery, and customer updates.</p><span class="learn">Learn More →</span></div>
<div class="service core-service reveal d2" onclick="openModal('flows')"><div class="service-icon">↻</div><h3>Lifecycle Flows</h3><p>Welcome, abandoned cart, browse abandonment, post-purchase, win-back, and VIP customer journeys.</p><span class="learn">Learn More →</span></div>
<div class="service core-service reveal d3" onclick="openModal('campaigns')"><div class="service-icon">◈</div><h3>Campaign Strategy</h3><p>Planning what to send, when to send, who should receive it, and how to make every message feel intentional.</p><span class="learn">Learn More →</span></div>
<div class="service core-service reveal d1" onclick="openModal('copy')"><div class="service-icon">Aa</div><h3>Copy &amp; Design</h3><p>Subject lines, email body copy, CTA wording, mobile-friendly layouts, and clean visual email design.</p><span class="learn">Learn More →</span></div>
<div class="service core-service reveal d2" onclick="openModal('performance')"><div class="service-icon">↑</div><h3>Performance Optimization</h3><p>Improving open rates, click rates, engagement, retention, deliverability, and repeat purchase behavior.</p><span class="learn">Learn More →</span></div>
<div class="service core-service reveal d3" onclick="openModal('webdesign')"><div class="service-icon">💻</div><h3>Website Designing</h3><p>High-converting, beautiful, mobile-optimized ecommerce websites and custom landing pages built for retention.</p><span class="learn">Learn More →</span></div>
<div class="service core-service reveal d1" onclick="openModal('coldemail')"><div class="service-icon">❄</div><h3>Cold Email Marketing</h3><p>Build predictable outbound systems that start conversations with qualified prospects and generate sales opportunities.</p><span class="learn">Learn More →</span></div>
</div>

<!-- Why Choose Us Sub-Section integrated inside Services wrap, sharing layout and styles -->
<div style="display: flex; flex-direction: column; gap: 1rem; width: 100%; border-top: 1px solid var(--line); padding-top: 1.8rem;" id="why-mailbench">
  <div style="display: flex; flex-direction: column; gap: 0.35rem;">
    <div class="eyebrow reveal" style="margin-bottom: 0px;">Why Choose Us</div>
    <h2 style="font-family: var(--display); font-size: clamp(1.8rem, 2.5vw, 2.8rem); font-weight: 300; line-height: 1.1; letter-spacing: -0.015em; margin: 0;" class="reveal d1">Why <em>MailBench?</em></h2>
    <p style="font-size: 0.95rem; color: var(--muted); max-width: 100%; margin: 0;" class="reveal d2">Most agencies focus on getting the first sale. MailBench helps brands earn the second, third, and repeat purchase through lifecycle marketing systems.</p>
  </div>
  
  <div class="service-grid">
    <div class="why-card reveal" onclick="openWhyModal('retention')">
      <div>
        <div class="service-icon">✓</div>
        <h3 style="font-family: var(--display); font-size: 1.25rem; font-weight: 400; margin-bottom: 0.4rem; color: var(--ink);">Retention First</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color: var(--muted); margin:0;">Grow repeat purchases systematically.</p>
      </div>
      <span class="why-learn">View Inside →</span>
    </div>
    <div class="why-card reveal d1" onclick="openWhyModal('lifecycle')">
      <div>
        <div class="service-icon">✓</div>
        <h3 style="font-family: var(--display); font-size: 1.25rem; font-weight: 400; margin-bottom: 0.4rem; color: var(--ink);">Lifecycle Expertise</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color: var(--muted); margin:0;">Email and SMS expertise across channels.</p>
      </div>
      <span class="why-learn">View Inside →</span>
    </div>
    <div class="why-card reveal d2" onclick="openWhyModal('outreach')">
      <div>
        <div class="service-icon">✓</div>
        <h3 style="font-family: var(--display); font-size: 1.25rem; font-weight: 400; margin-bottom: 0.4rem; color: var(--ink);">Cold Outreach</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color: var(--muted); margin:0;">Outbound email systems targeting prospects.</p>
      </div>
      <span class="why-learn">View Inside →</span>
    </div>
    <div class="why-card reveal d3" onclick="openWhyModal('personalization')">
      <div>
        <div class="service-icon">✓</div>
        <h3 style="font-family: var(--display); font-size: 1.25rem; font-weight: 400; margin-bottom: 0.4rem; color: var(--ink);">Personalized Journeys</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color: var(--muted); margin:0;">Custom customer paths that convert.</p>
      </div>
      <span class="why-learn">View Inside →</span>
    </div>
    <div class="why-card reveal d4" onclick="openWhyModal('revenue')">
      <div>
        <div class="service-icon">✓</div>
        <h3 style="font-family: var(--display); font-size: 1.25rem; font-weight: 400; margin-bottom: 0.4rem; color: var(--ink);">Revenue Execution</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color: var(--muted); margin:0;">Value-driven and result-focused results.</p>
      </div>
      <span class="why-learn">View Inside →</span>
    </div>
    <div class="why-card reveal d5" onclick="openWhyModal('reporting')">
      <div>
        <div class="service-icon">✓</div>
        <h3 style="font-family: var(--display); font-size: 1.25rem; font-weight: 400; margin-bottom: 0.4rem; color: var(--ink);">Clear Reporting</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color: var(--muted); margin:0;">Transparent data and constant optimization.</p>
      </div>
      <span class="why-learn">View Inside →</span>
    </div>
    <div class="why-card reveal d6" onclick="openWhyModal('dialogue')">
      <div>
        <div class="service-icon">✓</div>
        <h3 style="font-family: var(--display); font-size: 1.25rem; font-weight: 400; margin-bottom: 0.4rem; color: var(--ink);">Human Dialogue</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color: var(--muted); margin:0;">Real and high-converting conversations.</p>
      </div>
      <span class="why-learn">View Inside →</span>
    </div>
    <div class="why-card reveal d7" onclick="openWhyModal('ltv')">
      <div>
        <div class="service-icon">✓</div>
        <h3 style="font-family: var(--display); font-size: 1.25rem; font-weight: 400; margin-bottom: 0.4rem; color: var(--ink);">LTV Optimization</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color: var(--muted); margin:0;">Maximizing long-term user value focus.</p>
      </div>
      <span class="why-learn">View Inside →</span>
    </div>
  </div>
</div>

<!-- Case Studies Sub-Section integrated inside Services wrap, sharing layout and styles -->
<div style="display: flex; flex-direction: column; gap: 1rem; width: 100%; border-top: 1px solid var(--line); padding-top: 1.8rem;" id="case-studies">
  <div style="display: flex; flex-direction: column; gap: 0.35rem;">
    <div class="eyebrow reveal" style="margin-bottom: 0px;">Our Work in Action</div>
    <h2 style="font-family: var(--display); font-size: clamp(1.8rem, 2.5vw, 2.8rem); font-weight: 300; line-height: 1.1; letter-spacing: -0.015em; margin: 0;" class="reveal d1">Active <em>Case Studies</em></h2>
    <p style="font-size: 0.95rem; color: var(--muted); max-width: 100%; margin: 0;" class="reveal d2">Real examples of retention systems, email lifecycles, and high-performance communication systems we have built for brands.</p>
  </div>
  
  <div class="service-grid">
    <!-- Welcome Flow Case Study -->
    <div class="service case-card reveal" onclick="openCaseModal('welcome-flow')" style="min-height: 380px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.35s; padding: 1.8rem;">
      <div>
        <div class="modal-tag" style="font-size:0.65rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--cocoa); font-weight:700; margin-bottom:0.6rem;">CASE STUDY 1</div>
        <h3 style="font-family: var(--display); font-size: 1.35rem; font-weight:400; margin-bottom:0.5rem; color:var(--ink); line-height:1.2;">Welcome Flow Optimization</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color:var(--muted); margin: 0;">Replaced complex graphical layouts with a heartfelt personal letter, driving high deliverability.</p>
        
        <!-- Live HTML simulation of welcome split-tests dashboard results -->
        <div style="background: rgba(110,76,56,0.06); border: 1px solid rgba(110,76,56,0.12); border-radius: 12px; padding: 10px; margin-top: 1.1rem; font-family: monospace; font-size: 9px; line-height: 1.3; color: var(--ink);">
          <div style="font-weight: bold; margin-bottom: 5px; display: flex; justify-content: space-between;">
            <span>📈 Welcome Split Test</span>
            <span style="color: var(--cocoa); font-weight: bold;">81.4% Open</span>
          </div>
          <div style="display: flex; gap: 6px; align-items: center;">
            <div style="flex: 1; background: rgba(135,149,116,0.14); border: 1px solid rgba(135,149,116,0.3); padding: 5px; border-radius: 4px;">
              <b>Letter Form</b><br/>
              O: 81.4% · C: 18.2%
            </div>
            <div style="flex: 1; background: rgba(55,40,28,0.04); border: 1px solid rgba(55,40,28,0.08); padding: 5px; border-radius: 4px; opacity: 0.6;">
              HTML Flyer<br/>
              O: 42.1% · C: 4.8%
            </div>
          </div>
        </div>
      </div>
      <span class="learn" style="margin-top:1.2rem; font-size:0.85rem; font-weight:600;">View Details & Setup →</span>
    </div>
    
    <!-- Abandoned Cart Case Study -->
    <div class="service case-card reveal d1" onclick="openCaseModal('abandoned-cart')" style="min-height: 380px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.35s; padding: 1.8rem;">
      <div>
        <div class="modal-tag" style="font-size:0.65rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--cocoa); font-weight:700; margin-bottom:0.6rem;">CASE STUDY 2</div>
        <h3 style="font-family: var(--display); font-size: 1.35rem; font-weight:400; margin-bottom:0.5rem; color:var(--ink); line-height:1.2;">Abandoned Cart System</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color:var(--muted); margin: 0;">Reclaimed abandoned shopping checkouts smoothly without forcing margins down with immediate discounts.</p>
        
        <!-- Live HTML simulation of abandoned cart timeline delays -->
        <div style="background: rgba(110,76,56,0.06); border: 1px solid rgba(110,76,56,0.12); border-radius: 12px; padding: 10px; margin-top: 1.1rem; font-family: monospace; font-size: 9px; line-height: 1.3; color: var(--ink);">
          <div style="font-weight: bold; margin-bottom: 5px; display: flex; justify-content: space-between;">
            <span>🛒 Recovery Funnel Blocks</span>
            <span style="color: var(--cocoa); font-weight: bold;">+$37.2k Saved</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="background: rgba(255,255,255,0.7); padding: 4px 6px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
              <span>⏱️ 4hr Delay · Letter Check-in</span>
              <b style="color: #6e4c38;">11.5% recov</b>
            </div>
            <div style="background: rgba(255,255,255,0.7); padding: 4px 6px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
              <span>⏱️ 24hr Delay · Source Story</span>
              <b style="color: #6e4c38;">6.2% recov</b>
            </div>
          </div>
        </div>
      </div>
      <span class="learn" style="margin-top:1.2rem; font-size:0.85rem; font-weight:600;">View Details & Setup →</span>
    </div>
    
    <!-- Customer Retention Case Study -->
    <div class="service case-card reveal d2" onclick="openCaseModal('customer-retention')" style="min-height: 380px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.35s; padding: 1.8rem;">
      <div>
        <div class="modal-tag" style="font-size:0.65rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--cocoa); font-weight:700; margin-bottom:0.6rem;">CASE STUDY 3</div>
        <h3 style="font-family: var(--display); font-size: 1.35rem; font-weight:400; margin-bottom:0.5rem; color:var(--ink); line-height:1.2;">Customer Retention Series</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color:var(--muted); margin: 0;">Predicted the product consumption cycle to present replenishment shortcuts exactly when needed.</p>
        
        <!-- Live HTML simulation of predictable customer retention schedule -->
        <div style="background: rgba(110,76,56,0.06); border: 1px solid rgba(110,76,56,0.12); border-radius: 12px; padding: 10px; margin-top: 1.1rem; font-family: monospace; font-size: 9px; line-height: 1.3; color: var(--ink);">
          <div style="font-weight: bold; margin-bottom: 4px; display: flex; justify-content: space-between;">
            <span>📅 Predict Replenish Model</span>
            <span style="color: var(--cocoa); font-weight: bold;">LTV Up +42%</span>
          </div>
          <div style="display: flex; align-items: flex-end; gap: 4px; height: 32px; padding-top: 4px; border-bottom: 1px solid var(--line);">
            <div style="flex: 1; background: var(--muted); height: 20%; opacity: 0.5;"></div>
            <div style="flex: 1; background: var(--muted); height: 35%; opacity: 0.5;"></div>
            <div style="flex: 1; background: var(--cocoa); height: 95%;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 7px; color: var(--muted); margin-top: 2px;">
            <span>Generic Promo</span>
            <span style="font-weight: bold; color: var(--cocoa);">Predictive Refill (24.5% CT)</span>
          </div>
        </div>
      </div>
      <span class="learn" style="margin-top:1.2rem; font-size:0.85rem; font-weight:600;">View Details & Setup →</span>
    </div>
    
    <!-- Cold Email Outreach Case Study -->
    <div class="service case-card reveal d3" onclick="openCaseModal('cold-outreach')" style="min-height: 380px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.35s; padding: 1.8rem;">
      <div>
        <div class="modal-tag" style="font-size:0.65rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--cocoa); font-weight:700; margin-bottom:0.6rem;">CASE STUDY 4</div>
        <h3 style="font-family: var(--display); font-size: 1.35rem; font-weight:400; margin-bottom:0.5rem; color:var(--ink); line-height:1.2;">Outbound B2B Campaigns</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color:var(--muted); margin: 0;">Secured enterprise bookings using custom domains, warming pools, and specialized rotational deliverability.</p>
        
        <!-- Live HTML simulation of multi-mailbox outbound rotating engine results -->
        <div style="background: rgba(110,76,56,0.06); border: 1px solid rgba(110,76,56,0.12); border-radius: 12px; padding: 10px; margin-top: 1.1rem; font-family: monospace; font-size: 9px; line-height: 1.3; color: var(--ink);">
          <div style="font-weight: bold; margin-bottom: 5px; display: flex; justify-content: space-between;">
            <span>🛰️ Mailbox Rotations (15 Inboxes)</span>
            <span style="color: green; font-weight: bold;">99.4% Inbox</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; text-align: center;">
            <div style="background: rgba(255,255,255,0.72); padding: 4px 2px; border-radius: 4px; border: 1px solid rgba(135,149,116,0.25);">
              <span>Reply<br/><b>11.2%</b></span>
            </div>
            <div style="background: rgba(255,255,255,0.72); padding: 4px 2px; border-radius: 4px; border: 1px solid rgba(135,149,116,0.25);">
              <span>Pos<br/><b>4.6%</b></span>
            </div>
            <div style="background: rgba(255,255,255,0.72); padding: 4px 2px; border-radius: 4px; border: 1px solid rgba(135,149,116,0.25);">
              <span>Booked<br/><b>42 Dec</b></span>
            </div>
          </div>
        </div>
      </div>
      <span class="learn" style="margin-top:1.2rem; font-size:0.85rem; font-weight:600;">View Details & Setup →</span>
    </div>
    
    <!-- Website Conversion Case Study -->
    <div class="service case-card reveal d4 case-span-2" onclick="openCaseModal('website-conversion')" style="min-height: 380px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.35s; padding: 1.8rem;">
      <div>
        <div class="modal-tag" style="font-size:0.65rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--cocoa); font-weight:700; margin-bottom:0.6rem;">CASE STUDY 5</div>
        <h3 style="font-family: var(--display); font-size: 1.35rem; font-weight:400; margin-bottom:0.5rem; color:var(--ink); line-height:1.2;">Conversion Redesign</h3>
        <p style="font-size: 0.82rem; line-height:1.45; color:var(--muted); margin: 0;">Optimized visual storytelling paths, removing messy popups to create elegant, distraction-free booking channels.</p>
        
        <!-- Live HTML simulation of conversion rate bounce comparison graph -->
        <div style="background: rgba(110,76,56,0.06); border: 1px solid rgba(110,76,56,0.12); border-radius: 12px; padding: 10px; margin-top: 1.1rem; font-family: monospace; font-size: 9px; line-height: 1.3; color: var(--ink);">
          <div style="font-weight: bold; margin-bottom: 5px; display: flex; justify-content: space-between;">
            <span>💻 Editorial Conversion Overhaul</span>
            <span style="color: var(--cocoa); font-weight: bold;">+245% Leads Lift</span>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <div style="text-align: center; flex: 1;">
              <span style="font-size: 8px; color: var(--muted);">Prior Clutter Layout</span>
              <div style="background: rgba(55,40,28,0.05); padding: 3px; font-weight: bold; border-radius: 4px; margin-top: 1px;">1.1% Conv</div>
            </div>
            <div style="text-align: center; flex: 1;">
              <span style="font-size: 8px; color: var(--cocoa); font-weight: bold;">Clean Editorial Experience</span>
              <div style="background: rgba(135,149,116,0.14); padding: 3px; font-weight: bold; color: var(--cocoa); border: 1px solid rgba(135,149,116,0.3); border-radius: 4px; margin-top: 1px;">3.8% Conv</div>
            </div>
          </div>
        </div>
      </div>
      <span class="learn" style="margin-top:1.2rem; font-size:0.85rem; font-weight:600;">View Details & Setup →</span>
    </div>
  </div>
</div>
</div>

<aside class="industries-panel v2-audience reveal d2" id="industries">
<div class="audience-kicker">Target Clients</div>
<div class="audience-title">Built for ecommerce brands with loyal customers.</div>
<p class="audience-intro">Click each client type to see how email, SMS, and lifecycle flows help that business grow without confusing the visitor.</p>
<div class="audience-photo-grid v2">
<div class="audience-photo v2-card ap1" onclick="openIndustry('wellness')"><span class="tap">+</span><b>Wellness</b><small>Subscriptions · routines · trust</small></div>
<div class="audience-photo v2-card ap2" onclick="openIndustry('beauty')"><span class="tap">+</span><b>Beauty</b><small>Launches · VIP drops · offers</small></div>
<div class="audience-photo v2-card ap3" onclick="openIndustry('skincare')"><span class="tap">+</span><b>Skincare</b><small>Education · reorder reminders</small></div>
<div class="audience-photo v2-card ap4" onclick="openIndustry('fashion')"><span class="tap">+</span><b>Fashion</b><small>Collections · drops · loyalty</small></div>
<div class="audience-photo v2-card ap5" onclick="openIndustry('lifestyle')"><span class="tap">+</span><b>Lifestyle</b><small>Community · storytelling</small></div>
<div class="audience-photo v2-card ap6" onclick="openIndustry('ecommerce')"><span class="tap">+</span><b>Ecommerce</b><small>Carts · purchases · retention</small></div>
<div class="audience-photo v2-card ap7" onclick="openIndustry('luxury')"><span class="tap">+</span><b>Luxury</b><small>Premium customer experience</small></div>
</div>
<div class="audience-note">Simple idea: if the brand sells online and needs stronger repeat purchases, better follow-ups, and clearer customer communication, this service fits.</div>
</aside>
</div>
</div>
</section>

<section class="flows" id="flows">
<div class="wrap">
<div class="section-head"><div><div class="eyebrow reveal">What Our Work Actually Looks Like</div><h2 class="heading reveal d1">Beautiful, intentional communication at <em>every customer touchpoint.</em></h2></div><p class="sub reveal d2">We build and design with absolute precision. No generic templates, no boring plain-text grids, and no aggressive spam. We pair custom typographic layouts, striking brand photography, and engaging copy to create customer journeys that look, feel, and perform beautifully.</p></div>
<div class="flow-grid">
<div class="flow reveal"><div class="flow-visual"><div class="flow-node"><i></i>Subscriber joins list</div><div class="flow-node"><i></i>Welcome email</div><div class="flow-node"><i></i>Offer reminder</div></div><div class="flow-info"><h3>Welcome Flow</h3><p>Introduces the brand and turns new subscribers into first-time buyers.</p></div></div>
<div class="flow reveal d1"><div class="flow-visual"><div class="flow-node"><i></i>Cart abandoned</div><div class="flow-node"><i></i>Email reminder</div><div class="flow-node"><i></i>SMS nudge</div></div><div class="flow-info"><h3>Abandoned Cart</h3><p>Brings high-intent shoppers back before the sale is lost.</p></div></div>
<div class="flow reveal d2"><div class="flow-visual"><div class="flow-node"><i></i>Order placed</div><div class="flow-node"><i></i>Thank-you email</div><div class="flow-node"><i></i>Repeat purchase</div></div><div class="flow-info"><h3>Post-Purchase</h3><p>Builds trust after purchase and encourages the next order.</p></div></div>
<div class="flow reveal"><div class="flow-visual"><div class="flow-node"><i></i>Inactive customer</div><div class="flow-node"><i></i>Win-back email</div><div class="flow-node"><i></i>Return offer</div></div><div class="flow-info"><h3>Win-Back Flow</h3><p>Re-engages customers who have not purchased in a while.</p></div></div>
<div class="flow reveal d1"><div class="flow-visual"><div class="flow-node"><i></i>VIP segment</div><div class="flow-node"><i></i>Early access</div><div class="flow-node"><i></i>Exclusive offer</div></div><div class="flow-info"><h3>VIP Campaign</h3><p>Makes your best customers feel valued and close to the brand.</p></div></div>
<div class="flow reveal d2"><div class="flow-visual"><div class="flow-node"><i></i>Product launch</div><div class="flow-node"><i></i>Email build-up</div><div class="flow-node"><i></i>SMS alert</div></div><div class="flow-info"><h3>Launch Campaign</h3><p>Creates excitement before and during new product drops.</p></div></div>
</div>
</div>
</section>
<section class="results" id="results">
<div class="wrap results-layout">
<div class="reveal"><div class="eyebrow">Results &amp; Impact</div><h2 class="heading">Our Results &amp; Impact Philosophy: <em>Built for the long run.</em></h2><p class="sub" style="margin-top:1.15rem">We do not believe in spamming inboxes with empty discount codes or chasing vanity open rates that yield zero actual growth. Our retention philosophy focuses on the compound value of actual customer behavior: establishing true brand affinity, rising lifetime value (LTV), and automated systems that make customers genuinely happy to purchase again.</p></div>
<div class="dashboard reveal d1"><div class="dash-top"><b>Lifecycle Dashboard</b><span class="pill">Live Growth View</span></div><div class="dash-grid"><div class="dash-card"><div class="num">40%</div><p>Open rate target</p></div><div class="dash-card"><div class="num">8%</div><p>Click rate target</p></div><div class="dash-card"><div class="num">3×</div><p>Repeat purchase focus</p></div><div class="dash-card"><div class="num">68%</div><p>Retention goal</p></div></div><div class="bars"><div class="bar" style="height:35%"></div><div class="bar" style="height:48%"></div><div class="bar" style="height:62%"></div><div class="bar" style="height:80%"></div><div class="bar" style="height:100%"></div></div></div>
</div>
</section>
<section class="process" id="process">
<div class="wrap">
<div class="section-head"><div><div class="eyebrow reveal">How We Work</div><h2 class="heading reveal d1">A simple process from strategy to stronger retention.</h2></div><p class="sub reveal d2">Every step is clear so clients know what is happening and why it matters.</p></div>
<div class="steps">
<div class="step reveal"><div class="step-num">01</div><h3>Brand &amp; Customer Discovery</h3><p>We start by understanding your business, your customers, and where the biggest opportunities are. No assumptions — just real insight into what's working and what's missing.</p></div>
<div class="step reveal d1"><div class="step-num">02</div><h3>Strategy &amp; Journey Planning</h3><p>We build a clear customer journey strategy tailored to your audience, your goals, and your brand voice — covering every touchpoint from first contact to long-term loyalty.</p></div>
<div class="step reveal d2"><div class="step-num">03</div><h3>System Design &amp; Setup</h3><p>We design and build every flow, campaign, and automation — setting up the systems that will run in the background and communicate with your customers 24/7.</p></div>
<div class="step reveal d3"><div class="step-num">04</div><h3>Launch &amp; Optimization</h3><p>We go live, monitor performance closely, and make improvements based on real data. Every launch is followed by careful testing and refinement to maximize results.</p></div>
<div class="step reveal d4"><div class="step-num">05</div><h3>Long-Term Growth &amp; Retention</h3><p>We stay with you — reviewing performance, improving systems, and helping your business grow through stronger customer relationships month after month.</p></div>
</div>
</div>
</section>

<section class="brandstyles" id="brandstyles">
<div class="wrap">
<div class="section-head">
<div>
<div class="eyebrow reveal" style="color: var(--cocoa);">Case Showcases</div>
<h2 class="heading reveal d1" style="margin-top: 10px;">Our Signature Brand Designs &amp; <em>Aesthetic Solutions</em></h2>
</div>
<p class="sub reveal d2">Everything we construct is customized. Clicking each signature block below showcases the exact visual storytelling, styling, and color layouts built for major brands we have helped optimize.</p>
</div>
<div class="style-grid">
<div class="style-card openarc reveal" onclick="openModal('webdesign')">
<h3>OpenArc</h3>
<p>Modern layouts, striking interfaces, and rich subscription components built for premium wellness houses.</p>
<span class="learn" style="color: #fff; border-bottom: 1px solid rgba(255,255,255,0.4);">View Design Elements →</span>
</div>
<div class="style-card mailshift reveal d1" onclick="openModal('flows')">
<h3>MailShift</h3>
<p>Clean typography, generous whitespace setups, and responsive emails tailored for skincare lines.</p>
<span class="learn" style="color: #fff; border-bottom: 1px solid rgba(255,255,255,0.4);">View Design Elements →</span>
</div>
<div class="style-card flowpulse reveal d2" onclick="openModal('sms')">
<h3>FlowPulse</h3>
<p>Tactile monospace designs and conversational layouts engineered for sustainable active brands.</p>
<span class="learn" style="color: #fff; border-bottom: 1px solid rgba(255,255,255,0.4);">View Design Elements →</span>
</div>
<div class="style-card engagely reveal d3" onclick="openModal('copy')">
<h3>Engagely</h3>
<p>Timeless serif headers, micro-copy blocks, and elegant drops designed for high-end fashion.</p>
<span class="learn" style="color: #fff; border-bottom: 1px solid rgba(255,255,255,0.4);">View Design Elements →</span>
</div>
</div>
</div>
</section>

<section class="client-proof-section" id="client-messages-proof">
<div class="client-proof-inner">
<div class="client-proof-head reveal">
<div>
<div class="client-proof-eyebrow">Client Messages</div>
<h2 class="client-proof-title">Proof that feels like a real <em>conversation.</em></h2>
</div>
<p class="client-proof-sub">
        A premium customer journey should not only look beautiful — it should make people reply, trust, buy again, and feel connected to the brand.
      </p>
</div>
<div class="sms-proof-grid">
<div class="sms-proof-card reveal">
<div class="phone-top">
  <div class="phone-status-bar">
    <span class="phone-time">9:41 AM</span>
    <div class="phone-icons">
      <svg class="phone-icon-svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor" style="display:inline-block; vertical-align:middle;"><path d="M22 13h-2v5H2v-5H0v6c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-6zM11 2L5.5 7.5l1.42 1.42L10 5.83v11.17h2V5.83l3.08 3.08 1.42-1.42L11 2z"/></svg>
      <span class="phone-network-type">5G</span>
      <div class="phone-battery" style="display:inline-block; width:17px; height:9px; border:1px solid currentColor; border-radius:2px; position:relative; vertical-align:middle; margin-left:3px; opacity:0.6;"><div style="background:currentColor; width:12px; height:5px; position:absolute; top:1px; left:1px;"></div></div>
    </div>
  </div>
  <div class="phone-contact">
    <div class="phone-back-btn">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
    </div>
    <div class="phone-avatar-wrapper">
      <img class="phone-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" alt="Sophia Martinez" referrerPolicy="no-referrer" />
      <span class="phone-online-dot"></span>
    </div>
    <div class="phone-contact-info">
      <span class="phone-contact-name">Sophia Martinez</span>
      <span class="phone-contact-status">online</span>
    </div>
    <div class="phone-header-actions">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="margin-right:8px;"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
    </div>
  </div>
</div>
<div class="sms-window">
<div class="sms-bubble client">Hey, just wanted to say the new welcome flow looks so premium. It finally feels like our brand.</div>
<div class="sms-bubble us">That makes me so happy to hear. Are customers engaging better with it?</div>
<div class="sms-bubble client">Yes! We already saw more replies and the abandoned cart emails are converting better too.</div>
<div class="sms-proof-rating"><span>★★★★★</span><span>Welcome Flow + Cart Recovery</span></div>
</div>
<div class="sms-proof-name">Sophia Martinez</div>
<div class="sms-proof-brand">Founder, Luma Skin</div>
</div>
<div class="sms-proof-card reveal reveal-delay-1">
<div class="phone-top">
  <div class="phone-status-bar">
    <span class="phone-time">10:14 AM</span>
    <div class="phone-icons">
      <svg class="phone-icon-svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor" style="display:inline-block; vertical-align:middle;"><path d="M22 13h-2v5H2v-5H0v6c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-6zM11 2L5.5 7.5l1.42 1.42L10 5.83v11.17h2V5.83l3.08 3.08 1.42-1.42L11 2z"/></svg>
      <span class="phone-network-type">5G</span>
      <div class="phone-battery" style="display:inline-block; width:17px; height:9px; border:1px solid currentColor; border-radius:2px; position:relative; vertical-align:middle; margin-left:3px; opacity:0.6;"><div style="background:currentColor; width:12px; height:5px; position:absolute; top:1px; left:1px;"></div></div>
    </div>
  </div>
  <div class="phone-contact">
    <div class="phone-back-btn">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
    </div>
    <div class="phone-avatar-wrapper">
      <img class="phone-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" alt="Olivia Chen" referrerPolicy="no-referrer" />
      <span class="phone-online-dot"></span>
    </div>
    <div class="phone-contact-info">
      <span class="phone-contact-name">Olivia Chen</span>
      <span class="phone-contact-status">online</span>
    </div>
    <div class="phone-header-actions">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="margin-right:8px;"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
    </div>
  </div>
</div>
<div class="sms-window">
<div class="sms-bubble client">The SMS campaign worked better than I expected. Customers actually replied and placed orders.</div>
<div class="sms-bubble us">Amazing. The goal was to make the message feel personal, not salesy.</div>
<div class="sms-bubble client">Exactly. It felt natural, and the repeat purchase rate improved this week.</div>
<div class="sms-proof-rating"><span>★★★★★</span><span>SMS Campaign + Retention</span></div>
</div>
<div class="sms-proof-name">Olivia Chen</div>
<div class="sms-proof-brand">Marketing Lead, Veloura Wellness</div>
</div>
<div class="sms-proof-card reveal reveal-delay-2">
<div class="phone-top">
  <div class="phone-status-bar">
    <span class="phone-time">2:38 PM</span>
    <div class="phone-icons">
      <svg class="phone-icon-svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor" style="display:inline-block; vertical-align:middle;"><path d="M22 13h-2v5H2v-5H0v6c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-6zM11 2L5.5 7.5l1.42 1.42L10 5.83v11.17h2V5.83l3.08 3.08 1.42-1.42L11 2z"/></svg>
      <span class="phone-network-type">5G</span>
      <div class="phone-battery" style="display:inline-block; width:17px; height:9px; border:1px solid currentColor; border-radius:2px; position:relative; vertical-align:middle; margin-left:3px; opacity:0.6;"><div style="background:currentColor; width:12px; height:5px; position:absolute; top:1px; left:1px;"></div></div>
    </div>
  </div>
  <div class="phone-contact">
    <div class="phone-back-btn">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
    </div>
    <div class="phone-avatar-wrapper">
      <img class="phone-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" alt="Daniel Reed" referrerPolicy="no-referrer" />
      <span class="phone-online-dot"></span>
    </div>
    <div class="phone-contact-info">
      <span class="phone-contact-name">Daniel Reed</span>
      <span class="phone-contact-status">online</span>
    </div>
    <div class="phone-header-actions">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="margin-right:8px;"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
    </div>
  </div>
</div>
<div class="sms-window">
<div class="sms-bubble client">Before this, our emails felt random. Now every message has a purpose.</div>
<div class="sms-bubble us">That is exactly what lifecycle marketing should do.</div>
<div class="sms-bubble client">The post-purchase sequence is my favorite. Customers are coming back without us chasing them.</div>
<div class="sms-proof-rating"><span>★★★★★</span><span>Post-Purchase + Loyalty Flow</span></div>
</div>
<div class="sms-proof-name">Daniel Reed</div>
<div class="sms-proof-brand">Founder, North Vale</div>
</div>
</div>
</div>
</section>

<style>
@media (max-width: 900px) {
  .editorial-proof-grid-custom {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }
  .editorial-card-classic {
    padding: 32px !important;
    border-radius: 28px !important;
  }
}
</style>

<section class="editorial-proof-section" id="client-reviews-proof" style="background-color: #faf5f0; padding: 110px 40px; overflow: hidden; position: relative;">
<div class="wrap" style="max-width: 1180px; margin: 0 auto; width: 100%;">
  <div class="editorial-proof-title" style="margin-bottom: 56px; text-align: left;">
    <div style="font-family: 'DM Sans', sans-serif; font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; color: #e17938; font-weight: 700; margin-bottom: 16px;">
      CREATIVE &amp; STOREFRONT REVIEWS
    </div>
    <h2 style="font-family: 'Space Grotesk', 'DM Sans', sans-serif; font-size: clamp(34px, 4.5vw, 54px); font-weight: 700; color: #132c4a; line-height: 1.1; margin: 0; letter-spacing: -0.02em;">
      Bespoke Website Redesigns &amp; <em style="font-family: 'Playfair Display', Georgia, serif; font-style: italic; color: #e17938; font-weight: 400;">Aesthetic Overhauls</em>
    </h2>
  </div>

  <div class="editorial-proof-grid-custom" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
    <!-- CARD 1 -->
    <div class="editorial-card-classic" style="background: #fffdfa; border: 1px solid rgba(19, 44, 74, 0.08); border-radius: 40px; padding: 48px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.4s ease; box-shadow: 0 10px 30px rgba(19, 44, 74, 0.02);">
      <div>
        <!-- Traffic lights dots -->
        <div style="display: flex; gap: 8px; margin-bottom: 32px;">
          <span style="width: 11px; height: 11px; border-radius: 50%; background-color: #ff5f56; display: block;"></span>
          <span style="width: 11px; height: 11px; border-radius: 50%; background-color: #ffbd2e; display: block;"></span>
          <span style="width: 11px; height: 11px; border-radius: 50%; background-color: #27c93f; display: block;"></span>
        </div>
        
        <!-- Stars rating -->
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 24px;">
          <span style="color: #dfc2a5; font-size: 15px; letter-spacing: 2px;">★★★★★</span>
          <span style="font-family: 'DM Sans', sans-serif; font-size: 11.5px; font-weight: 850; letter-spacing: 0.15em; color: #dfc2a5; text-transform: uppercase;">STOREFRONT OVERHAUL</span>
        </div>
        
        <!-- Review text -->
        <p style="font-family: 'DM Sans', sans-serif; font-size: 18.5px; line-height: 1.65; color: #1a2233; font-weight: 400; margin: 0 0 40px 0;">
          “Mail Bench completely transformed our storefront. They designed a gorgeous website and integrated flawless cart recovery systems. Our checkout conversions increased by 45% in weeks.”
        </p>
      </div>
      
      <!-- Footer divider & author row -->
      <div style="border-top: 1px solid rgba(19, 44, 74, 0.07); padding-top: 24px; display: flex; align-items: center; gap: 16px;">
        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80" alt="Elena G." referrerPolicy="no-referrer" style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(19, 44, 74, 0.08);" />
        <div style="display: flex; flex-direction: column; text-align: left;">
          <span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: #1a2233;">Elena G.</span>
          <span style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #e17938; font-weight: 500; margin-top: 1px;">General Manager, Vita Organics</span>
        </div>
      </div>
    </div>

    <!-- CARD 2 -->
    <div class="editorial-card-classic active-accent" style="background: #fffdfa; border: 1.5px solid #e17938; border-radius: 40px; padding: 48px; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.4s ease; box-shadow: 0 15px 35px rgba(225, 121, 56, 0.04);">
      <div>
        <!-- Traffic lights dots -->
        <div style="display: flex; gap: 8px; margin-bottom: 32px;">
          <span style="width: 11px; height: 11px; border-radius: 50%; background-color: #ff5f56; display: block;"></span>
          <span style="width: 11px; height: 11px; border-radius: 50%; background-color: #ffbd2e; display: block;"></span>
          <span style="width: 11px; height: 11px; border-radius: 50%; background-color: #27c93f; display: block;"></span>
        </div>
        
        <!-- Stars rating -->
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 24px;">
          <span style="color: #dfc2a5; font-size: 15px; letter-spacing: 2px;">★★★★★</span>
          <span style="font-family: 'DM Sans', sans-serif; font-size: 11.5px; font-weight: 850; letter-spacing: 0.15em; color: #dfc2a5; text-transform: uppercase;">RETENTION EXCELLENCE</span>
        </div>
        
        <!-- Review text -->
        <p style="font-family: 'DM Sans', sans-serif; font-size: 18.5px; line-height: 1.65; color: #1a2233; font-weight: 400; margin: 0 0 40px 0;">
          “The layouts are seamless from our emails to our subscription funnels. Their bespoke craftsmanship instantly builds extreme trust with our highest-value buyers.”
        </p>
      </div>
      
      <!-- Footer divider & author row -->
      <div style="border-top: 1px solid rgba(19, 44, 74, 0.07); padding-top: 24px; display: flex; align-items: center; gap: 16px;">
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" alt="Adrian T." referrerPolicy="no-referrer" style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(19, 44, 74, 0.08);" />
        <div style="display: flex; flex-direction: column; text-align: left;">
          <span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: #1a2233;">Adrian T.</span>
          <span style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #e17938; font-weight: 500; margin-top: 1px;">Creative Director, Kai Luxe</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MEET THE FOUNDER SECTION -->
<section class="meet-the-founder-section" id="meet-founder" style="background-color: #9c968f; padding: 110px 40px; overflow: hidden; position: relative;">
<div class="wrap" style="max-width: 1180px; margin: 0 auto; width: 100%;">
  <div class="meet-founder-grid" style="display: grid; grid-template-columns: 1fr 1.25fr; gap: 72px; align-items: center;">
    
    <!-- LEFT COLUMN - FOUNDER IMAGE & FRAME -->
    <div style="display: flex; justify-content: center; position: relative; width: 100%;">
      <div class="founder-image-frame" style="border: 2.2px solid rgba(255, 255, 255, 0.22); border-radius: 46px; padding: 18px; background-color: rgba(255, 255, 255, 0.04); width: 100%; max-width: 440px; box-sizing: border-box;">
        <div style="border-radius: 32px; overflow: hidden; width: 100%; aspect-ratio: 4 / 4.8; position: relative; box-shadow: 0 20px 45px rgba(19, 44, 74, 0.15);">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=800&q=80" alt="Kavya Reddy" referrerPolicy="no-referrer" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
          <div style="position: absolute; bottom: 28px; left: 0; right: 0; text-align: center; z-index: 10; width: 100%;">
            <span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 750; letter-spacing: 0.18em; color: #ffffff; text-shadow: 0 2px 8px rgba(0,0,0,0.45); text-transform: uppercase;">FOUNDER &amp; CHIEF STRATEGIST</span>
          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT COLUMN - CONTENT & COPY -->
    <div style="display: flex; flex-direction: column; text-align: left;">
      <div style="font-family: 'DM Sans', sans-serif; font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; color: #e17938; font-weight: 700; margin-bottom: 24px;">
        MEET THE FOUNDER
      </div>
      <h2 style="font-family: 'Space Grotesk', 'DM Sans', sans-serif; font-size: clamp(34px, 4.2vw, 48px); font-weight: 700; color: #132c4a; line-height: 1.12; margin: 0 0 32px 0; letter-spacing: -0.025em; max-width: 600px;">
        We engineer compounding relationship <span style="font-family: 'Playfair Display', Georgia, serif; font-style: italic; color: #e17938; font-weight: 400; text-transform: none;">equity.</span>
      </h2>
      
      <p style="font-family: 'DM Sans', sans-serif; font-size: 18.5px; line-height: 1.65; color: #1c2535; font-weight: 400; margin: 0 0 28px 0; max-width: 620px;">
        "I am <strong style="font-weight: 700; color: #132c4a;">Kavya Reddy</strong>, the founder and head strategist here at MailBench. I started this boutique agency with a singular, clear goal: to protect premium e-commerce brands from polluting their audience's inboxes with generic, uninspired spam."
      </p>
      
      <p style="font-family: 'DM Sans', sans-serif; font-size: 18.5px; line-height: 1.65; color: #1c2535; font-weight: 400; margin: 0; max-width: 620px;">
        "Every email and SMS we compose features pristine custom-typeset editorial aesthetics and authentic human phrasing. This rigorous attention to design builds sustained relationship equity, keeps customers genuinely delighted, and raises repeating lifetime cart value for businesses."
      </p>

      <!-- thin divider -->
      <div style="border-top: 1px solid rgba(19, 44, 74, 0.12); margin-top: 44px; margin-bottom: 20px; max-width: 600px;"></div>

      <div style="font-family: 'Playfair Display', Georgia, serif; font-size: 26px; font-style: italic; font-weight: 400; color: #132c4a; margin-bottom: 6px;">
        Kavya Reddy
      </div>
      <div style="font-family: 'DM Sans', sans-serif; font-size: 10.5px; font-weight: 750; letter-spacing: 0.15em; color: #132c4a; text-transform: uppercase;">
        FOUNDER &amp; PRINCIPAL ARCHITECT, MAILBENCH
      </div>
    </div>

  </div>
</div>
</section>

<style>
@media (max-width: 900px) {
  .meet-founder-grid {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }
}
</style>

<section class="contact final-inquiry-contact" id="contact">
<div class="wrap final-inquiry-grid">
<div class="final-inquiry-copy reveal">
<div class="eyebrow">Ready To Begin</div>
<h2 class="display">Let’s build customer communication that people actually want to receive.</h2>
<p class="sub">
          Send an inquiry, email us, or text us directly. Tell us what you need help with — email marketing, SMS campaigns, lifecycle flows, abandoned cart recovery, welcome sequences, or retention systems.
        </p>
<div class="final-contact-options" style="display: flex; flex-direction: column; gap: 16px; margin-top: 32px; max-width: 580px; width: 100%;">
<a class="final-contact-option" href="https://cal.com/kavya-lifecycle/30min" target="_blank" rel="noopener" style="display: flex; justify-content: space-between; align-items: center; padding: 22px 36px; border-radius: 32px; background: #eedfc9; border: 1px solid rgba(19, 44, 74, 0.08); color: #132c4a; text-decoration: none; box-shadow: 0 4px 15px rgba(19, 44, 74, 0.03); transition: all 0.25s ease;">
  <strong style="font-family: 'DM Sans', sans-serif; font-size: 20px; font-weight: 700; letter-spacing: -0.01em;">Book a Free Discovery Call</strong>
  <span style="font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 500; color: #202e42;">Schedule Call</span>
</a>
<div class="final-contact-option" onclick="if(!event.target.closest('a')){ window.open('https://mail.google.com/mail/?view=cm&fs=1&to=services@mail-bench.com', '_blank'); }" style="display: flex; justify-content: space-between; align-items: center; padding: 22px 36px; border-radius: 32px; background: #eedfc9; border: 1px solid rgba(19, 44, 74, 0.08); color: #132c4a; text-decoration: none; box-shadow: 0 4px 15px rgba(19, 44, 74, 0.03); transition: all 0.25s ease; cursor: pointer;">
  <div style="display: flex; flex-direction: column; gap: 4px; align-items: flex-start;">
    <strong style="font-family: 'DM Sans', sans-serif; font-size: 20px; font-weight: 700; letter-spacing: -0.01em; margin: 0;">Email Inquiry</strong>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=services@mail-bench.com" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; padding: 6px 14px; margin-top: 6px; border-radius: 20px; background: #132c4a; color: #ffffff; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; text-decoration: none; cursor: pointer; transition: opacity 0.2s ease;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">Email MailBench</a>
  </div>
  <a class="mailto-link" href="mailto:services@mail-bench.com" target="_top" style="font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 500; color: #202e42; text-decoration: underline;">services@mail-bench.com</a>
</div>
<a class="final-contact-option" href="https://wa.me/918008220560" target="_blank" rel="noopener" style="display: flex; justify-content: space-between; align-items: center; padding: 22px 36px; border-radius: 32px; background: #eedfc9; border: 1px solid rgba(19, 44, 74, 0.08); color: #132c4a; text-decoration: none; box-shadow: 0 4px 15px rgba(19, 44, 74, 0.03); transition: all 0.25s ease;">
  <strong style="font-family: 'DM Sans', sans-serif; font-size: 20px; font-weight: 700; letter-spacing: -0.01em;">WhatsApp Chat</strong>
  <span style="font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 500; color: #202e42;">+91 8008220560</span>
</a>
</div>
</div>
<div class="final-inquiry-form-card reveal d1" id="footer-form-wrapper">
<h3>Send an Inquiry</h3>
<form id="footer-inquiry-form" onsubmit="handleFooterInquirySubmit(event)" class="final-inquiry-form">
<div>
<label>Your Name</label>
<input id="footer_lead_name" name="Name" placeholder="Your name" type="text" autocomplete="name" required />
</div>
<div>
<label>Email</label>
<input id="footer_lead_email" name="Email" placeholder="you@example.com" type="email" autocomplete="email" required />
</div>
<div>
<label>Phone / SMS</label>
<input id="footer_lead_phone" name="Phone" placeholder="+1 000 000 0000" type="tel" autocomplete="tel" />
</div>
<div>
<label>Business Type</label>
<select id="footer_lead_type" name="Business Type">
<option>Beauty / Skincare Brand</option>
<option>Wellness Brand</option>
<option>Fashion Brand</option>
<option>Lifestyle Brand</option>
<option>Ecommerce Brand</option>
<option>Other</option>
</select>
</div>
<div class="final-form-full">
<label>Service Needed</label>
<select id="footer_lead_service" name="Service Needed">
<option>Website Designing</option>
<option>Email Marketing</option>
<option>SMS Marketing</option>
<option>Cold Email Marketing</option>
<option>Welcome Flow</option>
<option>Abandoned Cart Flow</option>
<option>Post-Purchase Flow</option>
<option>Retention / Win-Back Flow</option>
<option>Full Email + SMS Lifecycle Setup</option>
</select>
</div>
<div class="final-form-full">
<label>Message</label>
<textarea id="footer_lead_message" name="Message" placeholder="Tell us about your brand, current challenge, and what you want to improve."></textarea>
</div>
<button id="footer-submit-btn" class="final-inquiry-submit" type="submit">Send Inquiry</button>
<p class="final-form-note">
            Your inquiry is transmitted instantly and securely via encrypted connection. We respect your trust and protect your privacy.
          </p>
</form>
</div>
</div>
</section>
<footer class="footer"><div class="wrap footer-grid"><div><div class="footer-logo" style="display: flex; align-items: center; gap: 11px; margin-bottom: 1.2rem;">
  <svg width="40" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; display: block;">
    <!-- White Infinity Loop on Dark Footer Background -->
    <path class="logo-infinity-loop" d="M10,18.5 C6.41,18.5 3.5,15.59 3.5,12 C3.5,8.41 6.41,5.5 10,5.5 C13.06,5.5 15.65,7.61 16.5,10.5 L19.5,13.5 C20.35,16.39 22.94,18.5 26,18.5 C29.59,18.5 32.5,15.59 32.5,12 C32.5,8.41 29.59,5.5 26,5.5 C22.94,5.5 20.35,7.61 19.5,10.5 L16.5,13.5 C15.65,16.39 13.06,18.5 10,18.5 Z" stroke="#ffffff" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round" />
    <!-- Solid Orange Circle inside Left Loop -->
    <circle cx="10" cy="12" r="2.2" fill="#e17938" />
    <!-- Solid Orange Checkmark on Right Loop -->
    <path d="M23.5,12 L26,14.5 L31.5,9" stroke="#e17938" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <div style="display: flex; flex-direction: column; line-height: 1.05; justify-content: center; text-align: left;">
    <div style="font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 1.4rem; letter-spacing: -0.015em; display: flex; align-items: center; text-transform: none;">
      <span class="logo-text-mail" style="color: #ffffff;">Mail</span><span style="color: #e17938;">Bench</span>
    </div>
    <span style="font-family: 'DM Sans', sans-serif; font-size: 0.52rem; font-weight: 700; letter-spacing: 0.22em; color: rgba(255,255,255,0.6); text-transform: uppercase; margin-top: 2px;">LIFECYCLE STUDIO</span>
    <span style="font-family: 'DM Sans', sans-serif; font-size: 0.44rem; font-weight: 600; letter-spacing: 0.08em; color: rgba(255,255,255,0.45); text-transform: uppercase; margin-top: 1px;">KAVYA REDDY, FOUNDER</span>
  </div>
</div><p style="margin-top:.8rem">Premium email, SMS, lifecycle flows, and retention marketing for ecommerce brands.</p></div><div><h4>Services</h4><a href="#services">Website Designing</a><a href="#services">Email Marketing</a><a href="#services">SMS Marketing</a><a href="#services" onclick="openModal('coldemail'); return false;">Cold Email Marketing</a><a href="#flows">Lifecycle Flows</a></div><div><h4>Company</h4><a href="#industries">Industries</a><a href="#results">Results</a><a href="#process">Process</a></div><div><h4>Contact</h4><a href="mailto:services@mail-bench.com" onclick="window.open('https://mail.google.com/mail/?view=cm&fs=1&to=services@mail-bench.com', '_blank'); event.preventDefault();">services@mail-bench.com</a><a href="https://www.linkedin.com/in/kavya-reddy-97032938a" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://x.com/KavyaLifecycle" target="_blank" rel="noopener noreferrer">Twitter / X</a><a href="https://www.reddit.com/user/Kavya_Lifecycle" target="_blank" rel="noopener noreferrer">Reddit</a></div></div>

</footer>
<div class="modal-overlay" id="modal-overlay" onclick="closeModalOnOverlay(event)"><div class="modal"><button class="modal-close" onclick="closeModal()">×</button><div id="modal-body"></div></div></div>

<!-- Boutique Floating Inquiry Trigger -->
<button class="studio-chatbot-fab" id="studio-chatbot-fab" onclick="toggleStudioChat()">
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #e9b98f;"><rect x="2" y="4" width="20" height="16" rx="2"></rect><polyline points="22 7 12 14 2 7"></polyline></svg>
  <span>Enquire Now</span>
</button>

<!-- Studio Bespoke Inquiry Form Widget -->
<div class="studio-chat-container" id="studio-chat-container" style="height: auto; max-height: 520px;">
  <!-- Header -->
  <div class="studio-chat-header">
    <div class="studio-chat-header-title">
      <h4>✦ Get a Bespoke Audit</h4>
      <span>Get in Touch with MailBench</span>
    </div>
    <button class="studio-chat-close" onclick="toggleStudioChat()">×</button>
  </div>

  <!-- Form Body -->
  <div id="studio-inquiry-body" style="padding: 24px; display: flex; flex-direction: column; gap: 18px; background: #fffaf3; flex: 1;">
    <p style="font-size: 13px; color: #503d30; margin: 0; line-height: 1.5; font-weight: 400;">
      Submit your details below. We'll audit your storefront and email strategy, then deliver a tailored growth plan within 24 hours.
    </p>

    <form id="studio-inquiry-form" onsubmit="submitStudioInquiry(event)" style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <label style="display: block; font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: #7b6b60; font-weight: 750; margin-bottom: 6px;">Your Name *</label>
        <input type="text" id="inquiry_lead_name" name="name" placeholder="Charlotte Vance" autocomplete="name" style="width: 100%; border: 1px solid rgba(80,55,35,.15); background: #fff; border-radius: 10px; padding: 10px 14px; font-size: 13px; height: 42px; outline: none; color: #201b16; transition: border-color 0.2s;" required />
      </div>
      
      <div>
        <label style="display: block; font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: #7b6b60; font-weight: 750; margin-bottom: 6px;">Email Address *</label>
        <input type="email" id="inquiry_lead_email" name="email" placeholder="you@brand.com" autocomplete="email" style="width: 100%; border: 1px solid rgba(80,55,35,.15); background: #fff; border-radius: 10px; padding: 10px 14px; font-size: 13px; height: 42px; outline: none; color: #201b16; transition: border-color 0.2s;" required />
      </div>

      <button type="submit" id="inquiry-submit-btn" style="width: 100%; height: 44px; background: #241b16; color: #fff7ef; border: 0; border-radius: 999px; padding: 10px 14px; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 8px; transition: all 0.2s;">
        <span>Submit Request</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </button>
    </form>
  </div>
</div>

<!-- Cal.com Popup Overlay -->
<div id="cal-popup-overlay" class="cal-popup-overlay" style="position:fixed;inset:0;background:rgba(20,14,10,.6);backdrop-filter:blur(8px);z-index:10000;display:none;align-items:center;justify-content:center;padding:16px;" onclick="closeCalPopupOnOverlay(event)">
  <div style="background:#fff;border-radius:24px;width:min(1000px, 94%);height:min(750px, 92vh);display:flex;flex-direction:column;position:relative;box-shadow:0 30px 100px rgba(0,0,0,0.3);overflow:hidden;border:1px solid rgba(255,255,255,0.4);" class="animate-in fade-in zoom-in duration-300">
    <button style="position:absolute;right:18px;top:18px;border:none;background:#241b16;color:#fff;width:34px;height:34px;border-radius:50%;cursor:pointer;font-size:22px;display:grid;place-items:center;z-index:99;" onclick="closeCalPopup()">×</button>
    <iframe id="cal-iframe" style="width:100%;height:100%;border:none;border-radius:24px;background:#fff;" src="about:blank"></iframe>
  </div>
</div>



<script>

const industryData={
 wellness:{title:'Wellness Brands',img:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=80',desc:'For supplement, fitness, yoga, wellness, and self-care brands that need trust-based communication and repeat customer routines.',items:['Welcome sequences for new subscribers','Educational emails that build trust','Subscription reminders and reorder nudges','SMS updates for offers and restocks','Retention flows for repeat purchases'],pills:['Welcome Flow','Education Emails','SMS Reminders','Retention']},
 beauty:{title:'Beauty Brands',img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1100&q=80',desc:'For makeup, cosmetics, salons, and beauty ecommerce brands that need strong launches, VIP campaigns, and polished customer journeys.',items:['Product launch campaigns','VIP early access emails','Abandoned cart recovery','SMS flash sale alerts','Post-purchase review requests'],pills:['Launches','VIP Campaigns','Cart Recovery','SMS']},
 skincare:{title:'Skincare Brands',img:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1100&q=80',desc:'For skincare brands where education, routine-building, and reorder timing matter. Customers need reminders, guidance, and trust.',items:['Routine education emails','Reorder reminder flows','Before/after story campaigns','Post-purchase usage guides','Win-back emails for inactive buyers'],pills:['Reorder Flows','Education','Post-Purchase','Win-Back']},
 fashion:{title:'Fashion Brands',img:'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1100&q=80',desc:'For fashion and apparel brands that rely on seasonal drops, collection launches, limited offers, and repeat customer attention.',items:['New collection launch campaigns','Back-in-stock SMS alerts','VIP customer segments','Seasonal campaign calendars','Browse abandonment flows'],pills:['Drops','Back in Stock','VIP','Campaigns']},
 lifestyle:{title:'Lifestyle Brands',img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1100&q=80',desc:'For home, accessories, personal care, jewelry, and lifestyle brands that need storytelling-led email and SMS experiences.',items:['Brand storytelling newsletters','Gift guide campaigns','Community-building emails','Customer loyalty flows','Personalized product recommendations'],pills:['Storytelling','Gift Guides','Loyalty','Recommendations']},
 ecommerce:{title:'Ecommerce Stores',img:'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1100&q=80',desc:'For online stores that need practical revenue systems: cart recovery, welcome flows, promotions, customer follow-ups, and repeat purchase journeys.',items:['Welcome flow setup','Abandoned cart and browse flows','Promotional email campaigns','SMS reminders','Performance optimization for opens and clicks'],pills:['Welcome','Cart Recovery','Promos','Optimization']},
 luxury:{title:'Luxury Consumer Brands',img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1100&q=80',desc:'For premium brands that need customer communication to feel elegant, high-trust, and aligned with a refined brand experience.',items:['Premium email copy and design','High-touch customer nurture flows','VIP experience campaigns','Elegant launch sequences','Customer retention journeys'],pills:['Premium Copy','VIP Experience','Luxury Launches','Retention']}
};

function openIndustry(key){
 const d=industryData[key];
 document.getElementById('modal-body').innerHTML=\`<div class="modal-tag">Target Client</div><div class="modal-title">\${d.title}</div><div class="industry-modal-visual" style="background-image:url('\${d.img}')"></div><div class="modal-desc">\${d.desc}</div>\${d.items.map(i=>\`<div class="modal-item">\${i}</div>\`).join('')}<div class="industry-pill-row">\${d.pills.map(p=>\`<span class="industry-pill">\${p}</span>\`).join('')}</div>\`;
 document.getElementById('modal-overlay').classList.add('open');
 document.body.style.overflow='hidden';
}

const modalData={
  coldemail:{tag:'Service 08',title:'Cold Email Marketing',desc:'Build predictable outbound systems that start conversations with qualified prospects and generate sales opportunities.',items:['Cold email strategy','Personalized copywriting','Deliverability optimization','Follow-up sequences','Lead segmentation','Meeting generation support']},
 email:{tag:'Service 01',title:'Email Marketing',desc:'Strategic emails that help customers understand, trust, remember, and buy from your brand again.',items:['Welcome emails for new subscribers','Newsletters and promotional campaigns','Product launch emails','Post-purchase follow-ups','Retention and win-back emails','Clear subject lines, CTAs, and mobile-friendly layouts']},
 sms:{tag:'Service 02',title:'SMS Marketing',desc:'Short, timely text messages that help customers take action faster without feeling spammed.',items:['Cart reminders','VIP offers','Flash sale alerts','Product launch texts','Order and customer updates','Re-engagement SMS campaigns']},
 flows:{tag:'Service 03',title:'Lifecycle Flows',desc:'Automated email and SMS journeys that run in the background and guide customers through every stage.',items:['Welcome flow','Abandoned cart flow','Browse abandonment flow','Post-purchase flow','Win-back flow','VIP customer journey']},
 campaigns:{tag:'Service 04',title:'Campaign Strategy',desc:'A clear plan for what to send, when to send it, and which customers should receive each message.',items:['Monthly campaign calendars','Audience segmentation','Offer and launch planning','Holiday and seasonal campaigns','Testing ideas and improvements','Clear communication rhythm']},
 copy:{tag:'Service 05',title:'Copy & Design',desc:'Email and SMS creative that is easy to read, on-brand, attractive, and built for engagement.',items:['Subject line writing','Email body copy','CTA wording','Mobile-friendly design','Simple visual layouts','Brand voice consistency']},
 performance:{tag:'Service 06',title:'Performance Optimization',desc:'We track and improve the numbers that matter: opens, clicks, purchases, retention, and customer engagement.',items:['Open rate improvement','Click rate improvement','A/B testing ideas','List health and deliverability checks','Campaign performance review','Retention and repeat purchase analysis']},
 webdesign:{tag:'Service 07',title:'Website Designing',desc:'Bespoke, premium website interfaces and highly immersive landing pages designed from scratch to convert visitors and retain them.',items:['Custom Shopify/WooCommerce design','Responsive mobile-first layouts','High-converting landing page creation','User experience (UX/UI) design mapping','Optimized page load speed & navigation','Brand aesthetic & micro-interaction design']}
};
function openModal(key){const d=modalData[key];document.getElementById('modal-body').innerHTML=\`<div class="modal-tag">\${d.tag}</div><div class="modal-title">\${d.title}</div><div class="modal-desc">\${d.desc}</div>\${d.items.map(i=>\`<div class="modal-item">\${i}</div>\`).join('')}\`;document.getElementById('modal-overlay').classList.add('open');document.body.style.overflow='hidden'}

const whyMailBenchData = {
  retention: {
    tag: 'WHY MAILBENCH · PILLAR 01',
    title: 'Retention First Strategy',
    desc: 'Most agencies focus 100% of their energy on raw customer acquisition. We turn single purchases into recurring, predictable brand advocate flows.',
    visualHtml: \`
      <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin: 1.5rem 0; font-family: sans-serif; box-shadow: 0 15px 35px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.8rem; margin-bottom: 1.2rem;">
          <span style="font-size: 11px; text-transform: uppercase; color: #e17938; font-weight: bold; letter-spacing: 0.08em;">📊 Retention Cohort Metrics (60-day)</span>
          <span style="font-size: 10px; background: rgba(52, 196, 26, 0.15); padding: 2px 8px; border-radius: 4px; color: #52c41a;">Active</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 1rem;">
          <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); text-align: center;">
            <div style="color: rgba(255,255,255,0.4); font-size: 9px; font-weight: 600;">COHORT VOLUME</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-top: 3px;">10,480</div>
          </div>
          <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); text-align: center;">
            <div style="color: rgba(255,255,255,0.4); font-size: 9px; font-weight: 600;">2ND PURCHASE %</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #52c41a; margin-top: 3px;">34.8%</div>
          </div>
          <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); text-align: center;">
            <div style="color: #e17938; font-size: 9px; font-weight: 600;">LTV LIFT</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: #e17938; margin-top: 3px;">+182%</div>
          </div>
        </div>
        <p style="font-size: 11px; margin: 0; line-height: 1.4; color: rgba(255,255,255,0.6);">
          Instead of leaking customers straight into inactive segments, MailBench structures post-purchase flows at the exact moment their supply is nearing 20% left.
        </p>
      </div>
    \`,
    items: [
      '<b>Post-Purchase Calibration:</b> Tailoring automated follow-ups depending on exactly what flavor, size, or variant they bought.',
      '<b>Preventing One-and-Done Buyers:</b> Stacking multi-channel prompts (Email, SMS, physical insert codes) to secure customer habits.',
      '<b>Cohort LTV Dashboards:</b> Tracking visual customer lifespan segments, enabling clear and actionable optimizations.',
      '<b>Subscription Upgrade Triggers:</b> Seamless pathways introducing single-buy users into your subscription cycles smoothly.'
    ]
  },
  lifecycle: {
    tag: 'WHY MAILBENCH · PILLAR 02',
    title: 'Lifecycle Expertise Across Channels',
    desc: 'Basing messaging around the specific customer stage. We map and trigger exact automated communications spanning the entire user journey.',
    visualHtml: \`
      <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin: 1.5rem 0; font-family: sans-serif; box-shadow: 0 15px 35px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.8rem; margin-bottom: 1.2rem;">
          <span style="font-size: 11px; text-transform: uppercase; color: #e17938; font-weight: bold; letter-spacing: 0.08em;">🛣️ Cross-Channel Journey Map</span>
          <span style="font-size: 10px; color: rgba(255,255,255,0.4);">Triggers synced</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 11px;">
          <div style="display: flex; justify-content: space-between; background: rgba(255,255,255,0.02); padding: 8px; border-radius: 6px;">
            <span style="color:#fff;">1. Page view browse</span>
            <span style="color: #ebd8c0;">📧 Browse Abandon (45m)</span>
          </div>
          <div style="display: flex; justify-content: space-between; background: rgba(255,255,255,0.02); padding: 8px; border-radius: 6px;">
            <span style="color:#fff;">2. Checkout started</span>
            <span style="color: #ebd8c0;">💬 Cart Failover SMS (4h)</span>
          </div>
          <div style="display: flex; justify-content: space-between; background: rgba(255,255,255,0.02); padding: 8px; border-radius: 6px;">
            <span style="color:#fff;">3. Order completed</span>
            <span style="color: #52c41a;">✓ Post-Purchase Cycle (Day 1)</span>
          </div>
        </div>
      </div>
    \`,
    items: [
      '<b>7 Core Customer Stages:</b> Custom welcome series, abandoned browse, active cart, receipt guides, feedback collection, repeat upsell, and win-back.',
      '<b>Intelligent Failover Routing:</b> Automatically sending rich-text SMS if an email goes unopened for 6 hours, maximizing attention correctly.',
      '<b>Platform Synchronization:</b> Deep-level experts in Klaviyo, Attentive, Postscript, Customer.io, Mailchimp, and custom back-office hooks.'
    ]
  },
  outreach: {
    tag: 'WHY MAILBENCH · PILLAR 03',
    title: 'Enterprise Cold Outreach Systems',
    desc: 'Establishing isolated outbound infrastructure that operates purely in the primary inbox, opening warm boardroom booking discussions with enterprise clients.',
    visualHtml: \`
      <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin: 1.5rem 0; font-family: sans-serif; box-shadow: 0 15px 35px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.8rem; margin-bottom: 1.2rem;">
          <span style="font-size: 11px; text-transform: uppercase; color: #52c41a; font-weight: bold; letter-spacing: 0.08em;">⚡ Safe Rotator Health Limit</span>
          <span style="font-size: 10px; color:#52c41a;">DNS Warming Active</span>
        </div>
        <div style="font-family: monospace; font-size: 10px; line-height: 1.5; color: rgba(255,255,255,0.85); background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04);">
          • Domains Isolated: 15 rotatables (Safe limits: 35/day max)<br/>
          • MX Records, SPF, DKIM, DMARC: Verified and secure<br/>
          • Output Spintax Variations: 24,000 algorithmic combinations<br/>
          • Enterprise Board consultation meetings set up: 42
        </div>
      </div>
    \`,
    items: [
      '<b>Safe Domain Infrastructure:</b> Complete setup of secondary domain clusters to cleanly prevent your core domain from any deliverability hits.',
      '<b>Dynamic Spintax Variations:</b> We code dynamic copy templates such that every outbound message is calculated uniquely, evading programmatic spam filters.',
      '<b>Qualified Account Sourcing:</b> Scraping and verifying target lists (wholesalers, distributors, enterprise VP of Growth) with personalized context for high-response rates.'
    ]
  },
  personalization: {
    tag: 'WHY MAILBENCH · PILLAR 04',
    title: 'Hyper-Personalized Journeys',
    desc: 'Templates designed from scratch with dynamic brand assets. We inject dynamic storefront data and individualized content directly inside of your layouts.',
    visualHtml: \`
      <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin: 1.5rem 0; font-family: sans-serif; box-shadow: 0 15px 35px rgba(0,0,0,0.30);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.8rem; margin-bottom: 1.2rem;">
          <span style="font-size: 11px; text-transform: uppercase; color: #e17938; font-weight: bold; letter-spacing: 0.08em;">🎨 Dynamic Template Variables</span>
          <span style="font-size: 10px; color: rgba(255,255,255,0.4);">D3 Synced</span>
        </div>
        <div style="font-family: monospace; font-size: 10px; line-height: 1.5; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px;">
          Hello <span style="background:rgba(225,121,56,0.3); padding:0 4px; border-radius:3px; color:#fff;">{first_name}</span>,<br/>
          We noticed you enjoyed the <span style="background:rgba(225,121,56,0.3); padding:0 4px; border-radius:3px; color:#fff;">{last_ordered_product_name}</span>.<br/>
          Your custom routine starts on <span style="background:rgba(225,121,56,0.3); padding:0 4px; border-radius:3px; color:#fff;">{predictive_reorder_date}</span>.
        </div>
      </div>
    \`,
    items: [
      '<b>Storefront Metadata Hooks:</b> Directly fetch order specifics, browsed categories, and customized feedback lists on-the-fly.',
      '<b>Adaptive Layout Designs:</b> Content reshapes itself perfectly into balanced spaces whether viewed on an iPhone screen, Android, or Outlook client.',
      '<b>Behavioral-Group Messaging:</b> Automatically separating high-frequency buyers from raw discount seekers to direct custom copy themes.'
    ]
  },
  revenue: {
    tag: 'WHY MAILBENCH · PILLAR 05',
    title: 'Direct Revenue Execution',
    desc: 'No fluffy open-rate reports or vanity metrics. We focus our effort strictly on cash-flow additions and attributed purchase velocity.',
    visualHtml: \`
      <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin: 1.5rem 0; font-family: sans-serif; box-shadow: 0 15px 35px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.8rem; margin-bottom: 1.2rem;">
          <span style="font-size: 11px; text-transform: uppercase; color: #ebd8c0; font-weight: bold; letter-spacing: 0.08em;">🛒 Frictionless Checkout Loop</span>
          <span style="font-size: 10px; color: #52c41a;">Fast API</span>
        </div>
        <div style="text-align: center; background: rgba(52, 196, 26, 0.08); border: 1px dashed rgba(52, 196, 26, 0.3); border-radius: 10px; padding: 12px; font-size: 11px; color: #fff;">
          📥 User clicks Email "One-click Re-order"<br/>
          ⚡ Storefront API prepares cart + custom values instantly<br/>
          <b>Result: Conversions lift by 38.5% over basic cart loops</b>
        </div>
      </div>
    \`,
    items: [
      '<b>Multi-Touch Contribution reporting:</b> Seeing clean contribution metrics to prove which paths are actually driving growth directly.',
      '<b>1-Click Direct ordering:</b> Email CTA links that immediately load pre-filled carts with exact products, raising purchase rates.',
      '<b>List deliverability checks:</b> Frequent warming cycles, bounce-back monitoring, and continuous spam-trap maintenance to secure primary placement.'
    ]
  },
  reporting: {
    tag: 'WHY MAILBENCH · PILLAR 06',
    title: 'Transparent Life Dashboards',
    desc: 'Ditch bloated agency spreadsheets. We establish clean, real-time analytics so you can see exactly which customer is checking out at any given time.',
    visualHtml: \`
      <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin: 1.5rem 0; font-family: sans-serif; box-shadow: 0 15px 35px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.8rem; margin-bottom: 1.2rem;">
          <span style="font-size: 11px; text-transform: uppercase; color: #ebd8c0; font-weight: bold; letter-spacing: 0.08em;">🔍 Live Real-time Cohort Lift</span>
          <span style="font-size: 10px; color: rgba(255,255,255,0.4);">Updated 1m ago</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-family: monospace; font-size: 10px;">
          <div style="background: rgba(255,255,255,0.03); padding: 8px; border-radius: 6px;">
            <div style="color:rgba(255,255,255,0.4)">WELCOME ENTRANTS</div>
            <div style="font-size: 14px; font-weight: bold; color: #fff;">18,450</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 8px; border-radius: 6px;">
            <div style="color:rgba(255,255,255,0.4)">EMAIL REVENUE</div>
            <div style="font-size: 14px; font-weight: bold; color: #52c41a;">$142,850</div>
          </div>
        </div>
      </div>
    \`,
    items: [
      '<b>Live Tracking feeds:</b> Continuous real-time updates of active subscribers, delivery percentages, click behaviors, and revenue.',
      '<b>Jargon-Free Audits:</b> Straightforward executive summaries outlining successes, failures, and immediate next-stage calibration paths.',
      '<b>Direct Slack Integration:</b> Instant status triggers on client channels whenever metrics achieve pre-set milestones.'
    ]
  },
  dialogue: {
    tag: 'WHY MAILBENCH · PILLAR 07',
    title: 'Authentic Human-to-Human Dialogue',
    desc: 'Throwing away intrusive template layouts. We create human, thoughtful documents written from your founder or customer support channels directly.',
    visualHtml: \`
      <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin: 1.5rem 0; font-family: sans-serif; box-shadow: 0 15px 35px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.8rem; margin-bottom: 1.2rem;">
          <span style="font-size: 11px; text-transform: uppercase; color: #52c41a; font-weight: bold; letter-spacing: 0.08em;">📥 Inbox Smart Delivery Rating</span>
          <span style="font-size: 10px; color:#52c41a;">99.1% Primary Tab</span>
        </div>
        <div style="font-style: italic; font-size: 11px; color:#ebd8c0; line-height: 1.4; padding: 8px; background: rgba(255,255,255,0.02); border-radius: 8px;">
          "Hey Sarah, I founded our skincare brand out of our kitchen in 2018... reply back if you have any questions, I read every single one."
        </div>
      </div>
    \`,
    items: [
      '<b>Subtle Copywriting:</b> Sincere wording, providing consumers valuable tips, deep stories, or authentic advice instead of raw promo codes.',
      '<b>Primary Folder Priority:</b> Clean text consistently bypasses the Gmail Promotions bucket, sliding directly into the high-intent Primary inbox.',
      '<b>Encouraging Conversational Replies:</b> Setting up responsive flows where users write back, building solid feedback loops.'
    ]
  },
  ltv: {
    tag: 'WHY MAILBENCH · PILLAR 08',
    title: 'True LTV Optimization',
    desc: 'Building sustainable brand value. We develop e-commerce and outbound pipelines tailored strictly to achieve high repeat transactions and long lifetimes.',
    visualHtml: \`
      <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin: 1.5rem 0; font-family: sans-serif; box-shadow: 0 15px 35px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.8rem; margin-bottom: 1.2rem;">
          <span style="font-size: 11px; text-transform: uppercase; color: #ebd8c0; font-weight: bold; letter-spacing: 0.08em;">🧩 LTV to CAC Optimization</span>
          <span style="font-size: 10px; color: #e17938;">High Efficiency</span>
        </div>
        <p style="font-size: 11px; margin:0; line-height:1.4; color:rgba(255,255,255,0.75);">
          By raising retention repeat purchase rates, MailBench lowers your customer acquisition reliance on Meta & Google paid campaigns.
        </p>
      </div>
    \`,
    items: [
      '<b>Smart Reorder loops:</b> Boosting replenishment subscription groups by using helpful post-purchase advice instead of boring flyers.',
      '<b>VIP Status tiers:</b> Rewarding top spenders automatically, introducing them to hand-signed greetings, VIP segments, or testing groups.',
      '<b>LTV-to-CAC Ratio Maximization:</b> Designing high-margin direct communication pipelines that convert consistently at negligible operational costs.'
    ]
  }
};

function openWhyModal(key) {
  const d = whyMailBenchData[key];
  if (!d) return;
  document.getElementById('modal-body').innerHTML = \`
    <div class="modal-tag">\${d.tag}</div>
    <div class="modal-title">\${d.title}</div>
    <div class="modal-desc" style="margin-bottom: 1rem; font-size:1rem; line-height:1.5; color:var(--muted);">\${d.desc}</div>
    \${d.visualHtml || ''}
    <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 12px;">
      \${d.items.map(i => \`<div class="modal-item">\${i}</div>\`).join('')}
    </div>
  \`;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
const caseStudyData = {
  'welcome-flow': {
    contentHtml: \`<div style="font-family: 'DM Sans', sans-serif;">
  <div class="modal-tag">CASE STUDY 01 — FLOW OPTIMIZATION</div>
  <div class="modal-title" style="font-size: 2.1rem; font-family: var(--display); line-height: 1.1; margin: 0.5rem 0 1.2rem;">Welcome Flow: Reclaiming the Human Connection</div>
  
  <p style="font-size: 0.95rem; color: var(--muted); line-height: 1.6; margin-bottom: 1.5rem;">
    For a high-end organic skincare brand generating $120k/mo, the existing welcome sequence was a stock, overly graphic-heavy series of product flyers. It was landing straight in Gmail’s "Promotions Tab." We threw out the templates and instituted a 30-day split test: a graphic brand pitch vs. a highly intimate, authentic, plain-text letter from the line's founder.
  </p>

  <!-- Flow Diagram Mockup in pure HTML -->
  <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin-bottom: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-shadow: 0 20px 40px rgba(0,0,0,0.35);">
    <!-- Window Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 1rem; margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="width: 10px; height: 10px; background: #52c41a; border-radius: 50%; box-shadow: 0 0 8px #52c41a;"></span>
        <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.7);">System Split-Test: Lifecycle welcome-flow_v3</span>
      </div>
      <div style="display: flex; gap: 6px;">
        <span style="background: rgba(255,255,255,0.06); font-family: monospace; font-size: 10px; padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); color: #c4d7e6;">Live Performance Tracking</span>
      </div>
    </div>

    <!-- Big Metrics Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Recipients</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">4,830</div>
        <div style="font-size: 9px; color: #52c41a; margin-top: 4px;">↑ 100% split volume</div>
      </div>
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Open Rate (Avg)</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">61.8%</div>
        <div style="font-size: 9px; color: #52c41a; margin-top: 4px;">+46.2% improvement</div>
      </div>
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Click-to-Open</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">18.2%</div>
        <div style="font-size: 9px; color: #52c41a; margin-top: 4px;">↑ 3x organic ctr</div>
      </div>
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Attributed Revenue</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">$42,480</div>
        <div style="font-size: 9px; color: #52c41a; margin-top: 4px;">42.5% of store sales</div>
      </div>
    </div>

    <!-- A/B Comparison Table -->
    <div style="overflow-x: auto; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
      <table style="width: 100%; border-collapse: collapse; font-size: 11px; text-align: left; font-family: monospace;">
        <thead>
          <tr style="background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.08);">
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">VARIANT NAME</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">INBOX PLACEMENT</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">OPEN %</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">CLICK-TO-RUN</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">CONVERSION %</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">REVENUE</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: rgba(135,149,116,0.08);">
            <td style="padding: 11px; font-weight: bold; color: #d6e0c7;">🟢 Path A (Founder's Letter)</td>
            <td style="padding: 11px; color: #a9dfbf;">Primary Inbox (99.8%)</td>
            <td style="padding: 11px; font-weight: bold; color: #fff;">81.4%</td>
            <td style="padding: 11px; color: #fff;">18.2%</td>
            <td style="padding: 11px; color: #fff;">8.4%</td>
            <td style="padding: 11px; font-weight: bold; color: #d6e0c7;">$31,230.12</td>
          </tr>
          <tr style="opacity: 0.65;">
            <td style="padding: 11px; color: rgba(255,255,255,0.7);">Path B (Graphic Design HTML)</td>
            <td style="padding: 11px; color: #f5b041;">Promotions Tab (42.1%)</td>
            <td style="padding: 11px;">42.1%</td>
            <td style="padding: 11px;">4.8%</td>
            <td style="padding: 11px;">1.2%</td>
            <td style="padding: 11px;">$11,250.00</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div style="font-size: 10px; color: rgba(255,255,255,0.4); margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
      <span>📊 Statistical Confidence Level: >99.9% Significant winner detected</span>
      <span style="color: #d6e0c7; font-weight: bold;">Path A (Founder Letter Campaign) Auto-Routing 100% active</span>
    </div>
  </div>

  <h4 style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cocoa); margin-bottom: 0.6rem; font-weight: 750;">The Human Insights Behind the Lift</h4>
  <ul style="padding-left: 1.2rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #403b30; line-height: 1.5; display: grid; gap: 8px;">
    <li><b>Deliverability Breakout</b>: By stripping out heavy, crosslinked lifestyle images and trackable redirects, our plain-text founder email arrived directly in the Primary Inbox, driving a 93% increase in open rates.</li>
    <li><b>Emotional Hooks</b>: Instead of shouting "SHOP NOW", the creator shared the visceral story of cooking raw botanicals in her kitchen. This prompted hundreds of replies, establishing immediate brand loyalty and raising customer LTV.</li>
    <li><b>Actionable Next Step</b>: Added a post-purchase checklist at day 7 that asked: <i>"Is your balm absorbing smoothly?"</i> This lowered return requests by 65%.</li>
  </ul>

  <div style="background: #fbf4ec; border: 1px solid var(--line); border-radius: 16px; padding: 1rem 1.2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
    <div>
      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700;">IMPACT DELIVERED</div>
      <div style="font-size: 1.35rem; font-family: var(--display); color: var(--cocoa); margin-top: 2px;">+184.5% Attributed Revenue Growth</div>
    </div>
    <div style="text-align: right;">
      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700;">TOTAL ATTRIBUTED FLOWS REVENUE</div>
      <div style="font-size: 1.35rem; font-family: var(--display); color: var(--cocoa); margin-top: 2px;">$31,230.00 in 30 Days</div>
    </div>
  </div>
</div>\`
  },
  'abandoned-cart': {
    contentHtml: \`<div style="font-family: 'DM Sans', sans-serif;">
  <div class="modal-tag">CASE STUDY 02 — ABANDONED CART LEAKAGE</div>
  <div class="modal-title" style="font-size: 2.1rem; font-family: var(--display); line-height: 1.1; margin: 0.5rem 0 1.2rem;">Abandoned Cart System: Defending Margin and Trust</div>
  
  <p style="font-size: 0.95rem; color: var(--muted); line-height: 1.6; margin-bottom: 1.5rem;">
    For a premium coffee brand, cart recovery emails were broken: they immediately triggered generic 15% discount codes. This trained customers to abandon carts intentionally, destroying margins. We rewrote the sequence with a human-centric approach, delaying any discount to the third message and prioritizing personal support in the first.
  </p>

  <!-- Flow Visual in HTML -->
  <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin-bottom: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-shadow: 0 20px 40px rgba(0,0,0,0.35);">
    <!-- Window Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 1rem; margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="width: 10px; height: 10px; background: #eac6a8; border-radius: 50%; box-shadow: 0 0 8px #eac6a8;"></span>
        <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.7);">Automation Builder: Abandoned Cart checkout Series</span>
      </div>
      <div style="display: flex; gap: 6px;">
        <span style="background: rgba(110,76,56,0.1); font-family: monospace; font-size: 10px; padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(110,76,56,0.15); color: #eac6a8;">🟢 System Active & Routing</span>
      </div>
    </div>

    <!-- Timeline Steps -->
    <div style="display: flex; flex-direction: column; gap: 12px;">
      
      <!-- Step 1 -->
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 14px; display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 250px;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="font-size: 9px; font-family: monospace; background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; color: rgba(255,255,255,0.6);">STEP 1</span>
            <span style="font-size: 10px; color: #52c41a; font-family: monospace; font-weight: 600;">⏱️ 4 Hour Delay</span>
          </div>
          <div style="font-size: 13px; font-weight: 600; color: #fff;">"Need help choosing your roast?" (Support Letter Block)</div>
          <span style="font-size: 10px; color: rgba(255,255,255,0.4);">No promo code. Intimate signature greeting layout. Inbox Placement: 99.1% Primary.</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 80px); gap: 10px; font-family: monospace; font-size: 11px; text-align: right;">
          <div>
            <div style="color: rgba(255,255,255,0.4); font-size: 9px;">DELIVERED</div>
            <div style="font-weight: bold; color: #fff;">5,120</div>
          </div>
          <div>
            <div style="color: rgba(255,255,255,0.4); font-size: 9px;">OPEN RATE</div>
            <div style="font-weight: bold; color: #fff;">68.2%</div>
          </div>
          <div>
            <div style="color: #d6e0c7; font-size: 9px;">RECOVERY</div>
            <div style="font-weight: bold; color: #d6e0c7;">11.5%</div>
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 14px; display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 250px;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="font-size: 9px; font-family: monospace; background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; color: rgba(255,255,255,0.6);">STEP 2</span>
            <span style="font-size: 10px; color: #52c41a; font-family: monospace; font-weight: 600;">⏱️ 24 Hour Delay</span>
          </div>
          <div style="font-size: 13px; font-weight: 600; color: #fff;">"Our small batch roasting commitment" (Direct Origin Story)</div>
          <span style="font-size: 10px; color: rgba(255,255,255,0.4);">Editorial layout with high-resolution farm snapshots. Inbox Placement: 98.8% Primary.</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 80px); gap: 10px; font-family: monospace; font-size: 11px; text-align: right;">
          <div>
            <div style="color: rgba(255,255,255,0.4); font-size: 9px;">DELIVERED</div>
            <div style="font-weight: bold; color: #fff;">4,530</div>
          </div>
          <div>
            <div style="color: rgba(255,255,255,0.4); font-size: 9px;">OPEN RATE</div>
            <div style="font-weight: bold; color: #fff;">52.4%</div>
          </div>
          <div>
            <div style="color: #d6e0c7; font-size: 9px;">RECOVERY</div>
            <div style="font-weight: bold; color: #d6e0c7;">6.2%</div>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 14px; display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 250px;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="font-size: 9px; font-family: monospace; background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; color: rgba(255,255,255,0.6);">STEP 3</span>
            <span style="font-size: 10px; color: #52c41a; font-family: monospace; font-weight: 600;">⏱️ 48 Hour Delay</span>
          </div>
          <div style="font-size: 13px; font-weight: 600; color: #fff;">"Your roasting bag is packed" (Transactional Dispatch Check)</div>
          <span style="font-size: 10px; color: rgba(255,255,255,0.4);">Urgent shipping batch notification layout. SMS network failover active.</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 80px); gap: 10px; font-family: monospace; font-size: 11px; text-align: right;">
          <div>
            <div style="color: rgba(255,255,255,0.4); font-size: 9px;">DELIVERED</div>
            <div style="font-weight: bold; color: #fff;">4,250</div>
          </div>
          <div>
            <div style="color: rgba(255,255,255,0.4); font-size: 9px;">OPEN RATE</div>
            <div style="font-weight: bold; color: #fff;">94.1%</div>
          </div>
          <div>
            <div style="color: #d6e0c7; font-size: 9px;">RECOVERY</div>
            <div style="font-weight: bold; color: #d6e0c7;">4.1%</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <h4 style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cocoa); margin-bottom: 0.6rem; font-weight: 750;">Implementation Highlights</h4>
  <ul style="padding-left: 1.2rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #403b30; line-height: 1.5; display: grid; gap: 8px;">
    <li><b>Eliminating Discount Fatigue</b>: Realized that 78% of abandoned cart shoppers were repeat buyers exploiting the old auto-generated coupon. Removing coupon codes from the first 24 hours restored standard retail profit boundaries.</li>
    <li><b>Dynamic Cart Item Blocks</b>: Styled elegant, single-product feature columns within emails showing exact weight selected, ensuring the product's image and specific roast parameters are beautifully represented.</li>
  </ul>

  <div style="background: #fbf4ec; border: 1px solid var(--line); border-radius: 16px; padding: 1rem 1.2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
    <div>
      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700;">TOTAL MARGINS SAVED</div>
      <div style="font-size: 1.35rem; font-family: var(--display); color: var(--cocoa); margin-top: 2px;">+14.8% Average Order Value Boost</div>
    </div>
    <div style="text-align: right;">
      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700;">RECOVERED LEAKAGES IN 30 DAYS</div>
      <div style="font-size: 1.35rem; font-family: var(--display); color: var(--cocoa); margin-top: 2px;">$37,210.00 Total Revenue Recovered</div>
    </div>
  </div>
</div>\`
  },
  'customer-retention': {
    contentHtml: \`<div style="font-family: 'DM Sans', sans-serif;">
  <div class="modal-tag">CASE STUDY 03 — RETENTION & REPEAT SALES</div>
  <div class="modal-title" style="font-size: 2.1rem; font-family: var(--display); line-height: 1.1; margin: 0.5rem 0 1.2rem;">Predictive Replenishment: Retention Built on Real Data</div>
  
  <p style="font-size: 0.95rem; color: var(--muted); line-height: 1.6; margin-bottom: 1.5rem;">
    For a premium dietary supplement brand, customer lifetime value (LTV) was stagnant. Monthly newsletters were driving less than 1.5% click rates. Instead of bulk promos, we built localized replenishment triggers based on individual bottle sizes and consumption cycles (tracking standard 60-day consumption). 
  </p>

  <!-- Replenishment Funnel Dashboard in HTML -->
  <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin-bottom: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-shadow: 0 20px 40px rgba(0,0,0,0.35);">
    <!-- Window Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 1rem; margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="width: 10px; height: 10px; background: #52c41a; border-radius: 50%; box-shadow: 0 0 8px #52c41a;"></span>
        <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.7);">Cohort Analytics: Predictive Lifecycle Sequence</span>
      </div>
      <div style="display: flex; gap: 6px;">
        <span style="background: rgba(255,255,255,0.06); font-family: monospace; font-size: 10px; padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); color: #c4d7e6;">LTV Optimization Matched</span>
      </div>
    </div>

    <!-- Metrics Row -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Cohort Volume</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">12,850</div>
        <div style="font-size: 9px; color: #52c41a; margin-top: 4px;">Active Segments</div>
      </div>
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Cycle Period</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">60 Days</div>
        <div style="font-size: 9px; color: #879574; margin-top: 4px;">Smart Tracking</div>
      </div>
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Opt-In Reorders</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">24.5%</div>
        <div style="font-size: 9px; color: #52c41a; margin-top: 4px;">Industry avg: 3.1%</div>
      </div>
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Flow Revenues</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">$34,620</div>
        <div style="font-size: 9px; color: #52c41a; margin-top: 4px;">Reorders Synced</div>
      </div>
    </div>

    <!-- Cohort Refill Breakdown Table -->
    <div style="overflow-x: auto; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
      <table style="width: 100%; border-collapse: collapse; font-size: 11px; text-align: left; font-family: monospace;">
        <thead>
          <tr style="background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.08);">
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">COHORT STEP / DELAY</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">FAILOVER STATUS</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">RECIPIENTS</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">CLICK %</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">REORDER RATE</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">REVENUE LIFT</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
            <td style="padding: 11px; font-weight: bold; color: #fff;">📧 Cohort A (Day 50 Email)</td>
            <td style="padding: 11px; color: #52c41a;">SPF/DKIM Secure (99.8%)</td>
            <td style="padding: 11px;">4,850 Sent</td>
            <td style="padding: 11px; font-weight: bold; color: #fff;">24.5%</td>
            <td style="padding: 11px; font-weight: bold; color: #52c41a;">12.8% (620 checked-out)</td>
            <td style="padding: 11px; font-weight: bold; color: #d6e0c7;">$24,800.00</td>
          </tr>
          <tr>
            <td style="padding: 11px; font-weight: bold; color: #fff;">💬 Cohort B (Day 55 SMS)</td>
            <td style="padding: 11px; color: #52c41a;">SMS Inbound Net active</td>
            <td style="padding: 11px;">1,240 Sent</td>
            <td style="padding: 11px; font-weight: bold; color: #fff;">41.2%</td>
            <td style="padding: 11px; font-weight: bold; color: #52c41a;">8.4% (104 checked-out)</td>
            <td style="padding: 11px; font-weight: bold; color: #d6e0c7;">$9,820.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h4 style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cocoa); margin-bottom: 0.6rem; font-weight: 750;">Retention Innovation Breakdown</h4>
  <ul style="padding-left: 1.2rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #403b30; line-height: 1.5; display: grid; gap: 8px;">
    <li><b>Instant Checkout Routing</b>: Rather than sending customers to browse the storefront with a coupon, we passed custom cart-token queries. One tap loaded their product preferences directly into checkout with preloaded customer shipping information.</li>
    <li><b>VIP Segment Dedication</b>: Segmented customers spending high limits into exclusive groups, bypassing standard marketing cycles and communicating natively as human advisors.</li>
  </ul>

  <div style="background: #fbf4ec; border: 1px solid var(--line); border-radius: 16px; padding: 1rem 1.2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
    <div>
      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700;">LIFETIME VALUE (LTV) ACCELERATION</div>
      <div style="font-size: 1.35rem; font-family: var(--display); color: var(--cocoa); margin-top: 2px;">+42% Average Over-Year Customer Spent</div>
    </div>
    <div style="text-align: right;">
      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700;">30-DAY COHORT REVENUES</div>
      <div style="font-size: 1.35rem; font-family: var(--display); color: var(--cocoa); margin-top: 2px;">$34,620.00 Attributed Income</div>
    </div>
  </div>
</div>\`
  },
  'cold-outreach': {
    contentHtml: \`<div style="font-family: 'DM Sans', sans-serif;">
  <div class="modal-tag">CASE STUDY 04 — COLD EMAIL OUTBOUND</div>
  <div class="modal-title" style="font-size: 2.1rem; font-family: var(--display); line-height: 1.1; margin: 0.5rem 0 1.2rem;">Cold Email: Unlocking predictability in Enterprise Outreach</div>
  
  <p style="font-size: 0.95rem; color: var(--muted); line-height: 1.6; margin-bottom: 1.5rem;">
    For an enterprise consultancy seeking to connect with tier-1 logistics executives, we deployed a technical outbound engine. Far from a generic bulk message blast, we isolated cold lists across five custom domains, warm-rotated sender boxes to dodge spam blocks, and utilized bespoke research angles that got key decision makers to answer.
  </p>

  <!-- Cold Outbound Dashboard Mockup in HTML -->
  <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin-bottom: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-shadow: 0 20px 40px rgba(0,0,0,0.35);">
    <!-- Window Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 1rem; margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="width: 10px; height: 10px; background: #52c41a; border-radius: 50%; box-shadow: 0 0 8px #52c41a;"></span>
        <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.7);">Active Inbox Rotator: 5 Secondary Domain Warehouses</span>
      </div>
      <div style="display: flex; gap: 6px;">
        <span style="background: rgba(255,255,255,0.06); font-family: monospace; font-size: 10px; padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); color: #c4d7e6;">Safe Outbox Heat Limit: 35/day</span>
      </div>
    </div>

    <!-- Big Metrics Grid -->
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 1.5rem;">
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px; text-align: center;">
        <div style="font-size: 9px; text-transform: uppercase; color: rgba(255,255,255,0.4);">Volume Sent</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-top: 2px;">12,480</div>
        <div style="font-size: 8px; color: #52c41a; margin-top: 4px;">99.4% Primary Inbox</div>
      </div>
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px; text-align: center;">
        <div style="font-size: 9px; text-transform: uppercase; color: rgba(255,255,255,0.4);">Open Rate</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-top: 2px;">78.4%</div>
        <div style="font-size: 8px; color: #879574; margin-top: 4px;">Safe DNS warming</div>
      </div>
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px; text-align: center;">
        <div style="font-size: 9px; text-transform: uppercase; color: rgba(255,255,255,0.4);">Inbound Reply</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-top: 2px;">11.2%</div>
        <div style="font-size: 8px; color: #52c41a; margin-top: 4px;">Visceral Human Spintax</div>
      </div>
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px; text-align: center;">
        <div style="font-size: 9px; text-transform: uppercase; color: rgba(255,255,255,0.4);">Positive Intent</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-top: 2px;">4.6%</div>
        <div style="font-size: 8px; color: #52c41a; margin-top: 4px;">42 Board bookings set</div>
      </div>
    </div>

    <!-- Rotation Table -->
    <div style="overflow-x: auto; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
      <table style="width: 100%; border-collapse: collapse; font-size: 11px; text-align: left; font-family: monospace;">
        <thead>
          <tr style="background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.08);">
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">ROTATING SENDER ADDRESS</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">WARMUP/SPIN STATUS</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">MONTHLY SENDS</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">OPEN %</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">REPLY RATE</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">MEETINGS BOOKED</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
            <td style="padding: 11px; font-weight: bold; color: #fff;">🟢 outreach.domain1.co / j.alex@...</td>
            <td style="padding: 11px; color: #52c41a;">Safe Warmed (100% Health)</td>
            <td style="padding: 11px;">1,032 Sent</td>
            <td style="padding: 11px; font-weight: bold; color: #fff;">78.4%</td>
            <td style="padding: 11px; font-weight: bold; color: #fff;">11.2%</td>
            <td style="padding: 11px; font-weight: bold; color: #52c41a;">14 Scheduled</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
            <td style="padding: 11px; font-weight: bold; color: #fff;">🟢 outreach.domain2.co / t.brown@...</td>
            <td style="padding: 11px; color: #52c41a;">Safe Warmed (100% Health)</td>
            <td style="padding: 11px;">1,014 Sent</td>
            <td style="padding: 11px; font-weight: bold; color: #fff;">76.9%</td>
            <td style="padding: 11px; font-weight: bold; color: #fff;">10.8%</td>
            <td style="padding: 11px; font-weight: bold; color: #52c41a;">12 Scheduled</td>
          </tr>
          <tr>
            <td style="padding: 11px; font-weight: bold; color: #fff;">🟢 outreach.domain3.co / m.garcia@...</td>
            <td style="padding: 11px; color: #52c41a;">Warming Ramp (98.2% Health)</td>
            <td style="padding: 11px;">870 Sent</td>
            <td style="padding: 11px; font-weight: bold; color: #fff;">81.1%</td>
            <td style="padding: 11px; font-weight: bold; color: #fff;">12.4%</td>
            <td style="padding: 11px; font-weight: bold; color: #52c41a;">16 Scheduled</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h4 style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cocoa); margin-bottom: 0.6rem; font-weight: 750;">The Real Outreach Blueprint</h4>
  <ul style="padding-left: 1.2rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #403b30; line-height: 1.5; display: grid; gap: 8px;">
    <li><b>Warm Domain Isolation</b>: Rather than sending mass blasts from the primary business domain which would ruin standard email health, we registered 5 secondary domains. Complete SPF, DKIM, and DMARC parameters were aligned.</li>
    <li><b>Deep Corporate Angle Sourcing</b>: Ditching typical scraping scripts, we analyzed prospects' recent interviews or annual logistics reports, reference-triggering actual challenges in their warehousing.</li>
  </ul>

  <div style="background: #fbf4ec; border: 1px solid var(--line); border-radius: 16px; padding: 1rem 1.2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
    <div>
      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700;">OUTBOUND DELIVERY QUALITY</div>
      <div style="font-size: 1.35rem; font-family: var(--display); color: var(--cocoa); margin-top: 2px;">99.4% Inbox Placement Rating</div>
    </div>
    <div style="text-align: right;">
      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700;">REPRESENTATIVE OUTBOUND VALUE</div>
      <div style="font-size: 1.35rem; font-family: var(--display); color: var(--cocoa); margin-top: 2px;">42 Qualified Board Meetings Set</div>
    </div>
  </div>
</div>\`
  },
  'website-conversion': {
    contentHtml: \`<div style="font-family: 'DM Sans', sans-serif;">
  <div class="modal-tag">CASE STUDY 05 — UX/UI LANDING OVERHAUL</div>
  <div class="modal-title" style="font-size: 2.1rem; font-family: var(--display); line-height: 1.1; margin: 0.5rem 0 1.2rem;">Conversion Overhaul: Simplicity that Commands Premium Prices</div>
  
  <p style="font-size: 0.95rem; color: var(--muted); line-height: 1.6; margin-bottom: 1.5rem;">
    For an architecture firm seeking high-ticket private clients, their old website looked like a cluttered web directory. It was slow and distracted clients with typical automated helper bots. We rebuilt their page experience focusing entirely on editorial hierarchy, custom typography pairing, and an intentional, low-friction intake system.
  </p>

  <!-- Conversion Rate Chart Mockup in HTML -->
  <div style="background: #141416; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem; color: #f4f4f6; margin-bottom: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; box-shadow: 0 20px 40px rgba(0,0,0,0.35);">
    <!-- Window Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 1rem; margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="width: 10px; height: 10px; background: #52c41a; border-radius: 50%; box-shadow: 0 0 8px #52c41a;"></span>
        <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.7);">Conversion Split-Test: Editorial Intake Flow v2</span>
      </div>
      <div style="display: flex; gap: 6px;">
        <span style="background: rgba(255,255,255,0.06); font-family: monospace; font-size: 10px; padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); color: #c4d7e6;">Statistical Confidence: 99.9%</span>
      </div>
    </div>

    <!-- Metrics Row -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Baseline Rate</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: rgba(255,255,255,0.4);">1.1%</div>
        <div style="font-size: 9px; color: rgba(255,255,255,0.3); margin-top: 4px;">Cluttered Layout</div>
      </div>
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Optimized Rate</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">3.8%</div>
        <div style="font-size: 9px; color: #52c41a; margin-top: 4px;">+245% Performance</div>
      </div>
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Bounce Reduction</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">34.2%</div>
        <div style="font-size: 9px; color: #52c41a; margin-top: 4px;">Down from 78.5%</div>
      </div>
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Contract Velocity</div>
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">+3.4x</div>
        <div style="font-size: 9px; color: #52c41a; margin-top: 4px;">Verified conversions</div>
      </div>
    </div>

    <!-- Comparative Table -->
    <div style="overflow-x: auto; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
      <table style="width: 100%; border-collapse: collapse; font-size: 11px; text-align: left; font-family: monospace;">
        <thead>
          <tr style="background: rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.08);">
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">VARIANT NAME</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">SESSIONS</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">BOUNCE RATE</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">PAGE LOAD</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">SUBMITS</th>
            <th style="padding: 10px; color: rgba(255,255,255,0.6); font-weight: 600;">CONVERSION RATE</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.04); opacity: 0.65;">
            <td style="padding: 11px; color: rgba(255,255,255,0.7);">🗑️ Path A (Original Cluttered Site)</td>
            <td style="padding: 11px;">14,830</td>
            <td style="padding: 11px;">78.5%</td>
            <td style="padding: 11px;">4.8s</td>
            <td style="padding: 11px;">163 Inquiry Cards</td>
            <td style="padding: 11px; font-weight: bold;">1.1% (Baseline)</td>
          </tr>
          <tr style="background: rgba(135,149,116,0.08);">
            <td style="padding: 11px; font-weight: bold; color: #d6e0c7;">✨ Path B (Clean Editorial Intake)</td>
            <td style="padding: 11px; color: #fff;">15,120</td>
            <td style="padding: 11px; color: #a9dfbf;">34.2%</td>
            <td style="padding: 11px; color: #a9dfbf;">1.1s</td>
            <td style="padding: 11px; font-weight: bold; color: #fff;">574 Inquiry Cards</td>
            <td style="padding: 11px; font-weight: bold; color: #d6e0c7;">3.8% (+245.5% lift)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h4 style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cocoa); margin-bottom: 0.6rem; font-weight: 750;">High-Touch Overhaul Strategy</h4>
  <ul style="padding-left: 1.2rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #403b30; line-height: 1.5; display: grid; gap: 8px;">
    <li><b>Removing Digital Clutter</b>: By turning off generic chatbot boxes, newsletter modals, and low-contrast product widgets, we restored the luxurious tranquility expected by enterprise clients.</li>
    <li><b>Bespoke Form Routing</b>: Replaced generic input boxes with a short, highly-vetted questionnaire asking about project size, budget horizons, and aesthetic philosophies, filtering high-value targets prior to scheduling calls.</li>
  </ul>

  <div style="background: #fbf4ec; border: 1px solid var(--line); border-radius: 16px; padding: 1rem 1.2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
    <div>
      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700;">USER ACTION RATE UP</div>
      <div style="font-size: 1.35rem; font-family: var(--display); color: var(--cocoa); margin-top: 2px;">+245% Qualified Response Velocity</div>
    </div>
    <div style="text-align: right;">
      <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); font-weight: 700;">PROJECT INQUIRY IMPACT IN 60 DAYS</div>
      <div style="font-size: 1.35rem; font-family: var(--display); color: var(--cocoa); margin-top: 2px;">$240k Qualified Contract Value</div>
    </div>
  </div>
</div>\`
  }
};
function openCaseModal(key) {
  const d = caseStudyData[key];
  if (!d) return;
  document.getElementById('modal-body').innerHTML = d.contentHtml;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){document.getElementById('modal-overlay').classList.remove('open');document.body.style.overflow=''}
function closeModalOnOverlay(e){if(e.target.id==='modal-overlay')closeModal()}document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
function scrollToSection(id){const el=document.getElementById(id);if(!el)return;const nav=document.getElementById('nav');window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-nav.offsetHeight-12,behavior:'smooth'})}
document.querySelectorAll('[data-target]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();scrollToSection(a.getAttribute('data-target'))}))
const sections=['services','industries','flows','results','process','contact'];function updateNav(){const nav=document.getElementById('nav');nav.classList.toggle('scrolled',window.scrollY>50);let current='';sections.forEach(id=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=nav.offsetHeight+30)current=id});document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('data-target')===current))}window.addEventListener('scroll',updateNav);updateNav();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Dynamic Headline Word Cycler
(function() {
  const words = [
    "generational trust.",
    "measurable retention.",
    "lifelong relationships.",
    "sustained revenue.",
    "loyal brand loyalty."
  ];
  let index = 0;
  const wordEl = document.getElementById('dynamic-headline-word');
  if (wordEl) {
    setInterval(() => {
      wordEl.style.opacity = '0';
      setTimeout(() => {
        index = (index + 1) % words.length;
        wordEl.innerHTML = words[index];
        wordEl.style.opacity = '1';
      }, 400);
    }, 3800);
  }
})();

// Front Page Live Executive Quote Cycler
(function() {
  const quotes = [
    { text: "“Within 60 days of partnering with MailBench, our welcome sequences and cart recovery paths generated a 34% lift in repeat purchases.”", author: "— MAYA R., FOUNDER OF LUMA SKINCARE" },
    { text: "“They gave our storefront a complete aesthetic face-lift while integrating flawless cart flows. The new custom website redesign is incredibly beautiful.”", author: "— ELENA G., GENERAL MANAGER OF VITA ORGANICS" },
    { text: "“They designed lifecycle systems that work flawlessly in the background. Our customer lifetime value has grown by 42% with zero discount spam.”", author: "— LAUREN K., CEO OF VELOURA WELLNESS" },
    { text: "“The new website layout and landing pages match our brand direction perfectly. Our mobile store conversion rate rose from 1.8% to 3.2%.”", author: "— ADRIAN T., CREATIVE DIRECTOR OF KAI LUXE" },
    { text: "“MailBench unified our collection drop paths and private VIP campaigns. They are absolute lifecycle masterminds.”", author: "— MARCUS A., GROWTH DIRECTOR OF ARIS FASHION" },
    { text: "“The copy has an extraordinary, authentic human feel that matches our high-end aesthetic beautifully.”", author: "— SOPHIA M., PARTNER AT AMARE APOTHECARY" }
  ];
  let currentIdx = 0;
  const quoteEl = document.getElementById('hero-dynamic-quote');
  const authorEl = document.getElementById('hero-dynamic-author');
  if (quoteEl && authorEl) {
    quoteEl.style.transition = 'opacity 0.4s ease';
    authorEl.style.transition = 'opacity 0.4s ease';
    setInterval(() => {
      quoteEl.style.opacity = '0';
      authorEl.style.opacity = '0';
      setTimeout(() => {
        currentIdx = (currentIdx + 1) % quotes.length;
        quoteEl.innerHTML = quotes[currentIdx].text;
        authorEl.innerHTML = quotes[currentIdx].author;
        quoteEl.style.opacity = '1';
        authorEl.style.opacity = '1';
      }, 400);
    }, 4500);
  }
})();

// Dynamic submit studio inquiry form handler with instant callback response
function submitStudioInquiry(e) {
  if (e) e.preventDefault();

  const nameVal = document.getElementById('inquiry_lead_name').value.trim();
  const emailVal = document.getElementById('inquiry_lead_email').value.trim();

  if (!nameVal || !emailVal) {
    alert("Please complete both your name and email address.");
    return;
  }

  const submitBtn = document.getElementById('inquiry-submit-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Saving Inquiry...</span>';
  }

  const payload = {
    name: nameVal,
    email: emailVal,
    company: "Inquiry Widget",
    industry: "Not Provided",
    serviceInterested: "Bespoke Portfolio Audit",
    biggestChallenge: "Requested bespoke audit via floating trigger form",
    monthlyRevenue: "Not Provided"
  };

  fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    const bodyPane = document.getElementById('studio-inquiry-body');
    if (bodyPane) {
      bodyPane.innerHTML = \`
        <div style="text-align: center; padding: 20px 0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap: 16px;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background:#e6fcf5; border: 1px solid #c3fae8; display:grid; place-items:center; color: #099268;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div style="font-size: 10px; font-weight: 800; letter-spacing: 0.12em; color: #099268; text-transform: uppercase;">Inquiry Received</div>
          <h3 style="font-family: var(--display, Georgia, serif); font-size: 20px; line-height: 1.3; color: #241b16; margin: 0; font-weight: 300;">Thank you, \${escapeHtml(nameVal)}.</h3>
          <p style="font-size: 13px; color: #71665b; margin: 0; line-height: 1.5; max-width: 90%;">
            Your details have been saved securely. We will contact you at <strong>\${escapeHtml(emailVal)}</strong> within 24 hours.
          </p>
          <div style="border-top:1px dashed rgba(80,55,35,0.12); width:100%; margin:8px 0;"></div>
          <p style="font-size: 11px; color: #7b6d5f; font-weight: 500; margin: 0; max-width: 90%;">
            Accelerate your inquiry by checking open booking times:
          </p>
          <button onclick="openCalPopup()" class="lead-submit" style="width:100%; display:flex; align-items:center; justify-content:center; gap:8px; border-radius: 999px; background: #241b16; color: #fff7ef; border:0; padding:12px 18px; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; cursor:pointer; margin-top: 8px;">
            Book Free Discovery Call
          </button>
        </div>
      \`;
    }
  })
  .catch(err => {
    console.error(err);
    alert("Inquiry submission issue. Please retry.");
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Submit Request</span>';
    }
  });
}

// Dynamic submit footer inquiry form handler
function handleFooterInquirySubmit(e) {
  if (e) e.preventDefault();

  const nameVal = document.getElementById('footer_lead_name').value.trim();
  const emailVal = document.getElementById('footer_lead_email').value.trim();
  const phoneVal = document.getElementById('footer_lead_phone').value.trim();
  const typeVal = document.getElementById('footer_lead_type').value;
  const serviceVal = document.getElementById('footer_lead_service').value;
  const messageVal = document.getElementById('footer_lead_message').value.trim();

  if (!nameVal || !emailVal) {
    alert("Please complete both your name and email address.");
    return;
  }

  const submitBtn = document.getElementById('footer-submit-btn');
  const originalHtml = submitBtn ? submitBtn.innerHTML : 'Send Inquiry';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
  }

  const payload = {
    name: nameVal,
    email: emailVal,
    phone: phoneVal || "Not Provided",
    company: "Inquiry Footer Form",
    industry: typeVal || "Not Provided",
    serviceInterested: serviceVal || "Not Provided",
    biggestChallenge: messageVal || "Not Provided",
    monthlyRevenue: "Not Provided"
  };

  fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    const wrapper = document.getElementById('footer-form-wrapper');
    if (wrapper) {
      wrapper.innerHTML = \`
        <div style="text-align: center; padding: 40px 20px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap: 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background:rgba(9,146,104,0.15); border: 1px solid #099268; display:grid; place-items:center; color: #099268;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div style="font-size: 11px; font-weight: 800; letter-spacing: 0.15em; color: #099268; text-transform: uppercase;">Inquiry Submitted Securely</div>
          <h3 style="font-family: var(--display, Georgia, serif); font-size: 24px; line-height: 1.3; color: #ffffff; margin: 0; font-weight: 300;">Thank you, \${escapeHtml(nameVal)}.</h3>
          <p style="font-size: 14px; color: #fff7ef; opacity: 0.8; margin: 0; line-height: 1.6; max-width: 90%;">
            Your details have been saved directly to our secure database. We will evaluate your brand and contact you at <strong>\${escapeHtml(emailVal)}</strong> within 24 hours.
          </p>
          <div style="border-top:1px dashed rgba(255,255,255,0.15); width:100%; margin:12px 0;"></div>
          <p style="font-size: 12px; color: #e8c99f; font-weight: 500; margin: 0;">
            Want to fast-track your briefing? Book your session instantly:
          </p>
          <button onclick="openCalPopup()" class="final-inquiry-submit" style="width:100%; display:flex; align-items:center; justify-content:center; gap:8px; border-radius: 999px; background: #e8c99f; color: #241b16; border:0; padding:12px 18px; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; cursor:pointer; margin-top: 8px;">
            Book Free Discovery Call
          </button>
        </div>
      \`;
    }
  })
  .catch(err => {
    console.error(err);
    alert("Inquiry submission issue. Please retry.");
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHtml;
    }
  });
}

function openLeadPopup() {
  // Empty stub to prevent errors from other components calling legacy links
}
function closeLeadPopup() {
  // Empty stub
}

// Automatically open the side Inquiry Form after 1.5 seconds without touching it
setTimeout(() => {
  const container = document.getElementById('studio-chat-container');
  if (container && !container.classList.contains('show')) {
    container.classList.add('show');
    const input = document.getElementById('inquiry_lead_name');
    if (input && document.activeElement === document.body) {
      input.focus();
    }
  }
}, 1500);

// Close on escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCalPopup();
    const container = document.getElementById('studio-chat-container');
    if (container && container.classList.contains('show')) {
      container.classList.remove('show');
    }
  }
});

function toggleStudioChat() {
  const container = document.getElementById('studio-chat-container');
  if (container) {
    container.classList.toggle('show');
    if (container.classList.contains('show')) {
      const input = document.getElementById('inquiry_lead_name');
      if (input) input.focus();
    }
  }
}

function sendQuickTip(tipText) {
  const input = document.getElementById('studio-chat-input');
  if (input) {
    input.value = tipText;
    sendChatMessage();
  }
}

function handleChatKeyDown(e) {
  if (e.key === 'Enter') {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const inputEl = document.getElementById('studio-chat-input');
  const sendBtn = document.getElementById('studio-chat-send-btn');
  if (!inputEl || !sendBtn) return;

  const text = inputEl.value.trim();
  if (!text) return;

  // Clear input
  inputEl.value = '';
  inputEl.disabled = true;
  sendBtn.disabled = true;

  // Add User bubble
  appendChatBubble('user', text);
  studioChatHistory.push({ role: 'user', content: text });

  // Add Typing ticker
  const typingId = appendTypingIndicator();

  // Call server POST /api/chat
  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: studioChatHistory })
  })
  .then(res => res.json())
  .then(data => {
    removeTypingIndicator(typingId);
    inputEl.disabled = false;
    sendBtn.disabled = false;
    inputEl.focus();

    if (data.reply) {
      appendChatBubble('ai', data.reply);
      studioChatHistory.push({ role: 'assistant', content: data.reply });
    } else {
      appendChatBubble('ai', "My strategy core is currently updating. Please feel free to schedule a personal discovery session via our Booking calendar or submit an inquiry via the bespoke evaluation form.");
    }
  })
  .catch(err => {
    console.error(err);
    removeTypingIndicator(typingId);
    inputEl.disabled = false;
    sendBtn.disabled = false;
    appendChatBubble('ai', "Apologies. I experienced a slight signal interdiction. Please secure a personal discovery session via the live schedule.");
  });
}

function appendChatBubble(role, rawText) {
  const messagesPane = document.getElementById('studio-chat-messages');
  if (!messagesPane) return;

  const bubble = document.createElement('div');
  bubble.className = "studio-chat-bubble " + (role === 'user' ? 'user' : 'ai');
  
  // Parse for suggestion options formatted as [Suggest: Opt 1 | Opt 2 | Opt 3]
  let suggestions = [];
  const suggestRegex = /\\x5BSuggest:\\s*(.*?)\\x5D/i;
  const match = rawText.match(suggestRegex);
  let cleanText = rawText;
  if (match) {
    cleanText = rawText.replace(suggestRegex, '').trim();
    const parts = match[1].split('|');
    for (let p of parts) {
      const optionText = p.trim();
      if (optionText) {
        suggestions.push(optionText);
      }
    }
  }

  // Custom elegant parsing for links [text](url) and bolding **text**
  let processedText = escapeHtml(cleanText);
  processedText = processedText.replace(/\\x5B([^\\x5D]+)\\x5D\\x28([^\\x29]+)\\x29/g, '<a href="$2" target="_blank" style="color: #e9b98f; text-decoration: underline; font-weight: 600;">$1</a>');
  processedText = processedText.replace(/[*][*]([^*]+)[*][*]/g, '<strong>$1</strong>');
  processedText = processedText.replace(/[*]([^*]+)[*]/g, '<em>$1</em>');
  // Support linebreaks gracefully
  processedText = processedText.replace(/\\n/g, '<br/>');

  bubble.innerHTML = processedText;
  messagesPane.appendChild(bubble);

  if (role === 'ai' && suggestions.length > 0) {
    const optionsContainer = document.createElement('div');
    optionsContainer.style.display = 'flex';
    optionsContainer.style.flexWrap = 'wrap';
    optionsContainer.style.gap = '8px';
    optionsContainer.style.marginTop = '10px';
    optionsContainer.style.marginBottom = '14px';
    optionsContainer.style.paddingLeft = '6px';
    
    for (let opt of suggestions) {
      const btn = document.createElement('button');
      btn.innerText = opt;
      btn.style.background = '#fff';
      btn.style.border = '1px solid rgba(80,55,35,0.18)';
      btn.style.color = '#503723';
      btn.style.borderRadius = '20px';
      btn.style.padding = '8px 14px';
      btn.style.fontSize = '12px';
      btn.style.cursor = 'pointer';
      btn.style.transition = 'all 0.2s';
      btn.style.fontFamily = 'inherit';
      btn.style.fontWeight = '500';
      btn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
      
      btn.onmouseenter = () => {
        btn.style.background = '#fcf8f2';
        btn.style.borderColor = 'rgba(80,55,35,0.35)';
        btn.style.transform = 'translateY(-1px)';
      };
      btn.onmouseleave = () => {
        btn.style.background = '#fff';
        btn.style.borderColor = 'rgba(80,55,35,0.18)';
        btn.style.transform = 'none';
      };
      
      btn.onclick = () => {
        const inputEl = document.getElementById('studio-chat-input');
        if (inputEl) {
          inputEl.value = opt;
          // Disable all buttons in this container to prevent multiple submits
          const siblingBtns = optionsContainer.querySelectorAll('button');
          siblingBtns.forEach(b => {
             b.disabled = true;
             b.style.opacity = '0.5';
             b.style.pointerEvents = 'none';
          });
          sendChatMessage();
        }
      };
      optionsContainer.appendChild(btn);
    }
    messagesPane.appendChild(optionsContainer);
  }

  // Smooth scroll
  messagesPane.scrollTo({
    top: messagesPane.scrollHeight,
    behavior: 'smooth'
  });
}

function appendTypingIndicator() {
  const messagesPane = document.getElementById('studio-chat-messages');
  if (!messagesPane) return null;

  const indicatorId = 'typing-' + Date.now();
  const bubble = document.createElement('div');
  bubble.className = 'studio-chat-bubble ai';
  bubble.id = indicatorId;
  bubble.innerHTML = '<div class="studio-typing-indicator"><div class="studio-typing-dot"></div><div class="studio-typing-dot"></div><div class="studio-typing-dot"></div></div>';
  messagesPane.appendChild(bubble);
  messagesPane.scrollTo({
    top: messagesPane.scrollHeight,
    behavior: 'smooth'
  });
  return indicatorId;
}

function removeTypingIndicator(id) {
  if (!id) return;
  const indicator = document.getElementById(id);
  if (indicator) {
    indicator.remove();
  }
}

// CAL.COM EMBED POPUP UTILITIES
function openCalPopup() {
  closeLeadPopup();
  const overlay = document.getElementById('cal-popup-overlay');
  const iframe = document.getElementById('cal-iframe');
  
  if (overlay && iframe) {
    // Lazy-load the iframe only when clicked
    if (iframe.src === 'about:blank' || !iframe.src) {
      iframe.src = 'https://cal.com/kavya-lifecycle/30min';
    }
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeCalPopup() {
  const overlay = document.getElementById('cal-popup-overlay');
  if (overlay) {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function closeCalPopupOnOverlay(e) {
  if (e.target.id === 'cal-popup-overlay') {
    closeCalPopup();
  }
}

function triggerCalClickFromPopup() {
  openCalPopup();
}

// Intercept all old Cal.com booking link clicks to point seamlessly to our dynamic in-page modal
document.querySelectorAll('a[href*="cal.com"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    openCalPopup();
  });
});

// Mailto links are handled directly via native HTML anchors using target="_top" to bypass sandbox limitations elegantly

// AJAX LEAD INQUIRY HANDLER
function handleLeadSubmit(e) {
  e.preventDefault();
  
  const nameVal = document.getElementById('lead_name').value;
  const emailVal = document.getElementById('lead_email').value;
  const companyVal = document.getElementById('lead_company').value;
  const industryVal = document.getElementById('lead_industry').value;
  const serviceVal = document.getElementById('lead_service').value;
  const challengeVal = document.getElementById('lead_challenge').value;
  const revenueVal = document.getElementById('lead_revenue').value;
  
  const payload = {
    name: nameVal,
    email: emailVal,
    company: companyVal,
    industry: industryVal,
    serviceInterested: serviceVal,
    biggestChallenge: challengeVal,
    monthlyRevenue: revenueVal || "Not Provided"
  };
  
  // Transition submit button state instantly
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalHtml = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = "<span>Sending...</span>";
  
  fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      // Transition popup form to Majestic Success state beautifully
      const contentPane = document.getElementById('lead-popup-body-content');
      contentPane.innerHTML = \`
        <button class="lead-popup-close" onclick="closeLeadPopup()" style="position: absolute; right: 18px; top: 18px; border: 0; width: 30px; height: 30px; border-radius: 50%; background: #241b16; color: white; cursor: pointer; font-size: 18px; display: grid; place-items: center; transition: all 0.2s;">×</button>
        <div style="text-align: center; padding: 10px 0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap: 14px;">
          <div style="width: 50px; height: 50px; border-radius: 50%; background:#e6fcf5; border: 1px solid #c3fae8; display:grid; place-items:center; color: #099268;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="lead-eyebrow" style="margin-bottom:0; font-size:9px; color:#099268;">SUBMISSION SUCCESSFUL</div>
          <h2 style="font-family: var(--display, Georgia, serif); font-size: 22px; line-height: 1.25; color: #241b16; margin: 0 0 4px 0; font-weight: 300;">Thank you. Your request has been received.</h2>
          <p style="font-size: 13px; color: #71665b; margin: 0 0 12px 0; line-height: 1.5; max-width: 90%;">
            Thank you, <strong>\${escapeHtml(nameVal)}</strong>! We have received your inquiry for <strong>\${escapeHtml(companyVal)}</strong>. A comprehensive retention brief has been delivered.
          </p>
          <div style="border-top:1px dashed rgba(80,55,35,0.15); width:80%; margin:4px 0;"></div>
          <p style="font-size: 12px; color: #7b6d5f; font-weight: 500; margin: 4px 0; max-width: 90%;">
            Accelerate your strategic onboarding by scheduling a call with Kavya right now:
          </p>
          <div style="width:100%; margin-top:8px;">
            <button onclick="openCalPopup()" class="lead-submit" style="width:100%; display:flex; align-items:center; justify-content:center; gap:8px; border-radius: 999px; background: #241b16; color: #fff7ef; border:0; padding:12px 18px; font-weight:800; cursor:pointer;">
              Book a Free Discovery Call
            </button>
          </div>
        </div>
      \`;
    } else {
      alert("Inquiry dispatch failed: " + (data.error || "Server issue."));
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHtml;
    }
  })
  .catch(err => {
    console.error(err);
    alert("Network request failed. Please check connection.");
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHtml;
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// Anonymous visitor analytic telemetry tracker
(function() {
  const page = window.location.pathname;
  let referrer = "Direct";
  try {
    if (document.referrer) {
      referrer = new URL(document.referrer).hostname || "Direct";
    }
  } catch(e) {}
  
  let device = "Desktop";
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) device = "Tablet";
  else if (/mobile|iphone|ipod|android|blackberry/i.test(ua)) device = "Mobile";

  // GDPR compliant anonymous geo country tracker
  fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(data => {
      const country = data.country_name || "United States";
      submitHit(country);
    })
    .catch(() => {
      submitHit("United States");
    });

  function submitHit(country) {
    fetch('/api/analytics', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page,
        referrer,
        device,
        country
      })
    }).catch(e => console.error(e));
  }
})();

</script>
</body>
</html>`;
