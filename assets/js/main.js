/*----------------------------------------------
*
* [Main Scripts]
*
* Theme    : Leverage - Creative Agency, Corporate Business & Personal Portfolio Website Template
* Version  : 1.0
* Author   : Codings
* Support  : adm.codings@gmail.com
* 
----------------------------------------------*/

/*----------------------------------------------

[ALL CONTENTS]

1. Responsive Menu
2. Navigation 
3. Slides 
4. Gallery 
5. Multi-Step Form 

----------------------------------------------*/

/*----------------------------------------------
1. Responsive Menu
----------------------------------------------*/

$(function () {
    'use strict';

    $(window).on('resize', function () {
        navResponsive();
    })

    $(document).on('click', '#menu', function () {
        $(this).modal('hide');
    })

    function navResponsive() {
        let navbar = $('.navbar .items');
        let menu = $('#menu .items');

        if (window.screen.width <= 1024) {
            menu.html('');
            navbar.clone().appendTo(menu);
        } else {
            menu.html('');
        }
    }

    navResponsive();

    if (window.screen.width <= 768) {
        $('#menu').on('show.bs.modal', function() {
            $('html').css('overflow-y', 'hidden');
        })

        $('#menu').on('hidden.bs.modal', function() {
            console.log('menu close');
            $('html').css('overflow-y', 'auto');
        })

        $('#search').on('show.bs.modal', function() {
            $('html').css('overflow-y', 'hidden');
        })

        $('#search').on('hidden.bs.modal', function() {
            $('html').css('overflow-y', 'auto');
        })
    }
})

/*----------------------------------------------
2. Navigation
----------------------------------------------*/

$(function () {
    'use strict';
    var position = $(window).scrollTop();
    var toTop = $('#scroll-to-top');

    toTop.hide();

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let navbar = $('.navbar');

        if (scroll > position) {

            if (window.screen.width >= 768) {
                navbar.fadeOut('fast');
            } else {
                navbar.addClass('navbar-sticky');
            }

            toTop.fadeOut('fast');

        } else {

            if (position < 76) {
                navbar.slideDown('fast').removeClass('navbar-sticky');
            } else {
                navbar.slideDown('fast').addClass('navbar-sticky');
            }

            if (position > 1024) {
                if (window.screen.width >= 768) {
                    toTop.fadeIn('fast');
                }
            } else {
                toTop.fadeOut('fast');
            }
        }

        position = scroll;
    })

    $('.dropdown-menu').each(function () {

        let dropdown = $(this);

        dropdown.hover(function () {
            dropdown.parent().find('.nav-link').first().addClass('bright-ready');
        }, function () {
            dropdown.parent().find('.nav-link').first().removeClass('bright-ready');
        })
    })
})

/*----------------------------------------------
3. Slides
----------------------------------------------*/

$(function () {
    'use strict';

    var animation = (slider) => {

        let image = $(slider + ' .swiper-slide-active img');
        let title = $(slider + ' .title');
        let description = $(slider + ' .description');
        let btn = $(slider + ' .btn');
        let nav = $(slider + ' nav');

        image.toggleClass('aos-animate');
        title.toggleClass('aos-animate');
        description.toggleClass('aos-animate');
        btn.toggleClass('aos-animate');
        nav.toggleClass('aos-animate');

        setTimeout(() => {

            image.toggleClass('aos-animate');
            title.toggleClass('aos-animate');
            description.toggleClass('aos-animate');
            btn.toggleClass('aos-animate');
            nav.toggleClass('aos-animate');

            AOS.refresh();

        }, 100)

        if ($('.slider-full').hasClass('animation')) {

            $('.left').addClass('off');
            $('.left').removeClass('init');

            setTimeout(() => {
                $('.left').removeClass('off');
            }, 200)

            setTimeout(() => {
                $('.left').addClass('init');
            }, 1000)

        } else {
            $('.left').addClass('init');
        }
    }

    var sliderFull = new Swiper('.slider-full', {

        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false
        },
        on: {
            init: () => {

                animation('.slider-full')

                let pagination = $('.slider-full .swiper-pagination');

                pagination.hide();

                setTimeout(() => {
                    pagination.show();
                }, 2000)

            },
            slideChange: () => {
                animation('.slider-full')
            }
        }
    })

    var sliderMid = new Swiper('.slider-mid', {

        autoplay: false,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })

    var sliderMin = new Swiper('.slider-min', {

        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 15
            }
        },
        pagination: false,
    })

    var sliderDisabled = new Swiper('.slider-disabled', {

        autoplay: false,
        loop: false,
        keyboard: false,
        grabCursor: false,
        allowTouchMove: false,
        on: {
            init: () => {
                animation('.slider-disabled')
            },
            slideChange: () => {
                animation('.slider-disabled')
            }
        }
    })
})

/*----------------------------------------------
4. Gallery
----------------------------------------------*/

$(function () {
    'use strict';

    $('.gallery').lightGallery({
        thumbnail: false,
        share: false
    })
})

/*----------------------------------------------
5. Multi-Step Form
----------------------------------------------*/

$(function () {
    'use strict';

    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;

    $('#msform').css('height', $('#msform').height());

    $(document).on('click', '.next', function () {

        if (animating) return false;
        animating = true;

        current_fs = $(this).parents().eq(1);
        next_fs = $(this).parents().eq(1).next();

        $('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');

        next_fs.show();

        current_fs.animate({

            opacity: 0

        }, {
            step: function (now, mx) {

                scale = 1 - (1 - now) * 0.2;
                left = (now * 50) + '%';
                opacity = 1 - now;

                current_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'position': 'absolute'
                })

                next_fs.css({
                    'left': left,
                    'opacity': opacity
                })
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        })
    })

    $(document).on('click', '.previous', function () {

        if (animating) return false;
        animating = true;

        current_fs = $(this).parents().eq(1);
        previous_fs = $(this).parents().eq(1).prev();

        $('#progressbar li').eq($('fieldset').index(current_fs)).removeClass('active');

        previous_fs.show();
        current_fs.animate({

            opacity: 0

        }, {
            step: function (now, mx) {
                
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1 - now) * 50) + '%';
                opacity = 1 - now;

                current_fs.css({

                    'left': left
                })

                previous_fs.css({

                    'transform': 'scale(' + scale + ')',
                    'opacity': opacity
                })
            },
            duration: 800,
            complete: function () {

                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        })
    })

    $(document).on('click', '#next-2', function () {
        $('#progressbar').addClass('complete');
    })

    $(document).on('click', '#prev-3', function () {
        $('#progressbar').removeClass('complete');
    })

    $(document).on('click', '#next-3', function () {
        $(this).parents().eq(5).find('.message').addClass('active');
    })
})