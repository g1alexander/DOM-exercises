export default function menuBurger(menuPanel, menuLink) {
  const $navbar = document.querySelector(".navbar");
  document.addEventListener("click", (e) => {
    // MENU -Burger
    if (e.target.matches(menuPanel) || e.target.matches(menuLink)) {
      $navbar.classList.toggle("hidden");
    }
  });
}
