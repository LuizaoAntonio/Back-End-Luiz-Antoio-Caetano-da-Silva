const input = require("readline-sync");

let senha = input.question("Escreva uma senha\n")

function ValidarSenha (senha){
    return senha.length >= 8;
}

if(ValidarSenha(senha)){
    console.log("Senha válida");
}
else{
    console.log("Senha inválida");
}
