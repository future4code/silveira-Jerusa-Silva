type DadosDosClientes ={
    clente:string,
    saldoTotal: number,
    debitos:number[]
}

const clientes = [
    // entrada

	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }


]

const negativados =(() =>{
    const filtroClientes = clientes.filter(({saldoTotal,debitos}) =>{
        return debitos.reduce((saldo, valorTotal)=>{
            return saldo + valorTotal
        }, 0) > saldoTotal
    })
    return filtroClientes
})

console.log(negativados())