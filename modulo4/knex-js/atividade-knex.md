### Exercício 1

a) Utilizando o raw, ele da como resposta as informações que estamos buscando.

b)

```

const getsearchActorByName = async (name:string): Promise<void> =>{
const result = await connection.raw(`
SELECT * FROM Actor
WHERE name = "${name}"

`)
return result [0]
}

```

c)
```
const getCountActorsByGender = async(): Promise <void> =>{
const result = await connection.raw(`
SELECT COUNT (*), gender
FROM Actor
GROUP BY gender
`)

return result[0]
}

```

###Exercício 2

a)
```
const updateActorSalary = async (id: string, salary:number): Promise <void> =>{
await connection ("Actor")
.update ({salary: salary})
.where ({ida:id})
}

```

b)

```
const deleteActor = async (id: string): Promise<void> =>{
await connection ("Actor")
.delete()
.where({id: id})
}
```


c)

```
const getAvgSalary = async(gender: string) : Promise <any> => {
const result = await connection ("Actor")
.avg ("salary as salaryAverage")
.where ({gender})

return result [0]
}
```

###Exercício 3

a)
```
app.get("/actor/:id, async (req: Request, res: Response) =>{
try {
   res.satus(200).send(await getActorById(req.params.id))
}
   catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message)
}
})

const getActorById = async (id: string): Promise <void> =>{
   const result = await connection ("Actor")
    .where

return result [0]
}
```

b)

```
app.get ("/actor", async (req: Request, res: Responde) => {

  try{
     const gender = String(req.query.gender)
     res.status(200).send(await getActorCountByGender(gender))
}
cath (err: any) {
  res.status(500).send(err.sqlMessage || err.message)
}
})
 
const getActorCountByGender = async (gender: string): Primise <any> =>{
  const result = await connection ("Actor")
   .count ()
   .where ({gender})

return result

}


```


###Exercício 4

a)
```
app.put("/actors", async (req: Request, res: Response) =>{
 try{
   const id: string = req.body.id
   const salary: number = req.body.salary
   await updateActorSalary (id, salary)
   res.status(200).send(`Salario do ator ${id} atualizado com sucesso`)
}
})

const updateActorSalary = asynd (id: string, salary: number): Promise <void> =>{
   await connection ("Actor")
    .update({salary})
    .where({id})

}
```

b)
```
app.delete ("/actors/:id", async (req: Request, res: Response) => {

 try{
   const id = req.params.id
   await deleteActor(id)
   res.status(200).send(`Ator ${id} deletado com sucesso`)
}
  catch (err: any) {
  res.status(500).send(err.sqlMessage || err.mesage)
}
})

const deleteActor = async (id: string): Promise <void> =>{
  await connection ("Actor")
   .delete()
   .where ({id})
```