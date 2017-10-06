// build node server that handles HTTP requests and sends back the correct HTTP response
// must read the correct data from pets.json & include it response body
// send the appropriate response status code & content-type header


var http = require('http');
var fs = require('fs');





var server = http.createServer(function (req, res){
  console.log("req.method: " +req.method);
  console.log("req.url: " +req.url);
  fs.readFile('pets.json', function (err, data) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(data);
  })
})

server.listen(8000, function(){
  console.log("Listening to port 8000");
})
