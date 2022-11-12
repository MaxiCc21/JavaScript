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

  alert(`${description} ${fCantidad} x ${Number(price) * Number(fCantidad)}`);
}
