// 1. Target the elements you want to watch
const targetElements = document.querySelectorAll(".observe");

// 2. Define what happens when the elements enter/leave the viewport
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add a CSS class to trigger your styles
      entry.target.classList.add("observed");

      let elements = entry.target.querySelectorAll(".split-text");
      elements.forEach((el) => {
        playSplitText(el);
      });

      let counters = entry.target.querySelectorAll(".counter");

      counters.forEach((counter) => {
        animateCounter(counter, 5000);
      });

      // Stop watching this element if you only want it to animate once
      observer.unobserve(entry.target);
    }
  });
};

function animateCounter(element, duration) {
  const target = parseInt(element.dataset.max);
  const startTime = performance.now();

  function updateNumber(currentTime) {
    // Calculate how much time has passed as a percentage (0 to 1)
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    // Calculate the current number based on progress
    const currentNumber = Math.floor(progress * target);
    element.textContent = currentNumber;

    // Continue the animation loop until progress reaches 100%
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }

  // Start the animation frame loop
  requestAnimationFrame(updateNumber);
}

// 3. Configure the observer settings
const observerOptions = {
  root: null, // Use the browser viewport
  rootMargin: "0px", // Trigger exactly at the screen edge
  threshold: 0.1, // Trigger when 10% of the element is visible
};

// 4. Create and start the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);
targetElements.forEach((el) => observer.observe(el));
