const CACHE_NAME = "v1";
const urlsToCache = [
  // "/rjb24/calendar.html",
  "/rjb24/styles.css", // Add path to your CSS file if you have
  "/rjb24/script.js", // Add path to your JavaScript file if you have
  "/rjb24/icon.png",
  "/rjb24/manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      const cachePromises = urlsToCache.map((urlToCache) => {
        return fetch(urlToCache, { mode: "no-cors" }) // Added no-cors mode to handle CORS policy for external resources
          .then((response) => {
            // Only cache successful responses
            if (response.status === 200 || response.type === "opaque") {
              return cache.put(urlToCache, response);
            }
            console.error(
              `Skipping caching for ${urlToCache}, not a successful response`
            );
          })
          .catch((error) => {
            console.error(`Failed to fetch and cache ${urlToCache}`, error);
          });
      });
      return Promise.all(cachePromises).then(() => {
        console.log("All requested resources have been cached");
      });
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
