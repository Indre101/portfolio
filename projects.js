// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageModalContainer = document.querySelector(".imageModalContainer");
const imageModal = document.querySelector(".imageModal");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(
  ".projectImages > .imageAndTextCaption"
);
const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
const projectImagesAndCaptions = document.querySelector(".projectImages");

let html = document.querySelector("html");
html.style.setProperty("--colNum", imageAndTextCaption.length);

const numberOfSlidesShown = 4;
const oneSlideOfProject = document.querySelector(".imageAndTextCaption");
const styleOfOneSlide = window.getComputedStyle(oneSlideOfProject);
const widthOfOneSlide = parseInt(styleOfOneSlide.getPropertyValue("width"), 10);
const restofTheSlides = imageAndTextCaption.length - numberOfSlidesShown;
const widthOfTheLeftSlides = restofTheSlides * widthOfOneSlide;

let firstSlideLeft = imageAndTextCaption[0].getBoundingClientRect();
let lastslideRight = imageAndTextCaption[
  imageAndTextCaption.length - 1
].getBoundingClientRect();

function getXposition(slide) {
  let styleOfTheSlide = window.getComputedStyle(slide);
  let matrix = new WebKitCSSMatrix(styleOfTheSlide.webkitTransform);
  return parseInt(matrix.m41, 10);
}

const animationSlider = slide => {
  let b = slide.animate(
    [{
        transform: `translateX(${getXposition(
          slide
        )}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"

        // opacity: "1"
      },

      {
        transform: `translateX(-${lastslideRight.right -
          widthOfOneSlide * restofTheSlides}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"

        // opacity: "1"
      },

      {
        transform: `translateX(${firstSlideLeft.left}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"
      }
    ], {
      duration: 10000, //milliseconds
      easing: "ease-in-out", //'linear', a bezier curve, etc.
      iterations: Infinity, //or a number
      direction: "alternate", //'normal', 'reverse', etc.
      fill: "forwards" //'backwards', 'both', 'none', 'auto'
    }
  );
  return b;
};

const changeAnimation = slide => {
  const currentPosition = getXposition(slide);

  let c = slide.animate(
    [{
        transform: `translateX(${getXposition(
          slide
        )}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"
      },
      {
        transform: `translate(${getXposition(
          slide
        )}px, -1%) rotateY(50deg) skewY(11deg) scale(1.01)`,
        boxShadow: "2px 2px 15px blue"
      }
    ], {
      duration: 500, //milliseconds
      delay: 5,
      easing: "ease-in-out", //'linear', a bezier curve, etc.
      iterations: "Infinity", //or a number
      direction: "alternate", //'normal', 'reverse', etc.
      fill: "forwards" //'backwards', 'both', 'none', 'auto'
    }
  );
  return c;
};

function SLIDE(element) {
  this.element = element;
  this.xPosition = getXposition(this.element);
  this.animationoftheslide = {
    animationOfTheSlider: animationSlider(this.element),
    pauseanimation: function () {
      this.animationOfTheSlider.pause();
    }
  };
  this.playAnimtation = function () {
    this.animationoftheslide.animationOfTheSlider.play();
  };
}

let slidesObjArr = [];

imageAndTextCaption.forEach(slide => {
  let newSlide = new SLIDE(slide);
  slidesObjArr.push(newSlide);
});

window.onload = function () {
  slidesObjArr.forEach(e => {
    e.animationoftheslide;
  });
};

slidesObjArr.forEach(slide => {
  slide.element.onmouseover = function () {
    slidesObjArr.forEach(s => s.animationoftheslide.pauseanimation());
    slide.animationoftheslide.animationOfTheSlider = changeAnimation(
      slide.element
    );
  };

  slide.element.onclick = function () {
    console.log("object");
    showHideSlideModal(imageModalContainer, "d-none", "d-flex-centered");
  };

  slide.element.onmouseout = function () {
    playSliderAnimation();
  };
});

function showHideSlideModal(element, classToRemove, classToAdd) {
  element.classList.toggle(classToAdd);
  element.classList.toggle(classToRemove);
}

imageModalContainer.onmouseover = function () {
  slidesObjArr.forEach(s => {
    s.animationoftheslide.pauseanimation();
  });
};

imageModalContainer.onclick = function () {
  showHideSlideModal(imageModalContainer, "d-none", "d-flex-centered");
  playSliderAnimation();
};

function playSliderAnimation() {
  slidesObjArr.forEach(e => {
    e.playAnimtation();
    e.animationoftheslide.animationOfTheSlider = animationSlider(e.element);
  });
}

const previousArrow = document.querySelector(".previousArrow");

previousArrow.onclick = function () {
  // let moveAmount = 0;
  slidesObjArr.forEach(slide => {
    slide.animationoftheslide.animationOfTheSlider = changeAnimationTest(
      slide.element
    );
  });
};

console.log("lastslideRight.right", lastslideRight.right);
const changeAnimationTest = slide => {
  let move = +300;
  console.log("slide-move", getXposition(slide) - move);
  console.log(
    "alltheslides",
    lastslideRight.right - widthOfOneSlide * restofTheSlides
  );

  let b = slide.animate(
    [{
        transform: `translateX(${getXposition(slide) -
          move}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"

        // opacity: "1"
      },

      {
        transform: `translateX(-${lastslideRight.right -
          widthOfOneSlide * restofTheSlides}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"

        // opacity: "1"
      },

      {
        transform: `translateX(${firstSlideLeft.left -
          widthOfOneSlide / 2}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"
      }
    ], {
      duration: 10000, //milliseconds
      easing: "ease-in-out", //'linear', a bezier curve, etc.
      iterations: Infinity, //or a number
      direction: "alternate", //'normal', 'reverse', etc.
      fill: "forwards" //'backwards', 'both', 'none', 'auto'
    }
  );
  return b;
};