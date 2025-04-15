const CACHE_NAME = 'fc-gudauta-v2';
const urlsToCache = [
  '/fdfdq/',
  '/fdfdq/index.html',
  '/fdfdq/assets/index.css',
  '/fdfdq/assets/index.js',
  '/fdfdq/lovable-uploads/e711e51e-481c-438c-987e-2aa5f999290a.png',
  '/fdfdq/lovable-uploads/10641be5-36c7-4f6d-a5b4-ee39048e40ac.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened successfully');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Cache installation failed:', error);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              })
              .catch((error) => {
                console.error('Cache put failed:', error);
              });

            return response;
          })
          .catch((error) => {
            console.error('Fetch failed:', error);
            return new Response('Network error occurred', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});