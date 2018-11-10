import app from '../app';
import http from 'http';
import debug from 'debug';

// const app = require('../app');
// const http = require('http');

let _debug = debug('app:server');

const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening)

function onError(error){
    if(error.syscall != 'listen'){
        throw error;
    }
}

function onListening(){
    console.log("Server is listeneing on port: " + server.address().port);
    _debug("Server is listeneing on port: " + server.address().port);
}
