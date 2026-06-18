const input = require("readline-sync");

let idade = Number(input.question("digita tua idade aí meu Berinjela\n"))

function podevotar(idade){
    if (idade >= 16){
        console.log("Pode votar meu Amostradinho")
        return true
    }
    else{
        console.log("Não pode votar meu City boy")
        return false
    }
}

console.log(`${podevotar}`)