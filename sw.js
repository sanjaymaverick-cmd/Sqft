const CACHE = "vedam-sqft-v1";
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(["./", "./index.html", "./manifest.json", "./icon.svg"])));
});
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((hit) => hit || fetch(event.request)));
});
