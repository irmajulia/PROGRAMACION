//JASON: EStarndar para objetos en javascript 
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
}; //Es una sola linea de codigo que se despliega para que se entienda

document.addEventListener("keydown", dibujarTeclado); //tambien existe keyup
document.addEventListener("mousedown", estableceInicio); 
document.addEventListener("mousemove", dibujarMouse); 
document.addEventListener("mouseup", estableceFin); 
//si lo hacemos con down al dejar presionada la tecla, se ejecuta la funcion durante todo el tiempo
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
var colorcito = "green";
var encendido=false;
//dibujarLinea(colorcito,x-1,y-1,x+1,y+1,papel); //dibujo del punto inicial
function estableceFin(evento){
	encendido = false;
}

function estableceInicio(evento){
	encendido = true;
	x=evento.pageX;
	y=evento.pageY;
}

function dibujarMouse(evento){	
	if (encendido == true){
		//console.log("se dibujara desde: " + evento.x + " ," + evento.y);
	    dibujarLinea(colorcito,x,y,evento.x,evento.y,papel);
	    x = evento.x;
	    y = evento.y;
	}
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath(); 
	lienzo.strokeStyle = color; 
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento){
	var movimiento = 1;
	switch(evento.keyCode){
		case teclas.UP: 
			dibujarLinea(colorcito, x, y, x, y - movimiento,papel);
			y = y - movimiento;
			break;
		case teclas.DOWN: 
			dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
			y = y + movimiento;
			break;
		case teclas.RIGHT: 
			dibujarLinea(colorcito, x + movimiento, y, x, y, papel);
			x = x + movimiento; 
			break;
		case teclas.LEFT: 
			dibujarLinea(colorcito, x - movimiento, y, x, y, papel);
			x = x - movimiento; 
			break;
		default: console.log("OTRO"); break;
	}
	
}


