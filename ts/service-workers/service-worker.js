((undefined) => {

  const INSTALL_EVENT = 'install';
  const ACTIVATE_EVENT = 'activate';
  const FETCH_EVENT = 'fetch';

  const CACHE_NAME = 'foobar-cache-v1';

  const CACHE_FILES = [
    './foobar.txt',
    './main.js'
  ]

  self.addEventListener('install', (event) => {
    console.log('WORKER: install');
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CACHE_FILES);
      })
    )
  })

  self.addEventListener('activate', (event) => {
    console.log('WORKER: activate');
  })

  self.addEventListener('fetch', (event) => {
    console.log('WORKER: fetch');
  })

})();
