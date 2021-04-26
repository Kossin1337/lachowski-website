/* what i will implement */
// image slider with 5 dots on the bottom to change
// (MAYBE) language selection PL/ENG
// (MAYBE) light/dark mode toggle
// grid with firm offer
// footer with current year date

/* Light/dark mode change */
// const rootElement = document.querySelector(":root");
// const modeButton = document.querySelector(".toggle-mode");
// modeButton.addEventListener("click", (e) => {
//   console.log(rootElement);
//   rootElement.style.setProperty("--default-text-color", "red");
//   const defaultTextColor = rootElement.style.getPropertyValue(
//     "--default-text-color"
//   );
//   console.log(defaultTextColor);
// });

/* MENU */
const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".main-navigation");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

/* SCROLL TO TOP BUTTON */
const scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
