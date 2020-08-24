function maskify(str){

	let notCoded =  str.slice(-4);
	let coded = str.slice(0,str.length-4);
	coded = coded.split("").map(let => '#').join("");
	
	return coded + notCoded;
}