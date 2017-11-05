const secondHand = document.querySelector('.hand--second');
const minuteHand = document.querySelector('.hand--minute');
const hourHand = document.querySelector('.hand--hour');
const digitalClock = document.querySelector('.digital-time');

let previousHour = 0;
let previousMinute = 0;
let previousSecond = 0;

function setTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  setAnalogClock(hour,minute,second);
  setDigitalClock(hour,minute,second);
}

function setSecond(second) {

  if(previousSecond == second) {
    return;
  }else {
    previousSecond = second;
  }

  const secondDegrees = ((second / 60) * 360);
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

function setMinute(minute) {
  if(previousMinute == minute) {
    return;
  }else {
    previousMinute = minute;
  }

  const minuteDegrees = ((minute / 60) * 360);
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
}

function setHour(hour) {

  if(previousHour == hour) {
    return;
  }else {
    previousHour = hour;
  }

  const hourDegrees = ((hour / 12) * 360);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function setAnalogClock(hour,minute,second) {
  setHour(hour);
  setMinute(minute);
  setSecond(second);
}

function setDigitalClock(hour,minute,second) {
  const newTime = `${hour}:${minute}:${second}`;
  digitalClock.innerHTML = newTime;
}

setInterval(setTime, 1000);

setTime();
