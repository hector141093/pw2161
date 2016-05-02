//main
var inicio = function(){
	var clicBoton = function(){
		console.log("Clickeaste");
		// $(".anuncioWeb").html("clic del Boton");
		$(".anuncioWeb").append("clic del Boton");
	}
	var clicBoton2 = function(){
		alert("clicBoton2");
	}
	var teclaUnInput=function(tecla)
	{
			if(tecla.which == 13){
				//QUE SE POSICIONE EN OTRO INPUT
				$("#otroInput").focus();
			}
	}
	//Preparar los eventos de todos los objetos
	$("#miBoton").off("click",clicBoton);
	$("#miBoton").on("click",clicBoton2);
	$("#unInput").on("keypress",teclaUnInput); 
	//EL EVENTO KEYPRESS SE LLEVA EL ATRIBUTO KEY
}
$(document).on("ready",inicio);