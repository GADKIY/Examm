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
  /* $('#lightgallery').lightGallery({
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
lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500
});