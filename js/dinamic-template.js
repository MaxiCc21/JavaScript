export function generarCard(option) {
  const $templateCard = document.getElementById("template-card").content,
    $cards = document.querySelector(".cards"),
    $fragment = document.createDocumentFragment();
  //Genera tarjetas dinamicas en los html donde esta funcion sea llamada,dependiendo del option que le pase toma los datos del LocalSotorage
  let prenda = localStorage.getItem(option);
  prenda = JSON.parse(prenda);
  prenda.forEach((element, index) => {
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

  document.addEventListener("click", (e) => {
    console.log("Hola");
    if (e.target.matches(".cards a p")) {
      enviarDatosPrenda(
        e.target.parentNode.parentNode,
        localStorage.getItem(option)
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
}

export function generarShow() {
  //Recupera los datos guardados en el sessionStorage y crea un template dinamico con los datos obtenidos
  const $box_show = document.querySelector(".box-show"),
    template_show = document.getElementById("template-show").content;

  let prendaData = sessionStorage.getItem("prenda");
  prendaData = JSON.parse(prendaData);

  let { img1, img2, img3, alt, description, price } = prendaData;
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

  $box_show.appendChild(template_show);
}
