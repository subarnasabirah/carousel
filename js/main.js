//carousel
$('.dot-list').owlCarousel({
    loop: true,
    autoplayHoverPause: true,
    margin: 20,
    nav: false,
    autoplay: true,
    dots: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        700: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});



