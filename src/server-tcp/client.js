var net = require('net');
var socket = new net.Socket();
socket.setEncoding('utf8');

// connect to server ()
socket.connect('8000', 'localhost', function() {
    console.log('Conectado al SERVIDOR');
    socket.write('Ya podemos comunicarnos SIN NAVEGADOR')
});

// preparando entradas desde el terminal
process.stdin.resume();

// cuando recibe datos, los envia al servidor
process.stdin.on('data', function(data) {
    socket.write(data);
});

// :SERVIDOR
// cuando recibe datos de vuelta, los imprime en el  terminal
socket.on('data',function(data) {
    console.log(data);
});

// cuando el servidor se cierra
socket.on('close', function() {
    console.log('la conexion del servidor se CERRO!');
});
