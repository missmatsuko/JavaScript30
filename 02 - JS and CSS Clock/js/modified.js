const secondHand = document.querySelector('.hand--second');
const minuteHand = document.querySelector('.hand--minute');
const hourHand = document.querySelector('.hand--hour');
const digitalClock = document.querySelector('.digital-time');

function setTime() {
  const now = new Date();

  // Update analog clock
  const second = now.getSeconds();
  const secondDegrees = ((second / 60) * 360);
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minute = now.getMinutes();
  const minuteDegrees = ((minute / 60) * 360);
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // Update digital clock
  const time = `${hour}:${minute}:${second}`;
  digitalClock.innerHTML = time;
}

setInterval(setTime, 1000);

setTime();
