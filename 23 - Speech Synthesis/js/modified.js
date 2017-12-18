const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const stopButton = document.querySelector('#stop');
const speakButton = document.querySelector('#speak');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();

  const voiceOptions = voices
    .map((voice) => (`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`))
    .join('');

  voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);

  toggle(false);
}

function setOption() {
  msg[this.name] = this.value;

  toggle(false);
}

function toggle(startOver = true) {
  speechSynthesis.cancel();

  if(startOver) {
    speechSynthesis.speak(msg);
  }
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);

voicesDropdown.addEventListener('change', setVoice);

options.forEach(option => option.addEventListener('change', setOption));

stopButton.addEventListener('click', () => toggle(false));

speakButton.addEventListener('click', toggle);
