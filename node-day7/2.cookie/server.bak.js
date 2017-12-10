/*
*权限管理系统
*注册 reg
*登录 logion
*欢迎页 user
*/

let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

let crypto = require('crypto');

let app = express();
app.set('view engine', 'html');
app.set('views', path.resolve('views'));
app.engine('html', require('ejs').__express);
let users = [];
app.listen(8080);

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.get('/reg', function(req, res) {
	let error = req.cookies.error || '';
  	res.clearCookie('error');
	res.render('reg', {title: '用户注册', error});
});

app.post('/reg', function(req, res) {
	let user = req.body;
	if (user.username != '' && user.password != '') {
		let oldUser = users.find(item=>item.username == user.username);
		if (oldUser) {
			res.cookie('error', '此用户名已经被占用，请换一个试试');
			res.redirect('back');
		} else {
			user.password = crypto.createHash('md5').update(user.password).digest('hex');
			users.push(user);
			res.redirect('/login');
		}
	}
});

app.get('/login', function(req, res) {
	let error = req.cookies.error || '';
  	res.clearCookie('error');
	res.render('login', {title: '用户登录', error});
});

app.post('/login', function(req, res) {
	let user = req.body;
	if (user.username != '' && user.password != '') {
		let oldUser = users.find(item=>item.username == user.username && item.password == crypto.createHash('md5').update(user.password).digest('hex'));
		if (oldUser) {
			res.cookie('success', '登录成功');
			res.cookie('username', oldUser.username);
			res.redirect('/user');
		} else {
			res.cookie('error','用户名或密码输入错误');
			res.redirect('back');
		}
	}
});

//用户主页
app.get('/user',function(req,res){
	let success = req.cookies.success || '';
	let username = req.cookies.username || '';
	let error = req.cookies.error || '';
	res.clearCookie('success');
	res.clearCookie('error');
	res.render('user',{title:'用户主页', success, username, error});
});

