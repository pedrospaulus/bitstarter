var express = require('express');
var app = express();
var fs = require('fs');

var readFromFile = function(fileName){
    fs.readFile(fileName, function (err, data) {
  if (err) throw err;
  console.log(data);
	return data;
    });
};

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(readFromFile("index.html"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
