import { productoServices } from "../services/products-services.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    console.log(`ocurrio un error ${id}`);
  }

  const urlImagen = document.querySelector("[data-img]");
  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");

  try {
    const producto = await productoServices.detalleProducto(id);
    if (producto.urlImagen && producto.nombre && producto.precio) {
      urlImagen.value = producto.urlImagen;
      nombre.value = producto.nombre;
      precio.value = producto.precio;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const urlImagen = document.querySelector("[data-img]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  productoServices.actualizarProducto(urlImagen, nombre, precio, id).then(() => {
    window.location.href='/productos.html'
  });
});
