let num = Number(1)

for(let i = 0; i <= 99; i++){
    if(num % 3 === 0 && num % 5 === 0){
        console.log("FrizzBuzz")
    }
    else if(num % 3 === 0){
        console.log("Frizz")
    }
    else if(num % 5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(`${num}`)
    }
    num = num + 1;
}