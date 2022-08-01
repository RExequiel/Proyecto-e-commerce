function listaProductos() {
  return fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());
}

const crearProducto = (urlImagen, nombre, precio, descripcion) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        urlImagen, 
        nombre,
        precio,
        descripcion}),
  }).then(res =>{
    if(res.ok){
    return res.body   
  }
    throw new Error('oh, sucedio un error')
  });
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarProducto = (urlImagen, nombre, precio, descripcion, id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        urlImagen,
        nombre,
        precio, 
        descripcion }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const productoServices = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};
