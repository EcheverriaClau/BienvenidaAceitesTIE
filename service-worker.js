const CACHE_NAME = 'aceites-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './icon-192.png',
  './icon-512.png',
  './manifest.json'
];

// Instala y guarda en caché
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Carga desde la caché o desde la red
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
