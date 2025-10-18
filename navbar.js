const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Clase dark por defecto
navbar.classList.add('dark');

// Scroll
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    navbar.classList.add('light');
    navbar.classList.remove('dark');
  } else {
    navbar.classList.add('dark');
    navbar.classList.remove('light');
  }
});

// Toggle menú móvil
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  // cambia cuando el scroll pase cierta altura
  if (window.scrollY > 100) { // ajusta 100px a tu gusto
    navbar.classList.add("light");
    navbar.classList.remove("dark");
  } else {
    navbar.classList.add("dark");
    navbar.classList.remove("light");
  }
});

