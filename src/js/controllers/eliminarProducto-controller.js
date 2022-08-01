import { productoServices } from "../services/products-services.js";

const crearProductoadm = (urlImagen, nombre, precio, id) => {
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
      <td>
        <ul class="table__button-control">
          <li>
            <a
            href="./agregarProducto.html?id=${id}"
            class="simple-button simple-button--edit"
            >
            Editar
            </a>
          </li>
          <br>
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
        card.classList.toggle("none");
      })
      .catch((err) => console.log(`Ocurrió un error${err}`));
  });

  return card;
};

const contentCard = document.querySelector("[data-productos]");

productoServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ urlImagen, nombre, precio, id }) => {
      const nuevacard = crearProductoadm(
        urlImagen,
        nombre,
        precio,
        id
      );
      contentCard.appendChild(nuevacard);
    });
  })
  .catch((error) => console.log(`Ocurrió un error${error}`));
