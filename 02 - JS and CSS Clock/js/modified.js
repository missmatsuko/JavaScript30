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

// Formats numbers with length of 1 to have leading 0,
// otherwise just return the number
function formatNumberForTime(number) {
  if(number.toString().length == 1) {
    return '0' + number;
  }
  return number;
}

// Check if current value matches previous value
function matchesPrevious(current,previous) {
  if(previous == current) {
    return true;
  }
  return false;
}

function setAnalogClock(hour,minute,second) {
  if(!matchesPrevious(hour,previousHour)) {
    previousHour = hour;
    const hourDegrees = ((hour / 12) * 360);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  if(!matchesPrevious(minute,previousMinute)) {
    previousMinute = minute;
    const minuteDegrees = ((minute / 60) * 360);
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  }

  if(!matchesPrevious(second,previousSecond)) {
    previousSecond = second;
    const secondDegrees = ((second / 60) * 360);
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  }
}

function setDigitalClock(hour,minute,second) {
  const newTime = `${formatNumberForTime(hour)}:${formatNumberForTime(minute)}:${formatNumberForTime(second)}`;
  digitalClock.innerHTML = newTime;
}

setInterval(setTime, 1000);

setTime();
