/*
* these modules need to be imported
* Request : http://localhost/?number=27.
* NOTE : Now the browser make two request: page,favicon
*/
var http = require("http");
var url = require("url");

http.createServer(function(request, response) {

     response.writeHead(200, {"Content-Type": "text/plain"});

     var params = url.parse(request.url, true).query;
     var input = params.number;

     // These are the generic JavaScript methods that will create random 
     var numInput = new Number(input);
     var numOutput = new Number(Math.random() * numInput).toFixed(0);
     
     // Write the random number to response
     response.write(numOutput);
     
     // Node requires us to explicitly end this connection.
     response.end();

}).listen(8000);

// Output a String
console.log("SERVER : Random Number Generator Running...");