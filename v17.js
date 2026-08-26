// V1.7 – Startseite im freigegebenen Mockup-Stil
(function(){
  const css=document.createElement('style');
  css.textContent=`
    body.home-mockup{background:#050505}
    body.home-mockup>.appbar,body.home-mockup>.bottomnav{display:none!important}
    body.home-mockup .container{width:min(100%,1024px);padding:0 14px 22px}
    .mh{background:#050505;color:#fff;min-height:100vh;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}
    .mh-top{display:flex;align-items:center;justify-content:space-between;padding:18px 10px 16px;border-bottom:1px solid #2e2e2e}
    .mh-brand{display:flex;align-items:center;gap:12px}.mh-brand .sk{font-size:50px}.mh-brand b{display:block;font-size:clamp(22px,4vw,36px);line-height:1}.mh-brand em{display:block;color:#ffbf19;font-style:normal;font-weight:900;font-size:clamp(18px,3vw,30px)}
    .mh-admin{border:1px solid #555;border-radius:18px;padding:12px 18px;color:white;text-decoration:none;font-weight:900;font-size:clamp(18px,3vw,28px);background:#0b0b0b}
    .mh-sub{padding:0 10px 12px;margin-top:-4px;font-weight:900;font-style:italic;color:#fff;font-size:clamp(13px,2.2vw,22px)}
    .mh-hero{position:relative;overflow:hidden;border:1px solid #66502d;border-radius:24px;min-height:520px;background:radial-gradient(circle at 72% 24%,rgba(255,190,25,.12),transparent 24%),repeating-linear-gradient(165deg,transparent 0 34px,rgba(255,190,25,.05) 35px 37px),linear-gradient(135deg,#030303,#101010 58%,#030303);box-shadow:inset 0 0 55px #000,0 12px 30px rgba(0,0,0,.45)}
    .mh-title{position:absolute;z-index:4;left:28px;top:44px;max-width:54%}.mh-title .white{font-weight:1000;color:white;font-size:clamp(46px,8.4vw,92px);line-height:.88;letter-spacing:-.045em;text-shadow:3px 4px 0 #202020}.mh-title .yellow{font-weight:1000;color:#ffbd0e;font-size:clamp(40px,7vw,76px);line-height:.94;margin-top:14px;letter-spacing:-.035em}
    .mh-reaper{position:absolute;right:-2%;top:24px;width:53%;height:78%;object-fit:contain;filter:drop-shadow(0 12px 10px #000);z-index:3}
    .mh-warn{position:absolute;right:2.5%;top:42%;width:150px;height:150px;display:grid;place-items:center;z-index:5;text-align:center;color:#111;font-weight:1000;font-size:15px;line-height:1.08;transform:rotate(3deg)}.mh-warn:before{content:'';position:absolute;width:112px;height:112px;background:#f5b814;border:5px solid #111;outline:2px solid #f5b814;border-radius:7px;transform:rotate(45deg);z-index:-1}.mh-warn span{max-width:86px}.mh-warn .sc{font-size:22px;display:block;margin-bottom:2px}
    .mh-death{position:absolute;left:34px;bottom:35px;z-index:6;background:#f0f0f0;color:#111;border-left:7px solid #d82323;border-right:7px solid #d82323;border-radius:8px;padding:12px 18px;font-size:clamp(16px,2.8vw,26px);font-weight:1000;transform:rotate(-1deg);box-shadow:0 8px 20px rgba(0,0,0,.45)}
    .mh-350b{position:absolute;right:2.8%;bottom:42px;z-index:7;display:flex;flex-direction:column;gap:5px;align-items:center}.mh-350b b{background:#f2b50e;color:#111;border:3px solid #111;border-radius:5px;padding:2px 18px;font-size:25px}.mh-350b span{background:#f2f2f2;color:#111;border:3px solid #111;border-radius:5px;padding:5px 10px;text-align:center;font-size:15px;font-weight:1000;line-height:1.1}
    .mh-road{position:absolute;left:-20px;right:-20px;bottom:-16px;height:42px;background:#e4aa00;transform:rotate(-2deg);z-index:2}
    .mh-actions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:16px}.mh-card{min-height:260px;border:1px solid #464646;border-radius:22px;background:linear-gradient(180deg,#151515,#090909);padding:22px 16px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;cursor:pointer}.mh-card .round{width:86px;height:86px;border-radius:50%;display:grid;place-items:center;font-size:42px;margin-bottom:18px}.mh-card:nth-child(1) .round{background:#1764bf}.mh-card:nth-child(2) .round{background:#289a3f}.mh-card:nth-child(3) .round{background:#c92327}.mh-card:nth-child(4) .round{background:#6b3da2}.mh-card h3{margin:0 0 12px;font-size:clamp(20px,2.5vw,30px)}.mh-card p{margin:0;color:#ddd;font-size:clamp(13px,1.8vw,19px);line-height:1.45}.mh-card .arrow{margin-top:18px;font-size:38px;font-weight:900}.mh-card:nth-child(1) .arrow{color:#1771d2}.mh-card:nth-child(2) .arrow{color:#29ae48}.mh-card:nth-child(3) .arrow{color:#df2a2f}.mh-card:nth-child(4) .arrow{color:#844abf}
    .mh-stats{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid #444;border-radius:22px;background:linear-gradient(180deg,#151515,#0a0a0a);margin-top:18px;overflow:hidden}.mh-stat{padding:20px 10px;text-align:center;border-right:1px solid #454545}.mh-stat:last-child{border-right:0}.mh-stat .ico{font-size:36px}.mh-stat b{display:block;font-size:40px;line-height:1.05}.mh-stat:nth-child(1) b{color:#1681ed}.mh-stat:nth-child(2) b{color:#2eaa49}.mh-stat:nth-child(3) b{color:#d42228}.mh-stat:nth-child(4) b{color:#844bb5}.mh-stat span{font-size:14px;color:#e8e8e8}
    .mh-rem{margin-top:20px;border:1px solid #e3b100;border-radius:22px;background:linear-gradient(90deg,#0b0b0b,#151515,#0b0b0b);padding:20px;display:grid;grid-template-columns:120px 1fr;align-items:center;gap:16px}.mh-rem .bones{font-size:80px;text-align:center}.mh-rem strong{color:#ffbd0e;font-size:26px}.mh-rem p{margin:3px 0 8px;color:#f3f3f3;font-size:18px}.mh-rem .deathline{color:#ffbd0e;font-size:clamp(25px,4vw,42px);font-weight:1000;font-style:italic;text-transform:uppercase}
    .mh-nav{position:sticky;bottom:8px;margin:18px 0 4px;display:grid;grid-template-columns:repeat(5,1fr);background:#111;border:1px solid #353535;border-radius:22px;overflow:hidden;z-index:20;box-shadow:0 12px 28px rgba(0,0,0,.5)}.mh-nav button{border:0;background:#111;color:#cfcfcf;padding:14px 4px;font-size:28px}.mh-nav button span{display:block;font-size:14px;margin-top:4px}.mh-nav button.active{color:#ffbf19;background:#171717;box-shadow:inset 0 -4px 0 #ffbf19}
    @media(max-width:760px){.mh{margin:0}.mh-top{padding:15px 8px 12px}.mh-brand .sk{font-size:42px}.mh-admin{padding:10px 14px}.mh-hero{min-height:510px}.mh-title{left:22px;top:38px;max-width:70%}.mh-title .white{font-size:56px}.mh-title .yellow{font-size:44px;max-width:72%}.mh-reaper{width:60%;right:-8%;top:155px;height:57%}.mh-warn{width:118px;height:118px;right:2%;top:auto;bottom:120px;font-size:12px}.mh-warn:before{width:88px;height:88px}.mh-warn span{max-width:68px}.mh-death{left:22px;bottom:40px;max-width:67%;padding:10px 12px;font-size:16px}.mh-350b{right:2%;bottom:20px}.mh-350b b{font-size:19px;padding:2px 12px}.mh-350b span{font-size:11px;padding:4px 7px}.mh-actions{grid-template-columns:1fr;gap:14px}.mh-card{min-height:155px;display:grid;grid-template-columns:110px 1fr 30px;grid-template-rows:auto auto;align-items:center;text-align:left;padding:18px}.mh-card .round{grid-row:1/3;margin:0;width:82px;height:82px}.mh-card h3{margin:0 0 4px;font-size:27px}.mh-card p{font-size:16px}.mh-card .arrow{grid-column:3;grid-row:1/3;margin:0}.mh-stats{grid-template-columns:repeat(2,1fr)}.mh-stat:nth-child(2){border-right:0}.mh-stat:nth-child(-n+2){border-bottom:1px solid #454545}.mh-rem{grid-template-columns:80px 1fr}.mh-rem .bones{font-size:58px}.mh-rem strong{font-size:20px}.mh-rem p{font-size:15px}.mh-nav button{font-size:24px;padding:12px 2px}.mh-nav button span{font-size:12px}}
    @media(max-width:430px){.mh-hero{min-height:555px}.mh-title .white{font-size:50px}.mh-title .yellow{font-size:38px}.mh-reaper{top:168px;width:68%;right:-13%;height:54%}.mh-death{bottom:42px;max-width:72%;font-size:14px}.mh-warn{bottom:128px}.mh-350b{bottom:18px}.mh-card{grid-template-columns:90px 1fr 26px}.mh-card .round{width:70px;height:70px;font-size:34px}.mh-card h3{font-size:24px}.mh-card p{font-size:14px}.mh-rem{grid-template-columns:62px 1fr;padding:15px}.mh-rem .bones{font-size:46px}.mh-rem .deathline{font-size:24px}}
  `;
  document.head.appendChild(css);

  const oldRender=window.render;
  window.render=function(route){
    document.body.classList.toggle('home-mockup',route==='home'||!route);
    return oldRender(route);
  };

  window.home=function(){
    document.body.classList.add('home-mockup');
    const h=store.get();
    const exams=h.filter(x=>x.type==='Prüfung');
    const passed=exams.filter(x=>x.passed).length;
    const totalQuestions=h.reduce((a,x)=>a+(x.total||0),0);
    const totalRight=h.reduce((a,x)=>a+(x.score||0),0);
    const rate=totalQuestions?Math.round(totalRight/totalQuestions*100):0;
    app.innerHTML=`<div class="mh">
      <header class="mh-top"><div class="mh-brand"><span class="sk">💀</span><div><b>BOLLER’S E‑ROLLER</b><em>FAHRSCHULE</em></div></div><a class="mh-admin" href="admin.html">Admin 🔒</a></header>
      <div class="mh-sub">☠ STERBEN AUF EIGENE VERANTWORTUNG! ☠</div>
      <section class="mh-hero">
        <div class="mh-title"><div class="white">BOLLER’S</div><div class="yellow">E‑ROLLER<br>FAHRSCHULE</div></div>
        <img class="mh-reaper" src="reaper.svg?v=17" alt="Sensenmann auf E‑Roller">
        <div class="mh-warn"><span><span class="sc">🛴</span>FAHR<br>MIT KÖPFCHEN<br>ODER GAR<br>NICHT!</span></div>
        <div class="mh-death">☠ STERBEN AUF EIGENE VERANTWORTUNG! ☠</div>
        <div class="mh-350b"><b>350‑B</b><span>BOLLER’S<br>E‑ROLLER<br>FAHRSCHULE</span></div>
        <div class="mh-road"></div>
      </section>
      <section class="mh-actions">
        <div class="mh-card" data-go="signs"><div class="round">📖</div><div><h3>LERNEN</h3><p>Verkehrszeichen & Regeln lernen</p></div><div class="arrow">›</div></div>
        <div class="mh-card" data-go="practice"><div class="round">📝</div><div><h3>ÜBEN</h3><p>Testfragen üben und verbessern</p></div><div class="arrow">›</div></div>
        <div class="mh-card" data-go="exam"><div class="round">📋</div><div><h3>PRÜFUNG</h3><p>Zeige, was du drauf hast</p></div><div class="arrow">›</div></div>
        <div class="mh-card" id="resultsCard"><div class="round">🏆</div><div><h3>MEINE ERGEBNISSE</h3><p>${h.length?h.length+' gespeicherte Versuche':'Noch keine Ergebnisse'}</p></div><div class="arrow">›</div></div>
      </section>
      <section class="mh-stats"><div class="mh-stat"><div class="ico">🎓</div><b>${signs.length}</b><span>Verkehrszeichen<br>zum Lernen</span></div><div class="mh-stat"><div class="ico">❓</div><b>${q.length}</b><span>Übungsfragen<br>verfügbar</span></div><div class="mh-stat"><div class="ico">🏆</div><b>${passed}</b><span>Prüfungen<br>bestanden</span></div><div class="mh-stat"><div class="ico">📈</div><b>${rate}%</b><span>Deine aktuelle<br>Trefferquote</span></div></section>
      <section class="mh-rem"><div class="bones">☠️</div><div><strong>MERKE DIR:</strong><p>Der E‑Roller ist kein Spielzeug! Kenn die Regeln, fahr sicher und komm wieder heil nach Hause.</p><div class="deathline">STERBEN AUF EIGENE VERANTWORTUNG!</div></div></section>
      <nav class="mh-nav"><button class="active" data-go="home">🏠<span>Start</span></button><button data-go="signs">🚦<span>Schilder</span></button><button data-go="rules">📘<span>Regeln</span></button><button data-go="practice">🧠<span>Üben</span></button><button data-go="exam">🏁<span>Prüfung</span></button></nav>
    </div>`;
    document.getElementById('resultsCard')?.addEventListener('click',()=>document.querySelector('.mh-stats')?.scrollIntoView({behavior:'smooth',block:'center'}));
    setTimeout(()=>{if(typeof ensureCloudBox==='function') ensureCloudBox();},0);
  };
  if((location.hash.slice(1)||'home')==='home') window.home();
})();