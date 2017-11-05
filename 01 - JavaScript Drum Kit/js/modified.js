function playSound(letter) {
  const audio = document.querySelector(`audio[data-key="${letter}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
}

// Enable interacting with buttons to activate drumkit sounds
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', function(){
  const letter = this.dataset.key;
  playSound(letter);
}));

// Enable key
window.addEventListener('keypress', function(e){
  const letter = e.code.replace('Key','');
  playSound(letter);
});
