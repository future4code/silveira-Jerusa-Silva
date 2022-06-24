//1.a)

// const minhaString: string = 33

// O tipo number não pode ser atribuído em uma variável do tipo string.

//b)

// const meuNumero: number | string = '33'

// Foi utilizado operador lógico, retorna como verdadeiro se um dos valores forem verdadeiros.

//c)
type pessoa ={
    nome: string,
    idade:number,
    corFavorita: ArcoIris
}

enum ArcoIris {
    VERMELHO = "Vermelho",
    LARANJA ="Laranja",
    AMARELO ="Amarelo",
    VERDE ="Verde",
    AZUL ="Azul",
    ANIL ="Anil",
    VIOLETA ="Violeta"
    
}

const pessoa1: pessoa ={
    nome:"Tulipa",
    idade: 33,
    corFavorita: ArcoIris.VERMELHO
}

const pessoa2: pessoa ={
    nome:"Rosa",
    idade: 18,
    corFavorita: ArcoIris.ANIL
}

const pessoa3: pessoa ={
    nome:"Margarida",
    idade: 50,
    corFavorita: ArcoIris.AMARELO
}