const { join } = require('path');
const { createServer } = require('http');
const { parse } = require('url');
const connect = require('connect');
const proxy = require('proxy-middleware');
const serveStatic = require('serve-static');
const publicIp = require('public-ip');

const port = 8080;
const public = join(__dirname, 'public');
const dist = join(__dirname, 'dist');

function servePublicIp(req, res) {
  publicIp.v4().then(ip => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ ip }));
    res.end();
  });
}

var app = connect();
app.use('/whereami', proxy(parse('https://api.ip2country.info')));
app.use('/whoami', servePublicIp);
app.use(serveStatic(public));
app.use(serveStatic(dist));

// create http server and listen on port
createServer(app).listen(port);
console.log(`Server started on port ${port}`);
