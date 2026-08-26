// V2.0 – Startseite mit sensenmann2.png, Admin in den Fuß, lokales Zeichen 350
(function(){
  const css=document.createElement('style');
  css.textContent=`
    .mh-hero.hero-image-only{min-height:0!important;height:auto!important;padding:0!important;background:#050505!important;box-shadow:none!important;border-color:#6b4f21!important;overflow:hidden!important}
    .mh-hero-image{display:block;width:100%;height:auto;object-fit:contain;background:#050505}
    .mh-footer-admin{margin:18px 0 82px;text-align:center;font-size:12px;opacity:.62}
    .mh-footer-admin a{color:#aaa;text-decoration:none;border-bottom:1px dotted #666;padding:4px 8px}
    .mh-top-actions .mh-admin{display:none!important}
    .local-b350{height:160px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px}
    .local-b350 img{display:block;max-width:132px;max-height:132px;width:auto;height:auto;object-fit:contain;filter:drop-shadow(0 5px 8px rgba(0,0,0,.22))}
    .local-b350 span{font-size:11px;color:var(--muted);font-weight:700}
    .local-b350.official-sign-large{height:205px}
    .local-b350.official-sign-large img{max-width:175px;max-height:175px}
    @media(max-width:760px){
      .mh-top{align-items:center!important}
      .mh-top-actions{flex-direction:row!important;margin-left:auto}
      .mh-brand{display:none!important}
      .mh-sub{display:none!important}
      .mh-hero.hero-image-only{border-radius:18px!important}
      .local-b350{height:138px}.local-b350 img{max-width:112px;max-height:112px}
      .local-b350.official-sign-large{height:185px}.local-b350.official-sign-large img{max-width:155px;max-height:155px}
    }
  `;
  document.head.appendChild(css);

  // Zeichen 350 in Lern- und Übungsfragen immer aus der lokalen PNG-Datei laden.
  const previousSignMarkup=window.signMarkup;
  window.signMarkup=function(type,large=false){
    if(type==='zebra'){
      return `<div class="local-b350 ${large?'official-sign-large':''}"><img src="b350.png?v=20" alt="Zeichen 350 – Fußgängerüberweg"><span>Zeichen 350</span></div>`;
    }
    return previousSignMarkup ? previousSignMarkup(type,large) : '<div class="official-sign-fallback">🚦</div>';
  };

  const previousHome=window.home;
  window.home=function(){
    previousHome();

    const hero=document.querySelector('.mh-hero');
    if(hero){
      hero.classList.add('hero-image-only');
      hero.innerHTML='<img class="mh-hero-image" src="sensenmann2.png?v=20" alt="Boller’s E-Roller Fahrschule – Sterben auf eigene Verantwortung">';
    }

    // Admin oben entfernen; Installieren-Button bleibt sichtbar.
    document.querySelector('.mh-top .mh-admin')?.remove();

    // Admin unauffällig in den Fußbereich verlagern.
    const mh=document.querySelector('.mh');
    const nav=document.querySelector('.mh-nav');
    if(mh && nav && !document.querySelector('.mh-footer-admin')){
      const footer=document.createElement('div');
      footer.className='mh-footer-admin';
      footer.innerHTML='<a href="admin.html">Admin 🔒</a>';
      mh.insertBefore(footer,nav.nextSibling);
    }
  };

  if((location.hash.slice(1)||'home')==='home') window.home();
})();