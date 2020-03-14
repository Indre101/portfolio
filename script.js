window.addEventListener("DOMContentLoaded", init());

function getHTMLelements() {
  const HTML = {};
  HTML.menuButton = document.getElementById("menuButton");
  HTML.openMenuWindow = document.getElementById("openMenuWindow");
  HTML.menuIconDashes = document.querySelectorAll(".dash");
  HTML.projectTemplate = document.querySelector(".projectTemplate").content;
  HTML.filterOption = document.querySelectorAll(".filterOption");
  HTML.projects = document.querySelector(".projects");
  HTML.moreAboutMe = document.querySelector(".liButton");
  HTML.aboutMeModal = document.querySelector(".aboutMeModal");
  return HTML;
}

function init() {
  let i = 0;
  const HTML = getHTMLelements();
  getData(HTML);
  toggleMenu(HTML, i);
  changeLabelsIcons(HTML);
  showHideModal(HTML)
}

function showHideModal(HTML) {
  HTML.moreAboutMe.onclick = function () {
    setElementDatasetShow(HTML.aboutMeModal)
  }

  HTML.aboutMeModal.onclick = function () {
    setElementDatasetShow(HTML.aboutMeModal)
  }
}


function setElementDatasetShow(element) {

  if (element.dataset.show === "show") {

    element.dataset.show = ""

  } else if (element.dataset.show != "show") {
    element.dataset.show = "show"

  }
}

function toggleMenu(HTML, i) {
  HTML.menuButton.onclick = function () {
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
  // const projectsCard = projectsCardCln.querySelector(".projectsCard");
  // const projectsName = projectsCardCln.querySelector(".projectsName");
  // const projectFrontImage = projectsCardCln.querySelector(".projectFrontImage");

  HTML.projects.appendChild(projectsCardCln);
}

const aboutme = document.querySelector(".textAboutme");

const options = {
  rootMargin: "25% 0% 0% 0%",
  threshold: 1
}

const observerPageSections = new IntersectionObserver(function (entries, observerPageSections) {

  entries.forEach(entry => {

    if (!entry.isIntersecting) {
      return;
    } else {

      entry.target.dataset.appear = "true"
    }
  })
}, options)

const pageSections = document.querySelectorAll(".factsAboutMe li");

pageSections.forEach(sectionP => observerPageSections.observe(sectionP, options))