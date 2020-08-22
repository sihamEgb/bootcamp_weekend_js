function isogram(str){
	let arr = (str.toLowerCase()).split("").sort();
	let uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
	})
	return uniqueArray.length == arr.length;
}