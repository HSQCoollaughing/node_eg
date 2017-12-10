let http = require('http');
let url = require('url');
let querystring = require('querystring');
http.createServer(function(req, res) {
	let {pathname} = url.parse(req.url, true);
	res.setHeader('Content-Type', 'text/html;charset=utf8');
	if (pathname == '/visit') {
		let cookie = req.headers.cookie;
		let visit = 1;
		console.log(cookie);
		if (cookie){
			// let cookieObj = querystring.parse(cookie);
			let cookieObj = querystring.parse(cookie, '; ');
			if(cookieObj.visit){
				visit = +cookieObj.visit+1;
			}
		}
		res.setHeader('Set-Cookie', `visit=${visit}`);
		res.end(`亲，欢迎你第${visit}光临`);
	} else {
		res.end('404');
	}
}).listen(8080);