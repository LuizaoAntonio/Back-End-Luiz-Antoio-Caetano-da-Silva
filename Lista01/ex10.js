const input = require("readline-sync");

let texto = String(input.question("Digita um texto maneiro aí pra gente meu brother\n"))
let letra = String(input.question("Digita uma letra aí pra gente meu brother\n"))


function contarletra (texto, letra){
    let cont = Number(0)
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === letra){
            cont++;
        }
    }
    return cont;
}

    console.log(`A letra "${letra}" aparece ${contarletra(texto, letra)} vezes no texto`)