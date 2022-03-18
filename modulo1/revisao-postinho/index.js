
// // // COMPARADORES
// // // Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}==${b} é ${a==b}`
}

console.log(checarIgualdade(1,3));

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior (a,b) {
    return `No comparador de igualdade ${a} > ${b} é ${a > b}`
}

console.log(verificaSeEMaior(321, 2156));


// // // Exercício 2------------------------------------------------------------------------------------
// // //Escreva true or false para as comparações abaixo:
// // // exemplo 1>2 = false
// // // a-) 1==='1'= false
// // // b-) 1=='1'= true
// // // c-) 'a'==='b'= true
// // // d-) 'b'>'a'= false
// // // e-) 0!==null= true


// // // CONDICIONAIS

// // // Exercício 3------------------------------------------------------------------------------------


function cadastro (nomeDoUsuario, anoDeNascimento, senhaDoUsuario,nacionalidade){
    let idadeDoUsuario = (2022-anoDeNascimento)
    let tamanhoSenha = senhaDoUsuario.length
    const usuario = [nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade]

    if((idadeDoUsuario >= 18) && (tamanhoSenha >= 6) && (nacionalidade === "Brasileira")) {
        return `Pode se cadastrar.`
    }
    else{
        return `Não pode se cadastrar.`
    }


    

}
console.log(cadastro("Jerusa", 1988, "******", "Brasileira" ));

// // // Exercício 4-----------------------------------------------------------------------------------------------

const login = ()=>{

    let loginUsuario = prompt ("Digite sua senha")
    const login = "labenu"
    
    if (loginUsuario === login){
        return `Usuário Logado.`
    }

    else {
        return `Senha inválida.`

    }
}

console.log(login(`Usuário logado` || `Senha inválida`));

// // Exercício 5----------------------------------------------------------------------------------------------------

 function primeiraDose(){

    const nomeDoUsuario = prompt("Qual é o seu nome?");
    const nomeDaVacina = prompt("Qual é o nome da vacina?");

    let tempo = ""
    let data = ""
  

    switch(nomeDaVacina){
      case "Coronavac":
      tempo = 28
      break
      case "Astrazeneca":
          tempo = 90
          break
      case "Pfizer":
         tempo = 90
         break
      default:
         return `Vacina inválida`

        

    }

}

console.log(primeiraDose(`Olá ${nomeDoUsuario}! A próxima dose da ${nomeDaVacina} é daqui a ${tempo} dias. Compareça no posto na data ${dataFormatada}`))



// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for(let pessoa of usuarios){
        if(pessoa.nome === nomeDoUsuario && pessoa.imunizacao ==="incompleta")
         pessoa.imunizacao = "completa"
    }
    return usuarios
    

}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]


     let nomePessoa = prompt("Digite seu nome")
    for(let pessoa of usuarios){
        if(nomePessoa === pessoa.nome && pessoa.imunizacao ==="incompleta"){
        return `Você precisa voltar ao posto para a segunda dose`
    }
    else {
        return `Parabéns você está completamente vacinado(a).`
    }
}

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    let nomeDoUsuario = prompt ("Digite seu nome")
    let anoDeNascimento = prompt("Digite seu ano de nascimento")
    let senhaDoUsuario = prompt("Digite sua senha")
    let nacionalidade = prompt("Digite sua nacionalidade")
    let novaPessoa ={}
    if (anoDeNascimento < 2004 && senhaDoUsuario.length >= 6 && nacionalidade === "Brasileiro"){

            novaPessoa.nome = nomeDoUsuario,
            novaPessoa.ano = anoDeNascimento,
            novaPessoa.nacionalidade = nacionalidade,
            novaPessoa.senha = senhaDoUsuario
        
    }
    
    usuarios.push(novaPessoa)
    return usuarios
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    
    const senhaDigitada = prompt("Digite sua senha")
    for (let pessoa of usuarios){
    if(senhaDigitada === pessoa.senha){
        console.log("Usuário logado.")
    }else{
         console.log("Senha inválida.")
    
    }    
    }
     
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
     
}
console.log(primeiraDoseDesafio())


const segundaDoseDesafio = (nomeDoUsuario) => {
    
    for(let pessoa of usuarios){
    if(nomedoUsuario === pessoanome){
        pessoa.imunizacao = "completa"
    }    
    }
    return usuarios
}
console.log(segundaDoseDesafio("Carlos"));

const avisoAosAtrasadosDesafio = () => {
    
}
console.log(avisoAosAtrasadosDesafio());  