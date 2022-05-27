const frase = ((nome: string, dataDeAniversario: string) : string => {
    const data:string[] = dataDeAniversario.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês de ${data[1]} do ano de ${data[2]}`;
});

console.log(frase("Jerusa","04/agosto/1988"))
