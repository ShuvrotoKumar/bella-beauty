const CACHE_NAME = 'bella-beauty-v1'
const urlsToCache = [
  '/',
  '/_next/static/css/',
  '/_next/static/chunks/',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})
