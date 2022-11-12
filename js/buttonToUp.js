export function butonToUp(appear = 500) {
  const $boton = document.querySelector(".BtnScrollToTop");
  $boton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > appear) {
      $boton.classList.add("translate");
    } else {
      $boton.classList.remove("translate");
    }
  });
}
