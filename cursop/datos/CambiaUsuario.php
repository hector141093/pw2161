<?php 

include("utilerias.php");

function CambiaUsuario(){
	$respuesta =false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	$nombre = GetSQLValueString($_POST["nombre"],"text");
	$clave 	= GetSQLValueString(md5($_POST["clave"]),"text");
	$conexion = mysql_connect("localhost","root","");
	mysql_select_db("cursoBD");
	mysql_query("SET NAMES utf8"); //caracteres latinos
	$consulta= sprintf("update usuarios SET nombre=%s, clave=%s WHERE usuario=%s",$nombre,$clave,$usuario);
	$resconsulta= mysql_query($consulta);
	if(mysql_affected_rows()>0){
		$respuesta=true;
	}
	$salidaJSON = array ('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}

$opc =$_POST["opc"];
switch ($opc) {
	case 'CambiaUsuario':
		CambiaUsuario();
		break;
	
	default:
		# code...
		break;
}
 ?>