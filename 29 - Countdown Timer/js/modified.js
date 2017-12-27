const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;

let countdown = null;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function millisecondsToSeconds(milliseconds) {
  return Math.round(milliseconds / MILLISECONDS_PER_SECOND);
}

function secondsToMilliseconds(seconds) {
  return Math.round(seconds * MILLISECONDS_PER_SECOND);
}

function pad(number, size = 2) {
  let paddedNumber = number.toString();

  while (paddedNumber.length < (size || 2)) {
    paddedNumber = "0" + paddedNumber;
  }

  return paddedNumber;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / SECONDS_PER_MINUTE);
  const s = seconds % SECONDS_PER_MINUTE;
  return `${pad(m)}:${pad(s)}`;
}

function timer(seconds) {
  const startTime = Date.now();
  const endTime = startTime + secondsToMilliseconds(seconds);

  clearInterval(countdown);

  displayTimeLeft(seconds);
  displayEndTime(endTime);

  countdown = setInterval(() => {
    const secondsLeft = millisecondsToSeconds(endTime - Date.now());

    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);

  }, secondsToMilliseconds(1));
}

function displayTimeLeft(secondsLeft) {
  const displayTime = formatTime(secondsLeft);
  timerDisplay.textContent = displayTime;
  document.title = displayTime;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  const displayTime = `Be back at: ${pad(hours)}:${pad(minutes)}`;

  endTimeDisplay.textContent = displayTime;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const minutes = this.minutes.value;
  const seconds = minutes * SECONDS_PER_MINUTE;
  this.reset();
  timer(seconds);
});
