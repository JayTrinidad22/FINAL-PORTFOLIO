document.addEventListener("DOMContentLoaded", function () {
document.querySelector('.multiple-text').style.color = '#0ef';

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
};
function sendEmail() {
  const templateParams = {
    name:document.querySelector("#name").value,
    email:document.querySelector("#email").value,
    subject:document.querySelector("#subject").value,
    message:document.querySelector("#message").value,
    number:document.querySelector("#number").value,  
  };

  emailjs.send("service_e2kp116", "template_dz7m1bu", templateParams).then(
    () => alert("Message sent successfully!"),
    () => alert("Email failed to send.")
  );
  }

  document.querySelector("form").addEventListener("submit", sendEmail);

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      // Add a check here to ensure the element exists
      let targetLink = document.querySelector('header nav a[href*=' + id + ']');
      if (targetLink) { // Only add 'active' if targetLink is not null
        targetLink.classList.add('active');
      }
    }
  });

  /*=============== Sticky Navbar ==================*/
  let header = document.querySelector('header');
  if (header) {
    header.classList.toggle('sticky', window.scrollY > 100);
  }

  /*=============== Remove toggle icon and navbar when click navbar link (scroll) ==================*/
  if (menuIcon && navbar) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
};

/*=============== Scroll Reveal ==================*/
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 300
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .certificates-content, .contact form, .skill-box, .header-h1, .blog-container, .skills-section', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img, .skill-title', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content, .skill-title', { origin: "right" });  

/*=============== Typed.js ==================*/
const typed = new Typed('.multiple-text', {
  strings: ['Web Developer', 'Graphic Designer', 'Data Analyst', 'Backend Developer', 'Content Creator'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});
});

