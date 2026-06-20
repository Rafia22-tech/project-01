// AOS Animation
AOS.init({
  duration: 1000,
  once: true,
});

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

// Navbar Shadow
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message Sent Successfully!");
  form.reset();
});

// Typing Effect
const typingText = [
  "Computer Software Engineer",
  "Frontend Developer",
  "Web Designer",
  "JavaScript Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const typingElement = document.querySelector(".typing");

(function type() {

  if (!typingElement) return;

  if (count === typingText.length) {
    count = 0;
  }

  currentText = typingText[count];
  letter = currentText.slice(0, ++index);

  typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }

})();
