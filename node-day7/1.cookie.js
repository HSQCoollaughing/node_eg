let http = require('http');
let url = require('url');
let server = http.createServer(function(req, res) {
	let {pathname} = url.parse(req.url, true);
	if(pathname == '/write') {
		res.setHeader('Set-Cookie', 'name=wind');
		res.end('write ok');
	} else if(pathname == '/read') {
		let cookie = req.headers.cookie;
		console.log(cookie);
		res.end(cookie);
	} else {
		res.end('404');
	}
}).listen(8080);