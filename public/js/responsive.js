const d = document;

export default function responsive(
  templete,
  templete2,
  btnRDJ,
  videoRDJ,
  childbtnRDJ,
  childvideoRDJ
) {
  templete = d.getElementById(templete).content;
  templete2 = d.getElementById(templete2).content;
  btnRDJ = d.getElementById(btnRDJ);
  videoRDJ = d.getElementById(videoRDJ);

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      templete2.querySelector("article").innerHTML = `<iframe
                width="460"
                height="215"
                class="block mx-auto"
                src="https://www.youtube.com/embed/2SetvwBV-SU"
                allowfullscreen
              ></iframe>
              <iframe
                width="460"
                height="215"
                class="block mx-auto"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15956.051175151542!2d-76.652822!3d1.1513525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6a7d3eaf58e0c78!2sParque%20General%20Santander!5e0!3m2!1ses-419!2sco!4v1618577326766!5m2!1ses-419!2sco"
                allowfullscreen
              ></iframe>`;
      let $clone = document.importNode(templete2, true);
      if (videoRDJ.children.length === 0) {
        videoRDJ.appendChild($clone);
      }
      if (btnRDJ.children.length === 1) {
        const copyChildbtnRDJ = d.getElementById(childbtnRDJ);
        btnRDJ.removeChild(copyChildbtnRDJ);
      }
    } else {
      templete.querySelector("div").innerHTML = `
        <a
            class="btn btn-blue"
            target="_blank"
            rel="noopener"
            href="https://youtu.be/2SetvwBV-SU"
          >
            Ver video
          </a> <span class="dark:text-gray-800">-</span>
          <a
            class="btn btn-green"
            target="_blank"
            rel="noopener"
            href="https://www.google.com/maps/place/Parque+General+Santander/@1.1513525,-76.652822,15z/data=!4m5!3m4!1s0x0:0xe6a7d3eaf58e0c78!8m2!3d1.1465866!4d-76.648213"
          >
            Mirar Mapa
          </a>`;
      let $clone = document.importNode(templete, true);
      if (btnRDJ.children.length === 0) {
        btnRDJ.appendChild($clone);
      }
      if (videoRDJ.children.length === 1) {
        const copyChildvideoRDJ = d.getElementById(childvideoRDJ);
        videoRDJ.removeChild(copyChildvideoRDJ);
      }
    }
  }

  let x = window.matchMedia("(min-width: 920px)");
  myFunction(x); // Call listener function at run time
  x.addEventListener("change", myFunction);
}
