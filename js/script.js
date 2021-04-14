"use: strict";

// DOM Elements

const heroSlider = document.querySelector(".hero-slider");
const allHeroImgs = heroSlider.querySelectorAll("img");

// Functions

const init = function () {
  runHeroSlider(allHeroImgs);
};

const timerHelper = function (func, secs) {
  return setInterval(func, secs * 1000);
};

const runHeroSlider = async function (arrImgs) {
  const allImgsArr = [...arrImgs];
  const counterMax = allImgsArr.length - 1;
  let counter = -1;

  const revealImgOnLoad = function (img) {
    img.classList.add("hero-slider__img--visible");
    counter++;
  };

  const revealImg = function (img) {
    img.classList.add("hero-slider__img--visible");
  };

  const hideAllImgs = function () {
    allImgsArr.forEach((img) =>
      img.classList.remove("hero-slider__img--visible")
    );
  };

  const nextImg = function () {
    if (counter === counterMax) {
      counter = 0;
    } else {
      counter++;
    }

    hideAllImgs();
    revealImg(allImgsArr[counter]);
  };

  revealImgOnLoad(allImgsArr[0]);
  timerHelper(nextImg, 7);
};

init();
