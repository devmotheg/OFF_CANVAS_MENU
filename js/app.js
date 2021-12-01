/*!
  @author Mohamed Muntasir
  @link https://github.com/devmotheg
  */
 
const NAV_ELE = document.querySelector("nav"),
  HAMBURGER_BUTTON = document.querySelector(".hamburger-icon"),
  MAIN_ELE = document.querySelector("main");

HAMBURGER_BUTTON.addEventListener("click", () => {
  NAV_ELE.classList.toggle("open-nav");
  for (let span of HAMBURGER_BUTTON.children) {
    span.classList.toggle("change");
  }
  MAIN_ELE.classList.toggle("content-shift");
});
