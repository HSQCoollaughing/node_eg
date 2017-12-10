let express = require('express');

let app = express();
app.listen(3000);


let user = require('./routes/user');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user', user);

let article = require('./routes/article');
app.use('/article', article);