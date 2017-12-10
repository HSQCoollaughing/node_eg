let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/login', function (req, res) {
	res.send('登录');
});

router.get('/reg', function (req, res) {
	// res.send('注册');
	res.sendFile(path.join(__dirname,'../views/reg.html'));
});

router.post('/reg', function (req, res) {
	// console.log(req.body);
	// res.send(req.body);
	res.render('result.ejs', req.body);

	res.render('result', {...reqbody,arr:[1,2,3,4,5],html:'<h1>我帅</h1>'});
});

module.exports = router;