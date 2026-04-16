const CACHE_NAME = 'vita-nativa-v4';
const OFFLINE_URLS = [
  '/vita-nativa-app/',
  '/vita-nativa-app/index.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Para o index.html: network-first, fallback para cache (modo offline)
  if (url.pathname === '/vita-nativa-app/' || url.pathname === '/vita-nativa-app/index.html') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Para tudo o resto: cache-first (ícones, Leaflet, etc.)
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
