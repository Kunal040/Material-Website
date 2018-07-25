jQuery(document).ready(function ($) {
    $('.menu').responsiveMenu({
        breakpoint: '992'
    });
});

$('#customer').owlCarousel({
    loop: true,
    margin: 50,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        767: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

$('#unique-caro').owlCarousel({
    loop: true,
    margin: 50,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});




new WOW().init();