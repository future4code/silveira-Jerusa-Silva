function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ): string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "mais de 5 anos, renove" : "menos 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "mais de 10 anos, renove" : "menod de 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "mais de 15 anos, renove" : "menos de 15 anos"
       
       }else {
           return "error"
       }
   }

   console.log(checaRenovacaoRG(2022, 1988, 1957))