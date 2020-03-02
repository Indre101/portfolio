// PROJECTS PAGE
"use strict";
const HTML = {};

function getHTMLelements() {
  HTML.projectImagesAndCaptions = document.querySelector(".projectImages");
  HTML.imageModalContainer = document.querySelector(".imageModalContainer");
  HTML.imageModal = document.querySelector(".imageModal");
  HTML.studentCardTemplate = document.querySelector(
    ".studentCardTemplate"
  ).content;
}

window.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("projects.json")
    .then(res => res.json())
    .then(data => {
      getHTMLelements();
      data.forEach(getData);
    });
}

const getData = data => {
  data.projects.forEach(createCardsInCarousel);
};

function createCardsInCarousel(e) {
  console.log(e.featuredImage);
  // let a = (document.querySelector(".studentCardTemplate").content).cloneNode(true)
  const cln = HTML.studentCardTemplate.cloneNode(true);
  console.log(cln.querySelector(".imageIntheCarousel"));
  // HTML.textCaption = document.querySelector(".textCaption");
  cln.querySelector(".imageIntheCarousel").src = `./${e.featuredImage}`;
  // HTML.imageAndTextCaption = document.querySelectorAll(
  //   ".imageAndTextCaption"
  // );

  HTML.projectImagesAndCaptions.appendChild(cln);
}
