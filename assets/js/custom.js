  $(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});
 jQuery("#one").owlCarousel({
  loop: true,
 
  margin:13,
  autoplay: true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  
 responsive: {
    0: {
      items: 1

    
 
    },
      400: {
      items: 1
    },
    600: {
      items: 1
    },
    700: {
      items: 2
    },
    800: {
      items: 2
    },
    900: {
      items: 2
    },
    1000: {
      items: 3
    },
     1200: {
      items: 3
    },
     1400: {
      items: 3
    }
  }

});
    