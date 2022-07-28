import { productoServices } from "../services/products-services.js";

const crearProductoadm = (urlImagen, nombre, precio, descripcion, id) => {
  
  const card = document.createElement("div");
  card.classList.add("container__contenido--todo");
  const contenido = `
      <img class="contenido__todo--img" src="${urlImagen}" alt="img_diversos">
      <div class="contenido__todo--descripcion">
          <p class="todo__descripcion--titulo">${nombre}</p>
          <p class="todo__descripcion--precio">${precio}</p>
          <a class="todo__descripcion--btn" href="./producto.html">
              <button class="btn2">Ver producto</button>
          </a>
      </div>
      <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../../agregarProducto.html?id=${id}"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
    `;
  card.innerHTML = contenido;

  const btn = card.querySelector(".simple-button--delete");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = btn.id;
    productoServices
      .eliminarProducto(id)
      .then((respuesta) => {
        console.log(respuesta);
        card.classList.toggle('none');
      })
      .catch((err) => alert(`Ocurrió un error${err}`));
  });
  
  return card;
};

const contentCard = document.querySelector("[data-productos]");

productoServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ urlImagen, nombre, precio, descripcion, id }) => {
      const nuevacard = crearProductoadm(urlImagen, nombre, precio, descripcion, id);
      contentCard.appendChild(nuevacard);
    });
  })
  .catch((error) => alert(`Ocurrió un error${error}`));
