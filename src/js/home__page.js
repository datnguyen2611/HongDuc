import WOW from 'wowjs/dist/wow.js';

$(document).ready(function () {
	// lazy load......
	$('#owl-demo').owlCarousel({
		loop: true,
		// nav:true,
		items: 1,
		dots: false,
		slideSpeed: 1000,
		autoplay: true,
		autoplaySpeed: 250
	});
	$('.slide__cmt').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		slideSpeed: 1000,
		autoplay: true,
		autoplaySpeed: 250

	});

	$('.slide__doc').owlCarousel({
		nav: true,
		loop: false,
		margin: 20,
		items: 3,
		center: false,
		slideSpeed: 1000,
		autoplay: true,
		autoplaySpeed: 350,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}

	})

	$('.the__library').owlCarousel({
		center: true,
		items: 3,
		nav: true,
		slideSpeed: 1000,
		margin:50,
		autoplay: true,
		autoplaySpeed: 200,
		loop: true,
		responsive: {
			600: {
				items: 2,
			},
			400: {
				items: 2,
				nav: false

			},
			0: {
				items: 1,
				nav: false
			}
		}
	});
	//slide
	// frame__video
	// $('.video').get(0).play();
	$('.video').parent().click(function () {
		if ($(this).children(".video").get(0).paused) {
			$(this).children(".playpause").fadeOut();
			$(this).children(".video").get(0).play();
			
		} else {
			$(this).children(".video").get(0).pause();
			$(this).children(".playpause").fadeIn();
		}
	});

	
	$('.banner').each(function(){
		$(window).scroll(function () {
			var c = 0;
			var tittleIcon = $('.titel__icon');
			if(tittleIcon){
				tittleIcon.offset().top;
				if (c == 0 && $(window).scrollTop() >tittleIcon.offset().top) {
					$('.video').get(0).pause();
					$('.playpause').children(".playpause").fadeIn();
				} 
			}
			
			
		});
	});


	// Zoom image
	$('.list-image .gallery-item').on('click', function (event) {
		event.preventDefault();
		$('.imagepreview').attr('src', $(this).find('img').attr('src'));
		$('#imagemodal').modal('show');
	});

	// resize menu sidebar
	var resizeScreen = function () {
		if ($(window).width() < 768) {
			$('#lib-sidebar').hide();

			$('.mini-sidebar').on('click', function () {
				$('#lib-sidebar').show(350);
				$('.bg-overlay').show(350);
			});

			$('.bg-overlay').on('click', function () {
				$('#lib-sidebar').hide(200);
				$('.bg-overlay').hide(200);
			});

			$('#lib-sidebar ul li a').on('click', function () {
				$('#lib-sidebar').hide(350);
				$('.bg-overlay').hide(350);
			})
		} else {
			$('#lib-sidebar').show();
		}
	}
	resizeScreen();
	$(window).resize(function () {
		resizeScreen();
	});





	// wow
	var wow = new WOW({
		boxClass: 'wow', // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0, // distance to the element when triggering the animation (default is 0)
		mobile: true, // trigger animations on mobile devices (default is true)
		live: true, // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null // optional scroll container selector, otherwise use window
	});
	wow.init();


	//heart animation

	$('.frame__1').each(function() {
		$(window).scroll(function() {
			var animationHeart = $('.the__heart__animation');
			 var tittelIcon = $('.titel__icon').offset().top;
				var theWindow = $(window).scrollTop();
				if (theWindow  > tittelIcon) {
					animationHeart.css("animation", "animate 2s forwards");
				}

		});
	});



	// header fixed
	$('.menu-header').each(function(){
		$(window).on('scroll', function() {
			if (Math.round($(window).scrollTop()) > 10) {
			  $('.menu-header').addClass('scrolled');
			} else {
			  $('.menu-header').removeClass('scrolled');
			}
			
		});
	});
});