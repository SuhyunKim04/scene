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
const dimm = document.querySelector('.dimm');
const openDimm = () => {
  dimm.style.display = 'block'
}

 

const closeModal = (btn=dimm) => {
  const modal = document.querySelector('.modal-container');

  btn.addEventListener('click', (e) => {
    modal.classList.remove('open')
    dimm.style.display = 'none'
  }) 
} 
 
const closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach( btn => {
  closeModal(btn)
})

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
    if(window.scrollY > 60) {
      header.classList.add('open')
    }else {
      header.classList.remove('open')
    }
  })
}


const faq = ()=>{
  const lists = document.querySelectorAll('.faq_list .faq_items');
  
  
  if(lists.length === 0){
    return false
  }

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


const search = () => {
  const fm = document.forms.searchFaq;
  if(!fm){
    return false
  }
  const faq_items = document.querySelectorAll('.faq_list li');

  
  fm.addEventListener('submit', (e) => {
    e.preventDefault();
    findWord();

  });

  fm.task.addEventListener('keydown', findWord);

  function findWord() {
    let word = fm.task.value;
    let regExp = new RegExp(word, 'i')

    faq_items.forEach((li, i) => {
      if(regExp.test(li.textContent)) {
        console.log('true')
        li.classList.remove('hidden')
      }else {
        li.classList.add('hidden')
        console.log('false')
      }
    })
  }
}


const viewWhite = () => {
  const white = document.querySelector('.white')
  const whiteBtn = document.querySelector('.btn_ham')

  whiteBtn.addEventListener('click', (e) => {
    white.classList.add('open')
    openDimm();
  })
}



const click = () => {
  //const search = document.querySelector('.click_search');
  const bar = document.querySelector('.search_contents');
  const fm = document.forms.formSearch;

  if(!search) return false;
 
 /* search.addEventListener('click', (e) => {
    bar.classList.add('open')
  })
    */

  fm.addEventListener('submit', openBar);

  function openBar(e) {
    e.preventDefault();
    bar.classList.add('open')
    e.target.task.focus();
    console.log('task : ', e.target.task);
  }

  fm.task.addEventListener('focus', (e) => {
    console.log(e.target)
  })
  fm.task.addEventListener('blur', ()=> {
    console.log('leave form!!')
  })
}

const click2 = () => {

  const fm = document.forms.formSearch;
  fm.addEventListener('submit', viewInput); 

  function viewInput(e) {
    const bar = document.querySelector('.search_contents');
    bar.classList.add('open')

  } 
}

click();

// const fm = document.forms.formSearch;
// const input = fm.task;

// input.addEventListener('focus', ()=> {
//   console.log('focus!!')
// })
// input.addEventListener('blur', ()=> {
//   console.log('blur!!')
// })






/*
const new_modal = () => {
  const menus = a;
  a.addEventListener('click',() => {
    나자신을 오픈;
    dimmControl(open); 
  })
}

 

const btnModals = document.querySelectorAll('.btnModal');
btnModals.forEach( btn => {
  btn.addEventListener('click', (e) => {
    const modalName = e.currentTarget.datset.modal;
    openModal(modalName);
  })
});

function openModal(name) {
  const modal = document.querySelector(`.${name}-modal`);
  modal.classList.add('open')
}

*/
const live_modal = () => {
  const live = document.querySelector('.live_modal')
  const tv = document.querySelectorAll('.live_tv') 
  const schedule = document.querySelector('.schedule_list')
  if(!schedule){
    return false;
  }

  schedule.addEventListener('click', (e) => {
    live.classList.add('open')
    openDimm();
  })

  // tv.forEach((li,index) => {
  //   li.addEventListener('click', (e) => {
  //     live.classList.add('open')
  //     openDimm();
  //   })
  // })
 
}

const noticeAutoScroll = () => {
  const notice = document.getElementById('notice');
  if(!notice){
    return false;
   }
  const list = notice.querySelector('.list ul');

   
  let timerId;
  let size = 0;
  let line= notice.querySelector('.list').offsetHeight;
  let limit = (list.childElementCount - 1)* line
  
  const scrollUp = () => {
    
    if(size >= limit) {
      size = 0
    }else{
      size += line
    }
    
    
    console.log(`lline : ${line}, limit : ${limit}`)
    list.style.transform = `translateY(-${size}px)`;
  }

  const loopPlay = () => {
    timerId = setInterval(scrollUp, 5000);
  }
 

  loopPlay();
}

noticeAutoScroll();

live_modal();

viewWhite();
header_scroll();
faq();

search();