const ER_SUPABASE_URL='https://awxymisoktavtelvvzjr.supabase.co';
const ER_SUPABASE_KEY='sb_publishable_H8Q7aNslULZcltTbR1fyFQ_ddaPV3s8';
const erSupabase=window.supabase?.createClient(ER_SUPABASE_URL,ER_SUPABASE_KEY);

function getParticipantName(){
  let name=(localStorage.getItem('eroller_participant_name')||'').trim();
  if(!name){
    name=(prompt('Name des Fahrers für die Ergebnisliste:')||'').trim();
    if(name) localStorage.setItem('eroller_participant_name',name.slice(0,80));
  }
  return name.slice(0,80);
}

function ensureCloudBox(){
  const hero=document.querySelector('.hero');
  if(!hero || document.getElementById('cloudParticipant')) return;
  const name=localStorage.getItem('eroller_participant_name')||'';
  const box=document.createElement('div');
  box.id='cloudParticipant';
  box.className='card';
  box.style.marginTop='14px';
  box.innerHTML=`<strong>Fahrer:</strong> <span id="cloudName">${name||'noch nicht gesetzt'}</span> &nbsp; <button class="btn ghost" id="changeCloudName" style="padding:7px 10px">Name ändern</button>`;
  hero.insertAdjacentElement('afterend',box);
  document.getElementById('changeCloudName').onclick=()=>{
    const n=(prompt('Name des Fahrers:',localStorage.getItem('eroller_participant_name')||'')||'').trim();
    if(n){localStorage.setItem('eroller_participant_name',n.slice(0,80));document.getElementById('cloudName').textContent=n.slice(0,80)}
  };
}

const originalHome=window.home;
if(typeof originalHome==='function'){
  window.home=function(){originalHome();setTimeout(ensureCloudBox,0)};
}

const originalFinishQuiz=window.finishQuiz;
if(typeof originalFinishQuiz==='function'){
  window.finishQuiz=async function(){
    const snap=session ? {mode:session.mode,items:session.items,answers:[...session.answers]} : null;
    const name=getParticipantName();
    if(snap && name && erSupabase){
      const score=snap.items.reduce((s,it,i)=>s+(snap.answers[i]===it[2]?1:0),0);
      const total=snap.items.length;
      const passed=snap.mode==='exam'?score>=17:score>=8;
      const wrong=snap.items.map((it,i)=>({nr:i+1,question:it[0],selected:snap.answers[i],correct:it[2]})).filter(x=>x.selected!==x.correct);
      const deviceId=localStorage.getItem('eroller_device_id')||crypto.randomUUID();
      localStorage.setItem('eroller_device_id',deviceId);
      try{
        const {error}=await erSupabase.from('eroller_results').insert({participant_name:name,mode:snap.mode==='exam'?'Pruefung':'Uebung',score,total,passed,wrong_answers:wrong,device_id:deviceId});
        if(error) console.warn('Cloud-Speicherung derzeit nicht verfügbar:',error.message);
      }catch(e){console.warn('Cloud-Speicherung derzeit nicht verfügbar:',e)}
    }
    return originalFinishQuiz();
  };
}

setTimeout(ensureCloudBox,0);
