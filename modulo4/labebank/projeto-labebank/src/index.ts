import express, { Request, Response } from 'express'
import cors from 'cors'
import {Extrato, users, Users} from "./data"



const app = express();
app.use(express.json());
app.use(cors());

 //Para testar se o servidor está tratando os endpoints corretamente
 app.get("/ping", (req: Request, res: Response) => {
   res.status(200).send("pong!")
 })

 app.listen(3003, () => {
  console.log('Server is running at port 3003')
 })
 // fim do teste

 // Projeto da semana: IWFS: Sistema Bancário.

// criar conta

 app.post("/user", (req: Request, res:Response) =>{
  let codeErro = 422
  try{
    const { name, cpf, datadenascimento, saldo, transacoes} = req.body
    const adicionarUser: Users ={
      name,
      cpf,
      datadenascimento: new Date (datadenascimento),
      saldo: 0,
      transacoes
    }

    let novaData: number = new Date().getFullYear()
    let idade = novaData - adicionarUser.datadenascimento.getFullYear()

    if(idade < 18){
      codeErro = 404
      throw new Error ("Para criar uma conta é necessário ter no mínimo 18 anos")
    }
    const cpfCadastrado = users.find((cpfuser)=>{
      return cpfuser.cpf === cpf
    })
    console.log(cpfCadastrado)
    if(cpfCadastrado){
      codeErro = 404
      throw new Error ("CPF já cadastrado")
    }
    users.push(adicionarUser)
    res.status(200).send(users)
  } catch (error: any) {
    res.status(codeErro).send({message:error.message})
  }
})


// pegar saldo


app.get ("/user/saldo", (req: Request, res: Response)=>{
  let codeErro: number = 422
  try{
    const nomeUser = req.query.name
    const cpfUser = req.query.cpf

    const filtrar = users.filter((user) =>{
      return user.name === nomeUser
    })
    const procurarPorNome= users.find((name)=>{
      return name.name === nomeUser
    })
    const procurarPorCpf = users.find((cpf)=>{
      return cpf.cpf === cpfUser
    }
    )
    if (!procurarPorNome || procurarPorCpf){
      codeErro = 422
      throw new Error ("Nome ou CPF não encontrados")
    }
    res.status(200).send({saldo: filtrar[0].saldo})
  } catch (error: any){
    res.status(codeErro).send({message: error.message})
  }
})

// adicionar saldo

app.put("/user", (req: Request, res: Response) =>{
const nomeUser = req.query.name
const cpfUser =req.query.cpf

let filtrarUser = users.filter((user) =>{
  return user.name ===nomeUser
}) [0]
const {valor, data, descricao} = req.body
const adicionarValor: Extrato ={
  valor,
  data,
  descricao
}
filtrarUser.saldo += adicionarValor.valor
filtrarUser?.transacoes.push(adicionarValor)
res.status(200).send(filtrarUser)
})

// pagar conta

// transferência interna

app.get("/user/cpf", (req: Request, res: Response) =>{
  let codeErro: number = 422
  try{
    const cpfUser = req.query.cpf

    const filtrar: any = users.filter((user) =>{
      return user.cpf ===cpfUser
    })
    const procurarPorCpf = users.find((cpf) =>{
      return cpf.cpf === cpfUser
    })
    if(!procurarPorCpf){
      codeErro = 422
      throw new Error ("CPF inválido")
    }
    res.status(200).send({saldo: filtrar[0].saldo})
  } catch (error: any) {
    res.status(codeErro).send({message: error.message})
  }
})