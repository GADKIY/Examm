"use strict";

function initMap() {
  map = L.map('map').setView([49.091678, 33.451642], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [106, 106],
      iconAnchor: [106, 106],
      popupAnchor: [-22, -30]
    }
  });
  var marker = L.marker([49.091678, 33.451642], {
    icon: new LeafIcon({
      iconUrl: 'assets/images/leaf-round.png'
    })
  }).addTo(map).bindPopup("\n        \n        <p>\u0414\u0430\u0430\u0430, \u043F\u0440\u0438\u043A\u043E\u043B\u044C\u043D\u044B\u0439 \u044D\u043A\u0437\u0430\u043C\u0435\u043D)</p>\n    ");
}

$(function () {
  $('#lightSlider').lightSlider({
    item: 1,
    vertical: true,
    verticalHeight: 800,
    controls: false,
    pause: 4000,
    auto: true,
    loop: true
    /* responsive: [
        {
            breakpoint: 821,
            settings: {
               verticalHeight: 600,
               
            }
        }
    ] */

  });
  var horizontalSlider = $('#horisontal_slider').lightSlider({
    item: 3,
    slideMove: 1,
    controls: false,
    loop: true,
    pause: 4000,
    slideMargin: 30,
    auto: true,
    responsive: [{
      breakpoint: 1050,
      settings: {
        item: 3,
        slideMove: 1,
        slideMargin: 10
      }
    }, {
      breakpoint: 950,
      settings: {
        item: 2,
        slideMove: 1
      }
    }, {
      breakpoint: 670,
      settings: {
        item: 1,
        slideMove: 1
      }
    }]
  });
  $('#prevSlide').on('click', function () {
    horizontalSlider.goToPrevSlide();
  });
  $('#nextSlide').on('click', function () {
    horizontalSlider.goToNextSlide();
  });
  $('#map_link').on('click', function () {
    map_link.remove();
    map_pic.remove();
    initMap();
  });
  $('a.scroll').on('click', function (e) {
    e.preventDefault();
    var top = $($(this).attr('href')).offset().top;
    $('html, body').animate({
      scrollTop: top
    }, 400);
  });
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 700) {
      $('header').addClass('Header');
      $("div.header").addClass("mobile-header");
    } else {
      $('header').removeClass('Header');
      $("div.header").removeClass("mobile-header");
    }
  });
  $(".hamburger, #mobile_shadow").on('click', function () {
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open");
    $('#mobile_shadow').toggleClass('open_shadow');
    $('.mobile_menu').toggleClass('open_menu');
  });
  $('.mobile_menu a, #menu_close').on('click', function () {
    $('.mobile_menu').toggleClass('open_menu');
    $('#mobile_shadow').toggleClass('open_shadow');
    $(".hamburger").toggleClass("is-active");
  });
});
lightGallery(document.getElementById('lightgallery'), {
  selector: '.item',
  plugins: [lgZoom],
  speed: 500
});