// V2.3 – schwierigere Prüfung, Situationsfragen und sichtbare Schilder
(function(){
 const hard=[
 ["Du näherst dich einer unbeschilderten Kreuzung. Von rechts kommt ein Auto, von links ein Fahrrad. Wie verhältst du dich?",["Ich fahre zuerst, weil ich kleiner bin","Ich lasse das Auto von rechts zuerst fahren und beobachte auch den Radverkehr","Nur das Fahrrad von links hat Vorrang"],1,"An der unbeschilderten Kreuzung gilt grundsätzlich rechts vor links."],
 ["Es regnet, vor dir fährt ein Fahrrad und rechts stehen parkende Autos. Was ist am sichersten?",["Abstand vergrößern, Tempo reduzieren und mit öffnenden Türen rechnen","Dicht am Fahrrad bleiben, damit kein Auto dazwischen fährt","Links am Fahrrad vorbeiziehen, bevor eine Tür aufgeht"],0,"Nässe verlängert den Bremsweg; zusätzlich besteht Dooring-Gefahr."],
 ["Du willst links abbiegen, dein E-Roller hat keine Blinker und hinter dir fährt ein Auto. Was tust du?",["Ohne Zeichen sofort nach links ziehen","Rechtzeitig Handzeichen geben, Verkehr beobachten und nur abbiegen, wenn es sicher ist","Anhalten und den Roller grundsätzlich über jede Kreuzung schieben"],1,"Handzeichen ersetzt nicht den Schulterblick und die Beobachtung des Verkehrs."],
 ["Ein gemeinsamer Geh- und Radweg ist voller Fußgänger. Wie fährst du?",["Klingeln und mit 20 km/h durchfahren","Geschwindigkeit anpassen, Rücksicht nehmen und nötigenfalls warten","Auf den Gehweg daneben ausweichen"],1,"Fußgänger dürfen nicht gefährdet oder behindert werden."],
 ["Die Ampel wird gelb und du könntest nur mit einer starken Bremsung noch vor der Haltlinie stoppen. Was ist entscheidend?",["Immer Vollbremsung machen","Gefahrlos anhalten; ist das nicht mehr möglich, Kreuzung zügig räumen","Beschleunigen, weil Gelb freie Fahrt bedeutet"],1,"Gelb ordnet grundsätzlich Warten vor der Kreuzung an; entscheidend ist, ob noch gefahrlos angehalten werden kann."],
 ["Du hörst ein Martinshorn, kannst das Einsatzfahrzeug aber noch nicht sehen. Was ist richtig?",["Weiterfahren wie bisher","Aufmerksam werden, Geschwindigkeit reduzieren und freie Bahn ermöglichen, sobald die Situation klar ist","Sofort mitten auf der Fahrbahn stehen bleiben"],1,"Einsatzfahrzeugen mit Blaulicht und Martinshorn ist unverzüglich freie Bahn zu schaffen."],
 ["Vor dir liegt Laub auf nasser Fahrbahn, direkt danach kommt eine Kurve. Wann reduzierst du die Geschwindigkeit?",["Erst in der Kurve","Vor dem rutschigen Bereich und vor der Kurve","Gar nicht; 20 km/h sind immer sicher"],1,"Vor der Gefahr bremsen; auf rutschigem Untergrund möglichst keine hektischen Manöver."],
 ["Du möchtest an einem haltenden Bus vorbeifahren. Fahrgäste könnten die Fahrbahn betreten. Was ist richtig?",["Mit großem Abstand und erhöhter Bremsbereitschaft sehr vorsichtig fahren","Schnell vorbeifahren, bevor jemand aussteigt","Klingeln reicht aus"],0,"Mit plötzlich auftauchenden Fußgängern rechnen und besonders vorsichtig fahren."],
 ["Ein Radweg endet unmittelbar vor einer Kreuzung. Was machst du?",["Blind auf die Fahrbahn wechseln","Frühzeitig Verkehr beobachten, Geschwindigkeit anpassen und sicher einordnen","Auf dem Gehweg weiterfahren"],1,"Ein Wechsel der Verkehrsfläche muss rechtzeitig und sicher erfolgen."],
 ["Du hast Vorfahrt, siehst aber ein Auto, dessen Fahrer dich offensichtlich nicht bemerkt. Was ist richtig?",["Auf der Vorfahrt bestehen","Bremsbereit sein und nötigenfalls auf die Vorfahrt verzichten, um einen Unfall zu verhindern","Beschleunigen und klingeln"],1,"Vorfahrt ist kein Recht auf einen Unfall; Gefahrenabwehr geht vor."],
 ["Dein Bremsweg wird auf nasser Straße länger. Welche Folge ist richtig?",["Mehr Abstand und früher bremsen","Weniger Abstand, weil du nur 20 km/h fährst","Nur die Hinterradbremse benutzen"],0,"Bei schlechter Haftung brauchst du mehr Sicherheitsreserve."],
 ["Du fährst bei Dunkelheit. Das Vorderlicht fällt aus. Was ist richtig?",["Langsam weiterfahren reicht","Fahrt im öffentlichen Verkehr nicht einfach fortsetzen; Beleuchtung muss funktionieren","Handy-Taschenlampe in der Hand genügt"],1,"Vorgeschriebene Beleuchtung muss funktionieren; außerdem darf das Handy nicht in der Hand bedient werden."],
 ["Ein Fußgänger tritt am Zebrastreifen erkennbar an die Fahrbahn. Was tust du?",["Geschwindigkeit erhöhen","Warten und das Überqueren ermöglichen","Nur warten, wenn er bereits vor dem Roller steht"],1,"Am Fußgängerüberweg ist das Überqueren zu ermöglichen."],
 ["Du fährst hinter einem Auto. Warum ist zusätzlicher Abstand sinnvoll, obwohl dein Roller nur 20 km/h fährt?",["Damit Reaktions- und Bremsweg reichen, wenn das Auto plötzlich bremst","Nur damit Fahrräder überholen können","Abstand ist bei 20 km/h nicht nötig"],0,"Auch bei niedriger Geschwindigkeit brauchst du Reaktions- und Bremsweg."],
 ["Du hast zwei schwere Gegenstände am Lenker hängen. Was ist das Hauptproblem?",["Sie verändern Lenkung und Gleichgewicht und können die sichere Fahrzeugführung beeinträchtigen","Nur das höhere Gewicht des Akkus","Keines, solange der Roller noch fährt"],0,"Ladung darf Lenkung, Gleichgewicht und Bremsen nicht beeinträchtigen."]
 ];
 if(typeof q!=='undefined'&&!q.some(x=>x[4]?.hardV23)) hard.forEach(x=>{x[4]={hardV23:true};q.push(x)});
 const signQs=[
 ["Was bedeutet dieses Verkehrszeichen?",["Verbot der Einfahrt","Verbot für Fahrzeuge aller Art","Kreisverkehr"],1,"Der rote Kreis mit weißer Innenfläche bedeutet: Verbot für Fahrzeuge aller Art.",{kind:'generated-sign',sign:'allvehicles',hardV23:true}],
 ["Du siehst dieses Zeichen vor einer Kreuzung. Was musst du tun?",["Vorfahrt gewähren; anhalten nur wenn es die Verkehrslage verlangt","Immer vollständig anhalten","Du hast Vorfahrt"],0,"Bei 'Vorfahrt gewähren' musst du bevorrechtigten Verkehr durchlassen.",{kind:'generated-sign',sign:'yield',hardV23:true}],
 ["Welche Handlung verlangt dieses Zeichen?",["Nur langsamer werden","Vollständig anhalten und anschließend Vorfahrt beachten","Nur bei Querverkehr anhalten"],1,"STOP verlangt vollständiges Anhalten.",{kind:'generated-sign',sign:'stop',hardV23:true}],
 ["Was sagt dieses Zeichen über deine Vorfahrt aus?",["Du befindest dich auf einer Vorfahrtstraße","Die Vorfahrtstraße endet sofort","Rechts vor links gilt immer"],0,"Das gelbe Rautenschild kennzeichnet eine Vorfahrtstraße.",{kind:'generated-sign',sign:'diamond',hardV23:true}]
 ];
 if(typeof q!=='undefined'&&!q.some(x=>x[4]?.generatedSignV23)) signQs.forEach(x=>{x[4].generatedSignV23=true;q.push(x)});
 const oldStart=window.startQuiz||startQuiz;
 window.startQuiz=function(mode){
   if(mode!=='exam') return oldStart(mode);
   const easy=q.filter(x=>!x[4]?.hardV23&&!x[4]?.bollerSpecial);
   const difficult=q.filter(x=>x[4]?.hardV23);
   const fun=q.filter(x=>x[4]?.bollerSpecial);
   session={mode:'exam',items:[...shuffled(easy).slice(0,5),...shuffled(difficult).slice(0,14),...shuffled(fun).slice(0,1)].sort(()=>Math.random()-.5),idx:0,answers:[]};
   window.renderQuiz();
 };
 const prevRender=window.renderQuiz;
 window.renderQuiz=function(){
   prevRender();
   const it=session?.items?.[session.idx],meta=it?.[4],exam=session?.mode==='exam';
   if(meta?.kind==='generated-sign'){
     const qel=document.querySelector('.question');
     if(qel&&!document.querySelector('.v23-sign-media')){const d=document.createElement('div');d.className='v23-sign-media';d.innerHTML=signMarkup(meta.sign);qel.insertAdjacentElement('afterend',d)}
   }
   if(exam){
     document.querySelector('.feedback')?.remove();
     document.querySelectorAll('.answer.correct,.answer.wrong').forEach(b=>b.classList.remove('correct','wrong'));
   }
 };
 const st=document.createElement('style');st.textContent='.v23-sign-media{display:flex;justify-content:center;align-items:center;min-height:180px;margin:14px 0 22px}.v23-sign-media .sign{transform:scale(1.55)}';document.head.appendChild(st);
})();