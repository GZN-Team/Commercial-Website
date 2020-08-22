"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;

(function ($) {
  "use strict"; // in home page animateion image header 

  var _owl$owlCarousel;

  var owl_image = $('.image_animation_home_head ');
  owl_image.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 6000,
    smartSpeed: 1500,
    nav_offset_top: true,
    autoplayHoverPause: true,
    dots: false
  }); // in home  animation  image section

  var owl = $('.image_anim_home_cloths');
  owl.owlCarousel((_owl$owlCarousel = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"]
  }, _defineProperty(_owl$owlCarousel, "autoplay", true), _defineProperty(_owl$owlCarousel, "dots", false), _defineProperty(_owl$owlCarousel, "smartSpeed", 1500), _defineProperty(_owl$owlCarousel, "nav_offset_top", true), _defineProperty(_owl$owlCarousel, "responsive", {
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
  }), _owl$owlCarousel)); // in prodect pag cheese image without menu

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
  }); //all page the function do display or hide small page card

  $('.icon-card').on('click', function () {
    $('.popup_small_card').fadeIn();
  });
  $('.popup-close').on('click', function (e) {
    e.preventDefault();
    $('.popup_small_card').fadeOut();
  }); // nav active

  $('.nav-sec ul li').on('click', function () {
    $('.nav-sec li').removeClass('active');
    $(this).addClass('active');
  }); // in page product page move between image 

  $('.slick-dot-image  img').on('click', function () {
    $('.slick-dot-image img').removeClass('selected');
    $(this).addClass('selected');
    $('.image-detail img').attr('src', $(this).attr('src'));
  });
  $('.image-detail .fa-chevron-left').on('click', function () {
    if ($('.slick-dot-image .selected').is(':last-child')) {
      $('.slick-dot-image  img').eq(0).click();
    } else {
      $('.slick-dot-image  .selected').next().click();
    }
  });
  $('.image-detail .fa-chevron-right').on('click', function () {
    if ($('.slick-dot-image .selected').is(':first-child')) {
      $('.slick-dot-image  img:last').click();
    } else {
      $('.slick-dot-image  .selected').prev().click();
    }
  }); //--------------------small page card

  var sum = 0;
  $('.sml-title_card span').each(function () {
    sum += parseInt($(this).text());
  });
  $('.small-total span').text(sum);
})(jQuery);