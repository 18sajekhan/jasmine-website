// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });
  
  // GSAP Animations
  gsap.from(".hero h1", { opacity: 0, y: -100, duration: 1 });
  gsap.from(".hero p", { opacity: 0, y: 100, duration: 1, delay: 0.5 });
  gsap.from(".cta-button", { opacity: 0, scale: 0, duration: 1, delay: 1 });
  
  gsap.from(".section h1", { opacity: 0, y: 100, duration: 1, delay: 1 });
  gsap.from(".section p", { opacity: 0, y: 50, duration: 1, delay: 1.5 });
  
  // Interactive Image Gallery
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      alert('You clicked on a beautiful moment!');
    });
  });
  