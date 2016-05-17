<?php
//$action = $_POST["action"]; //cacha todos los parametros que vienen de action
//Funciones desde GetsqlvalueString reduce en gran cantidad problemas
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue; //eliminan diagonales y comillas

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
//Menu principal  
function validaEntrada(){
	//Get por URL POST por la "atras" del web
	$usuario=GetSQLValueString($_POST["usuario"],"text");
	$clave =  GetSQLValueString(md5($_POST["clave"]),"text");
	$respuesta=false;
	//MySQL es muy rapido, conecta hace consulta y cierra
	//MySQLi tiene un caché integrado ¨por usuario¨ lo cual satura la memoria  
	//Servidor,usuario,clave
	$conexion=mysql_connect("localhost","root","");
	//Seleccionar BD
	mysql_select_db("cursopw");
	//sprintf hace una segunda Castea a string int 
	$validar=sprintf("select usuario,clave   
			  from usuarios 
			  where(usuario=%s and clave=%s limit 1", $usuario,$clave));//limitar la busqueda a 1
	//cuando es un select puedo tener un resultado
	mysql_query($validar);
	$resultado=mysql_query($validar);
	//preguntamos si se trajo un registro
	//el count es una función que tarda más en procesar, el num_rows tarda menos, se forza a uno
	if(mysql_num_rows($resultado)>0){
		$respuesta=true;
	$salidaJSON = array('respuesta'=>$respuesta);
	//encode json convierte a JSON
	//Devolvemos el resultado a Javascript
	print json_encode($salidaJSON); 
}
$accion= $_POST("accion")
switch ($accion) {
	case 'validaEntrada':
		# code...
		validaEntrada();
		break;
	
	default:
		# code...
		break;
}