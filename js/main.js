$('.card-box').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
                breakpoint: 720,
                settings: 'unslick'
        },
        {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
        }
    ]
});