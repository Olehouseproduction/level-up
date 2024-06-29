// Таймер
let time = 1800;
const timerElement = document.getElementById("timer");

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

document.addEventListener("DOMContentLoaded", function () {
  // Добавляем класс "active" к блоку .content
  document.querySelector(".content").classList.add("active");

  // Находим элементы карусели и управляющие кнопки
  const carousel = document.querySelector(".reviews-carousel");
  const reviews = document.querySelectorAll(".review");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndex = 0;

  // Функция для показа отзывов
  function showReview(index) {
    reviews.forEach((review, i) => {
      review.style.left = `${(i - index) * 100}%`;
    });
  }

  // Функция для переключения на следующий отзыв
  function nextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }

  // Функция для переключения на предыдущий отзыв
  function prevReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
  }

  // Обработчики событий для кнопок "Next" и "Prev"
  nextButton.addEventListener("click", nextReview);
  prevButton.addEventListener("click", prevReview);

  // Автоматическое переключение слайдов каждые 5 секунд
  setInterval(nextReview, 5000);

  // Инициализация показа первого отзыва
  showReview(currentIndex);

  // Добавляем анимацию для .highlight-description при появлении во viewport
  const highlightDescription = document.querySelector(".highlight-description");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function addAnimationIfVisible() {
    if (isInViewport(highlightDescription)) {
      highlightDescription.classList.add("animate");
      window.removeEventListener("scroll", addAnimationIfVisible);
    }
  }

  addAnimationIfVisible();

  window.addEventListener("scroll", addAnimationIfVisible);
});
