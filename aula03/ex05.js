const input = require("readline-sync");

const podrutos = []
let preco = 0
let nome = []

for(let i = 0; i < 3; i++){
    nome = input.question("dale um nome aí meu resenhudo\n")
    preco = parseFloat(input.question("dale o preço dele meu labubuzinho\n"))

    podrutos.push({id: i + 1, nome: nome, preco: preco})
}
const acimad20 = podrutos.filter(p => p.preco > 20.0);
console.log("Produtos cadastrados com mais de 20 reais")
console.log("\n-----------------------------------------------------------")
console.log(acimad20)
console.log("\n-----------------------------------------------------------")