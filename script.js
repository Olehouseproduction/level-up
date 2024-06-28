// Таймер
let time = 1800;
const timerElement = document.getElementById("timer");

setInterval(() => {
  if (time > 0) {
    time--;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.innerHTML = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }
}, 1000);

// Карусель
