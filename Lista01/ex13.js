const input = require("readline-sync");

let inicio = Number(input.question("Escreve numeros aí: "))
let fim = Number(input.question("Outro: "))

function range (inicio, fim){
    let lili = [];
    for(let i = inicio; i <= fim; i++){
        lili.push(i);
    }
    return lili;
}

function soma(lili){
    let soos = 0;
    for(let i = 0; i < lili.length; i++){
        soos += lili [i];
    }
    return soos;
}

console.log(`${range(inicio, fim)}`)
console.log(soma(range(inicio, fim)))