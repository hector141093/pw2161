var iniciaApp = function()
{
	var validaEntrada = function()
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
				if(response.respuesta){
					$("#datosUsuario").hide();
					$("nav").show("slow");
				}
				else{
					alert("usuario/contraseña incorrectas");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
		console.log("Se disparó el submit");
	}

	var Altas=function()
	{
		$("#altaUsuarios").show("slow");
	}
	var AltaUsuario= function(){
		event.preventDefault();
		//alert($("frmAltaUsuarios").serialize()); //name para formularios
		var parametros="accion=guardaUsuario&"+$("frmAltaUsuarios").serialize()+
						"&id"+Math.random(); //desactiva el caché
		$.ajax({
			beforeSend:function(){
				console.log("Guarda al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta){
					alert("usuario registro correctamente");
				}else{
					alert("No se registro");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
	}
	$("#frmValidaEntrada").on("submit",validaEntrada);
	$("#btnAltas").on("click",Altas);
	$("#frmAltaUsuarios").on("submit",AltaUsuario);
}
$(document).on("ready",iniciaApp);
