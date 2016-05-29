<?php 
include("utilerias.php");

function AltaUsuario(){
	$respuesta =false;
	$usuario = GetSQLValueString($_POST["txtNombreUsuario"],"text");
	$nombre = GetSQLValueString($_POST["txtNombre"],"text");
	$clave 	= GetSQLValueString(md5($_POST["txtClaveUsuario"]),"text");
	$conexion = mysql_connect("localhost","root","");
	mysql_select_db("cursoBD");
	mysql_query("SET NAMES utf8"); //caracteres latinos
	$consulta = sprintf("insert into usuarios values (%s,%s,%s)",$usuario,$nombre,$clave);
	$resconsulta= mysql_query($consulta);
	if(mysql_affected_rows()>0){
		$respuesta=true;
	}
	$salidaJSON = array ('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}

$opc =$_POST["opc"];
switch ($opc) {
	case 'AltaUsuario':
		AltaUsuario();
		break;
	
	default:
		# code...
		break;
}
 ?>