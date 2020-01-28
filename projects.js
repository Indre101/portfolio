// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption");
const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
const projectImagesAndCaptions = document.querySelector(".projectImages");

projectImagesAndCaptions.style.setProperty(" --colNum", "#YOURCOLOR");
const numberOfSlidesShown = 5;
const oneimageAndTextCaption = document.querySelector(".imageAndTextCaption");
const style = window.getComputedStyle(oneimageAndTextCaption);
const widthOfSlide = style.getPropertyValue("width");
const restofTheSlides = imageAndTextCaption.length - numberOfSlidesShown;
console.log(restofTheSlides);

// setInterval(() => {
//   numb++;
//   projectImagesAndCaptions.style.transform = `translateX(-${numb}vw)`;
// }, 500);

// function animate({ duration, timing, draw }) {
//   let start = performance.now();

//   console.log(start);
//   requestAnimationFrame(animate());
//   // timeFraction goes from 0 to 1
//   let timeFraction = (time - start) / duration;
//   if (timeFraction > 10000) timeFraction = 1000;

//   // calculate the current animation state
//   let progress = timing(timeFraction);

//   draw(progress); // draw it

//   if (timeFraction < 1) {
//     requestAnimationFrame(animate);
//   }
// }

// imageAndTextCaption.forEach(e => {
//   animate({
//     duration: 1000,
//     timing(timeFraction) {
//       return timeFraction;
//     },
//     draw(progress) {
//       e.style.transform = `translateX(-${progress}%) rotateY(50deg) skewY(11deg) translateZ(-4vw)`;
//     }
//   });
// });

// let myReq;

// let numb = 1;

// function animate({ timing, transformSlide, duration }) {
//   let start = performance.now();
//   numb++;
//   requestAnimationFrame(function animate(time) {
//     let timeFraction = (time - start) / duration;
//     if (timeFraction > 1) timeFraction = 1;
//     let progress = timing(timeFraction);
//     transformSlide(); // draw it
//     if (timeFraction < 1) requestAnimationFrame(animate);
//   });
// }

// animate({
//   timing: function(t) {
//     return t;
//   },
//   transformSlide() {
//     projectImagesAndCaptions.style.transform = `translateX(-${numb}vw)`;
//   },
//   duration: 1500
// });

// function animate({ timing, draw, duration }) {
//   const start = performance.now();
//   console.log("object");
//   requestAnimationFrame(function animate(time) {
//     let timeFraction = (time - start) / duration;
//     if (timeFraction > 1) timeFraction = 1;
//     let progress = timing(timeFraction);
//     draw(progress); // draw it
//     if (timeFraction < 1) requestAnimationFrame(animate);
//   });
// }
