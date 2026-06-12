const input = require("readline-sync");

let sn = Number(input.question("Quer ver eu fazer uma traquinagem dahora??(1 pra sim, 0 para não)\n"))

if(sn === 1){
let celsius = Number(input.question("Maneirão. Digite quantos graus essa tua batata q vc chama de celular fica quando vc joga '' Roube um Brainhot''\n"))
    let F = (celsius * 1.8) + 32
    console.log(`Sua bomba aí fica com ${F} graus Fahrenheit`)
}
else if (sn === 0){
    console.log("Olk :'(")
}
else{
    console.log("Você tem PCD?")
}