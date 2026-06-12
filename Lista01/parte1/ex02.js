const input = require("readline-sync");

let sn = Number(input.question("Calcular área de retângulo é massa né?(use 1 para sim e 0 para não)\n"))
    if(sn === 1){
        console.log("Então digita a base e a altura aí meu Bacano, pra gente calcular\n")
        let base = Number(input.question())
        let altura = Number(input.question())
        let area = base * altura
        console.log(`A área desse paralelepípedo aí é ${area}`)
    }
    else if(sn === 0){
        console.log("COMO NÃO!!!???\n")
        console.log("Vc deve ser q nem o Cantelli Lucas, todo PCD")   
    }
