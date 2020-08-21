function findUniq(arr){
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	if(arr.indexOf(min) === arr.lastIndexOf(min))
		return min;
	if(arr.indexOf(max) === arr.lastIndexOf(max))
		return max;
}