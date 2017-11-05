function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
}

// Enable interacting with buttons to activate drumkit sounds
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', function(){
  const keyCode = this.dataset.key;
  playSound(keyCode);
}));

// Enable key
window.addEventListener('keydown', function(e){
  const keyCode = e.keyCode;
  playSound(keyCode);
});
