/**
 * Server TCP
 * @type {[type]}
 * example: code advaced
 * https://gist.github.com/creationix/707146
 */
var net = require('net');
var server = net.createServer(function(ccc) {
    console.log('conectado');

    ccc.on('data', function (data) {
        console.log(data + ' desde ' + ccc.remoteAddress + ' ' + ccc.remotePort);
        ccc.write('REPITIENDO : ' + data);
    });

    ccc.on('close', function() {
        console.log('Cliente cerro conexion');
    });

    ccc.on('end', function () {        
         console.log('EVENTO end');
    });

});
server.listen(8000, function() { //'listening' listener
  console.log("Server started! localhost:8000");
});






/*
var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  console.log('client connected');
  c.on('end', function() {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});
server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});
*/