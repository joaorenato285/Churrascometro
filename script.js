let inputAdultos = document.getElementById("adultos");
let inputCriancas =document.getElementById("criancas");
let inputHoras = document.getElementById("horas");

let resultado = document.getElementById("resultado")
let container = document.getElementsByClassName("container")[0]

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let horas = inputHoras.value;
    

    let carne = adultos * 400 +(criancas*400/2);
    if(horas>=6){ carne = adultos * 600 +(criancas*600/2);

    }

    let cerveja = adultos * 1200;
    if(horas>=6){ cerveja = adultos * 2000;
    }

    let bebidas = criancas * 1000;
    if(horas>=6){ bebidas = criancas * 1500;
    }
    container.style.height = "40rem";
    resultado.innerHTML += `<h2>Você vai precisar de:</h2>`;
    resultado.innerHTML += `<p>${carne/1000} Kg de <u>Carne</u></p>`;
    resultado.innerHTML +=`<p>${Math.ceil (cerveja/350)} Latinhas de <u>Cerveja</u></p>`;
    resultado.innerHTML += `<p>${Math.ceil (bebidas/2000)} Garrafas de <u>Refrigerante</u></p>`;

}





