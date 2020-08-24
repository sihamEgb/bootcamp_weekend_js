function summation(num){
	let sum = 0;
	for(let i=1;i<=num;i++){
		sum+=i;
	}	
	return sum;
}
// method b
//  const sum(n) =>(1+n)*n/2

// method c
console.log([1,2,3,4].reduce((a,b) => a+b ,0));