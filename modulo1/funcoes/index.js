
// --------------------Exercícios de interpretação de código-------------

/**Questão 1.
 
 a) 10
    50
 b) não apresemta nenhuma informação

  Questão 2.

 a) Procura um elemento inteiro no texto.
 b) Todas as saídas serão "true".
 */

 
//----------------------Exercícios de escrita de código---------------------
 // Questão 1.
 
 // a)
 
function imprimirOla(nome, idade, cidade){
    console.log(`Eu sou, ${nome} tenho ${idade} anos, moro em ${cidade} e sou estudante.`)
}

 imprimirOla("Jerusa","33","Salvador")

 //b) 

 function informacoes (nome, idade, endereco, profissao){
 const frase = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.` )
  return frase
 }
 console.log(informacoes('Iasmim','29','Salvador','Fisioterapeuta'))

 //Questão 2.

 //a) 
 function somar(a, b){   
    const soma = a + b
   return soma
   
}
   console.log(somar (25, 15))
 //b) 

 let nova = function (number3, number4){
     nova =number3 >= number4
     return nova
 }
 let resultado =(20,50)
 console.log (resultado)

// c) 

  function devolve(number5){
      return number5 % == 0
  }
   devolve (20)
   devolve (30)
 //d) 

 let mensagemDoUsuario = prompt("Insira um texto");

 const mensagem = function(texto) {
     return texto.toUpperCase()
 }
 
 const resposta = mensagem(mensagemDoUsuario)
 
 console.log(resposta)
 console.log(length)

// Questão 3. 

   
 let numeroUm = Number(prompt("Digite um número"))
 let numeroDois = Number(prompt("Digite um número"))

 const imprimirNumeros

 function soma (primeiro, segundo){
     return primeiro + segundo
    }
 function diferenca (primeiro, segundo) {
     return primeiro - segundo
    }
 function multiplicacao (primeiro, segundo){
     return primeiro * segundo
    }
 function divisao (primeiro, segundo){
     return primeiro / segundo
    }

    console.log (imprimirNumeros(numeroUm, numeroDois)
    console.log (soma(numeroUm, numeroDois))
    console.log (diferenca(numeroUm, numeroDois)
    console.log (multiplicacao(numeroUm, numeroDois)
    console.log (divisao(numeroUm, numeroDois))
