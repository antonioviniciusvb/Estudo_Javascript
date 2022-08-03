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
	var temp;
	var next = document.querySelector('.banner .next');
	var prev = document.querySelector('.banner .prev');
	
	
	temp = setInterval(function(){
		nextSlide()
	}, 5000)
	
	next.onclick = function(){
		nextSlide();
		clearInterval(temp);
		
	}
	
	prev.onclick = function(){
		prevSlide();
		clearInterval(temp);
	}

	function nextSlide(){
		var slide = document.querySelector('.banner .slide.active');
		
		if(slide.nextElementSibling != null){
		
			slide.nextElementSibling.setAttribute('class', 'slide active');
			slide.setAttribute('class','slide');
			
		}else{
			
			slide.setAttribute('class', 'slide');
			
			var slide2 = document.querySelectorAll('.banner .slide');
			slide2[0].setAttribute('class', 'slide active');
		}
		
		logObject(slide);
	}
	
	function prevSlide(){
	
		var slide = document.querySelector('.banner .slide.active');
		var ultimo;
		
		if(slide.previousElementSibling != null){
		
			slide.previousElementSibling.setAttribute('class', 'slide active');
			slide.setAttribute('class','slide');
			
		}else{
			
			slide.setAttribute('class', 'slide');
			
			ultimo = document.querySelectorAll('.banner .slide');
			ultimo = ultimo[(ultimo.length-1)];
			
			ultimo.setAttribute('class', 'slide active');
		}
		
	}














}