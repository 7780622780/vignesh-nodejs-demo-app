// Load the HTTP module
const http = require('http');

// Define the port
const PORT = 3000;

// Create a server object
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from Node.js!\n');
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
