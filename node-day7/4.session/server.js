/*
*权限管理系统
*注册 reg
*登录 logion
*欢迎页 user
*/

let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let session = require('express-session');

let crypto = require('crypto');

let app = express();
app.set('view engine', 'html');
app.set('views', path.resolve('views'));
app.engine('html', require('ejs').__express);
let users = [];
app.listen(8080);

app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
	resave: true, //每次客户端来请求的时候都要重新保存session
	saveUninitialized: true, //保存未使用过的session
	secret: 'wind' //用来加密cookie的
}));

app.get('/reg', function(req, res) {
	let error = req.session.error || '';
	req.session.error = ''; 
	res.render('reg', {title: '用户注册', error});
});

app.post('/reg', function(req, res) {
	let user = req.body;
	if (user.username != '' && user.password != '') {
		let oldUser = users.find(item=>item.username == user.username);
		if (oldUser) {
			req.session.error = '此用户名已经被占用，请换一个试试';
			res.redirect('back');
		} else {
			user.password = crypto.createHash('md5').update(user.password).digest('hex');
			users.push(user);
			res.redirect('/login');
		}
	}
});

app.get('/login', function(req, res) {
	let error = req.session.error || '';
  	req.session.error = ''; 
	res.render('login', {title: '用户登录', error});
});

app.post('/login', function(req, res) {
	let user = req.body;
	if (user.username != '' && user.password != '') {
		let oldUser = users.find(item=>item.username == user.username && item.password == crypto.createHash('md5').update(user.password).digest('hex'));
		if (oldUser) {
			req.session.success = '登录成功';
			req.session.username = oldUser.username;
			res.redirect('/user');
		} else {
			req.session.error = '用户名或密码输入错误';
			res.redirect('back');
		}
	}
});

//用户主页
app.get('/user',function(req,res){
	let success = req.session.success || '';
	let username = req.session.username || '';
	let error = req.session.error || '';
	req.session.success = '';
	req.session.error = '';
	res.render('user',{title:'用户主页', success, username, error});
});

