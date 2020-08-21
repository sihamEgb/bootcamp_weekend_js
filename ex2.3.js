function findNextPerfectSquare(num){
	let sqrt = Math.sqrt(num);
	return Number.isInteger(sqrt)
					? Math.pow(sqrt+1,2) 
					: -1;
}