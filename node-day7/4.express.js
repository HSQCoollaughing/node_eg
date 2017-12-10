let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();

//基本上所有的中间件模块都是一个函数，执行的结果才是真正的中间件函数

// mac
// vi /etc/hosts
// 输入 i进入编辑模式，然后按o切换到最后一行
// 把这二行拷贝进去。按esc退出编辑模式，再按 :x保存并保存并退出
app.use(cookieParser());

app.get('/write', function(req, res) {
	res.cookie('name', 'wind', {
		domain: 'a.zfpx.cn'
	});
	res.send('写入完毕');
});

app.get('/read', function(req, res) {
	// req.header.console.markTimeline();
	res.send(req.cookies);
});

app.listen(8080);
