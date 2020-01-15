const menuButton = document.getElementById("menuButton");
const openMenuWindow = document.getElementById("openMenuWindow");
const menuIconDashes = document.querySelectorAll(".dash");

let i = 0;

menuButton.onclick = function () {
  i++
  menuIconDashes.forEach(dash => {
    setTimeout(() => {
      toggleClassClicked(dash);
    }, 150);
  });


  animateMenuToslideIn(openMenuWindow);
  removeUNClickedClass(menuButton);
  addClickedClass(menuButton);


  if (i == 2) {
    addUNClickedClass(menuButton)
    removeClickedClass(menuButton)
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


function addClickedClass(elementToAddTheClass) {
  elementToAddTheClass.classList.add("clicked");
}


function removeClickedClass(elementToAddTheClass) {
  elementToAddTheClass.classList.remove("clicked");
}


function addUNClickedClass(elementToAddTheClass) {
  elementToAddTheClass.classList.add("unclicked");
}


function removeUNClickedClass(elementToAddTheClass) {
  elementToAddTheClass.classList.remove("unclicked");
}


function toggleClassClicked(elementToAddTheClass) {
  elementToAddTheClass.classList.toggle("clicked");
}


// Fetching the projects data
fetch("projects.json").then(res =>
  res.json()).then(data => {
  console.log(data[0])
})