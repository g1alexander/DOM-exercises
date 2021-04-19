let ventana;
const d = document;

export default function responsiveTester(form, url, width, height, btnClosed) {
  (url = d.getElementById(url)),
    (height = d.getElementById(height)),
    (width = d.getElementById(width)),
    d.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.target.matches(form)) {
        if (url.value === "") {
          alert("debes ingresar una url");
        } else {
          ventana = open(
            url.value,
            url.value,
            `width=${width.value},height=${height.value}`
          );
        }
      }
    });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnClosed)) {
      ventana.close();
    }
  });
}
