let express = require('express');
let app = express();
app.listen(8080);


app.param('id', function (req, res, next) {
	req.params.id = `你的学号是${req.params.id}`;
	next();
});
app.param('name', function (req, res, next) {
	req.params.name = `你的姓名是${req.params.name}`;
	next();
});
app.get('/user/:id/:name', function (req, res) {
	res.header('Content-type', 'text/plain;charset=utf8');
	res.end(`${req.params.id}${req.params.name}`);
});