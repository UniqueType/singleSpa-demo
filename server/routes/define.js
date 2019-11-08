var express = require('express')
var router = express.Router()
var request = require('request')

router.post('/', function(req, res, next) {
    const options = {
        url: 'http://10.8.37.26:8080/commang/comlist', // req.query
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }, // req.headers
        body: JSON.stringify(req.body) // req.body
    };
    request.post(options, function(
        error,
        response,
        body
    ) {
        // 判断请求是否成功
        console.log(body)
        if (!error && response.statusCode == 200) {
            // 字符串转换为json
            var datas = JSON.parse(body)
                // 模板渲染
            res.send(datas)
        }
    })
})

router.post('/delete', function(req, res, next) {
    console.log(req.body)
    const options = {
        url: 'http://10.8.37.26:8080/commang/deletecom', // req.query
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }, // req.headers
        body: JSON.stringify(req.body) // req.body
    };
    request.delete(options, function(
        error,
        response,
        body
    ) {
        // 判断请求是否成功
        console.log(body)
        if (!error && response.statusCode == 200) {
            // 字符串转换为json
            var datas = JSON.parse(body)
            res.send(datas)
                // 模板渲染
                // res.render('code', datas)
        }
    })
})

router.post('/add', function(req, res, next) {
    console.log(req.body)
    const options = {
        url: 'http://10.8.37.26:8080/commang/addcom', // req.query
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }, // req.headers
        body: JSON.stringify(req.body) // req.body
    };
    request.post(options, function(
        error,
        response,
        body
    ) {
        // 判断请求是否成功
        console.log(body)
        if (!error && response.statusCode == 200) {
            // 字符串转换为json
            var datas = JSON.parse(body)
            res.send(datas)
        }
    })
})

router.post('/edit', function(req, res, next) {
    console.log(req.body)
    const options = {
        url: 'http://10.8.37.26:8080/commang/updatecom', // req.query
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }, // req.headers
        body: JSON.stringify(req.body) // req.body
    };
    request.post(options, function(
        error,
        response,
        body
    ) {
        // 判断请求是否成功
        console.log(body)
        if (!error && response.statusCode == 200) {
            // 字符串转换为json
            var datas = JSON.parse(body)
            res.send(datas)
        }
    })
})

module.exports = router