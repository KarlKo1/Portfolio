//Selectors
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-links");
const tabLinks = document.getElementsByClassName("about-tab-links");
const tabContents = document.getElementsByClassName("about-tab-contents");

// Open experience tab
function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// Open navigation tab on mobile
navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

navLinks.forEach((link) => {
  const primaryNav = document.querySelector(".primary-navigation");
  const visibility = link.getAttribute("data-visible");
  link.addEventListener("click", () => {
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });
});

new fullpage("#fullpage", {
  //options here
  responsiveWidth: 1280,
  anchors: ["home", "about", "works", "contact"],
  navigation: true,
  navigationPosition: "right",
  scrollingSpeed: 600,
  fitToSection: false,
  scrollOverflow: true,
  sectionsColor: ["#edf6f9", "#edf6f9", "#00565e", "#edf6f9"],
  menu: "#primary-navigation",
  licenseKey: "TDL48-LA216-6I95I-FK6WI-KRKNO",
});

const showcaseImages = Array.from(document.querySelectorAll(".showcase-img"));

showcaseImages.forEach((image) => {
  const hoverImageURL = image.getAttribute("data-hover");
  const imgElement = image.querySelector("image");
  const originalImageURL = imgElement.getAttributeNS(
    "http://www.w3.org/1999/xlink",
    "href"
  );

  // Preload the hover image
  const hoverImage = new Image();
  hoverImage.src = hoverImageURL;

  image.addEventListener("mouseenter", () => {
    imgElement.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "href",
      hoverImageURL
    );
    image.classList.add("flip");
  });

  image.addEventListener("mouseleave", () => {
    imgElement.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "href",
      originalImageURL
    );
    image.classList.remove("flip");
  });
});
