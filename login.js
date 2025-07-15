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
          nombre: "Usuario" // Cambia esto si tienes un campo de nombre
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

  // Mostrar nombre/correo del usuario en el menú
  const usuarioData = localStorage.getItem("usuarioLogueado");
  if (usuarioData) {
    const usuario = JSON.parse(usuarioData);
    const nombreElemento = document.getElementById("usuarioNombre");
    if (nombreElemento) {
      nombreElemento.innerHTML = `<i class="fas fa-user"></i> ${usuario.nombre || usuario.email}`;
    }

    // Activar botón de cerrar sesión
    const cerrarBtn = document.getElementById("cerrarSesion");
    if (cerrarBtn) {
      cerrarBtn.onclick = () => {
        localStorage.removeItem("usuarioLogueado");
        window.location.href = "index.html";
      };
    }
  }
});
