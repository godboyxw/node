var axios = require('axios')
axios.get('http://127.0.0.1:3003/', {}).then(res => {
  console.log(res)
})