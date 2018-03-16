

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
//var mapa = "tile.png";

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
}; 

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

var x1=100;
var y1=100;

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
console.log(cerdo);
cerdo.imagen.addEventListener("load", cargarCerdo);
document.addEventListener("keydown", dibujarTeclado);

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
		fondo.cargaOK=false;
	}

	if (vaca.cargaOK){
		for (var v=0; v<cantidadV;v++){
			var separacionx = aleatorio(0,10);
			var separaciony = aleatorio(0,10);
			var x= separacionx*40;
			var y= separaciony*40;
			papel.drawImage(vaca.imagen, x,y);
			
		}	
		vaca.cargaOK=false;
	}

	if (pollo.cargaOK){
		for (var v=0; v<cantidadP;v++){
			var separacionx = aleatorio(0,10);
			var separaciony = aleatorio(0,10);
			var x= separacionx*40;
			var y= separaciony*40;
			papel.drawImage(pollo.imagen, x,y);

		}	
		pollo.cargaOK=false
	}

	if (cerdo.cargaOK){
	/*	for (var v=0; v<cantidadC;v++){
			var separacionx = aleatorio(0,10);
			var separaciony = aleatorio(0,10);
			var x= separacionx*40;
			var y= separaciony*40;
			papel.drawImage(cerdo.imagen, x,y);
		}*/	
		papel.drawImage(cerdo.imagen, x1,y1);

	}
	
}

function dibujarcerdo(){
		if (cerdo.cargaOK){
	/*	for (var v=0; v<cantidadC;v++){
			var separacionx = aleatorio(0,10);
			var separaciony = aleatorio(0,10);
			var x= separacionx*40;
			var y= separaciony*40;
			papel.drawImage(cerdo.imagen, x,y);
		}*/	
		papel.drawImage(cerdo.imagen, x1,y1);


	}
}

function aleatorio(min, maxi){
	var resultado;
	return resultado = Math.floor(Math.random()*(maxi-min +1)) + min;
}


function dibujarTeclado(evento){
	console.log(evento);
	var movimiento = 30;
	switch(evento.keyCode){
		case teclas.UP: 
			//dibujarLinea(colorcito, x, y, x, y - movimiento,papel);
			dibujarcerdo();
			y1 = y1 - movimiento;
			break;
		case teclas.DOWN: 
			//dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
			dibujarcerdo();
			y1 = y1 + movimiento;
			break;
		case teclas.RIGHT: 
			//dibujarLinea(colorcito, x + movimiento, y, x, y, papel);
			dibujarcerdo();
			x1 = x1 + movimiento; 
			break;
		case teclas.LEFT: 
			//dibujarLinea(colorcito, x - movimiento, y, x, y, papel);
			dibujarcerdo();
			x1 = x1 - movimiento; 
			break;
		default: console.log("OTRO"); break;
	}
	
	
}