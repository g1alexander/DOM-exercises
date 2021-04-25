const d = document,
  array = [
    "Javascript",
    "PHP",
    "JAVA",
    "C",
    "Python",
    "Ruby",
    "Go",
    "Visual Basic",
    "Rust",
    "Perl",
  ];

export default function lottery(sorteo, $list) {
  $list = document.getElementById($list);

  let list = array.map((e) => `<li>- ${e}</li>`).join("");
  $list.innerHTML = list;

  d.addEventListener("click", (e) => {
    if (e.target.matches(sorteo)) {
      let aletorio = Math.floor(Math.random() * (10 - 0) + 0);
      array.forEach((e, i) => {
        if (aletorio === i) alert(`El ganador es ${e}`);
      });
    }
  });
}

/* funcion para usar en cualquier sitio o red social

const getWinnerComment = selector =>{
  const $players = document.querySelectorAll(selector),
  random = Math.floor(Math.random() * $players.length),
  winner = $players[random];

  return `El ganador es: ${winner.textContent}`
} */
