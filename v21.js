// V2.1 – Boller-Spezialfragen + echte PNGs + Sensenmann bei falscher Antwort
(function(){
  const specials=[
    ["Gibt es dieses Verkehrszeichen wirklich?",["Ja, das ist ein amtliches Verkehrszeichen","Nein, das ist ein Boller-Spaßschild"],1,"Richtig: Dieses E-Roller-Zebrastreifen-Schild ist nicht amtlich.",{kind:'single-image',image:'erollerb350.png',alt:'E-Roller am Zebrastreifen'}],
    ["Welches dieser beiden Schilder gibt es wirklich?",["Schild A","Schild B","Keines von beiden"],2,"Keines von beiden ist ein amtliches Verkehrszeichen. Die beiden Bilder sind unsere Spaßvarianten.",{kind:'image-options',images:['erollerbier.png','erollerbier2.png'],labels:['A','B']}],
    ["Welche ist die richtige Methode?",["Methode A","Methode B","Methode C"],2,"Methode C gewinnt in unserer Boller-Fahrschule. 😎🍺 In echt gilt natürlich: Ladung darf die sichere Fahrzeugführung nicht beeinträchtigen.",{kind:'image-options',images:['erollerbier.png','erollerbier2.png','erollerbier3.png'],labels:['A','B','C']}],
    ["Was ist das hier?",["Ein amtliches Verkehrszeichen","Achtung Bierfußgänger 😄","Ein echtes Zeichen 350"],1,"Genau: unser Bierfußgänger. Kein amtliches Verkehrszeichen.",{kind:'single-image',image:'bierfussgaenger.png',alt:'Bierfußgänger'}]
  ];

  // Spezialfragen nur einmal ergänzen.
  if(typeof q!=='undefined' && !q.some(x=>x[4]?.bollerSpecial)){
    specials.forEach(x=>{x[4].bollerSpecial=true;q.push(x)});
  }

  const css=document.createElement('style');
  css.textContent=`
    .boller-special-head{margin:22px 0 12px;font-size:13px;color:#ffbf19;font-weight:900;letter-spacing:.04em;text-transform:uppercase}
    .boller-special-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-bottom:20px}
    .boller-special-card{background:#0e0e0e;border:1px solid #5b4520;border-radius:18px;padding:12px;text-align:center}
    .boller-special-card img{width:100%;aspect-ratio:1/1;object-fit:contain;border-radius:12px;background:#fff}
    .boller-special-card h3{margin:9px 0 4px;font-size:15px}.boller-special-card p{margin:0;color:#aaa;font-size:12px}
    .quiz-media{margin:16px auto 18px;display:flex;justify-content:center;gap:12px;flex-wrap:wrap;max-width:760px}
    .quiz-media.single img{width:min(280px,72vw);max-height:310px;object-fit:contain;border-radius:15px;border:1px solid #444;background:#fff}
    .quiz-media.option-images .quiz-img-option{display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0}
    .quiz-media.option-images img{width:min(210px,34vw);max-height:245px;object-fit:contain;border-radius:14px;border:1px solid #555;background:#fff}
    .quiz-media.option-images b{color:#ffbf19;font-size:18px}
    .death-overlay{position:fixed;inset:0;z-index:99999;pointer-events:none;overflow:hidden;background:rgba(0,0,0,.42);display:flex;align-items:center;justify-content:center}
    .death-overlay .death-rider{position:absolute;width:min(520px,76vw);max-height:66vh;object-fit:contain;filter:drop-shadow(0 12px 22px #000);animation:deathRide 2.35s ease-in-out forwards}
    .death-overlay .death-text{position:absolute;top:14%;left:50%;transform:translateX(-50%);width:min(92vw,760px);text-align:center;color:#fff;font-weight:1000;font-size:clamp(30px,7vw,68px);line-height:.95;text-transform:uppercase;text-shadow:0 4px 0 #000,0 0 18px #000;animation:deathText 2.35s ease-in-out forwards}
    .death-overlay .death-text span{display:block;color:#e72d2d;font-size:1.16em;margin-top:8px}
    @keyframes deathRide{0%{transform:translateX(125vw) rotate(-2deg)}28%{transform:translateX(8vw) rotate(0)}68%{transform:translateX(-4vw) rotate(0)}100%{transform:translateX(-130vw) rotate(2deg)}}
    @keyframes deathText{0%,12%{opacity:0;transform:translate(-50%,-12px) scale(.92)}28%,72%{opacity:1;transform:translate(-50%,0) scale(1)}100%{opacity:0;transform:translate(-50%,8px) scale(1.04)}}
    @media(max-width:760px){.boller-special-grid{grid-template-columns:repeat(2,1fr)}.quiz-media.option-images img{width:min(175px,41vw)}.death-overlay .death-rider{width:88vw}.death-overlay .death-text{top:11%}}
  `;
  document.head.appendChild(css);

  function specialMedia(meta){
    if(!meta)return'';
    if(meta.kind==='single-image') return `<div class="quiz-media single"><img src="${meta.image}?v=21" alt="${meta.alt||''}"></div>`;
    if(meta.kind==='image-options') return `<div class="quiz-media option-images">${meta.images.map((src,i)=>`<div class="quiz-img-option"><b>${meta.labels?.[i]||'ABC'[i]}</b><img src="${src}?v=21" alt="Antwort ${meta.labels?.[i]||'ABC'[i]}"></div>`).join('')}</div>`;
    return'';
  }

  function showDeathRide(done){
    document.querySelector('.death-overlay')?.remove();
    const o=document.createElement('div');
    o.className='death-overlay';
    o.innerHTML=`<div class="death-text">GUT GEMACHT<span>DU BIST TOT!</span></div><img class="death-rider" src="sensenmannfrei1.png?v=21" alt="Sensenmann auf E-Roller">`;
    document.body.appendChild(o);
    setTimeout(()=>{o.remove();done&&done()},2380);
  }

  // Schilderseite um die hochgeladenen Boller-Spezialbilder ergänzen.
  const previousRenderSigns=window.renderSigns;
  window.renderSigns=function(){
    previousRenderSigns();
    const grid=document.querySelector('.sign-grid');
    if(!grid || document.querySelector('.boller-special-wrap'))return;
    const wrap=document.createElement('section');
    wrap.className='boller-special-wrap';
    wrap.innerHTML=`<div class="boller-special-head">Boller-Spezial – nicht amtlich 😎</div><div class="boller-special-grid">
      <article class="boller-special-card"><img src="erollerb350.png?v=21" alt="E-Roller Zebrastreifen"><h3>E-Roller-Zebrastreifen</h3><p>Kein amtliches Verkehrszeichen.</p></article>
      <article class="boller-special-card"><img src="bierfussgaenger.png?v=21" alt="Bierfußgänger"><h3>Bierfußgänger</h3><p>Kein amtliches Verkehrszeichen.</p></article>
      <article class="boller-special-card"><img src="erollerbier.png?v=21" alt="E-Roller mit Bier"><h3>Biertransport A</h3><p>Unsere Spaßvariante.</p></article>
      <article class="boller-special-card"><img src="erollerbier3.png?v=21" alt="E-Roller mit Bier auf dem Trittbrett"><h3>Biertransport C</h3><p>Unsere bevorzugte Spaßvariante. 😄</p></article>
    </div>`;
    grid.parentNode.insertBefore(wrap,grid.nextSibling);
  };

  // Quizrenderer mit Bildfragen und Todesfahrt bei falscher Antwort.
  window.renderQuiz=function(){
    const it=session.items[session.idx],ans=session.answers[session.idx],exam=session.mode==='exam',meta=it[4];
    app.innerHTML=`<div class="quiz-shell"><div class="section-title"><div><h1>${exam?'Abschlussprüfung':'Übungsmodus'}</h1><p>${exam?'20 Fragen · bestanden ab 17 richtig':'10 zufällige Fragen · mit Erklärung'}</p></div></div><div class="qmeta"><span>Frage ${session.idx+1} von ${session.items.length}</span><span>${exam?'Prüfung':'Training'}</span></div><div class="progressbar"><div style="width:${(session.idx+1)/session.items.length*100}%"></div></div><section class="card"><div class="question">${it[0]}</div>${specialMedia(meta)}<div class="answers">${it[1].map((a,i)=>{let c='answer';if(ans!=null){if(i===it[2])c+=' correct';if(i===ans&&ans!==it[2])c+=' wrong'}return`<button class="${c}" data-answer="${i}" ${ans!=null?'disabled':''}><strong>${'ABC'[i]}.</strong> ${a}</button>`}).join('')}</div>${ans!=null?`<div class="feedback">${ans===it[2]?'✅ Richtig.':'💀 Falsch.'} ${it[3]}</div>`:''}<div class="quiz-actions"><button class="btn ghost" data-go="home">Abbrechen</button>${ans!=null?`<button class="btn" id="nextQ">${session.idx===session.items.length-1?'Auswerten':'Nächste Frage →'}</button>`:''}</div></section></div>`;
    document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{
      const picked=Number(b.dataset.answer);session.answers[session.idx]=picked;
      if(picked!==it[2]) showDeathRide(()=>window.renderQuiz()); else window.renderQuiz();
    }));
    document.getElementById('nextQ')?.addEventListener('click',()=>session.idx===session.items.length-1?finishQuiz():(session.idx++,window.renderQuiz()));
  };

  if((location.hash.slice(1)||'home')==='signs') window.renderSigns();
})();