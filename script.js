document.addEventListener('DOMContentLoaded', () => {
  // Efeito máquina de escrever
  const text = "Bem vindo(a) ao meu Portfólio";
  let i = 0;
  const speed = 80;
  const typingEl = document.getElementById("typing-text");

  function typeWriter() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

    typingEl.textContent = "";
  typeWriter();

  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // ScrollReveal
  ScrollReveal().reveal('.reveal', {
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    delay: 100,
    easing: 'ease-in-out',
    reset: true,
    cleanup: true
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const menuList = document.querySelector('.menu ul');

  toggleBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });
});


const gif = document.getElementById("meu-gif");
const modal = document.getElementById("gif-modal");

// Abrir o modal ao clicar no GIF
gif.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fechar modal ao clicar fora do GIF
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Fechar modal com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

