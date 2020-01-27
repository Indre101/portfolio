// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption");
const projectImagesAndCaptions = document.querySelector(".projectImages");

let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));

window.onload = function() {
  document.documentElement.style.setProperty(
    "--colNum",
    imageAndTextCaption.length
  );
};

const previousArrow = document.querySelector(".previousArrow");
const nextArrow = document.querySelector(".nextArrow");

nextArrow.onclick = function() {
  clickCount++;

  let activeSlide = activeProjectSlide();
};

let clickCount = 0;

const activeProjectSlide = () => {
  let activeSlide;
  imageAndTextCaption.forEach(element => {
    if (element.classList.contains("active")) {
      activeElement = element;
    }
  });
  return activeElement;
};
