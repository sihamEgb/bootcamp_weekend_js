function peopleOnBus(arr){
	let peopleCounter = 0;
	for(let stop = 0; stop<arr.length;stop++){
		peopleCounter = peopleCounter+arr[stop][0];
		peopleCounter = peopleCounter - arr[stop][1]
	}
	return peopleCounter;
}