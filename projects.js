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
const positionsOfprojectImagesAndCaptions = projectImagesAndCaptions.getBoundingClientRect();

let html = document.querySelector("html");
html.style.setProperty("--colNum", imageAndTextCaption.length);

const numberOfSlidesShown = 4.5;
const oneSlideOfProject = document.querySelector(".imageAndTextCaption");
const styleOfOneSlide = window.getComputedStyle(oneSlideOfProject);
const widthOfOneSlide = parseInt(styleOfOneSlide.getPropertyValue("width"), 10);
const restofTheSlides = imageAndTextCaption.length - numberOfSlidesShown;
const widthOfTheLeftSlides = restofTheSlides * widthOfOneSlide;

let firstSlideLeft = imageAndTextCaption[0].getBoundingClientRect();
let lastslideRight = imageAndTextCaption[
  imageAndTextCaption.length - 1
].getBoundingClientRect();

let sliderContainerCoordinates = projectImagesAndCaptions.getBoundingClientRect();

function getXposition(slide) {
  let styleOfTheSlide = window.getComputedStyle(slide);
  let matrix = new WebKitCSSMatrix(styleOfTheSlide.webkitTransform);
  return matrix.m41;
}

function checksHowTheSlideShouldTransisionOnHover(xPositionOfTheSlide) {
  if (xPositionOfTheSlide < positionsOfprojectImagesAndCaptions.left) {
    return -1;
  } else if (xPositionOfTheSlide > positionsOfprojectImagesAndCaptions.right) {
    return 1;
  } else {
    return 0;
  }
}

const animaionSlider = slide => {
  checksHowTheSlideShouldTransisionOnHover(slide);
  let b = slide.animate(
    [
      {
        transform: `translateX(${getXposition(
          slide
        )}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"

        // opacity: "1"
      },

      {
        transform: `translateX(-${lastslideRight.right +
          widthOfOneSlide -
          widthOfOneSlide * restofTheSlides}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"

        // opacity: "1"
      },

      {
        transform: `translateX(${firstSlideLeft.left -
          widthOfOneSlide}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"
      }
    ],
    {
      duration: 30000, //milliseconds
      easing: "ease-in-out", //'linear', a bezier curve, etc.
      iterations: Infinity, //or a number
      direction: "alternate", //'normal', 'reverse', etc.
      fill: "forwards" //'backwards', 'both', 'none', 'auto'
    }
  );
  return b;
};

// box-shadow: 2px 2px 15px blue;
//     transform: rotateY(0) skewY(0) translateY(0);
// }

const changeAnimation = slide => {
  let c = slide.animate(
    [
      {
        transform: `translateX(${getXposition(
          slide
        )}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"
      },
      {
        transform: `translateX(${getXposition(slide) +
          (widthOfOneSlide / 2) *
            checksHowTheSlideShouldTransisionOnHover(
              slide
            )}px) rotateY(0deg) skewY(0deg)`,
        boxShadow: "2px 2px 15px blue"
      }
    ],
    {
      duration: 1000, //milliseconds
      delay: 5,
      easing: "ease-in-out", //'linear', a bezier curve, etc.
      iterations: 1, //or a number
      direction: "normal", //'normal', 'reverse', etc.
      fill: "forwards" //'backwards', 'both', 'none', 'auto'
    }
  );
  return c;
};

function Slide(element) {
  this.element = element;
  this.animationoftheslide = {
    test5: animaionSlider(this.element),
    test6: function() {
      this.test5.pause();
    }
  };
  this.playAnimtation = function() {
    this.animationoftheslide.test5.play();
  };

  this.xPosition = getXposition(this.element);
  this.moveLeftOrRight = checksHowTheSlideShouldTransisionOnHover(
    this.xPosition
  );
}

let slidesObjArr = [];

imageAndTextCaption.forEach(slide => {
  let newSlide = new Slide(slide);
  slidesObjArr.push(newSlide);
});

window.onload = function() {
  slidesObjArr.forEach(e => {
    e.animationoftheslide;
  });
};

slidesObjArr.forEach(slide => {
  slide.element.onmouseover = function() {
    setTimeout(() => {
      // showImageModal();
    }, 2000);
    slidesObjArr.forEach(e => e.animationoftheslide.test6());
    slide.animationoftheslide.test5 = changeAnimation(slide.element);
  };

  // slide.element.onmouseout = function() {
  //   slidesObjArr.forEach(e => {
  //     e.animationoftheslide.test5 = animaionSlider(e.element);
  //     e.playAnimtation();
  //   });
  // };
});

function showImageModal() {
  imageModalContainer.classList.remove("d-none");
  imageModalContainer.classList.add("d-flex-centered");
}

function hideImageModal() {
  imageModalContainer.classList.add("d-none");
  imageModalContainer.classList.remove("d-flex-centered");
}

imageModalContainer.onmouseover = function() {};

imageModal.onmouseout = function() {
  hideImageModal();
  slidesObjArr.forEach(e => {
    e.animationoftheslide.test5 = animaionSlider(e.element);
    e.playAnimtation();
  });
};
