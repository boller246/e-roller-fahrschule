// V1.4 – Boller’s E‑Roller Fahrschule Startseite
(function(){
  const style=document.createElement('style');
  style.textContent=`
  body{background:#0a0a0a;color:#f6f6f6}
  .appbar{background:rgba(8,8,8,.96);border-bottom:1px solid #343434}
  .brand strong{font-size:15px}.brand small{color:#ffbe19}
  .container{width:min(100%,1180px)}
  .boller-hero{position:relative;overflow:hidden;min-height:365px;border-radius:24px;border:1px solid #343434;background:radial-gradient(circle at 76% 28%,rgba(255,183,0,.18),transparent 25%),radial-gradient(circle at 90% 70%,rgba(255,255,255,.07),transparent 22%),linear-gradient(135deg,#050505 0%,#121212 58%,#050505 100%);box-shadow:0 20px 50px rgba(0,0,0,.42);padding:30px 34px 28px}
  .boller-hero:before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(165deg,transparent 0 34px,rgba(255,190,25,.045) 35px 37px);pointer-events:none}
  .boller-copy{position:relative;z-index:3;max-width:700px}
  .boller-kicker{font-size:clamp(42px,8vw,92px);font-weight:1000;line-height:.82;letter-spacing:-.055em;color:white;text-shadow:3px 3px 0 #222}
  .boller-title{font-size:clamp(34px,6vw,70px);font-weight:1000;line-height:.95;letter-spacing:-.035em;color:#ffbf19;margin-top:8px;text-transform:uppercase}
  .boller-warning{display:inline-flex;align-items:center;gap:10px;margin-top:22px;padding:11px 16px;border:2px solid #d9d9d9;border-left:7px solid #d51d1d;border-right:7px solid #d51d1d;border-radius:9px;background:#efefef;color:#111;font-weight:1000;font-size:clamp(15px,2.3vw,22px);transform:rotate(-1deg);box-shadow:0 8px 20px rgba(0,0,0,.35)}
  .reaper{position:absolute;right:38px;top:34px;z-index:2;width:300px;height:285px}
  .reaper .skull{position:absolute;right:82px;top:0;font-size:92px;filter:drop-shadow(0 6px 5px #000)}
  .reaper .hood{position:absolute;right:54px;top:8px;width:155px;height:155px;border:17px solid #151515;border-radius:55% 55% 48% 48%;box-shadow:0 0 0 2px #373737}
  .reaper .scythe{position:absolute;right:6px;top:-2px;font-size:142px;transform:rotate(-18deg);filter:drop-shadow(0 6px 4px #000)}
  .reaper .scooter{position:absolute;right:10px;bottom:0;font-size:82px;transform:scaleX(-1);filter:drop-shadow(0 6px 4px #000)}
  .reaper .thumb{position:absolute;right:218px;top:78px;font-size:54px}
  .yellow-road{position:absolute;left:-30px;right:-30px;bottom:-18px;height:42px;background:#eab100;transform:rotate(-2deg);opacity:.9}
  .boller-actions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin:16px 0}
  .boller-action{min-height:138px;padding:18px;border-radius:18px;border:1px solid #3a3a3a;background:linear-gradient(180deg,#181818,#0c0c0c);cursor:pointer;display:flex;align-items:center;gap:15px;transition:.18s}
  .boller-action:hover{transform:translateY(-2px);border-color:#6b6b6b}.boller-action .round{width:66px;height:66px;border-radius:50%;display:grid;place-items:center;font-size:34px;flex:0 0 auto}.round.blue{background:#1965c4}.round.green{background:#2e9f43}.round.red{background:#d9252a}.round.purple{background:#6e39a5}.boller-action h3{margin:0 0 5px;font-size:19px}.boller-action p{margin:0;color:#d1d1d1;font-size:13px;line-height:1.35}
  .boller-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;background:#f5f5f5;color:#111;border-radius:18px;overflow:hidden;margin:16px 0}.bstat{padding:20px 14px;text-align:center;border-right:1px solid #d8d8d8}.bstat:last-child{border-right:0}.bstat b{display:block;font-size:34px;color:#1760b8}.bstat:nth-child(2) b{color:#139344}.bstat:nth-child(3) b{color:#c7191f}.bstat:nth-child(4) b{color:#6c3ba2}.bstat span{font-size:13px;color:#333}
  .boller-reminder{border:1px solid #d99e00;border-radius:17px;background:linear-gradient(90deg,#111,#1b1b1b,#111);padding:17px 20px;display:flex;align-items:center;gap:16px}.boller-reminder .bones{font-size:42px}.boller-reminder strong{color:#ffbf19;font-size:19px}.boller-reminder p{margin:4px 0 0;color:#efefef}.deathline{text-align:center;color:#ffbf19;font-size:clamp(22px,4vw,38px);font-weight:1000;font-style:italic;margin-top:8px;text-transform:uppercase;letter-spacing:.02em}
  .boller-footer{text-align:center;color:#b9b9b9;font-size:12px;margin:14px 0 2px}
  @media(max-width:850px){.reaper{opacity:.42;right:-30px}.boller-copy{max-width:78%}.boller-actions{grid-template-columns:repeat(2,1fr)}.boller-stats{grid-template-columns:repeat(2,1fr)}.bstat:nth-child(2){border-right:0}.bstat:nth-child(-n+2){border-bottom:1px solid #d8d8d8}}
  @media(max-width:520px){.boller-hero{padding:24px 18px;min-height:330px}.boller-copy{max-width:100%}.reaper{right:-70px;top:58px;opacity:.28}.boller-warning{max-width:94%;font-size:14px}.boller-actions{grid-template-columns:1fr}.boller-action{min-height:105px}.boller-stats{grid-template-columns:1fr}.bstat{border-right:0;border-bottom:1px solid #d8d8d8}.bstat:last-child{border-bottom:0}.boller-reminder{align-items:flex-start}}
  `;
  document.head.appendChild(style);

  const oldHome=window.home;
  window.home=function(){
    const h=store.get();
    const exams=h.filter(x=>x.type==='Prüfung');
    const passed=exams.filter(x=>x.passed).length;
    const totalQuestions=h.reduce((a,x)=>a+(x.total||0),0);
    const totalRight=h.reduce((a,x)=>a+(x.score||0),0);
    const rate=totalQuestions?Math.round(totalRight/totalQuestions*100):0;
    app.innerHTML=`
      <section class="boller-hero">
        <div class="boller-copy">
          <div class="boller-kicker">BOLLER’S</div>
          <div class="boller-title">E‑ROLLER FAHRSCHULE</div>
          <div class="boller-warning">☠️ STERBEN AUF EIGENE VERANTWORTUNG! ☠️</div>
        </div>
        <div class="reaper" aria-hidden="true"><div class="hood"></div><div class="skull">💀</div><div class="thumb">👍</div><div class="scythe">⚰️</div><div class="scooter">🛴</div></div>
        <div class="yellow-road"></div>
      </section>
      <section class="boller-actions">
        <div class="boller-action" data-go="signs"><div class="round blue">📖</div><div><h3>LERNEN</h3><p>Verkehrszeichen & Regeln lernen</p></div></div>
        <div class="boller-action" data-go="practice"><div class="round green">📝</div><div><h3>ÜBEN</h3><p>Testfragen üben und verbessern</p></div></div>
        <div class="boller-action" data-go="exam"><div class="round red">✅</div><div><h3>PRÜFUNG</h3><p>Zeige, was du drauf hast</p></div></div>
        <div class="boller-action" data-go="home"><div class="round purple">🏆</div><div><h3>MEINE ERGEBNISSE</h3><p>${h.length?h.length+' gespeicherte Versuche':'Noch keine Ergebnisse'}</p></div></div>
      </section>
      <section class="boller-stats">
        <div class="bstat"><b>${signs.length}</b><span>Verkehrszeichen zum Lernen</span></div>
        <div class="bstat"><b>${q.length}</b><span>Übungsfragen verfügbar</span></div>
        <div class="bstat"><b>${passed}</b><span>Prüfungen bestanden</span></div>
        <div class="bstat"><b>${rate}%</b><span>Deine aktuelle Trefferquote</span></div>
      </section>
      <section class="boller-reminder"><div class="bones">☠️</div><div><strong>MERKE DIR:</strong><p>Der E‑Roller ist kein Spielzeug! Kenn die Regeln, fahr sicher und komm wieder heil nach Hause.</p><div class="deathline">Sterben auf eigene Verantwortung!</div></div></section>
      <div class="boller-footer">💀 Boller’s E‑Roller Fahrschule · Fahr mit Köpfchen – nicht mit Glück! · Viel Erfolg & bleib am Leben. 🙂</div>`;
    setTimeout(()=>{ if(typeof ensureCloudBox==='function') ensureCloudBox(); },0);
  };
  const brand=document.querySelector('.brand');
  if(brand) brand.innerHTML='<span class="logo">💀</span><span><strong>Boller’s E‑Roller</strong><small>Fahrschule</small></span>';
  if((location.hash.slice(1)||'home')==='home') window.home();
})();