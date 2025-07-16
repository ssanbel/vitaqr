// Mostrar nombre de usuario en el menú si hay sesión iniciada
window.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioDatos"));
  const userNameDisplay = document.getElementById("userNameDisplay");

  if (usuario && userNameDisplay) {
    userNameDisplay.textContent = usuario.nombres;
  }

  // Mostrar datos del usuario
  if (usuario) {
    document.getElementById("nombreUsuario").textContent = usuario.nombres || "—";
    document.getElementById("apellidoUsuario").textContent = usuario.apellidos || "—";
    document.getElementById("dniUsuario").textContent = usuario.dni || "—";

    // Mostrar foto si está guardada en localStorage
    const fotoBase64 = localStorage.getItem("fotoPerfilBase64");
    const img = document.getElementById("fotoUsuario");
    if (fotoBase64 && img) {
      img.src = fotoBase64;
    }
  }

  // Manejar subida de nueva foto
  const archivo = document.querySelector('input[name="foto"]');
  if (archivo) {
    archivo.addEventListener("change", () => {
      const file = archivo.files[0];
      if (file) {
        const lector = new FileReader();
        lector.onload = () => {
          localStorage.setItem("fotoPerfilBase64", lector.result);
          const img = document.getElementById("fotoUsuario");
          if (img) img.src = lector.result;
        };
        lector.readAsDataURL(file);
      }
    });
  }

  // Cerrar sesión
  const btnCerrarSesion = document.getElementById("cerrarSesionBtn");
  if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener("click", () => {
      localStorage.removeItem("usuarioLogueado");
      localStorage.removeItem("usuarioDatos");
      localStorage.removeItem("fotoPerfilBase64");
      window.location.href = "index.html";
    });
  }
});
