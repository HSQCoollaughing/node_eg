let fs = require('fs');
//读取类型都是buffer， 写入的时候utf8
//读取的文件必须存在，写的时候文件不存在会自动创建，里面有内容会覆盖掉
fs.writeFile('9.txt', Buffer.from('珠峰培训').toString());
fs.writeFile('9.txt', '{name:1,age:2}'); //默认会调用toString方法

fs.writeFile('9.txt', '{name:1,age:2}', function(err) {
	console.log(err);
});


//同步
fs.writeFileSync('9.txt', '{name:1,age:2}');