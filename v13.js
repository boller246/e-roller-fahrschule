// E-Roller-Fahrschule V1.3 – Humor bei falscher Antwort
(function(){
  renderQuiz=function(){
    const it=session.items[session.idx],ans=session.answers[session.idx],exam=session.mode==='exam';
    app.innerHTML=`<div class="quiz-shell"><div class="section-title"><div><h1>${exam?'Abschlussprüfung':'Übungsmodus'}</h1><p>${exam?'20 Fragen · bestanden ab 17 richtig':'10 zufällige Text- und Bildfragen'}</p></div></div><div class="qmeta"><span>Frage ${session.idx+1} von ${session.items.length}</span><span>${exam?'Prüfung':'Training'}</span></div><div class="progressbar"><div style="width:${(session.idx+1)/session.items.length*100}%"></div></div><section class="card">${it[4]?`<div style="display:grid;place-items:center;margin:0 0 18px">${signMarkup(it[4],true)}</div>`:''}<div class="question">${it[0]}</div><div class="answers">${it[1].map((a,i)=>{let c='answer';if(ans!=null){if(i===it[2])c+=' correct';if(i===ans&&ans!==it[2])c+=' wrong'}return`<button class="${c}" data-answer="${i}" ${ans!=null?'disabled':''}><strong>${'ABC'[i]}.</strong> ${a}</button>`}).join('')}</div>${ans!=null?`<div class="feedback ${ans===it[2]?'':'fatal-feedback'}">${ans===it[2]?'✅ Richtig.':'💀 Ups, jetzt bist du tot. Ruhe in Frieden. 😇'}<br><span style="display:block;margin-top:7px">${it[3]}</span></div>`:''}<div class="quiz-actions"><button class="btn ghost" data-go="home">Abbrechen</button>${ans!=null?`<button class="btn" id="nextQ">${session.idx===session.items.length-1?'Auswerten':'Nächste Frage →'}</button>`:''}</div></section></div>`;
    document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{session.answers[session.idx]=Number(b.dataset.answer);renderQuiz()}));
    document.getElementById('nextQ')?.addEventListener('click',()=>session.idx===session.items.length-1?finishQuiz():(session.idx++,renderQuiz()));
  };
  const style=document.createElement('style');
  style.textContent='.fatal-feedback{border:1px solid #ff6b6b;background:#3b2028;font-weight:800}.fatal-feedback span{font-weight:400;color:#f2d7dc}';
  document.head.appendChild(style);
})();