$(document).ready(function(){

	$.get('http://192.168.1.85:3000/serial/mode/13/o', function(response){
	        console.log(response);
	    });

	$('#ButtonON').click(function(){
	    $.get('http://192.168.1.85:3000/serial/digital/13/1', function(response){
	        console.log(response);
	    });
	});

	$('#ButtonOFF').click(function(){
	    $.get('http://192.168.1.85:3000/serial/digital/13/0', function(response){
	        console.log(response);
	    });
	});

	$.get('http://192.168.1.85:3000/serial/mode/6/o', function(response){
	        console.log(response);
	    });

	$('#ButtonON').click(function(){
	    $.get('http://192.168.1.85:3000/serial/digital/6/1', function(response){
	        console.log(response);
	    });
	});

	$('#ButtonOFF').click(function(){
	    $.get('http://192.168.1.85:3000/serial/digital/6/0', function(response){
	        console.log(response);
	    });
	});

	$('#ButtonSend').click(function(){
		
		$('#TextArd').click(function(){
			getRequest(response);
		});

	    $.get('http://192.168.1.85:3000/TextArd', function(response){
	        console.log(response);
	    });
	});
});