document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  const elementInView = (el, offset = 0.85) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= window.innerHeight * offset;
  };

  const displayScrollElement = (el) => {
    el.classList.add("is-visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (!el.classList.contains("is-visible") && elementInView(el)) {
        displayScrollElement(el);
      }
    });
  };

  // Chequeo inicial
  handleScrollAnimation();
  window.addEventListener("scroll", handleScrollAnimation);
});
