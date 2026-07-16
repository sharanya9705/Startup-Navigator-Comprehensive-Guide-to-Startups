const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'application/javascript; charset=utf-8', '.json':'application/json; charset=utf-8' };
http.createServer((req,res) => {
  const url = new URL(req.url, 'http://localhost');
  let file = decodeURIComponent(url.pathname);
  if (file === '/') file = '/index.html';
  const target = path.resolve(root, '.' + file);
  if (!target.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(target, (err,data) => {
    if (err) { fs.readFile(path.join(root,'index.html'), (fallbackErr, fallback) => { res.writeHead(fallbackErr ? 404 : 200, {'Content-Type':'text/html; charset=utf-8'}); res.end(fallbackErr ? 'Not found' : fallback); }); return; }
    res.writeHead(200, {'Content-Type': types[path.extname(target)] || 'application/octet-stream'}); res.end(data);
  });
}).listen(process.env.PORT || 3000, () => console.log('Startup Navigator running'));
