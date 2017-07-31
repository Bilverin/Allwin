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

	// partners carousel
	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		center: true,
		autoplayTimeout: 3000,
		autoplaySpeed: 1000,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			991: {
				items: 4
			},
			1199: {
				items: 5
			},
			1440: {
				items: 6
			}
		}
	});

	// scrollr js
	var s = skrollr.init();

	// wow js
	new WOW().init();

	// testimonials animation
	var testiLenght = $('.js-testiItems li').length;
	$('.js-testiNavLeft').click(function() {
		
		$('.js-testiItems li.active').removeClass('active left').addClass('right').prev().removeClass('left right').addClass('active');

		var activeIndex = $('.js-testiItems li.active').index();
		if(activeIndex == 0) {
			$(this).addClass('inactive');
		}

		$('.js-testiNavRight').removeClass('inactive');

		return false;
	})
	$('.js-testiNavRight').click(function() {
		
		$('.js-testiItems li.active').removeClass('active right').addClass('left').next().removeClass('left right').addClass('active');

		var activeIndex = $('.js-testiItems li.active').index();
		if(activeIndex == (testiLenght - 1)) {
			$(this).addClass('inactive');
		}
		$('.js-testiNavLeft').removeClass('inactive');

		return false;
	})

});

$(window).on('load', function() {
	// scrolling to top
	var windowOffset = $(window).scrollTop();
	if(windowOffset != 0) {
		setTimeout(function(){
			window.scrollTo(0,0);
		}, 10);
	}

	
	setTimeout(function(){
		// preloader
		$('.preloader').fadeOut();

		// intro img animation
		$('.intro-img').removeClass('inactive');
	}, 500);
});