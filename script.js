const swiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    speed: 600,
    slidesPerView: 6,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      240: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  
  // hotel expand collapase
  const hotelButton = document.querySelector('.hotel-button');
  const hotelCard = document.querySelectorAll('.off');
  const text = hotelButton.innerText;
  
  hotelButton.addEventListener('click', (e) => {
    e.preventDefault();
    hotelCard.forEach((x) => {
      x.classList.toggle('on');
    });
  
    if (e.target.innerHTML !== 'less <img src="/form/icons/bleft.png">') {
      e.target.innerHTML = `less <img src="/form/icons/bleft.png" >`;
    } else {
      e.target.innerHTML = `view all <img src="/form/icons/bleft.png" >`;
    }
  });
  
  const toogleOn = document.querySelector('.toggleOn');
  const toogleClose = document.querySelector('.toggleClose');
  const navbar = document.querySelector('.navbar');
  const navlists = document.querySelectorAll('.navlist');
  
  toogleOn.addEventListener('click', (e) => {
    e.preventDefault();
    navbar.classList.add('navlistOn');
    toogleClose.classList.add('toggleCloseOn');
    toogleOn.classList.add('toggleOnClose');
  });
  
  toogleClose.addEventListener('click', (e) => {
    navbar.classList.remove('navlistOn');
    toogleClose.classList.remove('toggleCloseOn');
    toogleOn.classList.remove('toggleOnClose');
  });
  
  console.log('navlists');
  navlists.forEach((xy) => {
    xy.addEventListener('click', (x) => {
      navbar.classList.remove('navlistOn');
      toogleClose.classList.remove('toggleCloseOn');
      toogleOn.classList.remove('toggleOnClose');
    });
  });
  