"use strict";

;

(function ($) {
  "use strict"; // adjest header height

  var myheader = $('.header');
  myheader.height($(window).height);
  $(window).resize(function () {
    myheader.height($(window).height);
  }); // function search home  

  $(function () {
    $('.search-home').on('click', function () {
      $('.inp-search-home').slideToggle();
    });
  }); // function add class active linker header

  var nav_offset_top = $('header').height() + 50;
  $('.navber li ').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  }); // function sider header

  $(function () {
    $('.btn_sml_head').on('click', function () {
      $('.js_nav_small').slideToggle();
    });
  }); // header  animation

  var owl_image = $('.image_animation_home_head ');
  owl_image.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 6000,
    smartSpeed: 1500,
    nav_offset_top: true,
    autoplayHoverPause: true,
    dots: false
  }); // ------------------------------------------

  $(function () {
    $('.btn_sml_section').on('click', function () {
      $('.div_nav_section').slideToggle();
    });
  }); //--------------------------------------------
  // animation  image

  var owl = $('.image_anim_home_cloths');
  owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
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
  }); // button slider toggle

  $('.js-show-filter').on('click', function () {
    $(this).toggleClass('show-filter');
    $('.panel-filter').slideToggle(400);

    if ($('.js-show-search').hasClass('show-search')) {
      $('.js-show-search').removeClass('show-search');
      $('.panel-search-section').slideUp(400);
    }
  });
  $('.js-show-search').on('click', function () {
    $(this).toggleClass('show-search');
    $('.panel-search-section').slideToggle(400);

    if ($('.js-show-filter').hasClass('show-filter')) {
      $('.js-show-filter').removeClass('show-filter');
      $('.panel-filter').slideUp(400);
    }
  });
  /*==================================================================*/
  // popup small card

  $('.icon-card').on('click', function () {
    $('.popup_small_card').fadeIn();
  });
  $('.popup-close').on('click', function (e) {
    e.preventDefault();
    $('.popup_small_card').fadeOut();
  });
  /*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*
  /*==========================================================================*/
})(jQuery);