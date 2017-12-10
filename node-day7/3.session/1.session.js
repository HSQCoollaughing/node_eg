let express = require('express');
let session = require('express-session');
let app = express();
app.use(session({
	resave: true, //每次客户端来请求的时候都要重新保存session
	saveUninitialized: true, //保存未使用过的session
	secret: 'wind' //用来加密cookie的
}));

app.get('/write', function(req, res) {
	req.session.username = 'wind'; //给session赋属性,写入session对象
	res.send('write');
	// 	      connect.sid=s%3A8kOcXQjM09k_ohWPGkiLPvFpOQaXrVCJ.FUz4N0OHmM9WJ7IU%2F5MqqhTZoiYsC1Naq58eG4S1ntI
	// Cookie:connect.sid=s%3A8kOcXQjM09k_ohWPGkiLPvFpOQaXrVCJ.FUz4N0OHmM9WJ7IU%2F5MqqhTZoiYsC1Naq58eG4S1ntI
});

app.get('/read', function(req, res) {
	res.send(req.session.username);
});

app.listen(8080);