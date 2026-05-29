const input = require ('readline-sync')

console.log("Digite um número para eu mostrar a tabuada de 1 a 10")

let num1 = Number(input.question())
let numa = Number(0)

        for(let i = Number(0); i<= 10; i++){
     
                let mult = Number(numa * num1)

                console.log(`${numa} X ${num1} = ${mult}`)
                numa = numa + 1

}