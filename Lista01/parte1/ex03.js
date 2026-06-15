const input = require("readline-sync");

let sn = Number(input.question("Bora de teste dnv??(1 para sim e 0 para não)")) 

    if(sn === 1){
        let num = Number(input.question("Boa meu amostradinho. Digita um número enfadonho aí pra gente ver se é ímpar\n"))
        let SoN = (num % 2 === 0) ? "par dms" : "ímpar";

            console.log(`Seu número é ${SoN}`)
    }
    else if(sn === 0){
        console.log("olk mano :( Vc me odeia?? :,(")
    }
    else{
        console.log("Você realmente tem PCD, não é possível")
    }

    