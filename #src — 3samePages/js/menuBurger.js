//Меню бургер
const iconMenu = document.querySelector(".header__menu-icon");
const menuBody = document.querySelector(".header__nav-menu");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
};
