/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

  console.log("Bem-vindo(a) ao jogo de blackjack")

  

if (jogo) {
    const cartaUsuario1 = comprarCarta()
    const cartaUsuario2 = comprarCarta()
    const cartaComputador = comprarCarta()
    const cartaComputador1 = comprarCarta()

    const somaUsuario = (cartaUsuario1.valor + cartaUsuario2.valor)
    const somaComputador = (cartaComputador.valor + cartaComputador1.valor)

    console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${somaUsuario}`)
    console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - ${somaComputador}`)

    if (somaUsuario > somaComputador) {
        console.log("O usuário ganhou!")
    } else if (somaComputador > somaUsuario) {
        console.log("O computador ganhou!")
    } else if (somaUsuario === somaComputador) {
        console.log("Empate!")
    }

} else {
    console.log("O jogo acabou")
}
