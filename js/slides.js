$('.ugensSlideIndhold').slick({
    centerMode: true,
    dot: true,
    slidesToShow: 3,
    centerPadding: '40px',
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
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 2
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




