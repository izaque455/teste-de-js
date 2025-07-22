let num1 = 900
let num2 = 900
let num3 = 800

if(num1 === num2 && num1 === num3){
    console.log('os numeros são todos iguais!')
}

else if (num1 >= num2 && num1 >= num3){
console.log("o num1 ("+ num1 +") é o maior")
}

else if(num2 >= num1 && num2 >= num3){
    console.log('o num2 ('+ num2 +') é o maior')
}

else if(num3 >= num1 && num3 >= num2){
    console.log ('num3 ('+num3+') é o maior')
}