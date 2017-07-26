$(document).ready(function() {

	$('.js-menu-toggle').click(function(){

		$(this).toggleClass('active');
		$('.js-wr-menu, .js-menu').toggleClass('active');

		return false;
	});

});