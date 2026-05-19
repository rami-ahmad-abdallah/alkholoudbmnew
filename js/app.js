let nav = document.querySelector("nav");
let burger = document.querySelector(".burger");
let menuLinks = document.querySelectorAll(".menu-link");

console.log(menuLinks);

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

function addTransitionDelay(arr, delay = 0) {
  arr.forEach((item) => {
    delay += 0.05;
    item.style.transitionDelay = `${delay}s`;
  });
}
