// PROJECTS PAGE

const textCaption = document.querySelector(".textCaption");
const imageIntheCarousel = document.querySelector(".imageIntheCarousel");
const imageAndTextCaption = document.querySelectorAll(".imageAndTextCaption");
const imageAndTextCaptionConvertedArray = Array.from(imageAndTextCaption);
const projectImagesAndCaptions = document.querySelector(".projectImages");

const evenChildren = document.querySelectorAll(
  ".imageAndTextCaption:nth-child(even)"
);
const oddChildren = document.querySelectorAll(
  ".imageAndTextCaption:nth-child(odd)"
);

window.onload = function() {
  addClasess();
};

function addClasess() {
  evenChildren.forEach(child => {
    setTimeout(() => {
      child.classList.remove("right-side-Animation");
      child.classList.add("left-Slide-animation");

      setTimeout(() => {
        child.classList.add("right-side-Animation");
        child.classList.remove("left-Slide-animation");
      }, 3000);
    }, 1000);
  });
}
