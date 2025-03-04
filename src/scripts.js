// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Set up Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Remove observer after animation if desired
          }
        });
      },
      { threshold: 0.1 }
    );
  
    // Observe all elements with the "animate-on-scroll" class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  });
  