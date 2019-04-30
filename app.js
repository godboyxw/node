var http = require('http')

http.createServer(function (req, res) {
  // 发送 HTTP 头部 
  // HTTP 状态值: 200 : OK
  // 内容类型: text/html
  console.log(req.httpVersion); //1.1
  console.log(req.headers);

  console.log(req.method); //GET
  console.log(req.url); //  /
  console.log(req.trailers); // {}
  console.log(req.complete); //false
  res.writeHead(200, {
    'content-Type': 'text/html'
  })
  // 发送响应数据
  res.write('<h1>hello world</h1>')
  res.end('<p>node.js</p>')
}).listen(8888)
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');