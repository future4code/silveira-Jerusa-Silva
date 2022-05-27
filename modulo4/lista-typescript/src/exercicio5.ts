type DadosAdmin ={
    name: string,
    email: string,
    role: string
}

const dadosDoUsuario: DadosAdmin [] =[
    
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
        {name: "Aline", email: "aline@email.com", role: "user"},
        {name: "Jéssica", email: "jessica@email.com", role: "user"},  
        {name: "Adilson", email: "adilson@email.com", role: "user"},  
        {name: "Carina", email: "carina@email.com", role: "admin"}      
    
]

const emailAdmin =(()=>{
    const filtroDadosUsuarios = dadosDoUsuario.filter(({role})=>{
        return role==="admin"
    }).map(({email})=>{
        return email
    })
    return filtroDadosUsuarios
})

console.log(emailAdmin())