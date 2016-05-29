<?php 
include("utilerias.php");

function BajaUsuario(){

	$respuesta=false;
	$usuario = GetSQLValueString($_POST["txtNombreUsuarioBaja"],"text");
	$conexion = mysql_connect("localhost","root","");
	mysql_select_db("cursoBD");
	mysql_query("SET NAMES utf8"); //caracteres latinos
	$consulta = sprintf("delete from usuarios where usuario=%s",$usuario);
	$resconsulta= mysql_query($consulta);
	if(mysql_affected_rows()>0){
		$respuesta=true;
	}
	$salidaJSON = array ('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}

$opc= $_POST["opc"];
switch ($opc) {
	case 'BajaUsuario':
		BajaUsuario();
		# code...
		break;
	
	default:
		# code...
		break;
}

 ?>