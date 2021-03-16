$(function () {
  $('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
        },
      },
    ],
  });

  $('.review__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
});
