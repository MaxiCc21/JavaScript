import { getData } from "./script.js";

export async function generarCard(option) {
  const $templateCard = document.getElementById("template-card").content,
    $cards = document.querySelector(".cards"),
    $fragment = document.createDocumentFragment();
  //Genera tarjetas dinamicas en los html donde esta funcion sea llamada,dependiendo del option que le pase toma los datos del LocalSotorage
  console.log(window.location);

  const items = await getData(option);
  items.forEach((element, index) => {
    let { img1, img2, img3, alt, description, price } = element;
    $templateCard.querySelector("div").setAttribute("data-id", index);
    $templateCard.querySelector("img").setAttribute("src", img1);
    $templateCard.querySelector("img").setAttribute("alt", alt);
    $templateCard.querySelectorAll("p")[0].textContent = description;
    $templateCard.querySelectorAll("p")[1].textContent = `$${price}`;
    const $clon = document.importNode($templateCard, true);
    $fragment.appendChild($clon);
  });
  $cards.appendChild($fragment);
  const section = await getData(option);
  console.log(section);
  document.addEventListener("click", (e) => {
    if (e.target.matches(".cards a p")) {
      enviarDatosPrenda(e.target.parentNode.parentNode, section);
    }
  });

  function enviarDatosPrenda(padre, prenda) {
    //Recupera y envia los datos al sessionStorage del producto de la card seleccionada
    let prendaID = padre.getAttribute("data-id");
    prenda = prenda[prendaID];
    const JsonPrenda = JSON.stringify(prenda);
    sessionStorage.setItem("prenda", JsonPrenda);
  }
}

export function generarShow() {
  //Recupera los datos guardados en el sessionStorage y crea un template dinamico con los datos obtenidos
  const $box_show = document.querySelector(".box-show"),
    template_show = document.getElementById("template-show").content;

  let prendaData = sessionStorage.getItem("prenda");
  console.log(sessionStorage.getItem("prenda"));
  prendaData = JSON.parse(prendaData);

  let { type, img1, img2, img3, alt, description, price } = prendaData;
  template_show.querySelector(".s1").children[0].setAttribute("src", img1);
  template_show.querySelector(".s1").children[0].setAttribute("alt", alt);

  template_show.querySelector(".s1").children[1].setAttribute("src", img2);
  template_show.querySelector(".s1").children[1].setAttribute("alt", alt);

  template_show.querySelector(".s1").children[2].setAttribute("src", img3);
  template_show.querySelector(".s1").children[2].setAttribute("alt", alt);

  template_show
    .querySelector(".s2")
    .firstElementChild.setAttribute("src", img1);

  template_show.querySelector(".producto").children[0].textContent =
    description;
  template_show.querySelector(".precio").children[0].textContent = `$${price}`;

  type == "h"
    ? template_show
        .querySelector("form")
        .setAttribute("action", "./hombre.html")
    : template_show
        .querySelector("form")
        .setAttribute("action", "./mujer.html");

  $box_show.appendChild(template_show);
}

export function generarSweetModalCarrito() {
  // $templateProducto Contiene un template que esta contenido en otro template
  // $fragment se guardan todas las instancias generadas para ser agregadas a $box
  // $box es el contenedor donde van a ir agregado el fragmento

  const $templateProducto = document
      .getElementById("my-template")
      .content.getElementById("template-producto").content,
    $templateSweet = document.getElementById("my-template").content,
    $box = document
      .getElementById("my-template")
      .content.querySelector(".s1-SweetModal"),
    $fragment = document.createDocumentFragment();

  let newTotal_price = 0;
  // Informacion para generar los template

  const Carrito = JSON.parse(sessionStorage.getItem("carrito"));

  Carrito.forEach((element) => {
    let { img1, description, price, cantidad, total_price } = element;
    $templateProducto.querySelector("img").setAttribute("src", img1);
    $templateProducto.querySelectorAll("p")[0].textContent = description;
    $templateProducto.querySelectorAll(
      "p"
    )[1].textContent = `${cantidad} Unidades x $${total_price}`;
    const $clon = document.importNode($templateProducto, true);
    $fragment.appendChild($clon);
    newTotal_price = newTotal_price + total_price;
  });

  $box.appendChild($fragment);

  if (newTotal_price) {
    $templateSweet.querySelector(
      "span"
    ).textContent = `Precio Total: $${newTotal_price}`;
  }
}
