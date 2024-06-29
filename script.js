// Таймер
let time = 1800;
const timerElement = document.getElementById("timer");

// const interval = setInterval(() => {
//   if (time > 0) {
//     time--;
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     timerElement.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
//   } else {
//     timerElement.innerText = "00:00";
//     clearInterval(interval);
//   }
// }, 1000);

function timer(time) {
  setTimeout(() => {
    if (time > 0) {
      time--;
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      timerElement.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
      timer(time);
    } else {
      timerElement.innerText = "00:00";
    }
  }, 1000);
}

timer(time);

// анимация
document.addEventListener("DOMContentLoaded", function () {
  var highlightBlock = document.querySelector(".highlight-block");

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkVisibility() {
    if (isInViewport(highlightBlock)) {
      highlightBlock.style.display = "flex"; // Показываем блок
    }
  }

  // Проверяем видимость блока при загрузке страницы и при скролле
  checkVisibility();
  window.addEventListener("scroll", checkVisibility);
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".content").classList.add("active");
});
