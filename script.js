const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;
let maxSlide = slides.length - 1;

// next button slide
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    console.log(curSlide);
  });
});

//prev button slide
prevSlide.addEventListener("click", () => {
  if (curSlide == 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
    console.log(curSlide);
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    // console.log(curSlide);
  });
});
