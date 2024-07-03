// Таймер
let isOnce = false; // Флаг, который используется для запуска таймера один раз.
let time = 1800; // Время для таймера (в секундах).
const timerElement = document.getElementById("timer"); // Получаем элемент таймера по его ID.

function timer(time) {
  setTimeout(() => {
    if (time > 0) {
      time--; // Уменьшаем время на одну секунду.
      const minutes = Math.floor(time / 60); // Вычисляем количество оставшихся минут.
      const seconds = time % 60; // Вычисляем количество оставшихся секунд.
      // Обновляем текст таймера с добавлением ведущего нуля для секунд, если это необходимо.
      timerElement.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
      timer(time); // Рекурсивно вызываем функцию для следующей секунды.
    } else {
      timerElement.innerText = "00:00"; // Когда время истекает, устанавливаем текст таймера на "00:00".
    }
  }, 1000);
}

// Дожидаемся полной загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  // Добавляем класс "active" к блоку .content для запуска анимации появления контента.
  document.querySelector(".content").classList.add("active");

  // Находим элементы карусели и управляющие кнопки
  const carousel = document.querySelector(".reviews-carousel"); // Контейнер карусели.
  const reviews = document.querySelectorAll(".review"); // Все элементы отзывов.
  const prevButton = document.getElementById("prev"); // Кнопка для перехода к предыдущему отзыву.
  const nextButton = document.getElementById("next"); // Кнопка для перехода к следующему отзыву.
  let currentIndex = 0; // Текущий индекс видимого отзыва.

  // Функция для показа отзывов
  function showReview(index) {
    reviews.forEach((review, i) => {
      // Устанавливаем положение каждого отзыва в зависимости от текущего индекса.
      review.style.left = `${(i - index) * 100}%`;
    });
  }

  // Функция для переключения на следующий отзыв
  function nextReview() {
    currentIndex = (currentIndex + 1) % reviews.length; // Увеличиваем индекс и делаем его цикличным.
    showReview(currentIndex); // Показываем отзыв с новым индексом.
  }

  // Функция для переключения на предыдущий отзыв
  function prevReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length; // Уменьшаем индекс и делаем его цикличным.
    showReview(currentIndex); // Показываем отзыв с новым индексом.
  }

  // Обработчики событий для кнопок "Next" и "Prev"
  nextButton.addEventListener("click", nextReview);
  prevButton.addEventListener("click", prevReview);

  // Автоматическое переключение слайдов каждые 5 секунд
  setInterval(nextReview, 5000); // Устанавливаем интервал для автоматической смены отзывов.

  // Инициализация показа первого отзыва
  showReview(currentIndex); // Показываем первый отзыв при загрузке страницы.

  // Добавляем анимацию для .highlight-description при появлении во viewport
  const highlightDescription = document.querySelector(".highlight-description");

  // Функция проверки видимости элемента во viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect(); // Получаем размеры и положение элемента относительно viewport.
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ); // Проверяем, находится ли элемент полностью в видимой области окна.
  }

  // Функция добавления анимации, если элемент виден
  function addAnimationIfVisible() {
    if (isInViewport(highlightDescription) && !isOnce) {
      isOnce = true; // Устанавливаем флаг, чтобы анимация добавлялась только один раз.
      highlightDescription.classList.add("animate"); // Добавляем класс "animate" для запуска анимации.
    }
    if (isInViewport(timerElement)) {
      timer(time); // Запускаем таймер, если элемент таймера виден.
      window.removeEventListener("scroll", addAnimationIfVisible); // Удаляем обработчик события прокрутки, чтобы таймер запускался только один раз.
    }
  }

  // Проверяем видимость элементов при загрузке страницы
  addAnimationIfVisible();

  // Добавляем обработчик события прокрутки для проверки видимости элементов
  window.addEventListener("scroll", addAnimationIfVisible);
});
