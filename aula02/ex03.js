const input = require("readline-sync");

let n1 = Number(input.question("Digita dois numeros ai paizão\n"))
let n2 = Number(input.question())

const soma = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const div = (n1, n2) => {
    if(n2 === 0){
        let div = String("Erro");
        return div;
    }
    else{
        return n1 / n2;
    }
}

console.log(soma(n1, n2), sub(n1, n2), mult(n1, n2), div(n1, n2))
