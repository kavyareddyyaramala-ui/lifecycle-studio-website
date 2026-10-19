// Restore MailBench's public directories after a browser upload flattened the files.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = __dirname;
const assets = [
  {
    "path": "images/concepts/carrots.jpg",
    "sha256": "823239c57be54c0466903b980fb2a57a621895ef0fae7ce4c674eb14bb2aab17"
  },
  {
    "path": "images/concepts/clothing.jpg",
    "sha256": "150f5f7930b6b462535a99541ede8009b37e4e9e653c0c06ddf56ad066a2afdc"
  },
  {
    "path": "images/concepts/collaboration.jpg",
    "sha256": "423e2b15acd1aec6ad8247af029f68c91839469945838d431a212fcabe63c3e2"
  },
  {
    "path": "images/concepts/food.jpg",
    "sha256": "8ae2e7933b887ae0bc44fcb85a1ccdc77397142eb3990f3c2011915cad855f97"
  },
  {
    "path": "images/concepts/home.jpg",
    "sha256": "6f22c948db9f8a90b74a91ce1586eff04e394cf945579d8e6de0fb647aca3fc7"
  },
  {
    "path": "images/concepts/market.jpg",
    "sha256": "34965f865ff48fdeaccd25637c55da685160fa4d85f5ed19b7ec19cd3ac0f924"
  },
  {
    "path": "images/concepts/meeting.jpg",
    "sha256": "bc4af2bc134c9db9ae1caa4f776f7bc89db949444cddfa8e369e96ab82499542"
  },
  {
    "path": "images/concepts/portrait.jpg",
    "sha256": "570967bc8f39464cca7276d0738b6c3d649627793e9cad772ac16d82c4a2a99a"
  },
  {
    "path": "images/concepts/workspace.jpg",
    "sha256": "1cf22a07db3ffa05e3be882c64558c5289f89cee12bc9f63fef98159e4ac29f7"
  },
  {
    "path": "images/industries/real-beauty.jpg",
    "sha256": "f7336bbf517b22759daeab4f5dc22b8fe94de1fe3045676878aed852ef95e706"
  },
  {
    "path": "images/industries/real-fashion.jpg",
    "sha256": "c399049f041768aa84713278829c1861aa6ecfc86f6014f54c9c662e0d8d1784"
  },
  {
    "path": "images/industries/real-luxury.jpg",
    "sha256": "2addfde3acf189640414c11a73edb94f1dce406a773faa254f68ede88d5a0196"
  },
  {
    "path": "images/industries/real-services.jpg",
    "sha256": "2fd698a59c324005e9eb87747660b684cad81be71772ba93b20b618866bc846c"
  },
  {
    "path": "images/industries/real-wellness.jpg",
    "sha256": "d7b08f4002b1c44927a066de9c010fb4d360feead6bb6f55064e87369cc3b0e5"
  },
  {
    "path": "images/kavya-reddy.png",
    "sha256": "cd18d982c81e903eba0557a6cea71326f325bf8a156bcf34c51bfbc1c0825021"
  },
  {
    "path": "mailbench-details.css",
    "sha256": "4c16f8b9b840b12d1d5b884d64384c302f625dbc428762284ba90cb45825045b"
  },
  {
    "path": "mailbench-details.js",
    "sha256": "ea9ac91f380dd3bbeae8e58ac315663153fb469b4d20670ac18220f00b493a46"
  },
  {
    "path": "mailbench-logo.svg",
    "sha256": "602e6a5129aec12cbf8bf819063056f0460675f3ac1acc523f2e703462501896"
  },
  {
    "path": "mailbench-popup.js",
    "sha256": "dec4dd4187f981e34c44ace58fd967fca58fa1dd14e3a1156b713836353f173c"
  },
  {
    "path": "mailbench.css",
    "sha256": "cd0c11b91217ee08b08b1f44f03d211b5e30895b725e0a33f498999e67b53a30"
  },
  {
    "path": "mailbench.js",
    "sha256": "b566a3c9732781170b5108b0a916c22e2efb9edee28912ed35494f03bc9f933a"
  },
  {
    "path": "photo-sources.json",
    "sha256": "6e1e38c16402b7564ca11e25027074e597fad58e3036fdcc5ba5637bcbb93140"
  },
  {
    "path": "portfolio-anonymous/email-1-1.jpg",
    "sha256": "8669870352d7c73eb4a8f1a567aa5844de1953ff6a0c6efcad6dea5033727e31"
  },
  {
    "path": "portfolio-anonymous/email-1-2.jpg",
    "sha256": "fd0ad68f3bbe712eb162b1dda7d4eda13940e5d59a53e253cf6ce402f8a6c500"
  },
  {
    "path": "portfolio-anonymous/email-1-3.jpg",
    "sha256": "91d8e5aeec1182b9024434fd62fc91958ce0e5fb49932b7222ee4c95992809c3"
  },
  {
    "path": "portfolio-anonymous/email-1-4.jpg",
    "sha256": "eff63c944809bcb1805640e956e1eb2528cb06657fef794aa8ae333de0a97e03"
  },
  {
    "path": "portfolio-anonymous/email-2-1.jpg",
    "sha256": "cb9428842af16c625a9067ecf6ce314170be79c0de2442d8fea9ce78482fc5da"
  },
  {
    "path": "portfolio-anonymous/email-2-2.jpg",
    "sha256": "58e834ee61a6a99adf09b2678bd46a8820d942a72b2aae3e9da6247d77a809de"
  },
  {
    "path": "portfolio-anonymous/email-2-3.jpg",
    "sha256": "e21e589306280937af1d3a9766082f311e5f3daff64003de35a662092a1d2c6c"
  },
  {
    "path": "portfolio-anonymous/email-2-4.jpg",
    "sha256": "73132ceb86019a6caee8c08d7471b9c088cd49b316bb0794eb2893e2c4ca5f49"
  },
  {
    "path": "portfolio-anonymous/email-3-1.jpg",
    "sha256": "4deb66154ecb1a141bc99fbe0f50fcb6cedbed53a8d2bb1cff7e26c0f1c1f176"
  },
  {
    "path": "portfolio-anonymous/email-3-2.jpg",
    "sha256": "0d7b748941d7be8bf37511b34e5cc751a0f1710a6fedc11555c77281f784434e"
  },
  {
    "path": "portfolio-anonymous/email-3-3.jpg",
    "sha256": "c9789958b5e20d846595e0ece2e42674fa560cb11b419f83591f33416b7ce4db"
  },
  {
    "path": "portfolio-anonymous/email-3-4.jpg",
    "sha256": "ad43c6f96e65ee586c95f3e74e139119e2cbde67617225c8e2025a5a526fe1f6"
  },
  {
    "path": "portfolio-anonymous/email-4-1.jpg",
    "sha256": "78aa5c3c56ac796f84b284d8d22f1372f3a1b7371e2d4c2490091126f31d110a"
  },
  {
    "path": "portfolio-anonymous/email-4-2.jpg",
    "sha256": "2570c1d8888d5fcc15d5ee3d4e67a8f47d316655a9422413313ac3a5bd84a491"
  },
  {
    "path": "portfolio-anonymous/email-4-3.jpg",
    "sha256": "2fb8e7cb7d72ea3f2f9dfe809d110074ecbc72815ef20a9d8624b85bf3b4cc9e"
  }
];
const prepared = assets.map(asset => {
  const target = path.join(root, 'public', asset.path);
  const choices = [target, path.join(root, path.basename(asset.path))];
  const source = choices.find(file => fs.existsSync(file) && crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex') === asset.sha256);
  if (!source) throw new Error('Missing or changed MailBench asset: ' + asset.path + '. Restore it from the v35 ZIP before deploying.');
  return { source, target };
});
for (const {source,target} of prepared) {
  fs.mkdirSync(path.dirname(target), { recursive:true });
  if (source !== target) fs.copyFileSync(source,target);
}
fs.writeFileSync(path.join(root,'public','robots.txt'), "User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: https://www.mailbenchagency.com/sitemap.xml\n");
fs.writeFileSync(path.join(root,'public','sitemap.xml'), "<?xml version=\"1.0\" encoding=\"UTF-8\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"><url><loc>https://www.mailbenchagency.com/</loc></url><url><loc>https://www.mailbenchagency.com/sms-marketing-agency</loc></url><url><loc>https://www.mailbenchagency.com/who-we-help</loc></url><url><loc>https://www.mailbenchagency.com/email-marketing-agency</loc></url><url><loc>https://www.mailbenchagency.com/email-automation-agency</loc></url><url><loc>https://www.mailbenchagency.com/lifecycle-marketing-agency</loc></url><url><loc>https://www.mailbenchagency.com/our-work</loc></url><url><loc>https://www.mailbenchagency.com/retention-marketing-agency</loc></url><url><loc>https://www.mailbenchagency.com/about-us</loc></url><url><loc>https://www.mailbenchagency.com/email-marketing-audit</loc></url><url><loc>https://www.mailbenchagency.com/email-campaign-strategy</loc></url><url><loc>https://www.mailbenchagency.com/email-copy-design</loc></url><url><loc>https://www.mailbenchagency.com/website-design</loc></url></urlset>");
console.log('MailBench: restored ' + assets.length + ' public assets and the 13-page SEO sitemap.');

// Show the inquiry popup after ten seconds on every new page load.
fs.writeFileSync(path.join(root, "public", "mailbench-popup.js"), "(()=>{'use strict';\nconst popup=document.getElementById('mb-timed-inquiry'),form=document.getElementById('mb-timed-form');if(!popup||!form||typeof popup.showModal!=='function')return;\nlet memoryShown=false,opener=null;const started=Date.now();const wasShown=()=>memoryShown;\nfunction maybeOpen(){if(wasShown())return;const left=10000-(Date.now()-started);if(left>0){setTimeout(maybeOpen,left);return;}\nif(document.visibilityState!=='visible'||document.querySelector('dialog[open]')||document.activeElement?.matches('input,textarea,select')){setTimeout(maybeOpen,2000);return;}\nopener=document.activeElement;popup.showModal();memoryShown=true;document.documentElement.classList.add('mb-popup-open');}\nfunction close(){popup.close();}\npopup.querySelector('.mb-timed-close').addEventListener('click',close);popup.querySelector('.mb-timed-later').addEventListener('click',close);\npopup.addEventListener('close',()=>{document.documentElement.classList.remove('mb-popup-open');opener?.focus?.();});\npopup.addEventListener('click',event=>{if(event.target===popup){const r=popup.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();}});\nform.addEventListener('submit',async event=>{event.preventDefault();if(!form.reportValidity())return;const status=document.getElementById('mb-popup-status'),button=form.querySelector('[type=\"submit\"]'),fields=Object.fromEntries(new FormData(form));if(fields.website)return;\nconst payload={name:String(fields.name||'').trim(),company:String(fields.company||'').trim(),email:String(fields.email||'').trim(),website:'',source:'timed-website-popup'};\nif(document.documentElement.dataset.popupMode==='preview'){status.textContent='Review preview: this form is not connected to email delivery yet. The production version sends to services@mail-bench.com.';return;}\nbutton.disabled=true;status.textContent='Sending your details\u2026';const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),20000);\ntry{const response=await fetch('/api/popup-inquiries',{method:'POST',headers:{'Content-Type':'application/json'},credentials:'same-origin',body:JSON.stringify(payload),signal:controller.signal});const result=await response.json().catch(()=>({}));if(!response.ok||result.delivered!==true)throw new Error('Not delivered');status.textContent='Thank you. Your details have been sent to MailBench.';form.reset();button.textContent='Details sent \u2713';}\ncatch{status.replaceChildren(document.createTextNode('We could not send your details. Please try again or email '));const link=document.createElement('a');link.href='mailto:services@mail-bench.com';link.textContent='services@mail-bench.com';status.append(link);button.disabled=false;}finally{clearTimeout(timeout);}});\nmaybeOpen();\n})();\n");

const serverFile = path.join(root, 'server.ts');
if (fs.existsSync(serverFile)) {
  let code = fs.readFileSync(serverFile, 'utf8');
  code = code.replace('process.env.SMTP_PASS || process.env.EMAIL_PASS || ""', 'process.env.SMTP_PASS || process.env.SMTP_PASSWORD || process.env.EMAIL_PASS || ""');
  if (!code.includes('connectionTimeout: 10000')) code = code.replace('const transporter = nodemailer.createTransport({', 'const transporter = nodemailer.createTransport({\n  connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,');
  fs.writeFileSync(serverFile, code);
}
console.log('MailBench: popup now opens after 10 seconds on each new page load; contact SMTP timeout configured.');
