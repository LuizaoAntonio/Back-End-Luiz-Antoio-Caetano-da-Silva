const input = require("readline-sync");


let soma = Number(0)
let num = 50

for(let i = 1; i <= 50; i++){
    num--;
   
    if(num % 2 === 0){
        console.log(`${i}`)
       soma = soma + i;
    }
}
console.log(`${soma}`)