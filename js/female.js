import { generarCard } from "./script.js";

generarCard("mujer");

const $cards = document.querySelector(".cards"),
  $linksCards = $cards.querySelectorAll("a");

$linksCards.forEach((link) => {
  //Crea un listener para todos los links de las cards creadas con generarCard
  link.addEventListener("click", () => {
    enviarDatosPrenda(link.parentNode, localStorage.getItem("mujer"));
  });
});

function enviarDatosPrenda(padre, prenda) {
  //Recupera y envia los datos al sessionStorage del producto de la card seleccionada
  let prendaID = padre.getAttribute("data-id");
  console.log(prendaID);
  prenda = JSON.parse(prenda);
  prenda = prenda[prendaID];
  const JsonPrenda = JSON.stringify(prenda);
  sessionStorage.setItem("prenda", JsonPrenda);
}
