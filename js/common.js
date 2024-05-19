

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

const drop_down = ()=> {
  const account = document.querySelector('.my_account');
  const account_modal = document.querySelector('.account_modal')
  
  account.addEventListener('hover',(e) => {
    account_modal.classList.add('open')
  })
}

drop_down();


const header_scroll = ()=>{
  const header = document.querySelector('.page_header');

    window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
      header.classList.add('open')
    }else {
      header.classList.remove('open')
    }
  })
}

header_scroll();