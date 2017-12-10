var calc = function(...values){
	let sum = 0;
    for( let i = 0, len = values.length; i < len; i++ ){
        sum += values[i];
    }
    return sum;
}


module.exports = calc;