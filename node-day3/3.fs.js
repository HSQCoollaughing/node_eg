//fs file System

let fs = require('fs');


//promise

function read(url) {
	return new Promise((resolve, reject)=>{
		fs.readFile(url, 'utf8', function(err, data) {
			if(err) return reject(err);
			resolve(data);
		});
	});
}

read('./1.txt').then(function(data) {
	console.log(data);
}, function(err) {
	console.log(err);
});

