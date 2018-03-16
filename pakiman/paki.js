var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";



var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
console.log(cauchin, pokacho, tocinauro);

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();

var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

console.log(coleccion);

//ciclo especial freddito es cualquier variable
for(var freddito in coleccion){
	console.log(coleccion[freddito]);
}

//variacion que no se necsita indicar el objeto. pero no se accede al indice
for(var freddito of coleccion){
	console.log(freddito);
}

for(var i in imagenes){ //si cambiamos a of no muestra nigun resultado
	console.log(i);
}

for(var i in coleccion[0]){ //en este caso obtenemos los atributos del objeto
	console.log(i);
}

// IN ITERA EN EL INDICE 
// OF ITERA EN EL OBJETO



