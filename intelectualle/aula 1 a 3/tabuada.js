var index =10, tabuada = 20;


for(i = 1; i <= tabuada; i++){
	window.document.write('<p>');
	for(x = 1; x <= index; x++)
		{
			window.document.write(i+'x'+x+' = '+(i*x)+'<br>');
		}
	
	window.document.write('</p>');
}