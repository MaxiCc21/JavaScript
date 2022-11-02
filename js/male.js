import { generarCard } from "./script.js";

generarCard("hombre");

document.addEventListener("click", (e) => {
  if (e.target.matches(".cards a p")) {
    enviarDatosPrenda(
      e.target.parentNode.parentNode,
      localStorage.getItem("hombre")
    );
  }
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
