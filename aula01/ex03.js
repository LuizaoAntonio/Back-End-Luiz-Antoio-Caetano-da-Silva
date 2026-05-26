const input = require ('readline-sync')

console.log("Digite suas cinco notas para eu conferir se você está aprovado, reprovado ou em recuperação")

let soma = Number (0)

    for(let i = Number(0); i < 5; i++){
    let nota = Number (input.question())
    soma = soma + nota
    }

    let media = Number(soma /5)

        if(media >= 7){
            console.log("Aprovado")
        }
        else if(media >= 5){
            console.log("Recuperação")
        }
        else{
            console.log("Reprovado")
        }


