$(document).ready(function(){	
	$('#firstname').on('keyup', function(){
		var valor  = $('#firstname').val();
		$('#firstname_text').text(" " + valor);		
	});
	$('#lastname').on('keyup', function(){
		var valor  = $('#lastname').val();
		$('#lastname_text').text(" " + valor);		
	});
	$('#id').on('keyup', function(){
		var valor  = $('#id').val();
		$('#id_text').text(" " + valor);		
	});
	$('#country').on('keyup', function(){
		var valor  = $('#country').val();
		$('#country_text').text(" " + valor + "'s republic");		
	});
});