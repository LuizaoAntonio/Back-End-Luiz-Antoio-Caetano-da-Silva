const input = require("readline-sync");

const eune = {
    nome: "Luiz",
    idade: 15,
    cidade: "Catanduvas",
    curso: "Técnico em Desenvolvimento de Sistemas"
};

console.log(`Meu nome é ${eune.nome}, tenho ${eune.idade}.\nMoro em ${eune.cidade} e estou fazendo o Curso ${eune.curso}\n`)

eune.cidade = "Cascavel" 

console.log(`Na real, eu me enganei, sou de ${eune.cidade}`)