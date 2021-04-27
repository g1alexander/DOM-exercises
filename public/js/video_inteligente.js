const d = document;

export default function videoInteligente($video) {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
        entry.target.muted = true;
      } else {
        entry.target.pause();
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);

  $video = d.getElementById($video);
  observer.observe($video);

  d.addEventListener("visibilitychange", () => {
    if (d.visibilityState === "visible") {
      $video.muted = false;
    } else {
      $video.muted = true;
    }
  });
}
