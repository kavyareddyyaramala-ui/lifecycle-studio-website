(()=>{'use strict';
const popup=document.getElementById('mb-timed-inquiry'),form=document.getElementById('mb-timed-form');if(!popup||!form||typeof popup.showModal!=='function')return;
const ARRIVED='mb-visit-start-v2',SHOWN='mb-inquiry-shown-v2';let memoryShown=false,opener=null;
const read=key=>{try{return sessionStorage.getItem(key)}catch{return null}};
const write=(key,value)=>{try{sessionStorage.setItem(key,value)}catch{}};
let started=Number(read(ARRIVED));if(!started||started>Date.now()){started=Date.now();write(ARRIVED,String(started));}
const wasShown=()=>memoryShown||read(SHOWN)==='yes';
function maybeOpen(){if(wasShown())return;const left=10000-(Date.now()-started);if(left>0){setTimeout(maybeOpen,left);return;}
if(document.visibilityState!=='visible'||document.querySelector('dialog[open]')||document.activeElement?.matches('input,textarea,select')){setTimeout(maybeOpen,2000);return;}
opener=document.activeElement;popup.showModal();memoryShown=true;write(SHOWN,'yes');document.documentElement.classList.add('mb-popup-open');}
function close(){popup.close();}
popup.querySelector('.mb-timed-close').addEventListener('click',close);popup.querySelector('.mb-timed-later').addEventListener('click',close);
popup.addEventListener('close',()=>{document.documentElement.classList.remove('mb-popup-open');opener?.focus?.();});
popup.addEventListener('click',event=>{if(event.target===popup){const r=popup.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();}});
form.addEventListener('submit',async event=>{event.preventDefault();if(!form.reportValidity())return;const status=document.getElementById('mb-popup-status'),button=form.querySelector('[type="submit"]'),fields=Object.fromEntries(new FormData(form));if(fields.website)return;
const payload={name:String(fields.name||'').trim(),company:String(fields.company||'').trim(),email:String(fields.email||'').trim(),website:'',source:'timed-website-popup'};
if(document.documentElement.dataset.popupMode==='preview'){status.textContent='Review preview: this form is not connected to email delivery yet. The production version sends to services@mail-bench.com.';return;}
button.disabled=true;status.textContent='Sending your details…';const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),20000);
try{const response=await fetch('/api/popup-inquiries',{method:'POST',headers:{'Content-Type':'application/json'},credentials:'same-origin',body:JSON.stringify(payload),signal:controller.signal});const result=await response.json().catch(()=>({}));if(!response.ok||result.delivered!==true)throw new Error('Not delivered');status.textContent='Thank you. Your details have been sent to MailBench.';form.reset();button.textContent='Details sent ✓';}
catch{status.replaceChildren(document.createTextNode('We could not send your details. Please try again or email '));const link=document.createElement('a');link.href='mailto:services@mail-bench.com';link.textContent='services@mail-bench.com';status.append(link);button.disabled=false;}finally{clearTimeout(timeout);}});
maybeOpen();
})();
