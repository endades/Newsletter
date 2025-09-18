// Detecta idioma actual y resalta enlace activo
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const langLinks = document.querySelectorAll(".lang-switcher a");
  langLinks.forEach(link => {
    if (path.startsWith(link.getAttribute("href"))) {
      link.style.color = "red";
    }
  });
});
