export default function cam(id) {
  let p = navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      width: { min: 640, max: 1920 },
      height: { min: 480, max: 1080 },
    },
  });

  p.then((mediaStream) => {
    let video = document.getElementById(id);
    video.srcObject = mediaStream;
  });

  p.catch((err) => {
    console.log(err.name);
  });
}
