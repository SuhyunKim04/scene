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

// drop_down();


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


const faq = ()=>{
  const lists = document.querySelectorAll('.personal_list .personal_items');
  
  let active = 0
  lists[active].classList.add('on');
  
  lists.forEach((li,index) => {
    li.addEventListener('click', (e)=>{
     
      let isSame = index === active; 

      if(isSame){
        let hasOn = li.classList.contains('on')
        if(hasOn) {
          li.classList.remove('on')
          } else {
          li.classList.add('on') 
        }

      }else{
        lists[active].classList.remove('on')
        li.classList.add('on') 
      }
      
      active = index;
      
     // 켜져있는 인덱스번호(currentIndex)를 켜고, 클릭한애가 켜져있는 인덱스번호라면 ㄱ숨기고, 
     //클릭한애가 켜져있지 않다면, 현재인덱스넘버의 클래스를 지우고,클릭한애를 켠다.



      
    })
  })
   
}


header_scroll();
faq();

var video = $('.wrap-video').hover(hoverVideo, hideVideo);

    function hoverVideo(e) {  
        $('video', this).get(0).play(); 
    }

    function hideVideo(e) {
        $('video', this).get(0).pause(); 
}