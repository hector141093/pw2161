var empiezaApp = function()
{
	var Entrar = function()
	{
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		var parametros = "opc=validaEntrada"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&id="+Math.random();
		$.ajax({
			cache: false,
			type: "POST",
			dataType: "json",
			url: "datos/validaEntrada.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					$(".entradaUsuario").hide("slow");
					$("nav").show("slow");
				}
				else
				{
					$(".entradaUsuario > input").val("");
					$("#txtUsuario").focus();
					alert("Usuario o contraseña incorrectos");
				}
			},
			error: function(xhr,ajaxOptions,throws){
				console.log("Error de conexión");
			}
		});

	}

	var Altas = function(){
		$("main > div").hide("slow");
		$(".capturaUsuario").show("slow");
	}

	var AltaUsuario= function(){
		var parametros = $("#frmCapturaUsuario").serialize()+"&opc=AltaUsuario"+"&id="+Math.random();
		//serialize concatena los parametros contenidos en el formulario
		$.ajax({
			cache: false,
			type: "POST",
			dataType: "json",
			url: "datos/AltaUsuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					$(".capturaUsuario > input").val("");
					$("#txtNombreUsuario").focus();
					alert("alta exitosa");

				}
				else
				{
					$(".capturaUsuario > input").val("");
					$("#txtNombreUsuario").focus();
					alert("captura incorrecta");
				}
			},
			error: function(xhr,ajaxOptions,throws){
				console.log("Ha ocurrido un error");
			}
		});
	}
	var Consultas = function(){
		$("main > div").hide("slow");
		$(".consultaUsuario").show("slow");
		var parametros= "opc=ConsultaUsuario"+"&id="+Math.random();
		$.ajax({
			cache: false,
			type: "POST",
			dataType: "json",
			url: "datos/ConsultaUsuarios.php",
			data: parametros,
			success: function(response){
				$("#tablaUsuarios").html("");
				$("#tablaUsuarios").append(response.renglones);
			},
			error: function(xhr,ajaxOptions,throws){
				console.log("Ha ocurrido un error");
			}
		});
	}

	var Bajas =function(){
		$("main > div").hide("slow");
		$(".bajaUsuario").show("slow");
	}

	var BajaUsuario= function(){
		var parametros = $("#frmBajaUsuario").serialize()+"&opc=BajaUsuario"+"&id="+Math.random();
		$.ajax({
			cache: false,
			type: "POST",
			dataType: "json",
			url: "datos/BajaUsuario.php",
			data: parametros,
			success: function(response){				
				if(response.respuesta == true)
				{
					alert("Usuario eliminado");
				}
			},
			error: function(xhr,ajaxOptions,throws){
				console.log("Ha ocurrido un error al dar de baja");
				alert("Usuario no existe");
			}
		});
	}

	var Cambios = function(){
		$("main > div").hide("slow");
		$(".buscaUsuario").show("slow");
	}

	var Buscar= function(){
		var usuario = $("#txtUsuarioBusca").val();
		var parametros = "opc=BuscaUsuario"+
						 "&usuario="+usuario+
						 "&id="+Math.random();
		$.ajax({
			cache: false,
			type: "POST",
			dataType: "json",
			url: "datos/BuscaUsuario.php",
			data: parametros,
			success: function(response){				
				if(response.respuesta == true)
				{
					alert("ENcontro usuario");
					$(".cambiaUsuario").show("slow");
					LlenarCampos();
				}else{
					alert("NO registrado");
				}
			},
			error: function(xhr,ajaxOptions,throws){
				console.log("Ha ocurrido un error buscar");
			}
		});
	}

	var LlenarCampos = function(){

		var usuario = $("#txtUsuarioBusca").val();
		var parametros = "opc=LlenarCampos"+
						 "&usuario="+usuario+
						 "&id="+Math.random();
		$.ajax({
			cache: false,
			type: "POST",
			dataType: "json",
			url: "datos/LlenarCampos.php",
			data: parametros,
			success: function(response){				
				if(response.respuesta == true)
				{
					$("#txtNombreCambio").val(response.nom);
					$("#txtClaveCambio").val(response.cla);
					
				}else{
					alert("Usuario NO registrado");
				}
			},
			error: function(xhr,ajaxOptions,throws){
				console.log("Ha ocurrido un error buscar");
			}
		});
	}

	var Actualiza=function(){
		var parametros = $("#frmCapturaUsuario").serialize()+"&opc=AltaUsuario"+"&id="+Math.random();

		var usuario = $("#txtUsuarioBusca").val();
		var nombre =$("#txtNombreCambio").val();
		var clave=$("#txtClaveCambio").val();
		var parametros = "opc=CambiaUsuario"+
						 "&usuario="+usuario+
						 "&nombre="+nombre+
						 "&clave="+clave+
						 "&id="+Math.random();
		//serialize concatena los parametros contenidos en el formulario
		$.ajax({
			cache: false,
			type: "POST",
			dataType: "json",
			url: "datos/CambiaUsuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					alert("cambio exitoso");

				}
				else
				{

					alert("cambio incorrecta");
				}
			},
			error: function(xhr,ajaxOptions,throws){
				console.log("Ha ocurrido un error en cambios");
			}
		});
	}
	//Eventos del usuario.
	$("#btnEntrar").on("click",Entrar);
	$("#btnAltas").on("click",Altas);
	$("#frmCapturaUsuario").on("submit",AltaUsuario);
	$("#btnConsultas").on("click",Consultas);
	$("#btnBajas").on("click",Bajas);
	$("#frmBajaUsuario").on("click",BajaUsuario);
	$("#btnCambios").on("click",Cambios);
	$("#btnBuscar").on("click",Buscar);
	$("#btnCambia").on("click",Actualiza);
	
}
//Inicializar JQuery
$(document).on("ready",empiezaApp);










































