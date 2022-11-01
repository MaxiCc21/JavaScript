import { generarCard } from "./script.js";

generarCard("hombre");

console.log(document);

const $cards = document.querySelector(".cards"),
  $linksCards = $cards.querySelectorAll("a");

$linksCards.forEach((link) => {
  link.addEventListener("click", () => {
    enviarDatosPrenda(link.parentNode, localStorage.getItem("hombre"));
  });
});

function enviarDatosPrenda(padre, prenda) {
  let prendaID = padre.getAttribute("data-id");
  console.log(prendaID);
  prenda = JSON.parse(prenda);
  prenda = prenda[prendaID];
  const JsonPrenda = JSON.stringify(prenda);
  sessionStorage.setItem("prenda", JsonPrenda);
}
