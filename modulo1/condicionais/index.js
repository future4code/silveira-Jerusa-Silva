//--------------------------Exercícios de interpretação de código-----------------------

/**  Questão 1.
 * a) Verifica número que o usuário digitou.
 * b) números pares
 * c) números ímpares
 */

/** Questão 2.
  * a) Verifica preços.
  * b) O preço da fruta maçã é 2,25
  * c) Com a retirada, o preço é exibido no que foi colocado no default. Ao invés
  * de R$5,50 é impresso $5.
  */

/** Questão 3
 * a) Pede para que o usuário digite um número.
 * b) O primeiro número passa no teste, o segundo apresenta uma mensagem de erro.
 * c) Sim, como não houve essa indicação no código (para números negativos), a impressão
 * retorna com mensagem que não foi possível definir.
 */

//------------------------Exercícios de escrita de código-------------------------------

//Questão 1.

const usuario = Number(prompt ("Qual é a sua idade?"))
console.log(usuario)

 if (usuario <- 18) {
   console.log("Você pode dirigir.")
 }else{
   console.log("Você não pode dirigir.")
 }

//Questão 2.

const matutino = "M"
const vespertino ="V"
const noturno ="N"
const alunoTurno =  prompt("Digite a primeira letra do seu turno.")

  if(matutino == "M"){
    console.log ("Bom Dia!");

  } else if (vespertino == "V"){
    console.log ("Boa Tarde!");

  } else if (noturno == "N") 
    {console.log("Boa noite!");   
  } else {
    console.log ("Turno não encontrado");
  }
 

// Questão 3.

const alunoTurno = prompt ("Digite a primeira letra do seu turno.")

switch (alunoTurno) {

  case "M":
  console.log("Bom dia!")
  break;
  case "V":
  console.log("Boa Tarde!");
  break;
  case "N":
  console.log("Boa noite!");
}


// Questão 4.

const cinema = prompt("Qual o gênero do filme?")
const valorIngresso = Number(prompt("Qual valor vai pagar?"))

function idaAoCinema (cinema, valorIngresso){

  if(cinema === `fantasia` && valorIngresso <= 15){
    console.log ("Bom filme!")

  }else { console.log ("Escolha outro filme! :(")
  }
  console.log(idaAoCinema(cinema, valorIngresso))