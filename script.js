document.documentElement.classList.add('js-ready');

//Greeting
const greetings = ["Hi", "Halo", "Hola", "Bonjour", "Ciao", "Olá"];

const greeting = document.getElementById("greeting");
let index = 0;

setInterval(() => {
  greeting.classList.add("changing");

  setTimeout(() => {
    index = (index + 1) % greetings.length;
    greeting.textContent = greetings[index];

    greeting.classList.remove("changing");
  }, 300);
}, 2000);

//Disable right click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

//Menu mobile
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");

  burger.setAttribute("aria-expanded", isOpen);
  burger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Open navigation");
  });
});

//Copyright Year
document.getElementById("tahun").innerText = new Date().getFullYear();
