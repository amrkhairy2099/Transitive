let menu = document.querySelector(".mega-menu");
let openMenu = document.querySelector(".open");
let closeMenu = document.querySelector(".close");

openMenu.onclick = function () {
   menu.classList.add("open");
}

closeMenu.onclick = function () {
   menu.classList.remove("open");
}

let header = document.querySelector("header");

   window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY);
})

window.addEventListener("load", () => {
   document.body.classList.add("is-loading");
   
});
