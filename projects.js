// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption");
const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
const projectImagesAndCaptions = document.querySelector(".projectImages");

// let htmlStyles = window.getComputedStyle(document.querySelector("html"));
// let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));

// window.onload = function() {
//   document.documentElement.style.setProperty(
//     "--colNum",
//     imageAndTextCaption.length
//   );
// };

imageAndTextCaption.forEach(slide => {
  slide.addEventListener("mouseover", stopAnimation);
});

function stopAnimation() {
  imageAndTextCaption.forEach(slide => {});
}

imageAndTextCaption.forEach(slide => {
  slide.addEventListener("mouseout", continueAnimation);
});

function continueAnimation() {
  imageAndTextCaption.forEach(slide => {});
}

function getTheStylePropertiesOfTransforms(slide) {
  var computedStyle = window.getComputedStyle(slide);
  let translatedX = computedStyle.getPropertyValue("translateX");
  let skewedY = computedStyle.getPropertyValue("skewY");
  let rotated = computedStyle.getPropertyValue("rotateY");
  console.log(translatedX, skewedY, rotated);
}
