AOS.init();

$('.slick').slick({
  dots: true,
infinite: true,
speed: 700,
slidesToShow: 2,
slidesToScroll: 2,
autoplay: true,
autoplaySpeed: 5000,
responsive: [
{
  breakpoint: 500,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}
]

});