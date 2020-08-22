function repeat_str(repeat,str){
	let newStr = "";
	while(repeat > 0){
		newStr += str;
		repeat--;
	}
	return newStr;
}