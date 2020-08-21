function tribonacci(n1,n2,n3,n){
	let arr = [];
	arr.push(n1);
	arr.push(n2);
	arr.push(n3);

	for(let i = 4 ; i<=n;i++){
		let n4 = n3 + n2 + n1;
		n1 = n2;
		n2 = n3;
		n3 = n4;
		arr.push(n4);
	}
	return arr;
}