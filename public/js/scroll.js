export default function scrollArrow(id) {
  const $scroll = document.getElementById(id);
  scrollY > 450
    ? $scroll.classList.remove("hidden")
    : $scroll.classList.add("hidden");

  $scroll.addEventListener("click", () => {
    scroll(0, 0);
  });
}
