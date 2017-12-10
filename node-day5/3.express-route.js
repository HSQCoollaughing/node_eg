let express = require('express');
let app = express();
app.listen(3000);

app.get('/signin', function (req, res) {
	res.end('登录');
});

app.post('/signin', function (req, res) {
	res.end('post登录');
});

app.get('/signup', function (req, res) {
	res.end('注册');
});

//*表示所有的方法  all表示所有的路径，一般放到最后
app.all('*', function (req, res) {
	res.end('404');
});

