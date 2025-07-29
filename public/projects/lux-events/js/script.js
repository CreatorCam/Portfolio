// Toggle mobile nav
const hamburger = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
