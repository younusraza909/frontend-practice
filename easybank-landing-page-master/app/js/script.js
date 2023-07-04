const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");

btnHamburger.addEventListener("click", function () {
  header.classList.toggle("open");
});
