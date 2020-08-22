function maskify(str){
	// let res = "";
	// for(let i=0;i<str.length;i++){
	// 	res = res + str[i];
	// }
	let notCoded =  str.slice(-4);
	let coded = str.slice(0,str.length-4);
	coded = coded.split("").map(let => '#').join("");
	// console.log(notCoded);
	// console.log(coded);
	return coded + notCoded;
}