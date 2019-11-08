// node服务 启动项
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var myapp = require('./app');

var app = express();
// 日志
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// 缓存
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

// view engine setup
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// 注册路由
myapp.regConfig(app, path, cors);

var server = app.listen(3002, function () {
  // var host = server.address().address
  // var port = server.address().ports
  console.log("Node Server Running at: http://localhost:3002")
});