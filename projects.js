// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption")
const imageIntheCarousel = document.querySelector(".imageIntheCarousel")
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption")
const projectImagesAndCaption = document.querySelector(".projectImages")

addAnimationToTheActiveSlide(textCaption, imageIntheCarousel)

function addAnimationToTheActiveSlide(text, image) {
  text.classList.add("changeWidth");
  image.classList.add("changeWidth");
}