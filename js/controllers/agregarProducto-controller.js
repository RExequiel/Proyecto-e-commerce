import { productoServices } from "../services/products-services.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const img = document.querySelector('[data-img]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    productoServices.crearProducto(img, nombre, precio, descripcion).then( respuesta => {
        console.log(respuesta);
        alert('El producto fue creado con exito');
        }).catch(error => console.log(error))
});