exports.regConfig = function(app, path, cors) {
    var indexRouter = require('./routes/index')
    var loginRouter = require('./routes/login')
    var initManageComRouter = require('./routes/initManageCom')
    var findrecompanyRouter = require('./routes/findrecompany')
    var checkdetailRouter = require('./routes/checkdetail')
    var codetableRouter = require('./routes/codetable')
    var defineRouter = require('./routes/define')
    var findrecompanyByServiceRouter = require('./routes/findrecompanyByService')
    // 设置跨域
    app.use(
        cors({
            methods: ['GET', 'POST'],
            allowHeaders: [
                'Content-Type',
                'application/json;charset=utf-8;application/x-www-form-urlencoded',
            ]
        })
    )
    
    app.use('/index', indexRouter);
    app.use('/Login', loginRouter);
    app.use('/InitManageCom', initManageComRouter);
    app.use('/findrecompany', findrecompanyRouter)
    app.use('/checkdetail', checkdetailRouter)
    app.use('/codeTable', codetableRouter)
    app.use('/define', defineRouter)
    app.use('/findrecompanyByService', findrecompanyByServiceRouter)
}
