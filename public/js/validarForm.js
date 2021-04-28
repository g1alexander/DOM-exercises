const d = document;

export default function validarForm() {
  const $form = d.getElementById("form-contact"),
    $inputs = d.querySelectorAll("#form-contact [required]");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches("#form-contact [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.remove("none")
          : d.getElementById($input.name).classList.add("none");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.remove("none")
          : d.getElementById($input.name).classList.add("none");
      }
    }
  });
}
