const input = require("readline-sync");

const alunos = [
    {id: 1, nome: "Julia <3", nota: 10.0},
    {id: 2, nome: "Luiz" , nota: 6.4},
    {id: 3, nome: "Tadeu" , nota: 4.6},
    {id: 4, nome: "m" , nota: 4.4},
    {id: 5, nome: "Harue" , nota: 5.6}
]

const sis = alunos.map(p => {
    return{
        nome: p.nome,
        nota: p.nota,
        sit: p.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

console.log(sis)