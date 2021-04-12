let d = document;

const ball = (canvas) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(canvas)) {
      canvas = d.querySelector(canvas);
      d.addEventListener("keydown", (e) => {
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(20, 20, 10, 0, 2 * Math.PI, true);
        ctx.fillStyle = "#FCE141";
        ctx.fill();
        ctx.closePath();
        if (e.key === "w") return ctx.translate(0, -10);
        if (e.key === "s") return ctx.translate(0, 10);
        if (e.key === "a") return ctx.translate(-10, 0);
        if (e.key === "d") return ctx.translate(10, 0);
      });
    }
  });
};

const events = () => {
  d.addEventListener("keydown", (e) => {
    if (e.key === "a" && e.altKey === true)
      return alert("has activado una alerta");

    if (e.key === "p" && e.altKey === true)
      return prompt("has activado una prompt");

    if (e.key === "c" && e.altKey === true)
      return confirm("has activado una confirm");
  });
};

export { ball, events };
