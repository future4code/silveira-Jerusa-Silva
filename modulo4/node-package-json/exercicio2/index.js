// Exercício 2


const valorUm = Number(process.argv[3])
const valorDois =Number(process.argv[4])

const operacao = process.argv[2]

switch(operacao){
    case "soma":
        console.log (valorUm + valorDois)
        break;

    case "subtracao":
        console.log(valorUm - valorDois)
        break;

    case "multiplicacao":
        console.log(valorUm * valorDois)
        break;

    case "divisao":
        console.log(valorUm / valorDois)
        break;

}