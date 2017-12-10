/**
 * Created by alison_lin on 17/12/2.
 */
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
var crypto = require('crypto');
let app = express();
//此中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
//设置模板引擎
app.set('view engine','html');
//设置模板存放的根目录
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
let users = [];
app.listen(8080);
//当客户端通过 方式
app.get('/reg',function(req,res){
    let error = req.cookies.error || '';
    res.clearCookie('error');
    res.render('reg',{title:'用户注册',error});
});
app.post('/reg',function(req,res){
    let user = req.body;
    let oldUser = users.find(item=>item.username == user.username);
    if(oldUser){
        res.cookie('error','此用户名已占用，请换一个试试');
        //back是一个关键字，表示上一个页面，从哪来回哪去
        res.redirect('back');
    }else{//如果没有
        user.password = crypto.createHash('md5').update(user.password).digest('hex');
        users.push(user);
        res.redirect('/login');
    }
});
app.get('/login',function(req,res){
    let error = req.cookies.error || '';
    res.clearCookie('error');
    res.render('login',{title:'用户登录',error});
});
app.post('/login',function(req,res){
    let user = req.body;
    let oldUser = users.find(item=>item.username == user.username && item.password == crypto.createHash('md5').update(user.password).digest('hex'));
    if(oldUser){
        res.cookie('success','登录成功');
        res.cookie('username',oldUser.username);
        res.redirect('/user');
    }else{
        res.cookie('error','用户名或密码输入错误')
        res.redirect('back');
    }
});
app.get('/user',function(req,res){
    let success = req.cookies.success || '';
    let error = req.cookies.error || '';
    let username = req.cookies.username || '';
    res.clearCookie('success');
    res.clearCookie('error');
    res.render('user',{title:'用户主页',success,error,username})
});