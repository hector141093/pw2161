
var celda="";
var cont=0,contX=0, contO=0;
var empate=true, gano=false;
function clic(id){
//	var random = Math.random() >= 0.5;
	celda=id;
	var contenido=document.getElementById(celda).innerHTML;
	//Asigna X u O
	if(contenido==""){
		if(cont%2==0)
		{
		document.getElementById(celda).innerHTML="X";
		}else{	
			document.getElementById(celda).innerHTML="O";
		}
		cont++;
	}
//-----
	for(fila=1; fila<=3;fila++){
		for(col=1; col<=3 ;col++){
			if(document.getElementById(fila+""+col).innerHTML=="X"){
				contX++;
			}else if(document.getElementById(fila+""+col).innerHTML=="O"){
				contO++;
			}			
			if(contX==3){
				empate=false;
				alert("Gano X");
				return;
			}else if(contO==3){
				alert("Gano O");
				return;
			}
		}
		contX=0;
		contO=0;
	}
//|||||||
	for(col=1; col<=3;col++){
		for(fila=1; fila<=3 ;fila++){
			if(document.getElementById(fila+""+col).innerHTML=="X"){
				contX++;
			}else if(document.getElementById(fila+""+col).innerHTML=="O"){
				contO++;
			}
			if(contX==3){
				empate=false;
				alert("Gano X");
				return;
			}else if(contO==3){
				alert("Gano O");
				return;
			}
		}
		contX=0;
		contO=0;
	}
	//DIAGONAL PPAL
	for(fila=1; fila<=3;fila++)
	{
		for(col=1; col<=3 ;col++){
			var diag=fila+""+col
			if(fila==col){
				if(document.getElementById(diag).innerHTML=="X"){
					contX++;
				}else if(document.getElementById(diag).innerHTML=="O"){
					contO++;
				}
				if(contX==3){
					empate=false;
					alert("Gano X");
				}else if(contO==3){
					empate=false;
					alert("Gano O");
				}
			}
		}
	}
	contX=0;
	contO=0;
	//DIAG INVERSA
	if(document.getElementById(13).innerHTML=="O"&&document.getElementById(22).innerHTML=="O"
		&document.getElementById(31).innerHTML=="O")
	{
		empate=false;
		alert("Gano O");
	}
	if(document.getElementById(13).innerHTML=="X"&&document.getElementById(22).innerHTML=="X"
		&document.getElementById(31).innerHTML=="X")
	{
		empate=false;
		alert("Gano X");
	}
	//VALIDA
	
	if(empate==false){
		gano=true;
	}
	if(empate && cont==9){
		alert("Empate");
	}
	
}