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

// карусель
// document.addEventListener("DOMContentLoaded", () => {
//   const carousel = document.querySelector(".reviews-carousel");
//   const reviews = document.querySelectorAll(".review");
//   const prevButton = document.getElementById("prev");
//   const nextButton = document.getElementById("next");
//   let currentIndex = 0;

//   function showReview(index) {
//     const offset = -index * 300; // Adjust based on your review card width
//     reviews.forEach((review) => {
//       review.style.transform = `translateX(${offset}px)`;
//     });
//   }

//   function nextReview() {
//     currentIndex = (currentIndex + 1) % reviews.length;
//     showReview(currentIndex);
//   }

//   function prevReview() {
//     currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
//     showReview(currentIndex);
//   }

//   nextButton.addEventListener("click", nextReview);
//   prevButton.addEventListener("click", prevReview);

//   setInterval(nextReview, 5000);
// });

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".reviews-carousel");
  const reviews = document.querySelectorAll(".review");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndex = 0;

  function showReview(index) {
    reviews.forEach((review, i) => {
      review.style.left = `${(i - index) * 100}%`;
    });
  }

  function nextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }

  function prevReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
  }

  nextButton.addEventListener("click", nextReview);
  prevButton.addEventListener("click", prevReview);

  setInterval(nextReview, 5000);

  // Инициализация
  showReview(currentIndex);
});
