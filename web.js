var fs =require('fs');
var express = require('express');

var app = express.createServer(express.logger());

words = fs.readFileSync(index.html, encoding String)

app.get('/', function(request, response) {
  response.send(words);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
