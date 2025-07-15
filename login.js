document.addEventListener("DOMContentLoaded", () => {
  const abrirSesion = document.getElementById("abrirSesion");
  const modal = document.getElementById("loginModal");
  const closeBtn = document.querySelector(".close");
  const loginForm = document.getElementById("loginForm");

  if (abrirSesion && modal && loginForm) {
    // Abrir modal
    abrirSesion.onclick = () => {
      modal.style.display = "block";
    };

    // Cerrar modal al hacer clic en la X
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };

    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };

    // Procesar formulario de inicio de sesión
    loginForm.onsubmit = (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email && password) {
        // Guardar sesión en localStorage como objeto
        const usuario = {
          email: email,
          nombre: "Usuario" // Aquí podrías usar un campo de nombre si lo tienes
        };

        localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

        // Redirigir al perfil
        modal.style.display = "none";
        window.location.href = "perfil.html";
      } else {
        alert("Completa todos los campos.");
      }
    };
  }
});
