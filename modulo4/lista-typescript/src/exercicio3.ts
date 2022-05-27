type filmeEscohido ={
    nome: string,
    lancamento: number,
    genero: string
    pontuacao:number
}

enum Genero {
    ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
const filme =((nome:string, lancamento:number, genero:string, pontuacao:number): filmeEscohido =>{
    const infoFilme: filmeEscohido ={nome, lancamento, genero, pontuacao}
    return infoFilme
})

console.log(filme("O Som do Silêncio",2019, Genero.DRAMA, 7.5))