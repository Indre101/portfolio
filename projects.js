// PROJECTS PAGE
"use strict"
const HTML = {}

function getHTMLelements() {
  HTML.projectImagesAndCaptions = document.querySelector(".projectImages");
  HTML.imageModalContainer = document.querySelector(".imageModalContainer");
  HTML.imageModal = document.querySelector(".imageModal");
  HTML.studentCardTemplate = document.querySelector(".studentCardTemplate").content
}

window.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("projects.json")
    .then(res => res.json())
    .then(data => {
      getHTMLelements()
      data.forEach(getData);
    });
}


const getData = (data) => {
  (data.projects).forEach(createCardsInCarousel)
}

function createCardsInCarousel(e) {
  console.log(e.featuredImage);
  // let a = (document.querySelector(".studentCardTemplate").content).cloneNode(true)
  const cln = (HTML.studentCardTemplate).cloneNode(true);
  console.log(cln.querySelector(".imageIntheCarousel"));
  // HTML.textCaption = document.querySelector(".textCaption");
  cln.querySelector(".imageIntheCarousel").src = `./${e.featuredImage}`;
  // HTML.imageAndTextCaption = document.querySelectorAll(
  //   ".imageAndTextCaption"
  // );

  (HTML.projectImagesAndCaptions).appendChild(cln);
}


// const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
// const projectImagesAndCaptions = document.querySelector(".projectImages");

// let html = document.querySelector("html");
// html.style.setProperty("--colNum", imageAndTextCaption.length);

// const numberOfSlidesShown = 4;
// const oneSlideOfProject = document.querySelector(".imageAndTextCaption");
// const styleOfOneSlide = window.getComputedStyle(oneSlideOfProject);
// const widthOfOneSlide = parseInt(styleOfOneSlide.getPropertyValue("width"), 10);
// const restofTheSlides = imageAndTextCaption.length - numberOfSlidesShown;
// const widthOfTheLeftSlides = restofTheSlides * widthOfOneSlide;

// let firstSlideLeft = imageAndTextCaption[0].getBoundingClientRect();
// let lastslideRight = imageAndTextCaption[
//   imageAndTextCaption.length - 1
// ].getBoundingClientRect();

// function getXposition(slide) {
//   let styleOfTheSlide = window.getComputedStyle(slide);
//   let matrix = new WebKitCSSMatrix(styleOfTheSlide.webkitTransform);
//   return parseInt(matrix.m41, 10);
// }

// const animationSlider = slide => {
//   let b = slide.animate(
//     [
//       {
//         transform: `translateX(${getXposition(
//           slide
//         )}px) rotateY(50deg) skewY(11deg)`,
//         boxShadow: "4px 4px 1px #143140cf"

//         // opacity: "1"
//       },

//       {
//         transform: `translateX(-${lastslideRight.right -
//           widthOfOneSlide * restofTheSlides}px) rotateY(50deg) skewY(11deg)`,
//         boxShadow: "4px 4px 1px #143140cf"

//         // opacity: "1"
//       },

//       {
//         transform: `translateX(${firstSlideLeft.left}px) rotateY(50deg) skewY(11deg)`,
//         boxShadow: "4px 4px 1px #143140cf"
//       }
//     ],
//     {
//       duration: 16000, //milliseconds
//       easing: "linear", //'linear', a bezier curve, etc.
//       iterations: Infinity, //or a number
//       direction: "alternate", //'normal', 'reverse', etc.
//       fill: "forwards" //'backwards', 'both', 'none', 'auto'
//     }
//   );
//   return b;
// };

// const changeAnimation = slide => {
//   const currentPosition = getXposition(slide);

//   let c = slide.animate(
//     [
//       {
//         transform: `translateX(${getXposition(
//           slide
//         )}px) rotateY(50deg) skewY(11deg)`,
//         boxShadow: "4px 4px 1px #143140cf"
//       },
//       {
//         transform: `translate(${getXposition(
//           slide
//         )}px, -1%) rotateY(50deg) skewY(11deg) scale(1.01)`,
//         boxShadow: "2px 2px 15px blue"
//       }
//     ],
//     {
//       duration: 500, //milliseconds
//       delay: 5,
//       easing: "ease-in-out", //'linear', a bezier curve, etc.
//       iterations: "Infinity", //or a number
//       direction: "alternate", //'normal', 'reverse', etc.
//       fill: "forwards" //'backwards', 'both', 'none', 'auto'
//     }
//   );
//   return c;
// };

// function SLIDE(element) {
//   this.element = element;
//   this.xPosition = getXposition(this.element);
//   this.animationoftheslide = {
//     animationOfTheSlider: animationSlider(this.element),
//     pauseanimation: function() {
//       this.animationOfTheSlider.pause();
//     }
//   };
//   this.playAnimtation = function() {
//     this.animationoftheslide.animationOfTheSlider.play();
//   };
// }

// let slidesObjArr = [];

// imageAndTextCaption.forEach(slide => {
//   let newSlide = new SLIDE(slide);
//   slidesObjArr.push(newSlide);
// });

// window.onload = function() {
//   slidesObjArr.forEach(e => {
//     e.animationoftheslide;
//   });
// };

// slidesObjArr.forEach(slide => {
//   slide.element.onmouseover = function() {
//     slidesObjArr.forEach(s => s.animationoftheslide.pauseanimation());
//     slide.animationoftheslide.animationOfTheSlider = changeAnimation(
//       slide.element
//     );
//   };

//   slide.element.onclick = function() {
//     console.log("object");
//     showHideSlideModal(imageModalContainer, "d-none", "d-flex-centered");
//   };

//   slide.element.onmouseout = function() {
//     playSliderAnimation();
//   };
// });

// function showHideSlideModal(element, classToRemove, classToAdd) {
//   element.classList.toggle(classToAdd);
//   element.classList.toggle(classToRemove);
// }

// imageModalContainer.onmouseover = function() {
//   slidesObjArr.forEach(s => {
//     s.animationoftheslide.pauseanimation();
//   });
// };

// imageModalContainer.onclick = function() {
//   showHideSlideModal(imageModalContainer, "d-none", "d-flex-centered");
//   playSliderAnimation();
// };

// function playSliderAnimation() {
//   slidesObjArr.forEach(e => {
//     e.playAnimtation();
//     e.animationoftheslide.animationOfTheSlider = animationSlider(e.element);
//   });
// }

// const nextImage = document.querySelector(".next");
// const enlargedCarouselImage = document.querySelector(".enlargedCarouselImage");
// const imageTextInTheSlider = document.querySelector(".imageTextInTheSlider");

// nextImage.onclick = function() {};

// function showImageFromSlider() {
//   enlargedCarouselImage.src = element.src;
//   imageTextInTheSlider.textContent = element.text;
// }