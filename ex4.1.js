function fibonacci(n1,n2,n){
	let arr=[];
	if(n === 1) return n1;
	if(n === 2) return n2;

	for(let i = 3 ; i<=n;i++){
		let temp = n1;
		n1 = n2;
		n2 = n2 + temp;
	}
	return n2;

}