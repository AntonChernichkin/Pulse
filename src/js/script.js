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
                    dots: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function togClass (item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });  
    }

    togClass ('.catalog-item__link');
    togClass ('.catalog-item__back');

    //Modal

    $('[data-modal = consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thx').fadeOut('slow');
    });

    $(".button_buy").each(function(i) {
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    //Validate

    function validateForm (item) {
        $(item).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "* Поле обязательное для заполнения"
                },
                phone: {
                    required: "* Поле обязательное для заполнения"
                },
                email: {
                    required: "* Поле обязательное для заполнения",
                    email: "Неправильно введен адрес"
                }
            }
        });
    }

    validateForm ('#form-main');
    validateForm ('#form-consultation');
    validateForm ('#form-order');
    
    $("input[name=phone]").mask("+7 (999) 999-99-99");

    $('form').submit( function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut('slow');
            $('.overlay, #thx').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });


  });