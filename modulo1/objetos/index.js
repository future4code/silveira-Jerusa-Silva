
//-----------------Exercícios de interpretação de código--------------



/**
 * Questão 1.
 * 
  Matheus Nachtergale
  Virginia Cavendish
  canal: 'Globo', horário: '14h'

  Questão 2.
  
  Os objetos serão impressos três vezes.
  nome:'Juca', idade:3, raca: 'SRD'
  Sintaxe três pontos copia os objetos.

  Questão 3.

  False e underfined.
  Não foi atribuido um valor para a altura por isso retornou underfined.
 */

  //------------------Exercícios de escrita de código---------------------

  //  1.a) 

  const pessoa ={
      nome: "Jerusa",
      apelidos: ["Je", "Jeu", "Jerus"]
  }
  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
  
 // b)

  const pessoa ={
    nome: "Jerusa",
    apelidos: ["Je", "Jeu", "Jerus"]
  }
  console.log(pessoa)

  const novaPessoa = {...pessoa, nome:"Simone", apelidos: ["Si","Mone", "Moneca"]}
  console.log(novaPessoa)
  

  // Questão 2.
  

  const pessoa = {

    nome: "Iasmim",
    idade: 29,
    profissao: "Fisioterapeuta",
    

  }
  
  const pessoas= (informacoes)=>{
      const lista = [informacoes.nome, informacoes.nome.length, informacoes.idade, informacoes.profissao, informacoes.profissoa.length]
      return lista
 
  }


  

  //Questão 3

  const carrinho = []
  
  const fruta1 = {
     nome: "mamão"
     disponibilidade: true
  }
   
   const fruta2 = {
     nome: "abacate"
     disponibilidade: true
   
   }  
   
   const fruta3 ={
     nome: "umbu
     disponibilidade: true"}
   
   function funcaoCarrinho(objeto){
   carrinho.push(objeto)
   }

   funcaoCarrinho(fruta1)
   funcaoCarrinho(fruta2)
   funcaoCarrinho(fruta3)
   
    console.log(carrinho)


