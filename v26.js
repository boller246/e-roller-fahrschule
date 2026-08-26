// V2.6 – Update-Knopf fliegt beim Start rein + sichtbare Versionsnummer
(function(){
const VERSION='V2.6';
const css=document.createElement('style');css.textContent=`
@keyframes gudeFlyIn{0%{transform:translateX(120vw) rotate(7deg);opacity:0}65%{transform:translateX(-18px) rotate(-2deg);opacity:1}82%{transform:translateX(8px) rotate(1deg)}100%{transform:translateX(0) rotate(0);opacity:1}}
.gude-fly{position:fixed;z-index:99998;right:14px;top:max(18px,env(safe-area-inset-top));padding:13px 17px;border:2px solid #ffbf19;border-radius:999px;background:#111;color:#ffbf19;font-weight:1000;font-size:15px;box-shadow:0 10px 35px #000;animation:gudeFlyIn .85s cubic-bezier(.2,.9,.2,1.15) both;cursor:pointer}.gude-fly:active{transform:scale(.96)}
.app-version-mark{text-align:center;margin:18px 0 92px;color:#777;font-size:11px;letter-spacing:.12em}.app-version-mark strong{color:#999}
`;document.head.appendChild(css);
async function hardRefresh(btn){btn.disabled=true;btn.textContent='Wird frisch gemacht… 🛠️';try{if('serviceWorker'in navigator){const regs=await navigator.serviceWorker.getRegistrations();await Promise.all(regs.map(r=>r.unregister()))}if('caches'in window){const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)))}}catch(e){}location.replace(location.pathname+'?fresh='+Date.now()+'#home')}
function flyButton(){document.getElementById('gudeFly26')?.remove();const b=document.createElement('button');b.id='gudeFly26';b.className='gude-fly';b.textContent='Gude du Opfer 😎';b.title='App vollständig aktualisieren';b.onclick=()=>hardRefresh(b);document.body.appendChild(b);setTimeout(()=>{if(document.getElementById('gudeFly26')){b.style.transition='opacity .35s';b.style.opacity='.82'}},4200)}
function versionFooter(){if((location.hash.slice(1)||'home')!=='home')return;const host=document.querySelector('.mh')||document.getElementById('app');if(!host||document.getElementById('appVersionMark'))return;const d=document.createElement('div');d.id='appVersionMark';d.className='app-version-mark';d.innerHTML=`BOLLER'S E-ROLLER FAHRSCHULE · <strong>${VERSION}</strong>`;host.appendChild(d)}
const oldHome=window.home;if(typeof oldHome==='function')window.home=function(){oldHome();setTimeout(versionFooter,0)};
window.addEventListener('hashchange',()=>setTimeout(versionFooter,0));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{flyButton();setTimeout(versionFooter,50)});else{flyButton();setTimeout(versionFooter,50)}
})();