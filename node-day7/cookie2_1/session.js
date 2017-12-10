/**
 * Created by alison_lin on 17/12/2.
 */
let express = require('express');
let session = require('express-session');
let app = express();
app.use(session({
    resave:true,//每次客户端来请求的时候都要重新保存session
    saveUninitialized:true,//保存未使用的session
    secret:'zfpx' //用来加密cookie的
}));
app.get('/write',function(req,res){
    req.session.username = 'zfpx';
    res.send('write');
})