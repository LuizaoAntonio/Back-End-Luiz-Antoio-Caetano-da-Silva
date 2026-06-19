const input = require("readline-sync");

let algo = input.question("Digita qualqur coisa aí\n")

function FlashAmarelo(algo){
    const novidades = []
    for(let i = algo.length -1; i >= 0; i--){
        novidades.push(algo[i]);
    }
    return novidades;
}
    console.log(`${FlashAmarelo(algo)}`);