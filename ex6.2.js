function countDuplicates(str){
	let arr = str.toLowerCase().split("");
	let counterObject = {};
	for(let i=0;i<arr.length;i++){
		counterObject[arr[i]] ? counterObject[arr[i]]++ : counterObject[arr[i]]=1;
	}
	// arr.sort();
	let count = 0;
	Object.values(counterObject).forEach(element => {
		if (element > 1) count++;
	});
	return count;
}