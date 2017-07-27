$(document).ready(function() {

	// to top button
	if($(window).scrollTop() >= 750) {
		$('.to-top').show();
	}

	// menu toggle
	$('.js-menu-toggle').click(function(){

		$(this).toggleClass('active');
		$('.js-wr-menu, .js-menu').toggleClass('active');
		$('body').toggleClass('of-hidden');

		return false;
	});

	// menu navigation
	$('.js-nav li a').click(function(){

		$('.js-wr-menu, .js-menu, .js-menu-toggle').toggleClass('active');
		$('body').toggleClass('of-hidden');

		var wrId = $(this).attr('href'); 
		if ($(wrId).length != 0) {
			$('html, body').animate({ scrollTop: $(wrId).offset().top - 130 }, 2000);
		}

		return false;
	}); 

});

$(window).on('load', function() {
	$('.intro-img').removeClass('inactive');
});