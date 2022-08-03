
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


window.onload = function(){

	var btn = document.querySelectorAll('#banner .nav li');
	var item, itemId;
	for(i = 0; i < btn.length; i++){
		
		item = btn[i];
		
		item.onclick = function(item){
			item = item.toElement;
			itemId = item.getAttribute('data-id');
			trocaBanner(itemId);
			logObject(item.toElement);
		}
		
		function trocaBanner(id){
			
			var ativo = document.querySelector('#banner .item.active');
		    var ativoNav = document.querySelector('#banner .nav .active');

			var banner = document.querySelectorAll('#banner .item')[id];
		    var bannerNav = document.querySelectorAll('#banner .nav li')[id];
			
			ativoNav.setAttribute('class', '');
			bannerNav.setAttribute('class','active');
			
			ativo.setAttribute('class', 'item');
			banner.setAttribute('class', 'item active');
		}
	}
		








}