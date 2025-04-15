const CACHE_NAME = 'fc-gudauta-v3';
const STATIC_CACHE = [
  '/fdfdq/',
  '/fdfdq/index.html',
  '/fdfdq/404.html',
  '/fdfdq/assets/index.css',
  '/fdfdq/assets/index.js',
  '/fdfdq/assets/react-vendor-C5eXiI5f.js',
  '/fdfdq/assets/ui-B5VS9Rxm.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
];

const ASSET_CACHE = [
  '/fdfdq/lovable-uploads/',
  '/fdfdq/favicon.ico',
  '/fdfdq/og-image.png',
  '/fdfdq/placeholder.svg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_CACHE);
    })
  );
  // Activate new service worker immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients immediately
      self.clients.claim()
    ])
  );
});

// Fetch event - network first for API, cache first for assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/fdfdq/index.html');
        })
    );
    return;
  }

  // Handle asset requests (images, etc)
  if (ASSET_CACHE.some(path => url.pathname.startsWith(path))) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request).then((response) => {
            // Cache the fetched response
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          });
        })
    );
    return;
  }

  // Network first strategy for everything else
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request);
      })
  );
});