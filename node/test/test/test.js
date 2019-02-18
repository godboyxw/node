var express = require('express')
var app = express()
var axios = require('axios')
app.get('/', function (req, res) {

  const url = "https://oapi.dingtalk.com/gettoken?appkey=dingibwm78daevcl1qke&appsecret=DojEdUuM_Mgp47_EYSLe4zewl8rgqglra-822a66aUl0rcYIEonR9sFETPGvY4tW"
  axios.get(url, {
    // headers: {
    //   referer: 'https://oapi.dingtalk.com',
    //   host: 'oapi.dingtalk.com'
    // },
    // params: req.query
  }).then((res) => {
    //console.log(res)
    console.log(res.data)
    // res.json(res.data)
  })

  axios({
    method: 'get',
    url: 'https://oapi.dingtalk.com/checkin/record?access_token=d6e84d7d8b333f30ae706599947bd0ab&department_id=1&start_time=1520956800000&end_time=1521966800000&offset=0&size=100&order=asc'
  }).then((res) => {
    console.log(res.data)
  })

  axios({
    method: 'post',
    url: 'https://oapi.dingtalk.com/service/get_corp_token?signature=kKlP1QmmXXX&timestamp=1548226706763&suiteTicket=xxx&accessKey=suitezmpdnvsw4xxxxx',
    data: {
      "auth_corpid": 'dinga1db62e064be442f35c2f4657eb6378f'
    }
  }).then((res) => {
    console.log(res.data)
  })

  axios({
    method: 'post',
    url: 'https://oapi.dingtalk.com/topapi/report/template/listbyuserid?access_token=d6e84d7d8b333f30ae706599947bd0ab',
    data: {
      offset: 0,
      size: 100
    }
  }).then((res) => {
    console.log(res.data, '.......................', res.data.result.template_list)
  })

  axios({
    method: 'post',
    url: 'https://oapi.dingtalk.com/topapi/checkin/record/get?access_token=d6e84d7d8b333f30ae706599947bd0ab',
    data: {
      userid_list: 'zhangsan',
      start_time: 1494852872446,
      end_time: 1494852872446,
      cursor: 0,
      size: 100
    }
  }).then((res) => {
    console.log(res.data, '----------------', res.data.result.page_list)

  })
})
app.listen(3100, function () {
  console.log('success')
})