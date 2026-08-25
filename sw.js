const CACHE="eroller-v1.6.1";
const STATIC=["./styles.css?v=161","./app.js?v=161","./v11.js?v=161","./v12.js?v=161","./v13.js?v=161","./v14.js?v=161","./v15.js?v=161","./v16.js?v=161","./reaper.svg","./zeichen350.svg","./cloud.js?v=161","./admin.html","./admin.js","./manifest.webmanifest?v=161","./icon.svg?v=161"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  const isPage=e.request.mode==="navigate" || e.request.url.endsWith("/index.html") || e.request.url.endsWith("/");
  if(isPage){
    e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put("./index.html",copy));return r}).catch(()=>caches.match("./index.html")));
    return;
  }
  e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)));
});