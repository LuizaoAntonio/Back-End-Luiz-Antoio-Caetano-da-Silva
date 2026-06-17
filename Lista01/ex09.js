const input = require("readline-sync");

let a = Number(input.question("Escreve o tamanho da sua aura e a do seu amigo para eu ver qual tem mais\n"))
let b = Number(input.question())

function min (a, b){
    if(a === b){
    console.log("Uma puta disputa de aura (Tom Holland olhando o celular com a mão na boca)")
    }
    else if(a > b){
        return b;
    }
    else{
        return a;
    }
}

console.log(`a mais baixa é: ${min(a, b)}`)