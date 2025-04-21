document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
  console.log("JavaScript carregado");

  // 🌄 Ajustar imagem da hero conforme ambiente
  const hero = document.querySelector('.hero');
  if (hero) {
    const isGithub = location.hostname.includes("github.io");
    const path = isGithub ? "/mga_site/img/bg-hero.jpg" : "img/bg-hero.jpg";
    hero.style.background = `url('${path}') center/cover no-repeat`;
  }

  // 🍔 Toggle menu mobile
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const menu = document.getElementById("menu");
      menu.classList.toggle("show");
    });
  }

  // 👀 Scroll reveal
  const elements = document.querySelectorAll(".scroll-reveal");

  if (elements.length === 0) {
    console.warn("⚠️ Nenhum elemento com .scroll-reveal encontrado.");
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("🔍 Visível:", entry.target);
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});

// 📌 Mostrar barra inferior ao chegar ao fundo
window.addEventListener("scroll", function () {
  const footerBar = document.getElementById("footerBar");
  if (!footerBar) return;

  const scrollY = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollY >= pageHeight - 10) {
    footerBar.style.bottom = "0";
  } else {
    footerBar.style.bottom = "-100px";
  }
});

// Scroll cabecalho
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});
