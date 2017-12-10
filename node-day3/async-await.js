let fs = require('fs');
function read(url) {
	return new Promise((resolve, reject)=>{
		fs.readFile(url, 'utf8', function(err, data) {
			if(err) return reject(err);
			resolve(data);
		});
	});
}

async function result() {
	let content1 = await read('./1.txt', 'uft8');
	let content2 = await read(content1, 'utf8');
	let str = content2 + '111';
	console.log(str);
}
result();