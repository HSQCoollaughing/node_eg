var fs = require('fs');

// function copySync(source, target) { //带sync是同步
// 	let result = fs.readFileSync(source,'utf8');
// 	fs.writeFileSync(target, result);
// }

// copySync('10_1.js', '10_2.js');

function copy(source, target, callback) {
	fs.readFile(source, function (err,data) { // err错误第一
	    if(err) return callback(err);
	    fs.writeFile(target,data, callback)
	});
};

copy('10_1.js', '10_2.js', function(err) {
	console.log('拷贝成功');
});