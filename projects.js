// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption");
const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
const projectImagesAndCaptions = document.querySelector(".projectImages");

let html = document.querySelector("html");
html.style.setProperty("--colNum", imageAndTextCaption.length);

const numberOfSlidesShown = 5;
const oneSlideOfProject = document.querySelector(".imageAndTextCaption");
const styleOfOneSlide = window.getComputedStyle(oneSlideOfProject);
const widthOfOneSlide = parseInt(styleOfOneSlide.getPropertyValue("width"), 10);
const restofTheSlides = imageAndTextCaption.length - numberOfSlidesShown + 1;
const widthOfTheLeftSlides = restofTheSlides * widthOfOneSlide;

function Slide(element) {
  this.element = element;
  this.animationoftheslide = {
    test5: this.element.animate(
      [
        {
          transform: `translateX(0px) rotateY(50deg) skewY(11deg)`
        },

        {
          transform: `translateX(-${widthOfTheLeftSlides +
            20}px) rotateY(50deg) skewY(11deg)`
        }
      ],
      {
        duration: 5000, //milliseconds
        delay: 10,
        easing: "ease-in-out", //'linear', a bezier curve, etc.
        iterations: Infinity, //or a number
        direction: "alternate", //'normal', 'reverse', etc.
        fill: "forwards" //'backwards', 'both', 'none', 'auto'
      }
    ),
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
  let newSlide = new Slide(slide);
  slidesObjArr.push(newSlide);

  window.onload = function() {
    newSlide.animationoftheslide.test6();
  };

  slide.onmouseover = function() {
    slidesObjArr.forEach(e => e.animationoftheslide.test6());

    let styleOfTheSlide = window.getComputedStyle(slide);
    let matrix = new WebKitCSSMatrix(styleOfTheSlide.webkitTransform);

    slidesObjArr[
      imageAndTextCaptionConvertedArray.indexOf(slide)
    ].animationoftheslide.test5 = slidesObjArr[
      imageAndTextCaptionConvertedArray.indexOf(slide)
    ].element.animate(
      [
        {
          transform: `translateX(${matrix.m41}px) rotateY(50deg) skewY(11deg)`
        },

        {
          transform: `translateX(${matrix.m41}px) rotateY(0) skewY(0)`
        }
      ],
      {
        duration: 5000, //milliseconds
        delay: 5,
        easing: "ease-in-out", //'linear', a bezier curve, etc.
        iterations: 1, //or a number
        direction: "normal", //'normal', 'reverse', etc.
        fill: "forwards" //'backwards', 'both', 'none', 'auto'
      }
    );
  };

  slide.onmouseout = function() {
    slidesObjArr.forEach(e => {
      e.playAnimtation();
    });
  };
});
