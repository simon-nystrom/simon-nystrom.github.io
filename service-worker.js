!function(){"use strict";const e=1601322283583,t="cache"+e,s=["/client/inject_styles.5607aec6.js","/client/about.fa9a3b0c.js","/client/Tag.79a7f900.js","/client/index.e9effcbc.js","/client/[category].9276ecfd.js","/client/index.0e9d59af.js","/client/index.ecba3e24.js","/client/[slug].fe2bfc94.js","/client/BlogPosts.acad1f35.js","/client/client.2187ba97.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/images/sapper/sapper_folder_structure.png","/images/sapper/sapper_nav_bar.png","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();