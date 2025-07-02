// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
});

// Duplicate images for infinite scroll effect
window.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('scrollingTrack');
  track.innerHTML += track.innerHTML;
});