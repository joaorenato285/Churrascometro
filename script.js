let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputHoras = document.getElementById("horas");

let resultado = document.getElementById("resultado");
let container = document.getElementsByClassName("container")[0];

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let horas = inputHoras.value;


    let carne = adultos * 400 + (criancas * 400 / 2);
    if (horas >= 6) {
        carne = adultos * 600 + (criancas * 600 / 2);

    }

    let cerveja = adultos * 2000;
    if (horas >= 6) {
        cerveja = adultos * 1800;
    }

    let bebidas = criancas * 1000;
    if (horas >= 6) {
        bebidas = criancas * 1500;
    }
    container.style.height = "42rem";
    resultado.innerHTML = `<h2>Você vai precisar de:</h2>`
    resultado.innerHTML += `
      <div>
        <img width="35px" src="Assets/carne-removebg-preview.png"/>
        <p>${carne/1000} Kg de Carne</p>
      </div>
    `
    resultado.innerHTML += `
      <div>
        <img width="20px" src="Assets/cerveja.png"/>
        <p>${Math.ceil(cerveja/355)} latas de Cerveja</p>
      </div>
    `
    resultado.innerHTML += `
      <div>
        <img width="20px"  src="Assets/bebida-removebg-preview.png""/>
        <p>${Math.ceil(bebidas/2000)} garrafas de Bebidas</p>
      </div>
     
    `

}





