<?php

include("utilerias.php");

function validaEntrada()    
{
	$respuesta = false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	$clave   = GetSQLValueString(md5($_POST["clave"]),"text");
	$conexion = mysql_connect("localhost","root","");
	mysql_select_db("cursopw");
	mysql_query("SET NAMES utf8"); //caracteres latinos
	$consulta = sprintf("select usuario,clave from usuarios where usuario=%s and clave=%s limit 1",$usuario,$clave);
	$resConsulta = mysql_query($consulta);
	if(mysql_num_rows($resConsulta) > 0)
	{
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta );
	print json_encode($salidaJSON);
}
$opc = $_POST["opc"];
switch ($opc) {
	case 'validaEntrada':
		validaEntrada();
		break;
	
	default:
		# code...
		break;
}
?>