
window.onload = function(){
	var x = 1;
	
	var troca = setInterval(function(){
		
		var id = document.getElementById('minhaImg');
		var src = id.getAttribute('src');
		x++;
		
		src = src.replace((x-1),x);
		id.setAttribute('src', src);
		
		
		
		if(x == 4){
			clearInterval(troca);
		}
		
	}, 5000);
	
	
	
	}














