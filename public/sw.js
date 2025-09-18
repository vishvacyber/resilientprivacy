const CACHE_NAME = 'resilient-privacy-v1'
const STATIC_CACHE = 'static-v1'
const DYNAMIC_CACHE = 'dynamic-v1'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/products',
  '/services',
  '/contact',
  '/favicon.ico',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/manifest.json',
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS)
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE)
          .map((cacheName) => caches.delete(cacheName))
      )
    })
  )
  self.clients.claim()
})

// Fetch event - implement caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip external requests
  if (url.origin !== location.origin) return

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // Return cached version if available
      if (cachedResponse) {
        return cachedResponse
      }

      // For images, use cache-first strategy
      if (request.destination === 'image') {
        return fetch(request).then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        })
      }

      // For API calls, use network-first strategy
      if (url.pathname.startsWith('/api/')) {
        return fetch(request).then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        }).catch(() => {
          return caches.match(request)
        })
      }

      // For pages, use stale-while-revalidate strategy
      return fetch(request).then((response) => {
        if (response.status === 200) {
          const responseClone = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone)
          })
        }
        return response
      }).catch(() => {
        return caches.match(request)
      })
    })
  )
})

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics())
  }
})

async function syncAnalytics() {
  // Sync analytics data when connection is restored
  try {
    const analyticsData = await getStoredAnalytics()
    if (analyticsData.length > 0) {
      await fetch('/api/analytics', {
        method: 'POST',
        body: JSON.stringify(analyticsData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      await clearStoredAnalytics()
    }
  } catch (error) {
    console.error('Analytics sync failed:', error)
  }
}

async function getStoredAnalytics() {
  // Implementation for getting stored analytics data
  return []
}

async function clearStoredAnalytics() {
  // Implementation for clearing stored analytics data
}
