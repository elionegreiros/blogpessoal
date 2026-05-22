document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const banner = document.querySelector(".banner");

  // Efeito ao clicar nos botões
  buttons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      alert("Abrindo artigo completo...");
    });
  });

  // Animação de blur no banner
  banner.addEventListener("mouseenter", () => {
    banner.style.backdropFilter = "blur(12px)";
  });
  banner.addEventListener("mouseleave", () => {
    banner.style.backdropFilter = "blur(8px)";
  });
});
