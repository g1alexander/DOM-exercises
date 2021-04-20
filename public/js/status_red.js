const w = window,
  n = navigator;

export default function statusRed(status) {
  status = document.getElementById(status);

  if (n.onLine) {
    online();
  } else {
    offline();
  }

  w.addEventListener("offline", function (e) {
    offline();
  });

  w.addEventListener("online", function (e) {
    online();
  });

  function online() {
    status.classList.add("bg-green-500");
    status.classList.remove("bg-red-500");
    status.innerHTML = "online";
    setTimeout(() => {
      status.classList.toggle("hidden");
    }, 2000);
  }

  function offline() {
    status.classList.remove("bg-green-500");
    status.classList.add("bg-red-500");
    status.innerHTML = "offline";
    status.classList.toggle("hidden");
  }
}
