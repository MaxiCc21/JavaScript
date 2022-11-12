setTimeout(() => {
  const $form = document.getElementById("fPedido");
}, 700);

document.addEventListener("click", (e) => {
  if (e.target.matches("#fPedido button")) {
    agregarAlCarrito();
  }
});

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

  sessionStorage.setItem("carrito", JSON.stringify(productosCarrito));

  alert(`${description} ${fCantidad} x ${Number(price) * Number(fCantidad)}`);
}
