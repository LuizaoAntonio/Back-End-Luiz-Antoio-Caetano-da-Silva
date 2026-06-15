const input = require("readline-sync");

let num = Number(input.question("Digite um número maneirão aí\n"))

for(let i = num; i != 0; i--){
    console.log(`${num}`)
    num = num -1;
    if(num === 0){
        console.log("fim.")
    }
}