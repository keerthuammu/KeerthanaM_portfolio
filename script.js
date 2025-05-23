// Simple fade-in animation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 400;
      if (top > offset) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  });
  

  
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.fill').forEach(bar => {
      const value = bar.style.width;
      bar.style.width = value;
    });
  });

