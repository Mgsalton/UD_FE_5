const cacheVersion = 'v1';
const cacheContents = [
    'index.html',
    'restaurant.html',
    '/data/restaurants.json',
    '/css/styles.css',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/img/1.jpg','/img/2.jpg','/img/3.jpg','/img/4.jpg','/img/5.jpg',
    '/img/6.jpg','/img/7.jpg','/img/8.jpg','/img/9.jpg','/img/10.jpg'
];

// This section of the code caches the contents of 'cacheContents'

self.addEventListener('install', (event) => {
    console.log('SW: installed');
    event.waitUntil(
        caches
        .open(cacheVersion)
        .then(cache => {
            console.log('SW: caching files');
            cache.addAll(cacheContents);
        })
        .then(() => self.skipWaiting())
    );
})

self.addEventListener('fetch', (event) => {
    console.log('SW: fetching');
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

// This section of code will remove previous versions of the cache on each refresh

/*self.addEventListener('activate', (event) => {
    console.log('SW: activated');
    event.waitUntil(
        caches.keys().then(cacheVersion => {
            return Promise.all(
                cacheVersion.map(cache => {
                    if(cache !== cacheVersion) {
                        console.log('SW: clearing old cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
})*/

/*
https://www.youtube.com/watch?v=ksXwaWHCW6k
*/
