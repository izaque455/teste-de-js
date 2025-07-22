let num1 = 600
let num2 = 500
let num3 = 600
let resut = document.querySelector('h1')

if(num1 === num2 && num1 === num3){
    resut.textContent = "todos são iguais"
}

else if (num1 === num2 && num2 >= num3 ) {
    resut.textContent = 'o num1 ('+ num1+') e o num2 ('+num2+') é maior que o num3 que é ('+num3+')'
}

else if (num2 === num3 && num3 >= num1 ) {
    resut.textContent = 'o num2 ('+ num2+') e o num3 ('+num3+') é maior que o num1 que é ('+num1+')' 
}

else if (num1 === num3 && num3 >= num2) {
    resut.textContent = 'o num1('+ num1+') e o num3 ('+num3+') é maior que o num2 que é ('+num2+')' 
}

else if (num1 >= num2 && num1 >= num3){
resut.textContent = "o num1 ("+ num1 +") é o maior"
}

else if(num2 >= num1 && num2 >= num3){
    resut.textContent = 'o num2 ('+ num2 +') é o maior'
}

else if(num3 >= num1 && num3 >= num2){
    resut.textContent = 'num3 ('+num3+') é o maior'
}