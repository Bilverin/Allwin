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
			$('html, body').animate({ scrollTop: $(wrId).offset().top }, 2000);
		}

		return false;
	}); 

	// scroll to top
	$('.js-toTop').click(function(){

		$('html, body').animate({ scrollTop: 0 }, 2000);

		return false;
	}); 

});


$(window).scroll(function(){

	var pageOffset = $(window).scrollTop();

	if(pageOffset < 750) {
		$('.to-top').fadeOut();
	} else {
		$('.to-top').fadeIn();
	}
});

$(window).on('load', function() {
	$('.intro-img').removeClass('inactive');
});