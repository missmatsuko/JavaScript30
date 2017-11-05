/*
* letter: single letter, uppercase; letter part of keypress code; used as audio and button identifier
* start: boolean; set true to start playing audio
*/
function play(letter, start) {
  const audio = document.querySelector(`audio[data-key="${letter}"]`);
  const key = document.querySelector(`.key[data-key="${letter}"]`);

  if (!audio || !key) return;

  key.classList.remove('playing');

  setTimeout(function() {
      key.classList.toggle('playing', start);
    }
  );

  if(start) {
    audio.currentTime = 0;
    audio.play();
  }
}

// Enable interacting with buttons (clicking or tab/enter) to activate drumkit sounds
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

// Remove playing class when audio finishes playing
const audios = document.querySelectorAll('audio');
audios.forEach(audio => audio.addEventListener('ended', function(){
  const letter = this.dataset.key;
  play(letter, false);
}));
