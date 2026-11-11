// Subir el número de versión cada vez que cambien los archivos, para que los
// dispositivos con la PWA instalada descarguen la versión nueva.
const CACHE_NAME = 'unitprecise-cache-v4';

// Archivos que queremos guardar en la memoria del celular
const urlsToCache = [
  './html/index.html',
  './css/style.css',
  './js/app.js'
];

// Evento de Instalación: Guarda los archivos en caché
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos en caché guardados con éxito');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de Activación: elimina cachés de versiones anteriores
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Evento Fetch: Intercepta las peticiones para usar la caché sin internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el archivo está en caché, lo devuelve. Si no, lo pide a internet.
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});