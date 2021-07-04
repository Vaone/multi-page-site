const News = new Swiper('.news__swiper-slider', {
  /*
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
     */
     slidesPerView: 4,
     spaceBetween: 15,
      // autoHeight: true,
    //  speed: 800,
    //  touchRatio: 0,
    //  simulateTouch: false,
     loop: true,
    //  loopSlides: 3,
    //  preLoadImages: false,
    //  lazy: true,
    initialSlide: 1,
    centeredSlides: true,
    // slidesOffsetBefore: -38,
    // slidesOffsetAfter: 400,
      // pagination
     pagination: {
       el: '.news__swiper-pagination',
       clickable: true,
     },
    //   // Arrows
     navigation: {
       nextEl: '.news__swiper-button-next',
       prevEl: '.news__swiper-button-prev',
     },

    //  on: {
    //    lazyImageReady: function () {
    //      ibg();
    //    },
    //  },
      // And if we need scrollbar
      // scrollbar: {
      // el: '.swiper-scrollbar',
      // }
    //  breakpoints: {
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 0,
    //       autoHeight: true,
    //     },
    //     768: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     992: {
    //       slidesPerView: 3,
    //       spaceBetween: 20,
    //     },
//       1024: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       1366: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//     },
//   });
});
const Experts = new Swiper('.experts__swiper-slider', {
  /*
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
     */
     slidesPerView: 5,
     spaceBetween: 22,
      // autoHeight: true,
    //  speed: 800,
    //  touchRatio: 0,
    //  simulateTouch: false,
     loop: true,
    //  loopSlides: 3,
    //  preLoadImages: false,
    //  lazy: true,
    initialSlide: 1,
    centeredSlides: true,
    // slidesOffsetBefore: -38,
    // slidesOffsetAfter: 400,
      // pagination
     pagination: {
       el: '.experts__swiper-pagination',
       clickable: true,
     },
    //   // Arrows
     navigation: {
       nextEl: '.experts__swiper-button-next',
       prevEl: '.experts__swiper-button-prev',
     },

    //  on: {
    //    lazyImageReady: function () {
    //      ibg();
    //    },
    //  },
      // And if we need scrollbar
      // scrollbar: {
      // el: '.swiper-scrollbar',
      // }
    //  breakpoints: {
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 0,
    //       autoHeight: true,
    //     },
    //     768: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     992: {
    //       slidesPerView: 3,
    //       spaceBetween: 20,
    //     },
//       1024: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       1366: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//     },
//   });
});