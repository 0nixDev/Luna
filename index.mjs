import Server from 'bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';

 

const bare =  new Server('/bare/', '');
const serve = new nodeStatic.Server('static/');

const server = http.createServer();

server.on('request', (request, response) => {
    if (bare.route_request(request, response)) return true;
    serve.serve(request, response);
});

server.on('upgrade', (req, socket, head) => {
	if(bare.route_upgrade(req, socket, head))return;
	socket.end();
});

console.log('  _      ')
console.log(' | |     ')
console.log(' | |     ')
console.log(' | |     ')
console.log(' | |____ ')
console.log(' |______|')
console.log('Luna running on localhost:8080')
server.listen(process.env.PORT || 8080);


