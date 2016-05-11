var iniciaApp=function (){
	var validarEntrada=function(){
		//Invalida los eventos que no pertenecen a esta función
		event.preventDefault(); //Desecha todo el caché de eventos.
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
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
		//2.- Verificar usuario y contraseña
		if(usuario=="pw" && clave=="1234"){
			// alert("Bienvenido al mundo " + usuario);
			//Dar entrada al usuario
			$("#datosUsuario").hide();//Esconder
			$("nav").show("slow");//mostrar
		} 
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);