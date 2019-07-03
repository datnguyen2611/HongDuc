 (function ($) {
   $(document).ready(function () {
     var a = 0;
     var item_number = $('.item__number');
     $(window).scroll(function () {
         var oTop = $('.item__number').offset().top - window.innerHeight;
         if (a == 0 && $(window).scrollTop() > oTop) {
           $('.count__count').each(function () {
             var $this = $(this),
               countTo = $this.attr('data-count');
             $({
               countNum: $this.text()
             }).animate({
               countNum: countTo
             }, {
               duration: 2000,
               easing: 'swing',
               step: function () {
                 $this.text(Math.floor(this.countNum));
               },
               complete: function () {
                 $this.text(this.countNum);
                 //alert('finished');
               }
             });
           });
           a = 1;
         }
     });

     // end count time

     $('.slide__the__doc').owlCarousel({
       nav: true,
       loop: true,
       margin: 20,
       item: 3,
       slideSpeed: 1000,
       autoplay: true,
       autoplaySpeed: 200,
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
   });
 })(jQuery);