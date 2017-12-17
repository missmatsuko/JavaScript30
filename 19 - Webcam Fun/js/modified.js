const CHANNELS = 4;

// Num for each channel
const RED = 0;
const GREEN = 1;
const BLUE = 2;
const ALPHA = 3;

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  })
    .then(localMediaStream => {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(error => {
      console.error('Could not start webcam', error);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    let pixels = ctx.getImageData(0, 0, width, height);
    //pixels = redEffect(pixels);
    //pixels = RGBSplit(pixels);
    //ctx.globalAlpha = 0.8;
    //pixels = greenScreen(pixels);
    ctx.putImageData(pixels, 0, 0);

  }, 50);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');

  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src='${data}' alt='Download Image'>`

  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for(let i = 0; i < pixels.data.length; i += CHANNELS) {
    pixels.data[RED + i] += 200;
    pixels.data[GREEN + i] -= 50;
    pixels.data[BLUE + i] *= 0.5;
  }

  return pixels;
}

function RGBSplit(pixels) {
  for(let i = 0; i < pixels.data.length; i += CHANNELS) {
    pixels.data[i - 500] = pixels.data[RED + i];
    pixels.data[i + 300] = pixels.data[GREEN + i];
    pixels.data[i - 550] = pixels.data[BLUE + i];
  }

  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

// Start video
getVideo();
video.addEventListener('canplay', paintToCanvas);
