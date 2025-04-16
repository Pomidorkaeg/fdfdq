const CACHE_NAME = 'gudauta-fc-cache-v1';
const urlsToCache = [
  '/fdfdq/',
  '/fdfdq/index.html',
  '/fdfdq/404.html',
  '/fdfdq/assets/index-B5Qt9EMX.js',
  '/fdfdq/assets/index-B5Qt9EMX.css',
  '/fdfdq/favicon.ico',
  '/fdfdq/manifest.json',
  '/fdfdq/logo192.png',
  '/fdfdq/logo512.png'
];

const ASSET_CACHE = [
  '/fdfdq/lovable-uploads/',
  '/fdfdq/og-image.png',
  '/fdfdq/placeholder.svg'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  // Activate new service worker immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - network first with cache fallback for HTML, 
// cache first for assets, network-only for API
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clonedResponse);
          });
          return response;
        })
        .catch(() => {
          return caches.match('/fdfdq/index.html');
        })
    );
    return;
  }

  // Handle static assets - cache first strategy
  if (url.pathname.startsWith('/fdfdq/assets/') || 
      ASSET_CACHE.some(path => url.pathname.startsWith(path))) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request)
            .then(networkResponse => {
              const clonedResponse = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, clonedResponse);
              });
              return networkResponse;
            });
        })
    );
    return;
  }

  // All other requests - network first
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});