//função para carregar uma string q terá algo
function logObject(Xobj){
	var msg = '', k;
	
	//foreach
	for(k in Xobj){
		msg += k+':'+Xobj[k]+'\n';
	}
	
	//printando no navegador a string carregada
	console.log(msg);
}

//comando para carregar a function logo após o arquivo html
window.onload = function(){}



//funcao para selecionar as imagens document
function selectorImagens(){
	
	//selecionando todas imagens do site
	var itens = document.imagens;
	logObject(itens);	
}


//função para selecionar os forms do document 
function selectorForms(){
	
	//selecionando o form
	var itens = document.forms;
	itens.contato.style.background = "#000000";
	logObject(itens.contato);
	
}

	

//função para selecionar(queryselector) o primeiro item, selecionar todos (queryselectorall) 
function elementsQuerySelect(){
		
	//var ele = document.querySelector('.box');
	var ele = document.querySelectorAll('.box');
	logObject(ele);
}

//funão elements para selecionar as tags do document	
function elements(){
	var xs = document.getElementsByTagName('p');
	
	logObject(xs);
	
	for(x = 0; xs.length; x++)
		xs[x].style.color = '#ff0000';
}

	//document.getElementsByName
    //document.getElementsByTagNameNS
	//document.getElementsByClassName
	
	//document.querySelector
	//document.querySelectorAll


//função fileGetelementId
function fileGetElementById(){
	//selecão por id no document de um elemento
	var um = document.getElementById('p1');
	var dois = document.getElementById('p2');
	var tres = document.getElementById('p3');
	
	//classe
	var Stl = {
		fontSize: '20px',
		backgroundColor: '#ccc',
		padding: '#fff',
		color: 'blue',
	}
	
	//implementando os valores da classe Stl nos elementos document um, dois, tres
	for(k in Stl){
		um.style[k] = Stl[k];
		dois.style[k] = Stl[k];
		tres.style[k] = Stl[k];
		
	}
	
	
	logObject(um.style);
}


