const CACHE_NAME = 'unitprecise-cache-v1';

// Archivos que queremos guardar en la memoria del celular
const urlsToCache = [
  './html/index.html',
  './css/style.css',
  './js/app.js'
];

// Evento de Instalación: Guarda los archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos en caché guardados con éxito');
        return cache.addAll(urlsToCache);
      })
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