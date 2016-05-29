<?php 

function ConsultaUsuario()
{
	$respuesta=false;
	$conexion = mysql_connect("localhost","root","");
	mysql_select_db("cursoBD");
	mysql_query("SET NAMES utf8"); //caracteres latinos
	$consulta = sprintf("select usuario,nombre from usuarios order by usuario");
	$resconsulta= mysql_query($consulta);
	$tabla="";
	if(mysql_num_rows($resconsulta)>0){ //para saber si hay datos
		$respuesta= true;
		//armar tabla
		$tabla = "<tr><th>Usuario</th><th>Nombre</th></tr>";
		//extraer datos
		while($fila=mysql_fetch_array($resconsulta)){
			$tabla.="<tr>";
			$tabla.="<td>".$fila["usuario"]."</td>";
			$tabla.="<td>".$fila["nombre"]."</td>";
			$tabla.="</tr>";
		}
	}else{
		$tabla= "<tr><td>Sin datos</td><tr>";
	}
	$salidaJSON =array('respuesta'=> $respuesta,
						'renglones'=> $tabla);
	print json_encode($salidaJSON);
}
	$opc= $_POST["opc"];
	switch ($opc) {
		case 'ConsultaUsuario':
			ConsultaUsuario();
			break;
		
		default:
			# code...
			break;
	}
 ?>