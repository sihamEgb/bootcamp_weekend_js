function multiply(letter,times){
	let res = letter.toUpperCase();
	for(let i=1;i<times;i++){
		res+=letter.toLowerCase();
	}
	return res;
}
function accum(str){
	let arr = str.split("");
	for(let i=0;i<arr.length;i++){
		arr[i]=multiply(arr[i],i+1);
	}
	return arr.join("-");
}