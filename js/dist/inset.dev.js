"use strict";

;

(function ($) {
  "use strict"; //---------------- start  home ------------------------------------------
  // adjest header height

  var myheader = $('.header');
  myheader.height($(window).height);
  $(window).resize(function () {
    myheader.height($(window).height);
  }); // function search home  

  $(function () {
    $('.search-home').on('click', function () {
      $('.inp-search-home').slideToggle(400);
    });
  }); // function add class active linker header

  var nav_offset_top = $('header').height() + 50;
  $('.navber li a').on('click', function () {
    $('.navber a').removeClass('active');
    $(this).addClass('active');
  }); // function sider header

  $(function () {
    $('.btn_sml_head').on('click', function () {
      $('.js_nav_small').slideToggle();
    });
  }); //---------------- end  home ------------------------------------------
  //---------------- start  prodect ------------------------------------------
  // button slider toggle between search end table

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
  }); //---------------- end section ------------------------------------------
  //---------------- start  card ------------------------------------------
  // caculer prodect total

  var proQty = $('.input_card_number');
  proQty.prepend('<span class="dec qtybtn">-</span>');
  proQty.append('<span class="inc qtybtn">+</span>');
  proQty.on('click', '.qtybtn', function () {
    var $button = $(this);
    var clc = $('.price-col-span').html();
    var oldValue = $button.parent().find('input').val();
    var total = parseFloat(clc);

    if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    total = total * newVal;
    $button.parent().parent().next().children().html(total);
    $button.parent().find('input').val(newVal);
  }); // remove prodect to cheese 

  $('.card-close span').on('click', function () {
    $(this).parent().parent().remove();
  }); // function cacute item prices\

  var sum = 0;
  $('.total-col-span').each(function () {
    sum += parseInt($(this).text());
  });
  $('.price_finlly_card').val(sum); //---------------- end  card ------------------------------------------
  //---------------- start  prodect detial --------------------------------
  // loop of height row-detail 

  var maxlenght = 0;
  $('.row-detail').each(function () {
    if ($(this).height() > maxlenght) {
      maxlenght = $(this).height();
    }
  });
  $('.row-detail').height(maxlenght);
})(jQuery);