const secondHand = document.querySelector('.hand--second');
const minuteHand = document.querySelector('.hand--minute');
const hourHand = document.querySelector('.hand--hour');

function setTime() {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegrees = ((second / 60) * 360);
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minute = now.getMinutes();
  const minuteDegrees = ((minute / 60) * 360);
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setTime, 1000);

setTime();
