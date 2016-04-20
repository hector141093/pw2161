var identifica="";
var c11="c11",c12="c12",c13="c13",c21="c21",c22="c22",c23="23",c31="c31",c32="c32",c33="c33";
var cont=1;
var contX=0;
var contO=0;
function clic(id)
{
	identifica=id;
	var contenido=document.getElementById(identifica).innerHTML;
	if(contenido=="")
	{
		if(cont%2!=0)
		{
		document.getElementById(identifica).innerHTML="X";
		}else{	
			document.getElementById(identifica).innerHTML="O";
		}
		cont=cont+1;
	}


/*	for(col=1; col<=3;col++){
		for(fila=1; fila<=3 ;fila++){
			var celda="c"+col+fila;
			if(document.getElementById(celda).innerHTML=="X"){
				contX++;
				alert("contX"+contX);
			}else if(document.getElementById(celda).innerHTML=="O"){
				contO++;
			}
		}
	}*/

	for(fila=1; fila<=3;fila++){


		if(contX==3){
			alert("Gano X");
		}else if(contO==3){
			alert("Gano O");
		}

	for(col=1; col<=3 ;col++){
			var celda="c"+col+fila;
			if(document.getElementById(identifica).innerHTML=="X"){
				contX=contX+1;
				return;
			}else if(document.getElementById(celda).innerHTML=="O"){
				alert("Entra O");
				contO=contO+1;
				return;
			}
		}
	}
}
 //FALTA HACER COMPARACION, CHECAR GANADOR Y EMPATE

 










/*var contX=0;
var contO=0;
var turno=false;
function clic(ident){
	if(document.getElementById(ident).innerHTML=="&nbsp;"){
		if(turno){
			document.getElementById(ident).innerHTML="X";
		}else{
			document.getElementById(ident).innerHTML="O";
		}
		turno=!turno;
	}
	
	for(col=1; col<=3;col++){
		for(fila=1; fila<=3 ;fila++){
			var casilla="td"+col+fila;
			if(document.getElementById(casilla).innerHTML=="X"){
				contX++;
			}else if(document.getElementById(casilla).innerHTML=="O"){
				contO++;
			}
		}
	}
	for(fila=1; fila<=3;fila++){
		for(col=1; col<=3 ;col++){
			var casilla="td"+col+fila;
			if(document.getElementById(casilla).innerHTML=="X"){
				contX++;
			}else if(document.getElementById(casilla).innerHTML=="O"){
				contO++;
			}
		}
	}
	if(contX==3){
		alert("Gano X");
	}else if(contO==3){
		alert("Gano O");
	}
}*/