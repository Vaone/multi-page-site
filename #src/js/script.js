// маска на телефон формы
const tel = document.querySelector('#tel');
var maskOptions = {
  mask: '{+998}(00)000-00-00'
};

if (tel) {
  tel.onfocus = function() {
    tel.value = "+998(";
    mask.updateValue();
  };
  tel.oninput = function() {
    if (tel.value == "9") {
      tel.value = "+998(9";
    } else if (tel.value == "+") {
      tel.value = "+998(";
    } else if (tel.value == "8") {
      tel.value = "+998(8";
    }
  };
  var mask = IMask(tel, maskOptions);
}

// // валидация формы
// let formReq = document.querySelectorAll('._req');
// let error = 0;
// for (let i=0;i<formReq.length;i++) {
//   const input = formReq[i];
//   formRemoveError(input);
//   input.addEventListener("blur", formValidate)

//   function formValidate(element) {
//     if (input.value === '') {
//       formAddError(input);
//       error++;
//     } else if (input.classList.contains('._tel').value === '+998(') {
//       formAddError(input);
//       error++;
//     }
//     else {
//       formRemoveError(input);
//     };
//   }
//   function formAddError(input) {
//     input.classList.add('_error');
//   };
//   function formRemoveError(input) {
//     input.classList.remove('_error');
//   };
// };


// adaptive accordion in Footer 
let accordions = document.querySelectorAll('.footer__accordion');
let submenu__accordions = document.querySelectorAll('.submenu__accordion');

if (accordions) {
    for (let i=0; i<accordions.length; i++) {
      let accordion = accordions[i];
      let submenu__accordion = submenu__accordions[i];
      function footerAccord(e) {
        if (e.matches) { 
          accordion.setAttribute('uk-nav', null);
        } else {
          accordion.removeAttribute('uk-nav');
          submenu__accordion.removeAttribute('hidden');
        }
      }
  
      var mediaWidth = window.matchMedia("(max-width: 1024px)")
      footerAccord(mediaWidth) // Call listener function at run time
      mediaWidth.addListener(footerAccord) // Attach listener function on state changes
    }
}


"use strict"
// менять моложение относительно положения мыши
window.onload = function () {
  const parallax = document.querySelector('.content');
  const paralaxItem1 = document.querySelector('.anim__background-mask');
  const paralaxItem2 = document.querySelector('.anim__background-cloud');
  const paralaxItem3 = document.querySelector('.anim__background-squareP');
  const paralaxItem4 = document.querySelector('.anim__background-squareB');
  const paralaxItem5 = document.querySelector('.anim__background-rectangle');
  const paralaxItem6 = document.querySelector('.anim-bg-pills');
  const paralaxItem7 = document.querySelector('.experts__swiper-bg');
  const paralaxItem8 = document.querySelector('.anim__bg-atom');
  const paralaxItem9 = document.querySelector('.header__cursor');
  
  if (parallax) {
    const changer = 25;
    const changer2 = 50;

    const speed = 0.15;

    let positionX = 0, positionY=0;
    let coordXpercent = 0, coordYpercent = 0;

    function setMousePrallaxStyle() {
      const distX = coordXpercent - positionX;
      const distY = coordYpercent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);
      
      if (paralaxItem1) {
        paralaxItem1.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      };
      if (paralaxItem2) {
        paralaxItem2.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      }; 
      if (paralaxItem3) {
        paralaxItem3.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%) rotate(45deg);`;
      }; 
      if (paralaxItem4) {
        paralaxItem4.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      }; 
      if (paralaxItem5) {
        paralaxItem5.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      }; 
      if (paralaxItem6) {
        paralaxItem6.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      };
      if (paralaxItem7) {
        paralaxItem7.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%) rotate(37deg);`;
      };
      if (paralaxItem8) {
        paralaxItem8.style.cssText = `transform: translate(${positionX / changer}%,${positionY / changer}%);`;
      };
      if (paralaxItem9) {
        paralaxItem9.style.cssText = `transform: translate(${positionX / changer2}%,${positionY / changer2}%);`;
      };

      requestAnimationFrame(setMousePrallaxStyle);
    }
    setMousePrallaxStyle();

    parallax.addEventListener("mousemove", function(e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXpercent = (coordX / parallaxWidth) * 400;
      coordYpercent = (coordY / parallaxHeight) * 500;
    });
  }
}




// function validateForm (selector, rules) {
//   new window.JustValidate(selector, {
//     rules: rules,
//     submitHandler: function (form, values, ajax) {
//       console.log(form);

//       // let formData = new FormData(form);

      
//     }
//   })
// }

// validateForm('.form__fields', {name: {required: true}, tel: {required: true}})


// // scrollSpy для шапки
// let intro = document.querySelector(".intro");
// let adventages = document.querySelector(".adventages");
// let inside = document.querySelector(".inside");
// let insideExtra = document.querySelector(".insideExtra");
// let map = document.querySelector(".map");
// let cost = document.querySelector(".cost");
// let review = document.querySelector(".review");
// let header = document.querySelector(".header");

// window.addEventListener("scroll", () => {
//   let wind = window.pageYOffset;
//   if (intro.offsetTop <= wind && adventages.offsetTop-2*header.offsetHeight > wind) {
//     header.classList.add('_scrolled');
//   } else if (inside.offsetTop <= wind && insideExtra.offsetTop-2*header.offsetHeight > wind) {
//     header.classList.add('_scrolled');
//   } else if (cost.offsetTop <= wind && review.offsetTop-2*header.offsetHeight > wind) {
//     header.classList.add('_scrolled');
//   } else {
//     header.classList.remove('_scrolled');
//   }
// });

// // let sections = document.querySelectorAll('section');
// // for (let i=0; i<sections.length; i++) {
// //   let header = document.querySelector(".header");
// //   let changeHeaderBg = function (section, section2) {
// //     let windowH = window.pageYOffset;
// //     let headerH = header.offsetHeight*2;
// //     function scrollSpy() {
// //       if (section.offsetTop <= windowH && section2.offsetTop-headerH > windowH) {
// //         header.classList.add('_scrolled');
// //       } else {
// //         header.classList.remove('_scrolled');
// //       }
// //     }();
// //   };
// //   window.addEventListener("scroll", changeHeaderBg(sections[i], sections[i+1]))
// // }



// // анимация появления
// var isScrolling = false;

// window.addEventListener("scroll", throttleScroll, false);

// function throttleScroll(e) {
//   if (isScrolling == false) {
//     window.requestAnimationFrame(function () {
//       scrolling(e);
//       isScrolling = false;
//     });
//   }
//   isScrolling = true;
// }

// document.addEventListener("DOMContentLoaded", scrolling, false);

// function scrolling(el) {
//   // добавлять класс видимости при скролле
//   let sections = document.querySelectorAll("section");

//   for (let i = 0; i < sections.length; i++) {
//     let section = sections[i];
//     isFullyVisible(section)
//       ? section.classList.add("visible")
//       : section.classList.remove("visible");
//   }
// }

// function isFullyVisible(el) {
//   var elementBoundary = el.getBoundingClientRect();

//   var top = elementBoundary.top;
//   var bottom = elementBoundary.bottom;
//   var height = elementBoundary.height;

//   return top + height >= 0 && height + window.innerHeight >= bottom;
// }


// // click questions
// let questions = document.querySelectorAll(".questions__item");

// for (let i = 0; i < questions.length; i++) {
//   let question = questions[i];
//   question.addEventListener("click", function (answer) {
//     question.children[1].classList.toggle("_visible");
//     question.children[2].children[0].classList.toggle("_hidden");
//   });
// }
