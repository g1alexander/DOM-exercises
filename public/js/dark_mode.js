export default function darkMode(id, icon) {
  const d = document;
  icon = d.querySelector(icon);
  if (
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) === true
  ) {
    d.documentElement.classList.add("dark");
    icon.classList.add("fa-sun");
    localStorage.setItem("dark", "dark");
  } else {
    d.documentElement.classList.remove("dark");
    icon.classList.add("fa-moon");
    localStorage.setItem("light", "light");
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(id)) {
      if (localStorage.getItem("dark") === "dark") {
        d.documentElement.classList.toggle("dark");
        localStorage.removeItem("dark");
        localStorage.setItem("light", "light");
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
      } else if (localStorage.getItem("light") === "light") {
        d.documentElement.classList.toggle("dark");
        localStorage.removeItem("light");
        localStorage.setItem("dark", "dark");
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
      }
    }
  });
}
