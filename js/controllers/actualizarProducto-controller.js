import { productoServices } from "../services/products-services";

const formulario = document.querySelector("[data-form]");

export const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    alert("ocurrio un error" + id);
  }

  const img = document.querySelector("[data-img]");
  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");

  try {
    const producto = await clientServices.detalleProducto(id);
    if (
      producto.img &&
      producto.nombre &&
      producto.email &&
      producto.descripcion
    ) {
      img.value = producto.img;
      nombre.value = producto.nombre;
      precio.value = producto.precio;
      descripcion.value = producto.descripcion;
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(`ocurrio un error${error}`);
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const img = document.querySelector("[data-img]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;

  productoServices
    .actualizarProducto(img, nombre, email, descripcion, id)
    .then(() => {
      alert("¡producto editado!");
    }).catch(error=>console.log(error));
});
