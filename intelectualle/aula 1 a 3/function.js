//variáveis globais 


//function
function multiplica(x,y){
	var resultado = x*y;
	return resultado;
}


try{
	var x  = 10;
	var y = x/0;
	
	alert(y);
	
}catch(e){
	alert(e.message + "\n" + e.name + "\n" + e.toString());
}