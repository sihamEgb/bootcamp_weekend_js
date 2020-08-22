function abbreviate(str){
	let arr = str.split(" ");
	arr[0] = arr[0].toUpperCase()[0];
	arr[1] = arr[1].toUpperCase()[0];
	return arr.join(".")
}