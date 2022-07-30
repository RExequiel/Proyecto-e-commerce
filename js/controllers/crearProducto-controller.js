import { productoServices } from "../services/products-services.js";

const crearProducto = (urlImagen, nombre, precio) => {
  const card = document.createElement("div");
  const contenido = `
    <div class="todo__descripcion--card">
      <img
      class="contenido__todo--img"
      src="${urlImagen}"
      alt="img_diversos"
      />
      <br>${nombre}<br>${precio}
    </div>
  `;
  card.innerHTML = contenido;

  return card;
};

const contentCard = document.querySelector("[data-productos]");

productoServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ urlImagen, nombre, precio }) => {
      const nuevacard = crearProducto(urlImagen, nombre, precio);
      contentCard.appendChild(nuevacard);
    });
  })
  .catch((error) => alert("Ocurrió un error"));






