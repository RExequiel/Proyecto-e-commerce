function searchFilter(input, selector) {
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      if (e.key === "Escape") e.target.value = "";
      document.querySelectorAll(selector).forEach((el) => {
        if (el.textContent.toLowerCase().includes(e.target.value)) {
          el.classList.remove("none");
        } else {
          el.classList.add("none");
        }
      });
    }
  });
}
searchFilter(".cabecera__buscador--input", ".todo__descripcion--card");
