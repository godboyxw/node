var express = require('express')
var app = express()
app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.send('success')
})
var server = app.listen(3100, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(host, port)
  console.log("访问地址为 http://localhost", host, port)
})