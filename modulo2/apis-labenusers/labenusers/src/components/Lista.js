import axios from "axios";
import React from "react";
import styled from "styled-components";


const ListaContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

` 


export default class Input extends React.Component {
state = {
  listaUser: []
}

componentDidMount(){
  this.getUsers();
}

componentDidUpdate(){
  this.getUsers();
}

deleteUser = (id) => {
  const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id'

  axios.delete(URL + id, {
    headers: {
      Authorization: "jerusa-silva-silveira"
    }
  })
  .then(()=> alert("Usuário deletado."))
  .catch(()=> alert("Não foi possível deletar."))

}

getUsers = () => {
  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
    headers: {
      Authorization: "jerusa-silva-silveira"
    }
  }
  ).then((res) => {
      this.setState({listaUser: res.data})
   }).catch((err => {
     alert("não foi possível")
   }))

  }

  render() {
    const ListaUsuarios = this.state.listaUser.map((user) => {
      return <ListaContainer>
        <li> {user.name} </li>        
        <button onClick={()=> this.deleteUser(user.id)} >Excluir</button>
      </ListaContainer>
    } )

    return <div>     
      {ListaUsuarios}
      </div>;
  }
}