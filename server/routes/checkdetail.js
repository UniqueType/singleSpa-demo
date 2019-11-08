var express = require('express')
var router = express.Router()
var request = require('request')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: ' Here is Index' })
// })

router.post('/', function(req, res, next) {
    // console.log(req.body);
    const options = {
        url: 'http://10.8.37.26:8080/recompany/checkdetail', // req.query
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }, // req.headers
        body: JSON.stringify(req.body) // req.body
    };
    request.post(options, function(error, response, body) {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf8' });
        res.write(body);
        res.end();
    })
})

// router.get('/list', function(req, res, next) {
//   res.render('list', { title: 'Here is List' })
// })

module.exports = router