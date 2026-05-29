const input = require("readline-sync");

console.log("Tente adivihar o número aleatório")

let ale = Number(34)
let tentativa = Number(0)
while(true){
    let num = Number(input.question())
    if(num === ale){
        console.log("Prabéns")
        break
    }
    else if(num < ale){
        console.log("O número da senha é maior")
    }
    else{
        console.log("O número da sanha é menor")
    }
    tentativa++;

}

