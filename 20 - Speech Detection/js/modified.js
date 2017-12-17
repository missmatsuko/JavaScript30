window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector('.words');
let p = document.createElement('p');

words.append(p);

recognition.addEventListener('result', (e) => {
  const result = e.results[0];

  const transcript = Array.from(result)
    .map(result => result.transcript)
    .join(' ');

  p.textContent = transcript;

  if(result.isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

recognition.start();
recognition.addEventListener('end', recognition.start);
