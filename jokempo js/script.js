const resultado = document.querySelector('.result');
const resultDaAlexa = document.querySelector('.result-da-alexa');
const meuspontos = document.querySelector('.resultado-seu');
const pontosdaAlexa = document.querySelector('.resultado-da-alexa');
const resultseu = document.querySelector('.result-seu');
let humansocorNumber = 0
let machinesocorNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}
const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const ramdoNumber = Math.floor(Math.random() * 3)



    return choices[ramdoNumber]
}
const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)
    resultDaAlexa.innerHTML = "Alexa escolheu: " + machine;
    resultseu.innerHTML = "Voce escolheu: " + human;

    if (human === machine) {
        resultado.innerHTML = "Deu Empate!!"
    }
    else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')) {
        humansocorNumber++;
        meuspontos.innerHTML = humansocorNumber
        resultado.innerHTML = "Você Ganhou!!"

    }
    else {
        machinesocorNumber++;
        pontosdaAlexa.innerHTML = machinesocorNumber
        resultado.innerHTML = 'Você perdeu para alexa'
    }
}
