//同步两个异步请求的结果，，当两个异步请求结束，同步两个结束后的结果

let fs = require('fs');

let {promiseify} = util.promisify;
