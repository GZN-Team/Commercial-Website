; (function ($) {
    "use strict"

    //---------------- start  home ------------------------------------------
    // adjest header height
    var myheader=$('.header');
    myheader.height($(window).height);
    $(window).resize(function(){
        myheader.height($(window).height);
    })

     // function search home  
    $(function() {
        $('.search-home').on('click',function(){
        $('.inp-search-home').slideToggle(400);
        })
    })
    // function add class active linker header
    var nav_offset_top = $('header').height() + 50;

    $('.navber li a').on('click', function () {
        $('.navber a').removeClass('active');
        $(this).addClass('active');

    });

    // function sider header
    $(function() {
        $('.btn_sml_head').on('click',function(){
        $('.js_nav_small').slideToggle();
        })
    })
       
       
    //---------------- end  home ------------------------------------------
    //---------------- start  prodect ------------------------------------------
    // button slider toggle between search end table
    $('.js-show-filter').on('click',function(){
       $(this).toggleClass('show-filter');
       $('.panel-filter').slideToggle(400);
       
       if($('.js-show-search').hasClass('show-search')) {
           $('.js-show-search').removeClass('show-search');
           $('.panel-search-section').slideUp(400);
       }
   });

   $('.js-show-search').on('click',function(){
        $(this).toggleClass('show-search');
        $('.panel-search-section').slideToggle(400);

        if($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
        }
    });
   
     //---------------- end section ------------------------------------------
     //---------------- start  card ------------------------------------------
      // caculer prodect total
      var proQty = $('.input_card_number');
      proQty.prepend('<span class="dec qtybtn">-</span>');
      proQty.append('<span class="inc qtybtn">+</span>'); 
      proQty.on('click', '.qtybtn', function () {
          var $button = $(this); 
          var clc = $('.price-col-span').html();
          var oldValue = $button.parent().find('input').val();
          var total=parseFloat(clc);
          if ($button.hasClass('inc')) {
              var newVal = parseFloat(oldValue) + 1;
          } else {
              if (oldValue > 0) {
                  var newVal = parseFloat(oldValue) - 1;
              } else {
                  newVal = 0;
              }
          }
          total=total*newVal;
          $button.parent().parent().next().children().html(total);
          $button.parent().find('input').val(newVal);
      });



      // remove prodect to cheese 
      $('.card-close span').on('click',function(){
       $(this).parent().parent().remove();
    });

    // function cacute item prices\
   

    var sum=0;
   
        $('.total-col-span').each(function () {
            sum+=parseInt($(this).text());    
       
          });
          $('.price_finlly_card').text(sum);
    //---------------- end  card ------------------------------------------
    //---------------- start  prodect detial --------------------------------
    // loop of height row-detail 
    
    function henghtdiv(elmentheight)
    {  var maxlenght =0;
        $(elmentheight).each(function(){
         if( $(this).height()> maxlenght)
         {maxlenght= $(this).height();}
         
        });
        $(elmentheight).height(maxlenght);

    };
    henghtdiv('.row-detail');
    //------------------------------------------------------------------    
     // in page product  dateial page move between image 
     $('.slick-dot-image  img').on('click',function(){
        $('.slick-dot-image img').removeClass('selected');
        $(this).addClass('selected');

        $('.image-detail img').attr('src',$(this).attr('src'));

    });

    $('.image-detail .fa-chevron-left').on('click',function(){
       if($('.slick-dot-image .selected').is(':last-child')){
       
          $('.slick-dot-image  img').eq(0).click();
        
       }
       else
       {
          $('.slick-dot-image  .selected').next().click();
       }
    
   });


   $('.image-detail .fa-chevron-right').on('click',function(){
       if($('.slick-dot-image .selected').is(':first-child')){

          $('.slick-dot-image  img:last').click();
        
       }
       else
       {
          $('.slick-dot-image  .selected').prev().click();
       }
    
   });
   //------------------------------ 
   // function taps detail
   $('.taps-list li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
      $('.conent-taps > div').hide();
      $($(this).data('content')).fadeIn();
    })

    //--------------------------end prodect datial


     //----------------------------------------   hash----------------------------------------------------------------------------------------------------
    //--------------------small page card
    // caculer price prodect in total
    var sum=0;
   
        $('.sml-title_card span').each(function () {
            sum+=parseInt($(this).text());    
       
          });
          $('.small-total span').text(sum);

     /*        page cheese */  

   
   function create_image()
   {

     $('<div class="product_image"><div class="img-product">'
     + '<img class="img-fluid" src="img/png/3.png" alt="Colorlib Template"/>'
     +'<i class=" ti-trash icon-remove-cheese"></i></div>'
    +'<div class="text_image">'
     +'<h3><a href="#">Mens Essential Tee</a><a class="fa-icon fa fa-heart active " href="#"></a>'
    +'<div class="clearflex"></div></h3>'
     +'<div class="pricing"><span class="price-dc">$120.00</span><span class="price-sale">$80.00</span></div></div></div>').appendTo('.chece-page');
   };
  


   function create_suggest()
   {
       var sug="<div class='media'><div class='media-inf'>"
        +"<div class='img-cont-tap'><img src='img/22.png' alt=''/></div>"
         +"<div class='media-body'><h4>Blake Ruiz</h4><h5>12th Feb, 2017 at 05:56 pm</h5></div></div>"
        +"<p class='text-media'>"+ $('.txtareaa-suggest').val() +"</p></div>";
      $(sug).appendTo('.media-suggest');
   }
   

  $('.btn-suggest').on('click', function(e){
    e.preventDefault();
    create_suggest();
  });





   $(window).on('load',function(){
    for(var i=0;i<4;i++)
    {
        create_image();
    }
  
   });


   //-------------------------------------------------------------------
   var faicon = $(".fa-icon");
  

   faicon.on('click', function (e) {
       e.preventDefault();
       $(this).toggleClass('active');
       var scan=0;
       if($(this).is('.active'))
       { scan=1;}
       var firstimage=$(this).parent().parent().parent().find(".img-fluid").attr("src");
       var secondimage=$(this).parent().parent().parent().find(".hover-img").attr("src");
        
    alert(scan); 
    $.ajax({
        type:"POST",
url:"wish.php",
data:"firstimage="+firstimage+"&secondimage="+secondimage+"&scan="+scan

    });
       
  
   });



   




})(jQuery)


