const menuButton = document.getElementById("menuButton");
const openMenuWindow = document.getElementById("openMenuWindow");
const menuIconDashes = document.querySelectorAll(".dash");
const projectCardFront = document.querySelector(".projectsCardFront");
const typeOfProject = document.querySelector(".typeOfProject")


projectCardFront.onmouseover = function () {
  typeOfProject.classList.add("rotateTypeOfproject")
  console.log("object");
}


projectCardFront.onmouseout = function () {
  typeOfProject.classList.remove("rotateTypeOfproject")
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







// Fetching the projects data
// fetch("projects.json").then(res =>
//   res.json()).then(data => {
//   console.log(data[0])
// })