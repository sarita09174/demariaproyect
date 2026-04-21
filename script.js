const toggleThemeBtn = document.getElementById('toggleTheme');
const revealElements = document.querySelectorAll('.reveal');

// Tema persistente
const savedTheme = localStorage.getItem('cv-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('cv-theme', currentTheme);
});

// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15,
});

revealElements.forEach((element) => observer.observe(element));
