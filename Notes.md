## Notas de los ejercicios del DOM

---

### 1. Primer ejercicio

- En la estructura del codigo me faltó poner una etiqueta **"main"** que envolvieran las 5 seccion.
- Utilizé para el icon **Fontawesone** y el profe utilizó una libreria llamada **hamburger js** que además trae una animación.
- Me falta manejar las animaciones CSS, para darle más interacciones a las paginas que realice.
- Si bien realice bien el evento del menu-burger, faltó modularizarlo.

---

const $startReloj = document.getElementById("start-reloj"),
$stopReloj = document.getElementById("stop-reloj"),
$reloj = document.getElementById("reloj"),
$templete = document.getElementById("templete-reloj").content;

$startReloj.addEventListener("click", (e) => {
$startReloj.setAttribute("disabled", "");
$startReloj.classList.remove("btn-blue");
$startReloj.classList.add("btn-disable");

$stopReloj.removeAttribute("disabled");
$stopReloj.classList.add("btn-red");
$stopReloj.classList.remove("btn-disable");

let set_interval = setInterval(() => {
$templete.querySelector("h2").textContent = new Date().toLocaleTimeString();
    let $clone = document.importNode($templete, true);
$reloj.appendChild($clone);
let hour = $reloj.appendChild($clone);
let $content = document.getElementById("content-reloj");
$reloj.replaceChild(hour, $content);
}, 1000);

$stopReloj.addEventListener("click", (e) => {
$stopReloj.setAttribute("disabled", "");
$stopReloj.classList.remove("btn-red");
$stopReloj.classList.add("btn-disable");

    $startReloj.removeAttribute("disabled");
    $startReloj.classList.add("btn-blue");
    $startReloj.classList.remove("btn-disable");

    clearInterval(set_interval);
    $reloj.querySelector("h2").setAttribute("hidden", "");

});
});

const $alarm = document.getElementById("alarm"),
$startAlarm = document.getElementById("start-alarm"),
$stopAlarm = document.getElementById("stop-alarm");

$startAlarm.addEventListener("click", (e) => {
$startAlarm.setAttribute("disabled", "");
$startAlarm.classList.remove("btn-blue");
$startAlarm.classList.add("btn-disable");

$stopAlarm.removeAttribute("disabled");
$stopAlarm.classList.add("btn-red");
$stopAlarm.classList.remove("btn-disable");

$alarm.play();
});

$stopAlarm.addEventListener("click", (e) => {
$stopAlarm.setAttribute("disabled", "");
$stopAlarm.classList.remove("btn-red");
$stopAlarm.classList.add("btn-disable");

$startAlarm.removeAttribute("disabled");
$startAlarm.classList.add("btn-blue");
$startAlarm.classList.remove("btn-disable");

$alarm.pause();
});
