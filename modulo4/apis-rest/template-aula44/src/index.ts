import express, { Request, Response } from 'express';
import cors from 'cors';
import {User, users} from "./data"


const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

//Exercício 1 - Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível no data.ts

//a) Metodo GET
//b) Entidade USERS

app.get("/users", (req: Request, res: Response) =>{
  let codeErro = 400

  try {
    if(!users) {
      codeErro = 400
      throw new Error ("Lista não encontrada. Tente novamente")
    }
    res.status(200).send(users)
  } catch (error: any){
    res.status(codeErro).send(error.message)
  }
})

// Exercício 2

//a) Utilizei Path Params, pois é uma continuação pedindo um usuário especifico, evitando também o conflito com o endpoint anterior.

  app.get("/users/:type", (req: Request, res: Response) =>{
    const typeUser = req.params.type
    const usersType = users.filter(user =>{

    })
    res.status(200).send(usersType)
  })


  // - **Exercício 3**
    
  //a) Para fazer busca no mesmo conjunto, por isso utilizei Query Params.

  app.get("/user",(req: Request, res: Response) =>{
    let codeErro: number = 400
    try{
      const name: string = req.query.name as string
      if (!name) {
        codeErro = 422
        throw new Error ("Não foi enviado nome")
      }
      const user: User | undefined = users.find(user => user.name===name)
      if(!user){
        codeErro = 404
        throw new Error ("Usuário não encontrado")
      }
      res.status(200).send(user)
    } catch (error: any){
      res.status(codeErro).send({message: error.message})
    }
  })

//  Exercício 4
// Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. Comecemos criando um usuário na nossa lista.
// Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.

// a. Não houve mudança. 
// b. Não. Como não foi solicitado a modificação de um recurso existente, não acho ele apropriado. 

app.put("/users", (req: Request, res: Response) =>{
  let codeErro: number = 400
  try{
    const {name, email, type, age} = req.body
    if(!name || !email || !type || !age) {
      codeErro = 422
      throw new Error ("Dados incompletos")
    }
    if(type !== "ADMIN" && type !== "NORMAL") {
      codeErro = 422
      throw new Error ("Inválido! É necessário que seja ADMIN ou NORMAL")
    }
    if(typeof age !== "number" || age <= 0){
      codeErro = 422
      throw new Error ("Idade deve ser maior que zero.")
    }
    const id = Date.now()
    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }
    users.push(newUser)
    res.status(201).send(users)
  } catch (error:any) {
    res.status(codeErro).send({messagem:error.message})
  }
})
