 (function ($) {
    "use strict"

    var count_u = 0;
    // in home page animateion image header 
     var owl_image = $('.image_animation_home_head ');
     owl_image.owlCarousel({
     loop:true,
     margin:10,
     nav: true,
     navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
     autoplay:true,
     animateOut: 'fadeOut',
     animateIn: 'fadeIn',
     autoplayTimeout:6000,
     smartSpeed: 1500,
     nav_offset_top:true,
     autoplayHoverPause:true,
     dots:false,
     responsive: {
  100: {
      items: 1
     }
  }
     });

// in home  animation  image section
  var owl = $('.image_anim_home_cloths');
  owl.owlCarousel({
loop:true,
margin:10,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
nav: true,
navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
autoplay:true,
dots:false, 
smartSpeed: 1500,
nav_offset_top:true,
responsive: {
  0: {
      items: 1
  },
  576: {
      items: 2
  },
  768: {
      items: 3
  },
  992: {
      items: 4
  }
 }
});
      

      
// in prodect pag cheese image without menu
        $(window).on('load', function () {
            $(".loader").fadeOut();
            $("#preloder").delay(200).fadeOut("slow");
        $('.featured__controls li').on('click', function () {
                $('.featured__controls li').removeClass('active');
                $(this).addClass('active');
            });
            if ($('.featured__filter').length > 0) {
                var containerEl = document.querySelector('.featured__filter');
                var mixer = mixitup(containerEl);
            }
    
            });
 
//all page the function do display or hide small page card
$('.icon-card').on('click',function(){
    $('.popup_small_card').fadeIn();
    });

    $('.popup-close').on('click',function(e){
        e.preventDefault();
        $('.popup_small_card').fadeOut();
        });
    

          // nav active
          $('.nav-sec ul li').on('click', function () {
            $('.nav-sec li').removeClass('active');
            $(this).addClass('active');
     });

    
  
 
  
})(jQuery)
