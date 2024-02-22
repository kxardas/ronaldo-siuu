let ronaldo = document.querySelector('img');

ronaldo.onclick = () => {
  let audio = new Audio('ronaldo.mp3');
  audio.currentTime = 2.2;
  audio.volume = 1.0;
  audio.play();
}