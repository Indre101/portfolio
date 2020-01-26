// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption")
const imageIntheCarousel = document.querySelector(".imageIntheCarousel")


changeImageAndTextInTheImageSlider(textCaption, imageIntheCarousel)

function changeImageAndTextInTheImageSlider(text, image) {

  text.classList.add("changeWidth");
  image.classList.add("changeWidth");
  text.addEventListener("webkitAnimationEnd", changeImageCaption)
  image.addEventListener("webkitAnimationEnd", changeTheImage)

}

function changeImageCaption(e) {

  e.target.style.animationIterationCount = 2;
  e.target.textContent = "Image name";
  e.target.classList.add("textCaptionSecond");
}

function changeTheImage(e) {

  e.target.style.animationIterationCount = 2;
  e.target.style.backgroundImage = "url('./images/photos/project-images/chad.png')"

}


const RandomColorBlueOrOrange = () => {

  // const color = 240

}