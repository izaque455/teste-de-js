const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const p = document.querySelector('.result');

function resutado(){
   let = '';
  let valor1 = Number(input1.value)
  let valor2 = Number(input2.value)
  let valor3 = Number(input3.value)
  
     if(valor1 === valor2 && valor2 === valor3){
        p.innerHTML = 'todos são iguais'
     }
      else if (valor1 > valor2 && valor1 > valor3){
        p.innerHTML = 'Numero 1 é maior'
     }
     else if (valor2 > valor3 && valor2 > valor1){
        p.innerHTML = 'Numero 2 é maior'
     }
     else if (valor3 > valor1 && valor3 > valor2){
        p.innerHTML = 'Numero 3 é maior'
     }
    
    else if (valor1 === valor2 && valor2 >= valor3 ) {
    p.innerHTML = 'o Numero 1 e o Numero 2  é maior que o Numero 3 '
}

else if (valor2 === valor3 && valor3 >= valor1 ) {
    p.innerHTML = 'Numero 2 e o Numero 3 é maior que o numero 1' 
}

else if (valor1 === valor3 && valor3 >= valor2) {
    p.innerHTML = 'O Numero 1 e o numero 3 é maior que o numero 2' 
}


}
    