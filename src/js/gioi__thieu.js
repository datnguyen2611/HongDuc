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
        //  end number

         $('.wrapper__letter').each(function(){
          var scrollTop = $(window).scrollTop();
          var The__letter = $('.wrapper__letter').offset().top - window.innerHeight;
          if (The__letter < scrollTop) {
         

            $(this).find('.letter__eff').textillate({
              loop: false,
              in: {
                effect: 'fadeIn',
                delayScale: 1,
                delay: 30,
                sync: false,
                shuffle: true,
                reverse: true,
              },
              type: 'word'
            });
              $(this).find('.letter__eff_2').textillate({
                loop: false,
                in: {
                  effect: 'fadeIn',
                  delayScale: 1.5,
                  delay: 70,
                  sync: false,
                  shuffle: false,
                  reverse: false,
                },
                type: 'word'
              });
             
              console.log(oTop +' - '+ scrollTop);
              //$(this).find('.run-text').textillate('start')
          }
      });
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

     });

    

  

    //  $('.text_chasing').each(function(){
    //   $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    // });
    
    // anime.timeline({loop: false})
    //   .add({
    //     targets: '.text_chasing .letter',
    //     opacity: [0,1],
    //     easing: "easeInOutQuad",
    //     duration: 1000,
    //     offset: '0',
    //     translateY: 500,
    //     delay: function(el, i) {
    //       return 100 * (i+1)
    //     }
    //   })
    //   .add({
    //     targets: '.text_chasing .letter',
    //     opacity: 1,
    //     duration: 5000,
    //     easing: "easeOutExpo",
    //     delay: 5000,
    //     offset: '1000',
    //     translateY: 600,

    //   })
    //   $('.text_chasing-2').each(function(){
    //     $(this).html($(this).text().replace(/([^\x00-\x80]|[\w,.])/g, "<span class='letter-2'>$&</span>"));
    //   });
    //   anime.timeline({loop: false})
    //   .add({
    //     targets: '.text_chasing-2 .letter-2',
    //     opacity: [0,1],
    //     easing: "easeInOutQuad",
    //     duration: 1000,
    //     offset: '0',
    //     sync: false,
    //     shuffle: false,
    //     reverse: false,
    //     delay: function(el, i) {
    //       return 10 * (i+1)
    //     }
    //   })
    //   .add({
    //     targets: '.text_chasing-2 .letter-2',
    //     opacity: 1,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000,
    //     offset: '1000',
    //   })
      
      
   });
 })(jQuery);