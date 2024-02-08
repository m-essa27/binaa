/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  'use strict';


  var swiper = new Swiper('.main-slider', {
    speed: 1400,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pgi1",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (+index + 1) + "</span>";
      },
    },
  });


  var swiper2 = new Swiper('.slider2', {
    speed: 1400,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".s2next",
      prevEl: ".s2prev",
    },
    pagination: {
      el: ".pgi2",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (+index + 1) + "</span>";
      },
    },
  });


  var swiper3 = new Swiper('.slider3', {
    speed: 1400,
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".s3next",
      prevEl: ".s3prev",
    }
  });



  var swiper4 = new Swiper('.slider4', {
    speed: 1400,
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".s4next",
      prevEl: ".s4prev",
    }
  });

  $('#navbarNav').on('show.bs.collapse', function () {
    $("#sitemenu").addClass('menuopen');
  });

  $('#navbarNav').on('hide.bs.collapse', function () {
    $("#sitemenu").removeClass('menuopen');
  });


  var sitenav = $("#sitemenu");
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    sitenav.addClass('scrolled');
  } else {
    sitenav.removeClass('scrolled');
  };


  $(document).on('load scroll', function (e) {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      sitenav.addClass('scrolled');
    } else {
      sitenav.removeClass('scrolled');
    };
  });


  $(".cstm-card").click(function () {
    if (!($(this).hasClass("open"))) {
      $(this).addClass("open");
      $(this).siblings().removeClass("open")
    }
  })


  var myVideo = document.getElementById("myVid");

  $("#play").on('click', function () {
    $(this).hide();
    myVideo.play();
  })

});