const input = require('readline-sync')

const podutos = [
    {id: 1, nome: "Memphis Depálio", preco: 152.99},
    {id: 2, nome: "Memphis the pie", preco: 220.29},
    {id: 3, nome: "Memphis the party", preco: 29.91},
    {id: 4, nome: "Memphis de Gás", preco: 110.12},
    {id: 5, nome: "Memphisa Demãe", preco: 67.99}
];

const pd3 = podutos.find(p => p.id === 3);
console.log("a) Seu produto de ID 3: ", pd3)

const pdCaro = podutos.filter(p => p.preco > 100)
console.log("b) Os produtos mais caros da lista: ", pdCaro)

const pdName = podutos.map(p => p.nome);
console.log("c) O nome dos produtos: ", pdName)

console.log("d) Produtos organizados ")
podutos.forEach(p => {
    console.log(`- [ID ${p.id}] ${p.nome}: R$ ${p.preco.toFixed(2)}`);
})