let express = require('express');
//引用express模块，express是个函数

let app = express(); //express函数执行后，返回的是一个http的监听函数，就是http.creatServer中的函数

//在此函数上扩展了一个listen可以监听端口

app.listen(8080, function () {
	console.log('start8080');
});