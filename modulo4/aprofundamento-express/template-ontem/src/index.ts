import express from "express";
import cors from "cors";
import {fazerLista} from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Exercicio 1

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

// Exercicio 2 e 3

app.get("/lista", (req,res) =>{
  res.send (fazerLista)
})

//Exercício 4 

app.get("/completa", (req,res) =>{
  const completed = fazerLista.filter((tarefa) =>{
    return tarefa.completed === true
  })
  res.send(completed)
})

//Exercício 5

app.post ("/criar", (req, res)=>{
  const criarAFazer = {
    userId: Date.now().toString(),
    id: Date.now(), toString(),
    title: req.body.title,
    completed: req.body.completed

  }
  console.log(req.body)
  if(!req.body){
    throw new Error ("Não tem body")
  } if ( typeof req.body.title !== "string")
   throw new Error ("Título")

   const fazerLista = [...fazerLista, criarAFazer]

  res.status(200).send({novaTarefa})
})

//Exercício 6
//Exercício 7

app.delete("/lista:Id", (req, res) =>{
  const Id = Number (req.params.Id)
  const novaLista = fazerLista.filter((tarefa) =>{
    return tarefa.id !== Id
  })
  res.status(220).send(novaLista)
})