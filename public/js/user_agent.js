const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userAgent(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      windows: () => ua.match(/windows nt/i),
      mac: () => ua.match(/mac os/i),
      any: function () {
        return this.linux() || this.windows() || this.mac();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };

  $id.innerHTML = `
    <ul>
      <li>Uset agent: <b>${ua}</b> </li>
      <li>plataforma: <b>${
        isMobile.any() ? isMobile.any() : isDesktop.any()
      }</b> </li>
      <li>Navegador: <b>${isBrowser.any()}</b> </li>
    </ul>
    `;

  if (isBrowser.chrome()) {
    $id.innerHTML += `<p>este contenido solo se mira en chrome</p>`;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `<p>este contenido solo se mira en firefox</p>`;
  }
  if (isMobile.android()) {
    $id.innerHTML += `<p>este contenido solo se mira en android</p>`;
  }
  if (isMobile.ios()) {
    $id.innerHTML += `<p>este contenido solo se mira en iOS</p>`;
  }
}
