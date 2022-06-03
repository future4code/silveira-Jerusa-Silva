export type Users ={
    name: string,
    cpf: string,
    datadenascimento: Date,
    saldo: number,
    transacoes: Extrato[]

}

export type Extrato ={
    valor: number,
    data: string | number | Date,
    descricao: string
}

export const users: Users[] = [
    {
    name:"Maria",
    cpf: "123.456.789.10",
    datadenascimento: new Date("1988-10-04"),
    saldo: 50,
    transacoes: [{
        valor: 100,
        data:"03/06/2022",
        descricao: "Pix"
    }]
},
{
    name:"Alice",
    cpf: "123.456.789.11",
    datadenascimento: new Date("1990-08-04"),
    saldo: 1000,
    transacoes: [{
        valor: 255,
        data:"03/01/2022",
        descricao: "Depósito em dinheiro"
    }]
},
{
    name:"João",
    cpf: "123.456.789.12",
    datadenascimento: new Date("2000-05-04"),
    saldo: 250,
    transacoes: [{
        valor: 50,
        data:"03/02/2022",
        descricao: "Pix"
    }]
},
{
    name:"Luiz",
    cpf: "131.131.131.13",
    datadenascimento: new Date("2013-12-13"),
    saldo: 13,
    transacoes: [{
        valor:13,
        data:"13/01/2022",
        descricao: "Depósito em dinheiro"
    }]
},
{
    name:"Sol",
    cpf: "123.456.789.14",
    datadenascimento: new Date("1958-03-04"),
    saldo: 9000,
    transacoes: [{
        valor: 1000,
        data:"01/06/2022",
        descricao: "Pix"
    }]
}
]