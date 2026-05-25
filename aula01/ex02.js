const input = require ('readline-sync')

console.log("Digite dois números para eu fazer as operações básicas")

let num1 = Number(input.question())
let num2 = Number(input.question())
let soma = (num1 + num2)
let sub = num1 - num2
let mult = num1 * num2

if(num2 === 0){
    console.log(`A soma deu ${soma} A subtração deu ${sub} A multiplicação deu ${mult} E a Divsão deu erro`)
}
else{
let div = num1 / num2
console.log(`A soma deu ${soma} A subtração deu ${sub} A multiplicação deu ${mult} E a Divsão deu ${div}`)
}   