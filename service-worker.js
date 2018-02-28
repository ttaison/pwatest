var cacheName = 'weatherPWA-step-6-2';
var filesToCache = [];

self.addEventListener('install', function(e){
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			console.log('[ServiceWorker] Cacheing app shell');
			return cache.addAll(filesToCache);
		})
		);
});

self.addEventListener('activate', function(e){
	console.log('[ServiceWorker] Activate');
});