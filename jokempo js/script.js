const playhuman = (humanChoice) => {
    console.log(humanChoice)

    console.log('retorno' + playhuman())
}

const playmaquina = () => {
    const opçoes = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)

    return opçoes[randomNumber]
}