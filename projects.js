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

// function myMove(elem) {
//   var pos = 0;
//   var id = setInterval(frame, 4000);
//   function frame() {
//     if (pos === widthOfTheLeftSlides) {
//       clearInterval(id);
//     } else {
//       pos += widthOfOneSlide;
//       elem.style.transform = `translateX(-${pos}px) rotateY(50deg) skewY(11deg)`;
//     }
//   }
// }

// imageAndTextCaption.forEach(e => myMove(e));

// // myMove(projectImagesAndCaptions);

// Animation for the slider
imageAndTextCaption.forEach(slide => {
  slide.animate(
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
});
