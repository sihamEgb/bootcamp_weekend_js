function toWeird(word){
	// string are immutable
	let weirdWord = ""
	console.log(word);
	for(let i=0;i<word.length;i++){
		if(i%2===0){
			weirdWord = weirdWord+word.toUpperCase()[i];
		}
		else{
			weirdWord = weirdWord+word.toLowerCase()[i];
		}
	}
	return weirdWord;
}
function toWeirdCase (str){
	let wordsArr = str.split(" ");
	let newArr = wordsArr.map(word => toWeird(word));
	return newArr.join(" ");
}