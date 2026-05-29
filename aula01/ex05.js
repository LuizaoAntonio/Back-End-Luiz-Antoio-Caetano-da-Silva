const input = require("readline-sync");

console.log("Digite 10 números inteiros aleatórios aí")
let imp = Number(0)
let par = Number(0)

for(let i = Number(0); i <= 9; i++){
    let = nums = Number(input.question())

    if(nums %2 === 0){
        par = par + 1
    }

    else{
        imp = imp + 1
    }
}

    console.log(`Seu código tem ${par} números pares e ${imp} números ímpares`)