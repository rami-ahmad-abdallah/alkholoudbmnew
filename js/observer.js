// 1. Target the elements you want to watch
const targetElements = document.querySelectorAll(".observe");

// 2. Define what happens when the elements enter/leave the viewport
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add a CSS class to trigger your styles
      entry.target.classList.add("observed");
      if (entry.target.classList.contains("split-text")) {
        entry.target.classList.add("split-text-when-observed");
      }

      // Stop watching this element if you only want it to animate once
      observer.unobserve(entry.target);
    }
  });
};

// 3. Configure the observer settings
const observerOptions = {
  root: null, // Use the browser viewport
  rootMargin: "0px", // Trigger exactly at the screen edge
  threshold: 0.1, // Trigger when 10% of the element is visible
};

// 4. Create and start the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);
targetElements.forEach((el) => observer.observe(el));
