
function getSumOfTwoLowest(arr){
	let min_1 = Math.min(...arr);
	arr.splice(arr.indexOf(min_1),1);
	let min_2 = Math.min(...arr);
	arr.splice(arr.indexOf(min_2),1);
	return min_1 + min_2;	
}