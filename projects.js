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
  return matrix.m41;
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

const changeAnimation = (slide, xPosition) => {
  console.log(
    widthOfOneSlide *
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
        transform: `translateX(${widthOfOneSlide *
          checksHowTheSlideShouldTransisionOnHover(
            getXposition(slide),
            slide
          )}px) rotateY(0deg) skewY(0deg)`,
        boxShadow: "2px 2px 15px blue"
      },
      {
        transform: `translateX(${getXposition(
          slide
        )}px) rotateY(50deg) skewY(11deg)`,
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
    test5: animationSlider(this.element, this.xPosition),
    test6: function() {
      this.test5.pause();
    }
  };
  this.playAnimtation = function() {
    this.animationoftheslide.test5.play();
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
  // console.log(positionsOfprojectImagesAndCaptions.left, a.left);
  console.log(positionsOfprojectImagesAndCaptions.right, a.right);

  if (positionsOfprojectImagesAndCaptions.left + widthOfOneSlide > a.left) {
    console.log("1");
    return 1;
  } else if (
    positionsOfprojectImagesAndCaptions.right + widthOfOneSlide >
    a.right
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

    slidesObjArr.forEach(e => e.animationoftheslide.test6());

    slide.animationoftheslide.test5 = changeAnimation(
      slide.element,
      slide.xPosition
    );
  };

  slide.element.onmouseout = function() {
    slidesObjArr.forEach(e => {
      e.animationoftheslide.test5 = animationSlider(e.element, e.xPosition);
      e.playAnimtation();
    });
  };
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
    e.animationoftheslide.test5 = animationSlider(e.element, e.xPosition);
    e.playAnimtation();
  });
};
