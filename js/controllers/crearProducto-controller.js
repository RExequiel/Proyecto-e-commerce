import { productoServices } from "../services/products-services.js";

const crearProducto = (urlImagen, nombre, precio) => {
  const card = document.createElement("div");
  card.classList.add('container__contenido--todo');
  const contenido = `
    <img class="contenido__todo--img" src="${urlImagen}" alt="img_diversos">
    <div class="contenido__todo--descripcion">
        <p class="todo__descripcion--titulo">${nombre}</p>
        <p class="todo__descripcion--precio">${precio}</p>
        <a class="todo__descripcion--btn" href="./producto.html">
            <button class="btn2">Ver producto</button>
        </a>
    </div>
  `;
  card.innerHTML = contenido;

  return card;
};

const contentCard = document.querySelector("[data-productos]");

productoServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ urlImagen, nombre, precio}) => {
      const nuevacard = crearProducto(urlImagen, nombre, precio);
      contentCard.appendChild(nuevacard);
    });
  })
  .catch((error) => alert("Ocurrió un error"));


