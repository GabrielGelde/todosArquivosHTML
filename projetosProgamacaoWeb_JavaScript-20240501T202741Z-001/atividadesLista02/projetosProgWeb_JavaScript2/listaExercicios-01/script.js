let ipCotacaoDolar = document.querySelector("#ipCotacaoDolar");
let resValorCotacao = document.querySelector("#resValorCotacao");
let btCalcularAumento = document.querySelector("#btCalcularAumento");
let resCotacao1 = document.querySelector("#resCotacao1");
let resCotacao2 = document.querySelector("#resCotacao2");
let resCotacao5 = document.querySelector("#resCotacao5");
let resCotacao10 = document.querySelector("#resCotacao10");
let btCalAumento = document.querySelector("#btCalAumento");


function resCotAtual (){
    let valorDolar = Number(ipCotacaoDolar.value);
    resValorCotacao.textContent = valorDolar;
    return valorDolar;
}

function Calcular(valorDolar) {
    let resultadoA = valorDolar * 0.01;
    let resultadoAfinal = valorDolar + resultadoA
    resCotacao1.textContent = resultadoAfinal;
    let resultadoB = valorDolar * 0.02;
    let resultadoBfinal = valorDolar + resultadoB
    resCotacao2.textContent = resultadoBfinal;
    let resultadoC = valorDolar * 0.05;
    let resultadoCfinal = valorDolar + resultadoC
    resCotacao5.textContent = resultadoCfinal;
    let resultadoD = valorDolar * 0.10;
    let resultadoDfinal = valorDolar + resultadoD
    resCotacao10.textContent = resultadoDfinal;

}

btCalcularAumento.onclick = function(){
    let valorDolar = resCotAtual();
    Calcular(valorDolar); 
}

// Defina uma variável com o valor original
let valorOriginal = 100;

// Calcular o aumento de 1%
const aumento1 = valorOriginal * 0.01;
const novoValor1 = valorOriginal + aumento1;

console.log("Aumento de 1%:", novoValor1);

// Use o novo valor para calcular o aumento de 2%
const aumento2 = novoValor1 * 0.02;
const novoValor2 = novoValor1 + aumento2;

console.log("Aumento de 2%:", novoValor2);

// Use o novo valor para calcular o aumento de 5%
const aumento5 = novoValor2 * 0.05;
const novoValor5 = novoValor2 + aumento5;

console.log("Aumento de 5%:", novoValor5);

// Use o novo valor para calcular o aumento de 10%
const aumento10 = novoValor5 * 0.10;
const novoValor10 = novoValor5 + aumento10;

console.log("Aumento de 10%:", novoValor10);