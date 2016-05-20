var iniciaApp = function()
{
	var validarEntrada = function()
	{			
		//Invalida los eventos que 
		//no corresponden a esta función.	
		event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//******** Validaciones **********
		//1.- Que no sean vacíos
		if(usuario == "")
		{
			alert("El usuario no debe ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("La clave no debe ser vacía");
			$("#txtClave").focus();
		}
		//2.- Verificar usuario y contraseña
		var parametros="accion=validaEntrada"+
					   "&usuario="+usuario+
					   "&clave="+clave+
					   "&id="+Math.random(); 
		$.ajax({
			beforeSend:function(){
				console.log("Validar al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true) //¬¬
				{
					$("#datosUsuario").hide();
					$("nav").show("slow");
				}
				else
				{
					alert("Usuario/contraseña incorrecto(s)");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
		console.log("Se disparó el submit");
	}

	var Altas = function()
	{
		//Mostramos el formulario
		$("#altaUsuarios").show("slow");
		$("#altaUsuarios h2").html("Alta Usuarios");
		//enciendo la funcion de alta usuario
		$("#frmAltaUsuarios").on("submit",AltaUsuario);
		//Apago la función de BajaUsuariao para el 
		//mismo botón
		$("#frmAltaUsuarios").off("submit",BajaUsuario);
	}

	var AltaUsuario = function()
	{
		event.preventDefault();
		//alert($("#frmAltaUsuarios").serialize());
		var datos = $("#frmAltaUsuarios").serialize();

		console.log(datos);
		var parametros = "accion=guardaUsuario&"+datos+
		                 "&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Guardar al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true )//¬¬
				{
					alert("Usuario registrado correctamente");
				}
				else
				{
					alert("No se pudo guardar la información");
				}
			},
			error: function(xhr,ajax,thrownError){

			}
		});
	}
	var Bajas= function()
	{
		$("#altaUsuarios").show("slow");		
		$("#altaUsuarios h2").html("Baja Usuarios");
		//apago la funcion de alta usuario
		$("#frmAltaUsuarios").off("submit",AltaUsuario);
		//Enciendo la función de BajaUsuariao para el 
		//mismo botón
		$("#frmAltaUsuarios").on("submit",BajaUsuario);
	}
	var BajaUsuario = function(){
		event.preventDefault();
		//alert($("#frmAltaUsuarios").serialize());
		var datos = $("#txtNombreUsuario").val();

		console.log(datos);
		var parametros = "accion=bajaUsuario&"+"usuario="+datos+
		                 "&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Guardar al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true )//¬¬
				{
					alert("Usuario dado de baja correctamente");
				}
				else
				{
					alert("No se pudo dar de baja la información");
				}
			},
			error: function(xhr,ajax,thrownError){

			}
		});
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#btnAltas").on("click",Altas);
	$("#frmAltaUsuarios").on("submit",AltaUsuario);
	$("#btnBajas").on("click",Bajas);
}
$(document).on("ready",iniciaApp);












