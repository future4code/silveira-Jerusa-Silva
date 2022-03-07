
//---------------------Exercícios de interpretação de código---------------------------

/**
 Questão 1.

 Serão exibidos os objetos [0,1,2], contendo nome e apelido.

 Questão 2.

 Serão exibidos apenas os nomes: Amanda Rangel, Laís Petra, Leticia Chijo.

 Questão 3.

 Não vai ser apresentada nenhuma informação apenas "(2) [{…}, {…}]"

 */

 //-----------------------Exercícios de escrita de código----------------------------------

 //Questão 1.

 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
  
 const nomesDePets = pets.map(item, index, array) =>
retur item.nome
})
const petsSalsichas = pets.filter((item, index,array) => {
 return item.raca == "Salsicha"
}
const mensagem = pets ((item, index, array)=> {

return item.raca =="Poodle"

})
.map(item =>){
const desconto ="A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a " + item.nome"

 return desconto
}) 
console.log(desconto)
 
//Questão 2. 

// const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
  

// a)
    const listaNomes - produtosmap((item, index,array)+{
        return item.nome
        })
        console (listaNomes)
        
// b)    
        
        const listaNomes = produtos.map((item) => {
        const objeto = {nome: item.nome}
        return objeto
        })
        
        console.log(listaNomes) 
        