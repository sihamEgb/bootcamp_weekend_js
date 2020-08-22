function getLengthOfShortest(str){
	let arr = str.split(" ");
	return Math.min(...arr.map(word=>word.length));
}