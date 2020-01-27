// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption");
const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
const projectImagesAndCaptions = document.querySelector(".projectImages");

let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));

window.onload = function() {
  document.documentElement.style.setProperty(
    "--colNum",
    imageAndTextCaption.length
  );
};

// const previousArrow = document.querySelector(".previousArrow");
// const nextArrow = document.querySelector(".nextArrow");

// const activeProjectSlide = () => {
//   let activeSlide;
//   imageAndTextCaption.forEach(element => {
//     if (element.classList.contains("active")) {
//       activeElement = element;
//     }
//   });
//   return activeElement;
// };

// let activeSlide = activeProjectSlide();
// let clickCount = imageAndTextCaptionConvertedArray.indexOf(activeSlide);

// nextArrow.onclick = function() {
//   clickCount++;
//   console.log(clickCount);
//   imageAndTextCaption[clickCount].classList.add("active");
//   if (!findPreviousSibling(clickCount) || !findNextSibling(clickCount)) {
//     return false;
//   } else if (findPreviousSibling(clickCount)) {
//     console.log("true");
//   } else if (findNextSibling(clickCount)) {
//     console.log("true");
//   }

//   // let previousSibling = findPreviousSibling(clickCount);
//   // let nextSibling = findNextSibling(clickCount);
// };

// function findPreviousSibling(activeSlideIndex) {
//   let previousSiblings =
//     imageAndTextCaptionConvertedArray[activeSlideIndex].previousElementSibling;
//   previousSiblings.classList.add("right-Slide");
//   return previousSiblings;
// }

// function findNextSibling(activeSlideIndex) {
//   let previousSiblings =
//     imageAndTextCaptionConvertedArray[activeSlideIndex].nextElementSibling;
//   previousSiblings.classList.add("left-Slide");
//   return previousSiblings;
// }
