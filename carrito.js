// LOGIN y NAVBAR
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");
const abrirSesion = document.getElementById("abrirSesion");
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

abrirSesion.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
toggle.onclick = () => navbar.classList.toggle("active");

function iniciarSesion() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email && password) {
    localStorage.setItem("usuarioLogueado", email);
    modal.style.display = "none";
    window.location.href = "productos.html";
  } else {
    alert("Completa todos los campos.");
  }
}

// CARRITO
const carritoContainer = document.getElementById("carrito-container");
const sesion = localStorage.getItem("usuarioLogueado");
const productos = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarritoVacio() {
  carritoContainer.innerHTML = `
    <h2>Carrito vacío</h2>
    <a href="productos.html" class="boton-comprar">Comprar</a>
  `;
}

function mostrarCarritoConProductos() {
  let total = 10;
  let html = productos.map(producto => {
    total += producto.precio * producto.cantidad;
    return `
      <div class="producto">
        <span>${producto.nombre} (x${producto.cantidad})</span>
        <span>S/ ${(producto.precio * producto.cantidad).toFixed(2)}</span>
      </div>
    `;
  }).join("");

  html += `
    <div class="producto">
      <span>Delivery</span>
      <span>S/ 10.00</span>
    </div>
    <div class="total">Total: S/ ${total.toFixed(2)}</div>
    <button class="boton-comprar" onclick="pagar()">Pagar con Izipay</button>
  `;

  carritoContainer.innerHTML = html;
}

function pagar() {
  alert("✅ Compra realizada con éxito. Gracias por confiar en VitaQR.");
  localStorage.removeItem("carrito");
  location.reload();
}

if (!sesion) {
  mostrarCarritoVacio();
} else {
  if (productos.length === 0) {
    mostrarCarritoVacio();
  } else {
    mostrarCarritoConProductos();
  }
}
