function nb_year(p0,percent,aug,p){
	let years = 0;
	for(let current =p0 ;current< p;years++){
		current = current + current*(percent/100) + aug;
	}
	return years;
}