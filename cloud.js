const ER_SUPABASE_URL='https://pofyhsmewubtskahctsv.supabase.co';
const ER_SUPABASE_KEY='sb_publishable_Zu6YTxFmw3H1A1Blo39o9Q_x5ezokIT';
const erSupabase=window.supabase?.createClient(ER_SUPABASE_URL,ER_SUPABASE_KEY);

const DRIVER_KEY='eroller_participant_name';
function currentDriver(){return (localStorage.getItem(DRIVER_KEY)||'').trim().slice(0,80)}
function escDriver(v=''){return String(v).replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[m]))}
function driverDialog(){
  return new Promise(resolve=>{
    document.getElementById('driverGate')?.remove();
    const old=currentDriver();
    const wrap=document.createElement('div');
    wrap.id='driverGate';
    wrap.innerHTML=`<div class="driver-backdrop"><div class="driver-card"><div class="driver-skull">💀🛴</div><h2>Wer riskiert heute sein Leben?</h2><p>Vorname oder Spitzname reicht. Kein Konto, keine E-Mail, kein Passwort.</p><input id="driverNameInput" maxlength="80" autocomplete="nickname" placeholder="Vorname oder Spitzname" value="${escDriver(old)}"><label class="driver-remember"><input id="driverRemember" type="checkbox" checked> Name auf diesem Gerät merken</label><div class="driver-actions"><button class="btn ghost" id="driverCancel">Abbrechen</button><button class="btn" id="driverGo">Los geht’s →</button></div></div></div>`;
    document.body.appendChild(wrap);
    const input=document.getElementById('driverNameInput');
    setTimeout(()=>{input.focus();input.select()},50);
    const done=(name)=>{wrap.remove();resolve(name)};
    document.getElementById('driverCancel').onclick=()=>done('');
    document.getElementById('driverGo').onclick=()=>{const n=input.value.trim().slice(0,80);if(!n){input.focus();input.style.borderColor='#ef4444';return}if(document.getElementById('driverRemember').checked)localStorage.setItem(DRIVER_KEY,n);else localStorage.removeItem(DRIVER_KEY);done(n)};
    input.addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('driverGo').click()});
  });
}

const driverCss=document.createElement('style');
driverCss.textContent=`.driver-backdrop{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.82);display:flex;align-items:center;justify-content:center;padding:20px}.driver-card{width:min(430px,100%);background:#101010;border:1px solid #55451e;border-radius:22px;padding:24px;color:#fff;box-shadow:0 24px 80px #000;text-align:center}.driver-skull{font-size:52px}.driver-card h2{margin:8px 0;color:#ffbf19;font-size:25px}.driver-card p{color:#bbb;line-height:1.45}.driver-card input[type=text],.driver-card input:not([type]){box-sizing:border-box;width:100%;padding:14px 15px;border-radius:12px;border:1px solid #555;background:#191919;color:#fff;font-size:17px}.driver-remember{display:flex;gap:9px;align-items:center;text-align:left;margin:15px 2px;color:#ccc}.driver-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:18px}.driver-chip{display:flex;align-items:center;justify-content:center;gap:9px;margin:12px auto 4px;color:#aaa;font-size:13px}.driver-chip button{background:none;border:0;color:#ffbf19;text-decoration:underline;cursor:pointer;font:inherit}`;
document.head.appendChild(driverCss);

let activeDriver='';
const originalStartQuiz=window.startQuiz;
if(typeof originalStartQuiz==='function'){
  window.startQuiz=async function(mode){
    const name=await driverDialog();
    if(!name){if(mode==='practice' && typeof window.home==='function')window.home();return}
    activeDriver=name;
    return originalStartQuiz(mode);
  };
}

function addDriverChip(){
  if(document.getElementById('driverChip'))return;
  const name=currentDriver(); if(!name)return;
  const host=document.querySelector('.mh')||document.getElementById('app'); if(!host)return;
  const chip=document.createElement('div');chip.id='driverChip';chip.className='driver-chip';chip.innerHTML=`👤 Fahrer: <strong>${escDriver(name)}</strong> <button type="button">Fahrer wechseln</button>`;
  chip.querySelector('button').onclick=async()=>{const n=await driverDialog();if(n){activeDriver=n;chip.querySelector('strong').textContent=n}};
  const footer=document.querySelector('.mh-footer-admin'); if(footer)host.insertBefore(chip,footer); else host.appendChild(chip);
}
const originalHome=window.home;if(typeof originalHome==='function'){window.home=function(){originalHome();setTimeout(addDriverChip,0)}}

const originalFinishQuiz=window.finishQuiz;
if(typeof originalFinishQuiz==='function'){
  window.finishQuiz=async function(){
    const snap=session?{mode:session.mode,items:session.items,answers:[...session.answers]}:null;
    const name=(activeDriver||currentDriver()).trim().slice(0,80);
    if(snap&&name&&erSupabase){
      const score=snap.items.reduce((s,it,i)=>s+(snap.answers[i]===it[2]?1:0),0),total=snap.items.length,passed=snap.mode==='exam'?score>=17:score>=8;
      const wrong=snap.items.map((it,i)=>({nr:i+1,question:it[0],selected:snap.answers[i],correct:it[2]})).filter(x=>x.selected!==x.correct);
      const deviceId=localStorage.getItem('eroller_device_id')||crypto.randomUUID();localStorage.setItem('eroller_device_id',deviceId);
      try{const {error}=await erSupabase.from('eroller_results').insert({participant_name:name,mode:snap.mode==='exam'?'Pruefung':'Uebung',score,total,passed,wrong_answers:wrong,device_id:deviceId});if(error)console.warn('Cloud-Speicherung derzeit nicht verfügbar:',error.message)}catch(e){console.warn('Cloud-Speicherung derzeit nicht verfügbar:',e)}
    }
    activeDriver='';return originalFinishQuiz();
  };
}
setTimeout(addDriverChip,0);