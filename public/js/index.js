const $navbar = document.querySelector(".navbar");

document.addEventListener("click", (e) => {
  // MENU -Burger
  if (e.target.matches("#menu i") || e.target.matches(".navbar a")) {
    $navbar.classList.toggle("hidden");
  }
});
