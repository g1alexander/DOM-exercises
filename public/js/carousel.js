const d = document;

export default function carousel(arrowLeft, image, arrowRight) {
  const images = [
    "https://placeimg.com/700/400/tech",
    "https://placeimg.com/700/400/animals",
    "https://placeimg.com/700/400/people",
    "https://placeimg.com/700/400/arch",
    "https://placeimg.com/700/400/nature",
  ];
  image = document.getElementById(image);

  let positionActual = 0;

  function pasarFoto() {
    if (positionActual >= images.length - 1) {
      positionActual = 0;
    } else {
      positionActual++;
    }

    renderizarImagen();
  }

  function retrocederFoto() {
    if (positionActual <= 0) {
      positionActual = images.length - 1;
    } else {
      positionActual--;
    }
    renderizarImagen();
  }

  function renderizarImagen() {
    image.style.backgroundImage = `url(${images[positionActual]})`;
  }
  renderizarImagen();

  d.addEventListener("click", (e) => {
    if (
      e.target.matches(`#${arrowLeft}`) ||
      e.target.matches(`.${arrowLeft}`)
    ) {
      retrocederFoto();
    }
    if (
      e.target.matches(`#${arrowRight}`) ||
      e.target.matches(`.${arrowRight}`)
    ) {
      pasarFoto();
    }
  });
}
