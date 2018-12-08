// Main
$(document).ready(function() {
    // Phần Slider
    $('.home-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    })

    // Phần Feedback
    $('.home-feedback .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 250,
    })

    // Phần Client
    $('.home-client .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 250,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    })
});