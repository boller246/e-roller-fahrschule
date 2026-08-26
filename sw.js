const CACHE="eroller-v1.8.0";
const STATIC=["./styles.css?v=18","./app.js?v=18","./v11.js?v=18","./v12.js?v=18","./v13.js?v=18","./v14.js?v=18","./v15.js?v=18","./v16.js?v=18","./v17.js?v=18","./v18.js?v=18","./reaper.svg?v=18","./zeichen350.svg?v=18","./cloud.js?v=18","./admin.html","./admin.js","./manifest.webmanifest?v=18","./icon.svg?v=18"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  const isPage=e.request.mode==="navigate" || e.request.url.endsWith("/index.html") || e.request.url.endsWith("/");
  if(isPage){e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put("./index.html",copy));return r}).catch(()=>caches.match("./index.html")));return;}
  e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)));
});