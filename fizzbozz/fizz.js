var numeros = 100;
for (var i=1; i<=numeros; i++){
	
	
	if (divisible(i,3) && divisible(i,5)){
		document.write("fizzbuzz");
	}else if (divisible(i,3)){
		document.write("Fizz");
	}else if(divisible(i,3)){
		document.write("buzz");
	}else{
		document.write(i);
	}

	document.write("<br />");

}

function divisible(numero,multiplo){
	var residuo = numero % multiplo;
	if (residuo == 0) {
		return true;
	}else{
		return false;
	}

}