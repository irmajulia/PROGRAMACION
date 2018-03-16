//clase: definicion de objetos
class Pakiman{
	constructor(n, v, a){
		this.imagen = new Image();
		this.nombre = n;
		this.vida = v;
		this.ataque = a;

		//se obtiene la ruta de la imagen
		this.imagen.src = imagenes[this.nombre];
	}

	hablar(){
		alert(this.nombre);
	}

	mostrar(){
		//document.write(this.imagen); se puede pero no es correcto
		//agregar un hijo al arbol especificamente al body
		document.body.appendChild(this.imagen); 
		//document.write("<p>");
		document.write("<br /><strong>" + this.nombre + "</strong> <br />");
		document.write("Vida: " + this.vida + "<br />");
		document.write("Ataque: " + this.ataque +"<hr />");
		//document.write("</p>");
	}
}