const $box_show = document.querySelector(".box-show"),
  template_show = document.getElementById("template-show").content;

let prendaData = sessionStorage.getItem("prenda");

console.log(JSON.parse(prendaData));

function generarShow(prenda, template, box) {
  //Recupera los datos guardados en el sessionStorage y crea un template dinamico con los datos obtenidos
  prenda = JSON.parse(prenda);

  let { img1, img2, img3, alt, description, price } = prenda;
  template.querySelector(".s1").children[0].setAttribute("src", img1);
  template.querySelector(".s1").children[0].setAttribute("alt", alt);

  template.querySelector(".s1").children[1].setAttribute("src", img2);
  template.querySelector(".s1").children[1].setAttribute("alt", alt);

  template.querySelector(".s1").children[2].setAttribute("src", img3);
  template.querySelector(".s1").children[2].setAttribute("alt", alt);

  template.querySelector(".s2").firstElementChild.setAttribute("src", img1);

  template.querySelector(".producto").children[0].textContent = description;
  template.querySelector(".precio").children[0].textContent = `$${price}`;

  console.log(template);
  box.appendChild(template);
}

generarShow(prendaData, template_show, $box_show);
