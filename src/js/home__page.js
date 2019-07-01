// var  effect = function (){

// }


$(document).ready(function () {
	var vid = document.getElementById("bgvid");
	var pauseButton = document.querySelector(".button-pause");

	if (window.matchMedia('(prefers-reduced-motion)').matches) {
		vid.removeAttribute("autoplay");
		vid.pause();
		pauseButton.innerHTML = "Paused";
	}

	function vidFade() {
		vid.classList.add("stopfade");
	}

	vid.addEventListener('ended', function () {
		// only functional if "loop" is removed 
		vid.pause();
		// to capture IE10
		vidFade();
	});
	pauseButton.addEventListener("click", function (event) {
		event.preventDefault();
		vid.classList.toggle("stopfade");
		if (vid.paused) {
			vid.play();
			$('.click-play').css('display', 'none');
			$('.click-pause').css('display', 'block');
			$('.bg-banner').css('opacity', '0');


		} else {
			vid.pause();
			$('.click-pause').css('display', 'none');
			$('.click-play').css('display', 'block');
			$('.bg-banner').css('opacity', '1');
		}
	});
	$('#owl-demo').owlCarousel({
		loop: true,
		// nav:true,
		items: 1,
		slideSpeed: 1000,
		autoplay :true,
		autoplaySpeed:200
	});
	$('.slide__cmt').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		slideSpeed: 1000,
		autoplay :true,
		autoplaySpeed:200

	});

	$('.slide__doc').owlCarousel({
		nav:true,
		loop:true,
		margin:20,
		item: 3,
		slideSpeed: 1000,
		autoplay :true,
		autoplaySpeed:200,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
		
	})
	//slide
	// frame__video
	$('.video').parent().click(function () {
		if ($(this).children(".video").get(0).paused) {
			$(this).children(".video").get(0).play();
			$(this).children(".playpause").fadeOut();
		} 
		else {
			$(this).children(".video").get(0).pause();
			$(this).children(".playpause").fadeIn();
		}
	});
	
	// $(window).scroll(function(e)
	// {
	// 	var offsetRange = $(window).height(),
    //     offsetTop = $(window).scrollTop() + offsetRange + $(".video").outerHeight(true),
    //     offsetBottom = offsetTop + offsetRange;

    // $(".video").each(function () { 
    //   var y1 = $(this).offset().top;
    //   var y2 = offsetTop;
    //   if (y1 + $(this).outerHeight(true) < y2 || y1 > offsetBottom) {
	// 	this.play();
    //   } else {
	
	// 	this.pause(); 
    //   }
// });
// });
	

});