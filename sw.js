const CACHE="eroller-v2.0.0";
const STATIC=["./styles.css?v=20","./app.js?v=20","./v11.js?v=20","./v12.js?v=20","./v13.js?v=20","./v14.js?v=20","./v15.js?v=20","./v16.js?v=20","./v17.js?v=20","./v18.js?v=20","./v19.js?v=20","./v20.js?v=20","./sensenmann2.png?v=20","./b350.png?v=20","./sensenmann.png?v=20","./boller-header.png?v=20","./zeichen350.svg?v=20","./cloud.js?v=20","./admin.html","./admin.js","./manifest.webmanifest?v=20","./icon.svg?v=20"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  const isPage=e.request.mode==="navigate" || e.request.url.endsWith("/index.html") || e.request.url.endsWith("/");
  if(isPage){e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put("./index.html",copy));return r}).catch(()=>caches.match("./index.html")));return;}
  e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)));
});