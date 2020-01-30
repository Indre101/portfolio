// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(
  ".projectImages > .imageAndTextCaption"
);
const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
const projectImagesAndCaptions = document.querySelector(".projectImages");
const styleOfprojectImagesAndCaptions = window.getComputedStyle(
  projectImagesAndCaptions
);
const widthProjectImagesAndCaptions = parseInt(
  styleOfprojectImagesAndCaptions.getPropertyValue("width"),
  10
);
console.log(widthProjectImagesAndCaptions);

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
console.log(sliderContainerCoordinates.left);
console.log(sliderContainerCoordinates.right);

const animaionSlider = element => {
  let styleOfTheSlide = window.getComputedStyle(element);
  let matrix = new WebKitCSSMatrix(styleOfTheSlide.webkitTransform);

  // if (
  //   matrix.m41 <= sliderContainerCoordinates.left ||
  //   matrix.m41 >= sliderContainerCoordinates.right
  // ) {
  //   console.log("object");
  // }

  let b = element.animate(
    [
      {
        transform: `translateX(${matrix.m41}px) rotateY(50deg) skewY(11deg)`,
        width: `${widthOfOneSlide}px`,
        height: "30vh",
        zIndex: "0"

        // opacity: "1"
      },

      {
        transform: `translateX(${lastslideRight.right +
          widthOfOneSlide -
          widthOfOneSlide * restofTheSlides}px) rotateY(50deg) skewY(11deg)`,
        width: `${widthOfOneSlide}px`,
        height: "30vh",
        zIndex: "0"

        // opacity: "1"
      },

      {
        transform: `translateX(${firstSlideLeft.left -
          widthOfOneSlide}px) rotateY(50deg) skewY(11deg)`,
        width: `${widthOfOneSlide}px`,
        height: "30vh",
        zIndex: "0"
        // opacity: "1"
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
  console.log(b);
  return b;
};

const changeAnimation = slide => {
  let styleOfTheSlide = window.getComputedStyle(slide);
  let matrix = new WebKitCSSMatrix(styleOfTheSlide.webkitTransform);
  let c = slide.animate(
    [
      {
        transform: `translateX(${matrix.m41}px) rotateY(50deg) skewY(11deg)`,
        width: `${widthOfOneSlide}px`,
        height: "30vh",
        zIndex: "0"
      },
      {
        transform: `translateX(${matrix.m41}px) rotateY(0deg) skewY(0deg)`,
        width: `${widthOfOneSlide * 2}px`,
        height: "45vh",
        zIndex: "1"
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

  // this.checkPosition = function () {

  //   if (this.element) {

  //   }

  // }
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
    slidesObjArr.forEach(e => e.animationoftheslide.test6());

    slide.animationoftheslide.test5 = changeAnimation(slide.element);
  };

  slide.element.onmouseout = function() {
    slidesObjArr.forEach(e => {
      e.animationoftheslide.test5 = animaionSlider(e.element);
      e.playAnimtation();
    });
  };
});
