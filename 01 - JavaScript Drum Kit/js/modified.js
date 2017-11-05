function play(letter, start) {
  const audio = document.querySelector(`audio[data-key="${letter}"]`);
  const key = document.querySelector(`.key[data-key="${letter}"]`);

  if (!audio || !key) return;

  key.classList.toggle('playing', start);

  if(start) {
    audio.currentTime = 0;
    audio.play();
  }
}

// Enable interacting with buttons to activate drumkit sounds
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', function(){
  const letter = this.dataset.key;
  play(letter, true);
}));

// Enable keypress to activate drumkit sounds
window.addEventListener('keypress', function(e){
  const letter = e.code.replace('Key','');
  play(letter, true);
});

// Add 'audio end' event listener to audio to remove playing class
const audios = document.querySelectorAll('audio');
audios.forEach(audio => audio.addEventListener('ended', function(){
  const letter = this.dataset.key;
  play(letter, false);
}));
