//写好的方法

function Dialog() {
	this.time = 3000;
}

Dialog.title = '弹框';

Dialog.prototype.$show = function () {
	console.log('show');
}

Dialog.prototype.$hide = function () {
	console.log('hide');
}
// {Dialog:Dialog}
exports.Dialog = Dialog