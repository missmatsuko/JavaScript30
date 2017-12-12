const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const spread = 200; // distance for text to spread

function shadow(e) {
  const {
    offsetWidth: width,
    offsetHeight: height,
  } = hero;

  const {
    pageX: x,
    pageY: y,
  } = e;

  const spreadX = Math.round(x / width * spread) - (spread / 2);
  const spreadY = Math.round(y / height * spread) - (spread / 2);

  text.style.textShadow = `
    ${spreadX}px ${spreadY}px 0 rgba(255,0,255,0.7),
    ${spreadX * -1}px ${spreadY}px 0 rgba(255,255,0,0.7),
    ${spreadX}px ${spreadY * -1}px 0 rgba(255,0,0,0.7),
    ${spreadX * -1}px ${spreadY * -1}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener('mousemove', shadow);
