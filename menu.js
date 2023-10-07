window.addEventListener("load", function () {
    var slide = document.querySelector(".slide");
    var slideMain = document.querySelector(".slide-main");
    var slideItems = document.querySelectorAll(".slide-item");
    var nextBtn = document.querySelector(".arrow-right");
    var prevBtn = document.querySelector(".arrow-left");
    var slideItemWidth = slideItems[0].offsetWidth;
    var slidesLeng = slideItems.length;
    var currentSlide = 0;

    function showCurrentSlide() {
      for (let i = 0; i < slidesLeng; i++) {
        if (i === currentSlide) {
          slideItems[i].classList.add("active");
        } else {
          slideItems[i].classList.remove("active");
        }
      }
    }

    function slideLeft() {
      currentSlide = (currentSlide - 1 + slidesLeng) % slidesLeng;
      showCurrentSlide();
      updateSlideTransform();
      resetInterval();
    }

    function slideRight() {
      currentSlide = (currentSlide + 1) % slidesLeng;
      showCurrentSlide();
      updateSlideTransform();
      resetInterval();
    }

    function updateSlideTransform() {
      slideMain.style.transform = `translateX(-${currentSlide * slideItemWidth}px)`;
    }

    function resetInterval() {
      clearInterval(intervalId);
      intervalId = setInterval(autoSlide, 5000);
    }

    function autoSlide() {
      slideRight();
    }

    nextBtn.addEventListener("click", slideRight);
    prevBtn.addEventListener("click", slideLeft);

    showCurrentSlide();
    updateSlideTransform();

    var intervalId = setInterval(autoSlide, 5000); // Gọi autoSlide mỗi 5 giây
  });
