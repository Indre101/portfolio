// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption")
const imageIntheCarousel = document.querySelector(".imageIntheCarousel")
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption")
const projectImagesAndCaptions = document.querySelector(".projectImages")


let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"))

addAnimationToTheActiveSlide(textCaption, imageIntheCarousel)

function addAnimationToTheActiveSlide(text, image) {
  text.classList.add("changeWidth");
  image.classList.add("changeWidth");
}



window.onload = function () {
  document.documentElement.style.setProperty("--colNum", imageAndTextCaption.length);

}

console.log(imageAndTextCaption.length);