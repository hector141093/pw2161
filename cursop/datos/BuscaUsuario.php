<?php 
include("utilerias.php");


function BuscaUsuario(){
	$respuesta=false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	$conexion = mysql_connect("localhost","root","");
	mysql_select_db("cursoBD");
	mysql_query("SET NAMES utf8"); //caracteres latinos
	$consulta = sprintf("select usuario from usuarios where usuario=%s",$usuario);
	$resconsulta= mysql_query($consulta);
	if(mysql_num_rows($resconsulta)>0){ //para saber si hay datos
		$respuesta= true;
	}

	$salidaJSON = array ('respuesta'=> $respuesta);
	print json_encode ($salidaJSON);
}

$opc= $_POST["opc"];

switch ($opc) {
	case 'BuscaUsuario':
		BuscaUsuario();
		break;
	
	default:
		# code...
		break;
}

 ?>