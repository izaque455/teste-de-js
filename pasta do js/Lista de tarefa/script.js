// A. Pegar as referências dos elementos HTML
// Certifique-se de que seus elementos HTML têm as classes 'input1', 'Botao' e 'lista'
const inputTarefa = document.querySelector('.input1'); // Renomeei para ser mais descritivo
const botao = document.querySelector('.Botao');
const lista = document.querySelector('.lista'); // Sua <ul> ou <ol>

// B. Adicionar o ouvinte de evento ao botão
botao.addEventListener('click', function adicionar() {
    // 1. **PEGAR O VALOR DO INPUT AQUI DENTRO!**
    // Isso garante que você pegue o valor atualizado quando o botão é clicado.
    const textoDigitado = inputTarefa.value.trim(); // .trim() remove espaços em branco extras

    // 2. Validação: verificar se o input não está vazio
    if (textoDigitado === '') {
        alert('Por favor, digite uma tarefa!');
        return; // Sai da função se estiver vazio
    }

    // 3. Criar um novo item da lista (<li>)
    const novoItemLista = document.createElement('li');

    // 4. Adicionar o texto digitado ao novo item da lista
    novoItemLista.textContent = textoDigitado;

    // 5. Adicionar o novo item à sua lista (<ul> ou <ol>)
    lista.appendChild(novoItemLista);

    // 6. Limpar o input após adicionar a tarefa
    inputTarefa.value = '';

    // 7. Opcional: focar no input para facilitar a próxima digitação
    inputTarefa.focus();

    console.log('Botão Clicado e Tarefa Adicionada!');
});