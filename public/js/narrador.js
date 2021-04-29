const d = document,
  w = window;

export default function narrador(form, lang, text) {
  lang = d.getElementById(lang);
  text = d.getElementById(text);

  function setSpeech() {
    return new Promise(function (resolve, reject) {
      let synth = w.speechSynthesis;
      let id;

      id = setInterval(() => {
        if (synth.getVoices().length !== 0) {
          resolve(synth.getVoices());
          clearInterval(id);
        }
      }, 10);
    });
  }

  let s = setSpeech();
  s.then((voices) => {
    voices.forEach((v) => {
      lang.innerHTML += `
    <option value="${v.lang}">${v.name}</option>
  `;
    });
  });
  d.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.target.matches(form)) {
      let synth = w.speechSynthesis;

      let utterThis = new SpeechSynthesisUtterance(text.value);
      utterThis.lang = lang.value;
      synth.speak(utterThis);
    }
  });
}
