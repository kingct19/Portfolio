

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset;
      let parallaxSections = document.querySelectorAll('.parallax-section');
      
      parallaxSections.forEach(function(section) {
        let speed = 0.5;
        let offset = section.offsetTop;
        let newPos = (scrollTop - offset) * speed;
        section.style.backgroundPosition = `center ${-newPos}px`;
      });
    });
  });
  


document.getElementById("hamburger-menu").addEventListener("click", function () {
    var navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("open");
});