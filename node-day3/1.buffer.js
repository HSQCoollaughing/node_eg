//Buffer
// 1.通过长度创建
var buffer = Buffer.alloc(100); //相对这种方法比较耗性能
console.log(buffer);
console.log(buffer.length);

var buffer = Buffer.from([17, 18, 19, 0x11]); //会自动把10进制转化成16进制
console.log(buffer);

var buffer = Buffer.from('珠峰培训');
console.log(buffer);
console.log('1111111111111')
console.log(buffer.length);//转化成buffer后长度为buffer的长度


console.log(buffer.toString());

// 1) fill方法
var buffer = Buffer.allocUnsafe(100);
buffer.fill(0);
console.log(buffer);

// 2) slice方法 (截取， 克隆：深(递归循环，parse(strginify))， 浅(slice, assign, {...{}}))
//深拷贝 就是两个人长的一样但是毫无关系，浅拷贝就是两个对象中存放的空间是一样的
var obj = {name:{name:'zfpx'}};
var newObj = JSON.parse(JSON.stringify(obj));
console.log(newObj)

// var obj = {a: 1};
var obj = {name: 'zfpx'};
var arr = [obj, 2, 3];
var newArr = arr.slice(0);
arr[0].name = 'hello';
console.log(newArr);

var obj = {name: {name: 'zfpx'}};
var newObj = Object.assign({}, obj);
obj.name.name = 'hello';
console.log(newObj);


var buffer = Buffer.from([1, 2, 3]);
var newBuffer = buffer.slice(0, 1);//拷贝出来的存放的是内存地址空间
newBuffer[0] = 100;
console.log(newBuffer);



var buf1 = Buffer.from('珠峰');
var buf2 = Buffer.from('培训');

Buffer.MyConcat = function(list, totallLength) {

	if(typeof totallLength === 'undefined') {
		// var bufferLen = 0;
		// for(var i = 0; i< list.length; i++) {
		// 	bufferLen += Buffer.from(list[i]).length;
		// }
		// console.log('~~~~~~~~~')
		// console.log(bufferLen);
		// Buffer.alloc(bufferLen);
		totallLength = list.reduce((prev, next)=>prev+next.length, 0);
	}
	let buffer = Buffer.alloc(totallLength);
	let offset = 0;
	list.forEach(buff=>{
		buff.copy(buffer, offset);
		offset += buff.length;
	});
	return  buffer.slice(0, offset);
}

console.log(Buffer.MyConcat([buf1, buf2]).toString())
