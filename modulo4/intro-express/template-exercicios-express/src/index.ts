import express from "express";
import cors from "cors";





const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () =>{
    console.log(`Está rodando http://localhost:3003`)
});


//Exercício 1

app.get("/", (req, res)=>{
    res.send ("Hello from Express")
});

//Exercício 2

type buscaUsuarios = {
    id: number,
    name: string,
    phone:number,
    email: string,
    website: string
}


// Exercicío 3

const usuarios: buscaUsuarios = [
    {
        id: 1,
        name: "Jose Silveira",
        phone: "91234-5678",
        email:"josesilveira@silveira.com"
    },
    {
        id: 2,
        name: "Alice Silva",
        phone: "99952-5678",
        email:"alicesilva@silveira.com"
    },
    {
        id: 3,
        name: "Maria Antônia",
        phone: "91234-1111",
        email:"mariaantonia@silveira.com"
    },
    {
        id: 4,
        name: "Alexandre Andrade",
        phone: "91234-1711",
        email:"alexandreandrade@silveira.com"
    },

];

//Exercício 4

app.get("/usuarios", (req, res) => {
    res.status(200).send(usuarios);
});

//Exercício  5

type buscaPosts ={
    id: number,
    title: string,
    body: string,
    userId: number
}

// Exercicío 6

const posts: buscaPosts = [
    {
        id: 1,
        title: "Primeira",
        body:"Introdução a APIS e Express",
        userId: 1
    },
    {
        id: 2,
        title: "Segunda",
        body:"Introdução a APIS e Express",
        userId: 2
    },
    {
        id: 3,
        title: "Terceira",
        body:"Introdução a APIS e Express",
        userId: 3
    },
    {
        id: 4,
        title: "Quarta",
        body:"Introdução a APIS e Express",
        userId: 4
    },
]

//Exercício 7

app.get("/posts", (req, res) => {
    const post: buscaPosts =posts.map((publicacao) => {
        return publicacao;
    })
});

res.status(200).send(post);

//Exercício 8

