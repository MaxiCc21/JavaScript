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

  let { id, img1, description, price } = element;
  const productoCarrito = {
    id,
    img1,
    description,
    price,
    cantidad: Number(fCantidad),
    total_price: price * fCantidad,
  };

  const productosCarrito = JSON.parse(sessionStorage.getItem("carrito"));
  productosCarrito.push(productoCarrito);
  sessionStorage.setItem("carrito", JSON.stringify(productosCarrito));
}
