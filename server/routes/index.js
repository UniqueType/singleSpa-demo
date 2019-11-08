var express = require('express')
var router = express.Router()
var request = require('request')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: ' Here is Index' })
// })

router.get('/', function(req, res, next) {
  request('http://10.8.37.26:8080/InitManageCom', function(
    error,
    response,
    body
  ) {
    // 判断请求是否成功
    if (!error && response.statusCode == 200) {
      // 字符串转换为json
      var datas = JSON.parse(body)
      // 模板渲染
      res.render('index', datas)
      res.end()
    }
  })
})

// router.get('/list', function(req, res, next) {
//   res.render('list', { title: 'Here is List' })
// })

module.exports = router
