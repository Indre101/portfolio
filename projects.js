// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption");
const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
const projectImagesAndCaptions = document.querySelector(".projectImages");

let html = document.querySelector("html");
html.style.setProperty("--colNum", imageAndTextCaption.length);

const numberOfSlidesShown = 5.5;
const oneSlideOfProject = document.querySelector(".imageAndTextCaption");
const styleOfOneSlide = window.getComputedStyle(oneSlideOfProject);
const widthOfOneSlide = parseInt(styleOfOneSlide.getPropertyValue("width"), 10);
const restofTheSlides = imageAndTextCaption.length - numberOfSlidesShown;
const widthOfTheLeftSlides = restofTheSlides * widthOfOneSlide;

let rect = imageAndTextCaption[0].getBoundingClientRect();

let rectLast = imageAndTextCaption[
  imageAndTextCaption.length - 1
].getBoundingClientRect();

const animaionSlider = element => {
  let styleOfTheSlide = window.getComputedStyle(element);
  let matrix = new WebKitCSSMatrix(styleOfTheSlide.webkitTransform);
  console.log(widthOfTheLeftSlides);
  let b = element.animate(
    [
      {
        transform: `translateX(${matrix.m41}px) rotateY(50deg) skewY(11deg)`
      },

      {
        transform: `translateX(-${rectLast.right +
          widthOfOneSlide -
          widthOfOneSlide * numberOfSlidesShown}px) rotateY(50deg) skewY(11deg)`
      },

      {
        transform: `translateX(-${rect.left -
          widthOfOneSlide}px) rotateY(50deg) skewY(11deg)`
      }
    ],
    {
      duration: 40000, //milliseconds
      easing: "ease-in-out", //'linear', a bezier curve, etc.
      iterations: Infinity, //or a number
      direction: "alternate", //'normal', 'reverse', etc.
      fill: "forwards" //'backwards', 'both', 'none', 'auto'
    }
  );
  return b;
};

const changeAnimation = slide => {
  let styleOfTheSlide = window.getComputedStyle(slide.element);
  let matrix = new WebKitCSSMatrix(styleOfTheSlide.webkitTransform);
  let c = slide.element.animate(
    [
      {
        transform: `translateX(${matrix.m41}px) rotateY(50deg) skewY(11deg)`
      },

      {
        transform: `translateX(${matrix.m41}px) rotateY(0) skewY(0)`
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
}

let slidesObjArr = [];

imageAndTextCaption.forEach(slide => {
  console.log(slidesObjArr);
  let newSlide = new Slide(slide);
  slidesObjArr.push(newSlide);
});

window.onload = function() {
  slidesObjArr.forEach(e => {
    console.log("object");
    e.animationoftheslide;
  });
};

imageAndTextCaption.forEach(slide => {
  slide.onmouseover = function() {
    slidesObjArr.forEach(e => e.animationoftheslide.test6());

    slidesObjArr[
      imageAndTextCaptionConvertedArray.indexOf(slide)
    ].animationoftheslide.test5 = changeAnimation(
      slidesObjArr[imageAndTextCaptionConvertedArray.indexOf(slide)]
    );
  };

  slide.onmouseout = function() {
    slidesObjArr.forEach(e => {
      e.animationoftheslide.test5 = animaionSlider(e.element);

      e.playAnimtation();
    });
  };
});
