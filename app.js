const navBtn = document.querySelector(".nav-btn");
const menu = document.querySelector(".links");

navBtn.addEventListener("click", function () {
  if (menu.classList.contains("hide-navbar")) {
    menu.classList.remove("hide-navbar");
    menu.classList.add("show-navbar");
  } else if (menu.classList.contains("show-navbar")) {
    menu.classList.remove("show-navbar");
    menu.classList.add("hide-navbar");
  }
});
