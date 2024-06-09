let ipMedia = document.querySelector("#ipMedia");
let btVerificar = document.querySelector("#btVerificar");

function verificarMedia(){
    let media = Number(ipMedia.value);


    //desvio condicional simples
    if(media >= 6.0){
        alert("Aluno APROVADO!!!!");

    }else{((media >=4.0)&&(media <6.0))
        alert("Aluno REPROVADO!!!!");
    }
    
    
}

btVerificar.onclick = function(){
    verificarMedia();

}