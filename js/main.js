/*--------------------------------------------------
Project:        Recore
Version:        1.0
Author:         Company Name
-----------------------------------------------------

    JS INDEX
    ================================================
    * preloader js
    * One Page Scroll
    * slick Menu js 
    * slick Nav
    * Isotope
    * Counter
    * bottom to top
    ================================================*/

(function ($) {
  "use strict";
  var $main_window = $(window);
  /*====================================
      preloader js
    ======================================*/
  $main_window.on('load', function () {
    $('#preloader').fadeOut('slow');
  });

  /*====================================
                One Page Scroll
    ======================================*/

  // Select all »a« elements with a parent class »links« and add a function that is executed on click
  $('.navbar-nav .nav-item a').on('click', function (e) {
    // Define variable of the clicked »a« element (»this«) and get its href value.
    var href = $(this).attr('href');
    // Run a scroll animation to the position of the element which has the same id like the href value.
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, '300');
    // Prevent the browser from showing the attribute name of the clicked link in the address bar
    e.preventDefault();
  });

  /*====================================
              slick slider
  ======================================*/


  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: true,
    cssEase: 'linear',
    responsive: [{

      breakpoint: 600,
      settings: {
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    }]
  });

  $('.autoplay').slick({
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });


  /*====================================
      sticky menu js
    ======================================*/
  var windows = $(window);
  var sticky = $('.header-fixed');
  windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 50) {
      sticky.removeClass('stick');
    } else {
      sticky.addClass('stick');
    }
  });
  /*====================================
      slick nav
  ======================================*/
  var logo_path = $('.mobile-menu').data('logo');
  $('.navbar-nav').slicknav({
    appendTo: '.mobile-menu',
    removeClasses: true,
    label: '',
    closedSymbol: '<i class="fa fa-angle-right"><i/>',
    openedSymbol: '<i class="fa fa-angle-down"><i/>',
    brand: '<img src="' + logo_path + '" class="img-fluid" alt="logo">'
  });


  /*====================================
              Isotope
  ======================================*/
  // init Isotope
  var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.portfolio-filter').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  $('.portfolio-filter li').on('click', function () {
    $('.portfolio-filter li').removeClass('active');
    $(this).addClass('active');
  });


  /*====================================
      counter
  ======================================*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  /*------------ Wow-js -------------*/

  new WOW().init();

  /*====================================
            bottom to top
        ======================================*/

  var btn = $('#btn-to-top');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });


})(jQuery);