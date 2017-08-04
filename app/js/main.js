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

	// Special effects for desktop version
	if ($(window).width() > 1024) {
		var s = skrollr.init();
		new WOW().init();
	}


	// UNIT: Testimonial's carousel
	(function (app) {
		var currentItem = 0,
			items = $('.js-testiItems li'),
			itemsCount = items.length;

		// Testimonials dots
		var testimonialsDots = $('.testi-dots');
		$('.js-testiItems li').each(function (index) {
			var dotClass = index === 0 ? 'testi-dot active' : 'testi-dot';
			testimonialsDots.append($('<li>').addClass(dotClass));
		});

		var dots = $('.testi-dot');
		dots.each(function (index) {
			$(this).click(function () {
				goToItem(index);
			});
		});

		// Returns dot's class
		function dotClass(index, current) {
			return index === current ? 'testi-dot active' : 'testi-dot';
		}

		// Returns item's HTML-class for item with number INDEX and
		// carousel current slide number CURRENT
		function testiItemClass(index, current) {
			var itemClass = index < current ? 'left' : 'active';
			return index > current ? 'right' : itemClass;
		}

		// change current testimonial to ITEM
		function goToItem(item) {
			if (item !== currentItem) {

				currentItem = item;

				items.each(function (index) {
					$(this).attr('class', testiItemClass(index, currentItem));
				});

				dots.each(function (index) {
					$(this).attr('class', dotClass(index, currentItem));
				})

				if (currentItem === 0) {
					$('.js-testiNavLeft').addClass('inactive');
				} else {
					$('.js-testiNavLeft').removeClass('inactive');
				}

				if (currentItem === itemsCount - 1) {
					$('.js-testiNavRight').addClass('inactive');
				} else {
					$('.js-testiNavRight').removeClass('inactive');
				}

			}
		}

		$('.js-testiNavLeft').click(function (event) {
			event.preventDefault();
			if (currentItem > 0) {
				goToItem(currentItem - 1);
			}
		});

		$('.js-testiNavRight').click(function (event) {
			event.preventDefault();
			if (currentItem < itemsCount - 1) {
				goToItem(currentItem + 1);
			}
		});

		$('.testimonials').swipe({
			swipe: function (event, direction) {
				if (direction === 'left' && currentItem < itemsCount - 1) {
					goToItem(currentItem + 1);
				} else if (direction === 'right' && currentItem > 0) {
					goToItem(currentItem - 1);
				}
			}
		});

	})(window); // END OF UNIT: Testimonials

	// scroll menu
	var header = $(".js-header"),
		scrollPrev = 0

	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(),
			firstScrollUp = false,
			firstScrollDown = false;

		if ( scrolled > 0 ) {
			if ( scrolled > scrollPrev ) {
				firstScrollUp = false;
				if ( scrolled < header.height() + header.offset().top ) {
					if ( firstScrollDown === false ) {
						header.removeClass('active');
						firstScrollDown = true;
					}
				} else {
					header.removeClass('active');
				}
			} else {
				firstScrollDown = false;
				if ( scrolled > header.offset().top ) {
					if ( firstScrollUp === false ) {
						header.addClass('active');
						firstScrollUp = true;
					};
				}
			}
			scrollPrev = scrolled;
		}
	});

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
