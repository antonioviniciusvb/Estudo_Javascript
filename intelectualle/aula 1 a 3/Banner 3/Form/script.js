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

function validateEmail(email){
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

window.onload = function(){
	
	//logObject(document.forms.contato);
	
	var num = document.querySelectorAll('input.number');
	
	for(x = 0; x < num.length; x++){
			//console.log(event.keyCode);
			var item = num[x];
			
			item.onkeypress = item.onkeyup = function(event){
				var v = this.value;
				v = v.replace(/[a-z A-Z]/g,'');
				this.value = v;
			}
	  }
	
	
	
    var form = document.forms.contato;
	
	form.onsubmit = function(){
		
		var temp = 0; 
		
		var alerts = document.querySelectorAll('label span');
		
		for(x = 0; x < alerts.length; x++){
			alerts[x].remove(alerts[x].selectedIndex);
		}
		
		var alerts = document.querySelectorAll('form input, form textarea');
		
		for(x = 0; x < alerts.length; x++){
			alerts[x].style.border ='1px solid green';
		}
		
		
		
		if(form.nome.value == ''){
			alertHtml(form.nome, 'O nome é Obrigatório!');
			//alert('Nome é Obrigatório!');
			temp++;
		}
		
		if(form.email.value == ''){
			//alert('Email é Obrigatório!');
			alertHtml(form.email,'O email é Obrigatório!');
			temp++;
		}else
			if(!validateEmail(form.email.value))
				{
						alertHtml(form.email,'O email é Inválido!!');
						temp++;
				}
		
		if(form.telefone.value == ''){
			alertHtml(form.telefone, 'O telefone é Obrigatório!');
			temp++;
		}
		
		if(form.assunto.value == ''){
			alertHtml(form.assunto, 'O Assunto é Obrigatório!');
			temp++;
		}
		
		if(form.msgm.value == ''){
			alertHtml(form.msgm, 'A mensagem é Obrigatória!');
			temp++;
		}
			
			
			if(temp == 0)
				return true;
			else
				return false;
			
		
	}
	
}

	function alertHtml(elemento, msg){
				elemento.style.border = '1px solid #ff0000';
				elemento.previousElementSibling.insertBefore(addSpanText(msg), null);
	}

	function addSpanText(texto){
		var ele = document.createElement('span');
		var tex = document.createTextNode(texto);
		ele.appendChild(tex);
		return ele;
	}