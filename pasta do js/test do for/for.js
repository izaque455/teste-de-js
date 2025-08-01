/*
estrutura de repetição -LOOP
    -FOR
        1) INICIALIZAÇÃO - Criar uma variavele colocar um calor inicial para ela
        2) CONDIÇÃP - Enquanto for true, o laço continuará iterando.
                ele irá verificar antes de cada iteração 
        3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laçp der uma volta
 */

const users = ["maria", "joão", "mateus", "pedro",]
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}


// Estrutura de um for 
/*      ⬇️⬇️⬇️⬇️⬇️
        ⬇️⬇️⬇️⬇️⬇️
        ⬇️⬇️⬇️⬇️⬇️*/


/*
let p = document.querySelector('p')
let input = document.querySelector('input')


const contatos = [
{ name: 'Paulo', number: '(11) 92257-9780' },
{ name: 'Maria', number: '(75) 99840-3919' },
{ name: 'Eduardo', number: '(11) 96092-4356' },
{ name: 'Izaque', number: '(81) 99710-2221' },
]
function precura() {
for (let i = 0; contatos.length; i++) {        


   if (input.value.toLowerCase() === contatos[i].name.toLowerCase()) {
       p.innerHTML = `Contato encontrado com sucesso: ${contatos[i].name} 
Telefone: ${contatos[i].number}`;

       break;
   }
    else{
   p.innerHTML = "Seu contato não Encontrado"
}

 
   if (input.value === contatos[i].number.replace(/\D/g, '')) {
       p.innerHTML = `Contato encontrado com sucesso: ${contatos[i].name} 
Telefone: ${contatos[i].number}`;

       break;
   }
    else{
   p.innerHTML = "Contato não Encontrado, tente novamente"
}
}
 
}
*/