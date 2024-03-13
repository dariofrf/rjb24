const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/calendar.html',
  '/styles.css', // Add path to your CSS file if you have
  '/script.js', // Add path to your JavaScript file if you have
  'https://i.imgur.com/qHD51h7.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});