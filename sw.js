const CACHE="eroller-v2.1.0";
const STATIC=["./styles.css?v=21","./app.js?v=21","./v11.js?v=21","./v12.js?v=21","./v13.js?v=21","./v14.js?v=21","./v15.js?v=21","./v16.js?v=21","./v17.js?v=21","./v18.js?v=21","./v19.js?v=21","./v20.js?v=21","./v21.js?v=21","./sensenmann2.png?v=21","./b350.png?v=21","./erollerb350.png?v=21","./erollerbier.png?v=21","./erollerbier2.png?v=21","./erollerbier3.png?v=21","./bierfussgaenger.png?v=21","./sensenmannfrei1.png?v=21","./sensenmann.png?v=21","./boller-header.png?v=21","./zeichen350.svg?v=21","./cloud.js?v=21","./admin.html","./admin.js","./manifest.webmanifest?v=21","./icon.svg?v=21"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  const isPage=e.request.mode==="navigate" || e.request.url.endsWith("/index.html") || e.request.url.endsWith("/");
  if(isPage){e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put("./index.html",copy));return r}).catch(()=>caches.match("./index.html")));return;}
  e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)));
});