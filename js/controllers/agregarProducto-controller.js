import { productoServices } from "../services/products-services.js";
// import { v4 as uuidv4 } from 'uuid';

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const img = document.querySelector('[data-img]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    productoServices.crearProducto(img, nombre, precio, descripcion).then( respuesta => {
        console.log(respuesta)
        window.location.href = '/productos.html'
        alert('El producto fue creado con exito')
        }).catch(error => console.log(error))
});