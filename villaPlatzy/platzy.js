
/*
var z;
for(var i=0;i<10;i++){
	var z = aleatorio(-5,5);
	document.write(z + ', ');
}
*/


var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
//var mapa = "tile.png";

var fondo = {
	url: "tile.png",
	cargaOK: false
};

var vaca = {
	url: "vaca.png",
	cargaOK: false
};

var pollo = {
	url: "pollo.png",
	cargaOK: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};

var cantidadV = aleatorio(0,40);
var cantidadP = aleatorio(0,40);
var cantidadC = aleatorio(0,40);
console.log(cantidadV + '-'+ cantidadP +'-'+ cantidadC);
//CREAMOS ETIQUETA IMG
fondo.imagen = new Image(); //al definir objeto PRIMER LETRA MAYUSCULAi
fondo.imagen.src = fondo.url; //ruta de la imagen
fondo.imagen.addEventListener("load", cargarFondo);


//antes estaba objeto en lugar de imagen
//al parecer da igual es solo el nombre de variable
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);


pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);


cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


function cargarFondo(){
	fondo.cargaOK = true;
	dibujar();
}

function cargarVaca(){
	vaca.cargaOK = true;
	dibujar();
}

function cargarPollo(){
	pollo.cargaOK = true;
	dibujar();
}

function cargarCerdo(){
	cerdo.cargaOK = true;
	dibujar();
}

//no se necesita tener parametro evento
function dibujar(){
	
	if (fondo.cargaOK){
		papel.drawImage(fondo.imagen, 0,0);
	}

	if (vaca.cargaOK){
		for (var v=0; v<cantidadV;v++){
			var separacionx = aleatorio(0,10);
			var separaciony = aleatorio(0,10);
			var x= separacionx*40;
			var y= separaciony*40;
			papel.drawImage(vaca.imagen, x,y);
		}	
	}

	if (pollo.cargaOK){
		for (var v=0; v<cantidadP;v++){
			var separacionx = aleatorio(0,10);
			var separaciony = aleatorio(0,10);
			var x= separacionx*40;
			var y= separaciony*40;
			papel.drawImage(pollo.imagen, x,y);
		}	
	}

	if (cerdo.cargaOK){
		for (var v=0; v<cantidadC;v++){
			var separacionx = aleatorio(0,10);
			var separaciony = aleatorio(0,10);
			var x= separacionx*40;
			var y= separaciony*40;
			papel.drawImage(cerdo.imagen, x,y);
		}	
	}
	
}

function aleatorio(min, maxi){
	var resultado;
	return resultado = Math.floor(Math.random()*(maxi-min +1)) + min;
}
