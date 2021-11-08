// getting the current year in the footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// making the mbile nav work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("href")) {
      e.preventDefault();
      const href = e.target.getAttribute("href");

      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      if (href.startsWith("#") && href.length > 1) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    }
  });
});
