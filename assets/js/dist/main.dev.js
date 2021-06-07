"use strict";

$(function () {
  $('#lightSlider').lightSlider({
    item: 1,
    vertical: true,
    verticalHeight: 800,
    controls: false,
    // auto: true,
    loop: true
  });
  var horizontalSlider = $('#horisontal_slider').lightSlider({
    item: 3,
    controls: false,
    loop: true,
    slideMargin: 30 // auto: true,

  });
  $('#prevSlide').on('click', function () {
    horizontalSlider.goToPrevSlide();
  });
  $('#nextSlide').on('click', function () {
    horizontalSlider.goToNextSlide();
  });
  /*  $('#lightgallery').lightGallery({
       plugins: [lgZoom, lgThumbnail],
       conter: false,
       download: false,
       speed: 500,
       animateThumb: false,
       zoomFromOrigin: false,
       allowMediaOverlap: true,
       toggleThumb: true,
       
     }); */
});
/* lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    
}); */

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

initMap();