// ------------------- Exercícios de interpretação de código ------------------

// Questão 1.

/** 
 * a) Undefined
 * b) null
 * c) 11
 * d) 3
 * e) [3,19,5,6,7,8,9,10,11,12,13]
 * f) 9
 * 
 */

// Questão 2.

// SUBI NUM ÔNIBUS EM MIRROCOS. 27

// ----------------------Exercícios de escrita de código -------------------

//Questão 1.

 const nomeDoUsuario = prompt("Qual o eu nome?")
 const emailDoUsuario = prompt ("Qual é o seu e-mail");
 const frase =  ("e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!" )

 console.log(frase)
 

 // Questão 2.

 const comidasPreferidas = ["comida baiana","pirão de aipim","brigadeiro","pizza","purê de banana da terra"];
 console.log(comidasPreferidas);
 console.log("Essas são as minhas comidas preferidas:", comidasPreferidas[0])
 console.log(comidasPreferidas[1]);
 console.log(comidasPreferidas[2]);
 console.log(comidasPreferidas[3]);
 console.log(comidasPreferidas[4]);

 const comidaUsuario = prompt("Qual é a sua comida preferida?")
 const novaComida = comidaUsuario

 console.log(novaComida.replaceAll("brigadeiro",comidaUsuario))
 console.log(comidasPreferidas)
 

 // Questão 3.

 let listaDeTarefas=[]

 const tarefa1= prompt ("penteou o cabelo")
 const tarefa2= prompt("lavou as maos")
 const tarefa3= prompt ("Já bebeu água")

 listaDeTarefas.push(tarefa1,tarefa2,tarefa3);
 console.log(listaTarefas)

 const tarefaRealzada= Number(prompt("digite a tarefa que você realizou:"))
 listaTarefas.splice()