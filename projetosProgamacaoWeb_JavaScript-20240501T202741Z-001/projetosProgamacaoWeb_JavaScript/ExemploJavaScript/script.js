let titulo = document.querySelector("#titulo");
let campoTexto = document.querySelector("#campoTexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function alterarTexto(){
    let textoDigitado = String(campoTexto.value);
    titulo.textContent = textoDigitado;
}

btTrocarTexto.onclick = function(){
    alterarTexto();
}

let escrevaNumero1 = document.querySelector("#escrevaNumero1");
let escrevaNumero2 = document.querySelector("#escrevaNumero2");
let resultadoDaSoma = document.querySelector("#resultadoDaSoma");
let btSomarN1eN2 = document.querySelector("#btSomarN1eN2");

function FazerCalculo(){
    let campoNumero1 = Number(escrevaNumero1.value);
    let campoNumero2 = Number(escrevaNumero2.value);
    let soma = campoNumero1 + campoNumero2;
    resultadoDaSoma.textContent = soma;

}

btSomarN1eN2.onclick = function(){
    FazerCalculo();
}