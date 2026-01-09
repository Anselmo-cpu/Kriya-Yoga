// DOMContentLoaded para asegurar que el HTML esté listo
document.addEventListener("DOMContentLoaded", function () {

  // ================= SCROLL ANIMATIONS =================
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("is-visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      }
    });
  };

  handleScrollAnimation();
  window.addEventListener("scroll", handleScrollAnimation);

  // ================= HAMBURGUESA MOBILE =================
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav a");

  if (hamburger && mobileNav) {
    // Abrir / cerrar menú hamburguesa
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active"); // animación de líneas
      mobileNav.classList.toggle("show");   // mostrar / ocultar menú
    });

    // Cerrar menú al hacer click en un link
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("show");
      });
    });
  }

});
