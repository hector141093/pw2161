var iniciaApp=function (){
	var validarEntrada=function(){
		var usuario = $("#txtUsuario").val();
		var usuario = $("#txtClave").val();
		//Validaciones 1.- que no sea vacío
		if(usuario == "")
		{
			alert("El usuario no debe ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave == "" ){
			alert("La clave no debe ser vacía");
			$("#txtClave").focus();
		}
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);