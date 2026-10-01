/* Dennis Penna — Linkbio
   1. Ano corrente no rodapé.
   2. Brilho do pontilhado seguindo o cursor (só com mouse e sem "reduzir movimento").
   3. Entrada suave dos blocos ao rolar. */
(function () {
  "use strict";

  var ano = document.querySelector("[data-ano]");
  if (ano) ano.textContent = String(new Date().getFullYear());

  var reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var comMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  var pontos = document.querySelector(".pontos");
  if (pontos && comMouse && !reduzir) {
    var quadro = 0;
    window.addEventListener(
      "mousemove",
      function (e) {
        if (quadro) return;
        quadro = requestAnimationFrame(function () {
          quadro = 0;
          pontos.style.setProperty("--mx", e.clientX + "px");
          pontos.style.setProperty("--my", e.clientY + "px");
        });
      },
      { passive: true }
    );
    document.documentElement.addEventListener("mouseleave", function () {
      pontos.style.setProperty("--mx", "-9999px");
      pontos.style.setProperty("--my", "-9999px");
    });
  }

  if (reduzir || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("js");
  var alvos = document.querySelectorAll(".topo-texto, .banner, .livro, .link, .rotulo");
  var observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );
  alvos.forEach(function (el) {
    el.classList.add("surgir");
    observador.observe(el);
  });
})();
