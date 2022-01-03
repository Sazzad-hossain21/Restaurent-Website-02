
// Sticky Menu
window.addEventListener('scroll', function(){
   const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
});

// Menu

function toggleMenu(){
   const menuToggle = document.querySelector('.menu-toggle');
   const navLinks = document.querySelector('.nav-links');
   menuToggle.classList.toggle('active');
   navLinks.classList.toggle('active');
}