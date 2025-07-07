document.addEventListener("DOMContentLoaded", () => {
  const abrirSesion = document.getElementById("abrirSesion");
  const modal = document.getElementById("loginModal");
  const closeBtn = document.querySelector(".close");
  const loginForm = document.getElementById("loginForm");

  if (abrirSesion && modal && loginForm) {
    abrirSesion.onclick = () => modal.style.display = "block";
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

    loginForm.onsubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      if (email && password) {
        localStorage.setItem("usuarioLogueado", email);
        window.location.href = "perfil.html";
      } else {
        alert("Completa todos los campos.");
      }
    };
  }
});
