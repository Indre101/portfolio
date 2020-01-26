// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption")
const imageIntheCarousel = document.querySelector(".imageIntheCarousel")

addAnimationToTheActiveSlide(textCaption, imageIntheCarousel)

function addAnimationToTheActiveSlide(text, image) {
  text.classList.add("changeWidth");
  image.classList.add("changeWidth");
}



// const RandomColorBlueOrOrange = (colorPlaceInColorWheel) => {

//   const color = `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*155)}, ${colorPlaceInColorWheel})`;
//   return color

// }

// changeImageAndTextInTheImageSlider(textCaption, imageIntheCarousel)

// function changeImageAndTextInTheImageSlider(text, image) {

//   text.classList.add("changeWidth");
//   image.classList.add("changeWidth");
//   // text.style.backgroundColor = RandomColorBlueOrOrange(210);
//   text.addEventListener("webkitAnimationEnd", changeImageCaption)
//   image.addEventListener("webkitAnimationEnd", changeTheImage)

// }

// function changeImageCaption(e) {

//   // e.target.style.animationIterationCount = 2;
//   e.target.textContent = "Image name";
//   e.target.classList.add("textCaptionSecond");
// }

// function changeTheImage(e) {

//   // e.target.style.animationIterationCount = 2;
//   e.target.style.backgroundImage = "url('./images/photos/project-images/chad.png')"

// }