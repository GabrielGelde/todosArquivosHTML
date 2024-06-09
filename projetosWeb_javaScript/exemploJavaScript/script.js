let campoNumero1 = document.querySelector("#campoNumero1");
let campoNumero2 = document.querySelector("#campoNumero2");
let btSomar = document.querySelector("btSomar");
let campoResultado = document.querySelector("campoResultado");

function somarNumeros(){
    let numeroDigitado1 = Number(campoNumero1.value);
    let numeroDigitado2 = Number(campoNumero2.value);
    let somar = (numeroDigitado1) + (numeroDigitado2);
    campoResultado.textContent = somar;
}    

    btSomar.onclick = function(){
        somarNumeros(); 
}


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