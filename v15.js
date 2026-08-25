// V1.5 – Startseite näher am gewünschten Mockup: sichtbarer Sensenmann + Zeichen 350
(function(){
  const css=document.createElement('style');
  css.textContent=`
    .boller-hero{min-height:430px;padding:28px 30px 34px;background:
      radial-gradient(circle at 75% 28%,rgba(255,190,20,.12),transparent 24%),
      repeating-linear-gradient(165deg,transparent 0 34px,rgba(255,190,25,.035) 35px 37px),
      linear-gradient(135deg,#020202 0%,#0c0c0c 58%,#020202 100%)}
    .boller-copy{max-width:58%}
    .hero-reaper{position:absolute;right:3%;top:28px;width:40%;height:330px;z-index:2;pointer-events:none;filter:drop-shadow(0 12px 14px rgba(0,0,0,.75))}
    .hero-reaper .cape{position:absolute;right:20%;top:24px;width:205px;height:238px;border-radius:48% 52% 45% 45%;background:radial-gradient(circle at 50% 32%,#202020 0 34%,#070707 35% 100%);border:2px solid #555;transform:rotate(5deg)}
    .hero-reaper .head{position:absolute;right:33%;top:45px;font-size:94px;z-index:3;filter:grayscale(.2)}
    .hero-reaper .body{position:absolute;right:27%;top:133px;font-size:120px;z-index:2;transform:rotate(-7deg)}
    .hero-reaper .scythe{position:absolute;right:-4px;top:-10px;font-size:178px;z-index:4;transform:rotate(-18deg)}
    .hero-reaper .thumb{position:absolute;left:3px;top:82px;font-size:62px;z-index:5}
    .hero-reaper .scoot{position:absolute;right:5%;bottom:2px;font-size:100px;z-index:5;transform:scaleX(-1)}
    .hero-reaper .dust{position:absolute;right:-8px;bottom:9px;font-size:54px;opacity:.8}
    .hero-vz350{position:absolute;right:17px;bottom:38px;z-index:7;width:96px;padding:8px 8px 6px;background:#f4f4f4;border:3px solid #111;border-radius:10px;box-shadow:0 7px 16px rgba(0,0,0,.45);transform:rotate(2deg)}
    .hero-vz350 img{display:block;width:100%;height:auto}.hero-vz350 b{display:block;text-align:center;color:#111;font-size:12px;margin-top:4px}
    .hero-warning-sign{position:absolute;right:3%;top:55%;z-index:6;width:125px;min-height:125px;display:grid;place-items:center;text-align:center;color:#111;font-size:13px;font-weight:1000;line-height:1.08;transform:rotate(4deg)}
    .hero-warning-sign:before{content:'';position:absolute;width:102px;height:102px;background:#f6bc14;border:5px solid #111;outline:2px solid #f6bc14;transform:rotate(45deg);border-radius:8px;z-index:-1}
    .hero-warning-sign span{display:block;max-width:82px}.hero-warning-sign .tiny{font-size:22px;margin-bottom:2px}
    .boller-warning{position:relative;z-index:8}
    @media(max-width:760px){
      .boller-hero{min-height:520px;padding:26px 20px}.boller-copy{max-width:100%;position:relative;z-index:8}.boller-kicker{font-size:52px}.boller-title{font-size:40px;max-width:72%}
      .hero-reaper{width:62%;right:-6%;top:128px;height:330px;opacity:1}.hero-reaper .cape{right:18%;width:175px;height:220px}.hero-reaper .head{right:30%;font-size:80px}.hero-reaper .body{right:24%;font-size:104px}.hero-reaper .scythe{font-size:145px}.hero-reaper .scoot{font-size:86px}
      .hero-warning-sign{right:4%;top:auto;bottom:135px;width:105px}.hero-warning-sign:before{width:88px;height:88px}.hero-warning-sign span{font-size:11px;max-width:72px}.hero-warning-sign .tiny{font-size:18px}
      .hero-vz350{right:17px;bottom:28px;width:84px}.boller-warning{margin-top:238px;max-width:78%}
    }
    @media(max-width:430px){
      .boller-hero{min-height:555px}.boller-kicker{font-size:48px}.boller-title{font-size:36px;max-width:78%}
      .hero-reaper{top:142px;right:-12%;width:72%}.hero-vz350{width:78px;right:10px}.boller-warning{margin-top:250px;font-size:13px;max-width:84%}
    }
  `;
  document.head.appendChild(css);

  const baseHome=window.home;
  window.home=function(){
    baseHome();
    const hero=document.querySelector('.boller-hero');
    if(!hero)return;
    const old=hero.querySelector('.reaper'); if(old) old.remove();
    hero.insertAdjacentHTML('beforeend',`
      <div class="hero-reaper" aria-hidden="true">
        <div class="cape"></div><div class="head">💀</div><div class="body">🦴</div><div class="thumb">👍</div><div class="scythe">🪓</div><div class="scoot">🛴</div><div class="dust">💨</div>
      </div>
      <div class="hero-warning-sign" aria-hidden="true"><span><span class="tiny">🛴</span>FAHR MIT KÖPFCHEN<br>ODER GAR NICHT!</span></div>
      <div class="hero-vz350"><img src="https://sevas.nrw.de/vz/350.svg" alt="Zeichen 350 Fußgängerüberweg"><b>ZEICHEN 350</b></div>`);
  };
  if((location.hash.slice(1)||'home')==='home') window.home();
})();