// V1.6 – lokale Hero-Grafiken statt Emoji-/Remote-Platzhalter
(function(){
  const css=document.createElement('style');
  css.textContent=`
    .hero-reaper{right:1.5%!important;top:76px!important;width:47%!important;height:330px!important;opacity:1!important;filter:drop-shadow(0 12px 18px rgba(0,0,0,.85))!important}
    .hero-reaper img{width:100%;height:100%;object-fit:contain;display:block}
    .hero-vz350{width:94px!important;padding:7px!important;bottom:34px!important;right:18px!important;background:#f7f7f7!important}
    .hero-vz350 img{width:100%;display:block}
    .hero-warning-sign{right:4%!important;bottom:145px!important;top:auto!important}
    @media(max-width:760px){
      .boller-hero{min-height:575px!important}
      .hero-reaper{width:72%!important;right:-9%!important;top:180px!important;height:300px!important}
      .hero-warning-sign{right:3%!important;bottom:122px!important}
      .hero-vz350{width:82px!important;right:10px!important;bottom:24px!important}
      .boller-warning{margin-top:300px!important;max-width:86%!important}
    }
    @media(max-width:430px){
      .boller-hero{min-height:610px!important}
      .hero-reaper{width:78%!important;right:-13%!important;top:198px!important;height:300px!important}
      .boller-warning{margin-top:318px!important}
    }
  `;
  document.head.appendChild(css);
  const previousHome=window.home;
  window.home=function(){
    previousHome();
    const hero=document.querySelector('.boller-hero');
    if(!hero)return;
    const oldReaper=hero.querySelector('.hero-reaper');
    if(oldReaper) oldReaper.innerHTML='<img src="reaper.svg" alt="Sensenmann auf E-Roller">';
    const z=hero.querySelector('.hero-vz350');
    if(z) z.innerHTML='<img src="zeichen350.svg" alt="Zeichen 350 Fußgängerüberweg"><b>ZEICHEN 350</b>';
  };
  if((location.hash.slice(1)||'home')==='home') window.home();
})();