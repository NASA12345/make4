const http = require('http');
const app = require('./app.js');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
// This gives the server of the whole program.
