let express= require('express');
let app = express();
app.listen(8080);

app.get('/json', function(req, res){
	res.json({id: '001', name: '软硬件'});
});

app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
})