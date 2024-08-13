
let swiper = new Swiper(".mySwiper", {
  direction: 'horizontal',
  // бесконечный слайдер
  loop: true,
  slidesPerView:1,
  speed:300,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let swiper2 = new Swiper(".mySwiper2", {
  direction: 'horizontal',
  // бесконечный слайдер
  loop: true,
  slidesPerView:1,
  speed:300,
    navigation: {
        nextEl: '.swiper-button-next_2',
        prevEl: '.swiper-button-prev_2',
      },
  });

  let swiper3 = new Swiper(".mySwiper3", {
    direction: 'horizontal',
    // бесконечный слайдер
    loop: true,
    slidesPerView:1,
    speed:300,
    navigation: {
        nextEl: '.swiper-button-next_3',
        prevEl: '.swiper-button-prev_3',
      },
  });

  let swiper4 = new Swiper(".mySwiper4", {
    direction: 'horizontal',
    // бесконечный слайдер
    loop: true,
    slidesPerView:1,
    speed:300,
    navigation: {
        nextEl: '.swiper-button-next_4',
        prevEl: '.swiper-button-prev_4',
      },
  });


 let swiper5 = new Swiper(".mySwiper5", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    // autoplay: {
    //   delay: 3000
    // },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".swiper-pagination5",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next_5",
      prevEl: ".swiper-button-prev_5"
    },

  });


 let swiper6 = new Swiper(".mySwiper6", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  // autoplay: {
  //   delay: 3000
  // },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination6",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next_6",
    prevEl: ".swiper-button-prev_6"
  }
});
let swiper7 = new Swiper(".mySwiper7", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  // autoplay: {
  //   delay: 3000
  // },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination7",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next_7",
    prevEl: ".swiper-button-prev_7"
  }
});
let swiper8 = new Swiper(".mySwiper8", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  // autoplay: {
  //   delay: 3000
  // },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination8",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next_8",
    prevEl: ".swiper-button-prev_8"
  }
});

let swiper12 = new Swiper(".mySwiper12", {
  direction: 'horizontal',
  // бесконечный слайдер
  loop: true,
  slidesPerView:3,
  spaceBetween: 20,
  speed:300,
  pagination: {
    el: ".swiper-pagination12",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
      nextEl: '.swiper-button-next_12',
      prevEl: '.swiper-button-prev_12',
    },

    breakpoints:{
      320:{
        slidesPerView:1,

      },
      621:{
        slidesPerView:2,
        spaceBetween:10,

      },
      768:{
        slidesPerView:2.5,
        spaceBetween:10,

      },

      1200:{

        slidesPerView:3,
        spaceBetween:10,


      },
    }


});

let swiper10 = new Swiper(".mySwiper10", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  // autoplay: {
  //   delay: 3000
  // },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination10",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next_10",
    prevEl: ".swiper-button-prev_10"
  }
});
let swiper11 = new Swiper(".mySwiper11", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  // autoplay: {
  //   delay: 3000
  // },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination11",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next_11",
    prevEl: ".swiper-button-prev_11"
  }
});

let swiper13 = new Swiper(".mySwiper13", {
  direction: 'horizontal',
  // бесконечный слайдер
  loop: true,
  slidesPerView:3,
  spaceBetween: 20,
  speed:300,
  pagination: {
    el: ".swiper-pagination13",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
      nextEl: '.swiper-button-next_13',
      prevEl: '.swiper-button-prev_13',
    },

    breakpoints:{
      320:{
        slidesPerView:1,

      },
      621:{
        slidesPerView:1,
        spaceBetween:10,

      },
      768:{
        slidesPerView:2.5,
        spaceBetween:10,

      },

      1200:{

        slidesPerView:3,
        spaceBetween:10,


      },
    }


});