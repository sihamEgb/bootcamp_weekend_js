const originalArray = [1,2,3,4,5];

originalArray.myMap = function (callback){
	let newArr = [];
	for(let i=0;i<this.length;i++){
		newArr[i] = callback(this[i]);
	}
	return newArr;
}
originalArray.myForEach = function(callback){
	for(let i=0;i<this.length;i++){
	callback(this[i]);
	}
}
originalArray.myFilter = function(callback){
	let newArr = [];
	for(let i=0;i<this.length;i++){
		if(callback(this[i])){
			newArr.push(this[i]);
		}
	}
	return newArr;
}
console.log(originalArray.myMap(element => element+1));
console.log(originalArray.myForEach(element => console.log(element)));
console.log(originalArray.myFilter(element => element%2==0));