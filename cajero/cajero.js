class Billete{
	constructor(v, c){
		this.valor = v;
		this.cantidad =c; 
	}
}

function entregarDinero(){
	resultado.innerHTML="";
	entregado = [];
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	for(var bi of caja){
	
		if(dinero > 0){
			div = Math.floor(dinero/bi.valor);
			if (div > bi.cantidad){
				papeles = bi.cantidad
			}else{
				papeles = div;
			}
			entregado.push( new Billete(bi.valor, papeles) );
			dinero -= (bi.valor * papeles);
			console.log(dinero)
		}
	}
	if (dinero > 0 ){
		resultado.innerHTML = "Soy un cajero probre y notengo dinero";
	}else{
		for (var e of entregado){
			if (e.cantidad > 0){
			resultado.innerHTML += e.cantidad + " billetes de $" + e.valor+"<br />";
			}
		}
	}
	
}

var caja = [];
var entregado = [];
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 30) );
caja.push( new Billete(10, 10) );

var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);