function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

// Scroll reveal debug
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript carregado");

  const elements = document.querySelectorAll(".scroll-reveal");

  if (elements.length === 0) {
    console.warn("⚠️ Nenhum elemento com .scroll-reveal encontrado.");
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("🔍 Visível:", entry.target);
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // opcional: revela só 1 vez
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});

// Mostrar barra inferior ao chegar ao fundo
window.addEventListener("scroll", function () {
  const footerBar = document.getElementById("footerBar");
  const scrollY = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollY >= pageHeight - 10) {
    footerBar.style.bottom = "0";
  } else {
    footerBar.style.bottom = "-100px";
  }
});
