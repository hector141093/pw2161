<?php 

include("utilerias.php");

function LlenarCampos(){
	$respuesta=false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	$conexion = mysql_connect("localhost","root","");
	mysql_select_db("cursoBD");
	mysql_query("SET NAMES utf8"); //caracteres latinos
	$consulta = sprintf("select nombre,clave from usuarios where usuario=%s",$usuario);
	$resconsulta= mysql_query($consulta);
	if(mysql_num_rows($resconsulta)>0){ //para saber si hay datos
		$respuesta= true;

		//rescatar valores
		$fila=mysql_fetch_array($resconsulta);
		$nom= $fila["nombre"];
		$cla= $fila["clave"];
	}

	$salidaJSON = array ('respuesta'=> $respuesta, 'nom' =>$nom, 'cla'=>$cla);
	print json_encode ($salidaJSON);
}

$opc= $_POST["opc"];

switch ($opc) {
	case 'LlenarCampos':
		LlenarCampos();
		break;
	
	default:
		# code...
		break;
}

 ?>