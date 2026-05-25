const precios = {
  "Pizza": 50,
  "Hamburguesa": 35,
  "Refresco": 10
};

const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");
const totalTexto = document.getElementById("total");

function calcularTotal() {
  const prod = producto.value;
  const cant = parseInt(cantidad.value) || 0;

  const total = precios[prod] * cant;

  totalTexto.textContent = total;
}

// calcular en tiempo real
producto.addEventListener("change", calcularTotal);
cantidad.addEventListener("input", calcularTotal);

// cálculo inicial
calcularTotal();