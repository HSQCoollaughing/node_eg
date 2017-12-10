let http = require('http');
let port = 3000;
http.createServer((req, res)=>{
	//req代表的是客户端，他是一个可读流
	//res代表的是服务端，他是一个可写流
	res.setHeader('Content-Type', 'text/plain;charset=utf8');
	res.end('你好，hello');
	console.log('start');
}).listen(port, ()=>{
	console.log(`服务器已经启动在${port}上`);
});

//端口号尽量使用3000以上端口