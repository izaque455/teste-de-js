let p = document.querySelector('p')
let input = document.querySelector('input')


const contatos = [
    { name: 'Paulo', number: '(11) 92257-9780' },
    { name: 'Maria', number: '(75) 99840-3919' },
    { name: 'Eduardo', number: '(11) 96092-4356' },
    { name: 'Izaque', number: '(81) 99710-2221' },
];

function precura() {
 contatos.forEach( item => {
    if(input.value === item.name){
        p.innerHTML = `Seu contato fui achado com sucesso, <br>
        Nome: ${item.name}<br>
        Telefone: ${item.number}`
        // o brake n fuciona etão o foEach para mim n sei onde usar
    }
    else{
        p.innerHTML =  'Contato não Encotrado, Tente Novamente'
    }
 });
}

// estrutura do while
/* let i = 0;
    let encontrado = false;

    while (i < contatos.length) {
        let nome = contatos[i].name.toLowerCase();
        let numero = contatos[i].number.replace(/\D/g, '');

        if (
            input.value.toLowerCase() === nome ||
            input.value === numero
        ) {
            p.innerHTML = `Contato encontrado com sucesso: ${contatos[i].name}<br>Telefone: ${contatos[i].number}`;
            encontrado = true;
            break;
        }

        i++;
    }

    if (!encontrado) {
        p.innerHTML = "Contato não encontrado, tente novamente.";
    }*/