// Service worker mínimo: só habilita a instalação do app.
// Não guarda nada em cache, então os dados das metas sempre vêm atualizados da planilha.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
