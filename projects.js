// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption");
const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
const projectImagesAndCaptions = document.querySelector(".projectImages");

let html = document.querySelector("html");
html.style.setProperty("--colNum", imageAndTextCaption.length);

const numberOfSlidesShown = 5;
const oneimageAndTextCaption = document.querySelector(".imageAndTextCaption");
const style = window.getComputedStyle(oneimageAndTextCaption);
const widthOfOneSlide = parseInt(style.getPropertyValue("width"), 10);

projectImagesAndCaptions.style.width = `${5 * widthOfOneSlide}px`;
const styleOfprojectImagesAndCaptions = window.getComputedStyle(
  projectImagesAndCaptions
);
const widthOfTheSlider = parseInt(
  styleOfprojectImagesAndCaptions.getPropertyValue("width"),
  10
);

const restofTheSlides = imageAndTextCaption.length - numberOfSlidesShown + 1;
const allSlides = (imageAndTextCaption.length + 1) * restofTheSlides;
const sideLeft = restofTheSlides * widthOfOneSlide - widthOfTheSlider;

console.log(sideLeft);

function myMove(elem) {
  var pos = 0;
  var id = setInterval(frame, 4000);
  function frame() {
    if (pos === sideLeft) {
      clearInterval(id);
    } else {
      pos += widthOfOneSlide;
      elem.style.transform = `translateX(-${pos}px) rotateY(50deg) skewY(11deg)`;
    }
  }
}

imageAndTextCaption.forEach(e => myMove(e));

// // myMove(projectImagesAndCaptions);

// imageAndTextCaption.forEach(e => {
//   e.animate(
//     [
//       { transform: `translateX(0px)`, offset: 0 },
//       { transform: `translateX(${sideLeft}px)`, offset: 0 },

//       { transform: `translateX(${sideLeft * -1}px)`, offset: 1 }
//     ],
//     {
//       duration: 20000, //milliseconds
//       easing: "ease-in-out", //'linear', a bezier curve, etc.
//       delay: 10, //milliseconds
//       iterations: Infinity, //or a number
//       direction: "alternate", //'normal', 'reverse', etc.
//       fill: "forwards" //'backwards', 'both', 'none', 'auto'
//     }
//   );
// });
