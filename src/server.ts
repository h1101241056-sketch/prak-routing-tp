import * as http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url || '/';
  const method = req.method || 'GET';

  console.log(`[${new Date().toLocaleTimeString()}] ${method} ${url}`);

  // GET /
  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>🏠 Halaman Utama</h1><p>Selamat datang di Node.js + TypeScript!</p>');
  }

  // GET /about
  else if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>📄 About</h1><p>Ini routing manual.</p>');
  }

  // GET /api/users
  else if (url === '/api/users' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]));
  }

  // POST /api/users
  else if (url === '/api/users' && method === 'POST') {
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User berhasil dibuat' }));
  }

  // 404
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>❌ 404 Not Found</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server jalan di http://localhost:${PORT}`);
});