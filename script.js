window.addEventListener("DOMContentLoaded", init());

function getHTMLelements() {
  const HTML = {};
  HTML.menuButton = document.getElementById("menuButton");
  HTML.openMenuWindow = document.getElementById("openMenuWindow");
  HTML.menuIconDashes = document.querySelectorAll(".dash");
  HTML.projectTemplate = document.querySelector(".projectTemplate").content;
  HTML.filterOption = document.querySelectorAll(".filterOption");
  HTML.projects = document.querySelector(".projects");
  return HTML;
}

function init() {
  let i = 0;
  const HTML = getHTMLelements();
  getData(HTML);
  toggleMenu(HTML, i);
  changeLabelsIcons(HTML);
}

function toggleMenu(HTML, i) {
  HTML.menuButton.onclick = function() {
    i++;
    HTML.menuIconDashes.forEach(dash => {
      setTimeout(() => {
        toggleClassClicked(dash);
        dash.classList.remove("unclicked");
      }, 150);
    });

    animateMenuToslideIn(openMenuWindow);
    if (i == 2) {
      HTML.menuIconDashes.forEach(dash => {
        setTimeout(() => {
          dash.classList.add("unclicked");
        }, 150);
      });
      animateMenuToslideOut(openMenuWindow);
      i = 0;
    }
  };
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

function changeLabelsIcons(HTML) {
  HTML.filterOption.forEach(label =>
    label.addEventListener("click", event => changeIcon(event, HTML))
  );
}

function changeIcon(event, HTML) {
  HTML.filterOption.forEach(label => (label.dataset.clicked = false));
  event.target.dataset.clicked = "true";
}

function getData(HTML) {
  fetch("projects.json")
    .then(res => res.json())
    .then(data => {
      data[0].projects.forEach(e => showPorjectCard(e, HTML));
    });
}

function showPorjectCard(project, HTML) {
  const projectsCardCln = HTML.projectTemplate.cloneNode(true);
  const projectsCard = projectsCardCln.querySelector(".projectsCard");
  const projectsName = projectsCardCln.querySelector(".projectsName");
  const projectFrontImage = projectsCardCln.querySelector(".projectFrontImage");

  projectsCard.onmouseover = function() {
    projectsName.classList.add("rotateElementToBeVisible");
    projectsName.classList.remove("rotateElementToBeNotVisible");

    projectFrontImage.classList.remove("opacityToOne");
    projectFrontImage.classList.add("projectFrontImageOpacity");
  };

  projectsCard.onmouseout = function() {
    projectsName.classList.remove("rotateElementToBeVisible");
    projectFrontImage.classList.remove("projectFrontImageOpacity");
    projectsName.classList.add("rotateElementToBeNotVisible");
    projectFrontImage.classList.add("opacityToOne");
  };

  HTML.projects.appendChild(projectsCardCln);
}
