/* toggle icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* dark and light mode */
let lightModeIcon = document.querySelector("#lightMode-icon");

lightModeIcon.onclick = () => {
  document.body.classList.toggle("light-mode");
  lightModeIcon.classList.toggle("bx-sun");
};

/* scroll action active line */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* sticky navbar */
  /* is sa scroll karna per navbar ma border aata ha| scroll karna per difference pata chaltaha */
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /* remove toggle icon and navbar when click nevbar link (scroll) */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* typed js ka use kya ha */
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "UI/UX Designer", "Coder"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/* scroll reveal website use ki ha */
ScrollReveal({
  // resat: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
