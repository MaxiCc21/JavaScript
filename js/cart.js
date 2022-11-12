setTimeout(() => {
  const $form = document.getElementById("fPedido");
}, 700);

document.addEventListener("click", (e) => {
  if (e.target.matches("#fPedido button")) {
    agregarAlCarrito();
  }
});

if (!sessionStorage.getItem("carrito")) {
  sessionStorage.setItem("carrito", JSON.stringify([]));
} else {
  console.log("Ya esta creado");
}

function agregarAlCarrito() {
  let element = sessionStorage.getItem("prenda"),
    fCantidad = document.querySelector("input").value;
  element = JSON.parse(element);

  let { description, price } = element;
  const productoCarrito = {
    description,
    price,
    cantidad: fCantidad,
    total_price: price * fCantidad,
  };

  const productosCarrito = JSON.parse(sessionStorage.getItem("carrito"));
  productosCarrito.push(productoCarrito);
  console.log("Entra");
  sessionStorage.setItem("carrito", JSON.stringify(productosCarrito));
}
console.log("Hola");
