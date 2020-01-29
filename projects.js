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
  this.animationoftheslide = this.element.animate(
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
  );

  this.stopAnimtation = function() {
    console.log(this.animationoftheslide);
    this.animationoftheslide.pause();
  };
}

const stopbutton = document.querySelector("button");
let slidesObjArr = [];
imageAndTextCaption.forEach(slide => {
  let newSlide = new Car(slide);
  newSlide.animationoftheslide;
  slidesObjArr.push(newSlide);
});

stopbutton.onclick = function() {
  arr.forEach(e => e.stopAnimtation());
};
