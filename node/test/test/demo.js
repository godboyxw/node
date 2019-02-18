var express = require('express')
var app = express()
var axios = require('axios')
app.get('/', function (req, res) {

  const url = "https://oapi.dingtalk.com/gettoken?appkey=dingibwm78daevcl1qke&appsecret=DojEdUuM_Mgp47_EYSLe4zewl8rgqglra-822a66aUl0rcYIEonR9sFETPGvY4tW"
  axios.get(url, {}).then((res) => {
    //console.log(res)
    console.log(res.data)
    // res.json(res.data)
  })
})
app.listen(3100, function () {
  console.log('success')
})