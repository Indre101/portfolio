// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption");
const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
const projectImagesAndCaptions = document.querySelector(".projectImages");

let numb = 1;

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

let myReq;

function repeatOften() {
  numb++;
  imageAndTextCaption.forEach(e => {
    console.log(numb);
    setTimeout(() => {
      e.style.transform = `translateX(-${numb}%)`;
    }, 1000);
  });
  // console.log("object");
  myReq = requestAnimationFrame(repeatOften);
}
// requestAnimationFrame(repeatOften);
myReq = requestAnimationFrame(repeatOften);

document.querySelector("button").addEventListener("click", cancelAnimatio);

function cancelAnimatio() {
  console.log("kæløæø");
  cancelAnimationFrame(myReq);
}
