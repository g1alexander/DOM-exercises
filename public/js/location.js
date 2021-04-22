const n = navigator,
  d = document;

export default function location(id) {
  const $location = d.getElementById(id);

  if ("geolocation" in navigator) {
    n.geolocation.getCurrentPosition((position) => {
      $location.innerHTML += `
        <ul class="pb-5">
          <li>Latitud: ${position.coords.latitude}</li>
          <li>longitud: ${position.coords.longitude}</li>
          <li>presicion: ${position.coords.accuracy}</li>
        </ul>
      `;

      $location
        .querySelector("a")
        .setAttribute(
          "href",
          "https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude}"
        );

      $location.append($location.querySelector("a"));
    });
  } else {
    $location.innerHTML = `
        <p> No has puedes usar geolocalizacion
        </p>
      `;
  }
}
