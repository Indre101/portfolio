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
  return parseInt(matrix.m41, 10);
}

const animationSlider = (slide, postitionX) => {
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
      duration: 10000, //milliseconds
      easing: "ease-in-out", //'linear', a bezier curve, etc.
      iterations: Infinity, //or a number
      direction: "alternate", //'normal', 'reverse', etc.
      fill: "forwards" //'backwards', 'both', 'none', 'auto'
    }
  );
  return b;
};

function checkIfPositiveNumber(number) {
  if (number > 0) {
    return 0;
  } else if (number < 0) {
    return -1;
  }
}

const changeAnimation = (slide, xPosition) => {
  // console.log(
  //   widthOfOneSlide *
  //     checksHowTheSlideShouldTransisionOnHover(getXposition(slide), slide)
  // );

  const currentPosition = getXposition(slide);
  console.log("current", currentPosition);
  console.log("width", widthOfOneSlide);
  console.log(
    "object,",
    (getXposition(slide) * checkIfPositiveNumber(currentPosition) +
      widthOfOneSlide) *
      checksHowTheSlideShouldTransisionOnHover(getXposition(slide), slide)
  );

  let c = slide.animate(
    [
      {
        transform: `translateX(${getXposition(
          slide
        )}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"
      },
      {
        transform: `translateX(${(getXposition(slide) *
          checkIfPositiveNumber(currentPosition) +
          widthOfOneSlide) *
          checksHowTheSlideShouldTransisionOnHover(
            getXposition(slide),
            slide
          )}px) rotateY(0deg) skewY(0deg)`,
        boxShadow: "2px 2px 15px blue"
      },

      {
        transform: `translateX(${currentPosition}px) rotateY(50deg) skewY(11deg)`,
        boxShadow: "4px 4px 1px #143140cf"
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

function SLIDE(element) {
  this.element = element;
  this.xPosition = getXposition(this.element);
  this.animationoftheslide = {
    animationOfTheSlider: animationSlider(this.element, this.xPosition),
    pauseanimation: function() {
      this.animationOfTheSlider.pause();
    }
  };
  this.playAnimtation = function() {
    this.animationoftheslide.animationOfTheSlider.play();
  };

  // this.moveLeftOrRight = checksHowTheSlideShouldTransisionOnHover(
  //   this.xPosition
  // );
}

let slidesObjArr = [];

imageAndTextCaption.forEach(slide => {
  let newSlide = new SLIDE(slide);
  slidesObjArr.push(newSlide);
});

window.onload = function() {
  slidesObjArr.forEach(e => {
    e.animationoftheslide;
  });
};

function checksHowTheSlideShouldTransisionOnHover(xPositionOfTheSlide, slide) {
  const positionsOfprojectImagesAndCaptions = projectImagesAndCaptions.getBoundingClientRect();
  const a = slide.getBoundingClientRect();
  const mainLeft = parseInt(positionsOfprojectImagesAndCaptions.left, 10);
  const mainRight = parseInt(positionsOfprojectImagesAndCaptions.right, 10);
  const slideLeft = parseInt(a.left, 10);
  const slideRight = parseInt(a.right, 10);

  // console.log(positionsOfprojectImagesAndCaptions.left, a.left);
  // console.log(
  //   "main right" + positionsOfprojectImagesAndCaptions.right,
  //   a.right
  // );
  // console.log("main left" + mainLeft + widthOfOneSlide, slideLeft);
  // console.log("main left" + mainLeft + widthOfOneSlide, slideRight);

  if (
    mainLeft + widthOfOneSlide / 3 > slideLeft &&
    mainLeft + widthOfOneSlide / 3 < slideRight
  ) {
    // console.log("1");
    return 1;
  } else if (
    mainRight - widthOfOneSlide < slideRight &&
    mainRight - widthOfOneSlide < slideLeft
  ) {
    console.log("-1");
    return -1;
  } else {
    console.log("0");
    return 0;
  }
}

slidesObjArr.forEach(slide => {
  slide.element.onmouseover = function() {
    setTimeout(() => {
      // showImageModal();
    }, 2000);

    slidesObjArr.forEach(e => {e.animationoftheslide.pauseanimation()
    e.style.pointerEvents= "none";
    
    });
      slide.animationoftheslide.animationOfTheSlider = changeAnimation(
        slide.element,
        slide.xPosition
    }
  };

  slide.element.onmouseout = function() {
    slidesObjArr.forEach(e => {
      e.style.pointerEvents= "auto";
        e.playAnimtation();
        e.animationoftheslide.animationOfTheSlider = animationSlider(
          e.element,
          e.xPosition
        );
    });
  };
});

let i = 0;

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
    e.animationoftheslide.animationOfTheSlider = animationSlider(
      e.element,
      e.xPosition
    );
    e.playAnimtation();
  });
};
