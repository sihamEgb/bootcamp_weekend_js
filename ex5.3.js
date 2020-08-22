function toCamelCase(str){
	let arr = str.split("_");
	arr = arr.join("-").split("-");
	let firstElement = arr[0];
	let newArr = arr.map(word => word[0].toUpperCase()+word.slice(1));
	newArr[0] = firstElement;
	return newArr.join("");
}