var express = require('express')
var app = express()
app.get('/', function (req, res) {
  // res.send('11')
  res.json({
    'username': 'xw'
  })
})
app.listen(3200, function () {
  console.log('success')
})