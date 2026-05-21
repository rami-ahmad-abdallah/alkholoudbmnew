document.addEventListener("DOMContentLoaded", (e) => {
  const textElements = document.querySelectorAll(".split-text");

  textElements.forEach((element) => {});
});

function playSplitText(element) {
  const split = new SplitText(element, { type: "words" });
  gsap.from(split.words, {
    opacity: 0,
    y: -50,
    duration: 0.8,
    rotation: "random(-40, 40)",
    stagger: 0.05,
    ease: "power2.out",
    // scrollTrigger: {
    //   trigger: element, // What triggers the animation
    //   start: "top 80%", // Triggers when top of element hits 80% of viewport height
    //   toggleActions: "play none none none", // Plays once when entering (Play, Leave, Enter Back, Leave Back)
    //   onComplete: () => split.revert(), // Reverts SplitText to clean HTML after animation completes
    // },
  });
}
