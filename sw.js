// Service Worker DCE Gestionale — minimale, senza cache aggressiva.
// Serve solo a soddisfare i requisiti di "installabilità" del browser (Add to Home Screen / Installa app).
// Non mette in cache nulla: ogni apertura carica sempre l'ultima versione pubblicata su GitHub.

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Passthrough diretto: nessuna cache, sempre rete.
  e.respondWith(fetch(e.request));
});
