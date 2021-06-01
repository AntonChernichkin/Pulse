$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src = "icons/carousel/left-arrow.svg" alt = ""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src = "icons/carousel/right-arrow.svg" alt = ""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
  });