let express = require('express');
let app = express();
app.listen(8080, function () {
	console.log('start8080');
});

app.get('/user', function (req, res) {
	console.log(req.query.id);
	console.log(req.url);
	console.log(req.path);
	console.log(req.headers);
	console.log(req.method);
	res.end('用户');
});

// app.all('*', function (req, res) {
// 	res.end('404');
// });