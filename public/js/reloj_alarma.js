export default function relojAlarma(
  templete,
  startReloj,
  stopReloj,
  reloj,
  startAlarm,
  stopAlarm,
  alarm
) {
  reloj = document.querySelector(reloj);
  alarm = document.querySelector(alarm);
  templete = document.querySelector(templete).content;
  let set_interval;
  const classAndAttribute = (event1, attribute1, event2, attribute2) => {
    event1 = document.querySelector(event1);
    event1.setAttribute("disabled", "");
    event1.classList.remove(attribute1);
    event1.classList.add("btn-disable");

    event2 = document.querySelector(event2);
    event2.removeAttribute("disabled");
    event2.classList.add(attribute2);
    event2.classList.remove("btn-disable");
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(startReloj)) {
      classAndAttribute(startReloj, "btn-blue", stopReloj, "btn-red");
      set_interval = setInterval(() => {
        templete.querySelector(
          "h2"
        ).textContent = new Date().toLocaleTimeString();
        let $clone = document.importNode(templete, true);
        reloj.appendChild($clone);
        let hour = reloj.appendChild($clone);
        let $content = document.getElementById("content-reloj");
        reloj.replaceChild(hour, $content);
      }, 1000);
    }

    if (e.target.matches(stopReloj)) {
      classAndAttribute(stopReloj, "btn-red", startReloj, "btn-blue");
      clearInterval(set_interval);
      reloj.querySelector("h2").setAttribute("hidden", "");
    }

    if (e.target.matches(startAlarm)) {
      classAndAttribute(startAlarm, "btn-blue", stopAlarm, "btn-red");
      alarm.play();
    }

    if (e.target.matches(stopAlarm)) {
      classAndAttribute(stopAlarm, "btn-red", startAlarm, "btn-blue");
      alarm.pause();
    }
  });
}
