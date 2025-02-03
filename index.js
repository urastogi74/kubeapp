const http = require('http');

const hostname = '0.0.0.0'; // Listen on all interfaces inside Docker
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Dockerized Node.js app!');
        res.end('THis is umang');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
