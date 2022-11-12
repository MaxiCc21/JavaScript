import { generarCard, generarShow } from "./dinamic-template.js";
import { butonToUp } from "./buttonToUp.js";
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
        img1: "https://placeimg.com/200/200/any",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Zapatilla deportiva",
        description: "Zapatilla deportiva",
        price: 12000,
      },
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
        img1: "https://placeimg.com/200/200/any",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Zapatilla deportiva",
        description: "Zapatilla deportiva",
        price: 12000,
      },
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
        img1: "https://placeimg.com/200/200/any",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Zapatilla deportiva",
        description: "Zapatilla deportiva",
        price: 12000,
      },
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
        img1: "https://placeimg.com/200/200/any",
        img2: "https://dummyimage.com/200/000000/ffffff.jpg",
        img3: "https://dummyimage.com/200/000000/ffffff.jpg",
        alt: "Imagen de Zapatilla deportiva",
        description: "Zapatilla deportiva",
        price: 12000,
      },
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
        img1: "https://placeimg.com/200/200/any",
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

console.log($iconCarrito);

const loader = document.querySelector(".loader"),
  divsLoader = document.querySelectorAll(".lds-ellipsis div");

window.addEventListener("load", () => {
  loader.classList.toggle("loader2");
  divsLoader.forEach((el) => {
    el.classList.toggle("dispel");
  });
});

console.log(window);
