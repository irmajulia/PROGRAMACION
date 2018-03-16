var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick); //añadir al boton funcion que esta escuchando

var d = document.getElementById("dibujito"); //para guardar el canvas
var lienzo = d.getContext("2d");//metodo de canvas
var ancho = d.width;
var lineas;

//console.log(lienzo);
//lienzo.beginPath(); //arranca el dibujo, no se ingresa parametros
//lienzo.strokeStyle = "blue"; //
//lienzo.moveTo(50, 10);//mueve puntero hacia el punto 100,100
//lienzo.lineTo(250, 2);// hasta aqui la linea esta hecha
//lienzo.stroke();//dibuja la linea
//lienzo.closePath();//cerramos el trazo o levantamos el lapiz

//dibujarLinea("yelow",200,10,10,220);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath(); 
	lienzo.strokeStyle = color; 
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick(){
	lineas = parseInt(texto.value);
	//dibujarTorre (lineas);

	var l = 0;
	var espacio = ancho/lineas;
	while(l < lineas){

		dibujarLinea("#BAF",0,l*espacio,(l+1)*espacio,300);
		dibujarLinea("#FAF",l*espacio,0,300,(l+1)*espacio);
		dibujarLinea("#0AA",300,300-l*espacio,l*espacio,300);
		dibujarLinea("#5AF",300-l*espacio,0,0,l*espacio);

		//console.log("linea " + l);
		l++;
	}
}




