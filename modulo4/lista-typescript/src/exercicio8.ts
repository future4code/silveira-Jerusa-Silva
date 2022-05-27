const anoAtual: number = 2022

function checarRenovacaoDoRG(anoDeNascimento:number, anoDeEmissao:number):boolean {
    let idade:number = anoAtual - anoDeNascimento
    let tempoRG: number = anoAtual - anoDeEmissao

    if(idade <= 20){
        return tempoRG >= 5 ? true:false
    }else if (idade > 20 || idade <= 50){
        return tempoRG >= 10 ? true:false
    }else if (idade > 50){
        return tempoRG >=15 ? true:false
    } else{
        return false
    }
}

console.log(checarRenovacaoDoRG(1988,2008))