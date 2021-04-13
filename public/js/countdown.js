export default function countdown(countdown, imgCountdown, dateFuture) {
  const parseDuration = (duration) => {
    let remain = duration;

    let days = Math.floor(remain / (1000 * 60 * 60 * 24));
    remain = remain % (1000 * 60 * 60 * 24);

    let hours = Math.floor(remain / (1000 * 60 * 60));
    remain = remain % (1000 * 60 * 60);

    let minutes = Math.floor(remain / (1000 * 60));
    remain = remain % (1000 * 60);

    let seconds = Math.floor(remain / 1000);
    remain = remain % 1000;

    return `Faltan ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos para Año Nuevo`;
  };

  countdown = document.querySelector(countdown);
  imgCountdown = document.querySelector(imgCountdown);
  let set_interval;

  set_interval = setInterval(() => {
    let date = new Date();
    let time = dateFuture.getTime() - date.getTime();
    countdown.innerHTML = parseDuration(time);

    if (dateFuture.getTime() < date.getTime()) {
      countdown.classList.toggle("hidden");
      imgCountdown.classList.toggle("hidden");
      clearInterval(set_interval);
    }
  }, 1000);
}
