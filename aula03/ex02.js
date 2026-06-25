const input = require("readline-sync");

const podutos = [
    { id: 1, nome: "Cinquenta tons de taxa", preco: 50},
    { id: 2, nome: "Largados e Taxados", preco: 2.79},
    { id: 3, nome: "Tax Man: O Cavaleiro das Taxas", preco: 100000},
    { id: 4, nome: "Taxarel", preco: 1000}
];

for(let i = 0; i <= 3; i++){
    console.log(podutos[i])
}

podutos.push({ id: 5, nome: "Taxa Humana", preco: 4})
console.log(podutos.length)