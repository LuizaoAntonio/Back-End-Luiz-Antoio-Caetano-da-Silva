const input = require("readline-sync");

let a = Number(input.question("Digita dois numbers maneiros ai meu lil bro\n"))
let b = Number(input.question())

function calcular (a, b, op){
    return op(a, b,)
}

console.log(calcular(a, b, (a, b) => a + b))
console.log(calcular(a, b, (a, b) => a - b))
console.log(calcular(a, b, (a, b) => a * b))
console.log(calcular(a, b, (a, b) => a / b))
