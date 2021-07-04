let sliders = document.querySelectorAll('._swiper');
if (sliders) {
  for (let i=0;i<sliders.length;i++) {
    let slider = sliders[i];
    if (!slider.classList.contains('swiper-build')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let i=0;i<slider_items.length;i++) {
          let el = slider_items[i];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-biuld');
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('LightGallery').destroy(true);
    }
  }
  slider_build_callback();
}

function slider_build_callback() {}

if(document.querySelector('.review__items')) {
  let reviewsSlider = new Swiper('.review__items', {
    /*
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    */
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // autoHeight: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    //preLoadImages: false,
    //lazy: true,

    // pagination
    pagination: {
      el: '.review__dots',
      clickable: true,
    },
    // Arrows
    navigation: {
      nextEl: '.review__arrow_next',
      prevEl: '.review__arrow_prev',
    },

    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
    // And if we need scrollbar
    // scrollbar: {
    // el: '.swiper-scrollbar',
    // }
    breakpoints: {
      // 320: {
      //   slidesPerView: 1,
      //   spaceBetween: 0,
      //   autoHeight: true,
      // },
      // 768: {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      // },
      // 992: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}