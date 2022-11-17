import {
  generarCard,
  generarShow,
  generarSweetModalCarrito,
} from "./dinamic-template.js";
import { butonToUp } from "./buttonToUp.js";
function createSessionStorage() {
  if (!sessionStorage.getItem("carrito")) {
    sessionStorage.setItem("carrito", JSON.stringify([]));
  }
}

createSessionStorage();

let url = document.location.pathname;

if (url.includes("hombre")) {
  generarCard("hombre");
  butonToUp(300);
}

if (url.includes("mujer")) {
  generarCard("mujer");
  butonToUp(300);
}

if (url.includes("show")) {
  generarShow();
}

// Carrito
const $iconCarrito = document.querySelector(".nav ul").lastElementChild;

$iconCarrito.addEventListener("click", () => {
  Swal.fire({
    template: "#my-template",
    confirmButtonText: "Comprar",
  }).then((res) => {
    if (res.isConfirmed) {
      Swal.fire("Compra realizada!\nMuchas gracias", "", "success");
    }
  });
});
generarSweetModalCarrito();

// Loader
const loader = document.querySelector(".loader"),
  divsLoader = document.querySelectorAll(".lds-ellipsis div");

window.addEventListener("load", () => {
  loader.classList.toggle("loader2");
  divsLoader.forEach((el) => {
    el.classList.toggle("dispel");
  });
});

export async function getData(section, id = undefined) {
  let res = await fetch("../json/data.json"),
    json = await res.json();

  if (section == "hombre") {
    return json.items.hombre[id] || json.items.hombre;
  }
  if (section == "mujer") {
    return json.items.mujer[id] || json.items.mujer;
  }
}
