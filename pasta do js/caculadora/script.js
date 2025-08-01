const botoes = document.querySelectorAll('.botoes');
const input = document.querySelector('input');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.textContent;

    if (valor === '=') {
      try {
        // Substitui os operadores para JavaScript entender
        const expressao = input.value.replace(/x/g, '*').replace(/÷/g, '/');
        input.value = eval(expressao); // ⚠️ cuidado com eval em projetos reais
      } catch {
        input.value = 'Erro';
      }
    } else {
      input.value += valor;
    }
  });
});
