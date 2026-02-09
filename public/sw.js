const CACHE_NAME = 'bella-beauty-v1'
const urlsToCache = [
  '/',
  '/_next/static/css/',
  '/_next/static/chunks/',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Don't cache external URLs in service worker for Vercel
        return cache.addAll(urlsToCache.filter(url => !url.startsWith('http')))
      })
  )
})

self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return
  
  // Skip external requests
  if (event.request.url.startsWith('http')) return
  
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
