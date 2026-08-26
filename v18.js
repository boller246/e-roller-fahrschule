// V1.8 – Installieren-Button auf Startseite + Sensenmann kleiner/mittiger
(function(){
  const css=document.createElement('style');
  css.textContent=`
    .mh-top-actions{display:flex;gap:10px;align-items:center}
    .mh-install{border:1px solid #d9a400;border-radius:18px;padding:12px 16px;color:#111;background:#ffbf19;font-weight:900;font-size:clamp(14px,2.4vw,22px);cursor:pointer;white-space:nowrap}
    .mh-install:active{transform:translateY(1px)}
    @media(max-width:760px){
      .mh-top{align-items:flex-start;gap:8px}
      .mh-top-actions{flex-direction:column;align-items:stretch;gap:8px}
      .mh-admin,.mh-install{font-size:16px;padding:10px 12px;text-align:center}
      .mh-reaper{width:52%!important;right:7%!important;top:180px!important;height:49%!important;object-fit:contain!important}
    }
    @media(max-width:430px){
      .mh-brand b{font-size:19px!important}.mh-brand em{font-size:17px!important}.mh-brand .sk{font-size:38px!important}
      .mh-admin,.mh-install{font-size:14px;padding:9px 10px;border-radius:14px}
      .mh-reaper{width:50%!important;right:9%!important;top:195px!important;height:46%!important}
    }
  `;
  document.head.appendChild(css);

  const previousHome=window.home;
  window.home=function(){
    previousHome();
    const top=document.querySelector('.mh-top');
    if(top){
      const admin=top.querySelector('.mh-admin');
      if(admin && !top.querySelector('.mh-top-actions')){
        const wrap=document.createElement('div');
        wrap.className='mh-top-actions';
        admin.parentNode.insertBefore(wrap,admin);
        wrap.appendChild(admin);
        const install=document.createElement('button');
        install.className='mh-install';
        install.id='mhInstall';
        install.type='button';
        install.textContent='📲 App installieren';
        wrap.insertBefore(install,admin);
        install.addEventListener('click',()=>{
          const original=document.getElementById('installBtn');
          if(original && !original.classList.contains('hidden')){
            original.click();
          }else{
            alert('Falls die direkte Installation gerade nicht angeboten wird: Browser-Menü öffnen und „Zum Startbildschirm hinzufügen“ bzw. „App installieren“ wählen.');
          }
        });
      }
    }
  };
  if((location.hash.slice(1)||'home')==='home') window.home();
})();