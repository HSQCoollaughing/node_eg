//在文件中打印this不是global属性，node自带模块化功能，一个js文件就是一个模块，模块this不是global

// （闭包）
console.log(this); //this
console.log(this === global);

var a = 1; //每个文件都有局部作用域，不会讲属性挂载在global上  //去掉var 可以输出1，， var 局部作用域原因
console.log(global.a);

//全局变量 可以不声明直接使用
// console.log(global);
//console  console.info/error/warn/log/time/timeEnd
console.time('start');
for (let i = 0; i < 100; i++) {

}
console.timeEnd('start');
//process 进程  设置环境变量
// console.log(process);
console.log(process.env.NODE_ENV);

//在命令行里配置NODE_ENV， mac export/ windows set
//在webstorm中设置环境变量，
//如果代码放到服务器上，那就没有此环境变量，取不到可以走上线环境
let url = '';
if(process.env.NODE_ENV == 'dev') {
	url = 'http://localhost:3000';
} else {
	url = 'http://www.zhufengpeixun .cn';
}
console.log(url);

// 异步的，在当前队列的底部
// process.process.process.nextTick(callback);
process.nextTick(function() {
	// console.log('nextTick');
	// console.log(this);
});

// 第二个队列中
setImmediate(function() {
	// console.log('setImmediate');
	// console.log(this);
});

setTimeout(function() {
	// console.log('setTimeout');
	// console.log(this);
});

//形参(剩余运算符)
//拓展运算符
console.log([...[1,2], ...[3,4,5]]);

console.log({...{name: 'wind'}, ...{age: 18}});

//Buffer 缓存区
//clearImmediate  setImmediate 立即
//setInterval



