let nav = document.querySelector("nav");
let burger = document.querySelector(".burger");
let menuWrapper = document.querySelector(".menu-wrapper");
let menu = document.querySelector(".menu");
let headerSlides = document.querySelectorAll(".header-slide");
let currentSlide = 0;

let serviceCards = document.querySelectorAll(".service-card");
let cardHeight = serviceCards[0].offsetHeight;
let allCardsHeight = cardHeight * serviceCards.length;

nav.addEventListener("click", (e) => {
  if (
    (e.target.tagName === "SPAN" && e.target.closest(".burger")) ||
    e.target.classList.contains("burger")
  ) {
    animateMenu();
  }
});

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && e.target.classList.contains("menu-link")) {
    if (e.target.getAttribute("href").includes("#")) {
      e.preventDefault();
      let sectionId = e.target.getAttribute("href");
      if (sectionId.includes("about") || sectionId.includes("ABOUT")) {
        scrollToAGivenPoint(sectionId, 3000);
      } else if (
        sectionId.includes("service") ||
        sectionId.includes("SERVICES")
      ) {
        scrollToAGivenPoint(sectionId, allCardsHeight);
      } else {
        document.querySelector(sectionId).scrollIntoView();
      }

      animateMenu();
    }
  }
});

function scrollToAGivenPoint(element, points = 0) {
  const targetSection = document.querySelector(element);
  const rect = targetSection.getBoundingClientRect();
  if (rect.top > 0) {
    document.querySelector(element).scrollIntoView();
    return;
  }
  const targetPosition = window.scrollY + rect.top - points;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth", // Use 'auto' for instant jump
  });
}

function animateMenu() {
  burger.classList.toggle("active");
  menuWrapper.classList.toggle("active");
  menu.classList.toggle("active");
}

function changeSlide() {
  if (currentSlide === headerSlides.length - 1) {
    currentSlide = 0;
    headerSlides[headerSlides.length - 1].classList.remove("active");
  } else {
    currentSlide++;
    headerSlides[currentSlide - 1].classList.remove("active");
  }

  headerSlides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);

// function fitTextPerfectly() {
//   const svgs = document.querySelectorAll("svg.auto-fit-text");

//   svgs.forEach((svg) => {
//     const textElement = svg.querySelector("text");

//     // 1. Grab the exact boundary box of the raw text characters
//     const box = textElement.getBBox();

//     // 2. Set the viewBox to perfectly frame the text string dimensions
//     svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
//   });
// }

// // Execute on initial page load
// window.addEventListener("DOMContentLoaded", fitTextPerfectly);
