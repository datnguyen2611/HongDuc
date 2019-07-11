$(document).ready(function () {
  var a = 0;
  var item_number = $('.item__number');
  $(window).scroll(function () {
    if (item_number.length >0) {
      var oTop = item_number.offset().top - window.innerHeight;
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
    }
    var The__letter = $('.wrapper__letter');
    if (The__letter.length > 0) {
      var scrollTop = $(window).scrollTop();
      The__letter = The__letter.offset().top - window.innerHeight;
      console.log(The__letter);
      if (The__letter < scrollTop) {
        $('.wrapper__letter').find('.letter__eff').textillate({
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
        $('.wrapper__letter').find('.letter__eff_2').textillate({
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
      }
    }
  });

  // end count time
  var slide_the_doc = $('.slide__the__doc');
  if (slide_the_doc.length > 0) {
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
  }

});