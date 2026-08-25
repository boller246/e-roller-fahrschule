// E-Roller-Fahrschule V1.1 – echte Verkehrszeichen nach Nutzer-Vorlage
(function(){
  const svg=(body)=>`<svg viewBox="0 0 120 120" width="118" height="118" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
  const S={
    yield:svg('<polygon points="60,108 10,18 110,18" fill="white" stroke="#d71920" stroke-width="10" stroke-linejoin="round"/>'),
    stop:svg('<polygon points="35,7 85,7 113,35 113,85 85,113 35,113 7,85 7,35" fill="#d71920" stroke="white" stroke-width="4"/><text x="60" y="69" text-anchor="middle" font-family="Arial" font-weight="700" font-size="27" fill="white">STOP</text>'),
    priority:svg('<polygon points="60,6 114,60 60,114 6,60" fill="white" stroke="#555" stroke-width="3"/><polygon points="60,19 101,60 60,101 19,60" fill="#ffd51c" stroke="#222" stroke-width="2"/>'),
    allvehicles:svg('<circle cx="60" cy="60" r="48" fill="white" stroke="#d71920" stroke-width="10"/>'),
    noentry:svg('<circle cx="60" cy="60" r="49" fill="#d71920"/><rect x="19" y="51" width="82" height="18" rx="3" fill="white"/>'),
    crossroads:svg('<polygon points="60,8 112,108 8,108" fill="white" stroke="#d71920" stroke-width="8" stroke-linejoin="round"/><path d="M34 63h52M60 39v48" stroke="#111" stroke-width="9"/>'),
    warning:svg('<polygon points="60,8 112,108 8,108" fill="white" stroke="#d71920" stroke-width="8" stroke-linejoin="round"/><text x="60" y="87" text-anchor="middle" font-family="Arial" font-weight="700" font-size="56" fill="#111">!</text>'),
    bike:svg('<circle cx="60" cy="60" r="52" fill="#0869a8"/><circle cx="36" cy="74" r="18" fill="none" stroke="white" stroke-width="4"/><circle cx="84" cy="74" r="18" fill="none" stroke="white" stroke-width="4"/><path d="M36 74l17-27 17 27H36l12-18h22M53 47h12M70 74l8-31" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'),
    walk:svg('<circle cx="60" cy="60" r="52" fill="#0869a8"/><circle cx="60" cy="31" r="8" fill="white"/><path d="M60 42v27M60 51l-17 15M60 52l17 14M60 68L47 94M60 68l14 27" stroke="white" stroke-width="7" stroke-linecap="round"/>'),
    shared:svg('<circle cx="60" cy="60" r="52" fill="#0869a8"/><circle cx="39" cy="32" r="6" fill="white"/><path d="M39 41v20M39 48l-11 9M39 48l10 8M39 60l-8 17M39 60l10 17" stroke="white" stroke-width="5" stroke-linecap="round"/><circle cx="48" cy="88" r="10" fill="none" stroke="white" stroke-width="3"/><circle cx="79" cy="88" r="10" fill="none" stroke="white" stroke-width="3"/><path d="M48 88l11-17 10 17H48l8-12h16M59 71h8M69 88l5-20" fill="none" stroke="white" stroke-width="3"/>'),
    separated:svg('<circle cx="60" cy="60" r="52" fill="#0869a8"/><line x1="60" y1="14" x2="60" y2="106" stroke="white" stroke-width="3"/><circle cx="80" cy="31" r="6" fill="white"/><path d="M80 40v20M80 47l-9 8M80 47l9 8M80 60l-8 16M80 60l9 16" stroke="white" stroke-width="5" stroke-linecap="round"/><circle cx="25" cy="78" r="9" fill="none" stroke="white" stroke-width="3"/><circle cx="48" cy="78" r="9" fill="none" stroke="white" stroke-width="3"/><path d="M25 78l8-13 8 13H25l6-9h13" fill="none" stroke="white" stroke-width="3"/>'),
    zebra:svg('<rect x="7" y="7" width="106" height="106" rx="7" fill="#0869a8"/><polygon points="60,15 103,101 17,101" fill="white"/><path d="M30 91h60M34 82h52M39 73h42M44 64h32" stroke="#111" stroke-width="5"/><circle cx="60" cy="39" r="5" fill="#111"/><path d="M60 45v16M60 50l-8 9M60 50l8 9M60 61l-7 12M60 61l8 12" stroke="#111" stroke-width="4" stroke-linecap="round"/>'),
    bikestreet:svg('<rect x="10" y="8" width="100" height="104" rx="5" fill="white" stroke="#555" stroke-width="3"/><rect x="18" y="16" width="84" height="68" rx="4" fill="#0869a8"/><circle cx="39" cy="55" r="13" fill="none" stroke="white" stroke-width="3"/><circle cx="73" cy="55" r="13" fill="none" stroke="white" stroke-width="3"/><path d="M39 55l12-19 12 19H39l8-13h18" fill="none" stroke="white" stroke-width="3"/><text x="60" y="103" text-anchor="middle" font-family="Arial" font-size="14" fill="#222">Fahrradstraße</text>')
  };
  const list=[
    ['yield','Vorfahrt gewähren','Andere zuerst fahren lassen; nötigenfalls warten.'],
    ['stop','STOP – Halt, Vorfahrt gewähren','Vollständig anhalten und Vorfahrt beachten.'],
    ['priority','Vorfahrtstraße','Du befindest dich auf einer Vorfahrtstraße.'],
    ['allvehicles','Verbot für Fahrzeuge aller Art','Fahren verboten; schieben ist möglich.'],
    ['noentry','Verbot der Einfahrt','Hier nicht einfahren, außer ausdrückliche Freigabe.'],
    ['crossroads','Kreuzung','Auf kreuzenden Verkehr und die Vorfahrt achten.'],
    ['warning','Gefahrstelle','Tempo anpassen und bremsbereit sein.'],
    ['bike','Sonderweg Radfahrer','Radweg bzw. Radverkehrsfläche.'],
    ['walk','Sonderweg Fußgänger','Reiner Gehweg – mit E-Scooter grundsätzlich nicht befahren.'],
    ['shared','Gemeinsamer Geh- und Radweg','Fußgänger besonders berücksichtigen.'],
    ['separated','Getrennter Rad- und Fußweg','Auf der Radverkehrsseite bleiben.'],
    ['zebra','Fußgängerüberweg','Fußgänger durchlassen.'],
    ['bikestreet','Fahrradstraße','E-Scooter dürfen sie innerorts benutzen.']
  ];
  signs.splice(0,signs.length,...list);
  signMarkup=function(t,large=false){return `<div style="display:grid;place-items:center;transform:scale(${large?1.25:1})">${S[t]||'🚦'}</div>`};
  q.push(
    ['Was bedeutet dieses Verkehrszeichen?',['Vorfahrt gewähren','STOP – vollständig anhalten','Einfahrt verboten'],1,'STOP heißt vollständiger Halt und Vorfahrt beachten.','stop'],
    ['Was bedeutet dieses Verkehrszeichen?',['Vorfahrt gewähren','Du hast Vorfahrt','Gehweg'],0,'Das umgedrehte Dreieck bedeutet: Vorfahrt gewähren.','yield'],
    ['Was bedeutet dieses Verkehrszeichen?',['Vorfahrtstraße','Ende einer Vorfahrtstraße','Verbot für Fahrzeuge'],0,'Die gelbe Raute kennzeichnet eine Vorfahrtstraße.','priority'],
    ['Was bedeutet dieses Verkehrszeichen?',['Verbot der Einfahrt','Verbot für Fahrzeuge aller Art','Kreisverkehr'],0,'Der weiße Querbalken auf Rot bedeutet Verbot der Einfahrt.','noentry'],
    ['Was bedeutet dieses Verkehrszeichen?',['Radweg','Gehweg','Verbot für Radfahrer'],0,'Das blaue runde Schild kennzeichnet einen Radweg.','bike'],
    ['Was bedeutet dieses Verkehrszeichen?',['Gemeinsamer Geh- und Radweg','Getrennter Rad- und Fußweg','Fahrradstraße'],0,'Hier teilen sich Fuß- und Radverkehr die Verkehrsfläche.','shared'],
    ['Was bedeutet dieses Verkehrszeichen?',['Gefahrstelle','Vorfahrtstraße','Einbahnstraße'],0,'Das Ausrufezeichen warnt vor einer allgemeinen Gefahrstelle.','warning'],
    ['Was bedeutet dieses Verkehrszeichen?',['Fußgängerüberweg','Haltestelle','Verkehrsberuhigter Bereich'],0,'Das Zeichen kennzeichnet einen Fußgängerüberweg.','zebra']
  );
  renderSigns=function(){app.innerHTML=`<div class="section-title"><div><h1>Verkehrsschilder</h1><p>Jetzt mit den richtigen Schildern aus deiner Vorlage.</p></div><button class="btn" data-go="practice">Danach üben →</button></div><div class="sign-grid">${signs.map(s=>`<article class="card sign-card"><div class="sign-art">${signMarkup(s[0])}</div><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join('')}</div>`};
  renderQuiz=function(){const it=session.items[session.idx],ans=session.answers[session.idx],exam=session.mode==='exam';app.innerHTML=`<div class="quiz-shell"><div class="section-title"><div><h1>${exam?'Abschlussprüfung':'Übungsmodus'}</h1><p>${exam?'20 Fragen · bestanden ab 17 richtig':'10 zufällige Text- und Bildfragen'}</p></div></div><div class="qmeta"><span>Frage ${session.idx+1} von ${session.items.length}</span><span>${exam?'Prüfung':'Training'}</span></div><div class="progressbar"><div style="width:${(session.idx+1)/session.items.length*100}%"></div></div><section class="card">${it[4]?`<div style="display:grid;place-items:center;margin:0 0 18px">${signMarkup(it[4],true)}</div>`:''}<div class="question">${it[0]}</div><div class="answers">${it[1].map((a,i)=>{let c='answer';if(ans!=null){if(i===it[2])c+=' correct';if(i===ans&&ans!==it[2])c+=' wrong'}return`<button class="${c}" data-answer="${i}" ${ans!=null?'disabled':''}><strong>${'ABC'[i]}.</strong> ${a}</button>`}).join('')}</div>${ans!=null?`<div class="feedback">${ans===it[2]?'✅ Richtig.':'❌ Nicht ganz.'} ${it[3]}</div>`:''}<div class="quiz-actions"><button class="btn ghost" data-go="home">Abbrechen</button>${ans!=null?`<button class="btn" id="nextQ">${session.idx===session.items.length-1?'Auswerten':'Nächste Frage →'}</button>`:''}</div></section></div>`;document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{session.answers[session.idx]=Number(b.dataset.answer);renderQuiz()}));$('#nextQ')?.addEventListener('click',()=>session.idx===session.items.length-1?finishQuiz():(session.idx++,renderQuiz()))};
})();