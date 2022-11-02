function createLocalStorage() {
  //Genera un objeto que luego es agregado al local storage
  if (localStorage.length == 0) {
    const mujer = [
      {
        img1: "../img/vestidoAzul.jpg",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de vestido Azul",
        description: "vestido Azul",
        price: 5000,
      },
      {
        img1: "../img/conjunto-marron.jpg",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de conjunto marron",
        description: "Conjunto marron",
        price: 15000,
      },
      {
        img1: "../img/tacos-rojos.jpg",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Tacones Rojos",
        description: "Tacones rojos",
        price: 4500,
      },
      {
        img1: "../img/remera-negra.jpg",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Remera negra",
        description: "Remera negra",
        price: 7000,
      },
      {
        img1: "../img/vestido-negro.jpg",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Vestido negro",
        description: "Vestido negro",
        price: 8300,
      },
      {
        img1: "../img/pantalon-blanco.jpg",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Pantalon blanco",
        description: "Pantalon blanco",
        price: 7000,
      },
    ];

    const hombre = [
      {
        img1: "../img/masculino/buzo-blanco.jpg",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Buzo blanco",
        description: "Buzo blanco",
        price: 7000,
      },
      {
        img1: "../img/masculino/camisa-azul.jpg",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Camisa azul",
        description: "Camisa azul",
        price: 5000,
      },
      {
        img1: "../img/masculino/zapatilla-negra.jpg",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Zapatilla deportiva",
        description: "Zapatilla deportiva",
        price: 12000,
      },
    ];

    localStorage.setItem("mujer", JSON.stringify(mujer));
    localStorage.setItem("hombre", JSON.stringify(hombre));
  }
}

localStorage.clear();
createLocalStorage();

const $templateCard = document.getElementById("template-card").content,
  $cards = document.querySelector(".cards"),
  $fragment = document.createDocumentFragment();

export function generarCard(option) {
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
