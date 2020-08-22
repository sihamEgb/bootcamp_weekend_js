function longest(s1 , s2){
	let arr = (s1+s2).split("").sort();

	let uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
	})
	return uniqueArray.join("");
}