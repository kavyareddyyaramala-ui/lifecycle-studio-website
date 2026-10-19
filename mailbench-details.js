(()=>{const dialog=document.getElementById('dt-detail-dialog'),content=document.getElementById('dt-detail-content');let opener;
document.addEventListener('click',e=>{const button=e.target.closest('button');if(button?.dataset.detail){const source=document.getElementById('detail-'+button.dataset.detail);if(!source)return;opener=button;content.replaceChildren(source.content.cloneNode(true));document.getElementById('dt-dialog-title').textContent=content.querySelector('h2')?.textContent||'Explore MailBench';dialog.showModal();dialog.scrollTop=0;document.documentElement.classList.add('dt-dialog-open');}if(button?.classList.contains('dt-close'))dialog.close();if(e.target===dialog){const box=dialog.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.documentElement.classList.remove('dt-dialog-open');opener?.focus();});})();
// The audience gallery keeps all four designs for the selected business type visible.
(()=>{const select=document.getElementById('ac-audience-select');if(select){const update=()=>{let count=0;document.querySelectorAll('.ac-gallery-grid [data-ac-audience]').forEach(card=>{const show=card.dataset.acAudience===select.value;card.hidden=!show;if(show)count++;});document.getElementById('ac-count').textContent=count+' concepts · '+select.options[select.selectedIndex].textContent;};select.addEventListener('change',update);update();}
const dialog=document.getElementById('af-template-dialog');let trigger;
document.addEventListener('click',event=>{const button=event.target.closest('button[data-template]');if(button)trigger=button;},true);
dialog?.addEventListener('close',()=>trigger?.focus());
dialog?.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
})();
