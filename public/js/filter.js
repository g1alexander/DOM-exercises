const d = document;

export default function filter(figures, filter) {
  figures = d.querySelector(figures);
  let figure = figures.querySelectorAll("figure"),
    string = "";

  d.addEventListener("keydown", (e) => {
    if (e.target.matches(filter)) {
      if (e.code !== "Backspace") {
        string += e.key;
      } else {
        string = string.substring(0, string.length - 1);
      }

      for (const i of figure) {
        for (const j of i.querySelectorAll("figcaption")) {
          if (j.innerHTML.trim().indexOf(string) >= 0) {
            i.classList.remove("hidden");
          } else {
            i.classList.add("hidden");
          }
        }
      }
    }
  });
}
