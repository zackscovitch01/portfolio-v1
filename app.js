const navBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".links");
const navBar = document.querySelector(".navbar");
const techImgs = document.querySelectorAll(".tech-img");
const hero = document.querySelector(".header-img");

navBtn.addEventListener("click", function () {
  if (menu.classList.contains("hide-navbar")) {
    menu.classList.remove("hide-navbar");
    menu.classList.add("show-navbar");
  } else if (menu.classList.contains("show-navbar")) {
    menu.classList.remove("show-navbar");
    menu.classList.add("hide-navbar");
  }
});

document.addEventListener("scroll", function () {
  console.log(hero.getBoundingClientRect().height);
  if (window.scrollY > hero.getBoundingClientRect().height - 50) {
    navBar.classList.add("sticking");
  } else if (window.scrollY <= 50) {
    navBar.classList.remove("sticking");
  }
});
