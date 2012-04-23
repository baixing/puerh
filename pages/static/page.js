$(function(){

	// vote
	$('.vote').length && $('.vote').mouseover(function(){
		$('.vote-link').show(300);
	});
	
	// form-select
	$('#header .form-select').length && $('#header .form-select').hover(function(){
		$(this).addClass('form-select-open');
	}, function(){
		$(this).removeClass('form-select-open');
	});

})