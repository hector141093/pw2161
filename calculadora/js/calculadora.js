var operador="";

function igual()
{
	var valor1=document.calculadora.operando1.value;
	var valor2=document.calculadora.operando2.value;
	
	
	document.calculadora.resultado.value=eval(valor1+operador+valor2);

}


function numeros(num)
{
	
	if(operador==""
	{
		var valor=document.calculadora.operando1.value;
		if(valor=="0") //vaciamos la caja
		{
			document.calculadora.operando1.value="";
		}	
		//Concatenar 
		document.calculadora.operando1.value =document.calculadora.operando1.value+num;
	}
	else //Escribir en el operando 2
	{
		var valor=document.calculadora.operando2.value;
		if(valor=="0") //vaciamos la caja
			document.calculadora.operando2.value="";
		//Concatenar 
		document.calculadora.operando2.value =
		document.calculadora.operando2.value+num;
	}
}
function operadores(ope)
{
	operador=ope;
}