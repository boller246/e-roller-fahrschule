// V1.9 – echte hochgeladene Grafiken verwenden
(function(){
  const css=document.createElement('style');
  css.textContent=`
    .mh-brand-art{display:block;width:min(520px,58vw);height:auto;max-height:105px;object-fit:contain;object-position:left center;border-radius:10px}
    .mh-reaper.real-art{object-fit:contain!important;filter:none!important;width:48%!important;height:auto!important;right:3%!important;top:185px!important;border-radius:14px}
    .mh-warn{display:none!important}
    @media(max-width:760px){
      .mh-brand-art{width:min(330px,48vw);max-height:82px}
      .mh-reaper.real-art{width:54%!important;right:4%!important;top:205px!important;height:auto!important}
    }
    @media(max-width:430px){
      .mh-brand-art{width:46vw;max-height:72px}
      .mh-reaper.real-art{width:58%!important;right:5%!important;top:220px!important;height:auto!important}
    }
  `;
  document.head.appendChild(css);

  const previousHome=window.home;
  window.home=function(){
    previousHome();
    const reaper=document.querySelector('.mh-reaper');
    if(reaper){reaper.src='sensenmann.png?v=19';reaper.classList.add('real-art');}
    const brand=document.querySelector('.mh-brand');
    if(brand){brand.innerHTML='<img class="mh-brand-art" src="boller-header.png?v=19" alt="Boller’s E-Roller Fahrschule – Sterben auf eigene Verantwortung">';}
  };
  if((location.hash.slice(1)||'home')==='home') window.home();
})();