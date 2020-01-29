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
      console.log(this.test5);
    }
  };

  this.stopAnimtation = function() {
    this.animationoftheslide.test5.pause();
  };

  this.playAnimtation = function() {
    this.animationoftheslide.test5.play();
  };
}

let slidesObjArr = [];

imageAndTextCaption.forEach(slide => {
  let newSlide = new Slide(slide);
  newSlide.animationoftheslide.test6();
  slidesObjArr.push(newSlide);

  slide.onmouseover = function() {
    console.log(slide);

    slidesObjArr.forEach(e => e.stopAnimtation());
  };

  slide.onmouseout = function() {
    slidesObjArr.forEach(e => e.playAnimtation());
  };
});
