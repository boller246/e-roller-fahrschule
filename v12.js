// E-Roller-Fahrschule V1.2 – saubere Verkehrszeichen-SVGs
// SVG-Anzeige über die Verkehrszeichen-API von SEVAS NRW.
(function(){
  const vz={
    yield:'205',
    stop:'206',
    priority:'306',
    allvehicles:'250',
    noentry:'267',
    crossroads:'102',
    warning:'101',
    bike:'237',
    walk:'239',
    shared:'240',
    separated:'241-30',
    zebra:'350',
    bikestreet:'244.1'
  };
  const names={
    yield:'Zeichen 205',stop:'Zeichen 206',priority:'Zeichen 306',allvehicles:'Zeichen 250',
    noentry:'Zeichen 267',crossroads:'Zeichen 102',warning:'Zeichen 101',bike:'Zeichen 237',
    walk:'Zeichen 239',shared:'Zeichen 240',separated:'Zeichen 241-30',zebra:'Zeichen 350',bikestreet:'Zeichen 244.1'
  };
  signMarkup=function(type,large=false){
    const nr=vz[type];
    if(!nr) return '<div class="official-sign-fallback">🚦</div>';
    return `<div class="official-sign ${large?'official-sign-large':''}"><img src="https://sevas.nrw.de/vz/${nr}.svg" alt="${names[type]||'Verkehrszeichen'}" loading="lazy"><span>${names[type]||''}</span></div>`;
  };
  renderSigns=function(){
    app.innerHTML=`<div class="section-title"><div><h1>Verkehrsschilder</h1><p>Saubere Verkehrszeichen statt selbst gebastelter Symbole. 😎</p></div><button class="btn" data-go="practice">Danach üben →</button></div>
    <div class="sign-grid official-grid">${signs.map(s=>`<article class="card sign-card"><div class="sign-art official-art">${signMarkup(s[0])}</div><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join('')}</div>
    <p class="muted sign-source">Verkehrszeichen-Grafiken: SEVAS NRW Verkehrszeichen-API · Bezeichnungen nach StVO/VzKat.</p>`;
  };
  const style=document.createElement('style');
  style.textContent=`
    .official-grid{gap:18px}
    .official-art{height:170px;margin-bottom:12px}
    .official-sign{height:160px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px}
    .official-sign img{display:block;max-width:132px;max-height:132px;width:auto;height:auto;filter:drop-shadow(0 5px 8px rgba(0,0,0,.22))}
    .official-sign span{font-size:11px;color:var(--muted);font-weight:700;letter-spacing:.02em}
    .official-sign-large{height:205px}
    .official-sign-large img{max-width:175px;max-height:175px}
    .official-sign-large span{font-size:12px}
    .sign-source{font-size:11px;text-align:center;margin-top:16px}
    @media(max-width:520px){.official-art{height:145px}.official-sign{height:138px}.official-sign img{max-width:112px;max-height:112px}.official-sign-large{height:185px}.official-sign-large img{max-width:155px;max-height:155px}}
  `;
  document.head.appendChild(style);
  if((location.hash.slice(1)||'home')==='signs') renderSigns();
})();