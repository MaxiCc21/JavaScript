export function generarCard(option) {
  const $templateCard = document.getElementById("template-card").content,
    $cards = document.querySelector(".cards"),
    $fragment = document.createDocumentFragment();
  //Genera tarjetas dinamicas en los html donde esta funcion sea llamada,dependiendo del option que le pase toma los datos del LocalSotorage
  let prueba = localStorage.getItem(option);
  prueba = JSON.parse(prueba);
  prueba.forEach((element, index) => {
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
}
