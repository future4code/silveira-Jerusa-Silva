// Exercício 1

//a) Os parâmetros são passados no terminal para o node, através do process.argv

//b)

const name =(process.argv[2])
const idade =Number(process.argv[3])

console.log(`Olá,${nome}! Você tem ${idade} anos.`)

//c)

const idadeNova =(idade + 7)

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeNova}`)