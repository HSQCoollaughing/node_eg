let fs = require('fs');
let http = require('http');
let port = 3000;
http.createServer((req, res)=>{
	res.setHeader('Content-Type', 'text/html;charset=utf8');
	// fs.ReadStream(path, options);
	fs.createReadStream('index.html').pipe(res);
	// fs.readFile('index.html', (err, data)=>{
	// 	res.end(data);
	// });
	console.log('start');
}).listen(port, ()=>{
	console.log(`服务器已经启动在${port}上`);
});