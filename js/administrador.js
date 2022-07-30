const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;
  if (email === "admin@email.com" && password === "administrador") {
    window.location.href = "/productos.html";
  } else {
    alert("correo electronico ó contraseña invalidas");
    window.location.reload();
  }
});

