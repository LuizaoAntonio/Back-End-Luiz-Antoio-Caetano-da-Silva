const input = require("readline-sync");

let n1 = Number(input.question())
let n2 = Number(input.question())


function soma (n1, n2) {
    return n1 + n2;
}

function sub (n1, n2) {
    return n1 - n2;
}

function mult (n1, n2) {
    return n1 * n2;
}

function div (n1, n2) {
    if(n2 === 0){
        let div = String("Erro");
        return div
    }
    else{
        return n1 / n2;
    }

}



console.log(soma(n1, n2), sub(n1, n2), mult(n1, n2), div(n1, n2))
