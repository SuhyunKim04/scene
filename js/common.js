

function slideContens(){
    const $list = $('.slide_main .slide_box')
    $list.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoPlay : true,
        dots : false
      });
}

// slideContens();