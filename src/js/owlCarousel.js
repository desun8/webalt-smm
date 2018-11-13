import 'owl.carousel';
// import $ from 'jquery';

$(document).ready(() => {
  const owl = $('.owl-carousel');

  owl.owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    dots: false,
    // autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 800,
  });

  owl.on('changed.owl.carousel', (event) => {
    // Reset autoplay timer
    owl.trigger('stop.owl.autoplay');
    owl.trigger('play.owl.autoplay');

    // Animation for item elems
    // Position of the current item
    const item = event.item.index - 2;
    // Animation for image
    $('.hero-slider_img').css('animation-delay', '400ms');
    $('.hero-slider_img').removeClass('animated fadeInUp fast');
    $('.owl-item')
      .not('.cloned')
      .eq(item)
      .find('.hero-slider_img')
      .addClass('animated fadeInUp fast');

    // Animation for bg
    $('.hero-slider_bg-fill').removeClass('hero-slider_bg-fill--animated');
    $('.owl-item')
      .not('.cloned')
      .eq(item)
      .find('.hero-slider_bg-fill')
      .addClass('hero-slider_bg-fill--animated');
  });

  $('.owl-next').click(() => {
    owl.trigger('next.owl.carousel');
  });

  $('.owl-prev').click(() => {
    owl.trigger('prev.owl.carousel');
  });
});
