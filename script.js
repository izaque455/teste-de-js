let num1 = 98; // Nossa primeira caixa com o número 10
let num2 = 98;  // Nossa segunda caixa com o número 8
let num3 = 98;  // Nossa terceira caixa com o número 9

// --- Passo 1: O Detetive pergunta: "São todos os números IGUAIS?" ---
// Para serem iguais, num1 precisa ser igual a num2 E num2 precisa ser igual a num3.
if (num1 === num2 && num2 === num3) {
    // Se a resposta for SIM, ele avisa:
    console.log('Os números são todos iguais!');
}
// --- Passo 2: Se não são todos iguais, o Detetive pergunta: "O num1 é o MAIOR?" ---
// Para num1 ser o maior, ele precisa ser maior ou igual a num2 E maior ou igual a num3.
else if (num1 >= num2 && num1 >= num3) {
    // Se a resposta for SIM, ele avisa:
    console.log('O num1 (' + num1 + ') é o maior!');
}
// --- Passo 3: Se num1 não é o maior, o Detetive pergunta: "O num2 é o MAIOR?" ---
// Para num2 ser o maior, ele precisa ser maior ou igual a num1 E maior ou igual a num3.
else if (num2 >= num1 && num2 >= num3) {
    // Se a resposta for SIM, ele avisa:
    console.log('O num2 (' + num2 + ') é o maior!');
}
// --- Passo 4: Se num1 e num2 não são os maiores (e não são todos iguais),
//              então o Detetive sabe que: "O num3 é o MAIOR!" ---
else {
    // Ele avisa o que sobrou:
    console.log('O num3 (' + num3 + ') é o maior!');
}