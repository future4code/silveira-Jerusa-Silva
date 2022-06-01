import express, {Request, Response} from 'express';
import { papelaria } from './data';

const app = express()
app.use(express.json())

type ProdutosDisponiveis ={
    id:number,
    name:string,
    price:number
}

// Exercício 1

app.get("/test", (req,res) =>{
    res.status(200).send(" A API está funcional. ")
})

// Exercício 3

app.post ("/criarproduto", (req, res) =>{
    let nome = req.body.name
    let price = req.body.price

    let produto: ProdutosDisponiveis = {
        id:Date.now(),
        name: nome,
        price: price
    }
    let ArrayAtualizado = [...papelaria, produto]
     res.status(201).send(ArrayAtualizado)
})

// Exercício 4

app.get("/retornaprodutos", (req, res) =>{
    res.status(200).send(papelaria)
})

//Exercício 5
app.put("/editapreco/:id", (req, res) =>{
    const id = Number(req.params.id)
    const body = req.body.price

    papelaria.filter((item)=>{
        return item.id === id
    })
    .map ((item)=>{
        item.price=body
        return item
    })

    res.status(201).send(papelaria)
})




 