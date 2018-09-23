$('.ugensSlideIndhold').slick({
    centerMode: true,
    dot: true,
    slidesToShow: 3,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 2510,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 592 ,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$('.sekundaerslide').slick({
    centerMode: true,
    dot: true,
    slidesToShow: 3,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 3320,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 906,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 592 ,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$('.fullSlider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    arrows: false,
    cssEase: 'linear'
});


