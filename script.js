// ===== HEADER ANIMATION =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.padding = '10px 8%';
    header.style.background = '#2e1c13';
    header.style.transition = 'all 0.3s ease';
  } else {
    header.style.padding = '20px 8%';
    header.style.background = '#5a3825';
  }
});

// ===== SCROLL APPEAR EFFECT =====
const appearElements = document.querySelectorAll('.service, .gallery-grid img, .contact form');

function appearOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  appearElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}

appearElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);

// ===== SIMPLE FORM FEEDBACK =====
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
    form.reset();
  });
}
