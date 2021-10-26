const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.development.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.development.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./main.js",
    "./favicon.png"
]
const CACHE_NAME = "v1_sw_contador"

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then(() => {
                skipWaiting()
            }).catch(console.log)
        })
    )
})

self.addEventListener("activate", (e) => {
    const caheWhiteList = [CACHE_NAME]
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cache => {
                return (caheWhiteList.indexOf(cache) === -1 && caches.delete(cache))
            }))
        }).then(() => {
            clients.claim()
        })
    )
})

self.addEventListener("fetch", (e) => {
    if (!(e.request.url.indexOf('http') === 0)) return
    e.respondWith(
        caches.match(e.request).then((resp) => {
            return resp || fetch(e.request).then((response) => {
                let responseClone = response.clone()
                caches.open(CACHE_NAME).then((cache) => cache.put(e.request, responseClone))
                return response
            })
        })
    )
})