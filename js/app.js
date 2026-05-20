let nav = document.querySelector("nav");
let burger = document.querySelector(".burger");
let menuLinks = document.querySelectorAll(".menu-link");
let headerSlides = document.querySelectorAll(".header-slide");
let currentSlide = 0;

nav.addEventListener("click", (e) => {
  if (
    (e.target.tagName === "SPAN" && e.target.closest(".burger")) ||
    e.target.classList.contains("burger")
  ) {
    burger.classList.toggle("active");
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      addTransitionDelay(menuLinks);
    } else {
      addTransitionDelay([...menuLinks].reverse());
    }
  }
});

// ADDS A TRANSITION DELAY TO A GIVEN LIST OF HTML NODES
function addTransitionDelay(arr, delay = 0) {
  arr.forEach((item) => {
    delay += 0.05;
    item.style.transitionDelay = `${delay}s`;
  });
}

// ADDS A TRANSITION DELAY OF 0 TO A GIVEN LIST OF HTML NODES
function removeTransitionDelay(arr) {
  arr.forEach((item) => {
    item.style.transitionDelay = "0s";
  });
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

setInterval(changeSlide, 3000);
