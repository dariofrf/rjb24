const CACHE_NAME = "v1";
const urlsToCache = [
  "/rjb24",
  "/rjb24/calendar.html",
  "/rjb24/styles.css", // Add path to your CSS file if you have
  "/rjb24/script.js", // Add path to your JavaScript file if you have
  "/rjb24/icon.png",
  "/rjb24/manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
