document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  // 🌄 Ajustar imagem da hero conforme ambiente
  const hero = document.querySelector(".hero");
  if (hero) {
    const isGithub = location.hostname.includes("github.io");
    const inEnglishFolder = location.pathname.includes("/en/");
    const path = isGithub
      ? "/mga_site/img/bg-hero.jpg"
      : inEnglishFolder
        ? "../img/bg-hero.jpg"
        : "img/bg-hero.jpg";

    hero.style.backgroundImage = `url('${path}')`;
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundSize = "cover";
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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
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

// Equipa — foco entre equipa jurídica e apoio administrativo + toggle de áreas
document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector("[data-team-board]");
  const cards = document.querySelectorAll("[data-team-card]");
  const reset = document.querySelector("[data-team-reset]");
  const toggles = document.querySelectorAll(".team-card-toggle");

  if (!board || !cards.length) return;

  const setFocus = (team) => {
    board.setAttribute("data-team-focus", team);

    cards.forEach((card) => {
      const isPressed = team !== "all" && card.dataset.team === team;
      card.setAttribute("aria-pressed", isPressed ? "true" : "false");
    });

    if (reset) {
      if (team === "all") {
        reset.classList.add("is-active");
      } else {
        reset.classList.remove("is-active");
      }
    }
  };

  const clickedInteractiveChild = (target) => {
    return Boolean(target.closest("a, button, [data-team-ignore-focus]"));
  };

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (clickedInteractiveChild(event.target)) return;

      const team = card.dataset.team;
      const current = board.getAttribute("data-team-focus");
      setFocus(current === team ? "all" : team);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        const active = document.activeElement;
        if (active && active !== card && card.contains(active)) return;

        event.preventDefault();
        card.click();
      }
    });
  });

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const card = toggle.closest("[data-team-card]");
      const meta = card ? card.querySelector(".team-card-meta") : null;
      if (!card || !meta) return;

      const isOpen = !meta.hasAttribute("hidden");

      // fecha outras áreas abertas na mesma página
      document.querySelectorAll(".team-card-meta").forEach((panel) => {
        panel.setAttribute("hidden", "");
      });

      document.querySelectorAll(".team-card-toggle").forEach((btn) => {
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Ver áreas de atuação";
      });

      if (!isOpen) {
        meta.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
        toggle.textContent = "Ocultar áreas de atuação";
      }
    });
  });

  if (reset) {
    reset.addEventListener("click", () => setFocus("all"));
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest(".team-card-toggle")) return;

    document.querySelectorAll(".team-card-meta").forEach((panel) => {
      panel.setAttribute("hidden", "");
    });

    document.querySelectorAll(".team-card-toggle").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Ver áreas de atuação";
    });
  });
});