const menuButton = document.getElementById("menuButton");
const openMenuWindow = document.getElementById("openMenuWindow");
const menuIconDashes = document.querySelectorAll(".dash");



}


let i = 0;

menuButton.onclick = function () {
  i++
  menuIconDashes.forEach(dash => {
    setTimeout(() => {
      toggleClassClicked(dash);
      dash.classList.remove("unclicked")
    }, 150);
  });

  animateMenuToslideIn(openMenuWindow);

  if (i == 2) {

    menuIconDashes.forEach(dash => {
      setTimeout(() => {
        dash.classList.add("unclicked")
      }, 150);
    });



    animateMenuToslideOut(openMenuWindow)
    i = 0;
  }
}

function animateMenuToslideIn(elementToAnimate) {
  elementToAnimate.classList.add("d-flex");
  elementToAnimate.classList.add("slideUpAnimation");
  elementToAnimate.classList.remove("d-none");
  elementToAnimate.classList.remove("slideDownAnimation");
}


function animateMenuToslideOut(elementToAnimate) {
  elementToAnimate.classList.remove("slideUpAnimation");
  elementToAnimate.classList.add("slideDownAnimation");
  setTimeout(() => {
    elementToAnimate.classList.add("d-none");
    elementToAnimate.classList.remove("d-flex");
  }, 500);
}



function toggleClassClicked(elementToAddTheClass) {
  elementToAddTheClass.classList.toggle("clicked");
}



Fetching the projects data
fetch("projects.json").then(res =>
  res.json()).then(data => {
  data[0].projects.forEach(e => console.log(e.projectName))
})


const projectTemplate = document.querySelector(".projectTemplate").content;

function showPorjectCard() {

  const cln =
    const projectsCard = document.querySelector(".projectsCard");
  const projectsName = document.querySelector(".projectsName")
  const projectFrontImage = document.querySelector(".projectFrontImage");

  projectsCard.onmouseover = function () {
    projectsName.classList.add("rotateElementToBeVisible")
    projectsName.classList.remove("rotateElementToBeNotVisible")

    projectFrontImage.classList.remove("opacityToOne")
    projectFrontImage.classList.add("projectFrontImageOpacity")
  }


  projectsCard.onmouseout = function () {
    projectsName.classList.remove("rotateElementToBeVisible")
    projectFrontImage.classList.remove("projectFrontImageOpacity")
    projectsName.classList.add("rotateElementToBeNotVisible")
    projectFrontImage.classList.add("opacityToOne")


  }