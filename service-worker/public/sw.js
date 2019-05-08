/* eslint-disable no-restricted-globals */
self.oninstall = () => {
    caches.open('string1')
    .then(cache => {
        cache.addAll([
            '/',
            'index.html'
        ])
        .then(() => console.log('cached!'))
        .catch(err => console.log(err));
    });
};

self.onactivate = () => console.log('activated!');

self.onfetch = event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
};
