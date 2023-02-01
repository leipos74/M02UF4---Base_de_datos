#!/bin/node

//#!/urs/bin/env node



const http = require('http');


let http_server = http.createServer(function(request, result){
	console.log("alguien se conecta");
	result.write('ola qeu ase');
	result.end();
});

http_server.listen(8080);
